import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard.service'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'tambah', loadChildren: () => import('./pages/tambah/tambah.module').then(m => m.TambahRoutingModule),
    canActivate: [AuthGuard],
  },

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginRoutingModule) },


  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupRoutingModule) },
];


