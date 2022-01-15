import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
import { ButtonModule } from '../../projects/button/src/lib/button.module';
import { action } from '@storybook/addon-actions';
import { moduleMetadata} from '@storybook/angular';
// @ts-ignore
import buttonDocs from './button.mdx';
export default {
  title: 'Text Buttons/Azul Text Icon Button',
  component: ButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  parameters: {
    'in-dsm': { id: '5fc7d517273404f734a11f31' }
  }
}
export const azulTextIconButton = (args: any) => ({
  template:  `
    <ui-button 
      [text]="text" 
      [buttontype]="buttontype" 
      (onClick)="onClick($event)" 
      [disabled]="disabled"
      [iconname]="iconname"
      [iconsize]="iconsize"
      [iconplacement]="iconplacement"
      ></ui-button>`,
  props: {
    text: 'Button',
    disabled : boolean('disabled', false),
    iconname: 'edit',
    iconsize: '16',
    iconplacement: select(
      "Align Icon", 
      ["left", "right"], "left"),
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
