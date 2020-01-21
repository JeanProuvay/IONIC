import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  compartir(user){
    console.log('compartir', user);
    this.lista.closeSlidingItems();
  }

  eliminar(user){
    console.log('eliminar', user);
    this.lista.closeSlidingItems();
  }

  agregar(user){
    console.log('agregar', user);
    this.lista.closeSlidingItems();
  }

}
