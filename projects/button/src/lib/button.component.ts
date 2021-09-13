import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
  <button [disabled]="disabled" 
  (click)="onClick.emit($event)"
  [class] = "'btn' + ' ' + 'btn-'+buttonType"
  >
    {{text}}
  </button>`,
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() disabled!: boolean;
  // @Input() backgroundColor?: string;
  @Output() onClick = new EventEmitter<Event>();
  @Input() buttonType = 'neutral';
  constructor() { }
  ngOnInit(): void {
  }

}
// [ngStyle]="{ 'background-color': backgroundColor }"