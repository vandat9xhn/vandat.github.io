(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[7395],{88590:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_city_history_arr=t.default_city_history_obj=t.default_city_arr=t.default_city_obj=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(39727),l=r(69565),i=r(8047),o=r(58822),u=r(7605),c=r(61426),s=["Ha Noi","Ha Nam","Nam Dinh","Da Lat","Da Nang","Can Tho","Ho Chi Minh"],d=["Nguyen Trai","Ha Dong","Nguyen Hue","Tran Khat Tran","Hai Ba Trung","Khuat Duy Tien","Cau Giay","To Huu"],f=["This is a street of Ha Noi","This is a street of Ha Nam","This is a street of Nam Dinh","This is a street of Da Nang","This is a street of Da Lat","This is a street of Can Tho","This is a street of Ho Chi Minh"],m=function(){return{city:(0,c.getRandomFromArr)(s),street:(0,c.getRandomFromArr)(d),quote:(0,c.getRandomFromArr)(f),bg_color:(0,l.getRandomNumber)(0,3)}},_=t.default_city_obj=function(){return n({id:(0,l.getRandomId)()},(0,o.getRandomUser)(),m(),{image:(0,i.getRandomVidPic)(),is_user:(0,a.getRandomBool)(),count_his:2})},p=(t.default_city_arr=function(){return(0,u.getDefaultArr)(_,4,4)},t.default_city_history_obj=function(){return n({id:(0,l.getRandomId)()},m(),{image:(0,i.getRandomVidPicOrNull)(),created_time:"2021-06-29T06:51:05.370Z"})});t.default_city_history_arr=function(){return(0,u.getDefaultArr)(p,3,4)}},27720:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconsPermission=void 0;var n=u(r(67294)),a=u(r(39475)),l=u(r(3791)),i=u(r(68986)),o=u(r(67238));function u(e){return e&&e.__esModule?e:{default:e}}t.IconsPermission=[{Icon:n.default.createElement(i.default,null),title:"Public"},{Icon:n.default.createElement(a.default,{y:200}),title:"Friend"},{Icon:n.default.createElement(a.default,{x:400}),title:"Friend of friend"},{Icon:n.default.createElement(o.default,null),title:"Setting"},{Icon:n.default.createElement(l.default,null),title:"Private"}]},77588:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_CityHistory_L=t.handle_API_City_L=void 0;var n,a,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=(t.handle_API_City_L=(n=u(regeneratorRuntime.mark((function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_City_L)(l({},o.params_city_l,{q:r,c_count:n}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),t.handle_API_CityHistory_L=(a=u(regeneratorRuntime.mark((function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_CityHistory_L)(l({},o.params_history_city,{city_model:t,c_count:n}));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),r(75405)),o=r(93187);function u(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,l){try{var i=t[a](l),o=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(o)}("next")}))}}},3791:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:r,strokeLinejoin:"round"},n.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:"black",strokeWidth:"15"}),n.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),n.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}i.propTypes={size_icon:a.default.string,stroke:a.default.string},i.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},68986:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:"none",strokeWidth:"5",stroke:r},n.default.createElement("circle",{cx:"100",cy:"100",r:"85",strokeWidth:"10"}),n.default.createElement("line",{x1:"99.3965",y1:"16.1017",x2:"99.3965",y2:"183.898",stroke:"black"}),n.default.createElement("line",{x1:"10",y1:"97.5",x2:"184.569",y2:"97.5"}),n.default.createElement("path",{d:"M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z"}),n.default.createElement("path",{d:"M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957"}))}i.propTypes={size_icon:a.default.string,stroke:a.default.string},i.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},67238:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,r=e.fill,a=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:r,strokeWidth:"10",stroke:a},n.default.createElement("path",{d:"M145.216 99.5058C145.216 124.079 125.48 143.924 101.225 143.924C76.9699 143.924 57.2334\r 124.079 57.2334 99.5058C57.2334 74.9331 76.9699 55.0872 101.225 55.0872C125.48 55.0872 145.216\r 74.9331 145.216 99.5058Z"}),n.default.createElement("path",{d:"M59.0922 44.157L55.6628 23.4012L79.6686 15L91.9164 29.8256H110.043L124.251 15L144.827\r 23.4012V44.157L157.565 58.9826L177.161 56.5116L185 77.2674L171.282 90.6105V110.378L185\r 121.25L177.161 144.477H157.565L142.378 158.314L144.827 177.587L124.251 185L110.043\r 170.669H91.9164L79.6686 185L57.1326 177.587L59.0922 158.314L46.8444 144.477L24.7983\r 146.453L15 125.203L31.6571 110.378V93.5756L15 77.2674L24.7983 56.5116L42.9251\r 58.9826L59.092244.157Z"}),n.default.createElement("circle",{cx:"100",cy:"100",r:"35",fill:"none"}))}i.propTypes={fill:a.default.string,size_icon:a.default.string,stroke:a.default.string},i.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},2760:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,r=e.x,a=e.y,l=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:r+" "+a+" 200 200"},n.default.createElement("path",{d:"M25,75 A65,50 0 0 1 170,75 M185,25 175,75 125,60\r M25,125 A65,50 0 0 0 170,125 M10,175 20,125 70,140",fill:"none",stroke:l,strokeWidth:"20",strokeLinejoin:"round",strokeLinecap:"round"}))}i.propTypes={size_icon:a.default.string,x:a.default.number,y:a.default.number,stroke:a.default.string},i.defaultProps={size_icon:"1rem",x:0,y:0,stroke:"var(--md-color)"},t.default=i},93187:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.params_city_l={page:1,size:5},t.params_history_city={page:1,size:5}},87898:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ParseLocationSearch=void 0;var n=r(17563);t.ParseLocationSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,n.parse)(location.search,e);return t}},75147:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.API_IsLogin=u,t.API_IsLogin_URL=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return u(n({},e,{url:t}),n({},e,{url:r}))};var a=o(r(87421)),l=o(r(62667)),i=r(50918);function o(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return 1!=localStorage.is_login||i.is_api_fake?(0,l.default)(t):(0,a.default)(e)}},75405:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_CityHistory_L=t.API_City_R=t.API_City_L=void 0;var n,a=(n=r(62667))&&n.__esModule?n:{default:n},l=r(75147),i=r(50918),o=r(88590);t.API_City_L=function(e){return(0,i.API_FakeReal)((0,o.default_city_arr)(),(function(){return(0,l.API_IsLogin_URL)({method:"GET",params:e},"api/city/city-l/","api/city/city-no-token-l/")}),e)},t.API_City_R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.default)({url:"/city/city-r/"+e+"/",method:"GET",params:t})},t.API_CityHistory_L=function(e){return(0,i.API_FakeReal)((0,o.default_city_history_arr)(),(function(){return(0,a.default)({url:"/city/history-l/",method:"GET",params:e})}),e)}},77992:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697)),l=r(30796),i=o(r(65635));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){e.closeScreen;var t=e.children,r=e.screen_center,a=e.waiting,o=e.use_body_hidden,u=e.use_scale,c=e.FetchingComponent;return(0,l.useMakeBodyHidden)({hidden_app:o}),n.default.createElement("div",{className:"ScreenBlur "+(r?"ScreenBlur_center display-flex-center":"")},n.default.createElement("div",{className:a?"width-0 height-0":"App_Form"},n.default.createElement("div",{className:"ScreenBlur_contain bg-primary brs-5px-md box-shadow-fb "+(a?"ScreenBlur_contain-waiting":"")+" "+(u?"ScreenBlur_contain-scale":"")+" "+(r?"":"ScreenBlur_contain-normal")},t)),n.default.createElement("div",{className:"ScreenBlur_waiting pos-fixed-100v "+(a?"":"display-none")},n.default.createElement(i.default,{FetchingComponent:c})))}r(16209),u.propTypes={closeScreen:a.default.func,children:a.default.element,use_body_hidden:a.default.bool,screen_center:a.default.bool,waiting:a.default.bool,use_scale:a.default.bool,FetchingComponent:a.default.func},u.defaultProps={use_body_hidden:!1,screen_center:!1,waiting:!1,use_scale:!1},t.default=u},99452:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.openScreenHistory=function(e){var t=e.openScreenFloor,r=e.title,a=e.handle_API_History_L,l=e.HisComponent,i=d(e,["openScreenFloor","title","handle_API_History_L","HisComponent"]);t(n({FloorComponent:f,title:r,handle_API_History_L:a,HisComponent:l},i))};var a=r(67294),l=s(a),i=(s(r(45697)),r(84353)),o=s(r(77992)),u=s(r(98513)),c=s(r(11623));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function f(e){var t=e.closeScreen,r=e.title,s=e.handle_API_History_L,f=e.HisComponent,m=d(e,["closeScreen","title","handle_API_History_L","HisComponent"]),_=(0,i.useDataShowMore)({initial_arr:[],handle_API_L:s}),p=_.data_state,y=_.getData_API,h=p.data_arr,v=p.count,g=p.has_fetched,E=p.is_fetching;return(0,a.useEffect)((function(){y()}),[]),l.default.createElement(o.default,{closeScreen:t,waiting:!g&&E},l.default.createElement("div",{className:g?"":"display-none"},l.default.createElement(u.default,{title:r,closeScreenBlur:t}),l.default.createElement("div",{className:"ScreenBlur_body_contain scroll-thin"},l.default.createElement(f,n({histories:h},m))),l.default.createElement(c.default,{is_show_more:v>h.length,is_fetching:E,handleShowMore:function(){y()}})))}r(17431),f.propTypes={},t.default=f},13205:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.openScreenUpdate=function(e){var t=e.openScreenFloor,r=e.title,a=e.UpdateComponent,l=e.is_fetching,i=f(e,["openScreenFloor","title","UpdateComponent","is_fetching"]);t(n({FloorComponent:m,title:r,UpdateComponent:a,is_fetching:l},i))};var a=r(67294),l=d(a),i=(d(r(45697)),r(15130)),o=d(r(77992)),u=d(r(98513)),c=d(r(65635)),s=r(39309);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function m(e){var t=e.closeScreen,r=e.title,d=e.UpdateComponent,m=(e.is_fetching,f(e,["closeScreen","title","UpdateComponent","is_fetching"])),_=(0,a.useContext)(i.context_api),p=_.openScreenFloor,y=_.detectScreenHasChange,h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(!1),2),v=h[0],g=h[1],E=(0,a.useRef)(!1),b=(0,a.useRef)(!0);function C(){g(!0),setTimeout((function(){t(),y(!1)}),250)}function P(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!e&&E.current?(0,s.openScreenConfirm)({openScreenFloor:p,title:"Unsaved changes",notification:"Changes you've made will not be saved.",handleConfirm:C}):t()}return(0,a.useEffect)((function(){b.current=!1}),[]),l.default.createElement(o.default,{closeScreen:P,use_scale:b.current},l.default.createElement("div",null,l.default.createElement(u.default,{title:r,closeScreenBlur:P}),l.default.createElement("div",null,l.default.createElement(d,n({detectHasChange:function(e){E.current!=e&&(E.current=e,y(e))}},m))),l.default.createElement("div",{className:v?"pos-fixed-100v z-index-lv5":"display-none"},l.default.createElement(c.default,null))))}m.propTypes={},t.default=m},4787:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697)),l=o(r(39475)),i=o(r(57108));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleDelete,r=e.title;return n.default.createElement("div",{className:"action-item",onClick:t,title:"Delete"},n.default.createElement(i.default,{Icon:l.default},r))}u.propTypes={title:a.default.string,handleDelete:a.default.func},u.defaultProps={title:"Delete"},t.default=u},58629:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697)),l=o(r(39475)),i=o(r(57108));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleOpenHistory,r=e.title;return n.default.createElement("div",{className:"action-item",onClick:t,title:"History"},n.default.createElement(i.default,{Icon:l.default,y:400},r))}u.propTypes={title:a.default.string,handleOpenHistory:a.default.func},u.defaultProps={title:"History"},t.default=u},6043:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697)),l=r(27720),i=o(r(48474));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.current_permission,r=e.handleOpenPermission,a=e.title;return n.default.createElement("div",{className:"action-item",onClick:r,title:"Permission"},n.default.createElement(i.default,{ComponentLeft:l.IconsPermission[t].Icon,ComponentRight:n.default.createElement("div",null,a)}))}u.propTypes={current_permission:a.default.number,title:a.default.string,handleOpenPermission:a.default.func},u.defaultProps={current_permission:0,title:"Permission"},t.default=u},64903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697)),l=o(r(39475)),i=o(r(57108));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleOpenReport,r=e.title;return n.default.createElement("div",{className:"action-item",onClick:t,title:"Report"},n.default.createElement(i.default,{Icon:l.default,x:400,y:400},r))}u.propTypes={title:a.default.string,handleOpenReport:a.default.func},u.defaultProps={title:"Report"},t.default=u},87782:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697)),l=o(r(57108)),i=o(r(2760));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleUpdate,r=e.title;return n.default.createElement("div",{className:"action-item",onClick:t,title:"Update"},n.default.createElement(l.default,{Icon:i.default,size_icon:"0.85rem"},r))}u.propTypes={title:a.default.string,handleUpdate:a.default.func},u.defaultProps={title:"Update"},t.default=u},40374:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=u(n),l=u(r(45697)),i=u(r(37279)),o=u(r(37930));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.value,r=e.placeholder,l=e.handleChange,u=e.handleSearch,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!1),2),s=c[0],d=c[1];return a.default.createElement("div",{className:"SearchAnimateDiv pos-rel "+(s?"":"SearchAnimateDiv_close")},a.default.createElement("div",{className:"SearchAnimateDiv_key"},a.default.createElement("div",{className:"SearchAnimateDiv_key_contain display-flex justify-content-center align-items-center cursor-pointer "+(s?"nav-active":""),onClick:function(){s?u():d(!0)}},a.default.createElement(i.default,{y:200}))),a.default.createElement("div",{className:"SearchAnimateDiv_input"},a.default.createElement("input",{type:"text",value:t,placeholder:r,onChange:function(e){l(e.target.value)},onKeyDown:function(e){13==e.keyCode&&(e.preventDefault(),u())}}),a.default.createElement("div",{className:"SearchAnimateDiv_input-clear",onClick:function(){l("")}},a.default.createElement(o.default,{y:400,size_icon:"0.8rem"}))),a.default.createElement("div",{className:"SearchAnimateDiv_right"},a.default.createElement("div",{className:"SearchAnimateDiv_icon-close display-flex justify-content-center align-items-center"},a.default.createElement("div",{className:"close-icon-small brs-50 cursor-pointer",onClick:function(){d(!1)}},a.default.createElement(o.default,{y:400,size_icon:"1rem"})))))}r(89497),c.propTypes={value:l.default.string,handleChange:l.default.func,handleSearch:l.default.func,placeholder:l.default.string},c.defaultProps={value:"",placeholder:"Search..."},t.default=c},3726:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=y(n),l=r(93191),i=r(55852),o=r(87898),u=r(2804),c=r(77588),s=y(r(37930)),d=y(r(27883)),f=y(r(40040)),m=y(r(73721)),_=y(r(32529)),p=y(r(14974));function y(e){return e&&e.__esModule?e:{default:e}}r(86890),r(57868),t.default=function(){var e=(0,n.useRef)(null),t=(0,n.useRef)(""),r=(0,u.useObserverShowMore)({initial_arr:[],handle_API_L:function(e){return(0,c.handle_API_City_L)(t.current,e)}}),y=r.data_state,h=r.refreshData_API,v=r.observerShowMore,g=y.data_arr,E=y.is_fetching,b=y.has_fetched;return(0,n.useEffect)((function(){document.title="City",t.current=(0,o.ParseLocationSearch)().city,h(),v({fake_elm_end:e.current,rootMargin:"0px 0px 1000px 0px",way_scroll:"to_bottom",margin:1e3})}),[]),a.default.createElement("div",{className:"Cities"},a.default.createElement("div",{className:"Cities "+(b?"":"display-none")},a.default.createElement("div",{className:"Cities_search"},a.default.createElement(m.default,{handleSearch:function(e){t.current=e,history.replaceState("","","?city="+e),h()}})),a.default.createElement("div",{className:"Cities_contain"},g.map((function(e){return a.default.createElement("div",{key:""+e.id,className:"Cities_item"},a.default.createElement(_.default,{city_obj:e,has_fetched:b}))})),a.default.createElement("div",{className:"width-fit-content margin-auto"},a.default.createElement(d.default,{is_fetching:E}))),1==localStorage.is_login&&a.default.createElement("div",{className:"Cities_add pos-fixed left-0 "+(i.IS_MOBILE?"bottom-0":"Cities_add-pc trans-x--50per bottom-50per")},a.default.createElement(l.Link,{to:"/new-city"},a.default.createElement("div",{className:"Cities_add-icon display-flex-center bg-green brs-50 box-shadow-fb cursor-pointer hv-opacity",title:"Add new city"},a.default.createElement(s.default,{y:400}))))),a.default.createElement("div",{className:b?"":"Cities_skeleton"},a.default.createElement(f.default,{component:a.default.createElement(p.default,null),has_fetched:b})),a.default.createElement("div",{ref:e,className:"padding-1px"}))}},11581:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(55852)),l=r(52538),i=u(r(16982)),o=u(r(69337));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.is_poster,r=e.openHistory,u=e.openUpdate,c=e.openDelete,s=e.openReport,d=(0,l.useBool)(),f=d.is_true,m=d.setIsTrue,_=d.toggleBool,p=n.default.createElement(o.default,{is_poster:t,openHistory:function(e){r(e),m(!1)},openUpdate:function(e){u(e),m(!1)},openDelete:function(e){c(e),m(!1)},openReport:function(e){s(e),m(!1)}});return n.default.createElement("div",{className:"CityActionChoices"},n.default.createElement(i.default,{is_show:f,use_title:!0,toggleShow:_,handleClose:function(){m(!1)}},a.IS_MOBILE?n.default.createElement("div",{className:"CityActionChoices_list-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0"},p):n.default.createElement("div",{className:"CityActionChoices_list-pc brs-8px bg-primary box-shadow-fb"},p)))}r(55331),c.propTypes={},t.default=c},69337:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),a=(c(r(45697)),r(50918)),l=c(r(58629)),i=c(r(87782)),o=c(r(4787)),u=c(r(64903));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.is_poster,r=e.openHistory,c=e.openUpdate,s=e.openDelete,d=e.openReport;return e.openPermission,n.default.createElement("div",{className:"CityActionChoicesContain"},n.default.createElement("ul",{className:"CityActionChoicesContain_list list-none"},n.default.createElement("li",null,n.default.createElement(l.default,{handleOpenHistory:r})),n.default.createElement("li",{className:t||a.is_api_fake?"":"display-none"},n.default.createElement(i.default,{handleUpdate:c})),n.default.createElement("li",{className:!t||a.is_api_fake?"":"display-none"},n.default.createElement(u.default,{handleOpenReport:d})),n.default.createElement("li",{className:t||a.is_api_fake?"":"display-none"},n.default.createElement(o.default,{handleDelete:s}))))}c(r(6043)),r(87822),s.propTypes={},t.default=s},35794:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),a=i(r(45697)),l=i(r(28108));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.initialValues,r=e.handleSubmit,a=e.detectHasChange;return n.default.createElement("div",{className:"CityUpdate"},n.default.createElement("div",null,n.default.createElement(l.default,{title_submit:"Update",initialValues:t,handleSubmit:r,use_has_change:!0,detectHasChange:a})))}r(41050),o.propTypes={initialValues:a.default.object,handleSubmit:a.default.func,detectHasChange:a.default.func},t.default=o},65244:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),r(47442)),l=r(25788),i=o(r(3501));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.histories;return function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}(e,["histories"]),n.default.createElement("div",{className:"CityHistories"},n.default.createElement("ul",{className:"CityHistories_row"},t.map((function(e,t){return n.default.createElement("li",{key:""+t,className:"CityHistories_item"},n.default.createElement("div",{className:"inline-block"},n.default.createElement("div",{className:"font-12px font-italic font-500"},"Update at"," ",(0,a.formatLocalDateTimeString)(new Date(e.created_time)))),n.default.createElement("div",null,n.default.createElement(i.default,{city:e.city,street:e.street,quote:e.quote,image:e.image,bg:l.city_bg_color_arr[e.bg_color].bg,color:l.city_bg_color_arr[e.bg_color].color,created_time:e.created_time})))}))))}r(13369),u.propTypes={},t.default=u},3501:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.city,r=e.street,a=e.quote,l=e.image,i=e.bg,o=e.color;return e.created_time,n.default.createElement("div",{className:"padding-8px "+i+" "+o},n.default.createElement("div",null,n.default.createElement("address",null,n.default.createElement("div",{className:t?"":"display-none"},"City: ",t),n.default.createElement("div",{className:r?"":"display-none"},"Street: ",r)),n.default.createElement("article",{className:"CityHistoryItem_quote "+(a?"":"display-none")},"Quote: ",a)),n.default.createElement("div",{className:"CityHistoryItem_img "+(l?"":"display-none")},n.default.createElement("div",null,n.default.createElement("img",{className:"object-fit-cover",src:l,alt:"",width:"200",height:"200"}))))}a(r(45697)),l.propTypes={},t.default=l},32529:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=b(n),l=b(r(45697)),i=r(15130),o=r(73674),u=b(r(48321)),c=r(77588),s=r(21092),d=r(82403),f=r(39309),m=r(99452),_=r(13205),p=b(r(8119)),y=b(r(17852)),h=r(25788),v=b(r(11581)),g=b(r(35794)),E=b(r(65244));function b(e){return e&&e.__esModule?e:{default:e}}function C(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,l){try{var i=t[a](l),o=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(o)}("next")}))}}function P(e){var t,r,l=(t=C(regeneratorRuntime.mark((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F((function(){return(0,o.API_City_UD)(N,"PATCH",(0,u.default)(t))}));case 2:P.city=t.city,P.street=t.street,t.image&&(P.image=t.image),P.quote=t.quote,P.bg_color=t.bg_color,U(),M();case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)}),b=(r=C(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_City_UD)(N,"DELETE");case 2:P.is_del=!0,U();case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),P=e.city_obj,S=(0,n.useContext)(i.context_api),w=S.openScreenFloor,M=S.closeScreenFloor,N=P.id,O=P.user,L=P.city,I=P.street,k=P.bg_color,x=P.quote,A=P.image,j=(P.count_his,P.is_user),H=P.is_del,T=h.city_bg_color_arr[k],D=T.bg,R=T.color,U=(0,d.useForceUpdate)(),F=(0,s.useScreenFetching)();function B(e){return(0,c.handle_API_CityHistory_L)(N,e)}function z(){console.log("Report: "+N)}return!H&&a.default.createElement(y.default,null,a.default.createElement("div",{className:"CityItem brs-5px-md box-shadow-1 "+D+" "+R},a.default.createElement("div",{className:"CityItem_user"},a.default.createElement(p.default,{user:O})),a.default.createElement("div",null,a.default.createElement("address",null,a.default.createElement("div",null,"City: ",L),a.default.createElement("div",null,"Street: ",I)),a.default.createElement("article",{className:"CityItem_quote"},'"',x,'"')),a.default.createElement("div",{className:"CityItem_img"},a.default.createElement("a",{href:A,target:"_blank"},a.default.createElement("div",{className:"CityItem_img_contain bg-shadow-9 brs-5px"},a.default.createElement("div",{className:"display-flex-center h-100per"},a.default.createElement("img",{src:A,alt:""}))))),a.default.createElement("div",{className:"CityItem_choices"},a.default.createElement(v.default,{is_poster:j,openHistory:function(){(0,m.openScreenHistory)({openScreenFloor:w,title:"History",handle_API_History_L:B,HisComponent:E.default})},openUpdate:function(){(0,_.openScreenUpdate)({openScreenFloor:w,title:"Update",UpdateComponent:g.default,initialValues:{city:L,street:I,image:A,quote:x,bg_color:k},handleSubmit:l})},openDelete:function(){(0,f.openScreenConfirm)({openScreenFloor:w,title:"Delete",notification:"Do you really want to delete this city?",handleConfirm:b})},openReport:function(){(0,f.openScreenConfirm)({openScreenFloor:w,title:"Report",notification:"Do you want to report this city?",handleConfirm:z})}}))))}r(8700),P.propTypes={city_obj:l.default.object,has_fetched:l.default.bool},t.default=P},14974:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return n.default.createElement("div",{className:"CityItemSkeleton brs-5px-md bg-primary bax-shadow-1"})}a(r(45697)),r(46157),l.propTypes={},t.default=l},73721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=o(n),l=o(r(45697)),i=o(r(40374));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleSearch,r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(""),2),l=r[0],o=r[1];return a.default.createElement("div",{className:"CitySearch"},a.default.createElement("div",null,a.default.createElement(i.default,{value:l,placeholder:"City...",handleChange:function(e){o(e)},handleSearch:function(){t(l)}})))}r(95063),u.propTypes={handleSearch:l.default.func},t.default=u},16209:(e,t,r)=>{"use strict";r.r(t)},17431:(e,t,r)=>{"use strict";r.r(t)},89497:(e,t,r)=>{"use strict";r.r(t)},86890:(e,t,r)=>{"use strict";r.r(t)},57868:(e,t,r)=>{"use strict";r.r(t)},55331:(e,t,r)=>{"use strict";r.r(t)},87822:(e,t,r)=>{"use strict";r.r(t)},41050:(e,t,r)=>{"use strict";r.r(t)},13369:(e,t,r)=>{"use strict";r.r(t)},8700:(e,t,r)=>{"use strict";r.r(t)},46157:(e,t,r)=>{"use strict";r.r(t)},95063:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=7395.js.map