import { Component, OnInit } from '@angular/core';
import { FetchJikanService } from '../fetch-jikan.service';
import { ISearchParamsObject } from '../interfaces/searchParamsObject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public flag: boolean = false;
  
  public showError: boolean = false;
  public errorMsg: string = '';

  public menuOption1 = 'anime';
  public menuOption2 = 'manga';
  public listOfGenres: any[] = [];
  public response;

  constructor(private jikan: FetchJikanService) { }

  ngOnInit(): void {
    this.listOfGenres = this.jikan.genres;
  }

  public toggle() {
    let temp = this.menuOption1;
    this.menuOption1 = this.menuOption2;
    this.menuOption2 = temp;
  }

  public search(input: any){
    //reseteamos la variable showError
    this.showError = false;

    //guardamos si la busqueda es por titulo o por autor
    let animeOrManga = this.menuOption1;

    //guardamos la query a buscar
    let query = input.query;

    /*iteramos a traves del array de checkboxes y  guardamos las que esten checked
    en el array genres*/
    let genres:string[] = [];
    this.listOfGenres.forEach((element)=>{
        if(input[element] == true){
          genres.push(element);
        }
    })

    /*compactificamos nuestros parametros de busqueda*/ 
    let params = {
      'query': query,
      'genres': genres,
      'animeOrManga': animeOrManga
    };

    //si no se envia ningun parametro, cancelamos la busqueda
    if(this.validateParams(params))return;

    //los pasamos a la funcion de busqueda en el servicio jikan
    this.jikan.search(params)
    .subscribe((res)=>{

      this.response = res;
      this.response.animeOrManga = animeOrManga;
      this.flag = true;
    },
    (error)=>{
      this.showError = true;
      this.errorMsg = error.message;
    });


  }

  public validateParams(params: ISearchParamsObject): boolean{
    if(params.query == '' || params.query == null || params.query == undefined){
      if(params.genres.length == 0 || params.genres == null || params.genres == undefined){
        return true;
      }
    }

    return false
  }

}
