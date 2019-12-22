import React, { Component } from 'react';
import Draggable from './Helpers/Draggable';
import {
  CardWrapper,
  LeftCardWrapper,
  RightCardWrapper,
  TopWrapper,
  BottomWrapper,
  LocalNum,
  Type,
  Name
} from './style';


class PokeCard extends Component {
  state = { selected: false, x: 0, y: 0 }

  _move = (x, y) => this.setState({ x, y });

  render() {
    const imgUrl = "https://www.serebii.net/Shiny/SWSH/" + this.props.mon.nationalNum + ".png";
    const id = this.props.mon.name + "Card";
    if (this.props.draggable) {
      return (
        <Draggable 
          x={this.state.x} 
          y={this.state.y}
          tx1={344}
          tx2={635.188}
          ty1={150}
          ty2={82.8}
          xSize={288}
          ySize={64}
          onMove={this._move} 
          draggingMon={this.props.mon}
          dragMon={this.props.dragMon}
          selectMon={this.props.selectMon}
          countMon={this.props.countMon}
          xOffset={-700} 
          yOffset={-30}
        >
          <CardWrapper id={id} >
            <LeftCardWrapper>
              <img height="65px" width="65px" alt={this.props.mon.name} src={imgUrl} />
            </LeftCardWrapper>
            <RightCardWrapper>
              <TopWrapper>
                <LocalNum>{"#" + this.props.mon.localNum}</LocalNum>
                <Name>{this.props.mon.name}</Name>
              </TopWrapper>
              <BottomWrapper>
                {this.props.mon.types.map((type, i) => {
                  const ltype = type.toLowerCase();
                  const typeUrl = "Images/Types/large/" + ltype + ".png";
                  return <Type key={i} alt={type} src={typeUrl} />
                })}
              </BottomWrapper>
            </RightCardWrapper>
          </CardWrapper>
        </Draggable>
      );
    }
    else {
      return (
        <CardWrapper id={id} onMouseDown={() => {this.props.dragMon(this.props.mon)}}>
          <LeftCardWrapper>
            <img height="65px" width="65px" alt={this.props.mon.name} src={imgUrl} />
          </LeftCardWrapper>
          <RightCardWrapper>
            <TopWrapper>
              <LocalNum>{"#" + this.props.mon.localNum}</LocalNum>
              <Name>{this.props.mon.name}</Name>
            </TopWrapper>
            <BottomWrapper>
              {this.props.mon.types.map((type, i) => {
                const ltype = type.toLowerCase();
                const typeUrl = "Images/Types/large/" + ltype + ".png";
                return <Type key={i} alt={type} src={typeUrl} />
              })}
            </BottomWrapper>
          </RightCardWrapper>
        </CardWrapper>
      );
    }
  }
}

export default PokeCard;