import { TestBed } from '@angular/core/testing';

import { Transferlist.ServiceService } from './transferlist.service.service';

describe('Transferlist.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Transferlist.ServiceService = TestBed.get(Transferlist.ServiceService);
    expect(service).toBeTruthy();
  });
});
