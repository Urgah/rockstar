import { Injectable } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlist';
import { HttpClient } from '@angular/common/http';
import { Song } from 'src/app/interfaces/song';

import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private url: string = "http://localhost:3000/playlists";
  private currentPlaylist: Playlist;

  constructor(private http: HttpClient) { }

  getPlaylists() {
    return this.http.get<Playlist[]>(this.url).pipe(catchError(this.handleError));;
  }

  createPlaylist(name: string) {
    return this.http.post<Playlist>(this.url, {name: name, songs: []}).pipe(catchError(this.handleError));
  }

  deletePlaylist(id: number){
    return this.http.delete<Playlist[]>(this.url + "/" + id + "/").pipe(catchError(this.handleError));
  }
  
  addSongToPlaylist(song: Song) {
    let songs: Song[] = this.currentPlaylist.songs;
    songs.push(song);
    return this.http.put<Playlist[]>(this.url + "/" + this.currentPlaylist.id, {id: this.currentPlaylist.id, name: this.currentPlaylist.name, songs: songs}).pipe(catchError(this.handleError));
  }

  deleteSongFromPlaylist(song: Song) {
    let songs: Song[] = this.currentPlaylist.songs.filter(function(value){ return value.id != song.id;});
    this.currentPlaylist.songs = songs;
    return this.http.put<Playlist[]>(this.url + "/" + this.currentPlaylist.id, {id: this.currentPlaylist.id, name: this.currentPlaylist.name, songs: songs}).pipe(catchError(this.handleError));
  }

  /**
   * Function to set a new current playlist in this service. 
   * @param playlist The new current playlist
   */
  setCurrentPlaylist(playlist: Playlist) {
    this.currentPlaylist = playlist;
  }

  /**
   * Get the currently selected playlist 
   */
  getCurrentPlaylist(): Playlist {
    return this.currentPlaylist;
  }

  handleError(error: HttpErrorResponse) {
    window.alert("Something went wrong");
    return throwError(error);
  }
}
