# media-blender

Easy and predictable media queries

[![Build Status](https://travis-ci.org/infinum/media-blender.svg?branch=master)](https://travis-ci.org/infinum/media-blender)
[![NPM version](https://badge.fury.io/js/media-blender.svg)](http://badge.fury.io/js/media-blender)
[![Dependency Status](https://david-dm.org/infinum/media-blender.svg)](https://david-dm.org/infinum/media-blender)
[![devDependency Status](https://david-dm.org/infinum/media-blender/dev-status.svg)](https://david-dm.org/infinum/media-blender#info=devDependencies)


## Installation

```bash
npm install --save media-blender
```

## Configuration (breakpoint definition)

The breakpoints are defined with a SCSS map. The smallest breakpoint should start with 0, and the largest should only have one value if the other is infinity:

```scss
@import 'media-blender';

$media-breakpoints: (
  mobile: 0 767,
  tablet: 768 1023,
  desktop: 1024 1279,
  large: 1280
);
```

The above values are overriding the default values. The default values are:

```scss
$media-breakpoints: (
  small: 0 575,
  mobile: 576 767,
  tablet: 768 1023,
  desktop: 1024 1279,
  large: 1280
) !default;
```


## Usage

The media mixin is receiving one or more parameters - the breakpoints we want to match.

### Examples

#### Mobile only

Source:
```scss
@include media(mobile) {
  .element {
    color: red;
  }
}
```

Compiled:
```css
@media (max-width: 767px) {
  .element {
    color: red;
  }
}
```

#### Tablet only

Source:
```scss
@include media(tablet) {
  .element {
    color: red;
  }
}
```

Compiled:
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .element {
    color: red;
  }
}
```

#### Desktop

```scss
@include media(desktop large) {
  .element {
    color: red;
  }
}
```

Compiled:
```css
@media (min-width: 1024px) {
  .element {
    color: red;
  }
}
```

#### Mobile and large

```scss
@include media(tablet large) {
  .element {
    color: red;
  }
}
```

Compiled:
```css
@media (min-width: 768px) and (max-width: 1023px), (min-width: 1280px) {
  .element {
    color: red;
  }
}
```

#### Retina support

The mixin also supports retina screens via the `retina` query. It can be used alone,
or in combination with other breakpoints.

```scss
@include media(retina) {
  .element {
    color: red;
  }
}
```

Compiled:

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .element {
    color: red;
  }
}
```

```scss
@include media(mobile tablet retina) {
  .element {
    color: red;
  }
}
```

Compiled:

```css
@media (max-width: 1023px) and (-webkit-min-device-pixel-ratio: 2), (max-width: 1023px) and (min-resolution: 192dpi) {
  .element {
    .color: red;
  }
}
```
#### Desktop-first and mobile-first support

We make writing mobile-first or desktop-first oriented media queries easier than ever
by introducing the `up` and `down` keywords. You can now say `tablet up`, and this will
target tablets, and all other devices with a screen of at least that size. The reverse
goes for `tablet down`. This will include all devices with a screen size no larger than
that defined for the tablet upper breakpoint. This also works for your custom breakpoints,
if you define them. It relies on the breakpoints, not their order of definition in the map.

```scss
@include media (tablet down) {
  .element {
    color: red;
  }
}
```

Compiled:

```css
@media (max-width: 1023px) {
  .element {
    color: red;
  }
}
```

```scss
@include media (tablet up) {
  .element {
    color: red;
  }
}
```

Compiled:

```css
@media (min-width: 768px) {
  .element {
    color: red;
  }
}
```

#### Orientation

Other than the breakpoints, you can also specify orientation, as an optional second
argument to the mixin. For example, you can specify all mobile devices and tablets in
landscape mode as so:

```scss
@include media(mobile tablet, landscape) {
  .element {
    visibility: hidden;
  }
}
```

Compiled:

```css
@media (max-width: 1023px) and (orientation: landscape) {
  .element {
    visibility: hidden;
  }
}
```

## Testing

The mixin and its functions are unit tested using [True](https://github.com/oddbird/true).

All of the tests are defined in the `test/` directory and are SCSS files themselves. To add
your own tests, create a new `.scss` file in `test/` and add the file name to the `test_sass.js`
file. The tests are run using [Mocha](https://mochajs.org/).

### Running the tests

To run the tests, run this command:

```bash
npm run test
```

Additionally, tests and linters can be run continuously through the watch mode, via:

```bash
npm run watch
```

## License

[MIT](LICENSE)
