import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
import { action } from '@storybook/addon-actions';
// @ts-ignore
import buttonDocs from './button.mdx';
export default {
  title: 'Sunrise Button',
  component: ButtonComponent,
  parameters: {
    decorators: [withKnobs],
    'in-dsm': { id: '5fc6b0f63c368c629741955e' }
  }
};


export const sunriseButton = () => ({
  template:  `
    <ui-button 
      [text]="text" 
      [buttonType]="buttonType" 
      (onClick)="onClick($event)" 
      [disabled]= "disabled"></ui-button>`,
  props: {
    disabled : boolean('disabled', false),
    text : text('text', 'BUTTON'),
    buttonType :  select(
    "Button type",
    ["neutral", "neutral-outline",  
      "sandstone", "sandstone-outline", 
      "classic", "classic-outline" , 
      "sunrise", "sunrise-outline",
      "carbon", "carbon-outline",
      "azul", "azul-outline",
      "warmgray", "warmgray-outline"],
    "sunrise"),
    onClick: () => action('Button clicked')('Click')
  }
});