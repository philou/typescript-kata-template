import { Rover } from "../src/Rover";

describe('Rover', () => {
  it('should start at origin', () => {
    let rover = new Rover();

    expect(rover.x).toBe(0);
    expect(rover.y).toBe(0);

  });
});
