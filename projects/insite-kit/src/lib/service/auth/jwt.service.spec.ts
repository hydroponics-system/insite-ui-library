import { TestBed } from '@angular/core/testing';
import { JwtHelperService } from '@auth0/angular-jwt';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { InisteTestData } from '../../test/test-data';
import { setupTests } from '../../test/test-setup';
import { JwtService } from './jwt.service';

describe('JwtService', () => {
  let service: JwtService;
  let jwtHelperService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(JwtService);
    jwtHelperService = TestBed.inject(JwtHelperService);

    spyOn(window.localStorage, 'setItem');
    spyOn(window.localStorage, 'removeItem');
    spyOn(jwtHelperService, 'isTokenExpired').and.returnValue(false);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should get auth token from local storage', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );
    expect(service.getToken()).toBeTruthy();
  });

  it('should set user token in local storage', () => {
    service.setToken('fakeToken');

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'token',
      'fakeToken'
    );
  });

  it('should check if user is authenticated VALID', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should check if user is authenticated INVALID', () => {
    expect(service.isAuthenticated()).toBeFalsy();
    expect(jwtHelperService.isTokenExpired).not.toHaveBeenCalled();
  });

  it('should remove user token if it is expired', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );
    jwtHelperService.isTokenExpired.and.returnValue(true);

    expect(service.isAuthenticated()).toBeFalsy();
    expect(jwtHelperService.isTokenExpired).toHaveBeenCalled();
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
