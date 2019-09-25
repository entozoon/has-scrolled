# Has Scrolled

Add scroll info to &lt;body&gt;.

## Install

    npm i has-scrolled

## Integrate

You're likely gonna wanna import and compile it, as it's written in ES6 (because life is short).

```js
import hasScrolled from "has-scrolled";
hasScrolled();
```

## That's all well and good, but what does it do?

As you scroll down, it'll add a class and data attributes like so:

```html
<body class="has-scrolled" data-scroll-y="120"></body>
```
