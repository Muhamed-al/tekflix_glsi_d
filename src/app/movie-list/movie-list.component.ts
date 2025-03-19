import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  categories : string[] = ['All' , 'Action' , 'Comedy' , 'Adventure' , 'Fantasy' , 'Horror'  , 'Romance'];
  films : Film[] = FILMS;

  selectedCategory : string = 'All';

  selectCategory(cat : string){
    this.selectedCategory = cat;
    console.log("Selected Category : " , this.selectedCategory);
  }


  get FilteredFilms() : Film[]{
    return this.selectedCategory === 'All' 
    ? this.films 
    : this.films.filter(f=> f.genre === this.selectedCategory);
  }



}
