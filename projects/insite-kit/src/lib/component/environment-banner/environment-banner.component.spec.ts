import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { EnvironmentBannerComponent } from './environment-banner.component';

describe('EnvironmentBannerComponent', () => {
  let component: EnvironmentBannerComponent;
  let fixture: ComponentFixture<EnvironmentBannerComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentBannerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
