import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(SubscriptionService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
