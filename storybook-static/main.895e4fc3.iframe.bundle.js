(self.webpackChunkng_ui=self.webpackChunkng_ui||[]).push([[179],{43171:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(70001).configure)([__webpack_require__(24597),__webpack_require__(73192)],module,!1)},72610:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{decorators:()=>decorators,parameters:()=>parameters});__webpack_require__(47941),__webpack_require__(82526),__webpack_require__(57327),__webpack_require__(38880),__webpack_require__(89554),__webpack_require__(54747),__webpack_require__(49337),__webpack_require__(33321),__webpack_require__(69070);var client_api=__webpack_require__(11526),esm=__webpack_require__(23827),angular=__webpack_require__(83156);const documentation_namespaceObject=JSON.parse('{"pipes":[],"interfaces":[],"injectables":[{"name":"ButtonService","id":"injectable-ButtonService-39a0fc33cb8f2a668c5bcc6907896f4a","file":"projects/button/src/lib/button.service.ts","properties":[],"methods":[],"deprecated":false,"deprecationMessage":"","description":"","rawdescription":"\\n","sourceCode":"import { Injectable } from \'@angular/core\';\\n\\n@Injectable({\\n  providedIn: \'root\'\\n})\\nexport class ButtonService {\\n\\n  constructor() { }\\n}\\n","constructorObj":{"name":"constructor","description":"","deprecated":false,"deprecationMessage":"","args":[],"line":6},"type":"injectable"}],"guards":[],"interceptors":[],"classes":[],"directives":[],"components":[{"name":"ButtonComponent","id":"component-ButtonComponent-4b69365dfb1c54033a011de9e7da9d37","file":"projects/button/src/lib/button.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"ui-button","styleUrls":["button.component.scss"],"styles":[],"template":"<button [disabled]=\\"disabled\\"\\n(click)=\\"onClick.emit($event)\\"\\n[class] = \\"\'btn\' + \' \' + \'btn-\'+buttonType\\"\\n>\\n  {{text}}\\n</button>","templateUrl":[],"viewProviders":[],"inputsClass":[{"name":"buttonType","defaultValue":"\'neutral\'","deprecated":false,"deprecationMessage":"","line":19,"type":"string"},{"name":"disabled","deprecated":false,"deprecationMessage":"","line":16,"type":"boolean"},{"name":"text","deprecated":false,"deprecationMessage":"","line":15,"type":"string"}],"outputsClass":[{"name":"onClick","defaultValue":"new EventEmitter<Event>()","deprecated":false,"deprecationMessage":"","line":18,"type":"EventEmitter"}],"propertiesClass":[],"methodsClass":[{"name":"ngOnInit","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":21,"deprecated":false,"deprecationMessage":""}],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component, Input, OnInit, Output, EventEmitter } from \'@angular/core\';\\n\\n@Component({\\n  selector: \'ui-button\',\\n  template: `\\n  <button [disabled]=\\"disabled\\" \\n  (click)=\\"onClick.emit($event)\\"\\n  [class] = \\"\'btn\' + \' \' + \'btn-\'+buttonType\\"\\n  >\\n    {{text}}\\n  </button>`,\\n  styleUrls: [\'button.component.scss\'],\\n})\\nexport class ButtonComponent implements OnInit {\\n  @Input() text!: string;\\n  @Input() disabled!: boolean;\\n  // @Input() backgroundColor?: string;\\n  @Output() onClick = new EventEmitter<Event>();\\n  @Input() buttonType = \'neutral\';\\n  constructor() { }\\n  ngOnInit(): void {\\n  }\\n\\n}\\n// [ngStyle]=\\"{ \'background-color\': backgroundColor }\\"","assetsDirs":[],"styleUrlsData":[{"data":".btn {\\n    padding: 8px;\\n    min-width: 100px;\\n    border: 0px;\\n    min-height: 24px;\\n    &:disabled {\\n        opacity: 0.5;\\n    }\\n    &:hover{\\n        cursor: pointer;\\n    }\\n}\\n.btn-neutral{\\n    background-color: #586981;\\n    color: #ffffff;\\n}\\n\\n.btn-sandstone{\\n    background-color: #CBA052;\\n    color: #000000;\\n}\\n\\n.btn-classic{\\n    background-color: #2D6BFF;\\n    color: #ffffff;\\n}\\n","styleUrl":"button.component.scss"}],"stylesData":"","constructorObj":{"name":"constructor","description":"","deprecated":false,"deprecationMessage":"","args":[],"line":19},"implements":["OnInit"]}],"modules":[{"name":"AppModule","id":"module-AppModule-94a829200849078b648de7a74a378013","description":"","deprecationMessage":"","deprecated":false,"file":"projects/elements/src/app/app.module.ts","methods":[{"name":"ngDoBootstrap","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":17,"deprecated":false,"deprecationMessage":""}],"sourceCode":"import { BrowserModule } from \'@angular/platform-browser\';\\nimport { NgModule, Injector } from \'@angular/core\';\\nimport { createCustomElement } from \'@angular/elements\';\\nimport { ButtonModule, ButtonComponent } from \'button\';\\n\\n@NgModule({\\n  imports: [\\n    BrowserModule,\\n    ButtonModule\\n  ],\\n  providers: []\\n})\\nexport class AppModule {\\n\\n  constructor(private injector: Injector){}\\n\\n  ngDoBootstrap(){\\n    const element = createCustomElement(ButtonComponent, { injector: this.injector })\\n    customElements.define(\\"ui-button\\", element);\\n  }\\n\\n }","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[]},{"type":"imports","elements":[{"name":"ButtonModule"}]},{"type":"exports","elements":[]},{"type":"bootstrap","elements":[]},{"type":"classes","elements":[]}]},{"name":"ButtonModule","id":"module-ButtonModule-854ab50bc824764f27bdc018a53fd3d7","description":"","deprecationMessage":"","deprecated":false,"file":"projects/button/src/lib/button.module.ts","methods":[],"sourceCode":"import { NgModule } from \'@angular/core\';\\nimport { BrowserModule } from \'@angular/platform-browser\'\\nimport { ButtonComponent } from \'./button.component\';\\n\\n\\n@NgModule({\\n  declarations: [\\n    ButtonComponent\\n  ],\\n  imports: [\\n    BrowserModule\\n  ],\\n  exports: [\\n    ButtonComponent\\n  ]\\n})\\nexport class ButtonModule {}\\n","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[{"name":"ButtonComponent"}]},{"type":"imports","elements":[]},{"type":"exports","elements":[{"name":"ButtonComponent"}]},{"type":"bootstrap","elements":[]},{"type":"classes","elements":[]}]}],"miscellaneous":{"variables":[{"name":"BasicButton","ctype":"miscellaneous","subtype":"variable","file":"stories/Button.stories.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"Template.bind({})"},{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/test.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/environments/environment.prod.ts","deprecated":false,"deprecationMessage":"","type":"object","defaultValue":"{\\n  production: true\\n}"},{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/environments/environment.ts","deprecated":false,"deprecationMessage":"","type":"object","defaultValue":"{\\n  production: false\\n}"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","deprecated":false,"deprecationMessage":"","type":"literal type"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/test.ts","deprecated":false,"deprecationMessage":"","type":"literal type"},{"name":"Template","ctype":"miscellaneous","subtype":"variable","file":"stories/Button.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story<ButtonComponent>","defaultValue":"(args: ButtonComponent) => ({\\n  component: ButtonComponent,\\n  props: args,\\n})"}],"functions":[],"typealiases":[],"enumerations":[],"groupedVariables":{"stories/Button.stories.ts":[{"name":"BasicButton","ctype":"miscellaneous","subtype":"variable","file":"stories/Button.stories.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"Template.bind({})"},{"name":"Template","ctype":"miscellaneous","subtype":"variable","file":"stories/Button.stories.ts","deprecated":false,"deprecationMessage":"","type":"Story<ButtonComponent>","defaultValue":"(args: ButtonComponent) => ({\\n  component: ButtonComponent,\\n  props: args,\\n})"}],"projects/button/src/test.ts":[{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","deprecated":false,"deprecationMessage":"","type":"literal type"}],"projects/elements/src/test.ts":[{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/test.ts","deprecated":false,"deprecationMessage":"","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/test.ts","deprecated":false,"deprecationMessage":"","type":"literal type"}],"projects/elements/src/environments/environment.prod.ts":[{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/environments/environment.prod.ts","deprecated":false,"deprecationMessage":"","type":"object","defaultValue":"{\\n  production: true\\n}"}],"projects/elements/src/environments/environment.ts":[{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/elements/src/environments/environment.ts","deprecated":false,"deprecationMessage":"","type":"object","defaultValue":"{\\n  production: false\\n}"}]},"groupedFunctions":{},"groupedEnumerations":{},"groupedTypeAliases":{}},"routes":[],"coverage":{"count":0,"status":"low","files":[{"filePath":"projects/button/src/lib/button.component.ts","type":"component","linktype":"component","name":"ButtonComponent","coveragePercent":0,"coverageCount":"0/7","status":"low"},{"filePath":"projects/button/src/lib/button.service.ts","type":"injectable","linktype":"injectable","name":"ButtonService","coveragePercent":0,"coverageCount":"0/2","status":"low"},{"filePath":"projects/button/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"context","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/button/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"require","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/elements/src/environments/environment.prod.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"environment","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/elements/src/environments/environment.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"environment","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/elements/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"context","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/elements/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"require","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"stories/Button.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"BasicButton","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"stories/Button.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Template","coveragePercent":0,"coverageCount":"0/1","status":"low"}]}}');var decorators=[__webpack_require__(1187).withDsm];(0,angular.setCompodocJson)(documentation_namespaceObject);var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{inlineStories:!0}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,client_api.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},32927:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(70001)},89473:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Button_stories,neutralButton:()=>neutralButton});var dist=__webpack_require__(95099),tslib_es6=__webpack_require__(70655),core=__webpack_require__(55615);let ButtonComponent=class ButtonComponent{constructor(){this.onClick=new core.EventEmitter,this.buttonType="neutral"}ngOnInit(){}};(0,tslib_es6.gn)([(0,core.Input)(),(0,tslib_es6.w6)("design:type",String)],ButtonComponent.prototype,"text",void 0),(0,tslib_es6.gn)([(0,core.Input)(),(0,tslib_es6.w6)("design:type",Boolean)],ButtonComponent.prototype,"disabled",void 0),(0,tslib_es6.gn)([(0,core.Output)(),(0,tslib_es6.w6)("design:type",Object)],ButtonComponent.prototype,"onClick",void 0),(0,tslib_es6.gn)([(0,core.Input)(),(0,tslib_es6.w6)("design:type",Object)],ButtonComponent.prototype,"buttonType",void 0),ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-button",template:"\n  <button [disabled]=\"disabled\" \n  (click)=\"onClick.emit($event)\"\n  [class] = \"'btn' + ' ' + 'btn-'+buttonType\"\n  >\n    {{text}}\n  </button>",styles:[(__webpack_require__(13864).default||__webpack_require__(13864)).length?__webpack_require__(13864).default||__webpack_require__(13864):""]}),(0,tslib_es6.w6)("design:paramtypes",[])],ButtonComponent);var esm=__webpack_require__(32974);const Button_stories={title:"Netural Button",component:ButtonComponent,parameters:{decorators:[dist.withKnobs],"in-dsm":{id:"5f96ef903a59fabd38d7757f"}}},neutralButton=()=>({template:'\n    <ui-button \n      [text]="text" \n      [buttonType]="buttonType" \n      (onClick)="onClick($event)" \n      [disabled]= "disabled"></ui-button>',props:{disabled:(0,dist.boolean)("disabled",!1),text:(0,dist.text)("text","BUTTON"),buttonType:(0,dist.select)("Button type",["neutral","sandstone","classic"],"neutral"),onClick:()=>(0,esm.action)("Button clicked")("Click")}});neutralButton.parameters=Object.assign({storySource:{source:'() => ({\n  template:  `\n    <ui-button \n      [text]="text" \n      [buttonType]="buttonType" \n      (onClick)="onClick($event)" \n      [disabled]= "disabled"></ui-button>`,\n  props: {\n    disabled : boolean(\'disabled\', false),\n    text : text(\'text\', \'BUTTON\'),\n    buttonType :  select(\n    "Button type",\n    ["neutral", "sandstone", "classic"],\n    "neutral"),\n    onClick: () => action(\'Button clicked\')(\'Click\')\n  }\n})'}},neutralButton.parameters)},48186:module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=48186,module.exports=webpackEmptyAsyncContext},73192:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Button.stories.ts":89473};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=73192},24597:module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id=24597,module.exports=webpackEmptyContext},13864:module=>{"use strict";module.exports=".btn {\n  padding: 8px;\n  min-width: 100px;\n  border: 0px;\n  min-height: 24px;\n}\n.btn:disabled {\n  opacity: 0.5;\n}\n.btn:hover {\n  cursor: pointer;\n}\n.btn-neutral {\n  background-color: #586981;\n  color: #ffffff;\n}\n.btn-sandstone {\n  background-color: #CBA052;\n  color: #000000;\n}\n.btn-classic {\n  background-color: #2D6BFF;\n  color: #ffffff;\n}"},24654:()=>{},4147:module=>{"use strict";module.exports={i8:"0.0.0"}}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[212],(()=>(__webpack_exec__(98518),__webpack_exec__(28922),__webpack_exec__(32927),__webpack_exec__(47098),__webpack_exec__(26432),__webpack_exec__(59746),__webpack_exec__(84873),__webpack_exec__(62853),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(64049),__webpack_exec__(21424),__webpack_exec__(91568),__webpack_exec__(72610),__webpack_exec__(43171))));__webpack_require__.O()}]);