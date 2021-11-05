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

  //paginator
  public currentPage: boolean = true;
  public prevActive: boolean = true;
  public nextActive: boolean = true;

  public firstActive: boolean = false;
  public middleActive: boolean = false;
  public lastActive: boolean = false;


  public topAnimes: any = [];
  public page: number = 1;

  constructor(private jikan: FetchJikanService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //recuperamos la id de la ruta y la almacenamos en la variable id
    this.route.paramMap.subscribe(params => {
      this.page = Number(params.get("page"));
      this.getTopAnimes();
      
      //manejamos el estado del paginador
      this.managePaginatorState();
    });


  }

  getTopAnimes() {
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

  managePaginatorState() {

    this.resetPaginatorState();

    //<prev><1><2><3><first=page-1><middle=page><last=page+1><18><19><20><next>
    //si pagina no esta por debajo de 1 o por encima de 20 se cambia a 1 o 20
    if (this.page <= 1) this.page = 1;
    if (this.page >= 20) this.page = 20;

    //si el puntero esta en 1 o 20, se desactiva prev o next
    if (this.page <= 1) this.prevActive = false;
    if (this.page >= 20) this.nextActive = false;

    //si <first> <middle> o <last> se solapan con <1><2><3>, no se les activa
    if (this.page >= 5) this.firstActive = true;
    if (this.page >= 4) this.middleActive = true;
    if (this.page >= 3) this.lastActive = true;

    //si <first> <middle> o <last> se solapan con <18><19><20>, no se les activa
    if (this.page >= 19) this.firstActive = false;
    if (this.page >= 18) this.middleActive = false;
    if (this.page >= 17) this.lastActive = false;
  }

  resetPaginatorState() {
    //reseteamos todas las banderas a 0
    this.prevActive = true;
    this.nextActive = true;
    this.firstActive = false;
    this.middleActive = false;
    this.lastActive = false;

  }

}



