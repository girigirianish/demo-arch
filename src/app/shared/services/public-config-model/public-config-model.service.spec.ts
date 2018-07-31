import { TestBed, inject } from '@angular/core/testing';
import { PublicConfigModelService } from './public-config-model.service';

describe('PublicConfigModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicConfigModelService]
    });
  });

  it('should be created', inject([PublicConfigModelService], (service: PublicConfigModelService) => {
    expect(service).toBeTruthy();
  }));
});
