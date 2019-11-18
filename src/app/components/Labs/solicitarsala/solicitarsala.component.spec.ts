import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarsalaComponent } from './solicitarsala.component';

describe('SolicitarsalaComponent', () => {
  let component: SolicitarsalaComponent;
  let fixture: ComponentFixture<SolicitarsalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarsalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
