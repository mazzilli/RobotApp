import { AfterViewInit, Component } from '@angular/core';
import { Elbow } from 'src/Models/Elbow';
import { Fist } from 'src/Models/Fist';
import { Robot } from 'src/Models/robot';
import { Rotation } from 'src/Models/Rotation';
import { Tilt } from 'src/Models/Tilt';
import { RobotService } from 'src/Services/robot.service';


@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements AfterViewInit {
  robo: Robot = new Robot();

  constructor(private serv: RobotService) {

  }

  ngAfterViewInit() {
    this.serv.get().subscribe(r => { this.robo = r; });
  }

  getElbowName(n: any) {
    return Elbow[n];
  }

  getFistName(n: any) {
    return Fist[n];
  }

  getTiltName(n: any) {
    return Tilt[n];
  }

  getRotationName(n: any) {
    return Rotation[n];
  }


  moveElbow(left: boolean, newPosition: Elbow) {
    this.serv.moveElbow(left, newPosition).subscribe(r => this.robo = r);
  }

  moveFist(left: boolean, newPosition: Fist) {
    this.serv.moveFist(left, newPosition).subscribe(r => this.robo = r);
  }

  moveTilt(newPosition: Tilt) {
    this.serv.moveTilt(newPosition).subscribe(r => this.robo = r);
  }

  moveRotation(newPosition: Rotation) {
    this.serv.moveRotation(newPosition).subscribe(r => this.robo = r);
  }

}
