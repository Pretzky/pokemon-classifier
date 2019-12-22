import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';

export async function onRender(userData, incCount, decCount, getCurrentGroup, getCounting, getOnRenderCount) {
  try {
    let webcamElement = document.getElementById('webcam');
    const classifier = knnClassifier.create();
    if (localStorage.getItem('classifier')) {
      // Load the classifier dataset from localstorage
      let dataset = localStorage.getItem("classifier")
      let tensorObj = JSON.parse(dataset)
      // Convert back to tensor
      Object.keys(tensorObj).forEach((key) => {
        tensorObj[key] = tf.tensor(tensorObj[key], [tensorObj[key].length / 1024, 1024])
      })
      classifier.setClassifierDataset(tensorObj);
    }
    let net;

    // Set the classes
    let classes = ["Egg", "Not Egg"];

    // Load the model.
    net = await mobilenet.load();

    const thisOnRenderCount = getOnRenderCount();
    // Create an object from Tensorflow.js data API which could capture image 
    // from the web camera as Tensor.
    while (!webcamElement) {
      await tf.nextFrame();
      webcamElement = document.getElementById('webcam');
    }
    const webcam = await tf.data.webcam(webcamElement);

    // Reads an image from the webcam and associates it with a specific class
    // index.
    const addExample = async classId => {
      // Capture an image from the web camera.
      const img = await webcam.capture();

      // Get the intermediate activation of MobileNet 'conv_preds' and pass that
      // to the KNN classifier.
      const activation = net.infer(img, 'conv_preds');

      // Pass the intermediate activation to the classifier.
      classifier.addExample(activation, classId);

      // Dispose the tensor to release the memory.
      img.dispose();

      // Stick the classifier's dataset into localstorage
      let dataset = classifier.getClassifierDataset()
      var datasetObj = {}
      Object.keys(dataset).forEach((key) => {
        let data = dataset[key].dataSync();
        // Use Array.from() so when JSON.stringify() it converts to an array string e.g [0.1,-0.2...] 
        // instead of object e.g {0:"0.1", 1:"-0.2"...}
        datasetObj[key] = Array.from(data); 
      });
      let jsonStr = JSON.stringify(datasetObj)
      localStorage.setItem("classifier", jsonStr);
    };

    // When clicking a button, add an example for that class.
    if (document.getElementById('trainegg') && document.getElementById('trainnotegg')) {
      document.getElementById('trainegg').addEventListener('click', () => addExample(0));
      document.getElementById('trainnotegg').addEventListener('click', () => addExample(1));
    }

    let prevPrediction = "";
    while (thisOnRenderCount === getOnRenderCount()) {
      if (classifier.getNumClasses() > 0) {
        const img = await webcam.capture();

        // Get the activation from mobilenet from the webcam.
        const activation = net.infer(img, 'conv_preds');
        // Get the most likely class and confidences from the classifier module.
        const result = await classifier.predictClass(activation);
        
        // console.log(result.confidences[result.label]);
        if (document.getElementById('console')) {
          document.getElementById('console').innerText = `
            Prediction: ${classes[result.label]}\n
            Probability: ${result.confidences[result.label]}\n
            Example Count: ${classifier.getClassExampleCount()[result.label]}
          `;
        }
        
        // If prediction changes, wait 60 tf frames before letting it change again
        if (prevPrediction !== result.label) {
          if (classes[prevPrediction] === "Not Egg" && getCounting()) {
            incCount(getCurrentGroup());
          }
          for (var i = 0; i < 60; i++) {
            await tf.nextFrame();
          }
        }
        prevPrediction = result.label;
        // Dispose the tensor to release the memory.
        img.dispose();
      }
      
      await tf.nextFrame();
    }
  }
  catch (e) {
    return;
  }
}