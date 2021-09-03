import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksLoansComponent } from './list-books-loans.component';

describe('ListBooksLoansComponent', () => {
  let component: ListBooksLoansComponent;
  let fixture: ComponentFixture<ListBooksLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBooksLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
