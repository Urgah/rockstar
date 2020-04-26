import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artist.service';
import { HttpClientModule } from '@angular/common/http';

describe('ArtistService', () => {
  let service: ArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
