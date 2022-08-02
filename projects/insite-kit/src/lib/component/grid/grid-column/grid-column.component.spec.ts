import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsiteTestBed } from '../../../test/insite-test-bed';
import { setupTests } from '../../../test/test-setup';
import { GridColumnComponent } from './grid-column.component';

describe('GridColumnComponent', () => {
  let component: GridColumnComponent;
  let fixture: ComponentFixture<GridColumnComponent>;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColumnComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
