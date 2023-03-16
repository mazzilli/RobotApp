import { Arm } from "./Arm";
import { Head } from "./Head";

export class Robot {
    Arms: Arm = new Arm();
    Head: Head = new Head();
}