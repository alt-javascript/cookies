Simple utility to ease the use of browser cookies.
===================================

[![NPM](https://nodei.co/npm/@alt-javascript/cookies.svg?downloads=true&downloadRank=true)](https://nodei.co/npm/@alt-javascript/cookies/)
<br/>
![Language Badge](https://img.shields.io/github/languages/top/alt-javascript/cookies)
![Package Badge](https://img.shields.io/npm/v/@alt-javascript/cookies) <br/>
[release notes](https://github.com/alt-javascript/cookies/blob/main/History.md)

<a name="intro">Introduction</a>
--------------------------------
Simple utility to ease the use of browser cookies.

<a name="usage">Usage</a>
-------------------------


The module is also able to be used directly in the browser, as an IIFE (Immediately Invoked Function Expression),
as follows:

```html
   <script src="https://cdn.jsdelivr.net/npm/@alt-javascript/cookies/dist/alt-javascript-cookies-iife.js"></script>

   <script>
       cookies.setCookie('somecookie','giveitavalue',365,'Strict');// expires in 365 days, SameSite == Strict (default)
       cookies.getCookie('somecookie');
       cookies.deleteCookie("somecookie");
   </script>
```

Or import the ES6 module bundle from a module, as follows:

```javascript
import { Cookies } from 'https://cdn.jsdelivr.net/npm/@alt-javascript/cookies'

let cookies = new Cookies();

//...as above
```

### Logger

The Cookies class optionally accepts an `@alt-javascript/logger`, an is configured with the `@alt-javascript/cookies/Cookies`
qualifier by default when using with `@alt-javascript/boot`

<a name="license">License</a>
-----------------------------

May be freely distributed under the [MIT license](https://raw.githubusercontent.com/alt-javascript/cookies/main/LICENSE).

Copyright (c) 2021-2022 Craig Parravicini    
