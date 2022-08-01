import { TestModuleMetadata } from '@angular/core/testing';
import { InsiteKitModule } from '../insite-kit.module';
import { AbstractTestBed } from './abstract-test-bed';

export class InsiteTestBed extends AbstractTestBed {
  static override getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [InsiteKitModule],
      declarations: [],
      providers: [],
    };
  }
}
