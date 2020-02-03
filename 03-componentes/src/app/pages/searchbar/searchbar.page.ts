import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];
  textoBuscar = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( respuesta => {
      console.log(respuesta);
      this.albums = respuesta;
    });
  }

  buscar(evento) {
    this.textoBuscar = evento.detail.value;
    console.log(this.textoBuscar);
  }

}
