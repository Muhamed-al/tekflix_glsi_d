import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path : '' , redirectTo:'home' , pathMatch : 'full'},
  {path: 'home' , component : HomeComponent},
  {path: 'movie-list' , component : MovieListComponent},
  {path : 'movie-details/:id' , component : MovieDetailsComponent},
  {path : 'wishlist' , component : WishlistComponent},
  {path: '**' , component : NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
