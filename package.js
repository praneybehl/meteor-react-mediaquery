Package.describe({
  name: 'praneybehl:react-mediaquery',
  version: '0.0.10',
  summary: 'React Media queries component for responsive design packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-mediaquery',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.export('MediaQuery');
});


Npm.depends({
  "react-responsive": "0.0.10",
  "exposify": "0.5.0"
});
