import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  filmId ?: any;
  films : Film[] = FILMS;
  film ? : Film;
  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit(){
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Film ID : " , this.filmId);
    this.film = this.films.find(f => f.id === parseInt(this.filmId));
    console.log("Film : " , this.film)

  }

}
