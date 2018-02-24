import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsourceComponent } from './wsource.component';

describe('WsouceComponent', () => {
  let component: WsourceComponent;
  let fixture: ComponentFixture<WsourceComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WsourceComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
