(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[45],{3742:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRouteLoaded=void 0;var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=r(67294);function l(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}t.useRouteLoaded=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pathname",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return location[e]},r=(0,a.useState)([]),u=n(r,2),o=u[0],i=u[1];return(0,a.useLayoutEffect)((function(){var r=t();!o.includes(location[e])&&i((function(e){return[].concat(l(e),[r])}))}),[location[e]]),[o,i]}},34980:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_UserAlbumVidPic_L=t.API_UserVidPic_L=t.API_UserProfile_RU=void 0;var n,a=r(50918),l=(n=r(87421))&&n.__esModule?n:{default:n},u=r(36323),o=r(17332);t.API_UserProfile_RU=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,a.API_FakeReal)(u.default_user_r.find((function(t){return t.id==e}))||u.default_user_r[2],(function(){return(0,l.default)({url:"/user/ru-profile/"+e+"/",method:t,data:r})}))},t.API_UserVidPic_L=function(e){return(0,a.API_FakeReal)(Array(9).fill(o.default_post_arr[0].vid_pics[0]),(function(){return(0,l.default)({url:"/user/vid-pic-l/",method:"GET",params:e})}),e)},t.API_UserAlbumVidPic_L=function(e){return(0,a.API_FakeReal)(Array(4).fill(o.default_album_vid_pic_arr[0]),(function(){return(0,l.default)({url:"/user/album-vid-pic-l/",method:"GET",params:e})}),e)}},42488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=u(n),l=u(r(45697));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.route_arr,r=e.part_location,l=e.route_loaded_arr,u=e.fallback;return a.default.createElement(n.Suspense,{fallback:u},t.map((function(e,t){return a.default.createElement("div",{key:"RouteLoaded_"+t,className:location[r]==e[r]?"":"display-none"},l.includes(e[r])&&a.default.createElement(e.component,e.props||{}))})))}o.propTypes={route_arr:l.default.array,part_location:l.default.string,route_loaded_arr:l.default.array,fallback:l.default.element},o.defaultProps={part_location:"pathname",fallback:a.default.createElement(n.Fragment,null)},t.default=o},46294:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_profile={id:0,picture:"",cover_picture:"",first_name:"",last_name:"",nick_name:"",story:"",university:"",hobby:"",from:"",live_now:"",permission_add_friend:0,user_related:"c_user",is_block_message:0},t.initial_friend=[{friend:{id:0,first_name:"",last_name:"",picture:""}}]},7157:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},l=r(12471),u=r(83655);function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var i=a.default.lazy((function(){return Promise.all([r.e(9844),r.e(6272),r.e(4122),r.e(5629)]).then(r.bind(r,94596))})),s=a.default.lazy((function(){return r.e(1189).then(r.bind(r,1189))})),c=a.default.lazy((function(){return r.e(117).then(r.bind(r,10117))})),d=a.default.lazy((function(){return r.e(8780).then(r.bind(r,38780))}));t.ProfileRoutes=[{component:i,search:"",props:{}}].concat(o(l.about_search_arr.map((function(e){return{component:s,search:e,props:{}}}))),o(u.photos_search_arr.map((function(e){return{component:d,search:e,props:{}}}))),[{component:c,search:"?sk=friend",props:{}}])},40673:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return n.default.createElement("div",{className:"ProfileSkeleton margin-auto height-100vh bg-primary"})}a(r(45697)),r(352),l.propTypes={},t.default=l},70361:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_ProfileUser_R=t.handle_API_AlbumVidPic_L=t.handle_API_VidPic_L=t.handle_API_Friend_L=t.handle_API_ProfilePost_L=void 0;var n,a,l,u,o,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=(t.handle_API_ProfilePost_L=(n=_(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.API_Post_L)(i({},f.params_profile_post_l,{c_count:t}));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),t.handle_API_Friend_L=(a=_(regeneratorRuntime.mark((function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.API_Friends_LC)("GET",{profile_user:t,page:1,size:10,c_count:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),t.handle_API_VidPic_L=(l=_(regeneratorRuntime.mark((function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.API_UserVidPic_L)({profile_user:t,page:1,size:10,c_count:n,album:a});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),t.handle_API_AlbumVidPic_L=(u=_(regeneratorRuntime.mark((function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.API_UserAlbumVidPic_L)({profile_user:t,page:1,size:10,c_count:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)}),t.handle_API_ProfileUser_R=(o=_(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.API_UserProfile_RU)(t,"GET");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)}),r(79427)),c=r(81042),d=r(34980),f=r(6470);function _(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,l){try{var u=t[a](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(o)}("next")}))}}},6470:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.params_profile_post_l={page:1,size:5,is_profile:1}},20045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=r(67294),u=m(l),o=(m(r(45697)),r(3742)),i=m(r(42488)),s=r(46294),c=r(7157),d=m(r(40673)),f=r(70361),_=m(r(77879)),p=m(r(95319));function m(e){return e&&e.__esModule?e:{default:e}}r(740),t.default=function(e){var t,r,m=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(n({},P,{is_fetching:!0})),e.next=3,(0,f.handle_API_ProfileUser_R)(v);case 3:t=e.sent,c.ProfileRoutes.find((function(e){return""==e.search})).props={last_name:t.last_name},b({profile:t,is_fetching:!1}),document.title=t.first_name+" "+t.last_name;case 7:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,l){try{var u=e[a](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(o)}("next")}))},function(){return r.apply(this,arguments)}),v=e.match.params.id,h=(0,l.useState)({profile:n({},s.initial_profile),is_fetching:!1}),y=a(h,2),P=y[0],b=y[1],E=P.profile,g=(P.is_fetching,(0,o.useRouteLoaded)("search",R)),k=a(g,2),A=k[0],M=k[1];function R(){return c.ProfileRoutes.map((function(e){return e.search})).includes(location.search)?location.search:(location.search="","")}return(0,l.useEffect)((function(){window.scroll(0,0),M([R()]),m()}),[v]),u.default.createElement("div",{className:"Profile"},u.default.createElement("div",{className:"Profile_info"},u.default.createElement(_.default,{profile:E,openCoverPicture:function(){console.log(v)},openPicture:function(){console.log(v)}})),u.default.createElement("div",{className:"Profile_more"},u.default.createElement(p.default,null)),u.default.createElement(i.default,{route_arr:c.ProfileRoutes,part_location:"search",route_loaded_arr:A,fallback:u.default.createElement(d.default,null)}))}},77879:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=f(n),l=f(r(45697)),u=r(15130),o=r(17892),i=f(r(29875)),s=f(r(20658)),c=f(r(27248)),d=f(r(18069));function f(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=(0,o.GetIdSlug)(),r=(0,n.useContext)(u.context_api).user,l=e.profile,f=e.openCoverPicture,_=e.openPicture,p=l.picture,m=l.cover_picture,v=l.first_name,h=l.last_name,y=l.nick_name,P=l.story,b=l.user_related,E=l.permission_add_friend,g=l.is_block_message;return a.default.createElement("div",{className:"ProfileInfo"},a.default.createElement("div",{className:"ProfileInfo_pics"},a.default.createElement(d.default,{cover_picture:m,picture:p,openCoverPicture:f,openPicture:_})),v?a.default.createElement("div",{className:"ProfileInfo_name-story"},a.default.createElement(c.default,{name:v+" "+h,nick_name:y,story:P,is_user:r.id==t,handleChangeStory:function(){console.log(t)}})):a.default.createElement(i.default,{num:3}),v&&a.default.createElement(s.default,{id:t,is_user:r.id==t,user_related:b,permission_add_friend:E,is_block_message:g,handleAddStory:function(){console.log(t)},handleAcceptRequest:function(){console.log(t)},handleCancelRequest:function(){console.log(t)},handleAddFriend:function(){console.log(t)},handleFollowFriend:function(){console.log(t)}}))}r(33768),_.propTypes={profile:l.default.object,openCoverPicture:l.default.func,openPicture:l.default.func},t.default=_},20658:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=i(n),l=(i(r(45697)),r(15130)),u=i(r(48454)),o=r(9449);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.id,r=e.is_user,i=e.user_related,s=e.permission_add_friend,c=e.is_block_message,d=e.handleAddStory,f=e.handleAcceptRequest,_=e.handleCancelRequest,p=e.handleAddFriend,m=e.handleFollowFriend,v=(0,n.useContext)(l.context_api).openMessage;return a.default.createElement("div",{className:"ProfileInfo_is-friend"},a.default.createElement("div",{className:"brs-5px label-field"},a.default.createElement("div",{className:"display-flex justify-content-center align-items-center"},a.default.createElement("div",{className:"ProfileInfo__add-friend display-flex justify-content-center align-items-center brs-5px",title:"add friend"},(0,o.handleInfoActions)(i,s,d,f,_,p,m)),!c&&!r&&a.default.createElement("div",{className:"ProfileInfo__message",title:"message",onClick:function(){v(t)}},a.default.createElement(u.default,{x:200,y:200})))))}s.propTypes={},t.default=s},9449:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleInfoActions=function(e,t,r,d,f,_,p){switch(e){case a.user_related_obj.c_user:return n.default.createElement(c.default,{handleAddStory:r});case a.user_related_obj.friend:return n.default.createElement(u.default,null);case a.user_related_obj.received_request:return n.default.createElement(i.default,{handleAcceptRequest:d,handleCancelRequest:f});case a.user_related_obj.send_request:return n.default.createElement(s.default,{handleCancelRequest:f});case a.user_related_obj.has_mutual_friend:return t<=1?n.default.createElement(o.default,{handleAddFriend:_}):n.default.createElement(l.default,{handleFollowFriend:p});case a.user_related_obj.no_mutual_friend:return 0==t?n.default.createElement(o.default,{handleAddFriend:_}):n.default.createElement(l.default,{handleFollowFriend:p});default:return n.default.createElement("div",null)}};var n=d(r(67294)),a=r(87774),l=d(r(56078)),u=d(r(17769)),o=d(r(46510)),i=d(r(21005)),s=d(r(983)),c=d(r(88614));function d(e){return e&&e.__esModule?e:{default:e}}},56078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.handleFollowFriend;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"FOLLOW +"))}a(r(45697)),l.propTypes={},t.default=l},17769:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return n.default.createElement("div",null,n.default.createElement("div",null,"Friend"))}a(r(45697)),l.propTypes={},t.default=l},46510:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),u(r(57108))),l=u(r(39475));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.handleAddFriend;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},n.default.createElement(a.default,{y:200,color:"#000000ad",Icon:l.default},"Add friend")))}o.propTypes={},t.default=o},21005:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.handleAcceptRequest,r=e.handleCancelRequest;return n.default.createElement("div",null,n.default.createElement("div",null,"Reply request"),n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"Accept"),n.default.createElement("div",{onClick:r},"Deny")))}a(r(45697)),l.propTypes={},t.default=l},983:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),u(r(57108))),l=u(r(39475));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.handleCancelRequest;return n.default.createElement("div",{onClick:t},n.default.createElement(a.default,{Icon:l.default,y:200},"Cancel request"))}o.propTypes={},t.default=o},88614:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.handleAddStory;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"Add story"))}a(r(45697)),l.propTypes={},t.default=l},18069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=r(93191);function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.cover_picture,r=e.picture,l=e.openCoverPicture,u=e.openPicture;return n.default.createElement("div",{className:"ProfileInfo_pics"},n.default.createElement("div",{className:"ProfileInfo_cover-pic"},n.default.createElement(a.Link,{to:"/posts/1"},n.default.createElement("img",{src:t,alt:"",onClick:l}))),n.default.createElement("div",{className:"ProfileInfo_div-pic"},n.default.createElement("div",{className:"ProfileInfo_profile-pic"},n.default.createElement(a.Link,{to:"/posts/1"},n.default.createElement("img",{src:r,alt:"",onClick:u})))))}l(r(45697)),u.propTypes={},t.default=u},27248:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.is_user,r=e.name,a=e.nick_name,l=e.story,u=e.handleChangeStory;return n.default.createElement("div",{className:"ProfileInfo_name-story"},n.default.createElement("div",{className:"ProfileInfo_name display-flex justify-content-center align-items-center"},n.default.createElement("div",{className:"display-flex"},n.default.createElement("div",null,r),a&&n.default.createElement("div",null," (",a,")"))),n.default.createElement("div",{className:"ProfileInfo_story text-align-center"},n.default.createElement("div",{onClick:t?u:void 0},l?n.default.createElement("div",null,l):n.default.createElement("div",null,t?"Add your story":""))))}a(r(45697)),l.propTypes={},t.default=l},5602:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.common_sk_obj=[{sk:"",title:"Posts"},{sk:"about_overview",title:"About"},{sk:"friend",title:"Friends"},{sk:"photos_all",title:"Photos"}]},95319:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=u(r(39012)),l=r(5602);function u(e){return e&&e.__esModule?e:{default:e}}r(45791),t.default=function(e){return n.default.createElement("div",{className:"ProfileMore box-shadow-1 bg-primary"},n.default.createElement("div",{className:"width-fit-content margin-auto"},n.default.createElement("ul",{className:"ProfileMore_list display-flex list-none"},l.common_sk_obj.map((function(e,t){return n.default.createElement("li",{key:"ProfileMore_sk"+t,className:"ProfileMore_item"},n.default.createElement(a.default,{sk:e.sk,title:e.title}))})))))}},39012:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),r(93191));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.sk,r=e.title;return n.default.createElement(a.NavLink,{to:location.pathname+(t?"?sk=":"")+t,className:"normal-text",activeClassName:location.search.startsWith("?sk="+t.split("_")[0])&&""!=t||""==location.search&&""==t?"nav-active":"",replace:!0},n.default.createElement("div",{className:"ProfileMoreItem nav-text nav-bottom"},r))}r(17858),u.propTypes={},t.default=u},12471:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.about_search_arr=t.AboutRoutes=t.AboutCommonRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},l=a.default.lazy((function(){return r.e(3290).then(r.bind(r,33290))})),u=a.default.lazy((function(){return r.e(6047).then(r.bind(r,76047))})),o=a.default.lazy((function(){return r.e(1132).then(r.bind(r,40843))})),i=a.default.lazy((function(){return r.e(5194).then(r.bind(r,65194))})),s=a.default.lazy((function(){return r.e(2694).then(r.bind(r,52694))})),c=a.default.lazy((function(){return r.e(9149).then(r.bind(r,59149))})),d=a.default.lazy((function(){return r.e(7684).then(r.bind(r,97684))})),f=t.AboutCommonRoutes=[{component:l,search:"?sk=about_overview",props:{},title:"Overview"},{component:u,search:"?sk=about_place_lived",props:{},title:"Place lived"},{component:o,search:"?sk=about_work_edu",props:{},title:"Work and education"},{component:i,search:"?sk=about_contact",props:{},title:"Contact and basis info"},{component:s,search:"?sk=about_family_relationships",props:{},title:"Family and relationships"},{component:c,search:"?sk=about_details",props:{},title:"Details about you"},{component:d,search:"?sk=about_life_events",props:{},title:"Life events"}];t.AboutRoutes=f.map((function(e){return{component:e.component,search:e.search,props:e.props}})),t.about_search_arr=f.map((function(e){return e.search}))},83655:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.photos_search_arr=t.PhotosRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},l=a.default.lazy((function(){return r.e(5147).then(r.bind(r,35147))})),u=a.default.lazy((function(){return r.e(2426).then(r.bind(r,82426))})),o=t.PhotosRoutes=[{component:u,search:"?sk=photos_album",props:{}},{component:l,search:"?sk=photos_all",props:{}}];t.photos_search_arr=o.map((function(e){return e.search}))},352:(e,t,r)=>{"use strict";r.r(t)},740:(e,t,r)=>{"use strict";r.r(t)},33768:(e,t,r)=>{"use strict";r.r(t)},45791:(e,t,r)=>{"use strict";r.r(t)},17858:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=45.js.map