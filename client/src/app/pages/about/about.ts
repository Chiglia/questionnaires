import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [SharedModule],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  constructor(public router: Router) {}
}
