import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, DrawerModule],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  menuVisible = false;

  toggleTheme() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
