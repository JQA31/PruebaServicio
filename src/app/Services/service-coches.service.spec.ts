import { TestBed } from '@angular/core/testing';

import { ServiceCochesService } from './service-coches.service';

describe('ServiceCochesService', () => {
  let service: ServiceCochesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCochesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
