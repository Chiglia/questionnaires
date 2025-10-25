import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home',
  imports: [SharedModule, DividerModule],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  quizzes = [
    {
      id: 'harry-potter',
      name: 'Harry Potter',
      img: 'images/harry-potter.jpg',
      description: 'Quale casata ti rappresenta',
    },
    {
      id: 'disney',
      name: 'Disney',
      img: 'images/disney.jpg',
      description: 'Quale personaggio disney sei',
    },
    {
      id: 'pokemon',
      name: 'Pokémon',
      img: 'images/pokemon.jpg',
      description: 'Quale tipo di pokémon sei',
    },
    {
      id: 'musica',
      name: 'Musica',
      img: 'images/musica.jpg',
      description: 'Quale genere musicale ti rappresenta',
    },
    {
      id: 'bidone',
      name: 'Bidone',
      img: 'images/bidone.jpg',
      description: 'Quale bidone della spazzatura sei',
    },
    {
      id: 'calzino',
      name: 'Calzino',
      img: 'images/calzino.jpg',
      description: 'Quale calzino ti rappresenta',
    },
    {
      id: 'marvel',
      name: 'Marvel',
      img: 'images/marvel.jpg',
      description: 'Quale personaggio Marvel sei',
    },
    {
      id: 'pizza',
      name: 'Pizza',
      img: 'images/pizza.jpg',
      description: 'Quale pizza ti rappresenta',
    },
    {
      id: 'toons',
      name: 'Looney Toons',
      img: 'images/toons.jpg',
      description: 'Quale personaggio dei Looney Toons sei',
    },
    {
      id: 'partiti',
      name: 'Partito',
      img: 'images/partiti.jpg',
      description: 'Quale partito ti rappresenta',
    },
    {
      id: 'sushi',
      name: 'Sushi',
      img: 'images/sushi.jpg',
      description: 'Quale sushi ti rappresenta',
    },
    {
      id: 'parolacce',
      name: 'Parolacce',
      img: 'images/parolacce.jpg',
      description: 'Quale parolaccia sei',
    },
  ];

  constructor(private router: Router) {}

  goToQuiz(id: string) {
    this.router.navigate(['/quiz', id]);
  }
}
