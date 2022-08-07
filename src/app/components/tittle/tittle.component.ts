import { Component, OnInit } from '@angular/core';
import { showSubTittle, showTittle } from 'src/app/animations/animations';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss'],
  animations:[
    showTittle,
    showSubTittle
  ]
})
export class TittleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
