import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { BasicHttpInterceptorService } from './http-interceptor.service';

describe('BasicHttpInterceptorService', () => {
  let service: BasicHttpInterceptorService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(BasicHttpInterceptorService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
