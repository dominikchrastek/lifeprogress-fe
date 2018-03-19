import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsrecordListComponent } from './wsrecord-list.component';

describe('WsrecordListComponent', () => {
  let component: WsrecordListComponent;
  let fixture: ComponentFixture<WsrecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsrecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsrecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
