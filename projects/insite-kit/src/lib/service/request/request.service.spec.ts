import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { RequestService } from './request.service';

describe('RequestService', () => {
  let service: RequestService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(RequestService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
