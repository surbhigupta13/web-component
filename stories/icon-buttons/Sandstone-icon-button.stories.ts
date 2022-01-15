import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
import { ButtonModule } from '../../projects/button/src/lib/button.module';
import { action } from '@storybook/addon-actions';
import { moduleMetadata} from '@storybook/angular';
// @ts-ignore
import buttonDocs from './button.mdx';
export default {
  title: 'Icon Buttons/Sandstone Icon Button',
  component: ButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  parameters: {
    'in-dsm': { id: '5fc7d8fb2734042776a11f6e' }
  }
};

export const sandstoneIconButton = (args: any) => ({
  template:  `
    <ui-button 
      [buttontype]="buttontype" 
      (onClick)="onClick($event)" 
      [disabled]="disabled"
      [iconname]="iconname"
      [iconsize]="iconsize"></ui-button>`,
  props: {
    disabled : boolean('disabled', false),
    iconname: 'edit',
    iconsize: '16',
    buttontype :  select(
      "Button type",
      ["neutral", "neutral-outline",  
        "sandstone", "sandstone-outline", 
        "classic", "classic-outline" , 
        "sunrise", "sunrise-outline",
        "carbon", "carbon-outline",
        "azul", "azul-outline",
        "warmgray", "warmgray-outline"],
      "sandstone"),
    onClick: () => action('Button clicked')('Click'),
  }
});
