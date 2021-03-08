import { Direction } from "./Direction";

export class Rover {
    forward() {
      this.y = 1;
    }
    public readonly x = 0;
    public y = 0;
    public readonly direction = Direction.North;


}
