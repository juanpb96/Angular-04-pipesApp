import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toUpper'
})
export class ToUpperPipe implements PipeTransform {
    transform( value: string, wantUppercase: boolean = true ): string {
        return wantUppercase ? value.toUpperCase() : value;
        
    }
}