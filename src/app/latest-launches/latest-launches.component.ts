import { Component, OnInit } from '@angular/core';
import { Launche } from '../launche.model';
import { SapcexDataService } from '../services/sapcex-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-latest-launches',
  templateUrl: './latest-launches.component.html',
  styleUrls: ['./latest-launches.component.scss']
})


export class LatestLaunchesComponent implements OnInit {

  tableColumns  :  string[] = ['flight_number','mission_name','launch_date_local','rocket_type','land_success','customer'];
  dataSource  : Launche[]= [];
 
  
   constructor(private spacexService:SapcexDataService){
   }

  ngOnInit(): void {
    this.getLatestLaunches();
  }
 //Fetches latest launches 
  getLatestLaunches() {
     return this.spacexService.getLatestLaunches()
    .subscribe((result) => {
      //console.log("Fetching data from service app", result[0])
      this.dataSource = result;
    });
  
 }

}
