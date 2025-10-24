import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { SharedModule } from '../../shared.module';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-quiz',
  imports: [SharedModule, ProgressBarModule],
  templateUrl: './quiz.html',
  styles: ``,
})
export class Quiz {
  quizId!: string;
  questions: any[] = [];
  currentIndex = 0;
  answers: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('id')!;
    this.questions = await this.quizService.getQuiz(this.quizId);
  }

  get progress(): number {
    return (this.currentIndex / this.questions.length) * 100;
  }

  selectAnswer(answer: string) {
    this.answers[this.currentIndex] = answer;
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.router.navigate(['/result'], {
        state: { quizId: this.quizId, answers: this.answers },
      });
    }
  }
}
