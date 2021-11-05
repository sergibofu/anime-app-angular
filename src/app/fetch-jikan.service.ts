import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IAnime } from './interfaces/anime';
import { IAnimes } from './interfaces/animes';
import { IManga } from './interfaces/manga';
import { IMangas } from './interfaces/mangas';
import { ISearchParamsObject } from './interfaces/searchParamsObject';

@Injectable({
  providedIn: 'root'
})
export class FetchJikanService {

  public genres = ['action','Adventure','Cars','Comedy','AvanteGarde','Demons','Mystery','Drama','Ecchi','Fantasy','Game','Hentai','Historical','Horror','Kids','MartialArts','Mecha', 'Music','Parody','Samurai','Romance','School','SciFi','Shoujo','GirlsLove','Shounen','BoysLove','Space','Sports','SuperPower','Vampire','Harem','SliceOfLife','Supernatural','Military','Police','Psychological','Seinen','Josei','Doujinshi','GenderBender', 'Suspense', 'AwardWinning', 'Gourmet', 'WorkLife', 'Erotica',];
  //parameter type
  public animeTypes = ['tv', 'ova', 'movie', 'special', 'ona', 'music' ];
  public mangaTypes = ['manga', 'novel', 'oneshot', 'doujin', 'manhwa', 'manhua' ];

  //parameter status
  public animeStatus = ['airing', 'completed', 'complete', 'to_be_aired', 'tba', 'upcoming' ];
  public mangaStatus = ['publishing', 'completed', 'complete', 'to_be_published', 'tbp', 'upcoming' ];

  //parameter rated
  private rated = ['g', 'pg', 'pg13', 'r17', 'r', 'rx' ];

  //parameter order_by
  private animeOrderBy = ['title', 'start_date', 'end_date	', 'score', 'type', 'members', 'id', 'episodes', 'rating' ];
  private mangaOrderBy = ['title', 'start_date', 'end_date	', 'score', 'type', 'members', 'id', 'chapters', 'volumes' ];

  //parameter sort
  private sort = ['asc', 'desc'];

  //base url
  private _url = 'https://api.jikan.moe/v3/';

  constructor(private http: HttpClient) {
   }

  //-------------------------------------anime------------------------------------------------------------------
  getTopAnimes(page: number): Observable<IAnimes>{
    return this.http.get<IAnimes>(this._url + 'top/anime/' + page);
  }

  getAnime(id: number): Observable<IAnime>{
    return this.http.get<IAnime>(this._url + 'anime/' + id);
  }

  //--------------------------------------manga------------------------------------------------------------------------
  getTopMangas(page: number): Observable<IMangas>{
    return this.http.get<IMangas>(this._url + 'top/manga/' + page);
  }

  getManga(id: number): Observable<IManga>{
    return this.http.get<IManga>(this._url + 'manga/' + id);
  }

  search(params: ISearchParamsObject){

    /*Convertimos nuestro array de generos en una cadena separada por comas 
    con los ids de nuestra lista*/ 
    let stringListOfGenresById = this.returnStringListOfGenresById(params.genres, params.animeOrManga);

    //armamos los parametros de nuestra peticion get
    let httpGetQuery = this._url + 'search/'; //'https://api.jikan.moe/v3/search/';
    httpGetQuery += params.animeOrManga + '?'; 
    if(params.query != '') httpGetQuery += 'q=' + params.query + '&';
    if(stringListOfGenresById != '') httpGetQuery += 'genre=' + stringListOfGenresById;


    return this.http.get<IMangas | IAnimes>(httpGetQuery);
  }

  returnStringListOfGenresById(arrayOfGenres: string[], animeOrManga:string){
    //inicializamos nuestra cadena que contendra la lista de id's separados por comas
    let stringListOfGenresById = '';

    //iteramos a traves de  nuestra lista con los generos abuscar
    arrayOfGenres.forEach((element)=>{
      if(animeOrManga == 'anime'){
        stringListOfGenresById += `${AnimeGenres[element]},`;
      }else{
        stringListOfGenresById += `${MangaGenres[element]},`;
      }
    });

    //eliminamos la coma final
    stringListOfGenresById = stringListOfGenresById.substring(0,stringListOfGenresById.length-1);

    return stringListOfGenresById;
  }


}

//manga and anime genres
enum MangaGenres {
action = 1,
Adventure,
Cars,
Comedy,
AvanteGarde,
Demons,
Mystery,
Drama,
Ecchi,
Fantasy,
Game,
Hentai,
Historical,
Horror,
Kids,
MartialArts,
Mecha,
Music,
Parody,
Samurai,
Romance,
School,
SciFi,
Shoujo,
GirlsLove,
Shounen,
BoysLove,
Space,
Sports,
SuperPower,
Vampire,
Harem,
SliceOfLife,
Supernatural,
Military,
Police,
Psychological,
Seinen,
Josei,
Doujinshi,
GenderBender,
Suspense,
AwardWinning,
Gourmet,
WorkLife,
Erotica,
}

enum AnimeGenres {
  action = 1,
  Adventure,
  Cars,
  Comedy,
  AvanteGarde,
  Demons,
  Mystery,
  Drama,
  Ecchi,
  Fantasy,
  Game,
  Hentai,
  Historical,
  Horror,
  Kids,
  MartialArts,
  Mecha,
  Music,
  Parody,
  Samurai,
  Romance,
  School,
  SciFi,
  Shoujo,
  GirlsLove,
  Shounen,
  BoysLove,
  Space,
  Sports,
  SuperPower,
  Vampire,
  Harem,
  SliceOfLife,
  Supernatural,
  Military,
  Police,
  Psychological,
  Suspense,
  Seinen,
  Josei,
  AwardWinning,
  Gourmet,
  WorkLife,
  Erotica,
}
  

