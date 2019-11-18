import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {

  constructor() { }
  ok;
  sesionIniciada;
  ngOnInit() {
    this.ok = localStorage.getItem("sesioniniciada");
  }

  buscar( termino:string ){
    console.log(termino);
  }

  logout(){
    //localStorage.setItem("sesioniniciada", "");
    localStorage.clear();
    window.location.reload();
  }

}
