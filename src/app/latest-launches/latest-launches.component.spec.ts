import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SapcexDataService } from '../services/sapcex-data.service';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { LatestLaunchesComponent } from './latest-launches.component';
import { Observable, of } from 'rxjs';
import { cores, Launche } from '../launche.model';
import { delay } from 'rxjs/operators';

describe('LatestLaunchesComponent', () => {
  let component: LatestLaunchesComponent;
  let fixture: ComponentFixture<LatestLaunchesComponent>;
  let service:SapcexDataService;
  let launches:Observable<Launche[]>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestLaunchesComponent ],
      providers:[SapcexDataService],
      imports:[HttpClientTestingModule]
    })    
    .compileComponents();
    
    
  });

  beforeEach(() => {    
    fixture = TestBed.createComponent(LatestLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {        
    // provide an Observable with Launch     
   
    let test_cores = [{
      landing_intent: true,
      landing_type: "RTLS",
      landing_vehicle: "LZ-4"
    }];
  const expectedLaunches: Launche[] =
  [
   { 
     flight_number: "1", 
      mission_name: 'Crew-1', 
     launch_date_local:new Date("2020-11-21T09:17:00-08:00"),
     rocket:{rocket_type:"FT", first_stage:{cores:[]},second_stage:{payloads:{customer:'NASA'}}}
   }
  ];

    let test_getLatestLaunches = spyOn(component,"getLatestLaunches")
              .and.returnValues(of(expectedLaunches) as any);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.getLatestLaunches).toEqual(test_getLatestLaunches);
  })
});
