import { HttpClient } from '@angular/common/http';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchJikanService } from '../fetch-jikan.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  
  private id: any = -1;
  public animeDetails: any = {
  };


  constructor(private jikan: FetchJikanService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //recuperamos la id de la ruta y la almacenamos en la variable id
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    });

    //recuperamos los detalles del anime utilizando la id
    this.getAnimeDetails();
  }


  getAnimeDetails(){
    this.jikan.getAnime(this.id)
    .subscribe((data)=>{
      this.animeDetails = data;
    });
  }
}
