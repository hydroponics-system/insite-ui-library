import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { JwtService } from './jwt.service';

describe('JwtService', () => {
  let service: JwtService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(JwtService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
