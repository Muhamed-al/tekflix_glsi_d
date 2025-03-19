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

  showModal = false;
  films : Film[] = FILMS;
  filmId ?: any;
  film ?: Film;
  safeTrailerUrl ? : SafeResourceUrl;
  constructor(private activatedRoute : ActivatedRoute , 
              private domSanitizer : DomSanitizer
              ){}

  ngOnInit(){
    console.log("Inside ngOnInit . . .");
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Film ID : " , this.filmId);
    this.film = this.films.find(f=> f.id === parseInt(this.filmId));
    console.log("Film : " , this.film);
  }

  openModal(){
    if(this.film && this.film.trailerUrl){
      const embedUrl =this.film.trailerUrl.replace("watch?v=" , "embed/");
      // https://www.youtube.com/embed/1pHDWnXmK7Y
      this.safeTrailerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.showModal = true;
    }
  }

  closeModal(){
    this.showModal = false;
  }

}
