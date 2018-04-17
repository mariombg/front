import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosEditComponent } from './empleados-edit.component';

describe('EmpleadosEditComponent', () => {
  let component: EmpleadosEditComponent;
  let fixture: ComponentFixture<EmpleadosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
