import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/interfaces/artist';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { SongService } from 'src/app/services/song/song.service';
import { Song } from 'src/app/interfaces/song';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.less']
})
export class ArtistComponent implements OnInit {
  @Input() artist: Artist;
  faForward = faForward;
  songs: Song[];
  detailed = false;
  constructor(private songService: SongService) { }

  ngOnInit(): void {}

  /**
   * Function which is called in the htlm when clicked on the artists name
   */
  openDetail(): void {
    // Open or close the 'song' details of the artist component
    this.detailed = !this.detailed;

    // If there songs dont exists yet get them from the song service
    if(!this.songs) {
      this.songService.getSongsByArtist(this.artist.name).subscribe(data => this.songs = data);
    }
  }
}
