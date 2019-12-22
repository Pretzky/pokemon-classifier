import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Sidebar from './Sidebar/Sidebar';
import PokeCard from './PokeCard/PokeCard';
import PokemonData from './Data/PokemonData';
import { evoGroups } from './Data/DataManipulation';
import { arraysEqual } from './Utilities/ArraysEqual';
import { Route } from 'react-router-dom';


class App extends Component {
  state = { userData: null, draggingMon: null, countingMon: null, filters: {
    name: "",
    types: []
  } }
  componentDidMount(){
    let userData = {};
    if (localStorage.getItem('userData')) {
      userData = localStorage.getItem("userData");
    }
    else {
      let userGroupData = evoGroups().map(g => {return({
        group: g,
        count: 0,
        haveShiny: false
      })});
      userData = {
        groups: userGroupData
      }
    }
    this.setState({ userData: userData });
  }

  incCount = (g) => {
    let data = this.state.userData.groups;
    let group = data.find((gr) => {
      return arraysEqual(gr.group, g);
    });
    if (group) {
      group.count = group.count + 1;
    }
    this.setState({ userData: { groups: data } });
  };

  decCount = (g) => {
    let data = this.state.userData.groups;
    let group = data.find((gr) => {
      return arraysEqual(gr.group, g);
    });
    if (group) {
      group.count = group.count - 1;
    }
    this.setState({ userData: { groups: data } });
  };

  selectMon = (mon) => {
    this.setState({ draggingMon: mon });
  };

  countMon = (mon) => {
    this.setState({ countingMon: mon });
  }

  onSearchChange = (e) => {
    const currentState = this.state;
    const newState = { filters: {
      name: e.target.value,
      types: currentState.filters.types
    } };
    this.setState(newState);
  }

  setFilters = (newFilters) => {
    this.setState({ filters: newFilters });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() =>
          <>
            <Sidebar
              draggingMon={this.state.draggingMon}
              selectMon={this.selectMon}
              onSearchChange={this.onSearchChange}
              setFilters={this.setFilters} 
              filters={this.state.filters}>
                {PokemonData.map((mon, i) => {
                  if (!mon.name.toLowerCase().includes(this.state.filters.name.toLowerCase())) return null;

                  let hasTypeFilters = true;
                  this.state.filters.types.forEach(type => {
                    if (!mon.types.includes(type)) {
                      hasTypeFilters = false;
                      return;
                    }
                  })
                  if (!hasTypeFilters) return null;

                  return <PokeCard key={i} mon={mon} selectMon={this.selectMon} draggable={false}/>
                })}
            </Sidebar>
            <Counter 
              userData={this.state.userData} 
              incCount={this.incCount}
              decCount={this.decCount}
              countingMon={this.state.countingMon}
            />
            {this.state.draggingMon && 
              <PokeCard 
                mon={this.state.draggingMon}
                selectMon={this.selectMon}
                countMon={this.countMon}
                draggable
              />}
          </>
        } />
      </div>
    );
  }
}

export default App;
