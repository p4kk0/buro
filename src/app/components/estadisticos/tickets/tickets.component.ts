import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styles: []
})
export class TicketsComponent {

  // Radar
   public radarChartLabels:string[] = ['Recepción', 'En desarrollo', 'Pruebas', 'Proceso Despliegue', 'Análisis', 'Documentación', 'Liberación'];

   public radarChartData:any = [
     {data: [65, 59, 90, 81, 56, 55, 40], label: 'En espera'},
     {data: [28, 48, 40, 19, 96, 27, 100], label: 'En proceso'}
   ];
   public radarChartType:string = 'radar';

   // events
   public chartClicked(e:any):void {
     console.log(e);
   }

   public chartHovered(e:any):void {
     console.log(e);
   }

}
