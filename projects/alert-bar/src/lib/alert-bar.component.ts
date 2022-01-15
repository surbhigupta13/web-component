import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-alert-bar',
  template: `
    <p>
      alert-bar works!
    </p>
  `,
  styles: [
  ]
})
export class AlertBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
