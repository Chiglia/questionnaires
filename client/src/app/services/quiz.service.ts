import { Injectable } from '@angular/core';
import { Quiz } from './quiz.interface';

@Injectable({ providedIn: 'root' })
export class QuizService {
  async getQuiz(id: string): Promise<Quiz> {
    const response = await fetch(`/quizzes/${id}.json`);
    if (!response.ok) throw new Error(`Quiz ${id} not found`);
    return await response.json();
  }
}
