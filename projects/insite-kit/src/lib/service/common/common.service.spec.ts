import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(CommonService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
