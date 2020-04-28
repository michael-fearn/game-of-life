import { useState, useCallback } from "react";

type Coord = [number, number];
type CoordDict<T> = { [coordinate: string]: T };
const hash = (coordinate: Coord) => String(coordinate);

const unHash = (coordinate: string): Coord =>
  coordinate.split(",").map(Number) as Coord;

const shiftCoordinate = (coordinate: Coord, shift: Coord): Coord => [
  coordinate[0] + shift[0],
  coordinate[1] + shift[1],
];

export const coordsToDict = (coordinates: Coord[]): CoordDict<boolean> =>
  Object.fromEntries(coordinates.map((coordinate) => [hash(coordinate), true]));

// refactor into something less smelly
export const getNeighborsByCoord = (dict: CoordDict<boolean>) => {
  const neighborsPositions: Coord[] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const neighbors: CoordDict<number> = {};
  for (const coordinateString in dict) {
    neighborsPositions.forEach((shift) => {
      const neighbor = hash(shiftCoordinate(unHash(coordinateString), shift));
      neighbors[neighbor] = neighbors[neighbor]
        ? (neighbors[neighbor] += 1)
        : 1;
    });
  }
  return neighbors;
};

export const getNextState = (dict: CoordDict<boolean>) => {
  const neighborsByCord = getNeighborsByCoord(dict);

  const nextState: CoordDict<boolean> = {};
  // const maxCoordsDist = [
  //   [0, 0],
  //   [0, 0],
  // ];
  for (const coordinateString in neighborsByCord) {
    const neighbors = neighborsByCord[coordinateString];
    if (dict[coordinateString] && neighbors === 2) {
      // const coordinate = unHash(coordinateString);

      // if (coordinate[0] > maxCoordsDist[0][0]) {
      //   maxCoordsDist[0][0] = coordinate[0];
      // }
      // if (coordinate[0] < maxCoordsDist[1][0]) {
      //   maxCoordsDist[1][0] = coordinate[0];
      // }
      // if (coordinate[1] > maxCoordsDist[0][1]) {
      //   maxCoordsDist[0][1] = coordinate[1];
      // }
      // if (coordinate[1] < maxCoordsDist[1][1]) {
      //   maxCoordsDist[1][1] = coordinate[1];
      // }

      nextState[coordinateString] = true;
    } else if (neighbors === 3) {
      nextState[coordinateString] = true;
    }
  }
  // console.log(maxCoordsDist);
  return nextState;
};

export const useGrid = () => {
  const [gridState, setGridState] = useState(
    coordsToDict([
      [2, 2],
      [2, 3],
      [2, 4],

      [3, 1],
      [3, 2],
      [3, 3],
    ])
  );

  const getNextGridState = useCallback(
    () => setGridState(getNextState(gridState)),
    [gridState]
  );

  return {
    gridState,
    getNextGridState,
  };
};
