import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeDisplayComponent } from './anime-display/anime-display.component';
import {MangaDisplayComponent } from './manga-display/manga-display.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SearchComponent } from './search/search.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'anime', component: AnimeDisplayComponent},
  {path: 'anime/:page', component: AnimeDisplayComponent},
  {path: 'anime/details/:id', component: AnimeDetailsComponent},
  {path: 'manga', component: MangaDisplayComponent},
  {path: 'manga/:page', component: MangaDisplayComponent},
  {path: 'manga/details/:id', component: MangaDetailsComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
