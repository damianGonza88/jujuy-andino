import { Pipe, PipeTransform } from '@angular/core';
import { Socio } from '../socio.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(socios: Socio[], ...args: unknown[]): Socio[] {

    return [];
  }

}
