import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchJikanService } from '../fetch-jikan.service';

@Component({
  selector: 'app-manga-display',
  templateUrl: './manga-display.component.html',
  styleUrls: ['./manga-display.component.scss']
})
export class MangaDisplayComponent implements OnInit {
  public topMangas: any = [];
  public page: number = 1;
  public prevPage: number = 1;
  public nextPage: number = 1;
  constructor(private jikan: FetchJikanService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //recuperamos la id de la ruta y la almacenamos en la variable id
    this.route.paramMap.subscribe(params => {
      this.page = Number(params.get("page"));
      if(this.page <= 0) this.page = 1;
      this.getTopMangas();
    });


  }

  getTopMangas(){
    this.jikan.getTopMangas(this.page)
    .subscribe((data) => {
      console.log(data);
      this.topMangas = data.top;
    })
  }

  getMangaDetails(id: string) {
    this.router.navigate(['/manga', 'details', Number(id)]);
  }



}
