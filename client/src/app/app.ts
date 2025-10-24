import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './pages/common-components/nav/nav';
import { SharedModule } from './shared.module';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet, Nav],
  template: `
    <app-nav></app-nav>
    <router-outlet />
  `,
  styles: [],
})
export class App {}
