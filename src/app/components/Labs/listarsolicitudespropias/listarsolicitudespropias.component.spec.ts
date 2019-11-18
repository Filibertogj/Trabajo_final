import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsolicitudespropiasComponent } from './listarsolicitudespropias.component';

describe('ListarsolicitudespropiasComponent', () => {
  let component: ListarsolicitudespropiasComponent;
  let fixture: ComponentFixture<ListarsolicitudespropiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarsolicitudespropiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsolicitudespropiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
