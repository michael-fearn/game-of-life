type Coord = [number, number];

const hash = (coordinate: Coord) => String(coordinate);

const unHash = (coordinate: string): Coord =>
  coordinate.split(",").map(Number) as Coord;

const shiftCoordinate = (coordinate: Coord, shift: Coord): Coord => [
  coordinate[0] + shift[0],
  coordinate[1] + shift[1],
];

export const coordsToDict = (coordinates: Coord[]) =>
  Object.fromEntries(coordinates.map((coordinate) => [hash(coordinate), true]));

// refactor into something less smelly
export const getNeighborCount = (dict: { [coordinate: string]: boolean }) => {
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
  const neighbors: { [coordinates: string]: number } = {};
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
