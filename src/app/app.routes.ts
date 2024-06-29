import { Routes } from '@angular/router';
import { StationComponent } from './station/station.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'station',
    pathMatch: 'full',
  },
  {
    path: 'station',
    component: StationComponent,
  },
];
