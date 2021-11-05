import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchedItemsComponent } from './display-searched-items.component';

describe('DisplaySearchedItemsComponent', () => {
  let component: DisplaySearchedItemsComponent;
  let fixture: ComponentFixture<DisplaySearchedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySearchedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySearchedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
