import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
