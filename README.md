## Base Tabs ES Module
import ESmodule

```js
import { BaseTabs } from 'BaseTabs';
```

## Syntax
### Declare

```js
const tabs = BaseTabs;
```
### Initialize
```js
tabs.init();
```
## Methods
`getpaneTabs()`

Get pane elements with attribute: `[data-pane]`
```js
let panes = tabs.getpaneTabs();
```
`getnavTabs()`

Get navigation elements with attribute: `[data-target]`
```js
let links = tabs.getnavTabs();
```