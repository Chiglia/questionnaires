import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Quiz } from './pages/quiz/quiz';
import { Result } from './pages/result/result';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'quiz/:id',
    component: Quiz,
  },
  {
    path: 'result',
    component: Result,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
