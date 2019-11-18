import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listarsolicitudes',
  templateUrl: './listarsolicitudes.component.html',
  styleUrls: ['./listarsolicitudes.component.css']
})
export class ListarsolicitudesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  private solicitudes:any;
  private solicitudesLab;
  
  ngOnInit() {
    this.getSolicitudes();
  }

  private detalleSolicitud(id){
    const url = 'http://localhost:9090/labs/getOne?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          alert("Detalle Solicitud =>"+JSON.stringify(apiData) );
        })
  }

  private aprobarSolicitud(solicitud){
    const url = 'http://localhost:9090/labs/aprobarDenegar?solicitud='+solicitud+'&aprobarDenegar=true';
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          alert("¡Solicitud Aprobada!" );
          window.location.reload();
        })
  }

  private getSolicitudes(){
    const url = 'http://localhost:9090/labs/all';
    this.httpClient
      .get(url)
      .subscribe(apiData =>(this.solicitudes =JSON.parse(JSON.stringify(apiData)).data))
  }



  private eliminarSolicitud(solicitud){
    const url = 'http://localhost:9090/labs/aprobarDenegar?solicitud='+solicitud+'&aprobarDenegar=false';
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          alert("¡Solicitud rechazada!" );
          window.location.reload();
        })
  }










}
