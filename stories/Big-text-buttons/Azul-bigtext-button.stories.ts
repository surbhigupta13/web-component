import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
import { ButtonModule } from '../../projects/button/src/lib/button.module';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata} from '@storybook/angular';
import { IconComponent } from '../../projects/button/src/lib/icons/icon.component';
// @ts-ignore
import buttonDocs from './button.mdx';
export default {
  title: 'Big Text Buttons/Azul Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
    withKnobs
  ],
  parameters: {
    'in-dsm': { id: '600707a4d9acc849197722a4' }
  }
}
export const azulButton = () => ({
  template:  `
    <ui-button 
      [text]="text" 
      [buttontype]="buttontype" 
      (onClick)="onClick($event)" 
      [disabled]="disabled"
      [size]="size"></ui-button>`,
  props: {
    text: 'Button',
    disabled : boolean('disabled', false),
    size: select ("Button size", ["sm", "large"], "large"),
    buttontype :  select(
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

