(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[2304],{23598:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_search_user_arr=void 0;var a=r(74271),n=r(39727),l=r(69565),u=r(8047),c=r(32601),o=r(7605),s=r(61426),i=function(){var e=(0,s.getRandomFromArr)([a.default_action_user_case_obj.add_friend,a.default_action_user_case_obj.reply_request,a.default_action_user_case_obj.follow,a.default_action_user_case_obj.chat]);return{id:(0,l.getRandomId)(),first_name:(0,c.getRandomName)(),last_name:(0,c.getRandomName)(),picture:(0,u.getRandomVidPic)(),action_case:e,info_1:(0,s.getRandomFromArr)(["Friend",(0,l.getRandomNumber)(100,200)+" followers","Trường THPT Cao Bá Quát"]),info_2_arr:(0,s.getRandomFromArr)([["Lives in Hanoi, Vietnam","Hanoi University"],["Lives in Nam Dinh"],["Havrd University"]])}};t.default_fb_search_user_arr=function(){return(0,o.getDefaultArr)(i,(0,n.getRandomBool)()?10:0,10)}},13:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbSearchUser_L=void 0;var a,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=(t.handle_API_FbSearchUser_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.c_count,n=void 0===a?0:a,c=t.search,o=void 0===c?"":c,s=t.params,i=void 0===s?{}:s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_FbSearchUser_L)(l({c_count:n,search:o,size:10,page:1},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),c=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(c).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(c)}("next")}))},function(e){return n.apply(this,arguments)}),r(71236))},4814:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.useObserverMoreSearch=function(e){var t=e.handle_API_L,r=(0,n.useRef)(null),u=(0,l.useObserverShowMore)({handle_API_L:t});return(0,n.useEffect)((function(){u.refreshData_API()}),[location.search]),(0,n.useEffect)((function(){u.observerShowMore({fake_elm_end:r.current,rootMargin:"0px 0px 250px 0px",way_scroll:"to_bottom",margin:250})}),[]),a({ref_fake_elm:r},u)};var n=r(67294),l=r(2804)},71236:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbSearchUser_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},l=r(50918),u=r(23598);t.API_FbSearchUser_L=function(e){return(0,l.API_FakeReal)((0,u.default_fb_search_user_arr)(),(function(){return(0,n.default)({url:"api/facebook/fb-search-user-l/",method:"GET",params:e})}),e,!0)}},73011:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(75238)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.id,r=e.picture,l=e.name,u=e.info_1,c=e.info_2,o=e.Icon;return a.default.createElement("div",{className:"FsSearchPageUserLayout fb-search-page-right-item-contain padding-16px bg-primary brs-8px box-shadow-1"},a.default.createElement("div",{className:"display-flex"},a.default.createElement("div",{className:"margin-right-12px"},a.default.createElement(n.default,{user_id:t,title_action:a.default.createElement("img",{className:"FsSearchPageUserLayout_pic brs-50 object-fit-cover",src:r,alt:"",width:"60",height:"60"})})),a.default.createElement("div",{className:"flex-grow-1 flex-between-center"},a.default.createElement("div",null,a.default.createElement("div",{className:"display-flex"},a.default.createElement(n.default,{user_id:t,title_action:a.default.createElement("div",{className:"font-600"},l)})),u?a.default.createElement("div",{className:"font-13px text-secondary"},u):null,c?a.default.createElement("div",{className:"margin-top-10px text-secondary"},c):null),o?a.default.createElement("div",{className:"flex-shrink-0"},o):null)))}r(50189),u.propTypes={},t.default=u},72732:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r(67294)),n=(s(r(45697)),r(87898)),l=r(13),u=r(4814),c=s(r(91285)),o=s(r(29448));function s(e){return e&&e.__esModule?e:{default:e}}function i(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=(0,u.useObserverMoreSearch)({handle_API_L:function(e){return(0,l.handle_API_FbSearchUser_L)({c_count:e,params:(0,n.ParseLocationSearch)()})}}),r=t.ref_fake_elm,s=t.data_state,i=t.data_count,d=s.data_arr,f=s.has_fetched;return a.default.createElement("div",{className:"FbSearchPagePeople"},a.default.createElement(o.default,{right_elm:a.default.createElement("div",{className:"fb-search-page-right-contain display-flex-center"},a.default.createElement("div",{className:"FbSearchPagePeople_list w-680px"},d.map((function(e,t){return a.default.createElement("div",{key:t,className:"fb-search-page-right-item"},a.default.createElement(c.default,{profile:e}))}))),a.default.createElement("div",{ref:r,className:"padding-1px"})),no_result:f&&0==i.current,title:"People"}))}r(69498),i.propTypes={},t.default=i},91285:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),u(r(40808))),l=u(r(73011));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.profile,r=t.id,u=t.first_name,c=t.last_name,o=t.picture,s=t.info_1,i=t.info_2_arr,d=t.action_case;return a.default.createElement("div",{className:"FbSearchPagePeopleItem"},a.default.createElement(l.default,{id:r,picture:o,name:u+" "+c,info_1:s,info_2:a.default.createElement("div",null,i.map((function(e,t){return a.default.createElement("div",{key:t},e)}))),Icon:a.default.createElement(n.default,{action_case:d,user_id:r,use_title:!1,handleAction:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];console.log(t)}})}))}r(20794),c.propTypes={},t.default=c},50189:(e,t,r)=>{"use strict";r.r(t)},69498:(e,t,r)=>{"use strict";r.r(t)},20794:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=2304.js.map