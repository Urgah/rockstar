import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Playlist } from 'src/app/interfaces/playlist';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.less']
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  currentPlaylist: Playlist;
  inPlaylist: boolean;
  faTimes = faTimes;
  faPlus = faPlus;
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.currentPlaylist = this.playlistService.getCurrentPlaylist();

    // Check if the song is part of the current playlist. If so show the remove button. If not show the add button
    this.inPlaylist = this.currentPlaylist.songs.filter(data => (data.id == this.song.id)).length != 0;
  }

  /**
   * Add this song from the currently selected playlist
   * @param event The default click event 
   */
  addToPlaylist(event: Event): void {
    event.preventDefault();
    this.inPlaylist = true;
    this.playlistService.addSongToPlaylist(this.song).subscribe();
  }

  /**
   * Remove this song from the currently selected playlist
   * @param event The default click event 
   */
  removeFromPlaylist(event: Event): void {
    event.preventDefault();
    this.inPlaylist = false;
    this.playlistService.deleteSongFromPlaylist(this.song).subscribe();
  }
}
