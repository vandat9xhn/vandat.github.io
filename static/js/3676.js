(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3676],{43214:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_page_action_other_obj={follow:{name:"follow",title:"Follow",info:""},save:{name:"save",title:"Save",info:""},share:{name:"share",title:"Share",info:""},block:{name:"block",title:"Block Page",info:""},support_report:{name:"support_report",title:"Find support or report page",info:""}}},84962:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomPageType=function(){return(0,n.getRandomFromArr)(["supermarket","Just for fun","Community","School/university"])};var n=a(61426)},92693:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_other_action_arr=void 0;var n=a(43214);t.default_fb_page_other_action_arr=function(){return[[n.data_fb_page_action_other_obj.follow,n.data_fb_page_action_other_obj.save,n.data_fb_page_action_other_obj.share,n.data_fb_page_action_other_obj.block,n.data_fb_page_action_other_obj.support_report]]}},15359:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_obj=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(39727),l=a(8047),o=a(58822),i=a(84962);t.default_fb_page_obj=function(){var e=(0,o.getRandomPage)().page_obj;return n({},e,{cover:(0,l.getRandomImg)(),has_new_story:(0,r.getRandomBool)(),info_extra_1:{title:"@"+e.name.toLowerCase().replace(" ",""),has_link:!1,link_to:""},info_extra_2:{title:(0,i.getRandomPageType)(),has_link:!1,link_to:""},action_main_arr:["learn_more"],action_arr:["like","chat"],has_liked:(0,r.getRandomBool)(),has_followed:(0,r.getRandomBool)()})}},80551:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_PageActions_L=void 0;var n,r,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=(t.handle_API_PageActions_L=(n=regeneratorRuntime.mark((function e(t){var a,n=t.page_id,r=void 0===n?0:n,i=t.type,u=void 0===i?"":i,c=t.params,s=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_PageActions_L)(l({page_model:r,type:u},s));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=n.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var o=e[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(e){return r.apply(this,arguments)}),a(96620))},75194:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbPage_R=void 0;var n,r,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=(t.handle_API_FbPage_R=(n=regeneratorRuntime.mark((function e(t){var a,n=t.page_id,r=void 0===n?0:n,i=t.params,u=void 0===i?{}:i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_FbPage_R)(l({page_model:r},u));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=n.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var o=e[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(e){return r.apply(this,arguments)}),a(2241))},37814:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_fb_page=function(){return{name:"",picture:"",cover:"",has_new_story:!1,has_seen_story:!1,info_extra_1:{title:"",has_link:!1,link_to:""},info_extra_2:{title:"",has_link:!1,link_to:""},action_main_arr:[],action_arr:[],has_liked:!1,has_followed:!1}}},96620:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PageActions_L=void 0;var n,r=(n=a(87421))&&n.__esModule?n:{default:n},l=a(50918),o=a(92693);t.API_PageActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.API_FakeReal)((0,o.default_fb_page_other_action_arr)(),(function(){return(0,r.default)({url:"api/facebook/page-other-action-l",method:"GET",params:e})}))}},2241:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbPage_R=void 0;var n,r=(n=a(87421))&&n.__esModule?n:{default:n},l=a(50918),o=a(15359);t.API_FbPage_R=function(e){return(0,l.API_FakeReal)((0,o.default_fb_page_obj)(),(function(){return(0,r.default)({url:"api/facebook/fb-page-r/",method:"GET",params:e})}),e)}},94856:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=(o(a(45697)),a(80551)),l=o(a(10153));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t,a,o=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.handle_API_PageActions_L)({page_id:i,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var o=e[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(){return a.apply(this,arguments)}),i=e.page_id,u=e.class_action_contain,c=e.is_at_body,s=e.handleAction;return n.default.createElement(l.default,{class_main:"BtnPageOther",class_btn:"BtnPageOther_btn",is_at_body:c,class_action_contain:u,handle_API_L:o,handleAction:s})}i.propTypes={},t.default=i},23633:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(67294)),r=(c(a(45697)),c(a(25488))),l=c(a(32682)),o=c(a(183)),i=c(a(79738)),u=c(a(27688));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.action_name,a=e.use_title,c=e.use_icon,s=e.page_id,_=e.has_liked,d=e.has_followed,f=e.handleAction;return"like"==t?n.default.createElement(r.default,{use_title:a,use_icon:c,has_liked:_,handleAction:f}):"follow"==t?n.default.createElement(l.default,{use_title:a,use_icon:c,has_followed:d,handleAction:f}):"chat"==t?n.default.createElement(o.default,{page_id:s,use_title:a,use_icon:c}):"contact"==t?n.default.createElement(i.default,{use_title:a,use_icon:c,handleAction:f}):"learn_more"==t?n.default.createElement(u.default,{use_title:a,use_icon:c,handleAction:f}):null}s.propTypes={},t.default=s},183:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=c(r),o=(c(a(45697)),a(15130)),i=c(a(48454)),u=c(a(44257));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.page_id,a=e.className,n=e.Icon,i=e.title,c=e.use_title,s=e.use_icon,_=(0,r.useContext)(o.context_api).openRoomChat;return l.default.createElement(u.default,{className:"BtnPageChat "+a,Icon:n,title:i,use_title:c,use_icon:s,handleClick:function(){_(t)}})}s.propTypes=n({},u.default.propTypes),s.defaultProps={Icon:l.default.createElement(i.default,{x:200,y:200}),title:"Message",className:"bg-ccc"},t.default=s},79738:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=o(a(67294)),l=(o(a(45697)),o(a(44257)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,a=e.Icon,n=e.title,o=e.use_title,i=e.use_icon,u=e.handleAction;return r.default.createElement(l.default,{className:"BtnPageContact "+t,Icon:a,title:n,use_title:o,use_icon:i,handleClick:function(){u("contact")}})}i.propTypes=n({},l.default.propTypes),i.defaultProps={Icon:null,title:"Contact",className:"bg-ccc"},t.default=i},32682:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=i(a(67294)),l=(i(a(45697)),i(a(96770))),o=i(a(44257));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.className,a=e.classNameActive,n=e.Icon,l=e.title,i=e.use_title,u=e.use_icon,c=e.has_followed,s=e.handleAction;return r.default.createElement(o.default,{className:"BtnPageFollow "+(c?a:t),Icon:n,title:l,use_title:i,use_icon:u,handleClick:function(){s("follow")}})}u.propTypes=n({},o.default.propTypes),u.defaultProps={Icon:r.default.createElement(l.default,null),title:"Follow",className:"bg-ccc",classNameActive:"BtnPageFollow-active bg-fb-active text-blue"},t.default=u},27688:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=o(a(67294)),l=(o(a(45697)),o(a(44257)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,a=e.Icon,n=e.title,o=e.use_title,i=e.use_icon,u=e.handleAction;return r.default.createElement(l.default,{className:"BtnPageLearnMore "+t,Icon:a,title:n,use_title:o,use_icon:i,handleClick:function(){u("learn_more")}})}i.propTypes=n({},l.default.propTypes),i.defaultProps={Icon:null,title:"Learn more",className:"bg-ccc"},t.default=i},25488:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=i(a(67294)),l=(i(a(45697)),i(a(6153))),o=i(a(44257));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.className,a=e.classNameActive,n=e.Icon,l=e.title,i=e.use_title,u=e.use_icon,c=e.has_liked,s=e.handleAction;return r.default.createElement(o.default,{className:"BtnPageLike "+(c?a:t),Icon:n,title:l,use_title:i,use_icon:u,handleClick:function(){s("like")}})}u.propTypes=n({},o.default.propTypes),u.defaultProps={Icon:r.default.createElement(l.default,{fill:"currentColor",stroke:"currentColor"}),title:"Like",className:"bg-ccc",classNameActive:"bg-fb-active text-blue"},t.default=u},63629:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),a(93191)),l=u(a(16449)),o=u(a(68188)),i=u(a(87945));function u(e){return e&&e.__esModule?e:{default:e}}a(274);var c=function(e){var t=e.picture,a=e.has_new_story,r=e.has_seen_story;return n.default.createElement("div",{className:"ProfileLayoutPicture_pic pos-abs-100 brs-50 box-shadow-1 "+(a?"ProfileLayoutPicture_pic-story cursor-pointer active-scale-sm "+(r?"ProfileLayoutPicture_pic-story_seen":"ProfileLayoutPicture_pic-story_new"):"")},n.default.createElement("div",{className:"ProfileLayoutPicture_pic_contain wh-100 brs-50"},n.default.createElement("img",{className:"ProfileLayoutPicture_img wh-100 brs-50 bg-primary object-fit-cover",src:t,alt:""})))},s=function(e){var t=e.name,a=e.Icon,l=e.title,o=e.info,u=e.link_to,c=e.handleAction,s=e.handleClose;return n.default.createElement(r.Link,{className:"color-inherit",to:u},n.default.createElement(i.default,{name:t,Icon:a,title:l,info:o,stop_propagation:!1,handleAction:c,handleClose:s}))};function _(e){var t=e.link_to,a=e.picture,r=e.has_new_story,i=e.has_seen_story,u=e.handleAction;return n.default.createElement("div",{className:"ProfileLayoutPicture pos-rel h-100per"},n.default.createElement("div",{className:"ProfileLayoutPicture_contain pos-abs left-0 w-100per"},n.default.createElement(l.default,{class_link:"ProfileLayoutPicture_link",has_link:!!t,link_to:t},n.default.createElement("div",{className:"pos-rel padding-top-100per"},r?n.default.createElement(o.default,{title_action:n.default.createElement(c,{picture:a,has_new_story:r,has_seen_story:i}),y_always:"top",ComponentItem:s,handleAction:u,handle_API_L:function(){return[[{name:"view_story",title:"View story",link_to:"/stories?i=1"},{name:"view_picture",title:"View profile picture",link_to:"/posts/1"}]]}}):n.default.createElement(c,{picture:a,has_new_story:r,has_seen_story:i})))))}_.propTypes={},t.default=_},64575:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(67294)),r=(s(a(45697)),s(a(17852))),l=s(a(58833)),o=s(a(78790)),i=s(a(16812)),u=s(a(22353)),c=s(a(11836));function s(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=e.page_id,a=e.name,s=e.picture,_=e.cover,d=e.has_new_story,f=e.has_seen_story,p=e.info_extra_1,m=e.info_extra_2,v=e.action_main_arr,h=e.action_arr,y=e.has_liked,g=e.has_followed,b=e.openCoverPicture,P=e.handleActionPicture,E=e.handleAction;return n.default.createElement(r.default,null,n.default.createElement("div",{className:"FbPageInfo bg-primary"},n.default.createElement("div",{className:"FbPageInfo_cover"},n.default.createElement(l.default,{cover:_,openCoverPicture:b})),n.default.createElement("div",{className:"FbPageInfo_user_action display-flex space-between fb-profile-width-contain"},n.default.createElement("div",{className:"FbPageInfo_user display-flex"},n.default.createElement("div",{className:"flex-shrink-0"},n.default.createElement(u.default,{picture:s,has_new_story:d,has_seen_story:f,handleActionPicture:P})),n.default.createElement("div",{className:"FbPageInfo_name_extra margin-left-16px"},n.default.createElement("div",null,n.default.createElement(c.default,{name:a})),n.default.createElement("div",null,n.default.createElement(o.default,{info_extra_1:p,info_extra_2:m})))),n.default.createElement("div",{className:"FbPageInfo_actions align-self-end"},n.default.createElement(i.default,{page_id:t,action_main_arr:v,action_arr:h,has_liked:y,has_followed:g,handleAction:E})))))}a(18616),_.propTypes={},t.default=_},16812:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),a(55852)),l=i(a(23633)),o=i(a(94856));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.page_id,a=e.action_main_arr,i=e.action_arr,u=e.has_liked,c=e.has_followed,s=e.handleAction;return r.IS_MOBILE?n.default.createElement("div",{className:"FbPageActionsMb display-flex flex-wrap"},n.default.createElement("div",{className:"flex-grow-1 padding-4px"},n.default.createElement(l.default,{action_name:i[0],page_id:t,has_liked:u,has_followed:c,handleAction:s})),n.default.createElement("div",{className:"flex-grow-1 display-flex flex-wrap"},i[1]?n.default.createElement("div",{className:"flex-grow-1 padding-4px"},n.default.createElement(l.default,{action_name:i[1],page_id:t,has_liked:u,has_followed:c,handleAction:s})):null,n.default.createElement("div",{className:"padding-4px"},n.default.createElement(o.default,{page_id:t,handleAction:s})))):n.default.createElement("div",{className:"FbPageActions"},n.default.createElement(l.default,{action_name:a[0],page_id:t,has_liked:u,has_followed:c,handleAction:s}))}a(24339),u.propTypes={},t.default=u},58833:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(85879)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.cover,a=e.openCoverPicture;return n.default.createElement(r.default,{cover:t,link_to:"/posts/1",openCoverPicture:a})}o.propTypes={},t.default=o},78790:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(16449)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.title,a=e.has_link,l=e.link_to;return n.default.createElement(r.default,{class_link:a?"font-500":"",has_link:a,link_to:l},t)}function i(e){var t=e.info_extra_1,a=e.info_extra_2;return n.default.createElement("div",{className:"FbPageInfoExtra text-secondary font-17px"},n.default.createElement(o,t)," · ",n.default.createElement(o,a))}a(24458),i.propTypes={},t.default=i},11836:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(67020)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.name;return n.default.createElement(r.default,{name:t})}o.propTypes={},t.default=o},22353:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(63629)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.picture,a=e.has_new_story,l=e.has_seen_story,o=e.handleActionPicture;return n.default.createElement(r.default,{link_to:a?"":"/posts/1",picture:t,has_new_story:a,has_seen_story:l,handleAction:o})}o.propTypes={},t.default=o},62252:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=f(n),l=a(55852),o=a(47206),i=f(a(23633)),u=f(a(94856)),c=f(a(19936)),s=f(a(43642)),_=f(a(45102)),d=f(a(33594));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}a(14111);var m=function(e){var t=e.page_id,a=void 0===t?0:t;return[{link_to:"/page/"+a+"/events",title:"Events"},{link_to:"/page/"+a+"/community",title:"Community"},{link_to:"/page/"+a+"/group",title:"Group"}]},v=function(e){var t=e.page_id,a=void 0===t?0:t;return[{link_to:"/page/"+a+"/home",title:"Home"},{link_to:"/page/"+a+"/about",title:"About"},{link_to:"/page/"+a+"/videos",title:"Videos"},{link_to:"/page/"+a+"/photos",title:"Photos"}].concat(p(l.IS_MOBILE?m({page_id:a}):[]))};t.default=function(e){var t=e.page_id,a=e.name,f=e.picture,h=e.action_main_arr,y=e.action_arr,g=e.has_liked,b=e.has_followed,P=e.handleAction,E=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({nav_arr:v({page_id:t}),nav_more_arr:l.IS_MOBILE?[]:m({page_id:t})}),2),k=E[0],w=(E[1],(0,o.useStickyOver)({}));return r.default.createElement(s.default,{has_scroll_over:!0,scroll_over_obj:w,left_main_elm:r.default.createElement("ul",{className:"FbPageNav_list flex-grow-1 display-flex list-none h-100per padding-top-3px"},k.nav_arr.map((function(e,t){return r.default.createElement("li",{key:t,className:"FbPageNav_item"},r.default.createElement(d.default,{link_to:e.link_to,title:e.title}))})),l.IS_MOBILE?null:r.default.createElement("li",{className:"FbPageNav_item"},r.default.createElement(_.default,{more_link_arr:k.nav_more_arr}))),left_sticky_elm:r.default.createElement("div",{className:"display-flex h-100per padding-y-2px"},r.default.createElement(c.default,{link_to:"/page/"+t+"/home",picture:f,name:a})),right_elm:l.IS_MOBILE?null:r.default.createElement("div",{className:"display-flex align-items-center h-100per"},[].concat(p(w.scroll_over?h:[]),p(y)).map((function(e,a){return r.default.createElement("div",{key:a,className:"margin-right-8px"},r.default.createElement(i.default,{action_name:e,page_id:t,has_liked:g,has_followed:b,handleAction:P}))})),r.default.createElement("div",null,r.default.createElement(u.default,{page_id:t,handleAction:P})))})}},33594:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(7077)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.link_to,a=e.title;return n.default.createElement(r.default,{title:a,link_to:t})}a(69026),o.propTypes={},t.default=o},45102:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(91834)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.color,a=e.bg_btn,l=e.more_link_arr,o=l.some((function(e){return location.pathname.startsWith(e.link_to)}));return n.default.createElement(r.default,{color:t,bg_btn:a,more_link_arr:l,is_active:o})}o.propTypes={},t.default=o},14538:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=d(r),o=a(93191),i=(d(a(45697)),a(37814)),u=a(75194),c=d(a(64575)),s=d(a(62252)),_=d(a(79090));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t,a,d=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.handle_API_FbPage_R)({page_id:f});case 2:t=e.sent,v((function(e){return n({},e,{page_obj:t,has_fetch:!0})}));case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var o=e[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(){return a.apply(this,arguments)}),f=(0,o.useParams)().id,p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({page_obj:(0,i.initial_fb_page)(),has_fetch:!1}),2),m=p[0],v=p[1],h=m.page_obj,y=m.has_fetch,g=h.name,b=h.picture,P=h.cover,E=h.has_new_story,k=h.has_seen_story,w=h.info_extra_1,A=h.info_extra_2,O=h.action_main_arr,x=h.action_arr,j=h.has_liked,M=h.has_followed;function I(){}return(0,r.useEffect)((function(){d()}),[f]),y?l.default.createElement("div",{key:f,className:"FbPage"},l.default.createElement("div",null,l.default.createElement(c.default,{page_id:f,name:g,picture:b,cover:P,has_new_story:E,has_seen_story:k,info_extra_1:w,info_extra_2:A,action_main_arr:O,action_arr:x,has_liked:j,has_followed:M,openCoverPicture:function(){},handleActionPicture:function(){},handleAction:I})),l.default.createElement("div",{className:"fb-profile-nav"},l.default.createElement("div",{className:"fb-profile-width-contain"},l.default.createElement(s.default,{page_id:f,name:g,picture:b,action_main_arr:O,action_arr:x,has_liked:j,has_followed:M,handleAction:I}))),l.default.createElement("div",{className:"padding-y-16px"},f>0?l.default.createElement(r.Suspense,{fallback:null},l.default.createElement(o.Switch,null,_.default.map((function(e,t){return l.default.createElement(o.Route,{key:t,path:e.path,render:function(t){return l.default.createElement(e.component,n({},t,{page_id:f}))}})})),l.default.createElement(o.Redirect,{to:"/page/"+f+"/home"}))):null)):null}f.propTypes={},t.default=f},79090:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=a(67294))&&n.__esModule?n:{default:n},l=r.default.lazy((function(){return Promise.all([a.e(2619),a.e(8740),a.e(1909),a.e(6272),a.e(7238),a.e(523)]).then(a.bind(a,25492))})),o=r.default.lazy((function(){return a.e(3624).then(a.bind(a,13624))})),i=r.default.lazy((function(){return a.e(7178).then(a.bind(a,47178))})),u=[{path:"/page/:id/home",component:l},{path:"/page/:id/about",component:o},{path:"/page/:id/videos",component:i},{path:"/page/:id/photos",component:i},{path:"/page/:id/events",component:i},{path:"/page/:id/community",component:i},{path:"/page/:id/group",component:i}];t.default=u},274:(e,t,a)=>{"use strict";a.r(t)},18616:(e,t,a)=>{"use strict";a.r(t)},24339:(e,t,a)=>{"use strict";a.r(t)},24458:(e,t,a)=>{"use strict";a.r(t)},14111:(e,t,a)=>{"use strict";a.r(t)},69026:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3676.js.map