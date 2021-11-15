import { Component, OnInit, Input, EventEmitter, Sanitizer } from '@angular/core';

@Component({
  selector: 'ui-icon',
  template: `
    <span [class] = "'material-icons' + ' ' + 'o-'+size">{{icon}} {{size}}</span>
  `,
  styleUrls: ['icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon!: string;
  @Input() size!: number;
  constructor() { }

  ngOnInit(): void {
  }

}

