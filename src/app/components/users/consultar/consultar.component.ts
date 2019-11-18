import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})

  export class ConsultarComponent implements OnInit {
    private usuarios:any = null;
    private resultadoEliminarUsuarios;
    constructor(private httpClient: HttpClient) { }
  
    sesionIniciada;
    ngOnInit() {
      this.getUsuarios();
    }


  private getUsuarios(){
    const url = 'http://localhost:9090/users/all';
    this.httpClient
      .get(url)
      .subscribe(apiData =>(this.usuarios = apiData.users))
  }

  private eliminarUsuarios(id){
    const url = 'http://localhost:9090/users/delete?id='+id;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          console.log(apiData);
          alert("Usuario Eliminado")
          this.ngOnInit()
        }) 
  }




}
