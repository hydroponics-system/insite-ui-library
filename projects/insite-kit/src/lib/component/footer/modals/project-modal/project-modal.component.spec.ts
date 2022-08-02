import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from 'projects/insite-kit/src/lib/test/insite-test-bed';
import { setupTests } from 'projects/insite-kit/src/lib/test/test-setup';
import { ProjectModalComponent } from './project-modal.component';

describe('ProjectModalComponent', () => {
  let component: ProjectModalComponent;
  let fixture: ComponentFixture<ProjectModalComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
