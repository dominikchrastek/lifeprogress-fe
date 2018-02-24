import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsourceListComponent } from './wsource-list.component';

describe('WsourceListComponent', () => {
  let component: WsourceListComponent;
  let fixture: ComponentFixture<WsourceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsourceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
