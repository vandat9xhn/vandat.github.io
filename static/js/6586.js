(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6586],{3742:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRouteLoaded=void 0;var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(67294);function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}t.useRouteLoaded=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pathname",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return location[e]},n=(0,r.useState)([]),i=a(n,2),o=i[0],u=i[1];return(0,r.useLayoutEffect)((function(){var n=t();!o.includes(location[e])&&u((function(e){return[].concat(l(e),[n])}))}),[location[e]]),[o,u]}},42488:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=i(a),l=i(n(45697));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.route_arr,n=e.part_location,l=e.route_loaded_arr,i=e.fallback;return r.default.createElement(a.Suspense,{fallback:i},t.map((function(e,t){return r.default.createElement("div",{key:"RouteLoaded_"+t,className:location[n]==e[n]?"":"display-none"},l.includes(e[n])&&r.default.createElement(e.component,e.props||{}))})))}o.propTypes={route_arr:l.default.array,part_location:l.default.string,route_loaded_arr:l.default.array,fallback:l.default.element},o.defaultProps={part_location:"pathname",fallback:r.default.createElement(a.Fragment,null)},t.default=o},28746:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=o(a),l=n(93191),i=(o(n(45697)),o(n(23504)));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(""),2),n=t[0],o=t[1];return n?r.default.createElement(l.Redirect,{to:"/fashion/search?q="+n,push:!0}):r.default.createElement("div",{className:"FashionH"},r.default.createElement(i.default,{handled:!1,handleSearchFashion:function(e){e.trim()&&o(e)}}))}u.propTypes={},t.default=u},67563:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(67294),l=d(r),i=(d(n(45697)),n(3742)),o=d(n(42488)),u=d(n(37930)),s=n(15151),c=d(n(42573)),f=d(n(28746));function d(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=(0,r.useState)(!1),n=a(t,2),d=n[0],m=n[1],p=(0,r.useState)(-1),h=a(p,2),_=h[0],v=h[1],y=(0,i.useRouteLoaded)(),b=a(y,1)[0];return(0,r.useEffect)((function(){document.title="Personal"}),[]),(0,r.useEffect)((function(){v(s.fashion_path_arr.findIndex((function(e){return location.pathname.includes(e)}))),d&&m(!1)}),[location.pathname]),l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement(f.default,null)),l.default.createElement("div",{className:"FashionPersonal_ctg"},l.default.createElement("div",{className:"FashionPersonal_contain"},l.default.createElement("div",{className:"FashionPersonal_row"},l.default.createElement("div",{className:"FashionPersonal_left box-shadow-1 brs-5px "+(d?"":"FashionPersonal_left-hidden")},l.default.createElement(c.default,{active_ix:_,handleChangeActiveIx:function(e){v(e)}}),l.default.createElement("div",{className:"FashionPersonal_left-toggle "+(d?"":"FashionPersonal_left-toggle-hidden")},l.default.createElement("div",{className:"FashionPersonal_left-icon close-icon-small brs-50 "+(d?"":"FashionPersonal_left-icon-close"),onClick:function(){m(!d)}},l.default.createElement(u.default,{y:400,size_icon:"1rem"})))),l.default.createElement("div",{className:"FashionPersonal_right"},l.default.createElement(o.default,{route_arr:s.FashionRoutes,route_loaded_arr:b})))))))}n(93761),m.propTypes={},t.default=m},18730:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_personal_list=[{title:"Personal",sub_list:[{title:"Information",link:"/user/info"},{title:"Contact",link:"/user/contact"}]},{title:"Bill",sub_list:[{title:"Buying",link:"/bill/buying"},{title:"Cancel",link:"/bill/cancel"}]},{title:"Notifications",link:"/notifications"},{title:"Promotion",sub_list:[{title:"Voucher",link:"/promotion/voucher"},{title:"Free Ship",link:"/promotion/free-ship"}]}]},42573:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(67294)),r=n(93191),l=(o(n(45697)),n(18730)),i=o(n(62784));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.active_ix,n=e.handleChangeActiveIx;function o(e){n(e)}function u(){n(-1)}return a.default.createElement("div",{className:"PersonalLeft"},a.default.createElement("ul",{className:"PersonalLeft_list list-none"},l.data_personal_list.map((function(e,n){return a.default.createElement("li",{key:"PersonalLeft_"+n},e.sub_list?a.default.createElement(i.default,{active_ix:t,item_ix:n,sub_list:e.sub_list,title:e.title,handleChangeActiveIx:o}):a.default.createElement(r.NavLink,{className:"normal-text",activeClassName:"text-blue",to:"/fashion/personal"+e.link,replace:!0},a.default.createElement("div",{className:"padding-8px label-field",onClick:u},e.title)))}))))}n(6918),u.propTypes={},t.default=u},62784:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(67294)),r=(l(n(45697)),n(93191));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.active_ix,n=e.item_ix,l=e.sub_list,i=e.title,o=e.handleChangeActiveIx;return a.default.createElement("div",{className:"SubList"},a.default.createElement("div",{className:"padding-8px label-field cursor-pointer",onClick:function(){o(n)}},i),a.default.createElement("ul",{className:"SubList_list list-none "+(t==n?"SubList_show":"SubList_hidden")},l.map((function(e,t){return a.default.createElement("li",{key:"SubList_"+t},a.default.createElement(r.NavLink,{className:"normal-text",activeClassName:"text-blue",to:"/fashion/personal"+e.link,replace:!0},a.default.createElement("div",{className:"padding-8px"},e.title)))}))))}n(84856),i.propTypes={},t.default=i},15151:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FashionRoutes=t.fashion_path_arr=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a},l=r.default.lazy((function(){return n.e(6032).then(n.bind(n,6032))})),i=r.default.lazy((function(){return n.e(5499).then(n.bind(n,55499))})),o=r.default.lazy((function(){return n.e(2249).then(n.bind(n,12249))})),u=r.default.lazy((function(){return n.e(8487).then(n.bind(n,29006))})),s=r.default.lazy((function(){return n.e(8594).then(n.bind(n,18594))})),c=r.default.lazy((function(){return n.e(662).then(n.bind(n,80662))})),f=r.default.lazy((function(){return n.e(2655).then(n.bind(n,42655))}));t.fashion_path_arr=["/user","/bill","/notifications","/promotion"],t.FashionRoutes=[{pathname:"/fashion/personal/user/info",component:s},{pathname:"/fashion/personal/user/contact",component:o},{pathname:"/fashion/personal/bill/buying",component:l},{pathname:"/fashion/personal/bill/cancel",component:i},{pathname:"/fashion/personal/notifications",component:c},{pathname:"/fashion/personal/promotion/voucher",component:f},{title:"Free Ship",pathname:"/fashion/personal/promotion/free-ship",component:u}]},93761:(e,t,n)=>{"use strict";n.r(t)},6918:(e,t,n)=>{"use strict";n.r(t)},84856:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=6586.js.map