import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-platform-browser',
  template: `
    <p>
      platform-browser works!
    </p>
  `,
  styles: [
  ]
})
export class PlatformBrowserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
