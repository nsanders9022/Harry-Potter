import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { IntroComponent } from './intro/intro.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CharacterComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
