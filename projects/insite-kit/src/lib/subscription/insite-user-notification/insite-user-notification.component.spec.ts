import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { InisteUserNotificationComponent } from './insite-user-notification.component';

describe('InisteUserNotificationComponent', () => {
  let component: InisteUserNotificationComponent;
  let fixture: ComponentFixture<InisteUserNotificationComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(InisteUserNotificationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
