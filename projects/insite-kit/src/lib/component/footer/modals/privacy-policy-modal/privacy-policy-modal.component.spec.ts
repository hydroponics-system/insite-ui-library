import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from 'projects/insite-kit/src/lib/test/insite-test-bed';
import { setupTests } from 'projects/insite-kit/src/lib/test/test-setup';
import { PrivacyPolicyModalComponent } from './privacy-policy-modal.component';

describe('PrivacyPolicyModalComponent', () => {
  let component: PrivacyPolicyModalComponent;
  let fixture: ComponentFixture<PrivacyPolicyModalComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyModalComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
