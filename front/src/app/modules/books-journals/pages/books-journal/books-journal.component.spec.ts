import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksJournalComponent } from './books-journal.component';

describe('BooksJournalComponent', () => {
  let component: BooksJournalComponent;
  let fixture: ComponentFixture<BooksJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
