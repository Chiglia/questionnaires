import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-result',
  imports: [TitleCasePipe, SharedModule],
  template: `
    <div class="text-center mt-6">
      <h2>Il tuo risultato:</h2>
      <h1 class="text-4xl mt-3 text-primary">{{ result | titlecase }}</h1>
      <p-button label="Torna alla Home" class="mt-5" (onClick)="router.navigate(['/'])"></p-button>
    </div>
  `,
  styles: ``,
})
export class Result {
  result = '';

  constructor(public router: Router) {
    const { quizId, answers } = this.router.getCurrentNavigation()?.extras.state || {};
    if (quizId && answers) {
      const counts = answers.reduce((acc: any, val: string) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      this.result = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
    }
  }
}
