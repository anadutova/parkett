webpackJsonp([0xbb4a0ea21d92],{775:function(e,t){e.exports={main:"src-components-Angel----Angel-module---main---2G6gT",angel:"src-components-Angel----Angel-module---angel---1hKEc",clean:"src-components-Angel----Angel-module---clean---iYMwT",devil:"src-components-Angel----Angel-module---devil---3O1Q6"}},387:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(1),c=a(o),s=n(775),f=a(s),i=function(e,t){for(var n=Math.round(t/2)-1,a=[],l=-n;l<=n;l+=1)a.push([e[0]+t,e[1]+l]),a.push([e[0]-t,e[1]+l]),a.push([e[0]+l,e[1]+t]),a.push([e[0]+l,e[1]-t]);for(var r=[e[0]+t,e[1]+n];r[1]<=e[1]+t-2;)r[1]+=1,r[0]-=1,a.push([].concat(r));for(r=[e[0]+t,e[1]-n];r[1]>=e[1]-t+2;)r[1]-=1,r[0]-=1,a.push([].concat(r));for(r=[e[0]-t,e[1]-n];r[1]>=e[1]-t+2;)r[1]-=1,r[0]+=1,a.push([].concat(r));for(r=[e[0]-t,e[1]+n];r[1]<=e[1]+t-2;)r[1]+=1,r[0]+=1,a.push([].concat(r));return a},d=function(e){function t(){l(this,t);var n=r(this,e.call(this));return n.reset=function(){n.setState({table:new Array(13).fill(0).map(function(){return new Array(13).fill(0)}),circle:[].concat(i([6,6],5)),angelI:6,angelJ:6})},n.setAngel=function(e,t){var a=n.state.table;a[e][t]=0,n.setState({table:a})},n.setDevil=function(e,t){var a=n.state.table;a[e][t]=1,n.setState({table:a})},n.handleKeyPress=function(e){var t=n.state,a=t.angelI,l=t.angelJ,r=t.table;"w"===e.key&&1!==r[a-1][l]&&(n.setState(function(e){return{angelI:e.angelI-1}}),n.AI([a-1,l],[a,l])),"s"===e.key&&1!==r[a+1][l]&&(n.setState(function(e){return{angelI:e.angelI+1}}),n.AI([a+1,l],[a,l])),"a"===e.key&&1!==r[a][l-1]&&(n.setState(function(e){return{angelJ:e.angelJ-1}}),n.AI([a,l-1],[a,l])),"d"===e.key&&1!==r[a][l+1]&&(n.setState(function(e){return{angelJ:e.angelJ+1}}),n.AI([a,l+1],[a,l]))},n.AI=function(e,t){var a=e[0],l=e[1],r=n.state.circle;if(0===r.length)return void n.setDevil(t[0],t[1]);var u=0;r.forEach(function(e,t){var n=e[0]-a,o=e[1]-l,c=r[u][0]-a,s=r[u][1]-l;if(n*n+o*o<c*c+s*s&&(u=t),n*n+o*o===c*c+s*s){var f=r.find(function(t){var n=Math.abs(t[0]-e[0]),a=Math.abs(t[1]-e[1]);return 1===n&&1===a});f&&(u=t)}}),n.setState({circle:r.filter(function(e){return e!==r[u]})}),n.setDevil(r[u][0],r[u][1])},n.state={table:new Array(13).fill(0).map(function(){return new Array(13).fill(0)}),circle:[].concat(i([6,6],5)),angelI:6,angelJ:6},n}return u(t,e),t.prototype.render=function(){var e=this.state,t=e.table,n=e.angelI,a=e.angelJ;return c.default.createElement("div",{className:f.default.main,onKeyPress:this.handleKeyPress,role:"button",tabIndex:0},c.default.createElement("div",null,"Juss ki a sárga négyzet szélére!"),c.default.createElement("div",null,"Iranyítás: WASD"),c.default.createElement("div",null,c.default.createElement("button",{onClick:this.reset,type:"button"},"RESET")),c.default.createElement("table",null,c.default.createElement("tbody",null,t.map(function(e,t){return c.default.createElement("tr",{key:t},e.map(function(e,l){return n===t&&a===l?c.default.createElement("th",{key:l},c.default.createElement("div",{className:f.default.angel})):c.default.createElement("th",{key:l},c.default.createElement("div",{className:1===e?f.default.devil:f.default.clean}))}))}))))},t}(c.default.Component);t.default=d,e.exports=t.default},439:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),r=a(l),u=n(387),o=a(u),c=n(24),s=a(c),f=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:s.default.default},r.default.createElement(o.default,null)))};t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-angel-js-fe3be0a733f60f897ce8.js.map