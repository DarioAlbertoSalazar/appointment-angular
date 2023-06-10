import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitias: any[] = [];


  agregarCita(cita: any) {
    this.listCitias.push(cita);
  }

  eliminarCitaListado(index: number) {
    this.listCitias.splice(index, 1);
  }
}
