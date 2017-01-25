import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';

const appRoutes: Routes = [
{
  path: '',
  component: StartComponent
},
{
  path: 'beginner',
  component: BeginnerComponent
},
{
  path: 'intermediate',
  component: IntermediateComponent
},
{
  path: 'advanced',
  component: AdvancedComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
