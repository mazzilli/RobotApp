import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from 'src/Models/robot';
import { Elbow } from 'src/Models/Elbow';
import { Fist } from 'src/Models/Fist';
import { Tilt } from 'src/Models/Tilt';
import { Rotation } from 'src/Models/Rotation';
const url = 'http://localhost:5273/api/robot/';
@Injectable({ providedIn: 'root' })
export class RobotService {

  public Elbow = Elbow;

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get<Robot>(url);
  }

  public moveElbow(left: boolean, newPosition: Elbow) {
    return this.httpClient.post<Robot>(`${url}moveElbow`, {
      left, newPosition
    });
  }
  public moveFist(left: boolean, newPosition: Fist) {
    return this.httpClient.post<Robot>(`${url}moveFist`, {
      left, newPosition
    });
  }
  public moveTilt(newPosition: Tilt) {
    return this.httpClient.post<Robot>(`${url}moveTilt`, {
      newPosition
    });
  }
  public moveRotation(newPosition: Rotation) {
    return this.httpClient.post<Robot>(`${url}moveRotation`, {
      newPosition
    });
  }
}