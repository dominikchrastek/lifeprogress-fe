import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsrecordComponent } from './wsrecord.component';

describe('WsrecordComponent', () => {
  let component: WsrecordComponent;
  let fixture: ComponentFixture<WsrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
