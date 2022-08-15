import { TestModuleMetadata } from '@angular/core/testing';
import { InsiteKitModule } from '../insite-kit.module';
import { AbstractTestBed } from './abstract-test-bed';
import { environment } from './lib-test-env';
import { ToastrTestingModule } from './toastr-testing.module';

export class InsiteTestBed extends AbstractTestBed {
  static override getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [InsiteKitModule.forRoot(environment), ToastrTestingModule],
    };
  }
}
