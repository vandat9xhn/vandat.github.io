(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[1544],{8951:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_group_action_other_obj={your_content:{name:"your_content",title:"Your content",info:""},share:{name:"share",title:"Share",info:""},pin:{name:"pin",title:"Pin group",info:""},report:{name:"report",title:"Report group",info:""}},t.data_fb_group_action_joined_obj={notice:{name:"notice",title:"Mange notifications",info:""},unfollow:{name:"unfollow",title:"Unfollow group",info:""},leave:{name:"leave",title:"Leave group",info:""}}},96721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_joined_action_arr=void 0;var n=r(8951);t.default_fb_group_joined_action_arr=function(){return[[n.data_fb_group_action_joined_obj.notice,n.data_fb_group_action_joined_obj.unfollow],[n.data_fb_group_action_joined_obj.leave]]}},76488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_other_action_arr=void 0;var n=r(8951);t.default_fb_group_other_action_arr=function(){return[[n.data_fb_group_action_other_obj.your_content,n.data_fb_group_action_other_obj.pin,n.data_fb_group_action_other_obj.share,n.data_fb_group_action_other_obj.report]]}},48833:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_preview_arr=t.default_fb_group_preview_obj=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(39727),o=r(69565),u=r(58822),i=r(7605),c=r(61426),l=t.default_fb_group_preview_obj=function(){var e=(0,a.getRandomBool)(),t=(0,i.getDefaultArr)((function(){return(0,u.getRandomUser)().user}),0,2),r=(0,o.getRandomNumber)(t.length,t.length+4);return n({},(0,u.getRandomGroup)().group_obj,{joined:e,privacy:(0,c.getRandomFromArr)(["Public","Private"]),member_count:1e3*(0,o.getRandomNumber)(1,20),friend_arr:t,friend_count:r})};t.default_fb_group_preview_arr=function(){return(0,i.getDefaultArr)(l,16,16)}},59764:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_search_group_arr=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(39727),o=r(70745),u=r(69565),i=r(58822),c=r(7605),l=r(61426);function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var d=function(){var e=(0,l.getRandomFromArr)(["joined","sent_request","not_joined"]);return n({},(0,i.getRandomGroup)().group_obj,{privacy:(0,l.getRandomFromArr)(["Public","Private"]),member_count:1e3*(0,u.getRandomNumber)(1,20),info_arr:[(0,l.getRandomFromArr)([{title:(0,o.getRandomContent)().slice(0,100),icon_name:""},{title:(0,u.getRandomNumber)(2,4)+" friends are members",icon_name:"friends"}])].concat(s((0,a.getRandomBool)()?[]:[(0,l.getRandomFromArr)([{title:(0,u.getRandomNumber)(2,4)+" unread posts",icon_name:""},{title:(0,u.getRandomNumber)(2,10)+" posts a day",icon_name:""},{title:(0,u.getRandomNumber)(2,10)+" posts a week",icon_name:""}])])),action_case:e})};t.default_fb_search_group_arr=function(){return(0,c.getDefaultArr)(d,16,16)}},9022:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupActions_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_GroupActions_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.group_id,a=void 0===n?0:n,i=t.type,c=void 0===i?"":i,l=t.params,s=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_GroupActions_L)(o({group_model:a,type:c},s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(e){return a.apply(this,arguments)}),r(26386))},30213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupPreview_R=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_GroupPreview_R=(n=regeneratorRuntime.mark((function e(t){var r,n=t.group_id,a=void 0===n?0:n,i=t.params,c=void 0===i?{}:i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_GroupPreview_R)(o({group_model:a},c));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(e){return a.apply(this,arguments)}),r(47581))},92356:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbSearchGroup_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_FbSearchGroup_L=(n=regeneratorRuntime.mark((function e(t){var r,n,a=t.c_count,d=void 0===a?0:a,_=t.params,f=void 0===_?{}:_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_FbSearchGroup_L)(o({c_count:d,size:16,page:1},f));case 2:return r=e.sent,(n=r.data.data).map((function(e){var t=["joined","not_joined","sent_request"].indexOf(e.action_case);return e.action_case_obj=[{name:e.action_case,title:"Visit group",Icon:u.default.createElement(l.default,{stroke:"currentColor",size_icon:"12px"})},{name:e.action_case,title:"Join group",Icon:u.default.createElement(s.default,{stroke:"currentColor",size_icon:"10px"})},{name:e.action_case,title:"Pending",Icon:u.default.createElement("div",{className:"display-flex-center rotate-180 line-16px"},u.default.createElement(c.default,{x:200,y:200,size_icon:"14px"}))}][t],e})),e.abrupt("return",o({},r.data,{data:n}));case 6:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(e){return a.apply(this,arguments)}),d(r(67294))),i=r(76821),c=d(r(37930)),l=d(r(46301)),s=d(r(24012));function d(e){return e&&e.__esModule?e:{default:e}}},4814:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.useObserverMoreSearch=function(e){var t=e.handle_API_L,r=(0,a.useRef)(null),u=(0,o.useObserverShowMore)({handle_API_L:t});return(0,a.useEffect)((function(){u.refreshData_API()}),[location.search]),(0,a.useEffect)((function(){u.observerShowMore({fake_elm_end:r.current,rootMargin:"0px 0px 250px 0px",way_scroll:"to_bottom",margin:250})}),[]),n({ref_fake_elm:r},u)};var a=r(67294),o=r(2804)},3791:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:r,strokeLinejoin:"round"},n.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:r,strokeWidth:"15"}),n.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),n.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}u.propTypes={size_icon:a.default.string,stroke:a.default.string},u.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=u},68986:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:"none",strokeWidth:"5",stroke:r},n.default.createElement("circle",{cx:"100",cy:"100",r:"85",strokeWidth:"10"}),n.default.createElement("line",{x1:"99.3965",y1:"16.1017",x2:"99.3965",y2:"183.898",stroke:"black"}),n.default.createElement("line",{x1:"10",y1:"97.5",x2:"184.569",y2:"97.5"}),n.default.createElement("path",{d:"M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z"}),n.default.createElement("path",{d:"M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957"}))}u.propTypes={size_icon:a.default.string,stroke:a.default.string},u.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=u},58911:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_group_preview=function(){return{id:0,picture:"",name:"",joined:!1,privacy:"",member_count:0,friend_arr:[],friend_count:0}}},26386:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupActions_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(76488),i=r(96721);t.API_GroupActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)("other"==e.type?(0,u.default_fb_group_other_action_arr)():"joined"==e.type?(0,i.default_fb_group_joined_action_arr)():null,(function(){return(0,a.default)({url:"api/facebook/group-other-action-l",method:"GET",params:e})}))}},47581:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupPreview_R=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(48833);t.API_GroupPreview_R=function(e){return(0,o.API_FakeReal)((0,u.default_fb_group_preview_obj)(),(function(){return(0,a.default)({url:"api/facebook/fb-group-preview-r/",method:"GET",params:e})}),e)}},76821:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbSearchGroup_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(59764);t.API_FbSearchGroup_L=function(e){return(0,o.API_FakeReal)((0,u.default_fb_search_group_arr)(),(function(){return(0,a.default)({url:"api/facebook/fb-search-group-l/",method:"GET",params:e})}),e)}},48901:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(55852)),o=u(r(42167));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.group_id,r=e.title_action;return a.IS_MOBILE?r:n.default.createElement(o.default,{group_id:t,title_action:r})}i.propTypes={},t.default=i},42167:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=h(a),u=(h(r(45697)),r(36289)),i=r(58911),c=r(30213),l=r(35155),s=h(r(66963)),d=h(r(68986)),_=h(r(3791)),f=h(r(62755)),p=h(r(13355)),m=h(r(26651)),v=h(r(67965));function h(e){return e&&e.__esModule?e:{default:e}}function g(e){var t=e.item,r=e.group_id,n=e.handleAction;return o.default.createElement(v.default,{action_name:t.action_name,group_id:r,handleAction:n})}r(90949);var b=function(e){var t=e.group_id,r=e.class_action_contain,n=e.handleAction;return o.default.createElement(m.default,{group_id:t,is_at_body:!0,class_action_contain:r,handleAction:n})};function y(e){var t,r,m=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(n({},P,{is_fetching:!0})),e.next=3,(0,c.handle_API_GroupPreview_R)({group_id:v});case 3:if(t=e.sent,C){e.next=6;break}return e.abrupt("return");case 6:j(n({},P,{group:t,is_fetching:!1,has_fetched:!0}));case 7:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(){return r.apply(this,arguments)}),v=e.group_id,h=e.title_action,y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({group:(0,i.initial_group_preview)(),is_fetching:!1,has_fetched:!1}),2),P=y[0],j=y[1],w=P.group,O=P.is_fetching,E=P.has_fetched,A=w.id,x=w.name,M=w.picture,k=w.joined,I=w.privacy,R=w.member_count,N=w.friend_count,G=(w.friend_arr,[{action_name:k?"joined":"join"}]),C=(0,l.useMounted)(),L=[{component:p.default,can_show:!0,props:{Icon:"PUBLIC"==I.toUpperCase()?o.default.createElement(d.default,null):o.default.createElement(_.default,null),info:"",title:I+" Group"}},{component:p.default,can_show:!0,props:{Icon:o.default.createElement(s.default,null),info:"",title:(N?N+" friend"+(N>=2?"s":"")+" · ":"")+(0,u.UnitNumber)(R)+" member"+(R>=2?"s":"")}}];return o.default.createElement(f.default,{title_action:h,class_action_contain:"ActionPreviewGroupPc",id:A,name:x,picture:M,link_to:"/group/"+A,is_fetching:O,has_fetched:E,preview_arr:L,action_case_arr:G,case_props:{group_id:A},other_case_props:{group_id:A},getData_API:m,handleAction:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(e)},ActionsCaseComponent:g,ActionsOtherComponent:b})}y.propTypes={},t.default=y},26651:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(9022)),o=u(r(63313));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t,r,u=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.handle_API_GroupActions_L)({group_id:i,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(){return r.apply(this,arguments)}),i=e.group_id,c=e.class_action_contain,l=e.is_at_body,s=e.handleAction;return n.default.createElement(o.default,{is_at_body:l,class_action_contain:c,handle_API_L:u,handleAction:s})}i.propTypes={},t.default=i},67965:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),u(r(65102))),o=u(r(88530));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.action_name,r=e.group_id,u=e.use_icon,i=e.use_title,c=e.handleAction;return"join"==t?n.default.createElement(a.default,{use_icon:u,use_title:i,handleAction:c}):"joined"==t?n.default.createElement(o.default,{use_icon:u,use_title:i,group_id:r}):null}i.propTypes={},t.default=i},65102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=i(r(67294)),o=(i(r(45697)),i(r(79368))),u=i(r(44257));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.className,r=e.title,n=e.Icon,o=e.handleAction;return a.default.createElement(u.default,{className:"BtnGroupJoin "+t,title:r,Icon:n,handleClick:function(){o("join")}})}c.propTypes=n({},u.default.propTypes),c.defaultProps={className:"bg-ccc",title:"Join Group",Icon:a.default.createElement(o.default,null)},t.default=c},63313:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(10153)));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.class_action_contain,r=e.is_at_body,o=e.handle_API_L,u=e.handleAction;return n.default.createElement(a.default,{class_main:"BtnGroupOther",class_btn:"BtnGroupOther_btn",class_action_contain:t,is_at_body:r,handle_API_L:o,handleAction:u})}u.propTypes={},t.default=u},88530:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=i(r(67294)),o=(i(r(45697)),r(93191)),u=i(r(44257));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.group_id;return a.default.createElement(o.Link,{to:"/group/"+t},a.default.createElement(u.default,{className:"bg-fb-active",title:"Visit"}))}c.propTypes=n({},u.default.propTypes),t.default=c},59203:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),r(93191));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){e.id;var t=e.picture,r=e.name,u=e.PicComponent,i=e.NameComponent,c=e.link_to,l=e.action_img_props,s=e.action_name_props,d=e.info_1,_=e.info_2,f=e.Icon;return a.default.createElement("div",{className:"FsSearchPageUserPageGroup fb-search-page-right-item-contain padding-16px bg-primary brs-8px box-shadow-1"},a.default.createElement("div",{className:"display-flex"},a.default.createElement("div",{className:"margin-right-12px"},a.default.createElement(u,n({title_action:a.default.createElement(o.Link,{className:"display-block brs-50 overflow-hidden hv-after-shadow-05",to:c},a.default.createElement("img",{className:"FsSearchPageUserPageGroup_pic brs-50 border-blur object-fit-cover",src:t,alt:"",width:"60",height:"60"}))},l))),a.default.createElement("div",{className:"flex-grow-1 flex-between-center"},a.default.createElement("div",null,a.default.createElement("div",{className:"display-flex"},a.default.createElement(i,n({title_action:a.default.createElement(o.Link,{className:"color-inherit",to:c},a.default.createElement("div",{className:"font-600"},r))},s))),d?a.default.createElement("div",{className:"font-13px text-secondary"},d):null,_?a.default.createElement("div",{className:"margin-top-10px text-secondary"},_):null),f?a.default.createElement("div",{className:"flex-shrink-0"},f):null)))}r(87890),i.propTypes={},t.default=i},48920:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=s(r(67294)),o=(s(r(45697)),r(87898)),u=r(92356),i=r(4814),c=s(r(29448)),l=s(r(67803));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=(0,i.useObserverMoreSearch)({handle_API_L:function(e){return(0,u.handle_API_FbSearchGroup_L)({c_count:e,params:n({},(0,o.ParseLocationSearch)())})}}),r=t.ref_fake_elm,s=t.data_state,d=t.data_count,_=s.data_arr,f=s.has_fetched;return a.default.createElement("div",{className:"FbSearchPageGroups"},a.default.createElement(c.default,{right_elm:a.default.createElement("div",{className:"fb-search-page-right-contain display-flex-center"},a.default.createElement("div",{className:"w-680px"},a.default.createElement("div",null,_.map((function(e,t){return a.default.createElement("div",{key:e.id,className:"fb-search-page-right-item"},a.default.createElement(l.default,{group_obj:e}))}))),a.default.createElement("div",{ref:r,className:"padding-1px"}))),no_result:f&&0==d.current,title:"Groups"}))}r(73409),d.propTypes={},t.default=d},67803:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),a=(c(r(45697)),r(36289)),o=c(r(79368)),u=c(r(48901)),i=c(r(59203));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.group_obj,r=t.id,c=t.name,l=t.picture,s=t.privacy,d=t.member_count,_=t.action_case,f=t.action_case_obj,p=t.info_arr;return n.default.createElement("div",{className:"FbSearchPageGroupItem"},n.default.createElement(i.default,{id:r,picture:l,name:c,PicComponent:u.default,NameComponent:u.default,link_to:"/group/"+r,action_img_props:{group_id:r},action_name_props:{group_id:r},info_1:s+" group · "+(0,a.UnitNumber)(d)+" member"+(d>=2?"s":""),info_2:n.default.createElement("div",null,p.map((function(e,t){return n.default.createElement("div",{key:t},e.title)}))),Icon:n.default.createElement("div",{className:"FbSearchPageGroupItem_btn_icon pos-rel btn-icon-36px cursor-pointer hv-bg-hv "+("not_joined"==_?"bg-fb":"bg-fb-active text-blue"),title:f.title,onClick:function(){console.log(_)}},n.default.createElement(o.default,{size_icon:"24px"}),n.default.createElement("div",{className:"pos-abs right-0 bottom-0 padding-right-2px padding-bottom-2px"},f.Icon))}))}r(48567),l.propTypes={},t.default=l},90949:(e,t,r)=>{"use strict";r.r(t)},87890:(e,t,r)=>{"use strict";r.r(t)},73409:(e,t,r)=>{"use strict";r.r(t)},48567:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=1544.js.map