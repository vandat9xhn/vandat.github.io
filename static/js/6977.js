(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6977],{4685:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=c(n),s=(c(r(45697)),r(81042)),u=r(35155),o=c(r(14122));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t,r,c=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({post:[],has_fetched:!1}),e.next=3,(0,s.API_Post_RD)(i,"GET");case 3:t=e.sent,m&&d({post:[t.data],has_fetched:!0});case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,s){try{var u=e[a](s),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(o)}("next")}))},function(){return r.apply(this,arguments)}),i=e.match.params.id,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,s=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw s}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({post:[],has_fetched:!1}),2),l=f[0],d=f[1],h=l.post,p=l.has_fetched,m=(0,u.useMounted)();return(0,n.useEffect)((function(){c()}),[i]),a.default.createElement("div",{className:"UserPost"},a.default.createElement("div",{className:"UserPost_contain bg-fb"},a.default.createElement("div",{className:"UserPost_posts"},a.default.createElement(o.default,{posts:h,has_add_new:!1,has_fetched:p,is_fetching:!1}))))}r(3118),i.propTypes={},t.default=i},3118:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=6977.js.map