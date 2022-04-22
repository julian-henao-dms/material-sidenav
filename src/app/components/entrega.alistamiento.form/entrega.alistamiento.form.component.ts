import { Component, OnInit } from '@angular/core';
import { EntregaAlistamiento } from 'src/app/components/entrega.alistamiento.form/interfaces/entrega-alistamiento';


@Component({
  selector: 'app-entrega-alistamiento-form',
  templateUrl: './entrega.alistamiento.form.component.html',
  styleUrls: ['./entrega.alistamiento.form.component.scss']
})
export class EntregaAlistamientoFormComponent implements OnInit {

  SI = 1;
  NO = 0;
  public data: EntregaAlistamiento;
 
  
  constructor() { 
    this.data = {
      vehiculo_solicitado: '',
      fecha: new Date,
      sala: '',
      chasis: 0,
      cumplimiento: 0,
      limpieza_int: 0,
      limpieza_ext: 0,
      herramientas: 0,
      kit_llaves: 0,
      manuales: 0,
      garantia: 0,
      VDQI: 0,
      informes_flash_aves: 0,
      PDI: 0,
      aire: 0,
      radio: 0,
      cojineria: 0,
      antena: 0,
      notas: '',
      conductor: '',
      firma_sala: '',
      hora: new Date,
    }
  }

  ngOnInit(): void {
 
  }

  onSubmit(data: EntregaAlistamiento){
    console.log(this.data);

  }

 

}
