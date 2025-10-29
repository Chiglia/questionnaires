import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-about',
  imports: [SharedModule, CardModule, AvatarModule],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  constructor(public router: Router) {}
}
