import { TestBed } from '@angular/core/testing';

import { NotificacitionService } from './notificacition.service';

describe('NotificacitionService', () => {
  let service: NotificacitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
