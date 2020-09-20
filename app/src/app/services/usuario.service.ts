import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor( private http: HttpClient,
               private storage: Storage ) {}
  login2(email: string, password: string){
      const data = { email, password };
      this.http.post('http://localhost:8080/usuario/iniciar-sesion', data ).subscribe(resp => {
          console.log(resp);
        });
  }
  login(email: string, password: string){
      this.http.get('http://localhost:8080/api/clientes').subscribe( resp => {
          console.log(resp);
      });
  }
}
