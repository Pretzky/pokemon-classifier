import React, { Component } from 'react';
import PokemonData from '../Data/PokemonData';
import PokeCard from '../PokeCard/PokeCard';
import Filters from './Filters/Filters';
import {
  WrapperWithFilters,
  SidebarWrapper,
  PokemonWrapper,
  SidebarHeader,
  SearchBar,
  FilterButton
} from './style';

class Sidebar extends Component {
  state = { showFilters: false }

  hideFilters = () => {
    this.setState({ showFilters: false });
  }

  toggleFilters = (e) => {
    e.preventDefault();
    const currentState = this.state;
    this.setState({ showFilters: !currentState.showFilters });
  }

  render() {
    return (
      <WrapperWithFilters>
        <SidebarWrapper>
          <SidebarHeader>
            <SearchBar onInputCapture={(e) => this.props.onSearchChange(e)} type="text" />
            <FilterButton onClick={(e) => this.toggleFilters(e)}>></FilterButton>
          </SidebarHeader>
          <PokemonWrapper>
            {this.props.children}
          </PokemonWrapper>
        </SidebarWrapper>
        {this.state.showFilters && 
          <Filters filters={this.props.filters} hideFilters={this.hideFilters} setFilters={this.props.setFilters} />
        }
      </WrapperWithFilters>
    );
  }
}

export default Sidebar;