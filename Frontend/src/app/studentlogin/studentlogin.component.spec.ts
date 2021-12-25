import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentloginComponent } from './studentlogin.component';

describe('StudentloginComponent', () => {
  let component: StudentloginComponent;
  let fixture: ComponentFixture<StudentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
