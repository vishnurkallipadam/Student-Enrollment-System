import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkEntryComponent } from './mark-entry.component';

describe('MarkEntryComponent', () => {
  let component: MarkEntryComponent;
  let fixture: ComponentFixture<MarkEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
