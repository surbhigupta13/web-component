import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
import { ButtonModule } from '../../projects/button/src/lib/button.module';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata} from '@storybook/angular';
import { IconComponent } from '../../projects/button/src/lib/icons/icon.component';
// @ts-ignore
import buttonDocs from './button.mdx';
export default {
  title: 'Azul Button',
  component: ButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  parameters: {
    'in-dsm': { id: '5fc6b43d3c368c3914419567' }
  }
}


export const azulButton = () => ({
  template:  `
    <ui-button 
      [text]="text" 
      [buttonType]="buttonType" 
      (onClick)="onClick($event)" 
      [disabled]= "disabled"
      [iconName] = "iconName"
      [iconSize] = "iconSize"></ui-button>`,
  props: {
    disabled : boolean('disabled', false),
    text : text('text', 'BUTTON'),
    iconName: text('Icon Name', 'edit'),
    iconSize: select(
      "Icon Size", 
      [16, 18, 24, 36, 48], 16),
    buttonType :  select(
    "Button type",
    ["neutral", "neutral-outline",  
      "sandstone", "sandstone-outline", 
      "classic", "classic-outline" , 
      "sunrise", "sunrise-outline",
      "carbon", "carbon-outline",
      "azul", "azul-outline",
      "warmgray", "warmgray-outline"],
    "azul"),
    onClick: () => action('Button clicked')('Click'),
  }
});


