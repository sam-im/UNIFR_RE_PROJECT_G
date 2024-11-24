import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { AllConfiguration } from '@aurelia-mdc-web/all';
import { RouterConfiguration } from '@aurelia/router';

Aurelia
  .register(AllConfiguration)
  .register(RouterConfiguration)
  .app(MyApp)
  .start();
