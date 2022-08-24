import { TestBed } from '@angular/core/testing';
import { RxStomp } from '@stomp/rx-stomp';
import { of } from 'rxjs';
import { JwtService } from '../service/auth/jwt.service';
import { InsiteTestBed } from '../test/insite-test-bed';
import { InisteTestData } from '../test/test-data';
import { setupTests } from '../test/test-setup';
import { STOMP_SOCKET_CONFIG } from './stomp.config';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  let service: SubscriptionService;
  let jwtService: JwtService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(SubscriptionService);
    jwtService = TestBed.inject(JwtService);

    spyOn(service, 'activate');
    spyOn(service, 'configure');
    spyOn(jwtService, 'getToken').and.returnValue(InisteTestData.getToken());
    spyOn(RxStomp.prototype, 'watch').and.returnValue(
      of({ body: '{"id":1}' } as any)
    );
    spyOn(service, 'subscriptionSession').and.returnValue(of('fakeUUID'));
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the websocket connection', () => {
    service.init();

    expect(service.configure).toHaveBeenCalledWith(STOMP_SOCKET_CONFIG);
    expect(service.configure).toHaveBeenCalledWith({
      brokerURL: `wss://test-host.com/subscription/socket?${InisteTestData.getToken()}`,
    });
    expect(service.activate).toHaveBeenCalled();
  });

  it('should NOT initialize when the connection is already established', () => {
    Object.defineProperty(service, 'active', { value: true });
    service.init();

    expect(service.configure).not.toHaveBeenCalled();
    expect(service.activate).not.toHaveBeenCalled();
  });

  it('should listen to the connection on the socket path for unique user', (done) => {
    service.listen('new/path', true).subscribe((res) => {
      expect(service.watch).toHaveBeenCalledWith('new/path-fakeUUID');
      expect(res.id).toEqual(1);
      done();
    });
  });
});
