import { Component } from '@angular/core';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent {
  movieTitle!: string;
  movieInfo: any;

  constructor(private omdbService: OmdbService) { }

  getMovieInfo() {
    this.omdbService.getMovieInfo(this.movieTitle)
      .subscribe((response: any) => {
        this.movieInfo = response;
      });
  }
}
