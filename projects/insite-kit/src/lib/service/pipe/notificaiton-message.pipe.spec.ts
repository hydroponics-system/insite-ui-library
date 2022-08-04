import { TestBed } from '@angular/core/testing';
import { Notification, NotificationType } from '../../model/notification.model';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { NotificationMessagePipe } from './notification-message.pipe';

describe('NotificationMessagePipe', () => {
  let pipe: NotificationMessagePipe;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    pipe = TestBed.inject(NotificationMessagePipe);
  });

  it('should create service', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be change to system settings notification', () => {
    const notification: Notification = { type: NotificationType.SYSTEM_UPDATE };
    expect(pipe.transform(notification)).toEqual('Change to System Settings');
  });

  it('should be new user notification', () => {
    const notification: Notification = { type: NotificationType.USER };
    expect(pipe.transform(notification)).toEqual('New User Request');
  });

  it('should be new request for unknown notification type', () => {
    const notification: Notification = { type: null };
    expect(pipe.transform(notification)).toEqual('New Request');
  });

  it('should be new request for no notification object', () => {
    expect(pipe.transform(null)).toEqual('New Request');
  });
});
