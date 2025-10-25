import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-result',
  imports: [TitleCasePipe, SharedModule],
  templateUrl: './results.html',
  styles: ``,
})
export class Result {
  result: any = '';
  description: string = '';
  quizId: string = '';
  imageUrl = '';
  imageExists = false;

  ngOnInit() {}

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
        this.imageUrl = `images/results/${quizId}/${this.result}.jpg`;
        const img = new Image();
        img.onload = () => (this.imageExists = true);
        img.onerror = () => (this.imageExists = false);
        img.src = this.imageUrl;
      });
    }
  }
}
