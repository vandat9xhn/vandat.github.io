(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[117],{28308:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useMounted=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!0),2),t=e[0],r=e[1];return(0,n.useEffect)((function(){return function(){r(!1)}}),[]),t};var n=r(67294)},17892:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GetIdSlug=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";try{var r=(0,n.useParams)();return e?+r[t]:r[t]}catch(t){return e?parseInt(location.pathname.split("/").slice(-1)[0]):location.pathname.split("/").slice(-1)[0]}};var n=r(93191)},16982:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=c(n),i=c(r(45697)),l=c(r(35214)),u=c(r(93223));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.title_action,r=e.symbol_post,i=e.children,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!1),2),o=c[0],s=c[1],d=function(){s(!o)};return a.default.createElement(l.default,{makeDivHidden:function(){o&&d()}},a.default.createElement("div",{onClick:d,className:"Actions_contain position-rel"},a.default.createElement("div",{className:"Actions_symbol display-flex-center brs-50 hv-opacity "+(r?"Actions_symbol-post":""),title:"More actions"},t),o&&a.default.createElement("div",{className:"Actions_choices box-shadow-1 brs-5px"},a.default.createElement("div",{className:"Actions_choices_actions"},a.default.createElement("div",{className:"ActionsChoices_back display-none"},a.default.createElement(u.default,null)),i))))}r(74881),r(89495),o.propTypes={title_action:i.default.string,symbol_post:i.default.bool,children:i.default.element},o.defaultProps={symbol_post:!0,title_action:"..."},t.default=o},93223:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=u(r(45697)),i=u(r(57108)),l=u(r(37930));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.title;return n.default.createElement("div",{className:"ActionBack action-item",title:"Back"},n.default.createElement(i.default,{Icon:l.default,x:200,y:200},t))}r(95845),c.propTypes={title:a.default.string},c.defaultProps={title:"Back"},t.default=c},10117:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),i=p(a),l=(p(r(45697)),r(79427)),u=r(28308),c=r(17892),o=p(r(13425)),s=r(70361),d=r(46294),f=p(r(89231)),m=p(r(92859));function p(e){return e&&e.__esModule?e:{default:e}}function _(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,i){try{var l=t[a](i),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(u)}("next")}))}}function v(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function h(){var e,t,r=(e=_(regeneratorRuntime.mark((function e(){var t,r,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(n({},b,{is_fetching:!0},i)),e.next=3,(0,s.handle_API_Friend_L)(h,g.length);case 3:t=e.sent,r=t.data,a=t.count,P&&E({friend_arr:x?[].concat(v(g),v(r)):r,count_friend:x?w:a,has_fetched:!0,is_fetching:!1});case 7:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)}),p=(t=_(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_Friend_D)(t,"DELETE");case 2:E(n({},b,{friend_arr:g.filter((function(e){return e.friend.id!=t}))}));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)}),h=(0,c.GetIdSlug)(),y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({friend_arr:[].concat(v(d.initial_friend)),count_friend:0,has_fetched:!1,is_fetching:!1}),2),b=y[0],E=y[1],g=b.friend_arr,w=b.count_friend,x=b.has_fetched,N=b.is_fetching,P=(0,u.useMounted)();return(0,a.useEffect)((function(){r({has_fetched:!1,friend_arr:[],count_friend:0})}),[]),i.default.createElement("div",{className:"ProfileFriend"},i.default.createElement("div",{className:"ProfileFriend_contain brs-8px padding-8px bg-primary margin-auto "+(x?"":"display-none")},i.default.createElement("h2",{className:" margin-0"},"Friends"),i.default.createElement("div",{className:"display-flex flex-wrap space-between"},g.map((function(e,t){return i.default.createElement("div",{key:"ProfileFriend_"+t,className:"ProfileFriend_item col-12 col-sm-6 col-lg-4"},i.default.createElement(m.default,{ix:t,user:e.friend,handelDeleteFriend:p}))})))),i.default.createElement(o.default,{title:"See more friends",is_show_more:w>g.length,is_fetching:N&&x,handleShowMore:function(){r()}}),i.default.createElement("div",{className:x?"display-none":""},i.default.createElement(f.default,null)))}r(17088),h.propTypes={},t.default=h},92859:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),i=m(a),l=m(r(45697)),u=r(15130),c=r(97943),o=m(r(57108)),s=m(r(39475)),d=m(r(16982));r(84369);var f=r(93191);function m(e){return e&&e.__esModule?e:{default:e}}function p(e){var t=(0,a.useContext)(u.context_api),r=t.openMessage,n=t.openScreenConfirm,l=e.user,c=e.handelDeleteFriend;return i.default.createElement("div",{className:"FriendEdit position-rel box-shadow-1 brs-5px bg-primary"},i.default.createElement("div",{className:"FriendEdit_left"},i.default.createElement("div",null,i.default.createElement(f.Link,{to:"/profile/"+l.id,className:"normal-text hv-cl-blue label-field"},i.default.createElement("div",{className:"display-flex align-items-center"},i.default.createElement("div",null,i.default.createElement("img",{className:"brs-8px",src:l.picture,alt:"",width:"80",height:"80"})),i.default.createElement("div",{className:"FriendEdit_left_name"},l.first_name+" "+l.last_name))))),i.default.createElement("div",{className:"FriendEdit_right"},i.default.createElement(d.default,{title_action:"Friend",symbol_post:!1},i.default.createElement("div",{className:"FriendEdit_action brs-5px box-shadow-1"},i.default.createElement("div",{className:"FriendEdit_action_item",onClick:function(){r(l.id)}},i.default.createElement(o.default,{x:200,Icon:s.default},"Message")),i.default.createElement("div",{className:"FriendEdit_action_item",onClick:function(){n("Delete","Do you really want to delete this friend",(function(){return c(l.id)}))}},i.default.createElement(o.default,{Icon:s.default},"Unfriend"))))))}p.propTypes=n({},c.user_propTypes,{confirmDelete:l.default.func}),t.default=p},89231:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return n.default.createElement("div",{className:"margin-auto height-100vh ProfileFriend_contain bg-primary"})}a(r(45697)),r(73584),i.propTypes={},t.default=i},89495:(e,t,r)=>{"use strict";r.r(t)},74881:(e,t,r)=>{"use strict";r.r(t)},95845:(e,t,r)=>{"use strict";r.r(t)},17088:(e,t,r)=>{"use strict";r.r(t)},84369:(e,t,r)=>{"use strict";r.r(t)},73584:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=117.js.map