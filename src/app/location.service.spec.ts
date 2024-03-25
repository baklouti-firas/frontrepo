import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService]
    });
    service = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve locations from the API via GET', () => {
    const mockLocations = ['Paris', 'New York', 'London'];

    service.getLocations().subscribe(locations => {
      expect(locations).toEqual(mockLocations);
    });

    const req = httpMock.expectOne('https://api.extern.com/locations');
    expect(req.request.method).toBe('GET');
    req.flush(mockLocations);
  });
});
