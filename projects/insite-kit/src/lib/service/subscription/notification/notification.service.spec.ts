import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { RequestService } from '../../request/request.service';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let requestService: RequestService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(NotificationService);
    requestService = TestBed.inject(RequestService);

    spyOn(requestService, 'get');
    spyOn(requestService, 'put');
    spyOn(requestService, 'delete');
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should call get notifications with the given params', () => {
    const params = new Map().set('id', ['1']);
    service.getNotifications(params);

    expect(requestService.get).toHaveBeenCalledWith(
      'api/notification-app/notifications',
      params
    );
  });

  it('should call get notifications by id', () => {
    service.getNotificationById(1);

    expect(requestService.get).toHaveBeenCalledWith(
      'api/notification-app/notifications/1'
    );
  });

  it('should mark the notification as read', () => {
    service.markNotificationRead(12);

    expect(requestService.put).toHaveBeenCalledWith(
      'api/notification-app/notifications/12/read'
    );
  });

  it('should delete the notification by id', () => {
    service.deleteNotification(12);

    expect(requestService.delete).toHaveBeenCalledWith(
      'api/notification-app/notifications/12'
    );
  });

  it('should trigger a notification change', (done) => {
    service.notificationChange().subscribe(() => {
      expect(true).toBeTruthy();
      done();
    });

    service.triggerNotificationUpdate();
  });
});
