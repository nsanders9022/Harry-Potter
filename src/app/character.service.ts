import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { CHARACTERS } from './mock-characters';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.characters = angularFire.database.list("characters");
  }

  getCharacters() {
    return this.characters;
  }

  addCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }
}
