import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { ModalBodyComponent } from './modal-body.component';

describe('ModalBodyComponent', () => {
  let component: ModalBodyComponent;
  let fixture: ComponentFixture<ModalBodyComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBodyComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
