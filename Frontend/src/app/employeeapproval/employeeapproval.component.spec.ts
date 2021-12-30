import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeapprovalComponent } from './employeeapproval.component';

describe('EmployeeapprovalComponent', () => {
  let component: EmployeeapprovalComponent;
  let fixture: ComponentFixture<EmployeeapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
