import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { WebRoleTranslationPipe } from './web-role-translation.pipe';

describe('WebRoleTranslationPipe', () => {
  let service: WebRoleTranslationPipe;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(WebRoleTranslationPipe);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
