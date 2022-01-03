import { TestBed } from '@angular/core/testing';

import { EmployeeguardGuard } from './employeeguard.guard';

describe('EmployeeguardGuard', () => {
  let guard: EmployeeguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
