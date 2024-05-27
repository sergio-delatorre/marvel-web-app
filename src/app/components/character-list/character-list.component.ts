import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { CharacterDetailsComponent } from '../character-details/character-details.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent implements OnInit{ 

  public characters: Character[] = [];
  public loading: boolean = false;

  constructor(private characterService: CharacterService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    this.loading = true;
    this.characterService.getCharacters()
      .subscribe(
        (characters: Character[]) => {
          this.characters = characters;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching characters:', error);
          this.loading = false;
        }
      );
  }

  openCharacterModal(characterId: number) {
    this.characterService.getCharacterById(characterId).subscribe(
      (character: Character) => {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.title = character.name;
        modalRef.componentInstance.component = CharacterDetailsComponent;
        modalRef.componentInstance.data = { character };
      },
      (error) => {
        console.error('Error fetching character details:', error);
      }
    );
  }
}
