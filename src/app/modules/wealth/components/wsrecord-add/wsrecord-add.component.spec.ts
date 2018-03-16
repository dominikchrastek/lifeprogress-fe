import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsrecordAddComponent } from './wsrecord-add.component';

describe('WsrecordAddComponent', () => {
  let component: WsrecordAddComponent;
  let fixture: ComponentFixture<WsrecordAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsrecordAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsrecordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
