import { TestBed } from '@angular/core/testing';

import { PlaylistService } from './playlist.service';
import { HttpClientModule } from '@angular/common/http';
import { Playlist } from 'src/app/interfaces/playlist';

describe('PlaylistService', () => {
  let service: PlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(PlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('create playlist', function (finished) {
    service.createPlaylist('test').subscribe(function (data) {  
        expect(data.name).toEqual('test');
        finished();
      })
  });

  it('get playlists', function (finished) {
    service.getPlaylists().subscribe(function (data) {
        expect(data.length).toBeGreaterThan(0);
        finished();
      })
  });
});
