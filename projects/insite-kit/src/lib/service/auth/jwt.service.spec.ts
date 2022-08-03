import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { InisteTestData } from '../../test/test-data';
import { setupTests } from '../../test/test-setup';
import { JwtService } from './jwt.service';

describe('JwtService', () => {
  let service: JwtService;
  let jwtHelperService;
  let router;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(JwtService);
    jwtHelperService = TestBed.inject(JwtHelperService);
    router = TestBed.inject(Router);

    spyOn(window.localStorage, 'setItem');
    spyOn(window.localStorage, 'removeItem');
    spyOn(router, 'navigate');
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

  it('should perform a get without override token', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );
    expect(service.get('env')).toEqual('LOCAL');
  });

  it('should perform a get WITH an override token', () => {
    expect(service.get('env', InisteTestData.getToken())).toEqual('LOCAL');
  });

  it('should get user id', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );

    expect(service.getUserId()).toEqual(6);
  });

  it('should get web role', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );

    expect(service.getWebRole()).toEqual('USER');
  });

  it('should get web role', () => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );

    expect(service.getUser()).toEqual({
      id: 6,
      firstName: 'Test',
      lastName: 'User',
      email: 'test@user.com',
      webRole: 'USER',
    });
  });

  it('should log the user out', () => {
    service.logOut();

    expect(window.localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
