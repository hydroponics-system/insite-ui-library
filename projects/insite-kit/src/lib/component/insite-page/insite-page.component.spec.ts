import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { InsitePageComponent } from './insite-page.component';

describe('InsitePageComponent', () => {
  let component: InsitePageComponent;
  let fixture: ComponentFixture<InsitePageComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(InsitePageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
