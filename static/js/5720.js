(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[5720],{97245:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePageNotHeader=function(){(0,r.useLayoutEffect)((function(){var e=n.body_elm,t=+(e.dataset.pageNotHeader||0)+1;return e.dataset.pageNotHeader=t,function(){e.dataset.pageNotHeader-=1,0==e.dataset.pageNotHeader&&e.removeAttribute("data-page-not-header")}}),[])};var r=a(67294),n=a(96627)},71304:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.class_icon,a=e.x,n=e.y,l=e.size_icon,u=e.stroke,i=e.stroke_width;return r.default.createElement("svg",{className:"IconGroupNoticeDot "+t,viewBox:a+" "+n+" 200 200",width:l,height:l,stroke:u,strokeWidth:i,fill:"none",strokeLinecap:"round"},r.default.createElement("path",{d:"M134.5 37.2973C99.5991 37.2973 70.7568 37.2973 35.8559 37.2973C25.5241 40.009 21.1075 42.8734 20 54.5945V161.261C20.5717 175.47 23.66 180.043 35.8559 180H141.081C153.784 178.122 157.696 174.134 158.378 161.261V59.5"}),r.default.createElement("circle",{fill:u,cx:"155",cy:"40",r:"15"}))}u.propTypes={class_icon:n.default.string,x:n.default.number,y:n.default.number,size_icon:n.default.string,stroke:n.default.string,stroke_width:n.default.number},u.defaultProps={class_icon:"",x:0,y:0,size_icon:"1rem",stroke:"currentColor",stroke_width:15},t.default=u},80585:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.Icon,a=e.children,n=e.handleClick;return r.default.createElement("div",{className:"FbSettingsItemLayout padding-8px brs-6px cursor-pointer hv-bg-fb",onClick:n},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",{className:"flex-shrink-0 btn-icon-36px bg-ccc"},t),r.default.createElement("div",{className:"flex-grow-1 flex-basis-1rem margin-left-12px"},a)))}n(a(45697)),a(43122),l.propTypes={},t.default=l},94017:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a(67294)),n=s(a(45697)),l=a(52538),u=s(a(71304)),i=s(a(6060)),d=s(a(80585));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.callbackSwitch,a=(0,l.useBool)(!0),n=a.is_true,s=a.setIsTrue;return r.default.createElement("div",{className:"FbSettingsItemSwitchNotice"},r.default.createElement(d.default,{Icon:r.default.createElement(u.default,null),handleClick:function(){s((function(e){return t(e),!e}))}},r.default.createElement(i.default,{switch_on:n},r.default.createElement("div",{className:"group-settings-item-title"},"Show notification dots"))))}o.propTypes={callbackSwitch:n.default.func},o.defaultProps={callbackSwitch:function(){}},t.default=o},1900:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.title,a=e.info;return r.default.createElement("div",{className:"FbSettingsTitle"},r.default.createElement("h2",{className:"margin-bottom-5px font-17px font-600 line-20px"},t),r.default.createElement("div",{className:"font-13px text-secondary line-16px"},a))}n(a(45697)),l.propTypes={},t.default=l},44280:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=i(a(67294)),l=i(a(45697)),u=i(a(36582));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.nav_arr;return n.default.createElement("div",{className:"LeftBarNav"},t.map((function(e,t){return n.default.createElement("div",{key:t},n.default.createElement(u.default,{item:e}))})))}d.propTypes={nav_arr:l.default.arrayOf(l.default.shape(r({},u.default.propTypes)))},t.default=d},36582:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=a(93191),l=u(a(45697));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.item;return r.default.createElement(n.NavLink,{className:"LeftBarNavItem flex-between-center padding-x-8px padding-y-8px brs-6px line-20px text-333 font-500 hv-bg-fb",activeClassName:"LeftBarNavItem-active bg-fb",to:t.link_to},r.default.createElement("div",{className:"LeftBarNavItem_left display-flex align-items-center"},r.default.createElement("div",{className:"LeftBarNavItem_icon btn-icon-36px bg-ccc margin-right-12px"},t.Icon),r.default.createElement("div",{className:"LeftBarNavItem_title"},t.title)),t.right?r.default.createElement("div",{className:"LeftBarNavItem_right"},t.right):null)}a(50616),i.propTypes={item:l.default.shape({link_to:l.default.string,Icon:l.default.object,title:l.default.string,right:l.default.oneOfType([l.default.string,l.default.element])})},t.default=i},6915:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=d(r),l=(d(a(45697)),a(52538)),u=d(a(67238)),i=d(a(35214));function d(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.title,a=e.setting_elm,d=(0,r.useRef)(null),s=(0,l.useBool)(),o=s.is_true,c=s.setIsTrue,f=s.toggleBool;return n.default.createElement("div",{className:"LeftBarTitleSettings pos-rel padding-top-10px padding-bottom-6px"},n.default.createElement("div",{className:"pos-rel padding-x-16px"},n.default.createElement("div",{className:"flex-between-center"},n.default.createElement("h1",{className:"LeftBarTitleSettings_title font-24px"},t),n.default.createElement("div",{ref:d,className:"btn-icon-36px cursor-pointer "+(o?"bg-fb-active nav-active":"bg-ccc hv-bg-hv"),onClick:f},n.default.createElement(u.default,{size_icon:"23px"}))),o?n.default.createElement(i.default,{refs_target:[d],makeDivHidden:function(){o&&c(!1)}},n.default.createElement("div",{className:"pos-abs left-0 top-100per z-index-1 padding-x-8px"},a)):null))}a(60858),s.propTypes={},t.default=s},19496:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=(i(a(45697)),a(55852)),l=i(a(84273)),u=i(a(20233));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.ComponentLeftHead,a=e.ComponentLeftContain,i=e.ComponentRight;return n.IS_MOBILE?r.default.createElement(u.default,{ComponentLeftHead:t,ComponentLeftContain:a}):r.default.createElement(l.default,{ComponentLeftHead:t,ComponentLeftContain:a,ComponentRight:i})}a(8117),d.propTypes={},t.default=d},20233:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ComponentLeftHead,a=e.ComponentLeftContain;return r.default.createElement("div",{className:"FriendsLayOutMb bg-primary"},r.default.createElement("div",{className:"pos-sticky top-header bg-primary z-index-1"},t),r.default.createElement("div",null,a))}n(a(45697)),a(97245),a(91724),l.propTypes={},t.default=l},84273:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ComponentLeftHead,a=e.ComponentLeftContain,n=e.ComponentRight;return r.default.createElement("div",{className:"FriendsLayOutPc"},r.default.createElement("div",{className:"FriendsLayOutPc_row display-flex"},r.default.createElement("div",{className:"FriendsLayOutPc_left flex-shrink-0 h-100per bg-primary"},r.default.createElement("div",{className:"display-flex flex-col wh-100"},r.default.createElement("div",null,t),r.default.createElement("div",{className:"flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"},a))),r.default.createElement("div",{className:"FriendsLayOutPc_right flex-grow-1"},n)))}n(a(45697)),a(11543),l.propTypes={},t.default=l},56483:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),u(a(6915))),l=u(a(77143));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return r.default.createElement("div",{className:"FriendsLeftHeadHome"},r.default.createElement(n.default,{title:"Friends",setting_elm:r.default.createElement(l.default,null)}))}a(33183),i.propTypes={},t.default=i},77143:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),u(a(1900))),l=u(a(8095));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return r.default.createElement("div",{className:"FriendsSettings padding-top-16px padding-bottom-8px padding-x-8px brs-8px bg-primary box-shadow-fb"},r.default.createElement("div",{className:"padding-x-8px padding-bottom-12px border-bottom-blur"},r.default.createElement(n.default,{title:"Notification settings",info:"You can manage how you are notified about friends updates."})),r.default.createElement("div",{className:"padding-top-5px"},r.default.createElement(l.default,null)))}i.propTypes={},t.default=i},8095:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(94017)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.callbackSwitch;return r.default.createElement(n.default,{callbackSwitch:t})}u.propTypes={},t.default=u},15720:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=(o(a(45697)),a(55852)),l=a(97245),u=o(a(19496)),i=o(a(56483)),d=o(a(65970)),s=o(a(6850));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return n.IS_MOBILE&&(0,l.usePageNotHeader)(),n.IS_MOBILE?r.default.createElement(s.default,null):r.default.createElement(u.default,{ComponentLeftHead:r.default.createElement(i.default,null),ComponentLeftContain:r.default.createElement(d.default,null),ComponentRight:r.default.createElement(s.default,null)})}c.propTypes={},t.default=c},6850:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a(67294)),n=(s(a(45697)),s(a(17092)));a(98130);var l=a(69565),u=a(39727),i=a(7605),d=a(58822);function s(e){return e&&e.__esModule?e:{default:e}}var o,c=(o=[],["January","February","March","April","May","June","July","August","September","October","November","December"].forEach((function(e){var t=(0,u.getRandomBool)()?(0,l.getRandomNumber)(0,8):0;t>0&&o.push({month_name:e,friend_count:t,friend_arr:0==t?[]:(0,i.getDefaultArr)((function(){return(0,d.getRandomUser)().user}),t,t)})})),o);function f(e){return r.default.createElement("div",{className:"FriendsBirthRight padding-20px"},c.map((function(e,t){return r.default.createElement("div",{key:e.month_name,className:"FriendsBirthRight_item margin-bottom-15px margin-auto"},r.default.createElement(n.default,{month_name:e.month_name,friend_arr:e.friend_arr,friend_count:e.friend_count}))})))}f.propTypes={},t.default=f},17092:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),a(93191));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.month_name,a=e.friend_arr,l=e.friend_count;return r.default.createElement("div",{className:"FriendsBirthMonth padding-16px brs-8px bg-primary box-shadow-1"},r.default.createElement("div",{className:""},r.default.createElement("div",{className:"FriendsBirthMonth_title margin-y-5px line-16px font-17px font-600"},t),r.default.createElement("div",{className:"margin-y-5px line-20px"},a.slice(0,3==l?3:2).map((function(e,t){return r.default.createElement("span",{key:e.id},t>=1?", ":"",r.default.createElement(n.Link,{className:"color-inherit font-500 hv-underline",to:"/profile/"+e.id},e.first_name," ",e.last_name))})),r.default.createElement("span",null,l>=4?" and "+(l-2)+" others":""))),r.default.createElement("div",{className:"FriendsBirthMonth_foot display-flex flex-wrap margin-top-15px"},a.map((function(e,t){return r.default.createElement(n.Link,{key:e.id,className:"margin-5px",to:"/profile/"+e.id},r.default.createElement("img",{className:"FriendsBirthMonth_pic brs-50 object-fit-cover",src:e.picture,alt:"",width:"60",height:"60"}))}))))}a(95157),u.propTypes={},t.default=u},65970:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=(o(a(45697)),a(55852)),l=o(a(4299)),u=o(a(66963)),i=o(a(37930)),d=o(a(31604)),s=o(a(44280));function o(e){return e&&e.__esModule?e:{default:e}}a(46553);var c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(n.IS_MOBILE?[]:[{Icon:r.default.createElement(u.default,null),title:"Home",link_to:"",right:!1}]),[{Icon:r.default.createElement(d.default,{is_request:!0}),title:"Friend requests",link_to:"requests",has_arrow:!0},{Icon:r.default.createElement(d.default,{is_plus:!0}),title:"Suggestions",link_to:"suggestions",has_arrow:!0},{Icon:r.default.createElement(d.default,{is_menu:!0}),title:"All Friends",link_to:"all",has_arrow:!0},{Icon:r.default.createElement(l.default,null),title:"Birthdays",link_to:"birthdays",has_arrow:!1},{Icon:r.default.createElement(d.default,{is_menu:!0}),title:"Custom lists",link_to:"friend_list",has_arrow:!0}]).map((function(e){return{Icon:e.Icon,title:e.title,link_to:"/friends/"+e.link_to,right:e.has_arrow?r.default.createElement(i.default,{x:200,size_icon:"18px"}):""}}));function f(e){return r.default.createElement("div",{className:"FriendsHomeLeft padding-left-8px"},r.default.createElement(s.default,{nav_arr:c}))}f.propTypes={},t.default=f},43122:(e,t,a)=>{"use strict";a.r(t)},50616:(e,t,a)=>{"use strict";a.r(t)},60858:(e,t,a)=>{"use strict";a.r(t)},8117:(e,t,a)=>{"use strict";a.r(t)},91724:(e,t,a)=>{"use strict";a.r(t)},11543:(e,t,a)=>{"use strict";a.r(t)},33183:(e,t,a)=>{"use strict";a.r(t)},98130:(e,t,a)=>{"use strict";a.r(t)},95157:(e,t,a)=>{"use strict";a.r(t)},46553:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=5720.js.map