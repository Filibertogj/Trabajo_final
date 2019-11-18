import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crearfbl',
  templateUrl: './crearfbl.component.html'
})
export class CrearfblComponent implements OnInit {

  public facultad = {name : '',
                    desc: ''};

  public bloque = {name : '',
                    desc: ''};
  
  public laboratorio = {name : '',
                    desc: ''};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  private createFacult(){
    const url = 'http://localhost:9090/university/Facultad/add?name='+this.facultad.name+'&description='+this.facultad.desc;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          alert("Facultad Creada")
          window.location.reload();
        })
  }
  private createBloque(){
    const url = 'http://localhost:9090/university/Bloque/add?name='+this.bloque.name+'&description='+this.bloque.desc;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          alert("Bloque Creado")
          window.location.reload();
        })
  }
  private createLaboratory(){
    const url = 'http://localhost:9090/university/Laboratorio/add?name='+this.laboratorio.name+'&description='+this.laboratorio.desc;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          alert("Laboratorio Creado")
          window.location.reload();
        })
  }
}
