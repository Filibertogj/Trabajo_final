import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarfblComponent } from './listarfbl.component';

describe('ListarfblComponent', () => {
  let component: ListarfblComponent;
  let fixture: ComponentFixture<ListarfblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarfblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarfblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
