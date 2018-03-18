import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsourceUserComponent } from './wsource-user.component';

describe('WsourceUserComponent', () => {
  let component: WsourceUserComponent;
  let fixture: ComponentFixture<WsourceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsourceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsourceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
