(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3179],{23495:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.useFriendsRequest=function(e){var t=e.rootMargin,a=e.margin,d=(0,n.useFriendsList)({friend_type_api:"request",key_request:"accepted",rootMargin:t,margin:a}),i=d.ref_root,s=d.ref_fake_elm,u=d.data_state,c=d.setDataState;return{ref_root:i,ref_fake_elm:s,data_state:u,confirmFriendRequest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;c((function(t){var a=[].concat(l(t.data_arr));return a[e].accepted=!0,r({},t,{data_arr:a})}))},deleteFriendRequest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;c((function(t){var a=[].concat(l(t.data_arr));return new_request_arr.splice(e,1),r({},t,{data_arr:a})}))}}};var n=a(9221);function l(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}},31604:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.size_icon,a=e.x,n=e.y,l=e.stroke,d=e.stroke_width,i=e.fill,s=e.is_plus,u=e.is_request,c=e.is_menu;return r.default.createElement("svg",{className:"IconFriend",viewBox:a+" "+n+" 200 200",width:t,height:t,stroke:l,fill:i,strokeLinecap:"round",strokeWidth:d},r.default.createElement("circle",{cx:"100",cy:"50",r:"35"}),r.default.createElement("path",{d:"M15,185 Q15,100 100,100 Q185,100 185,185 Z"}),s?r.default.createElement("g",{className:"IconFriend_plus",stroke:"currentColor"},r.default.createElement("line",{x1:"160",y1:"20",x2:"160",y2:"80"}),r.default.createElement("line",{x1:"120",y1:"50",x2:"180",y2:"50"})):u?r.default.createElement("g",{className:"IconFriend_request",stroke:"currentColor"},r.default.createElement("line",{x1:"120",y1:"35",x2:"175",y2:"35"}),r.default.createElement("line",{x1:"175",y1:"35",x2:"160",y2:"20"}),r.default.createElement("line",{x1:"175",y1:"35",x2:"160",y2:"50"})):c?r.default.createElement("g",{className:"IconFriend_all",stroke:"currentColor"},r.default.createElement("line",{x1:"120",y1:"20",x2:"180",y2:"20"}),r.default.createElement("line",{x1:"120",y1:"35",x2:"180",y2:"35"}),r.default.createElement("line",{x1:"120",y1:"50",x2:"180",y2:"50"})):null)}d.propTypes={x:n.default.number,y:n.default.number,size_icon:n.default.string,stroke:n.default.string,stroke_width:n.default.number,fill:n.default.string,is_plus:n.default.bool,is_request:n.default.bool,is_menu:n.default.bool},d.defaultProps={x:0,y:0,size_icon:"1rem",stroke:"currentColor",stroke_width:5,fill:"none",is_plus:!1,is_request:!1,is_menu:!1},t.default=d},67238:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.size_icon,a=e.fill,n=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:a,strokeWidth:"10",stroke:n},r.default.createElement("path",{d:"M145.216 99.5058C145.216 124.079 125.48 143.924 101.225 143.924C76.9699 143.924 57.2334\r 124.079 57.2334 99.5058C57.2334 74.9331 76.9699 55.0872 101.225 55.0872C125.48 55.0872 145.216\r 74.9331 145.216 99.5058Z"}),r.default.createElement("path",{d:"M59.0922 44.157L55.6628 23.4012L79.6686 15L91.9164 29.8256H110.043L124.251 15L144.827\r 23.4012V44.157L157.565 58.9826L177.161 56.5116L185 77.2674L171.282 90.6105V110.378L185\r 121.25L177.161 144.477H157.565L142.378 158.314L144.827 177.587L124.251 185L110.043\r 170.669H91.9164L79.6686 185L57.1326 177.587L59.0922 158.314L46.8444 144.477L24.7983\r 146.453L15 125.203L31.6571 110.378V93.5756L15 77.2674L24.7983 56.5116L42.9251\r 58.9826L59.092244.157Z"}),r.default.createElement("circle",{cx:"100",cy:"100",r:"35",fill:"none"}))}d.propTypes={fill:n.default.string,size_icon:n.default.string,stroke:n.default.string},d.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)"},t.default=d},15114:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=u(a(45697)),l=a(93191),d=u(a(64458)),i=u(a(31917)),s=u(a(79761));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.profile,a=e.link_to,n=e.has_first_btn,u=e.first_btn_title,c=e.first_btn_class,o=e.first_btn_disabled,f=e.handleFirstBtn,_=e.has_second_btn,m=e.second_btn_title,p=e.second_btn_class,v=e.second_btn_disabled,b=e.handleSecondBtn,E=t.id,y=t.picture,g=t.first_name,x=t.last_name,h=t.mutual_friend_arr,k=t.mutual_friend_count;return r.default.createElement("div",{className:"AddFriendAdd pos-rel padding-bottom-10px brs-8px bg-primary box-shadow-1 overflow-hidden"},r.default.createElement("div",{className:"pos-rel padding-top-100per"},r.default.createElement(l.Link,{to:a},r.default.createElement("img",{className:"pos-abs-0 wh-100 object-fit-cover",src:y,alt:""}))),r.default.createElement("div",{className:"AddFriendAdd_name display-flex padding-x-10px padding-y-6px line-16px"},r.default.createElement(d.default,{user_id:E,title_action:r.default.createElement(l.Link,{to:a,className:"color-inherit font-500"},g," ",x)})),r.default.createElement("div",{className:"AddFriendAdd_mutual padding-y-6px padding-x-10px text-secondary "},k?r.default.createElement(i.default,{mutual_friend_arr:h,mutual_friend_count:k}):null),r.default.createElement("div",{className:"AddFriendAdd_btn"},n?r.default.createElement(s.default,{className:c,title:u,disabled:o,handleClick:f}):null),r.default.createElement("div",{className:"AddFriendAdd_btn"},_?r.default.createElement(s.default,{className:p,title:m,disabled:v,handleClick:b}):null))}a(99414),c.propTypes={id:n.default.number,pic:n.default.string,name:n.default.string},t.default=c},68988:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(15114)));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.profile,a=e.accepted,l=e.link_to,d=e.confirmFriend,i=e.deleteFriend;return r.default.createElement(n.default,{profile:t,link_to:l,has_first_btn:!a,first_btn_title:"Confirm",first_btn_class:"bg-blue text-white",first_btn_disabled:a,handleFirstBtn:d,has_second_btn:!0,second_btn_title:a?"Request accepted":"Delete",second_btn_class:"bg-ccc "+(a?"text-smoke cursor-not-allowed":""),second_btn_disabled:a,handleSecondBtn:function(){!a&&i()}})}d.propTypes={},t.default=d},33373:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(15114)));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.profile,a=e.sent,l=e.link_to,d=e.addFriend,i=e.removeFriend;return r.default.createElement(n.default,{profile:t,link_to:l,has_first_btn:!a,first_btn_title:"Add Friend",first_btn_class:"AddFriendSuggest_first_btn bg-fb-active text-blue",handleFirstBtn:d,has_second_btn:!0,second_btn_title:a?"Cancel":"Remove",second_btn_class:"bg-ccc",handleSecondBtn:i})}a(20519),d.propTypes={},t.default=d},56483:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(67238)));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){return r.default.createElement("div",{className:"FriendsLeftHeadHome flex-between-center padding-x-16px padding-y-12px line-25px"},r.default.createElement("h1",{className:"FriendsLeftHeadHome_title font-24px"},"Friends"),r.default.createElement("div",{className:"btn-icon-36px bg-ccc cursor-pointer hv-bg-hv"},r.default.createElement(n.default,{size_icon:"20px"})))}a(33183),d.propTypes={},t.default=d},49582:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=u(r),l=(u(a(45697)),u(a(19496))),d=u(a(56483)),i=u(a(43334)),s=u(a(65970));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(0,r.useEffect)((function(){document.title="Friends"}),[]),n.default.createElement("div",{className:"FriendsHome"},n.default.createElement(l.default,{ComponentLeftHead:n.default.createElement(d.default,null),ComponentLeftContain:n.default.createElement(s.default,null),ComponentRight:n.default.createElement(i.default,null)}))}a(14534),c.propTypes={},t.default=c},65970:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=(c(a(45697)),a(93191)),l=a(55852),d=c(a(4299)),i=c(a(66963)),s=c(a(37930)),u=c(a(31604));function c(e){return e&&e.__esModule?e:{default:e}}a(46553);var o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(l.IS_MOBILE?[]:[{Icon:r.default.createElement(i.default,null),title:"Home",link_to:"",has_arrow:!1}]),[{Icon:r.default.createElement(u.default,{is_request:!0}),title:"Friend requests",link_to:"requests",has_arrow:!0},{Icon:r.default.createElement(u.default,{is_plus:!0}),title:"Suggestions",link_to:"suggestions",has_arrow:!0},{Icon:r.default.createElement(u.default,{is_menu:!0}),title:"All Friends",link_to:"all",has_arrow:!0},{Icon:r.default.createElement(d.default,null),title:"Birthdays",link_to:"birthdays",has_arrow:!1},{Icon:r.default.createElement(u.default,{is_menu:!0}),title:"Custom lists",link_to:"friend_list",has_arrow:!0}]);function f(e){return r.default.createElement("div",{className:"FriendsHomeLeft padding-left-8px"},o.map((function(e,t){return r.default.createElement(n.NavLink,{key:t,className:"FriendsHomeLeft_item flex-between-center padding-x-8px padding-y-10px brs-6px color-inherit font-17px font-500 hv-bg-fb",activeClassName:"FriendsHomeLeft_item-active bg-fb-active",to:"/friends/"+e.link_to,exact:!0},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",{className:"FriendsHomeLeft_item_icon btn-icon-36px bg-ccc"},e.Icon),r.default.createElement("div",{className:"margin-left-12px"},e.title)),r.default.createElement("div",{className:"text-third"},e.has_arrow?r.default.createElement(s.default,{x:200,size_icon:"18px"}):null))})))}f.propTypes={},t.default=f},43334:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(a(67294)),n=(d(a(45697)),d(a(25453))),l=d(a(95923));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){return r.default.createElement("div",{className:"FriendHomeRight"},r.default.createElement("div",null,r.default.createElement(l.default,null)),r.default.createElement("div",null,r.default.createElement(n.default,null)))}a(64059),i.propTypes={},t.default=i},69683:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),a(93191));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.title,a=e.link_to_all,l=e.children;return r.default.createElement("div",{className:"FriendHomeFriendList padding-top-20px"},r.default.createElement("div",{className:"FriendHomeFriendList_head flex-between-center margin-bottom-15px"},r.default.createElement("h2",{className:"font-20px font-700"},t),r.default.createElement(n.Link,{className:"font-17px font-400",to:a},"See all")),r.default.createElement("div",null,r.default.createElement("div",null,l)))}d.propTypes={},t.default=d},95923:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=(i(a(45697)),a(78295),a(80941),i(a(68988))),l=i(a(69683)),d=a(23495);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=(0,d.useFriendsRequest)({rootMargin:"0px 0px 500px",margin:500}),a=t.data_state,i=t.confirmFriendRequest,s=t.deleteFriendRequest,u=a.data_arr;return u.length?r.default.createElement("div",{className:"FriendsHomeRequest"},r.default.createElement(l.default,{title:"Friend requests",link_to_all:"/friends/requests"},r.default.createElement("div",{className:"display-flex flex-wrap"},u.map((function(e,t){return r.default.createElement("div",{key:e.id,className:"friend-home-right-item"},r.default.createElement(n.default,{profile:e,accepted:e.accepted,link_to:{pathname:"/friends/requests",state:{profile_id:e.id}},confirmFriend:function(){return i(t)},deleteFriend:function(){return s(t)}}))}))))):null}s.propTypes={},t.default=s},25453:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=(i(a(45697)),a(89652)),l=i(a(33373)),d=i(a(69683));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=(0,n.useFriendsSuggest)({}),a=t.ref_fake_elm,i=t.data_state,s=t.addFriendRequest,u=t.removeFriendRequest,c=i.data_arr;return r.default.createElement("div",{className:"FriendsHomeSuggest "+(0==c.length?"display-none":"")},r.default.createElement(d.default,{title:"People you may know",link_to_all:"/friends/suggestions"},r.default.createElement("div",null,r.default.createElement("div",{className:"display-flex flex-wrap"},c.map((function(e,t){return r.default.createElement("div",{key:e.id,className:"friend-home-right-item"},r.default.createElement(l.default,{profile:e,sent:e.sent,link_to:{pathname:"/friends/suggestions",state:{profile_id:e.id}},addFriend:function(){return s(t)},removeFriend:function(){return u(t)}}))}))),r.default.createElement("div",{ref:a,className:"padding-1px"}))))}s.propTypes={},t.default=s},99414:(e,t,a)=>{"use strict";a.r(t)},20519:(e,t,a)=>{"use strict";a.r(t)},33183:(e,t,a)=>{"use strict";a.r(t)},14534:(e,t,a)=>{"use strict";a.r(t)},46553:(e,t,a)=>{"use strict";a.r(t)},64059:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3179.js.map