import { Component } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent { 

  public characters: Character[] =  [
    { id: 1, name: "3-D Man",  imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" },
    { id: 2, name: "A-Bomb (HAS)", imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" },
    { id: 3, name: "Aaron Stack",  imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" },
    { id: 4, name: "Abomination (Emil Blonsky)",  imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg" },
    { id: 5, name: "Abomination (Ultimate)",  imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" }
  ];
}
