import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ui-button',
  template: `
  <button [disabled]="disabled"
  (click)="onClick.emit($event)"
  [class] = "'btn' + ' ' + 'btn-'+buttonType"
  >
    <span *ngIf="iconName" class="o-icon">
      <ui-icon [icon]="iconName" [size]= "iconSize"></ui-icon>
    </span>
    <span *ngIf="text">{{text}}</span>
  </button>`,
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() disabled!: boolean;
  @Output() onClick = new EventEmitter<Event>();
  @Input() buttonType = 'neutral';
  @Input() iconName!: string;
  @Input() iconSize!: number;
  constructor() { }
  ngOnInit(): void {
  }

}
