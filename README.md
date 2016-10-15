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
@media (max-width: 767px) and (min-width: 1280px) {
  .element {
    color: red;
  }
}
```

## License

[MIT](LICENSE)
