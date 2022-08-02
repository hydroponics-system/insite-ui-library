import { TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { UsernamePipe } from './format-user-name.pipe';

describe('UsernamePipe', () => {
  let service: UsernamePipe;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(UsernamePipe);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
