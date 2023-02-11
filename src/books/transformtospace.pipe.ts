import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'transfortospace'
})
export class TransformToSpacePipe implements PipeTransform {
  transform(value: string, character: string) : string {
    return value.replace(character, ' ');
  }
}
