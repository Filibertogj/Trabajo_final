import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-solicitarsala',
  templateUrl: './solicitarsala.component.html',
  styleUrls: ['./solicitarsala.component.css']
})
export class SolicitarsalaComponent implements OnInit {

  public sala = {nombre : '',
                    laboratorio: '',
                    fecha: '',
                  };

  constructor(private httpClient: HttpClient) { }
  private labs:any = null;
  ngOnInit() {
    this.getLabs();
  }

  private getLabs(){
    const url = 'http://localhost:9090/university/Laboratorio/all';
    this.httpClient
      .get(url)
      .subscribe(apiData =>( this.labs = apiData))
  }

  private createSolicitud(){
    const url = 'http://localhost:9090/labs/solicitarSala?nombre=pecho'+'&laboratorio='+this.sala.laboratorio+'&fecha='+this.sala.fecha;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          alert("Solicitud Creada")
          window.location.reload();
        })
  }





}
