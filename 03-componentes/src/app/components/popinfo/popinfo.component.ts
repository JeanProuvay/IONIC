import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(40);

  constructor(private PopoverController: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number){
    this.PopoverController.dismiss({
      item: valor
    });
  }
}
