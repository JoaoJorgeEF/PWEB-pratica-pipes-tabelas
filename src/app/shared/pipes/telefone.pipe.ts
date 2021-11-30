import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonePipe'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length === 8){
      return `${value.substr(0, 4)}-${value.substr(4, 4)}`;
    }
    if (value && value.length === 10){
      return `(0${value.substr(0, 2)}) ${value.substr(2, 4)}-${value.substr(6, 4)}`;
    }
    if (value && value.length === 11){
      return `(${value.substr(0, 3)}) ${value.substr(3, 4)}-${value.substr(7, 4)}`;
    }
    return value;
  }

}


/*- se tiver 8 dígitos, transformar para o padrão: 9999-8888
                                                   0123 4567                                       012  3456 7899
- se tiver 10 (ddd com 2 dígitos) ou 11 (ddd com 0 no início) dígitos, transformar para o padrão: (ddd) 9999-8888*/
