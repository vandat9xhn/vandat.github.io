(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[869],{38320:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_suggested_arr=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(69565),o=(r(8047),r(58822)),u=r(7605),l=r(61426),i=function(){var e=(0,u.getDefaultArr)((function(){return(0,o.getRandomUser)().user}),0,2),t=(0,a.getRandomNumber)(e.length,e.length+4);return n({},(0,o.getRandomGroup)().group_obj,{privacy:(0,l.getRandomFromArr)(["Public","Private"]),member_count:1e3*(0,a.getRandomNumber)(1,20),post_count:(0,a.getRandomNumber)(1,50),post_unit:(0,l.getRandomFromArr)(["day","week"]),friend_arr:e,friend_count:t,has_more_friend:t>e.length})};t.default_fb_group_suggested_arr=function(){return(0,u.getDefaultArr)(i,16,16)}},24841:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbGroupSuggested_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_FbGroupSuggested_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.c_count,a=void 0===n?0:n,l=t.params,i=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_FbGroupSuggested_L)(o({c_count:a,size:10,page:1},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return a.apply(this,arguments)}),r(66603))},86030:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.useCardsRowFit=function(e){var t,r,s=(t=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:m&&m(),o.IS_MOBILE||b();case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(){return r.apply(this,arguments)}),c=e.handle_API_L,d=void 0===c?function(){return new Promise}:c,f=e.getItemElm,_=void 0===f?function(){return u.initial_div_elm}:f,p=e.handleFetched,m=void 0===p?function(){}:p,v=(0,a.useRef)(null),h=(0,i.useScrollToX)({ref_scroll_elm:v,getItemElm:_}),b=h.hasNextPrev,g=(0,l.useDataShowMore)({handle_API_L:d}),y=g.getData_API;return(0,a.useEffect)((function(){s()}),[]),n({ref_scroll_elm:v},h,g)};var a=r(67294),o=r(55852),u=r(96627),l=r(84353),i=r(42789)},31937:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useObserverVirtualScroll=function(e){var t=e.ref_observer_elm,r=void 0===t?{current:null}:t,o=e.ref_contain_elm,u=void 0===o?{current:null}:o,l=e.ref_root,i=void 0===l?{current:null}:l,s=e.rootMargin_y,c=e.has_callback,d=void 0!==c&&c,f=e.callback,_=void 0===f?function(){}:f;function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(r.current){var t=e?"auto":r.current.offsetHeight+"px",n=e?"block":"none";d?_(t,n):(r.current.style.height=t,u.current.style.display=n)}}(0,n.useEffect)((function(){(0,a.observeVirtualScroll)(r.current,p,s,i.current)}),[])};var n=r(67294),a=r(12811)},12811:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.observeVirtualScroll=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,n=arguments[3],a=new IntersectionObserver((function(e,r){e.forEach((function(e){e.boundingClientRect.height&&(e.isIntersecting?t(!0):t(!1))}))}),{rootMargin:r+"px 0px",root:n});a.observe(e)}},66603:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbGroupSuggested_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(38320);t.API_FbGroupSuggested_L=function(e){return(0,o.API_FakeReal)((0,u.default_fb_group_suggested_arr)(),(function(){return(0,a.default)({url:"api/facebook/fb-group-l/",method:"GET",params:e})}),e)}},99249:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(86030)),o=u(r(69814));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ItemComponent,r=e.item_props,u=e.handle_API_L,l=e.handleFetched,i=(0,a.useCardsRowFit)({getItemElm:function(){return s.current.getElementsByTagName("li")[0]},handle_API_L:u,handleFetched:l}),s=i.ref_scroll_elm,c=i.is_has_next,d=i.is_has_prev,f=i.data_state,_=i.handleNext,p=i.handlePrev;return n.default.createElement(o.default,{ItemComponent:t,item_props:r,ref_scroll_elm:s,data_arr:f.data_arr,is_has_next:c,is_has_prev:d,handleNext:_,handlePrev:p})}r(66895),l.propTypes={},t.default=l},69814:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=i(r(67294)),o=(i(r(45697)),r(55852)),u=i(r(17852)),l=i(r(61498));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.ItemComponent,r=e.item_props,i=e.ref_scroll_elm,s=e.data_arr,c=e.is_has_next,d=e.is_has_prev,f=e.handleNext,_=e.handlePrev;return a.default.createElement("div",{className:"CardsRowFitContain pos-rel"},a.default.createElement("div",{ref:i,className:"CardsRowFitContain_contain wh-100 overflow-x-auto scroll-height-0"},a.default.createElement("ul",{className:"display-flex list-none"},s.map((function(e,o){return a.default.createElement("li",{key:e.id,className:"CardsRowFitContain_item w-100per flex-shrink-0"},a.default.createElement(u.default,{ref_root:i},a.default.createElement(t,n({item:e,ix:o},r))))})))),o.IS_MOBILE?null:a.default.createElement("div",{className:"text-secondary"},a.default.createElement(l.default,{is_btn_circle:!0,is_has_next:c,is_has_prev:d,handleNext:f,handlePrev:_})))}r(80412),s.propTypes={},t.default=s},17852:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=i(a),u=i(r(45697)),l=r(31937);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.children,r=e.ref_root,u=e.rootMargin_y,i=e.extra_height,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({display:"block",height:"auto"}),2),c=s[0],d=s[1],f=c.display,_=c.height,p=(0,a.useRef)(null),m=(0,a.useRef)(null);return(0,l.useObserverVirtualScroll)({ref_observer_elm:p,ref_contain_elm:m,ref_root:r,rootMargin_y:u,has_callback:!0,callback:function(e,t){d(n({},c,{display:t,height:e}))}}),o.default.createElement("div",{className:"VirtualScroll",ref:p,style:{height:"auto"==_?void 0:"calc("+_+" + "+i+")"}},o.default.createElement("div",{className:"VirtualScroll_contain "+("block"==f?"":"display-none"),ref:m},t))}s.propTypes={children:u.default.element,rootMargin_y:u.default.number,extra_height:u.default.string},s.defaultProps={extra_height:"0px"},t.default=s},15121:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),a=(i(r(45697)),r(93191)),o=i(r(37930)),u=i(r(83174)),l=i(r(47126));function i(e){return e&&e.__esModule?e:{default:e}}r(46714);var s=n.default.createElement("div",{className:"display-flex-center wh-100 bg-blue text-white"},"Join Group");function c(e){var t=e.id,r=e.name,i=e.picture,c=e.member_count,d=e.post_count,f=e.post_unit,_=e.friend_arr,p=e.friend_count,m=e.has_more_friend,v=e.BtnElm,h=void 0===v?s:v,b=e.removeGroupCard;return n.default.createElement("div",{className:"GroupCard pos-rel display-flex flex-col space-between h-100per brs-8px border-blur bg-primary overflow-hidden user-select-none"},n.default.createElement(a.Link,{className:"display-block pos-abs-100 z-index-1",to:"/group/"+t}),n.default.createElement("div",{className:"pos-abs right-0 top-0 z-index-1 padding-12px"},n.default.createElement("div",{className:"btn-icon-36px bg-shadow-5 active-scale-sm cursor-pointer",onClick:b},n.default.createElement(o.default,{y:400,size_icon:"24px"}))),n.default.createElement("div",null,n.default.createElement("div",{className:"GroupCard_pic pos-rel"},n.default.createElement("img",{className:"pos-abs-100 object-fit-cover",src:i,alt:""})),n.default.createElement("div",{className:"border-top-blur"},n.default.createElement(u.default,{name:r,member_count:c,post_count:d,post_unit:f}))),n.default.createElement("div",{className:"GroupCard_bottom padding-top-8px"},p?n.default.createElement("div",{className:"GroupCard_friends padding-x-16px"},n.default.createElement(l.default,{friend_arr:_,friend_count:p,has_more_friend:m})):null,n.default.createElement("div",{className:"GroupCard_join padding-16px"},n.default.createElement("button",{className:"display-flex-center z-index-1 w-100per h-36px brs-6px btn btn-active overflow-hidden font-600 cursor-pointer hv-after-shadow-05"},h))))}c.propTypes={},t.default=c},47126:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),u(r(66963))),o=u(r(52636));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.friend_arr,r=e.friend_count,u=e.has_more_friend;return n.default.createElement("div",{className:"GroupCardFriends text-secondary"},n.default.createElement("div",{className:"display-flex align-items-center"},t.length?n.default.createElement("div",{className:"padding-right-5px"},n.default.createElement(o.default,{pic_arr:t,has_more:u})):n.default.createElement(a.default,{size_icon:"24px",fill:"currentColor"}),n.default.createElement("div",{className:"margin-left-5px"},t.length?t[0].last_name+(r>=2?" and "+(r-1)+" friend"+(r>3?"s":""):""):""+r," are member",r>=2?"s":"")))}r(44668),l.propTypes={},t.default=l},83174:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),r(36289));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.name,r=e.member_count,o=e.post_count,u=e.post_unit;return n.default.createElement("div",{className:"GroupCartInfo padding-x-16px padding-top-16px"},n.default.createElement("div",{className:"text-nowrap font-600 font-17px"},t),n.default.createElement("div",{className:"text-secondary"},(0,a.UnitNumber)(r)," members · ",(0,a.UnitNumber)(o)," ","post",o>=2?"s":""," a ",u))}r(89),u.propTypes={},t.default=u},81335:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(15121)));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.item,r=e.ix,o=e.BtnElm,u=e.removeGroupCard;return n.default.createElement(a.default,{id:t.id,name:t.name,picture:t.picture,member_count:t.member_count,post_count:t.post_count,post_unit:t.post_unit,friend_arr:t.friend_arr,friend_count:t.friend_count,has_more_friend:t.has_more_friend,BtnElm:o,removeGroupCard:function(){u(r)}})}u.propTypes={},t.default=u},869:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=i(r(67294)),o=(i(r(45697)),r(24841)),u=i(r(99249)),l=i(r(81335));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.params_api,r=e.has_handle_API_L,i=void 0!==r&&r,s=e.BtnElm,c=e.handle_API_GroupCards_L,d=e.handleFetched;return a.default.createElement("div",{className:"GroupRowCardsFit"},a.default.createElement(u.default,{ItemComponent:l.default,item_props:{BtnElm:s,removeGroupCard:function(e){console.log(e)}},handle_API_L:function(e){return i?c(e):(0,o.handle_API_FbGroupSuggested_L)({c_count:e,params:n({size:5},t)})},handleFetched:d}))}r(58402),s.propTypes={},t.default=s},66895:(e,t,r)=>{"use strict";r.r(t)},80412:(e,t,r)=>{"use strict";r.r(t)},46714:(e,t,r)=>{"use strict";r.r(t)},44668:(e,t,r)=>{"use strict";r.r(t)},89:(e,t,r)=>{"use strict";r.r(t)},58402:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=869.js.map