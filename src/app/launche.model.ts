import { Timestamp } from "rxjs";

export interface Launche {
  flight_number:string;
  mission_name:string;
  launch_date_local:Date;
  rocket:Rocket; 
}

export interface Rocket {
  rocket_type:string;
  first_stage:first_stage;
  second_stage:second_stage;
}
export interface first_stage {
  cores:cores[]
}
export interface cores {
  land_success: boolean
  landing_intent: boolean
  landing_type: string
  landing_vehicle: string
}
export interface second_stage{
  payloads:payload
}

export interface payload {
  customer:string;
}