import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendariolaboratorioComponent } from './calendariolaboratorio.component';

describe('CalendariolaboratorioComponent', () => {
  let component: CalendariolaboratorioComponent;
  let fixture: ComponentFixture<CalendariolaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendariolaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendariolaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
