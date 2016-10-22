# media-mixin

Easy and predictable media queries

## Configuration (breakpoint definition)

The breakpoints are defined with a SCSS map. The smallest breakpoint should start with 0, and the largest should only have one value if the other is infinity:

```scss
@import 'media-mixin';

$media-breakpoints: (
  mobile: 0 767,
  tablet: 768 1023,
  desktop: 1024 1279,
  large: 1280
);
```

The above values are default values and if you're ok with them, you don't need to redefine them.

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

#### Desktop-first and mobile-first support

We make writing mobile-first or desktop-first oriented media queries easier than ever
by introducing the `up` and `down` keywords. You can now say `tablet up`, and this will
target tablets, and all other devices with a screen of at least that size. The reverse
goes for `tablet down`. This will include all devices with a screen size no larger than
that defined for the tablet upper breakpoint. This also works for your custom breakpoints,
if you define them. It relies on the breakpoints, not their order of definition in the map.

```scss
@include media (tablet up) {
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

## Testing

The mixin and its functions are unit tested using [True](https://github.com/oddbird/true).

All of the tests are defined in the `test/` directory and are SCSS files themselves. To add
your own tests, create a new `.scss` file in `test/` and add the file name to the `test_sass.js`
file. The tests are run using [Mocha](https://mochajs.org/).

### Running the tests

```
npm run test
```

## License

[MIT](LICENSE)
