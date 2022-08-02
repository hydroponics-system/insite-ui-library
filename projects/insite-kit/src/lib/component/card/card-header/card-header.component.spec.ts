import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { CardHeaderComponent } from './card-header.component';

describe('BannerComponent', () => {
  let component: CardHeaderComponent;
  let fixture: ComponentFixture<CardHeaderComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
