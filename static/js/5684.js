(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[5684],{83564:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_page_about_obj=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=f(a(67294)),u=f(a(79368)),l=a(39727),o=a(70745),i=a(69565),d=a(58822),c=a(7605),s=a(61426);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(){return(0,l.getRandomBool)()?r({},(0,d.getRandomUser)().user,{type:"user"}):r({},(0,d.getRandomPage)().page_obj,{type:"page"})};t.default_fb_group_page_about_obj=function(){var e=(0,i.getRandomNumber)(2,200),t=(0,c.getDefaultArr)(m,e<=7?0:1,e<=7?e:7),a=(0,c.getDefaultArr)(m,e<=7?0:1,e<=7?e:7);return{id:(0,i.getRandomId)(),description:(0,o.getRandomContent)(),privacy:(0,s.getRandomFromArr)(["Public","Private"]),visibility:(0,s.getRandomFromArr)(["Visible","Invisible"]),type_obj:{name:"general",title:"General",Icon:n.default.createElement(u.default,null)},member_count:e,created_time:new Date(2018,2).toString(),recommended_count:(0,i.getRandomNumber)(4,6),friend_arr:t,friend_name_str:"Nguyen and My are members.",admin_arr:a,admin_name_str:"Nam is admin. Phuong is moderate.",post_day_count:(0,i.getRandomNumber)(5,10),post_month_count:(0,i.getRandomNumber)(150,300),member_week_count:(0,i.getRandomNumber)(0,e-1)}}},89651:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbGroupAbout_R=void 0;var r,n,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=(t.handle_API_FbGroupAbout_R=(r=regeneratorRuntime.mark((function e(t){var a,r=t.group_id,n=void 0===r?0:r,o=t.params,i=void 0===o?{}:o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_FbGroupAbout_R)(u({group_model:n},i));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=r.apply(this,arguments);return new Promise((function(t,a){return function r(n,u){try{var l=e[n](u),o=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(o)}("next")}))},function(e){return n.apply(this,arguments)}),a(53025))},53025:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbGroupAbout_R=void 0;var r,n=(r=a(87421))&&r.__esModule?r:{default:r},u=a(50918),l=a(83564);t.API_FbGroupAbout_R=function(e){return(0,u.API_FakeReal)((0,l.default_fb_group_page_about_obj)(),(function(){return(0,n.default)({url:"api/facebook/fb-group-page-about-r/",method:"GET",params:e})}),e)}},8557:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),a(52538));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.description,a=e.handleReady,u=(0,n.useBool)(),l=u.is_true,o=u.toggleBool;return r.default.createElement("div",{className:"GPAboutDescription"},r.default.createElement("span",null,t.slice(0,l?void 0:100))," ",t.length<=100?null:r.default.createElement("span",{className:"font-500 cursor-pointer hv-underline",onClick:function(){a&&a(),o()}},"See ",l?"less":"more"))}l.propTypes={},t.default=l},42333:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.Icon,a=e.title,n=e.info;return r.default.createElement("div",{className:"GroupPageAboutPart"},r.default.createElement("div",{className:"display-flex align-items-start"},r.default.createElement("div",{className:"padding-x-6px padding-top-10px font-12px line-16px"},t),r.default.createElement("div",{className:"padding-6px"},r.default.createElement("div",{className:"font-17px font-500"},a),r.default.createElement("div",{className:"font-13px"},n))))}n(a(45697)),a(13747),u.propTypes={},t.default=u},50975:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=(o(a(45697)),o(a(68986))),u=o(a(3791)),l=o(a(42333));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.privacy,a="PUBLIC"==t.toUpperCase();return r.default.createElement("div",{className:"GPAboutPrivacy"},r.default.createElement(l.default,{Icon:a?r.default.createElement(n.default,null):r.default.createElement(u.default,null),title:t,info:a?"Anyone can see who's in the group and what they post.":"Only members can see who's in the group and what they post."}))}i.propTypes={},t.default=i},25855:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),a(93191));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.link_to;return r.default.createElement(n.Link,{className:"display-flex-center h-36px brs-6px bg-ccc color-inherit font-600 hv-bg-hv",to:t},"See All")}l.propTypes={},t.default=l},91270:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(82702))),u=l(a(42333));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.visibility,a="VISIBLE"==t.toUpperCase();return r.default.createElement("div",{className:"GPAboutVisibility"},r.default.createElement(u.default,{Icon:r.default.createElement(n.default,{close_eye:!a}),title:t,info:a?"Anyone can find this group.":"Only members can find this group."}))}o.propTypes={},t.default=o},17267:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),u=m(n),l=(m(a(45697)),a(64561)),o=a(89651);a(37225);var i=m(a(66338)),d=m(a(50950)),c=m(a(16620)),s=m(a(29667)),f=m(a(51215));function m(e){return e&&e.__esModule?e:{default:e}}function p(e){var t,a,m=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.handle_API_FbGroupAbout_R)({group_id:p});case 2:t=e.sent,v((function(e){return r({},e,{group_obj:t,has_fetched:!0})}));case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function r(n,u){try{var l=e[n](u),o=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(o)}("next")}))},function(){return a.apply(this,arguments)}),p=e.group_id,_=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,u=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw u}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({group_obj:(0,l.initial_group_page_about)(),has_fetched:!1}),2),b=_[0],v=_[1],g=b.group_obj,y=b.has_fetched,h=g.description,E=g.privacy,N=g.visibility,P=g.type_obj,A=g.member_count,j=g.created_time,x=g.recommended_count,G=g.friend_arr,M=g.friend_name_str,w=g.admin_arr,R=g.admin_name_str,O=g.post_day_count,k=g.post_month_count,I=g.member_week_count;return(0,n.useEffect)((function(){m()}),[]),y?u.default.createElement("div",{className:"GroupPageAbout margin-auto w-680px"},u.default.createElement("div",{className:"GroupPageAbout_part"},u.default.createElement(i.default,{description:h,privacy:E,visibility:N,type_obj:P,has_fetched:y})),u.default.createElement("div",{className:"GroupPageAbout_part"},u.default.createElement(d.default,{created_time:j})),u.default.createElement("div",{className:"GroupPageAbout_part"},u.default.createElement(c.default,{recommended_count:x})),u.default.createElement("div",{className:"GroupPageAbout_part"},u.default.createElement(s.default,{group_id:p,member_count:A,friend_arr:G,friend_name_str:M,admin_arr:w,admin_name_str:R})),u.default.createElement("div",null,u.default.createElement(f.default,{post_day_count:O,post_month_count:k,member_count:A,member_week_count:I,created_time:j}))):u.default.createElement("div",{className:"h-100vh"})}a(87546),p.propTypes={},t.default=p},51215:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),a(45915)),u=l(a(42333));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.post_day_count,a=e.post_month_count,l=e.member_count,o=e.member_week_count,i=e.created_time,d=(0,n.getTimeAndUnit)({c_time:i}),c=d.time,s=d.unit;return r.default.createElement("div",{className:"GPAbActivity gr-page-about-part"},r.default.createElement("h2",{className:"gr-page-about-title"},"Activity"),r.default.createElement("hr",{className:"gr-page-hr"}),r.default.createElement("div",null,r.default.createElement(u.default,{title:(t||"No")+" new post"+(1==t?"":"s")+" today",info:(a||"No")+" in the last month"})),r.default.createElement("div",null,r.default.createElement(u.default,{title:l+" total member"+(l>=2?"s":"")+" ",info:"+ "+o+" in the last week"})),r.default.createElement("div",null,r.default.createElement(u.default,{title:"Created on "+c+" "+s+(c>=2?"s":"")+" ago"})))}o.propTypes={},t.default=o},66338:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),u(a(75197)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.description,a=e.privacy,u=e.visibility,l=e.type_obj,o=e.has_fetched;return r.default.createElement("div",{className:"GPAboutGroup gr-page-about-part"},r.default.createElement("h2",{className:"gr-page-about-title"},"About this group"),r.default.createElement("hr",{className:"gr-page-hr"}),r.default.createElement("div",null,r.default.createElement(n.default,{description:t,privacy:a,visibility:u,type_obj:l,has_fetched:o})))}l.propTypes={},t.default=l},75197:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=(i(a(45697)),i(a(8557))),u=i(a(50975)),l=i(a(91270)),o=i(a(42333));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.description,a=e.privacy,i=e.visibility,d=e.type_obj,c=e.has_fetched,s=e.handleReady;return r.default.createElement("div",{className:c?"":"h-360px"},t?r.default.createElement("div",{className:"GPAbGroupContain_part"},r.default.createElement(n.default,{description:t,handleReady:s})):null,r.default.createElement("div",{className:"GPAbGroupContain_part"},r.default.createElement(u.default,{privacy:a})),r.default.createElement("div",{className:"GPAbGroupContain_part"},r.default.createElement(l.default,{visibility:i})),r.default.createElement("div",{className:"GPAbGroupContain_part"},r.default.createElement(o.default,{Icon:d.Icon,title:d.title})))}d.propTypes={},t.default=d},29667:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=(o(a(45697)),a(36289)),u=o(a(25855)),l=o(a(44383));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.group_id,a=e.member_count,o=e.friend_arr,i=e.friend_name_str,d=e.admin_arr,c=e.admin_name_str;return r.default.createElement("div",{className:"GPAbMembers gr-page-about-part"},r.default.createElement("h2",{className:"gr-page-about-title"},"Members · ",(0,n.UnitNumber)(a)),r.default.createElement("hr",{className:"gr-page-hr"}),r.default.createElement("div",null,r.default.createElement(l.default,{member_arr:o,member_name_str:i})),r.default.createElement("div",null,r.default.createElement(l.default,{member_arr:d,member_name_str:c})),r.default.createElement("div",null,r.default.createElement(u.default,{link_to:"/group/"+t+"/members"})))}i.propTypes={},t.default=i},44383:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=(o(a(45697)),a(93191)),u=o(a(75238)),l=o(a(78740));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.link_to,a=e.picture;return r.default.createElement(n.Link,{to:t},r.default.createElement("img",{className:"brs-50 object-fit-cover",src:a,alt:"",width:"32",height:"32"}))}function d(e){var t=e.member_arr,a=e.member_name_str;return r.default.createElement("div",{className:"GPAbMembersPics padding-bottom-16px"},r.default.createElement("div",{className:"padding-y-10px"},r.default.createElement("ul",{className:"display-flex list-none"},t.map((function(e,t){return r.default.createElement("li",{key:e.id,className:"margin-right-4px"},"user"==e.type?r.default.createElement(u.default,{user_id:e.id,title_action:r.default.createElement(i,{link_to:"/profile/"+e.id,picture:e.picture})}):r.default.createElement(l.default,{page_id:e.id,title_action:r.default.createElement(i,{link_to:"/page/"+e.id,picture:e.picture})}))})))),r.default.createElement("div",null,a))}d.propTypes={},t.default=d},16620:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),u(a(869)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.recommended_count,a=e.openRecommendedGroups;return r.default.createElement("div",{className:"GPAbRecommended gr-page-about-part"},r.default.createElement("h2",{className:"gr-page-about-title"},"Recommended by the admins · ",t),r.default.createElement("hr",{className:"gr-page-hr"}),r.default.createElement("div",{className:"font-13px"},r.default.createElement(n.default,{params_api:{}})),r.default.createElement("div",{className:"margin-top-10px"},r.default.createElement("button",{className:"display-flex-center w-100per h-36px btn btn-active brs-6px text-blue font-500 cursor-pointer hv-bg-s-through",type:"button",onClick:a},"See All Groups")))}a(17274),l.propTypes={},t.default=l},50950:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),u(a(42333)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.created_time,a=e.openGroupHistory;return r.default.createElement("div",{className:"GPAboutGroup gr-page-about-part"},r.default.createElement("h2",{className:"gr-page-about-title"},"Transparency"),r.default.createElement("hr",{className:"gr-page-hr"}),r.default.createElement("div",null,r.default.createElement(n.default,{Icon:null,title:"History",info:"Group created on "+t})),r.default.createElement("div",{className:"margin-top-10px"},r.default.createElement("button",{className:"display-flex-center w-100per h-36px btn btn-active brs-6px bg-ccc font-600 cursor-pointer hv-bg-hv",type:"button",onClick:a},"See All")))}l.propTypes={},t.default=l},13747:(e,t,a)=>{"use strict";a.r(t)},87546:(e,t,a)=>{"use strict";a.r(t)},37225:(e,t,a)=>{"use strict";a.r(t)},17274:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=5684.js.map