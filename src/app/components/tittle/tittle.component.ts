import { Component, OnInit } from '@angular/core';
import { showSubTittle, showTittle } from 'src/app/animations/animations';
import * as AOS from 'aos';
@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss'],
  animations: [
    showTittle,
    showSubTittle
  ],
  preserveWhitespaces: true
})
export class TittleComponent implements OnInit {

  name: string = 'Carlos Jorge'
  lastName: string = 'Rodriguez Cuello'
  profesion: string = 'FullStack Engineer.'
  constructor() {

  }
  scrollRef: number = 0;
  ngOnInit(): void {
    document.addEventListener('scroll', ($event: Event) => {
      if (this.scrollRef <= 10) {
        this.scrollRef++;
      }
      else {
        this.scrollRef = 0;
        AOS.refresh();
      }

    });
  }
  splitDescription(theString: string): { letter: string, fract: number }[] {
    let scala: number = 1.2;
    return [...theString].map((v, i) => (
      {
        letter: v,
        fract: Math.round(((i + 1) / theString.length) * 10 * scala) / 10
      }
    ));
  }

}
