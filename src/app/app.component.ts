import { Component, Inject } from '@angular/core';
import { ArtistService } from './services/artist/artist.service';
import { Artist } from './interfaces/artist';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { StorageKeys } from './enum/storage-keys.enum';
import { PlaylistService } from './services/playlist/playlist.service';
import { Playlist } from './interfaces/playlist';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'rockstar-app';
  searchText: string;
  artists: Artist[];
  playlists: Playlist[];
  newPlaylist: string;
  selectedPlaylist: Playlist = {
      name: null,
      id: null,
      songs: []
  };
  faTimes = faTimes;
  faPlus = faPlus;

  constructor(private artistService: ArtistService,  @Inject(LOCAL_STORAGE) private storage: StorageService, private playlistService: PlaylistService, private modalService: NgbModal) {};
  setArtists(){
    //If the result is in the local storage load all the artists from the localstorage
    let storageResult = this.storage.get(StorageKeys.artists);
    if(storageResult) {
      this.artists = storageResult;
      return;
    }

    this.artistService.getArtists().subscribe(data => {
      this.artists = data;
      this.storage.set(StorageKeys.artists, this.artists);
    });
  }

  /**
   * Used by the search bar. 
   */
  search() {
    this.artistService.getArtistsByName(this.searchText).subscribe(data => this.artists = data);
  }

  setPlaylists() {
    this.playlistService.getPlaylists().subscribe(data => {
      this.playlists = data;

      // Set the first playlist as currently selected playlist 
      this.selectedPlaylist = data[0];
      this.setCurrentPlaylist();
    });
  }

  addPlaylist() {
    this.playlistService.createPlaylist(this.newPlaylist).subscribe((newPlaylist: any) => {
        this.selectedPlaylist = newPlaylist;
        
        // After adding a playlist set it as the current one
        this.setCurrentPlaylist();
      }
    )
  }

  removePlaylist(playlist: Playlist) {
    this.playlistService.deletePlaylist(playlist.id).subscribe();

      // Set the first playlist as currently selected playlist since the previous selected one is deleted
      this.selectedPlaylist = this.playlists[0];
      this.setCurrentPlaylist();
  }

  setCurrentPlaylist(): void {
    this.playlistService.setCurrentPlaylist(this.selectedPlaylist);
  }

  /**
   * Open the playlist modal
   * @param content The id of the modal which should be opened
   */
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {});
  }

  ngOnInit() {
    this.setArtists();
    this.setPlaylists();
  }
}
