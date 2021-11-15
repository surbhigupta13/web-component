import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
import { action } from '@storybook/addon-actions';
// @ts-ignore
import buttonDocs from './button.mdx';
export default {
  title: 'Neutral Button',
  component: ButtonComponent,
  parameters: {
    decorators: [withKnobs],
    'in-dsm': { id: '5f96ef903a59fabd38d7757f' }
  }
};


export const neutralButton = () => ({
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
    "neutral"),
    onClick: () => action('Button clicked')('Click')
  }
});

   
// import { moduleMetadata } from '@storybook/angular';
// import { ButtonComponent } from '../projects/button/src/lib/button.component';
// import { HttpClientModule } from '@angular/common/http';
// import { action } from '@storybook/addon-actions';
// import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
// // @ts-ignore
// import buttonDocs from './button.mdx';

// // This story is written in "Component Story Format" that was introduced in Storybook 5.2
// // https://storybook.js.org/docs/formats/component-story-format/
// export default {
//   title: 'Button',
//   decorators: [
//     moduleMetadata({
//       declarations: [ButtonComponent],
//       imports: [HttpClientModule]
//     })
//   ],
//   parameters: {
//     // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
//     'in-dsm': {
//       id: '5f96ef903a59fabd38d7757f',
//       componentPath: '../projects/button/src/lib/button.component'
//     }
//   }
// };

// export const neutralButton = (args: any) => ({
//   component: ButtonComponent,
//   props: {
//     ...args
//   }
// });

// neutralButton.args = {
//   disabled : boolean('disabled', false),
//   text : text('text', 'BUTTON'),
//   buttonType :  select(
//   "Button type",
//   ["neutral", "sandstone", "classic"],
//   "neutral"),
//   onClick: () => action('Button clicked')('Click')
// };

// neutralButton.story = {
//   parameters: {
//     // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//     // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//     // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: '../app/components/button/versionFile.json' },
//     docs: { page: buttonDocs }
//   }
// };
// import { moduleMetadata } from '@storybook/angular';
// import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
// import { ButtonComponent } from '../projects/button/src/lib/button.component';
// import { HttpClientModule } from '@angular/common/http';
// // @ts-ignore
// import buttonDocs from './button.mdx';

// // This story is written in "Component Story Format" that was introduced in Storybook 5.2
// // https://storybook.js.org/docs/formats/component-story-format/
// export default {
//   title: 'Button',
//   parameters: {
//     decorators: [
//       withKnobs,
//       moduleMetadata({
//         declarations: [ButtonComponent],
//         imports: [HttpClientModule]
//       })
//     ],
//     // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
//     'in-dsm': {
//       id: '5f96ef903a59fabd38d7757f',
//       componentPath: '../projects/button/src/lib/button.component'
//     }
//   }
// };

// export const neutralButton = () => ({
//   template:
//     `<ui-button [text]="text" [buttonType]="buttonType" 
//           (onClick)="onClick($event)" 
//           [disabled]= "disabled"></ui-button>`,
//   props: {
//       disabled : boolean('disabled', false),
//       text : text('text', 'BUTTON'),
//       buttonType :  select(
//       "Button type",
//       ["neutral", "sandstone", "classic"],
//       "neutral"),
//       onClick: () => action('Button clicked')('Click')
//   }
// });

// neutralButton.story = {
//   parameters: {
//     // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//     // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//     'in-dsm': { id: '5f96ef903a59fabd38d7757f' },
//     docs: { page: buttonDocs }
//   }
// };
