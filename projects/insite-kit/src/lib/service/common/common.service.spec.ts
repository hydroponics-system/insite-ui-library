import { TestBed } from '@angular/core/testing';
import { User } from '../../model/user.model';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(CommonService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should get a new copy of an object', () => {
    const originalObj: User = { firstName: 'test' };
    const referenceObj = originalObj;
    const copyedObj: User = service.copyObject(originalObj);

    expect(copyedObj.firstName).toEqual('test');
    expect(referenceObj.firstName).toEqual('test');

    originalObj.firstName = 'newName';

    expect(copyedObj.firstName).toEqual('test');
    expect(referenceObj.firstName).toEqual('newName');
  });

  it('should format the date', () => {
    let dateObj = new Date(500000000000);
    let dateString = '1968-11-16T00:00:00';

    expect(service.formatDate(dateObj)).toEqual('11/04/1985');
    expect(service.formatDate(dateString)).toEqual('11/16/1968');
  });

  it('should format the users name', () => {
    const userFirstAndLast: User = { firstName: 'Test', lastName: 'User' };
    const userFirstOnly: User = { firstName: 'Test' };

    expect(service.getFormattedName(userFirstAndLast)).toEqual('Test User');
    expect(service.getFormattedName(userFirstOnly)).toEqual('Test');
  });
});
