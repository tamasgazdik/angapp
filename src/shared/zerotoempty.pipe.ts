import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'zeroToEmpty'
})
export class ZeroToEmptyPipe implements PipeTransform{
    transform(value: number) : (number | null) {
        if(value == 0)
        {
            return null;
        }
        return value;
    }
}