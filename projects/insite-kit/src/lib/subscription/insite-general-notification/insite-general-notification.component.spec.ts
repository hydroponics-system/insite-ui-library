import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { InisteGeneralNotificationComponent } from './insite-general-notification.component';

describe('InisteGeneralNotificationComponent', () => {
  let component: InisteGeneralNotificationComponent;
  let fixture: ComponentFixture<InisteGeneralNotificationComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(InisteGeneralNotificationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
