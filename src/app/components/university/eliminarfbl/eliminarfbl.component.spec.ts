import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarfblComponent } from './eliminarfbl.component';

describe('EliminarfblComponent', () => {
  let component: EliminarfblComponent;
  let fixture: ComponentFixture<EliminarfblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarfblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarfblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
