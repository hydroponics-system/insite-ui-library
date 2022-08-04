import { TestBed } from '@angular/core/testing';
import { User } from '../../model/user.model';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { UsernamePipe } from './format-user-name.pipe';

describe('UsernamePipe', () => {
  let pipe: UsernamePipe;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    pipe = TestBed.inject(UsernamePipe);
  });

  it('should create service', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format user with first and last name', () => {
    const formatUser: User = { firstName: 'Test', lastName: 'User' };
    expect(pipe.transform(formatUser)).toEqual('Test User');
  });

  it('should format user with first name', () => {
    const formatUser: User = { firstName: 'Test' };
    expect(pipe.transform(formatUser)).toEqual('Test');
  });

  it('should format undefined user', () => {
    expect(pipe.transform(null)).toEqual('-');
  });
});
