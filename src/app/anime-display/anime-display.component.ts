import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchJikanService } from '../fetch-jikan.service';
import { IAnime } from '../interfaces/anime';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.scss']
})
export class AnimeDisplayComponent implements OnInit {
  
  public topAnimes: any = [];

  constructor(private jikan: FetchJikanService, private router: Router) { 
  }

  ngOnInit(): void {
    //al iniciar el componente, recuperamos los animes mas populares
    this.jikan.getTopAnimes(1)
    .subscribe(
      (data)=>{
        console.log(data.top);
        this.topAnimes = data.top;
    });
  }

  getAnimeDetails(id: string){
     this.router.navigate(['/anime', 'details', Number(id)]);
  }
}



