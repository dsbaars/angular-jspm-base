Angular JSPM base project
======================
Opinionated base project for Angular 1 projects with jspm.

Uses:

- ES7 decorators using babel (stage-0): https://babeljs.io/docs/plugins/preset-stage-0/
- ng-forward: https://github.com/ngUpgraders/ng-forward
- less processor: https://github.com/Aaike/jspm-less-plugin
- ui-router (use the decorator!): https://github.com/angular-ui/ui-router

Will probably be extended/modified over time and converted to a yeoman generator or something like that.

## quickstart

0. `jspm install`
0. Use `nws` or something to serve files.

## Known issues
Used LESS processor does not work with `jspm build`, [PR which fixes it not merged yet](https://github.com/Aaike/jspm-less-plugin/pull/6).

## License
MIT
