import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent implements OnInit{ 

  public characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    this.characterService.getCharacters()
      .subscribe(
        (characters: Character[]) => {
          this.characters = characters;
        },
        (error) => {
          console.error('Error fetching characters:', error);
        }
      );
  }
}
