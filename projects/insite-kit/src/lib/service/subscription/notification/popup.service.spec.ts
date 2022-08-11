import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { PopupService } from './popup.service';

describe('PopupService', () => {
  let service: PopupService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(PopupService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
