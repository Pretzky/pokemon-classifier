import React from 'react';
import { throttle, simulate } from './Helpers';
import { DraggableWrapper } from '../style';

class Draggable extends React.PureComponent {
  _relX = 0;
  _relY = 0;
  _ref = React.createRef();
  size = {left: 0, top: 0};

  _onMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    const {scrollLeft, scrollTop, clientLeft, clientTop} = document.body;
    // Try to avoid calling `getBoundingClientRect` if you know the size
    // of the moving element from the beginning. It forces reflow and is
    // the laggiest part of the code right now. Luckily it's called only
    // once per click.
    // const newsize = this._ref.current.getBoundingClientRect();
    this.size.left = 350; //newsize.left;
    this.size.top = 16; //newsize.top;
    // const {left, top} = {left: 288, top: 32};
    this._relX = event.pageX - (this.size.left + scrollLeft - clientLeft + this.props.xOffset);
    this._relY = event.pageY - (this.size.top + scrollTop - clientTop + this.props.yOffset);
    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('mouseup', this._onMouseUp);
    event.preventDefault();
  };

  _onMouseUp = (event) => {
    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('mouseup', this._onMouseUp);
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var tLeftContact = false;
    var tRightContact = false;
    var tTopContact = false;
    var tBottomContact = false;
    var contact = false;
    const x1 = this.props.x + 311.8;
    const x2 = this.props.x + this.props.xSize + 311.8;
    const y1 = this.props.y;
    const y2 = this.props.y + this.props.ySize;
    const tx1 = this.props.tx1;
    const tx2 = this.props.tx2;
    const ty1 = height - this.props.ty1;
    const ty2 = height - this.props.ty2;

    if (x2 >= tx1 && x2 <= tx2 && ((y2 >= ty1 && y2 <= ty2) || (y1 >= ty1 && y1 <= ty2)))
      tLeftContact = true;
    if (x1 >= tx1 && x1 <= tx2 && ((y2 >= ty1 && y2 <= ty2) || (y1 >= ty1 && y1 <= ty2)))
      tRightContact = true;
    if (y2 >= ty1 && y2 <= ty2 && ((x2 >= tx1 && x2 <= tx2) || (x1 >= tx1 && x1 <= tx2)))
      tTopContact = true;
    if (y1 >= ty1 && y1 <= ty2 && ((x2 >= tx1 && x2 <= tx2) || (x1 >= tx1 && x1 <= tx2)))
      tBottomContact = true;
    if (tLeftContact || tRightContact || tTopContact || tBottomContact)
      contact = true;
    if (contact) {
      this.props.countMon(this.props.draggingMon);
      this.props.selectMon(null);
    }
    else {
      this.props.selectMon(null);
    }

    event.preventDefault();
  };

  _onMouseMove = (event) => {
    this.props.onMove(
      event.pageX - this._relX,
      event.pageY - this._relY,
    );
    event.preventDefault();
  };

  _update = throttle(() => {
    const {x, y} = this.props;
    this._ref.current.style.transform = `translate(${x}px, ${y}px)`;
  });

  componentDidMount() {
    this._ref.current.addEventListener('mousedown', this._onMouseDown);
    this._update();
    simulate(document.getElementById("draggable"), 'mousedown');
  }

  componentDidUpdate() {
    this._update();
  }

  componentWillUnmount() {
    this._ref.current.removeEventListener('mousedown', this._onMouseDown);
    this._update.cancel();
  }

  render() {
    return (
      <DraggableWrapper id="draggable" ref={this._ref}>
        {this.props.children}
      </DraggableWrapper>
    );
  }
}

export default Draggable;