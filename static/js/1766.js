(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[1766],{27720:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconsPermission=void 0;var r=a(n(67294)),l=a(n(39475)),i=a(n(3791)),o=a(n(68986)),c=a(n(67238));function a(e){return e&&e.__esModule?e:{default:e}}t.IconsPermission=[{Icon:r.default.createElement(o.default,null),title:"Public"},{Icon:r.default.createElement(l.default,{y:200}),title:"Friend"},{Icon:r.default.createElement(l.default,{x:400}),title:"Friend of friend"},{Icon:r.default.createElement(c.default,null),title:"Setting"},{Icon:r.default.createElement(i.default,null),title:"Private"}]},51353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseMoveXY=function(e){var t=e.handleMouseMove,n=void 0===t?function(){}:t,o=e.handleMouseEnd,c=void 0===o?function(){}:o,a=(0,r.useRef)(!1),u=(0,r.useRef)(0),s=(0,r.useRef)(0);function d(e){if(a.current){if(e.touches&&e.touches.length>1)return window.onmousemove=null,void(window.onmouseup=null);var t=(0,i.getClientXY)(e),r=t.client_x,l=t.client_y;n({old_client_x:u.current,old_client_y:s.current,new_client_x:r,new_client_y:l,client_x_change:r-u.current,client_y_change:l-s.current}),u.current=r,s.current=l}}function f(){a.current=!1,c(),l.IS_MOBILE?(window.ontouchmove=null,window.ontouchend=null):(window.onmousemove=null,window.onmouseup=null)}return{handleStart:function(e){e.stopPropagation(),a.current=!0;var t=(0,i.getClientXY)(e),n=t.client_x,r=t.client_y;u.current=n,s.current=r,l.IS_MOBILE?(window.ontouchmove=d,window.ontouchend=f):(window.onmousemove=d,window.onmouseup=f)}}};var r=n(67294),l=n(55852),i=n(81858)},3791:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),l=i(n(45697));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.size_icon,n=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:n,strokeLinejoin:"round"},r.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:"black",strokeWidth:"15"}),r.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),r.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}o.propTypes={size_icon:l.default.string,stroke:l.default.string},o.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=o},68986:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),l=i(n(45697));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.size_icon,n=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:"none",strokeWidth:"5",stroke:n},r.default.createElement("circle",{cx:"100",cy:"100",r:"85",strokeWidth:"10"}),r.default.createElement("line",{x1:"99.3965",y1:"16.1017",x2:"99.3965",y2:"183.898",stroke:"black"}),r.default.createElement("line",{x1:"10",y1:"97.5",x2:"184.569",y2:"97.5"}),r.default.createElement("path",{d:"M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z"}),r.default.createElement("path",{d:"M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957"}))}o.propTypes={size_icon:l.default.string,stroke:l.default.string},o.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=o},67238:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),l=i(n(45697));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.size_icon,n=e.fill,l=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:n,strokeWidth:"10",stroke:l},r.default.createElement("path",{d:"M145.216 99.5058C145.216 124.079 125.48 143.924 101.225 143.924C76.9699 143.924 57.2334\r 124.079 57.2334 99.5058C57.2334 74.9331 76.9699 55.0872 101.225 55.0872C125.48 55.0872 145.216\r 74.9331 145.216 99.5058Z"}),r.default.createElement("path",{d:"M59.0922 44.157L55.6628 23.4012L79.6686 15L91.9164 29.8256H110.043L124.251 15L144.827\r 23.4012V44.157L157.565 58.9826L177.161 56.5116L185 77.2674L171.282 90.6105V110.378L185\r 121.25L177.161 144.477H157.565L142.378 158.314L144.827 177.587L124.251 185L110.043\r 170.669H91.9164L79.6686 185L57.1326 177.587L59.0922 158.314L46.8444 144.477L24.7983\r 146.453L15 125.203L31.6571 110.378V93.5756L15 77.2674L24.7983 56.5116L42.9251\r 58.9826L59.092244.157Z"}),r.default.createElement("circle",{cx:"100",cy:"100",r:"35",fill:"none"}))}o.propTypes={fill:l.default.string,size_icon:l.default.string,stroke:l.default.string},o.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)"},t.default=o},81858:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return r.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var r=n(55852)},77992:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(67294)),l=c(n(45697)),i=n(30796),o=c(n(65635));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){e.closeScreen;var t=e.children,n=e.screen_center,l=e.waiting,c=e.use_body_hidden,a=e.use_scale,u=e.FetchingComponent;return(0,i.useMakeBodyHidden)({hidden_app:c}),r.default.createElement("div",{className:"ScreenBlur "+(n?"ScreenBlur_center display-flex-center":"")},r.default.createElement("div",{className:l?"width-0 height-0":"App_Form"},r.default.createElement("div",{className:"ScreenBlur_contain bg-primary brs-5px-md box-shadow-fb "+(l?"ScreenBlur_contain-waiting":"")+" "+(a?"ScreenBlur_contain-scale":"")+" "+(n?"":"ScreenBlur_contain-normal")},t)),r.default.createElement("div",{className:"ScreenBlur_waiting pos-fixed-100v "+(l?"":"display-none")},r.default.createElement(o.default,{FetchingComponent:u})))}n(16209),a.propTypes={closeScreen:l.default.func,children:l.default.element,use_body_hidden:l.default.bool,screen_center:l.default.bool,waiting:l.default.bool,use_scale:l.default.bool,FetchingComponent:l.default.func},a.defaultProps={use_body_hidden:!1,screen_center:!1,waiting:!1,use_scale:!1},t.default=a},14927:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.openScreenPermission=function(e){var t=e.openScreenFloor,n=void 0===t?function(){}:t,r=e.permission,l=void 0===r?0:r,i=e.handleChoosePermission;n({FloorComponent:m,permission:l,handleChoosePermission:void 0===i?function(){}:i})};var l=n(67294),i=f(l),o=f(n(45697)),c=n(27720),a=f(n(98513)),u=f(n(77992)),s=f(n(52122)),d=f(n(33468));function f(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=e.permission,n=e.closeScreen,o=e.handleChoosePermission,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,l=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){l=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(l)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)({active_permission:t}),2),m=f[0],_=f[1],v=m.active_permission;function p(e){_(r({},m,{active_permission:e}))}return i.default.createElement(u.default,{closeScreen:n,screen_center:!0},i.default.createElement("div",{className:"ScreenPermission"},i.default.createElement("div",null,i.default.createElement(a.default,{title:"Permission",closeScreenBlur:n})),i.default.createElement("div",{className:"ScreenBlur_body_contain scroll-thin"},c.IconsPermission.map((function(e,t){return i.default.createElement("div",{key:"ScreenPermission_"+t,className:"ScreenPermission_item"},i.default.createElement(s.default,{ix:t,is_active:v==t,icon_obj:e,choosePermission:p}))}))),i.default.createElement("div",null,i.default.createElement(d.default,{disabled:t==v,handleConfirm:function(){n(),t!=v&&o(v)},closeScreenBlur:n}))))}n(15934),m.propTypes={permission:o.default.number,closeScreen:o.default.func,handleChoosePermission:o.default.func},m.defaultProps={permission:0},t.default=m},52122:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),l=o(n(45697)),i=o(n(22421));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.is_active,n=e.ix,l=e.icon_obj,o=e.choosePermission,c=l.Icon,a=l.title;return r.default.createElement("div",{className:"ScreenPermissionItem cursor-pointer "+(t?"ScreenPermissionItem_active":""),onClick:function(){!t&&o(n)}},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",null,r.default.createElement(i.default,{is_active:t})),r.default.createElement("div",{className:"ScreenPermissionItem_right"},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",{className:"ScreenPermissionItem_right_icon display-flex"},c),r.default.createElement("div",{className:"font-500"},a)))))}n(83180),c.propTypes={is_active:l.default.bool,icon_obj:l.default.object},t.default=c},22421:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),l=i(n(45697));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_active;return r.default.createElement("div",{className:"RadioCustom brs-50 "+(t?"RadioCustom_active":"RadioCustom_inactive")},r.default.createElement("div",{className:"RadioCustom_center pos-abs-center brs-50"}))}n(69226),o.propTypes={is_active:l.default.bool},o.defaultProps={is_active:!1},t.default=o},16209:(e,t,n)=>{"use strict";n.r(t)},15934:(e,t,n)=>{"use strict";n.r(t)},83180:(e,t,n)=>{"use strict";n.r(t)},69226:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=1766.js.map