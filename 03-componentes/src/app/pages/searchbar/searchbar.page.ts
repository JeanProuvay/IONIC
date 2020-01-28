import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  buscar(evento) {

    this.dataService.getAlbums().subscribe( respuesta => {
      console.log(evento);
      this.albums = respuesta;
    });
  }

}
