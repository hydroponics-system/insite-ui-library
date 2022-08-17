import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { IndicatorLightComponent } from './indicator-light.component';

describe('IndicatorLightComponent', () => {
  let component: IndicatorLightComponent;
  let fixture: ComponentFixture<IndicatorLightComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorLightComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
