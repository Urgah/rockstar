import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Artist } from 'src/app/interfaces/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private url: string = "http://localhost:3000/artists";
  constructor(private http: HttpClient) { }
  
  getArtists() {
    return this.http.get<Artist[]>(this.url);
  }

  /**
   * Get the artist by name like.
   * @param name The name of the artist -> ed sheer should return ed sheeran
   */
  getArtistsByName(name: string) {
    return this.http.get<Artist[]>(this.url + "?name_like=" + name);
  }
}
