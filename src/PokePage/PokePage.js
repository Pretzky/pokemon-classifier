import React, { Component } from 'react';
import { findMon } from '../Data/DataManipulation';
import {
  PokePageWrapper,
  Column,
  MonImagesWrapper,
  MonMainInfo,
  Types,
  SmallTypes,
  EvoGroupWrapper
} from './style';

class PokePage extends Component {
  render() {
    const nonShinyUrl = this.props.mon ? "https://www.serebii.net/swordshield/pokemon/" + this.props.mon.nationalNum + ".png" : "";
    const shinyUrl = this.props.mon ? "https://www.serebii.net/Shiny/SWSH/" + this.props.mon.nationalNum + ".png" : "";
    if (this.props.mon) {
      return (
        <PokePageWrapper>
          <Column>
            <MonMainInfo>
              <span>#{this.props.mon.localNum}</span>
              <span>{this.props.mon.name}</span>
              <span>National #{this.props.mon.nationalNum}</span>
            </MonMainInfo>
            <Types>
              {this.props.mon.types.map((type, i) => {
                  const ltype = type.toLowerCase();
                  const typeUrl = "Images/Types/large/" + ltype + ".png";
                  return <img key={i} alt={type} src={typeUrl} />
                })}
            </Types>
            <MonImagesWrapper>
              <img height="248px" width="248px" alt={this.props.mon.name} src={nonShinyUrl} />
              <img height="248px" width="248px" alt={this.props.mon.name} src={shinyUrl} />
            </MonImagesWrapper>
          </Column>
          <Column>
            <EvoGroupWrapper>
              Evolution Chain
              <div>
                {this.props.mon.evolutionChain.map((m, i) => {
                  const mon = findMon(m);
                  const imageUrl = mon ? "https://www.serebii.net/swordshield/pokemon/" + mon.nationalNum + ".png" : "";
                  return (
                    <div key={i}>
                      {m}
                      <img className="image" height="144px" width="144px" alt={"Missing"} src={imageUrl}/>
                      <SmallTypes>
                        {mon.types.map((type, j) => {
                            const ltype = type.toLowerCase();
                            const typeUrl = "Images/Types/large/" + ltype + ".png";
                            return <img key={j} alt={type} src={typeUrl} />
                          })}
                      </SmallTypes>
                    </div>
                  );
                })}
              </div>
            </EvoGroupWrapper>
          </Column>
        </PokePageWrapper>
      );
    } else {
      return (
        null
      );
    }
  }
}

export default PokePage;
