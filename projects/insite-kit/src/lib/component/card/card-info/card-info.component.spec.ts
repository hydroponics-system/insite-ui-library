import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { CardInfoComponent } from './card-info.component';

describe('CardInfoComponent', () => {
  let component: CardInfoComponent;
  let fixture: ComponentFixture<CardInfoComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
