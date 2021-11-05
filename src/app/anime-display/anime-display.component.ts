import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchJikanService } from '../fetch-jikan.service';
import { IAnime } from '../interfaces/anime';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.scss']
})
export class AnimeDisplayComponent implements OnInit {

  public topAnimes: any = [];
  public page: number = 1;

  constructor(private jikan: FetchJikanService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //recuperamos la id de la ruta y la almacenamos en la variable id
    this.route.paramMap.subscribe(params => {
      this.page = Number(params.get("page"));
      this.getTopAnimes();
    });


  }

  getTopAnimes(){
        //al iniciar el componente, recuperamos los animes mas populares
        this.jikan.getTopAnimes(this.page)
        .subscribe(
          (data) => {
            console.log(data.top);
            this.topAnimes = data.top;
          });
  }
  getAnimeDetails(id: string) {
    this.router.navigate(['/anime', 'details', Number(id)]);
  }
}



