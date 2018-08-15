import { TestBed, inject } from '@angular/core/testing';

import { CadastrosService } from './cadastros.service';

describe('CadastrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastrosService]
    });
  });

  it('should be created', inject([CadastrosService], (service: CadastrosService) => {
    expect(service).toBeTruthy();
  }));
});
