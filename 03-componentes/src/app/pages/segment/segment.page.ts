import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('segmento', {static: false}) lista: IonSegment;
  superHeroes: Observable<any>;
  publisher: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
    console.log(this.superHeroes);
  }

  segmentChanged(evento){


    if( evento.detail.value === 'todos' ){
      this.publisher = '';
      return;
    }
    this.publisher = evento.detail.value;
  }

}
