import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchJikanService } from '../fetch-jikan.service';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {

  private id: any = -1;
  public mangaDetails: any = {
  };


  constructor(private jikan: FetchJikanService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //recuperamos la id de la ruta y la almacenamos en la variable id
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    });

    //recuperamos los detalles del manga
    this.getMangaDetails();
  }

  getMangaDetails(){
    this.jikan.getManga(this.id)
    .subscribe((data)=>{
      this.mangaDetails = data;
    });
  }

}
