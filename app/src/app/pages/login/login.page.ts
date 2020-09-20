import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IonSlides} from '@ionic/angular';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  inicioSesionUsuario = {
    email: 'jean.prouvay@gmail.com',
    password: '123456'
  };

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  iniciarSesion(formularioInicioSesion: NgForm){
    if ( formularioInicioSesion.invalid ){ return; }
    this.usuarioService.login( this.inicioSesionUsuario.email, this.inicioSesionUsuario.password );
    console.log(formularioInicioSesion.valid);
    console.log(this.inicioSesionUsuario);
  }

  registrar(formularioRegistro: NgForm){
    console.log(formularioRegistro.valid);
  }

  seleccionarAvatar( avatar ){
    this.avatars.forEach( a => a.seleccionado = false );
    avatar.seleccionado = true;
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarInicioSesion(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
}
