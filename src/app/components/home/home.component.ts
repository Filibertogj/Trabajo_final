import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public usuario = {nombre : '',
                    pass: ''}

  public ok;
  public perfil;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public login(){
    const url = 'http://localhost:9090/labs/login?nombre='+this.usuario.nombre+'&pass='+this.usuario.pass;
    this.httpClient
      .get(url)
      .subscribe(
        (apiData) => {
          this.ok = JSON.parse(JSON.stringify(apiData));
          this.ok = this.ok.data[0].tipo;
          //this.perfil = this.ok.data[0].tipo;
          if(isNullOrUndefined(this.ok) || this.ok ==""){
            alert("No se pudo iniciar sesion");
          }
          else{
            localStorage.setItem("sesioniniciada", "ok");
            //localStorage.setItem("perfil", this.perfil);
            alert("sesion iniciada");
            window.location.reload();
          }
        }) 
  }


}
