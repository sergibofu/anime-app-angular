import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchJikanService } from '../fetch-jikan.service';

@Component({
  selector: 'app-manga-display',
  templateUrl: './manga-display.component.html',
  styleUrls: ['./manga-display.component.scss']
})
export class MangaDisplayComponent implements OnInit {
  public topMangas: any = [];
  constructor(private jikan: FetchJikanService, private router: Router) { }

  ngOnInit(): void {
    this.jikan.getTopMangas(1)
    .subscribe((data)=>{
      this.topMangas = data.top;
    })
  }


  getMangaDetails(id: string){
    this.router.navigate(['/manga', 'details', Number(id)]);
  }
}
