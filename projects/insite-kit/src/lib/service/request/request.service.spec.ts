import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { RequestService } from './request.service';

describe('RequestService', () => {
  let service: RequestService;
  let httpClient: HttpClient;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(RequestService);
    httpClient = TestBed.inject(HttpClient);

    spyOn(httpClient, 'get');
    spyOn(httpClient, 'post');
    spyOn(httpClient, 'put');
    spyOn(httpClient, 'delete');
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should perform a GET call with NO params', () => {
    service.get<any>('/api/test/fake');

    expect(httpClient.get).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake'
    );
  });

  it('should perform a GET call WITH params', () => {
    service.get<any>('/api/test/fake', new Map().set('userId', ['1']));

    expect(httpClient.get).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake?userId=1'
    );
  });

  it('should perform a POST call with NO params', () => {
    service.post<any>('/api/test/fake');

    expect(httpClient.post).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake',
      undefined
    );
  });

  it('should perform a POST call WITH params', () => {
    service.post<any>('/api/test/fake', { firstName: 'test' });

    expect(httpClient.post).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake',
      { firstName: 'test' }
    );
  });

  it('should perform a PUT call with NO params', () => {
    service.put<any>('/api/test/fake');

    expect(httpClient.put).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake',
      undefined
    );
  });

  it('should perform a PUT call WITH params', () => {
    service.put<any>('/api/test/fake', { lastName: 'test' });

    expect(httpClient.put).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake',
      { lastName: 'test' }
    );
  });

  it('should perform a DELETE call', () => {
    service.delete<any>('/api/test/fake');

    expect(httpClient.delete).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake'
    );
  });

  it('should perform a DOWNLOAD call with NO params', () => {
    const params: any = { responseType: 'blob' };
    service.download('/api/test/fake');

    expect(httpClient.get).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake',
      params
    );
  });

  it('should perform a DOWNLOAD call WITH params', () => {
    const params: any = { responseType: 'blob' };
    service.download('/api/test/fake', new Map().set('userId', ['1']));

    expect(httpClient.get).toHaveBeenCalledWith(
      'https://test-host.com//api/test/fake?userId=1',
      params
    );
  });
});
