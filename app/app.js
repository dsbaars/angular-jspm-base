import angular from 'angular';
import 'angular-ui-router';
import 'reflect-metadata';
import {bootstrap, Component, StateConfig} from 'ng-forward';

import config from './app.config';
import {Home} from './home/home';
import "./app.less!";

@Component({
    selector: 'app',
    template: '<ui-view></ui-view>'
})
@StateConfig([
  { url: '/', component: Home, name: 'home' }
])
class App { }

bootstrap(App, ["ui.router", config.name]);

export default App;
