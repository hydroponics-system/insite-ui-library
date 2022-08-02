import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(AuthService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
