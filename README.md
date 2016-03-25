## Mattock

This is meant to be a handy tool for simplifying require statements within node. When you require Mattock, pass it a project path and it will automatically require all modules within that path and return an array with your modules.

```js
var plugins = require('mattock')('./lib');
```

To test, make sure you've installed its dev dependencies, and run `npm test` within the mattock folder.

A [Mattock](https://en.wikipedia.org/wiki/Mattock) is a versatile hand tool, used for digging and chopping.
