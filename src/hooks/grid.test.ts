import { coordsToDict, getNeighborCount } from "./grid";

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
    const gridState = coordsToDict([[0, 0]]);
    const neighborCount = getNeighborCount(gridState);
    expect(neighborCount).toEqual({
      "-1,-1": 1,
      "-1,0": 1,
      "-1,1": 1,
      "0,-1": 1,
      "0,1": 1,
      "1,-1": 1,
      "1,0": 1,
      "1,1": 1,
    });
  });
});
