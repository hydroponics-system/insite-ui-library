import { TestModuleMetadata } from '@angular/core/testing';
import { InsiteKitModule } from '../insite-kit.module';
import { AbstractTestBed } from './abstract-test-bed';
import { environment } from './lib-test-env';

export class InsiteTestBed extends AbstractTestBed {
  static override getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [InsiteKitModule.forRoot(environment)],
    };
  }
}
