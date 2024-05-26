import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls:['./character-details.component.css']
})
export class CharacterDetailsComponent { 

  @Input() character!: Character;

}
