import { Elbow } from "./Elbow";
import { Fist } from "./Fist";

export class Arm {
    RightElbow: Elbow;
    LeftElbow: Elbow;
    RightFist: Fist;
    LeftFist: Fist;

    constructor() {
        this.LeftElbow = Elbow.EmRepouso;
        this.LeftFist = Fist.EmRepouso;
        this.RightElbow = Elbow.EmRepouso;
        this.RightFist = Fist.EmRepouso;
    }
}