import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { NotificationMessageService } from './notification-message.service';

fdescribe('NotificationMessageService', () => {
  let service: NotificationMessageService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(NotificationMessageService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
