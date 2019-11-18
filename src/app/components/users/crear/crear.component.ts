import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public usuarios = {nombre : '',
                    apellido: '',
                    password: '',
                    tipo: '',
                  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

private createUser(){
  const url = 'http://localhost:9090/users/add?nombre='+this.usuarios.nombre+'&apellido='+this.usuarios.apellido+'&password='+this.usuarios.password+'&tipo='+this.usuarios.tipo;
  this.httpClient
    .get(url)
    .subscribe(
      (apiData) => {
        console.log(apiData);
        alert("Usuario Creado")
        window.location.reload();
      })
}
}