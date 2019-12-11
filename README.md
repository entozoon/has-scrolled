# Has Scrolled

Add scroll info to elements.

## Install

    npm i has-scrolled

## Integrate

```js
import hasScrolled from "has-scrolled";
hasScrolled();
```

Or, if you're compiling your own Typescript like a good little dev

```js
import hasScrolled from "has-scrolled/index";
hasScrolled();
```

## That's all well and good, but what does it do?

As you scroll down, it'll add a class and data attributes like so:

```html
<body class="has-scrolled" data-scroll-y="120"></body>
```

## Moar Powar!

If you want scroll info for within another element, for it to add a suffixed class to a separate element, or tweak any other default config values:

```js
hasScrolled({
  element: document.querySelector("nav"),
  target: document.querySelector("body"),
  minScroll: 100,
  scrollTolerance: 50,
  class: "has-scrolled-foo"
});
```
