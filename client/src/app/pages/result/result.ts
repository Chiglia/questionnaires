import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-result',
  imports: [TitleCasePipe, SharedModule],
  template: `
    <div class="text-center mt-6" *ngIf="result">
      <h2>Il tuo risultato:</h2>
      <h1 class="text-4xl mt-3 text-primary">{{ result | titlecase }}</h1>
      <p class="mt-3 text-lg">{{ description }}</p>
      <p-button label="Torna alla Home" class="mt-5" (onClick)="router.navigate(['/'])"></p-button>
    </div>
  `,
  styles: ``,
})
export class Result {
  result: any = '';
  description: string = '';

  constructor(public router: Router, private quizService: QuizService) {
    const { quizId, answers } = this.router.getCurrentNavigation()?.extras.state || {};
    if (quizId && answers) {
      this.quizService.getQuiz(quizId).then((quiz) => {
        const counts = answers.reduce((acc: any, val: string) => {
          acc[val] = (acc[val] || 0) + 1;
          return acc;
        }, {});
        this.result = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
        this.description = quiz.results[this.result] || '';
      });
    }
  }
}
