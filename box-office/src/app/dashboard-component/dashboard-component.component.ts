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
  constructor() { }

  ngOnInit(): void {
  }

}
