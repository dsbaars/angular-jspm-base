import angular from 'angular';
import 'angular-ui-router';
import 'reflect-metadata';
import {bootstrap} from 'ng-forward';

import './directives/index';
import './services/index';
import './components/index';


import AppConfig from './app.config';

let app = angular.module('app', [
  'app.components',
  'app.directives',
  'app.services',
  'ui.router',
]);

app.config(AppConfig);

export default app;
