import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from 'projects/insite-kit/src/lib/test/insite-test-bed';
import { setupTests } from 'projects/insite-kit/src/lib/test/test-setup';
import { ContactAdminModalComponent } from './contact-admin-modal.component';

describe('ContactAdminModalComponent', () => {
  let component: ContactAdminModalComponent;
  let fixture: ComponentFixture<ContactAdminModalComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAdminModalComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
