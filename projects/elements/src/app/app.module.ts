import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonModule, ButtonComponent } from 'button';

@NgModule({
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(ButtonComponent, { injector: this.injector })
    customElements.define("ui-button", element);
  }

 }