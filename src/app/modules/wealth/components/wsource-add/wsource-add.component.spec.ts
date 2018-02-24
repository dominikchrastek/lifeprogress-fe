import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsourceAddComponent } from './wsource-add.component';

describe('WsourceAddComponent', () => {
  let component: WsourceAddComponent;
  let fixture: ComponentFixture<WsourceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsourceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
