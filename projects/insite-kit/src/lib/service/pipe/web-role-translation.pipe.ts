import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'webRoleTranslate' })
export class WebRoleTranslationPipe implements PipeTransform {
  constructor() {}
  transform(value: string): string {
    return value;
  }
}
