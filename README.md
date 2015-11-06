React-Mediaquery
==============

React Media queries component for responsive design packaged for Meteor

This package is a wrapper around [React-Responsive](https://github.com/contra/react-responsive)


### Adding it to your project

~~~
meteor add praneybehl:react-mediaquery
~~~


Information
===========


<table>
<tr>
<td>Package</td><td>react-responsive</td>
</tr>
<tr>
<td>Description</td>
<td>Media queries in react for responsive design</td>
</tr>
<tr>
<td>Browser Version</td>
<td>>= IE6*</td>
</tr>
</table>

This module is pretty straightforward: You specify a set of requirements, and the children will be rendered if they are met. Also handles changes so if you resize or flip or whatever it will all be cool.

Usage
=====

A MediaQuery element functions like any other React component, which means you can nest them and do all the normal jazz.

Using CSS Media Queries
=======================

```jsx


var A = React.createClass({
  render: function(){
    return (
      <div>
        <div>Device Test!</div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div>You are a desktop or laptop</div>
          <MediaQuery query='(min-device-width: 1824px)'>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query='(max-width: 1224px)'>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery query='(orientation: portrait)'>
          <div>You are portrait</div>
        </MediaQuery>
         <MediaQuery query='(orientation: landscape)'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery query='(min-resolution: 2dppx)'>
          <div>You are retina</div>
        </MediaQuery>
      </div>
    );
  }
});
```

### Using Properties

To make things more idiomatic to react, you can use camelcased shorthands to construct media queries.


For a list of all possible shorthands and value types see https://github.com/wearefractal/react-responsive/blob/master/src/mediaQuery.js#L9


Any numbers given as a shorthand will be expanded to px (`1234` will become `'1234px'`)


```jsx


var A = React.createClass({
  render: function(){
    return (
      <div>
        <div>Device Test!</div>
        <MediaQuery minDeviceWidth={1224}>
          <div>You are a desktop or laptop</div>
          <MediaQuery minDeviceWidth={1824}>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery orientation='portrait'>
          <div>You are portrait</div>
        </MediaQuery>
         <MediaQuery orientation='landscape'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery minResolution='2dppx'>
          <div>You are retina</div>
        </MediaQuery>
      </div>
    );
  }
});
```

### Server rendering

Server rendering can be done by passing static values through the `values` property.

The values property can contain `orientation`, `scan`, `aspectRatio`, `deviceAspectRatio`,
`height`, `deviceHeight`, `width`, `deviceWidth`, `color`, `colorIndex`, `monochrome`,
 `resolution` and `type` to be matched against the media query.

`type` can be one of: `all`, `grid`, `aural`, `braille`, `handheld`, `print`, `projection`,
`screen`, `tty`, `tv` or `embossed`.

```jsx
var MediaQuery = require('react-responsive');

var A = React.createClass({
  render: function(){
    return (
      <div>
        <div>Device Test!</div>
        <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1600}}>
          <div>You are a desktop or laptop</div>
          <MediaQuery minDeviceWidth={1824}>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery orientation='portrait'>
          <div>You are portrait</div>
        </MediaQuery>
         <MediaQuery orientation='landscape'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery minResolution='2dppx'>
          <div>You are retina</div>
        </MediaQuery>
      </div>
    );
  }
});
```

## Browser Support

### Out of the box

<table>
<tr>
<td>Chrome</td>
<td>9</td>
</tr>
<tr>
<td>Firefox (Gecko)</td>
<td>6</td>
</tr>
<tr>
<td>Internet Explorer</td>
<td>10</td>
</tr>
<tr>
<td>Opera</td>
<td>12.1</td>
</tr>
<tr>
<td>Safari</td>
<td>5.1</td>
</tr>
</table>

### With Polyfills

Pretty much everything. Check out these polyfills:

- [matchMedia.js by Paul Irish](https://github.com/paulirish/matchMedia.js/)
- [media-match (faster, but larger and lacking some features)](https://github.com/weblinc/media-match)
