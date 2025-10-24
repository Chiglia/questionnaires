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
    { id: 'harry-potter', name: 'Harry Potter', img: 'images/harry-potter.jpg' },
    { id: 'disney', name: 'Disney', img: 'images/disney.jpg' },
    { id: 'pokemon', name: 'Pokémon', img: 'images/pokemon.jpg' },
    { id: 'musica', name: 'Musica', img: 'images/musica.jpg' },
    { id: 'bidone', name: 'Bidone della spazzatura', img: 'images/bidone.jpg' },
    { id: 'calzino', name: 'Calzino', img: 'images/calzino.jpg' },
    { id: 'marvel', name: 'Marvel', img: 'images/marvel.jpg' },
  ];

  constructor(private router: Router) {}

  goToQuiz(id: string) {
    this.router.navigate(['/quiz', id]);
  }
}
