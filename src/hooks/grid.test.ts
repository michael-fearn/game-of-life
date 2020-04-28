import { coordsToDict, getNeighborsByCoord, getNextState } from "./grid";

describe("Grid State", () => {
  test("State is an object", () => {
    const gridState = coordsToDict([]);
    expect(gridState).toEqual({});
  });

  test("Coordinates added exist in dictionary", () => {
    const gridState = coordsToDict([
      [0, 0],
      [0, 1],
    ]);
    expect(gridState).toEqual({ "0,0": true, "0,1": true });
  });

  test("Coordinates are aware of how many neighbors they have.", () => {
    const gridState = coordsToDict([
      [0, 0],
      [0, 2],
    ]);
    const neighborCount = getNeighborsByCoord(gridState);
    expect(neighborCount).toEqual({
      "-1,-1": 1,
      "-1,0": 1,
      "-1,1": 2,
      "0,-1": 1,
      "0,1": 2,
      "1,-1": 1,
      "1,0": 1,
      "1,1": 2,

      "-1,2": 1,
      "-1,3": 1,
      "0,3": 1,
      "1,2": 1,
      "1,3": 1,
    });
  });

  test("Uses Neighbor Count and Living Cells to get next state", () => {
    const gridState = coordsToDict([
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
    const nextState = getNextState(gridState);
    expect(nextState).toEqual({ "-1,1": true, "0,1": true, "1,1": true });
  });

  // test("Expect getNextState to return max grid dimensions ", () => {
  //   const gridState = coordsToDict([
  //     [0, 0],
  //     [0, 1],
  //     [0, 2],
  //   ]);
  //   const [nextState, maxDimensions] = getNextState(gridState);
  //   expect(maxDimensions).toEqual([3, 1]);
  //   const [newNextState, newMaxDimensions] = getNextState(nextState);
  //   expect(newMaxDimensions).toEqual([1, 3]);
  // });
});
