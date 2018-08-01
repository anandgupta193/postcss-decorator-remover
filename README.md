# PostCSS Decorator Remover [![Build Status][ci-img]][ci]

[PostCSS] plugin This utility helps to remove css classes based on some specific decorators..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/anandgupta193/postcss-decorator-remover.svg
[ci]:      https://travis-ci.org/anandgupta193/postcss-decorator-remover

```css
@mobile
.foo {
    /* Input example */
}

@web
.bar {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-decorator-remover') ])
```

See [PostCSS] docs for examples for your environment.
