import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Launche } from '../launche.model';
import { config, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SapcexDataService {
  private spaceDataUrl:string | undefined
  ;
  constructor(private http: HttpClient) { }

  //get the  latestNoRecords by date desc 
  public getLatestLaunches():Observable<Launche[]> {
    this.spaceDataUrl = environment.baseAPIUrl +  environment.launchUrl;

    var data = this.http.get<Launche[]>(this.spaceDataUrl);
    data = data.pipe(map((rLaunches)=> rLaunches
               .sort((a, b) => new Date(b.launch_date_local).getTime() - new Date(a.launch_date_local).getTime())
               .splice(0,environment.latestNoRecords)
                ))
    
    return data;
  }
}
