import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(UrlService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
