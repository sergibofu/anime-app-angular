import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MangaDisplayComponent } from './manga-display/manga-display.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { AnimeDisplayComponent } from './anime-display/anime-display.component';
import { SearchComponent } from './search/search.component';
import { FetchJikanService } from './fetch-jikan.service';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MangaDisplayComponent,
    AboutMeComponent,
    HomeComponent,
    AnimeDisplayComponent,
    SearchComponent,
    AnimeDetailsComponent,
    MangaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchJikanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
