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
    {
      id: 'harry-potter',
      name: 'Harry Potter',
      description: 'Quale casata ti rappresenta',
    },
    {
      id: 'disney',
      name: 'Disney',
      description: 'Quale personaggio disney sei',
    },
    {
      id: 'pokemon',
      name: 'Pokémon',
      description: 'Quale tipo di pokémon sei',
    },
    {
      id: 'musica',
      name: 'Musica',
      description: 'Quale genere musicale ti rappresenta',
    },
    {
      id: 'bidone',
      name: 'Bidone',
      description: 'Quale bidone della spazzatura sei',
    },
    {
      id: 'calzino',
      name: 'Calzino',
      description: 'Quale calzino ti rappresenta',
    },
    {
      id: 'marvel',
      name: 'Marvel',
      description: 'Quale personaggio Marvel sei',
    },
    {
      id: 'pizza',
      name: 'Pizza',
      description: 'Quale pizza ti rappresenta',
    },
    {
      id: 'toons',
      name: 'Looney Toons',
      description: 'Quale personaggio dei Looney Toons sei',
    },
    {
      id: 'partiti',
      name: 'Partito',
      description: 'Quale partito ti rappresenta',
    },
    {
      id: 'sushi',
      name: 'Sushi',
      description: 'Quale sushi ti rappresenta',
    },
    {
      id: 'parolacce',
      name: 'Parolacce',
      description: 'Quale parolaccia sei',
    },
  ];

  constructor(private router: Router) {}

  goToQuiz(id: string) {
    this.router.navigate(['/quiz', id]);
  }
}
