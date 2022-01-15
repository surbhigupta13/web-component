import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'ui-button',
  template: `
  <button [disabled]="disabled"
  (click)="onClick.emit($event)"
  [class] = "'btn' + ' ' + 'btn-'+buttontype + ' ' + 'icon-'+iconplacement"
  >
    <span *ngIf="iconname" class="o-icon">
      <ui-icon [icon]="iconname" [size]= "iconsize"></ui-icon>
    </span>
    <span *ngIf="text">{{text}}</span>
  </button>`,
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() disabled!: boolean;
  @Output() onClick = new EventEmitter<Event>();
  @Input() buttontype = 'neutral';
  @Input() iconname!: string;
  @Input() iconsize!: number;
  @Input() iconplacement!: string;
  constructor() { }
  ngOnInit(): void {
  }

}
