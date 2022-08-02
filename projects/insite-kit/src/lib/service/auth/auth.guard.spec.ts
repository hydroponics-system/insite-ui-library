import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let service: AuthGuard;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(AuthGuard);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
