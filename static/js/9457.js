(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9457],{48999:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),l=c(r),n=(c(a(45697)),a(68291)),o=c(a(28139));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.title_action,a=e.class_action_contain,c=e.children,u=e.scroll_elm,i=e.changeStyleAction,s=e.x_always,d=e.transform_x_more,f=e.y_always,m=e.transform_y_more,p=e.time_hold,_=void 0===p?500:p,v=e.time_leave,b=void 0===v?800:v,y=e.force_close,E=e.callbackOpen,x=e.callbackClose,h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&c.return&&c.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(0),2),N=h[0],g=h[1],w=(0,n.useHold)({time:_}),k=w.StartHold,M=w.StopHold,P=(0,n.useHold)({time:b}),C=P.StartHold,O=P.StopHold;function j(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];g((function(t){return t+(e?1:-1)<=0?0:1}))}function G(){O(),k((function(){j(!0)}))}function L(){M(),C((function(){j(!1)}))}return(0,r.useEffect)((function(){M(),g(0)}),[y]),l.default.createElement(o.default,{title_action:l.default.createElement("div",{className:"ActionsHoldPc_title display-inherit cursor-pointer hv-underline",onMouseEnter:G,onMouseLeave:L},t),class_action_contain:"ActionsHoldPc "+a,use_own_title:!0,is_show:N>0,scroll_elm:u,changeStyleAction:i,x_always:s,transform_x_more:d,y_always:f,transform_y_more:m,callbackOpen:E,callbackClose:x},l.default.createElement("div",{className:"ActionsHoldPc_contain",onMouseEnter:G,onMouseLeave:L},c))}u.propTypes={},t.default=u},52636:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),l=c(a(45697)),n=c(a(88303)),o=c(a(14767));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.pic_arr,a=e.has_more,l=e.ItemComponent,o=e.clickMore;return r.default.createElement("div",{className:"flex-end row-reverse"},a&&r.default.createElement("div",{className:"OverlapPics_item"},r.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},r.default.createElement(l,{picture:t[0].picture}),r.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:o},r.default.createElement(n.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(a?1:0).map((function(e,t){return r.default.createElement("div",{key:t,className:"OverlapPics_item"},r.default.createElement("div",{className:"OverlapPics_item_img"},r.default.createElement(l,{picture:e.picture})))})))}a(89666),u.propTypes={pic_arr:l.default.array,has_more:l.default.bool,ItemComponent:l.default.func,clickMore:l.default.func},u.defaultProps={ItemComponent:o.default},t.default=u},14767:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294));function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.picture;return r.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}l(a(45697)),n.propTypes={},t.default=n},15121:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),l=(u(a(45697)),a(93191)),n=u(a(37930)),o=u(a(83174)),c=u(a(47126));function u(e){return e&&e.__esModule?e:{default:e}}a(46714);var i=r.default.createElement("div",{className:"display-flex-center wh-100 bg-blue text-white"},"Join Group");function s(e){var t=e.id,a=e.name,u=e.picture,s=e.count_member,d=e.post_count,f=e.post_unit,m=e.friend_arr,p=e.friend_count,_=e.has_more_friend,v=e.BtnElm,b=void 0===v?i:v,y=e.removeGroupCard;return r.default.createElement("div",{className:"GroupCard pos-rel display-flex flex-col space-between h-100per brs-8px border-blur bg-primary overflow-hidden user-select-none"},r.default.createElement(l.Link,{className:"display-block pos-abs-100 z-index-1",to:"/group/"+t}),r.default.createElement("div",{className:"pos-abs right-0 top-0 z-index-1 padding-12px"},r.default.createElement("div",{className:"btn-icon-36px bg-shadow-5 active-scale-sm cursor-pointer",onClick:y},r.default.createElement(n.default,{y:400,size_icon:"24px"}))),r.default.createElement("div",null,r.default.createElement("div",{className:"GroupCard_pic pos-rel"},r.default.createElement("img",{className:"pos-abs-100 object-fit-cover",src:u,alt:""})),r.default.createElement("div",{className:"border-top-blur"},r.default.createElement(o.default,{name:a,count_member:s,post_count:d,post_unit:f}))),r.default.createElement("div",{className:"padding-top-8px"},p?r.default.createElement("div",{className:"padding-x-16px"},r.default.createElement(c.default,{friend_arr:m,friend_count:p,has_more_friend:_})):null,r.default.createElement("div",{className:"GroupCard_join padding-16px"},r.default.createElement("button",{className:"display-flex-center z-index-1 w-100per h-36px brs-6px btn btn-active overflow-hidden font-600 cursor-pointer hv-after-shadow-05"},b))))}s.propTypes={},t.default=s},47126:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),l=(o(a(45697)),o(a(66963))),n=o(a(52636));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.friend_arr,a=e.friend_count,o=e.has_more_friend;return r.default.createElement("div",{className:"GroupCardFriends text-secondary"},r.default.createElement("div",{className:"display-flex align-items-center"},t.length?r.default.createElement("div",{className:"padding-right-5px"},r.default.createElement(n.default,{pic_arr:t,has_more:o})):r.default.createElement(l.default,{size_icon:"24px",fill:"currentColor"}),r.default.createElement("div",{className:"margin-left-5px"},t.length?t[0].last_name+(a>=2?" and "+(a-1)+" friend"+(a>3?"s":""):""):""+a," are member",a>=2?"s":"")))}a(44668),c.propTypes={},t.default=c},83174:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294)),l=(n(a(45697)),a(36289));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.name,a=e.count_member,n=e.post_count,o=e.post_unit;return r.default.createElement("div",{className:"GroupCartInfo padding-x-16px padding-top-16px"},r.default.createElement("div",{className:"text-nowrap font-600 font-17px"},t),r.default.createElement("div",{className:"text-secondary"},(0,l.UnitNumber)(a)," members · ",(0,l.UnitNumber)(n)," ","post",n>=2?"s":""," a ",o))}o.propTypes={},t.default=o},19457:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));n(a(45697)),a(72422),n(a(65127));var l=n(a(79602));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return r.default.createElement("div",{className:"LearnHTML"},r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(l.default,null),r.default.createElement("div",{className:"h-100vh"}))}o.propTypes={},t.default=o},79602:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),l=(c(a(45697)),c(a(15121))),n=a(8047),o=a(69565);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return r.default.createElement("div",{className:"LearnGroupCard display-flex-center"},r.default.createElement("div",{className:"LearnGroupCard_contain w-360px"},r.default.createElement(l.default,{id:1,name:"Group Name",picture:(0,n.getRandomVidPic)(),member_count:5e4,post_count:50,post_unit:"day",friend_arr:[],friend_count:(0,o.getRandomNumber)(0,4),has_more_friend:!1,BtnElm:r.default.createElement("div",{className:"display-flex-center wh-100 bg-blue text-white"},"Join Group"),removeGroupCard:function(){}})))}u.propTypes={},t.default=u},65127:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(a(67294)),l=(d(a(45697)),a(39727)),n=a(69565),o=a(52538),c=a(53898),u=d(a(75238)),i=d(a(48999)),s=d(a(98184));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=(0,o.useBool)(),a=t.is_true,d=t.toggleBool;return r.default.createElement("div",null,r.default.createElement("div",{className:"display-flex-center"},r.default.createElement(u.default,{user_id:(0,l.getRandomBool)()?1:(0,n.getRandomId)(),title_action:r.default.createElement("div",{className:"font-600"},"Nguyen Nguyen")})),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("div",{className:"display-flex-center"},r.default.createElement(i.default,{title_action:r.default.createElement("div",{className:"LearnPreviewProfile_current_like padding-y-8px padding-x-20px brs-18px border-blur bg-primary",onClick:function(){console.log("toggle like"),d()}},c.type_likes[0].component),class_action_contain:"LearnPreviewProfile_like",x_always:"left",y_always:"bottom",force_close:a},r.default.createElement("div",{className:"LearnPreviewProfile_like_contain"},r.default.createElement(s.default,{open_type_like:!0,chooseListTypeLike:function(e){console.log(e),d()}})))))}a(51230),f.propTypes={},t.default=f},89666:(e,t,a)=>{"use strict";a.r(t)},46714:(e,t,a)=>{"use strict";a.r(t)},44668:(e,t,a)=>{"use strict";a.r(t)},72422:(e,t,a)=>{"use strict";a.r(t)},51230:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=9457.js.map