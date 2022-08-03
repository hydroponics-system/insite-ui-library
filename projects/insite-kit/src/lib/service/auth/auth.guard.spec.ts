import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { AuthGuard } from './auth.guard';
import { JwtService } from './jwt.service';

describe('AuthGuard', () => {
  let service: AuthGuard;
  let router: Router;
  let jwtService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    jwtService = TestBed.inject(JwtService);

    spyOn(router, 'navigate');
    spyOn(jwtService, 'isAuthenticated').and.returnValue(true);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should activate the route', () => {
    let snapshot: any = { routeConfig: { path: 'not-login' } };
    expect(service.canActivate(snapshot)).toBeTruthy();
  });

  it('should NOT activate the route with valid token when on login page', () => {
    let snapshot: any = { routeConfig: { path: 'login' } };

    expect(service.canActivate(snapshot)).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should NOT activate the route with invalid token and NOT on the login page', () => {
    jwtService.isAuthenticated.and.returnValue(false);
    let snapshot: any = { routeConfig: { path: 'not-login' } };

    expect(service.canActivate(snapshot)).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should activate the route with invalid token and on the login page', () => {
    jwtService.isAuthenticated.and.returnValue(false);
    let snapshot: any = { routeConfig: { path: 'login' } };

    expect(service.canActivate(snapshot)).toBeTruthy();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
