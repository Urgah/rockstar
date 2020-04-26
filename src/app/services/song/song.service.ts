import { Injectable } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private url: string = "http://localhost:3000/songs";
  constructor(private http: HttpClient) { }

  getSongs() {
    return this.http.get<Song[]>(this.url);
  }
  
  /**
   * Get all the songs from the artist
   * @param artistName The full name of the artist
   */
  getSongsByArtist(artistName: string) {
    return this.http.get<Song[]>(this.url + "?_sort=album&artist=" + artistName);
  }
}
