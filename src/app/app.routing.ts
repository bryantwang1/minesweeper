import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
{
  path: '',
  component: StartComponent
},
{
  path: 'game/:difficulty',
  component: GameComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
