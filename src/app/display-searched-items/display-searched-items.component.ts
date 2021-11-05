import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-searched-items',
  templateUrl: './display-searched-items.component.html',
  styleUrls: ['./display-searched-items.component.scss']
})
export class DisplaySearchedItemsComponent implements OnInit {

  @Input() response;
  public searchedItems: any[] = [];
  public animeOrManga: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.response);
    this.animeOrManga = this.response.animeOrManga;
    this.searchedItems = this.response.results;
  }

  getItemDetails(id: string){
    this.router.navigate([`/${this.animeOrManga}`, 'details', Number(id)]);
  }

}
