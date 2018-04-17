import { Pipe, PipeTransform } from '@angular/core';

const MAX_LENGTH_PREVIEW_TEXT = 100;

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
    transform(value: string, length: number) {
        return value.substring(0, MAX_LENGTH_PREVIEW_TEXT);
    }
}