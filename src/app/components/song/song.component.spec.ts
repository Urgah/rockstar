import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongComponent } from './song.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

describe('SongComponent', () => {
  let component: SongComponent;
  let fixture: ComponentFixture<SongComponent>;
  // let playlistService = TestBed.inject(PlaylistService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SongComponent, PlaylistService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongComponent);
    component = fixture.componentInstance;
    // component.song = {
    //   "id": 190,
    //   "name": "(Don't Fear) The Reaper",
    //   "year": 1975,
    //   "artist": "Blue Öyster Cult",
    //   "shortname": "dontfearthereaper",
    //   "bpm": 141,
    //   "duration": 322822,
    //   "genre": "Classic Rock",
    //   "spotifyId": "5QTxFnGygVM4jFQiBovmRo",
    //   "album": "Agents of Fortune"
    // }
    // playlistService.setCurrentPlaylist({ 
    //   "id": 2,
    //   "name": "new",
    //   "songs": []
    // });
    fixture.detectChanges();
  });

  // it('should create', async () => {
  //   expect(component).toBeTruthy();
  // });
});
