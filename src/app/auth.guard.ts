import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { isNullOrUndefined } from 'util';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {}
    sesionIniciada;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.sesionIniciada = localStorage.getItem("sesioniniciada");
        if(this.sesionIniciada){
            if(isNullOrUndefined(this.sesionIniciada)|| this.sesionIniciada == ""){
                this.router.navigate(['/LOGIN'], { queryParams: { returnUrl: state.url }});
                return false;
            }
            else{
                return true;
            }
        }
    }
}