import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../model/movies';
import { Movie } from '../model/movie'

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  dashboardText: string = "Trending Movies";
  movieDetails: Movie[] = MOVIES;
  reviewImage: string = "../assets/resources/rating.jpg";
  searchText: string = "";

  search(){
    this.movieDetails = MOVIES.filter(movie => movie.movieTitle?.match(this.searchText));
  }

  reset() {
    this.searchText = "";
    this.movieDetails = MOVIES;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
