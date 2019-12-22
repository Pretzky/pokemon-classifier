import React, { Component } from 'react';
import { onRender } from './OnRender';
import PokeCard from '../PokeCard/PokeCard';
import {
  CounterWrapper,
  LeftArea,
  MiddleArea,
  RightArea,
  EvoGroupArea,
  SelectedMonArea,
  TrainButton,
  ButtonWrapper,
  ConstantDisplay,
  TrainingDisplay,
  TrainingDisplayRight
} from './style';
import { arraysEqual } from '../Utilities/ArraysEqual';

class Counter extends Component {
  state = { counting: false, expanded: false, onRenderCount: 0 }
  classes = ["Sparkles", "Not Sparkles"];

  startCounting = () => {
    this.setState({ counting: true });
  }

  stopCounting = () => {
    this.setState({ counting: false });
  }

  getCurrentGroup = () => {
    return this.props.countingMon.evolutionChain;
  }

  getCounting = () => {
    return this.state.counting;
  }

  getOnRenderCount = () => {
    return this.state.onRenderCount;
  }

  toggleExpanded = (e) => {
    e.preventDefault();
    const current = this.state.expanded;
    this.setState({ expanded: !current });
  }

  componentDidMount() {
    onRender(this.props.userData, this.props.incCount, this.props.decCount, this.getCurrentGroup, this.getCounting, this.getOnRenderCount);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expanded != this.state.expanded) {
      this.setState({ onRenderCount: this.state.onRenderCount + 1 });
      onRender(this.props.userData, this.props.incCount, this.props.decCount, this.getCurrentGroup, this.getCounting, this.getOnRenderCount);
    }
  }

  render() {
    if (this.props.userData && this.props.userData.groups) {
      let countingGroup = this.props.countingMon ? this.props.userData.groups.find((g) => {
        return arraysEqual(g.group, this.props.countingMon.evolutionChain);
      }) : null;
      let count = 
        countingGroup ? countingGroup.count : null;
      let monSelected = false;
      if (this.props.countingMon !== null) monSelected = true;
      if (this.state.expanded) {
        return (
          <CounterWrapper expanded>
            <TrainingDisplay>
              <video autoPlay playsInline muted id="webcam" width="464" height="464"></video>
              <TrainingDisplayRight>
                <div id="console"></div>
                Train:
                <ButtonWrapper>
                  <TrainButton id="trainegg">Egg</TrainButton>
                  <TrainButton id="trainnotegg">Not Egg</TrainButton>
                </ButtonWrapper>
              </TrainingDisplayRight>
            </TrainingDisplay>
            <ConstantDisplay>
              <LeftArea>
                <SelectedMonArea monSelected={monSelected}>
                  {this.props.countingMon ? <PokeCard mon={this.props.countingMon} selectMon={() => {}}/> : "Drag pokemon here"}
                </SelectedMonArea>
                <EvoGroupArea>
                  {this.props.countingMon ? "Group:\n" + this.props.countingMon.evolutionChain.map((p) => {return " " + p}) : ""}
                </EvoGroupArea>
              </LeftArea>
              <MiddleArea>
                {this.state.counting ? "Count: " + count : "Not counting"}
                <button onClick={this.startCounting}>Start Counting</button>
                <br />
                <button onClick={this.stopCounting}>Stop Counting</button>
              </MiddleArea>
              <RightArea>
                <button onClick={(e) => this.toggleExpanded(e)}>Un-expand</button>
              </RightArea>
            </ConstantDisplay>
          </CounterWrapper>
        );
      }
      else {
        return (
          <CounterWrapper>
            <ConstantDisplay>
              <LeftArea>
                <SelectedMonArea monSelected={monSelected}>
                  {this.props.countingMon ? <PokeCard mon={this.props.countingMon} selectMon={() => {}}/> : "Drag pokemon here"}
                </SelectedMonArea>
                <EvoGroupArea>
                  {this.props.countingMon ? "Group:\n" + this.props.countingMon.evolutionChain.map((p) => {return " " + p}) : ""}
                </EvoGroupArea>
              </LeftArea>
              <MiddleArea>
                {this.state.counting ? "Count: " + count : "Not counting"}
                <button onClick={this.startCounting}>Start Counting</button>
                <br />
                <button onClick={this.stopCounting}>Stop Counting</button>
              </MiddleArea>
              <RightArea>
                <button onClick={(e) => this.toggleExpanded(e)}>Expand</button>
                <video autoPlay playsInline muted id="webcam" width="160px" height="100px"></video>
              </RightArea>
            </ConstantDisplay>
          </CounterWrapper>
        );
      }
    }
    else {
      return null;
    }
  }
}

export default Counter;
