import React, { Component } from 'react';
import Types from '../../Data/Types';
import {
  FiltersWrapper,
  TypesHeader,
  TypesWrapper,
  Type,
  FilterButton
} from './style';

class Filters extends Component {
  state = { selectedTypes: [] }

  toggleType = (e, type) => {
    e.preventDefault();
    const types = this.state.selectedTypes;
    if (types.includes(type)) types.splice(types.indexOf(type), 1);
    else types.push(type);
    this.setState({ selectedTypes: types });
  }

  setFilters = (e) => {
    e.preventDefault();
    const newFilters = {
      name: this.props.filters.name,
      types: this.state.selectedTypes
    }
    this.props.setFilters(newFilters);
    this.props.hideFilters();
  }

  render() {
    return (
      <FiltersWrapper>
        <TypesHeader>Types</TypesHeader>
        <TypesWrapper>
          {Types.map((type, i) => {
            const ltype = type.toLowerCase();
            const typeUrl = "Images/Types/large/" + ltype + ".png";
            if (this.state.selectedTypes.includes(type)) {
              return <Type selected onClick={(e) => {this.toggleType(e, type)}} key={i} alt={type} src={typeUrl} />
            }
            else {
              return <Type onClick={(e) => {this.toggleType(e, type)}} key={i} alt={type} src={typeUrl} />
            }
          })}
        </TypesWrapper>
        <FilterButton onClick={(e) => this.setFilters(e)}>Save Filters</FilterButton>
      </FiltersWrapper>
    );
  }
}

export default Filters;