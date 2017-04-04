import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { IntroComponent } from './intro/intro.component';
import { EndComponent } from './end/end.component';
import { TransfigureComponent } from './transfigure/transfigure.component';
import { StupifyComponent } from './stupify/stupify.component';


const appRoutes: Routes = [
  {
    path: '',
    component: CharacterComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'end',
    component: EndComponent
  },
  {
    path: 'transfigure',
    component: TransfigureComponent
  },
  {
    path: 'stupify',
    component: StupifyComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
