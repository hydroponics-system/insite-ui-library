import { Injectable, NgModule } from '@angular/core';
import {
  IndividualConfig,
  ToastPackage,
  ToastRef,
  ToastrModule,
} from 'ngx-toastr';

@Injectable()
export class MockToastPackage extends ToastPackage {
  constructor() {
    const toastConfig = { toastClass: 'customToast' };
    super(
      1,
      <IndividualConfig>toastConfig,
      'test message',
      'test title',
      'show',
      new ToastRef(null)
    );
  }
}

@NgModule({
  providers: [{ provide: ToastPackage, useClass: MockToastPackage }],
  imports: [ToastrModule.forRoot()],
  exports: [ToastrModule],
})
export class ToastrTestingModule {}
