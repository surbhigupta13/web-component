import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
import { ButtonModule } from '../../projects/button/src/lib/button.module';
import { action } from '@storybook/addon-actions';
import { moduleMetadata} from '@storybook/angular';
// @ts-ignore
import buttonDocs from './button.mdx';
export default {
  title: 'Big Text Buttons/Classic Button',
  component: ButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  parameters: {
    'in-dsm': { id: '5fdced28a538d65be130eae6' }
  }
};

export const classicButton = (args: any) => ({
  template:  `
    <ui-button 
      [text]="text" 
      [buttontype]="buttontype" 
      (onClick)="onClick($event)" 
      [disabled]="disabled" [size]="size"></ui-button>`,
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
      "classic"),
    onClick: () => action('Button clicked')('Click'),
  }
});


