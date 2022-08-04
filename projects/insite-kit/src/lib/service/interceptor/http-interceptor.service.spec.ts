import { HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { InisteTestData } from '../../test/test-data';
import { setupTests } from '../../test/test-setup';
import { BasicHttpInterceptorService } from './http-interceptor.service';

fdescribe('BasicHttpInterceptorService', () => {
  let service: BasicHttpInterceptorService;
  let handler: HttpHandler;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(BasicHttpInterceptorService);
    handler = TestBed.inject(HttpHandler);

    spyOn(handler, 'handle');
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should handle the request when user has token', (done) => {
    spyOn(window.localStorage, 'getItem').and.returnValue(
      InisteTestData.getToken()
    );

    const request = new HttpRequest<any>('GET', 'fake-url');
    const next: HttpHandler = {
      handle(req: any) {
        return of(req);
      },
    };

    service.intercept(request, next).subscribe((res: any) => {
      const authHeader: any = res.headers.lazyUpdate[0];
      expect(authHeader.name).toEqual('Authorization');
      expect(authHeader.value).toEqual(`Bearer: ${InisteTestData.getToken()}`);
      done();
    });
  });

  it('should handle the request when user is NOT authenticated', (done) => {
    const request = new HttpRequest<any>('GET', 'fake-url');
    const next: HttpHandler = {
      handle(req: any) {
        return of(req);
      },
    };

    service.intercept(request, next).subscribe((res: any) => {
      expect(res.headers.lazyUpdate).toBeNull();
      done();
    });
  });
});
