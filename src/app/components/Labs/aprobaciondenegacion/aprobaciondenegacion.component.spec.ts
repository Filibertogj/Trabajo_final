import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobaciondenegacionComponent } from './aprobaciondenegacion.component';

describe('AprobaciondenegacionComponent', () => {
  let component: AprobaciondenegacionComponent;
  let fixture: ComponentFixture<AprobaciondenegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobaciondenegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobaciondenegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
