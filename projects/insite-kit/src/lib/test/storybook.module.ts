import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsiteKitModule } from '../insite-kit.module';
import { environment } from '../test/lib-test-env';

@NgModule({
  imports: [
    InsiteKitModule.forRoot(environment),
    RouterModule.forRoot([], { useHash: true }),
  ],
  exports: [InsiteKitModule],
})
export class StorybookModule {}
