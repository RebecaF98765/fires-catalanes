import { Routes } from '@angular/router';

import { HomeComponent } from './view/pages/home/home';
import { ComarquesComponent } from './view/pages/comarques/comarques';
import { PreferidesComponent } from './view/pages/preferides/preferides';
import { DetailsComponent } from './view/pages/details/details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'comarques', component: ComarquesComponent },
  { path: 'preferides', component: PreferidesComponent },
  { path: 'details', component: DetailsComponent }
];