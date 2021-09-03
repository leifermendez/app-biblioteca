import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalsComponent } from './journals.component';

describe('JournalsComponent', () => {
  let component: JournalsComponent;
  let fixture: ComponentFixture<JournalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
