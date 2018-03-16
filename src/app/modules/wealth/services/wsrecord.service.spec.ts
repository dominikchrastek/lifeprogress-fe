import { TestBed, inject } from '@angular/core/testing';

import { WsrecordService } from './wsrecord.service';

describe('WsrecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsrecordService]
    });
  });

  it('should be created', inject([WsrecordService], (service: WsrecordService) => {
    expect(service).toBeTruthy();
  }));
});
