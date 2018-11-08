import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'set' })
export class SetPipe implements PipeTransform {
  public transform(value, args: string[]): any {
    const result = [];
    for (let i = 0; i < value; i++) {
      result.push(i);
    }
    return result;
  }
}
