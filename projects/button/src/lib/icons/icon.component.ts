import { Component, OnInit, Input, EventEmitter, Sanitizer } from '@angular/core';

@Component({
  selector: 'ui-icon',
  template: `
    <span class="material-icons">face</span>
  `,
  styleUrls: ['icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconName!: string;
  @Input() iconSize!: number;
  constructor() { }

  ngOnInit(): void {
  }

}

