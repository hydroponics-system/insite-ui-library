import { ProviderToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { UrlService } from './url.service';

const ENV_TOKEN = 'env' as unknown as ProviderToken<any>;

describe('UrlService', () => {
  let service: UrlService;
  let environmentConfig;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(UrlService);
    environmentConfig = TestBed.inject(ENV_TOKEN);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should get the api URL for PROD environment', () => {
    expect(service.getAPIUrl()).toEqual('https://test-host.com');
  });

  it('should get the api URL for LOCAL environment', () => {
    spyOn(environmentConfig, 'isLocal').and.returnValue(true);
    expect(service.getAPIUrl()).toEqual('http://test-host.com');
  });

  it('should get the socket URL for PROD environment', () => {
    expect(service.getSocketAPIUrl()).toEqual(
      'wss://test-host.com/api/subscription'
    );
  });

  it('should get the socket URL for LOCAL environment', () => {
    spyOn(environmentConfig, 'isLocal').and.returnValue(true);
    expect(service.getSocketAPIUrl()).toEqual(
      'ws://test-host.com/api/subscription'
    );
  });
});
