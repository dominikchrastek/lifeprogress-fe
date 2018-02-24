import { TestBed, inject } from '@angular/core/testing';

import { WsourceService } from './wsource.service';

describe('WsourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsourceService],
    });
  });

  it(
    'should be created',
    inject([WsourceService], (service: WsourceService) => {
      expect(service).toBeTruthy();
    }),
  );
});
