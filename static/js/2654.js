(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[2654],{30476:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_story_menu_obj=t.initial_story_obj=void 0;var o=r(86449);t.initial_story_obj=function(){return{user:(0,o.initial_user)(),list:[{id:0,vid_pic:"",created_time:"0",text:"",top_text:"",left_text:"",color_text_ix:0,scale_text:1}],count_new:0,count:0}},t.initial_story_menu_obj=function(){return{user:(0,o.initial_user)(),list:[{id:0,vid_pic:"",created_time:"0",text:"",top_text:"",left_text:"",color_text_ix:0,scale_text:1}],count_new:0,count:0,active_step:0,active_item_ix:0}}},62750:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(67294)),a=(n(r(45697)),n(r(44314)));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.heading,r=e.is_active_type,n=e.active_ix,l=e.story_menu_obj,s=e.handleChangeStory,u=l.has_fetched,c=l.story_arr;return o.default.createElement("div",null,o.default.createElement("h2",{className:"margin-0 font-20px padding-8px"},t),o.default.createElement("div",{className:u?"":"display-none"},o.default.createElement("ul",{className:"list-none"},c.map((function(e,t){return o.default.createElement("li",{key:""+e.user.id},o.default.createElement("div",{className:"padding-4px "+(r&&n==t?"bg-active-fb pointer-events-none":"hv-bg-blur cursor-pointer"),onClick:function(){return s(t)}},o.default.createElement(a.default,{user:e.user})))})))),u?null:o.default.createElement("div",{className:"StoryMenuPartPc_not_fetched"}))}r(22301),l.propTypes={},t.default=l},45811:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(67294)),a=(n(r(45697)),n(r(37930)));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.is_show,r=e.has_close,n=e.handleClose,l=e.handleToggle;return o.default.createElement("div",{className:"position-rel"},o.default.createElement("div",{className:"display-flex align-items-center"},r?o.default.createElement("div",{className:"StoryMenuPcAction_close"},o.default.createElement("div",{className:"StoryMenuPcAction_close-contain cursor-pointer",onClick:n,title:"Close stories"},o.default.createElement(a.default,{y:400}))):null,o.default.createElement("div",{className:"StoryMenuPcAction_toggle"},o.default.createElement("div",{className:"StoryMenuPcAction_toggle-contain display-flex-center cursor-pointer "+(t?"StoryMenuPcAction_toggle-contain-show":"StoryMenuPcAction_toggle-contain-hide"),onClick:l,title:t?"Hide menu":"Show menu"},o.default.createElement(a.default,{y:200,size_icon:"1rem"})))))}r(32554),l.propTypes={},t.default=l},32654:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(67294),n=d(a),l=d(r(45697)),s=r(30476),u=r(22387),c=d(r(37930)),i=d(r(23239)),_=d(r(52496));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function y(e){var t,r,l=(t=regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.handle_API_FeedStory_L)(0,t);case 2:r=e.sent,a=r.data,n=r.count,P((function(e){var r,l,s,u=e[t].story_arr;return o({},e,(r={},l=t,s={story_arr:[].concat(f(u),f(a)),count_story:n,has_fetched:!0},l in r?Object.defineProperty(r,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[l]=s,r))}));case 6:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function o(a,n){try{var l=e[a](n),s=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(s).then((function(e){o("next",e)}),(function(e){o("throw",e)}));t(s)}("next")}))},function(e){return r.apply(this,arguments)}),d=e.story_arr_followed,y=e.count_story_followed,h=e.has_fetched_followed,m=e.story_arr_yours,v=e.count_story_yours,p=e.has_fetched_yours,b=e.old_active_ix,g=e.old_story_type,w=e.has_close,x=e.closeScreen,S=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,a=!1,n=void 0;try{for(var l,s=e[Symbol.iterator]();!(o=(l=s.next()).done)&&(r.push(l.value),!t||r.length!==t);o=!0);}catch(e){a=!0,n=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw n}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({active_ix:b,story_type:g,is_show_menu:!0,followed:{story_arr:d||[(0,s.initial_story_menu_obj)()],count_story:y,has_fetched:h},yours:{story_arr:m||[(0,s.initial_story_menu_obj)()],count_story:v,has_fetched:p}}),2),E=S[0],P=S[1],M=E.active_ix,N=E.story_type,j=E.is_show_menu,C=E.followed,A=E.yours,k=E[N],O=k.story_arr,T=k.count_story,U=k.has_fetched;function H(e,t){e==M&&N==t||P(o({},E,{active_ix:e,story_type:t}))}function I(){w?x():history.back()}return(0,a.useEffect)((function(){!h&&l("followed"),!p&&l("yours")}),[]),n.default.createElement("div",{className:"StoryHomePc "+(w?"wh-100v":"StoryHomePc-has_head")},n.default.createElement("div",{className:"display-flex h-100per"},n.default.createElement("div",{className:"StoryHomePc_left position-rel "+(j?"StoryHomePc_left-show":"StoryHomePc_left-hide")},n.default.createElement(i.default,{story_type:N,active_ix:M,is_show_menu:j,has_close:w,story_followed_obj:C,story_your_obj:A,handleChangeUserStory:function(e){H(e,"followed")},handleChangeYourStory:function(e){H(e,"yours")},handleClose:I,handleToggleMenu:function(){P((function(e){return o({},e,{is_show_menu:!j})}))}})),n.default.createElement("div",{className:"flex-grow-1 position-rel"},U&&O.length>0?n.default.createElement(_.default,{count_story:T,story_arr:O,active_ix:M,story_type:N,handleNextStoryUser:function(){P(o({},E,{active_ix:M+1}))},handlePrevStoryUser:function(){P(o({},E,{active_ix:M-1}))}}):n.default.createElement("div",{className:"wh-100 bg-loader"}))),n.default.createElement("div",{className:"StoryHomePc_close display-none"},n.default.createElement("div",{className:"cursor-pointer",onClick:I},n.default.createElement(c.default,{y:400}))))}r(80951),y.propTypes={story_arr_followed:l.default.array,count_story_followed:l.default.number,has_fetched_followed:l.default.bool,story_arr_yours:l.default.array,count_story_yours:l.default.number,has_fetched_yours:l.default.bool,old_active_ix:l.default.number,old_story_type:l.default.string,has_close:l.default.bool,closeScreen:l.default.func},y.defaultProps={story_arr_followed:[],count_story_followed:0,has_fetched_followed:!1,story_arr_yours:[],count_story_yours:0,has_fetched_yours:!1,old_active_ix:0,old_story_type:"followed",has_close:!1},t.default=y},52496:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(67294)),a=(n(r(45697)),n(r(19113)));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.story_arr,r=e.count_story,n=e.active_ix,l=e.story_type,s=e.handleNextStoryUser,u=e.handlePrevStoryUser;return o.default.createElement("div",{className:"StoryItemPc h-100per bg-loader position-rel"},o.default.createElement(a.default,{story_arr:t,count_story:r,active_ix:n,story_type:l,handleNextStoryUser:s,handlePrevStoryUser:u,closeScreen:void 0}))}r(3225),l.propTypes={},t.default=l},23239:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(r(67294)),a=(s(r(45697)),s(r(62750))),n=s(r(45811)),l=s(r(82468));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.story_type,r=e.active_ix,s=e.is_show_menu,u=e.has_close,c=e.story_followed_obj,i=e.story_your_obj,_=e.handleChangeUserStory,d=e.handleChangeYourStory,f=e.handleClose,y=e.handleToggleMenu;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"StoryMenuPc_action "+(s?"StoryMenuPc_action-show":"StoryMenuPc_action-hide")},o.default.createElement(n.default,{is_show:s,has_close:u,handleClose:f,handleToggle:y})),o.default.createElement("div",{className:"StoryMenuPc h-100per padding-8px bg-primary "+(s?"StoryMenuPc_show":"StoryMenuPc_hide")},o.default.createElement("h1",{className:"StoryMenuPc_head font-22px label-field"},"Stories"),o.default.createElement("div",null,o.default.createElement(a.default,{heading:"Your stories",is_active_type:"yours"==t,active_ix:r,story_menu_obj:i,handleChangeStory:d}),o.default.createElement(l.default,null)),o.default.createElement("div",null,o.default.createElement(a.default,{heading:"All stories",is_active_type:"followed"==t,active_ix:r,story_menu_obj:c,handleChangeStory:_}))))}r(68277),u.propTypes={},t.default=u},22301:(e,t,r)=>{"use strict";r.r(t)},32554:(e,t,r)=>{"use strict";r.r(t)},80951:(e,t,r)=>{"use strict";r.r(t)},3225:(e,t,r)=>{"use strict";r.r(t)},68277:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=2654.js.map