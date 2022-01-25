import { Component, OnInit, Input, EventEmitter, Sanitizer, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-icon',
  template: `
    <span [class] = "'material-icons' + ' ' + 'o-'+size">{{icon}}</span>
  `,
  styleUrls: ['icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon! : string;
  @Input() size! : string;
  constructor() { }

  ngOnInit(): void {
  }

}

