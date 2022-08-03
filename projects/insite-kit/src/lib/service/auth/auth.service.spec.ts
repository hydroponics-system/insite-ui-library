import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthToken } from '../../model/auth-token.model';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { RequestService } from '../request/request.service';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';

describe('AuthService', () => {
  let service: AuthService;
  let requestService: RequestService;
  let jwtService: JwtService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(AuthService);
    requestService = TestBed.inject(RequestService);
    jwtService = TestBed.inject(JwtService);

    spyOn(requestService, 'post').and.returnValue(
      of({ token: 'fakeToken' } as AuthToken)
    );

    spyOn(jwtService, 'setToken');
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate a user', (done) => {
    service.authenticate('test@mail.com', 'fakePassword').subscribe(() => {
      expect(requestService.post).toHaveBeenCalledWith('authenticate', {
        email: 'test@mail.com',
        password: 'fakePassword',
      });
      expect(jwtService.setToken).toHaveBeenCalledWith('fakeToken');
      done();
    });
  });

  it('should authenticate a user', (done) => {
    service.reauthenticate().subscribe(() => {
      expect(requestService.post).toHaveBeenCalledWith('reauthenticate');
      expect(jwtService.setToken).toHaveBeenCalledWith('fakeToken');
      done();
    });
  });
});
