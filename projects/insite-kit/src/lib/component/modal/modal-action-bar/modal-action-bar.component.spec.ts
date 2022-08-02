import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { ModalActionBarComponent } from './modal-action-bar.component';

describe('ModalActionBarComponent', () => {
  let component: ModalActionBarComponent;
  let fixture: ComponentFixture<ModalActionBarComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalActionBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
