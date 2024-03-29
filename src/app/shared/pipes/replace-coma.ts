import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name : 'replaceComa'
})
export class ReplaceComa implements PipeTransform{

    transform(value : string) : string {
        if( !!value ){
            return value.replace(/./, ',');
        }
        else {
            return '';
        }
    }
}