import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { Story } from '../story.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  providers: [CharacterService]
})
export class IntroComponent implements OnInit{
  characters: FirebaseListObservable<any[]>;
  //
  // characters: Character[];
  // stories: Story[];

  constructor( private characterService: CharacterService) {}

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  // goToStoryPage(clickedStory: Story) {
  //   this.router.navigate(['stories', clickedStory.id]);
  // };

}
