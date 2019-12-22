import PokemonData from './PokemonData';
import { arraysEqual } from '../Utilities/ArraysEqual';

// Gets all unique evolution chains from PokemonData
export const evoGroups = () => {
  let groups = [];
  PokemonData.forEach(mon => {
    if (!groups.some(g => {
      return arraysEqual(g, mon.evolutionChain);
    })) {
      groups.push(mon.evolutionChain);
    }
  });
  return groups;
};

export const findMon = (name) => {
  var foundMon = null;
  PokemonData.forEach(mon => {
    if (mon.name === name) {
      foundMon = mon;
      return;
    }
  })
  return foundMon;
}