(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[1189],{7392:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconsProfileAbout=void 0;var a=u(l(67294)),r=u(l(4299));function u(e){return e&&e.__esModule?e:{default:e}}t.IconsProfileAbout={work:a.default.createElement(r.default,null),university:a.default.createElement(r.default,null),school:a.default.createElement(r.default,null),family:a.default.createElement(r.default,null),relation:a.default.createElement(r.default,null),hometown:a.default.createElement(r.default,null),city:a.default.createElement(r.default,null),life_event:a.default.createElement(r.default,null),you:a.default.createElement(r.default,null),favour:a.default.createElement(r.default,null),other_name:a.default.createElement(r.default,null),email:a.default.createElement(r.default,{x:200}),phone:a.default.createElement(r.default,{y:200}),address:a.default.createElement(r.default,null),gender:a.default.createElement(r.default,null),birth:a.default.createElement(r.default,null),lang:a.default.createElement(r.default,null)}},16822:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.common_overview_icon=t.common_about_title=void 0;var a=l(7392),r=l(12471);t.common_about_title=r.AboutCommonRoutes.map((function(e){return{search:e.search,title:e.title}})),t.common_overview_icon=[{Icon:a.IconsProfileAbout.work,key_data:"work",search:"work_edu"},{Icon:a.IconsProfileAbout.university,key_data:"university",search:"work_edu"},{Icon:a.IconsProfileAbout.school,key_data:"school",search:"work_edu"},{Icon:a.IconsProfileAbout.hometown,key_data:"hometown",search:"place_lived"},{Icon:a.IconsProfileAbout.city,key_data:"city",search:"place_lived"},{Icon:a.IconsProfileAbout.address,key_data:"address",search:"contact"}]},1189:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(l(67294)),r=(n(l(45697)),n(l(99874))),u=n(l(54743));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return a.default.createElement("div",{className:"ProfileAbout width-fit-content margin-auto box-shadow-1 brs-8px-md bg-primary"},a.default.createElement("div",{className:"ProfileAbout_row display-flex justify-content-center"},a.default.createElement("div",{className:"ProfileAbout_left padding-8px"},a.default.createElement(r.default,null)),a.default.createElement("div",{className:"ProfileAbout_right padding-8px"},a.default.createElement(u.default,null))))}l(68007),l(27667),o.propTypes={},t.default=o},99874:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(l(67294)),r=(n(l(45697)),l(16822)),u=n(l(37100));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("div",{className:"AboutLeft"},a.default.createElement("h2",{className:"AboutLeft_title margin-0"},"About"),r.common_about_title.map((function(e,t){return a.default.createElement("div",{key:"AboutLeft_"+t,className:"AboutLeft_item"},a.default.createElement(u.default,{item:e}))})))}l(55303),o.propTypes={},t.default=o},37100:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(l(67294)),r=n(l(45697)),u=l(93191);function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.item,l=t.search,r=t.title;return a.default.createElement(u.Link,{to:l,replace:!0,className:"normal-text w-100per"},a.default.createElement("div",{className:"AboutLeftItem brs-8px padding-8px label-field text-secondary "+(l==location.search?"bg-active-fb text-blue":"hv-bg-blur")},r))}o.propTypes={item:r.default.shape({search:r.default.string,title:r.default.string})},t.default=o},54743:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(67294),r=d(a),u=(d(l(45697)),l(3742)),n=l(13118),o=d(l(42488)),c=l(12471);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=(0,a.useRef)(null),l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var l=[],a=!0,r=!1,u=void 0;try{for(var n,o=e[Symbol.iterator]();!(a=(n=o.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(e){r=!0,u=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw u}}return l}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,u.useRouteLoaded)({part_location:"search",handleAfterSetRouteLoaded:function(){window.innerWidth<1e3&&(0,n.handleScrollSmooth)((function(){t.current.scrollIntoView(!1)}))},allowed_routes:c.about_search_arr}),2),d=l[0];return l[1],r.default.createElement("div",{ref:t},r.default.createElement(o.default,{route_arr:c.AboutRoutes,part_location:"search",route_loaded_arr:d,fallback:r.default.createElement("div",{className:"AboutRight_fallback wh-100"})}))}l(3325),f.propTypes={},t.default=f},68007:(e,t,l)=>{"use strict";l.r(t)},27667:(e,t,l)=>{"use strict";l.r(t)},55303:(e,t,l)=>{"use strict";l.r(t)},3325:(e,t,l)=>{"use strict";l.r(t)}}]);
//# sourceMappingURL=1189.js.map