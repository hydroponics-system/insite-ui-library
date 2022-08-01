import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JwtService } from '../../service/auth/jwt.service';
import { InsiteTestBed } from '../../test/insite-test-bed';
import { setupTests } from '../../test/test-setup';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let jwtService: JwtService;

  setupTests(async () => InsiteTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    jwtService = TestBed.inject(JwtService);

    spyOn(jwtService, 'get').and.returnValue('testName');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
