import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrderPipe'
})
export class FilterOrderPipePipe implements PipeTransform {

  transform(values: string, arg: string): string {

  let resultado: string[]=[]

  for ( const value of values){
    if(value.toLocaleLowerCase().indexOf(arg)>-1){
      resultado = [...resultado,value]
    }
  }

  return resultado

  }

}
