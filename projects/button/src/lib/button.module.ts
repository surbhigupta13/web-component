import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ButtonComponent } from './button.component';
import { IconComponent } from './icons/icon.component';
@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ButtonComponent,
    IconComponent
  ]
})
export class ButtonModule {}
