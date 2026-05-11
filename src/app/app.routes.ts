import { Routes } from '@angular/router';

import { Home } from './view/pages/home/home';
import { Comarques } from './view/pages/comarques/comarques';
import { Preferides } from './view/pages/preferides/preferides';
import { Details } from './view/pages/details/details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'comarques', component: Comarques },
  { path: 'preferides', component: Preferides },
  { path: 'details', component: Details },

  { path: '**', redirectTo: 'home' }
];