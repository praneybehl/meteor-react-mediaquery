Package.describe({
  name: 'praneybehl:react-mediaquery',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('react-mediaquery.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('praneybehl:react-mediaquery');
  api.addFiles('react-mediaquery-tests.js');
});
