import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonModule, ButtonComponent } from 'button';
import { AlertBarModule, AlertBarComponent} from 'alert-bar';
@NgModule({
  imports: [
    BrowserModule,
    ButtonModule,
    AlertBarModule,
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const button = createCustomElement(ButtonComponent, { injector: this.injector })
    customElements.define("ui-button", button);
    const alertBar = createCustomElement(AlertBarComponent, { injector: this.injector })
    customElements.define("ui-alert-bar", alertBar);
  }

 }