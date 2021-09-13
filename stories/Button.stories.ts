
import { Story, Meta} from '@storybook/angular';
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { ButtonComponent } from '../projects/button/src/lib/button.component';
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { ButtonModule } from 'button';
export default {
  title: 'Components|Button',
  component: ButtonComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // }
} as Meta;


const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});
export const BasicButton = Template.bind({});
BasicButton.args = {
  disabled: false,
  text: 'Button',
  buttonType: 'neutral'
};
BasicButton.argTypes = {
  buttonType: { control: { type: "select", options: ["neutral", "sandstone", "classic"] } }
}

// const WCTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
//   component: `<ui-button text={{text}}  button-type=buttonType (onClick)="onClick($event)" ></ui-button>`,
//   props: args,
// });
// export const WCButton = WCTemplate.bind({});
// WCButton.args = {
//   disabled: false,
//   text: 'Button',
//   buttonType: 'neutral'
// };
// WCButton.argTypes = {
//   buttonType: { control: { type: "select", options: ["neutral", "sandstone", "classic"] } }
// }


storiesOf("Components|Button", module)
.add("Web Component Button", () => ({
  template: `
      <ui-button text={{text}}  button-type=buttonType (onClick)="onClick($event)" ></ui-button>
  `,
  props: {
    buttonType: select(
      "Button type",
      ["neutral", "sandstone", "classic"],
      "neutral"),
    text: 'Button'
  }
}))


// import { storiesOf, moduleMetadata } from "@storybook/angular";
// import { withKnobs, select, boolean } from "@storybook/addon-knobs";

// import { ButtonComponent } from "../projects/button/src/lib/button.component";
// storiesOf("Components|Button", module)
// 	.addDecorator(
// 		moduleMetadata({
// 			imports: [
// 				ButtonComponent
// 			]
// 		})
// 	)
// 	.addDecorator(withKnobs)
// 	.add("Basic", () => ({
// 		component: ButtonComponent,
// 		props: {
// 			otisButton: select(
// 				"Button kind",
// 				["primary", "secondary", "tertiary"],
// 				"primary"),
//       size: select("Size of the buttons", ["normal", "sm", "field", "lg", "xl"], "normal"),
// 		}
// 	}))
	