import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  quizzes = [
    { id: 'harry-potter', name: 'Harry Potter' },
    { id: 'disney', name: 'Disney' },
    { id: 'pokemon', name: 'Pokémon' },
  ];

  constructor(private router: Router) {}

  goToQuiz(id: string) {
    this.router.navigate(['/quiz', id]);
  }
}
