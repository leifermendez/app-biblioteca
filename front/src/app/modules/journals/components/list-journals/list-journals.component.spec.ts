import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJournalsComponent } from './list-journals.component';

describe('ListJournalsComponent', () => {
  let component: ListJournalsComponent;
  let fixture: ComponentFixture<ListJournalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJournalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
