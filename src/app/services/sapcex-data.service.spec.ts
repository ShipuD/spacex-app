import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { SapcexDataService } from './sapcex-data.service';

describe('SapcexDataService', () => {
  let service: SapcexDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[SapcexDataService],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(SapcexDataService);
    service.getLatestLaunches()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Expect service to fetch  exactly 10 records',()=>{
    ///Arrange
    //Set Up Data 
    let latestLaucnhesExpected = 10;
 
    //Act
    service.getLatestLaunches().subscribe(data=>{
      //Assert
      expect(data.length).toEqual(latestLaucnhesExpected);
 
    });
    
  })
  it('Expect service to fetch  exactly 6 records',()=>{
    ///Arrange
    //Set Up Data 
    let latestLaucnhesExpected = 6;
 
    //Act
    service.getLatestLaunches().subscribe(data=>{
      //Assert
      expect(data.length).toEqual(latestLaucnhesExpected);
 
    });
    
  })
});
