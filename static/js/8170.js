(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8170],{58722:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInterval=function(e){var t=e.time,n=e.callback,a=void 0===n?function(){}:n,u=(0,r.useRef)(!0),l=(0,r.useRef)(!0),i=(0,r.useRef)(!0);return(0,r.useEffect)((function(){var e;return e=setInterval((function(){i.current||(l.current?u.current?u.current=!1:a():clearInterval(e))}),t),function(){l.current=!1}}),[]),{doSkipInterval:function(){u.current=!0},stopInterval:function(e){i.current=e}}};var r=n(67294)},38669:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseMoveX=function(e){var t=e.handleMouseDown,n=void 0===t?function(){}:t,l=e.handleMouseMove,i=void 0===l?function(){}:l,o=e.handleMouseEnd,c=void 0===o?function(){}:o,s=(0,r.useRef)(!1),f=(0,r.useRef)(0);function d(e){if(s.current){var t=(0,u.getClientX)(e);i(t-f.current),f.current=t}}function p(){s.current=!1,window.onmousemove=null,window.onmouseup=null,c()}return{handleStart:function(e){e.stopPropagation(),s.current=!0,f.current=(0,u.getClientX)(e),n(),a.IS_MOBILE?(window.ontouchmove=d,window.ontouchend=p):(window.onmousemove=d,window.onmouseup=p)},handleMove:d,handleEnd:p}};var r=n(67294),a=n(55852),u=n(81858)},76765:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_fashion_info_right={name:"",description:"",new_price:0,old_price:0,total_add_cart:0,quantity:0},t.initial_fashion_shop={id:0,name:"",picture:"",banner:"",address:"",info:"",time_online:"",vid_pics:[],profile_model:0,owner_info:[{title:"Rating",value:0},{title:"Reply chat",value:""},{title:"Time joined",value:""},{title:"Products",value:0},{title:"Reply time",value:0},{title:"Follow",value:0}]},t.initial_fashion_search_products_obj={0:[{id:0,vid_pics:[{id:0,vid_pic:""}],count_rate:0,total_rate:0,address:"",brand:"",type:"",hashtag:"",name:"",new_price:0,old_price:0,discount:0,sold:0}]}},17892:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GetIdSlug=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";try{var n=(0,r.useParams)();return e?+n[t]:n[t]}catch(t){return e?parseInt(location.pathname.split("/").slice(-1)[0]):location.pathname.split("/").slice(-1)[0]}};var r=n(93191)},87898:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ParseLocationSearch=void 0;var r=n(17563);t.ParseLocationSearch=function(){return(0,r.parse)(location.search)}},36289:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnitNumber=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e>=1e9?Math.floor(e/1e8)/10+"B":e>=1e6?Math.floor(e/1e5)/10+"M":e>=1e3?Math.floor(e/100)/10+"K":e}},45915:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Just now";return e>=31536e6?Math.floor(e/31536e6)+" y":e>=2592e6?Math.floor(e/2592e6)+" mon":e>=864e5?Math.floor(e/864e5)+" d":e>=36e5?Math.floor(e/36e5)+" h":e>=6e4?Math.floor(e/6e4)+" m":t}},81858:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return r.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var r=n(55852)},87868:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=p(r),u=p(n(45697)),l=n(55852),i=n(58722),o=n(38669),c=n(82403),s=p(n(61498)),f=p(n(34205));n(97109);var d=p(n(12581));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=e.vid_pics,n=e.has_fetched,u=e.time_interval,p=void 0===u?6e3:u,m=e.time_trans,v=void 0===m?300:m,_=e.disabled_btn_when_trans,h=void 0===_||_,y=e.time_disabled_btn,g=void 0===y?100:y,E=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(0),2),b=E[0],w=E[1],P=(0,r.useRef)(null),S=(0,r.useRef)(!0),M=(0,r.useRef)(!1),N=(0,r.useRef)(!0),O=(0,r.useRef)(1),x=(0,r.useRef)(t.length),I=(0,i.useInterval)({time:p,callback:function(){M.current||X()}}),j=I.doSkipInterval,T=I.stopInterval,C=(0,o.useMouseMoveX)({handleMouseDown:function(){T(!0),N.current=!0,j()},handleMouseMove:function(e){w((function(t){return t+e}))},handleMouseEnd:function(){var e=-b/P.current.clientWidth;e>=.3?B():e<=-.3&&D(),N.current=!1,w(0),T(!1)}}),R=C.handleStart,k=C.handleMove,A=C.handleEnd,L=(0,c.useForceUpdate)();function F(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];M.current=!0,N.current=!1,setTimeout((function(){S.current&&(M.current=!1)}),h||e?v:g)}function X(){F(!0),O.current+=1,L(),O.current==x.current-1&&setTimeout((function(){S.current&&(O.current=1,N.current=!0,L())}),v)}function B(){M.current||(j(),X())}function D(){M.current||(j(),F(!0),O.current-=1,L(),0==O.current&&setTimeout((function(){S.current&&(O.current=x.current-2,N.current=!0,L())}),v))}return(0,r.useEffect)((function(){return function(){S.current=!1}}),[]),(0,r.useEffect)((function(){x.current=t.length,n&&(N.current=!1,T(!1),L())}),[t]),a.default.createElement("div",{ref:P,className:"Carousel pos-rel wh-100 overflow-hidden"},a.default.createElement("div",{className:"Carousel_row pos-rel display-flex h-100per",style:{width:100*t.length+"%",transform:"translateX(-"+100*O.current/t.length+"%) translateX("+b+"px)",transition:N.current?void 0:"all "+v+"ms"},onTouchStart:l.IS_MOBILE?R:void 0,onTouchMove:l.IS_MOBILE?k:void 0,onTouchEnd:l.IS_MOBILE?A:void 0},t.map((function(e,n){return a.default.createElement(f.default,{key:""+n,vid_pic:e,width_vid_pic:100/t.length+"%"})}))),a.default.createElement("div",{className:"pos-abs bottom-0 x-center padding-8px"},a.default.createElement(d.default,{count:x.current-2,active_ix:O.current-1==x.current-1?0:O.current-1})),l.IS_MOBILE?null:a.default.createElement(s.default,{is_btn_circle:!0,size_icon:"0.8rem",handleNext:B,handlePrev:D}))}m.propTypes={vid_pics:u.default.array.isRequired,has_fetched:u.default.bool},m.defaultProps={has_fetched:!1},t.default=m},12581:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.count,n=e.active_ix;return r.default.createElement("div",{className:"CarouselDot"},r.default.createElement("div",{className:"display-flex-center"},Array(t).fill(1).map((function(e,t){return r.default.createElement("div",{key:t,className:"CarouselDot_item padding-4px"},r.default.createElement("div",{className:"CarouselDot_item_contain brs-50 "+(n==t?"bg-fashion-carousel-active":"bg-ccc")}))}))))}a(n(45697)),n(6341),u.propTypes={},t.default=u},34205:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=l(n(45697)),u=n(32006);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.vid_pic,n=e.width_vid_pic;return r.default.createElement("div",{className:"CarouselItem",style:{width:n}},(0,u.VideoOrImage)(t))}n(25490),i.propTypes={vid_pic:a.default.string,width_vid_pic:a.default.string},t.default=i},15305:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=i(n(45697)),u=n(89802),l=i(n(75698));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.count,n=e.num_side_center,a=e.current,i=e.is_fetching,o=e.handleChangePage,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,u.FuncPagination)(t,n,a),3),s=c[0],f=c[1],d=c[2];return r.default.createElement("div",{className:"Pagination "+(i?"pointer-events-none opacity-05":"")},r.default.createElement("div",{className:"Pagination_row display-flex"},r.default.createElement(l.default,{num_page:1,is_active:1==a,handleChangePage:o}),r.default.createElement("div",null,r.default.createElement("div",{className:f?"":"display-none"},"...")),s.map((function(e){return r.default.createElement(l.default,{key:"Pagination_"+e,num_page:e,is_active:e==a,handleChangePage:o})})),r.default.createElement("div",null,r.default.createElement("div",{className:d?"":"display-none"},"...")),t>1&&r.default.createElement(l.default,{num_page:t,is_active:t==a,handleChangePage:o})))}n(88185),o.propTypes={count:a.default.number,num_side_center:a.default.number,current:a.default.number,is_fetching:a.default.bool,handleChangePage:a.default.func},o.defaultProps={is_fetching:!1},t.default=o},89802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FuncPagination=function(e,t,n){var r=2*t+1;return e<=2?[[],!1,!1]:e<=r+2?[Array.from({length:e-2},(function(e,t){return t+2})),!1,!1]:n<=t+2?[Array.from({length:r},(function(e,t){return t+2})),!1,!0]:n>=e-t-1?[Array.from({length:r},(function(t,n){return e+n-r})),!0,!1]:[Array.from({length:r},(function(e,r){return n+r-t})),!0,!0]}},75698:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.num_page,n=e.is_active,a=e.handleChangePage;return r.default.createElement("div",{className:"PaginationItem"},r.default.createElement("div",{className:"PaginationItem_contain brs-5px "+(n?"PaginationItem_contain-active":""),onClick:function(){n||a(t)}},t))}a(n(45697)),n(18936),u.propTypes={},t.default=u},17716:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeOwnerInfo=function(e){e.map((function(e){return"Time join"==e.title?(e.value=(0,u.default)((new Date).getTime()-new Date(e.value).getTime()),e):"Reply time"==e.title?(e.value=(0,u.default)((new Date).getTime()-new Date(e.value).getTime(),"For 1 min"),e):"Follow"==e.title?(e.value=(0,a.UnitNumber)(e.value),e):void 0}))};var r,a=n(36289),u=(r=n(45915))&&r.__esModule?r:{default:r}},28746:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=i(r),u=n(93191),l=(i(n(45697)),i(n(23504)));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(""),2),n=t[0],i=t[1];return n?a.default.createElement(u.Redirect,{to:"/fashion/search?q="+n,push:!0}):a.default.createElement("div",{className:"FashionH"},a.default.createElement(l.default,{handled:!1,handleSearchFashion:function(e){e.trim()&&i(e)}}))}o.propTypes={},t.default=o},94115:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.owner_info;return r.default.createElement("div",{className:"ShopActivity"},r.default.createElement("div",{className:"ShopActivity_row"},t.map((function(e,t){return r.default.createElement("div",{key:"ShopActivity_"+t,className:"ShopActivity_col"},r.default.createElement("span",{className:"ShopActivity_col-title"},e.title,":"),r.default.createElement("span",{className:"text-red"},e.value))}))))}a(n(45697)),n(55953),u.propTypes={},t.default=u},53282:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),a=(o(n(45697)),n(17892)),u=o(n(28746)),l=o(n(66920)),i=o(n(3921));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=(0,a.GetIdSlug)().id;return r.default.createElement("div",null,r.default.createElement("div",{className:"FashionItem_head"},r.default.createElement(u.default,null)),r.default.createElement("div",null,r.default.createElement(l.default,{id:t})),r.default.createElement("div",null,r.default.createElement(i.default,{id:t})))}c.propTypes={},t.default=c},3921:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(67294),u=m(a),l=n(17563),i=(m(n(45697)),n(51468)),o=m(n(37824)),c=n(87898),s=m(n(15305)),f=m(n(98989)),d=m(n(67980)),p=m(n(90149));function m(e){return e&&e.__esModule?e:{default:e}}function v(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,u){try{var l=t[a](u),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(i)}("next")}))}}function _(e){var t,n,m=(t=v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_FashionShop_R)(h);case 2:if(t=e.sent,x.current){e.next=5;break}return e.abrupt("return");case 5:E((function(e){return r({},e,{list_name:t.data.list_name})}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)}),_=(n=v(regeneratorRuntime.mark((function e(t){var n,a,u,l,o=t.new_page,c=void 0===o?1:o,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["new_page"]);return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.current=!1,E(r({},g,{is_fetching:!0},s)),e.next=4,(0,i.API_FashionProduct_L)({page:c,size:15,shop_model:h});case 4:if(n=e.sent,a=n.data,u=a.data,l=a.pages,x.current){e.next=8;break}return e.abrupt("return");case 8:E((function(e){return r({},e,{page:c,pages:e.has_fetched?S:l,products_obj:r({},e.products_obj,(t={},n=c,a=u,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t)),is_fetching:!1,has_fetched:!0});var t,n,a})),setTimeout((function(){I.current=!0}),1);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),h=e.id,y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({products_obj:{1:[]},page:1,pages:1,list_name:[],active_group_ix:-1,is_fetching:!1,has_fetched:!1}),2),g=y[0],E=y[1],b=g.list_name,w=g.products_obj,P=g.page,S=g.pages,M=g.is_fetching,N=g.has_fetched,O=w[P],x=(0,a.useRef)(!0),I=(0,a.useRef)(!0),j=(0,a.useRef)(null),T=(0,a.useRef)(null);function C(){var e=parseInt((0,c.ParseLocationSearch)().page)||1;_({new_page:N?1:e,page:1,has_fetched:!1,products_obj:{1:[]}})}return(0,a.useEffect)((function(){return function(){x.current=!1}}),[]),(0,a.useEffect)((function(){(0,o.default)(j.current,m,0)}),[]),(0,a.useEffect)((function(){I.current&&(0,o.default)(j.current,C,0)}),[location.search]),u.default.createElement("div",{ref:j},u.default.createElement("div",{ref:T},u.default.createElement(d.default,{list_name:b})),u.default.createElement("div",{className:M?"display-none":""},u.default.createElement(p.default,{products:O})),u.default.createElement("div",{className:"width-fit-content margin-auto"},u.default.createElement(f.default,{is_fetching:M})),u.default.createElement("div",{className:"ShopBody_pagination "+(N?"":"display-none")},u.default.createElement(s.default,{count:S,num_side_center:2,current:P,is_fetching:M,handleChangePage:function(e){if(history.pushState("","","?"+(0,l.stringify)(r({},(0,c.ParseLocationSearch)(),{page:e}))),T.current.scrollIntoView(),null==w[e]||1==e&&0==w[1].length)_({new_page:e});else{if(I.current=!1,!x)return;E(r({},g,{page:e})),setTimeout((function(){I.current=!0}),1)}}})))}n(77409),_.propTypes={},t.default=_},67980:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=n(93191),u=(l(n(45697)),n(87898));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.list_name;return r.default.createElement("div",{className:"ShopCategory bg-primary"},r.default.createElement("div",{className:"ShopCategory_row display-flex"},r.default.createElement("div",null,r.default.createElement(a.Link,{to:location.pathname,className:"normal-text"},r.default.createElement("h3",{className:"ShopCategory_item margin-0 font-16px "+((0,u.ParseLocationSearch)().category?"":"ShopCategory_item-active pointer-events-none")},"All"))),t.map((function(e,t){return r.default.createElement("div",{key:"ShopCategory_"+t},r.default.createElement(a.Link,{to:"?category="+e.name,className:"normal-text"},r.default.createElement("div",{className:"ShopCategory_item label-field "+(e.name==(0,u.ParseLocationSearch)().category?"ShopCategory_item-active pointer-events-none":"")},e.title)))}))))}n(92826),i.propTypes={},t.default=i},90149:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=(u(n(45697)),u(n(15765)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.products;return r.default.createElement("div",{className:"ShopProducts margin-auto brs-5px-md bg-primary"},r.default.createElement("div",{className:"display-flex justify-content-center flex-wrap"},t.map((function(e,t){return r.default.createElement("div",{key:"ShopProducts_"+t},r.default.createElement(a.default,{link:"/fashion:"+e.id,img:e.vid_pics[0].vid_pic,name:e.name,in_stock:"In stock",new_price:e.new_price,old_price:e.old_price,discount:e.discount}))}))))}n(81899),l.propTypes={},t.default=l},66920:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(67294),u=m(a),l=(m(n(45697)),n(51468)),i=m(n(37824)),o=n(76765),c=n(17716),s=m(n(97817));n(63847);var f=m(n(10137)),d=m(n(13746)),p=m(n(66714));function m(e){return e&&e.__esModule?e:{default:e}}function v(e){var t,n,m=(t=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_FashionShop_R)(v);case 2:if(t=e.sent,n=t.data,(0,c.changeOwnerInfo)(n.owner_info),S.current){e.next=7;break}return e.abrupt("return");case 7:document.title=n.name,y(r({},h,{shop_obj:n,has_fetched:!0}));case 9:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,u){try{var l=e[a](u),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(i)}("next")}))},function(){return n.apply(this,arguments)}),v=e.id,_=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({shop_obj:r({},o.initial_fashion_shop),has_fetched:!1}),2),h=_[0],y=_[1],g=h.shop_obj,E=h.has_fetched,b=g.vid_pics,w=g.info,P=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(g,["vid_pics","info"]),S=(0,a.useRef)(!0),M=(0,a.useRef)(null);return(0,a.useEffect)((function(){return function(){S.current=!1}}),[]),(0,a.useEffect)((function(){(0,i.default)(M.current,(function(){return m(v)}),0)}),[v]),u.default.createElement("div",{ref:M,className:"ShopHead "+(E?"":"pointer-events-none")},u.default.createElement("div",{className:"ShopHead_part"},u.default.createElement(p.default,P)),u.default.createElement("div",{className:"ShopHead_part"},u.default.createElement(f.default,{vid_pics:E?b.map((function(e){return e.vid_pic})):[s.default,s.default,s.default]})),u.default.createElement("div",{className:"ShopHead_part"},u.default.createElement(d.default,{info:w,has_fetched:E})))}v.propTypes={},t.default=v},10137:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=l(n(45697)),u=l(n(87868));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.vid_pics,n=[t[t.length-1]].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t),[t[0]]);return t.length>=1&&r.default.createElement("div",{className:"ShopBanner"},r.default.createElement("div",{className:"ShopBanner_carousel"},t.length>=2?r.default.createElement(u.default,{vid_pics:n}):r.default.createElement("img",{src:n[0],alt:""})))}n(48028),i.propTypes={vid_pics:a.default.array},i.defaultProps={vid_pics:["","",""]},t.default=i},13746:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=u(n(45697));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.info;return r.default.createElement("div",{className:"ShopInfo"},r.default.createElement("h2",{className:"ShopInfo_title margin-0 font-16px"},"SHOP INFORMATION"),r.default.createElement("div",{className:"ShopInfo_info"},t))}n(18115),l.propTypes={info:a.default.string},t.default=l},66714:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294));l(n(45697)),n(49126);var a=l(n(87949)),u=l(n(29953));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.profile_model,n=e.picture,l=e.name,i=e.banner,o=e.owner_info;return r.default.createElement("div",{className:"ShopPersonal"},r.default.createElement("div",{className:"ShopPersonal_row display-flex align-items-center"},r.default.createElement("div",{className:"ShopPersonal_left"},r.default.createElement(a.default,{profile_model:t,picture:n,name:l,banner:i})),r.default.createElement("div",{className:"ShopPersonal_right"},r.default.createElement(u.default,{owner_info:o}))))}n(37805),i.propTypes={},t.default=i},87949:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=i(r),u=i(n(45697)),l=n(15130);function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.profile_model,n=e.picture,u=e.name,i=e.banner,o=(0,r.useContext)(l.context_api).openRoomChat;return a.default.createElement("div",{className:"ShopPersonalLeft pos-rel brs-5px"},a.default.createElement("div",{className:"ShopPersonalLeft_bg pos-abs-100",style:{backgroundImage:"url("+i+")"}}),a.default.createElement("div",{className:"ShopPersonalLeft_main pos-rel padding-8px bg-film"},a.default.createElement("div",{className:"ShopPersonalLeft_row display-flex space-between"},a.default.createElement("div",{className:"ShopPersonalLeft_info flex-grow-1"},a.default.createElement("div",{className:"ShopPersonalLeft_info-row display-flex"},a.default.createElement("div",{className:"ShopPersonalLeft_info-left brs-50"},a.default.createElement("img",{src:n,alt:""})),a.default.createElement("div",{className:"ShopPersonalLeft_info-right"},a.default.createElement("h1",{className:"margin-0 font-16px"},u),a.default.createElement("div",null,a.default.createElement("span",null,"Online"),a.default.createElement("span",null))))),a.default.createElement("div",{className:"ShopPersonalLeft_actions"},a.default.createElement("div",{className:"ShopPersonalLeft_actions-row display-block"},a.default.createElement("div",{className:"ShopPersonalLeft_actions-elm"},"Follow"),a.default.createElement("div",{className:"ShopPersonalLeft_actions-elm",onClick:function(){o(t)}},"Chat"))))))}n(33304),o.propTypes={profile_model:u.default.number,picture:u.default.string,name:u.default.string,banner:u.default.string},t.default=o},29953:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=(u(n(45697)),u(n(94115)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.owner_info;return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement(a.default,{owner_info:t})))}l.propTypes={},t.default=l},97109:(e,t,n)=>{"use strict";n.r(t)},6341:(e,t,n)=>{"use strict";n.r(t)},25490:(e,t,n)=>{"use strict";n.r(t)},88185:(e,t,n)=>{"use strict";n.r(t)},18936:(e,t,n)=>{"use strict";n.r(t)},55953:(e,t,n)=>{"use strict";n.r(t)},77409:(e,t,n)=>{"use strict";n.r(t)},92826:(e,t,n)=>{"use strict";n.r(t)},81899:(e,t,n)=>{"use strict";n.r(t)},63847:(e,t,n)=>{"use strict";n.r(t)},48028:(e,t,n)=>{"use strict";n.r(t)},18115:(e,t,n)=>{"use strict";n.r(t)},49126:(e,t,n)=>{"use strict";n.r(t)},37805:(e,t,n)=>{"use strict";n.r(t)},33304:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=8170.js.map