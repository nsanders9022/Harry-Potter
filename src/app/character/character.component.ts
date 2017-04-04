import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [CharacterService]
})

export class CharacterComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;

  @Output() newCharacterSender = new EventEmitter()
  wizardSelected = null;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit(){
    this.characters = this.characterService.getCharacters();
  }

  submitForm(personality:string, level: string, gender: string, name: string) {
    var newCharacter: Character = new Character(personality, level, gender, name)
    if(gender === "1" && personality === "3") {
      newCharacter.name = "Hermionie";
    } else if (gender === "1" && personality === "1") {
      newCharacter.name = "Ginnie";
    } else if (gender === "1" && personality === "2") {
      newCharacter.name = "Luna";
    } else if (personality === "1" && gender === "2") {
      newCharacter.name = "Harry";
    } else if (personality === "2" && gender === "2") {
      newCharacter.name = "Ron";
    } else if (personality === "3" && gender === "2") {
      newCharacter.name = "Neville";
    }
    this.characterService.addCharacter(newCharacter);
    this.wizardSelected = newCharacter;
  };
}
