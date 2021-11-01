import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public toggleFlag: boolean = false;

  public menuOption1 = 'Titulo';
  public menuOption2 = 'Autor';

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    let temp = this.menuOption1;
    this.menuOption1 = this.menuOption2;
    this.menuOption2 = temp;
  }

  public search(input: any){
    let query = document.querySelector('#title-item');
    console.log(query);
    let searchBy = this.menuOption1;
  }

}
