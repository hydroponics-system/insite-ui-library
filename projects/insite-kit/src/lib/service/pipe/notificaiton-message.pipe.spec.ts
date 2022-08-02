import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { NotificationMessagePipe } from './notification-message.pipe';

describe('NotificationMessagePipe', () => {
  let service: NotificationMessagePipe;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(NotificationMessagePipe);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
