import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(NotificationService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
