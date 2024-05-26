import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly CHARACTERS_ENDPOINT = '/marvel/characters';

  constructor(private http: HttpClient) {}

  public getCharacters() {
    return this.http.get<Character[]>(`${environment.marvelApiBaseUrl}${this.CHARACTERS_ENDPOINT}`);
  }

  public getCharacterById( id: number ) {
    return this.http.get<Character>(`${environment.marvelApiBaseUrl}${this.CHARACTERS_ENDPOINT}/${id}`);
  }

}
