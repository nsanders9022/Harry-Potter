import { Component } from '@angular/core';
import { Character } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
characters: Character[];

  addCharacter(newCharacterFromChild: Character) {
    this.characters.push(newCharacterFromChild);
  }
}
