import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultarfbl',
  templateUrl: './consultarfbl.component.html'
})
export class ConsultarfblComponent implements OnInit {
  private facultades:any = null;
  private bloques:any = null;
  private laboratorios:any = null;
  private resultadoEliminarFacultad;
  constructor(private httpClient: HttpClient) { }

  sesionIniciada;
  ngOnInit() {
    this.getFacultades();
    this.getBloques();
    this.getLaboratorios();
  }

  private getFacultades(){
    const url = 'http://localhost:9090/university/Facultad/all';
    this.httpClient
      .get(url)
      .subscribe(apiData =>(this.facultades =apiData))
  }

  private eliminarFacultad(id){
    const url = 'http://localhost:9090/university/Facultad/delete?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          alert("Facultad eliminada")
          this.ngOnInit()
        }) 
  }

  private listarFacultad(id){
    const url = 'http://localhost:9090/university/Facultad/getOne?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          this.ngOnInit()
        })
  }

  private detalleFacultad(id){
    const url = 'http://localhost:9090/university/Facultad/getOne?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          alert("Detalle facultad =>"+JSON.stringify(apiData) );
        })
  }
  private getBloques(){
    const url = 'http://localhost:9090/university/Bloque/all';
    this.httpClient
      .get(url)
      .subscribe(apiData =>(this.bloques =apiData))
  }

  private eliminarBloque(id){
    const url = 'http://localhost:9090/university/Bloque/delete?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          this.ngOnInit()
        })
  }

  private detalleBloque(id){
    const url = 'http://localhost:9090/university/Bloque/getOne?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          alert("Detalle Bloque =>"+JSON.stringify(apiData) );
        })
  }

  private getLaboratorios(){
    const url = 'http://localhost:9090/university/Laboratorio/all';
    this.httpClient
      .get(url)
      .subscribe(apiData =>(this.laboratorios =apiData))
  }

  private detalleLaboratorio(id){
    const url = 'http://localhost:9090/university/Laboratorio/getOne?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          alert("Detalle Laboratorio =>"+JSON.stringify(apiData) );
        })
  }

  private eliminarLaboratorio(id){
    const url = 'http://localhost:9090/university/Laboratorio/delete?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          this.ngOnInit()
        })
  }

}
