(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8191],{68291:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useHold=function(e){var t=e.time,r=void 0===t?500:t,n=e.use_holding,a=void 0!==n&&n,u=e.time_holding_start,o=void 0===u?100:u,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],l=!0,n=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(l=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);l=!0);}catch(e){n=!0,a=e}finally{try{!l&&o.return&&o.return()}finally{if(n)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)(!1),2),c=i[0],d=i[1],f=(0,l.useRef)(null),s=(0,l.useRef)(null);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};f.current=setTimeout((function(){a&&d(!1),s.current&&clearTimeout(s.current),e()}),r)}return{holding:c,StartHold:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};s.current=setTimeout((function(){a&&d(!0),m(e)}),o)},StopHold:function(){a&&d(!1),s.current&&clearTimeout(s.current),f.current&&clearTimeout(f.current)}}};var l=r(67294)},19457:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(67294));a(r(45697)),r(72422);var n=a(r(65127));function a(e){return e&&e.__esModule?e:{default:e}}function u(){return l.default.createElement("div",{className:"LearnHTML"},l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement(n.default,null),l.default.createElement("div",{className:"h-100vh"}))}u.propTypes={},t.default=u},65127:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(r(67294)),n=(f(r(45697)),r(39727)),a=r(69565),u=r(52538),o=r(53898),i=f(r(75238)),c=f(r(48999)),d=f(r(98184));function f(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=(0,u.useBool)(),r=t.is_true,f=t.toggleBool;return l.default.createElement("div",null,l.default.createElement("div",{className:"display-flex-center"},l.default.createElement(i.default,{user_id:(0,n.getRandomBool)()?1:(0,a.getRandomId)(),title_action:l.default.createElement("div",{className:"font-600"},"Nguyen Nguyen")})),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("div",{className:"display-flex-center"},l.default.createElement(c.default,{title_action:l.default.createElement("div",{className:"LearnPreviewProfile_current_like padding-y-8px padding-x-20px brs-18px border-blur bg-primary",onClick:function(){console.log("toggle like"),f()}},o.type_likes[0].component),class_action_contain:"LearnPreviewProfile_like",x_always:"left",y_always:"bottom",force_close:r},l.default.createElement("div",{className:"LearnPreviewProfile_like_contain"},l.default.createElement(d.default,{open_type_like:!0,chooseListTypeLike:function(e){console.log(e),f()}})))))}r(51230),s.propTypes={},t.default=s},72422:(e,t,r)=>{"use strict";r.r(t)},51230:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=8191.js.map