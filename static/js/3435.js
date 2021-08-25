(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3435],{93903:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useNewCount=void 0;var r=a(67294);t.useNewCount=function(e){var t=e.getCount,a=void 0===t?function(){return 1}:t,n=e.getMax,u=void 0===n?function(){return 1}:n,c=e.getMin,l=void 0===c?function(){return 1}:c,o=e.handleSetCount,i=void 0===o?function(){}:o,d=(0,r.useRef)(0);return{countUp:function(){var e=a();e<u()&&i(+e+1)},countDown:function(){var e=a();e>l()&&i(e-1)},beforeCountNum:function(e){d.current=e},countNum:function(e){var t=u();(e>=l()&&e<=t||""==e)&&i(e)},countNumDone:function(e){var t=u(),a=l();d.current!=e&&i(e<a?a:e>t?t:+e)}}}},33118:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.params_cart={},t.params_buy={checked:1},t.params_cancel={},t.params_fashion_search_l={size:30}},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},12702:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697)),u=c(a(78870));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.has_fetched,a=e.no_item,n=e.title;return r.default.createElement(u.default,{no_item:t&&a,title:n})}l.propTypes={has_fetched:n.default.bool,no_item:n.default.bool,title:u.default.propTypes.title},t.default=l},28746:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=l(r),u=a(93191),c=(l(a(45697)),l(a(23504)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,u=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,u=e}finally{try{!r&&l.return&&l.return()}finally{if(n)throw u}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(""),2),a=t[0],l=t[1];return a?n.default.createElement(u.Redirect,{to:"/fashion/search?q="+a,push:!0}):n.default.createElement("div",{className:"FashionH"},n.default.createElement(c.default,{handled:!1,handleSearchFashion:function(e){e.trim()&&l(e)}}))}o.propTypes={},t.default=o},16939:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=o(a(45697)),u=a(93191),c=a(27179),l=o(a(97817));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.product,a=e.quantity,n=e.children,l=t.id,o=t.name,i=t.vid_pics,d=t.new_price;return r.default.createElement("div",{className:"ProductCartBuy"},r.default.createElement("div",{className:"ProductCartBuy_row display-flex-center"},r.default.createElement("div",{className:"ProductCartBuy_product display-flex"},r.default.createElement(u.Link,{className:l<=0?"pointer-events-none":"",to:"/fashion:"+l,title:t.name},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",null,r.default.createElement("img",{src:i[0].vid_pic,alt:"",width:"50",height:"50"})),r.default.createElement("div",{className:"ProductCartBuy_product-name"},o)))),r.default.createElement("div",{className:"ProductCartBuy_calculate"},r.default.createElement("div",{className:"ProductCartBuy_calculate-row display-flex align-items-center"},r.default.createElement("div",{className:"ProductCartBuy_price"},(0,c.formatNum)(d)),n,r.default.createElement("div",{className:"ProductCartBuy_total label-field"},(0,c.formatNum)(d*a))))))}a(4623),a(87406),i.propTypes={product:n.default.shape({id:n.default.oneOfType([n.default.number,n.default.string]),name:n.default.string,vid_pics:n.default.arrayOf(n.default.shape({vid_pic:n.default.string})),new_price:n.default.number}),quantity:n.default.number,children:n.default.element},i.defaultProps={product:{id:0,name:"",vid_pics:[{vid_pic:l.default}],new_price:0},quantity:0,children:r.default.createElement("div",null)},t.default=i},27675:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=l(a(45697)),u=a(93191),c=l(a(97817));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.id,a=e.name,n=e.picture;return r.default.createElement("div",{className:"ShopCartBuy"},r.default.createElement("div",{className:"display-flex"},r.default.createElement(u.Link,{className:"ShopCartBuy_link normal-text label-field hv-cl-blue",to:"/fashion/shop/"+t},r.default.createElement("div",{className:"padding-8px"},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",{className:"ShopCartBuy__picture brs-50"},r.default.createElement("img",{src:n,alt:"",width:"40",height:"40"})),r.default.createElement("h3",{className:"margin-0"},a))))))}a(92757),o.propTypes={id:n.default.number,name:n.default.string,picture:n.default.string},o.defaultProps={id:0,name:"",picture:c.default},t.default=o},84179:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),u=b(n),c=a(12520),l=a(93191),o=a(15130),i=a(41912),d=a(35155),s=a(21092),f=a(33118),m=b(a(48321)),p=a(39309),h=b(a(98989)),_=b(a(12702)),v=a(85651),y=b(a(28746));a(3785);var C=b(a(9837)),E=b(a(2426));function b(e){return e&&e.__esModule?e:{default:e}}function k(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function r(n,u){try{var c=t[n](u),l=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(l).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(l)}("next")}))}}a(65286),t.default=function(e){var t,a,b,N,g,x=(t=k(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.API_FashionCart_LC)("GET",f.params_cart);case 3:t=e.sent,D({carts:t.data,count_checked:t.data.reduce((function(e,t){return e+t.count_checked_product}),0),has_fetched:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return t.apply(this,arguments)}),w=(a=k(regeneratorRuntime.mark((function e(t,a){var n,u,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=A[t].products[a],u=n.checked,n.checked=!u,D(r({},T,{count_checked:B+(u?-1:1)})),c=(0,m.default)({cart_product_model:n.id,checked:1*!u}),e.next=7,(0,i.API_FashionCart_UD)("PUT",c);case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return a.apply(this,arguments)}),P=(b=k(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B==I,A.map((function(e){return e.products.map((function(e){return e.checked=!t,e})),e})),D(r({},T,{count_checked:t?0:I})),a=(0,m.default)({is_checked_all:1,checked:1*!t}),e.next=6,(0,i.API_FashionCart_UD)("PUT",a);case 6:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)}),F=(N=k(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.default)({cart_product_model:t,quantity:a}),e.next=3,(0,i.API_FashionCart_UD)("PUT",r);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return N.apply(this,arguments)}),M=(g=k(regeneratorRuntime.mark((function e(){var t,a,n,u,c,l,o,d,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U((function(){return(0,i.API_FashionCart_UD)("DELETE")}));case 2:for(t=0,a=!0,n=!1,u=void 0,e.prev=6,c=A[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)for(s in o=l.value,d=o.products)d[s].checked&&(d[s]={is_del:!0},o.count_product-=1,t++);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),n=!0,u=e.t0;case 14:e.prev=14,e.prev=15,!a&&c.return&&c.return();case 17:if(e.prev=17,!n){e.next=20;break}throw u;case 20:return e.finish(17);case 21:return e.finish(14);case 22:O((0,v.actionFashionChangeCountCart)(I-t)),q&&D(r({},T,{count_checked:0}));case 24:case"end":return e.stop()}}),e,this,[[6,10,14,22],[15,,17,21]])}))),function(){return g.apply(this,arguments)}),S=(0,n.useContext)(o.context_api).openScreenFloor,I=(0,c.useSelector)((function(e){return e.count_cart_obj})).count_cart,O=(0,c.useDispatch)(),j=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,u=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,u=e}finally{try{!r&&l.return&&l.return()}finally{if(n)throw u}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({carts:[],count_checked:0,has_fetched:!1}),2),T=j[0],D=j[1],A=T.carts,B=T.count_checked,R=T.has_fetched,q=(0,d.useMounted)(),U=(0,s.useScreenFetching)();function L(e,t,a){var r=A[e].products[t];r.quantity=a,F(r.id,a)}(0,n.useEffect)((function(){document.title="Cart",x()}),[]);var G=0==A.reduce((function(e,t){return e+t.count_product}),0);return u.default.createElement("div",{className:"FashionCart"},u.default.createElement("div",null,u.default.createElement(y.default,null)),u.default.createElement("h2",{className:"text-secondary App_title"},"Cart"),u.default.createElement("div",{className:"FashionCart_body "+(G?"display-none":"")},u.default.createElement(C.default,{count_checked:B,count_cart:I,openConfirmDel:function(){(0,p.openScreenConfirm)({openScreenFloor:S,title:"Delete",notification:"Do you want to remove this product from cart?",handleConfirm:M})},onCheckAll:P}),u.default.createElement("div",null,A.map((function(e,t){return u.default.createElement("div",{key:"FashionCart_"+t,className:"FashionCart_action "+(e.count_product?"":"display-none")},u.default.createElement(E.default,{cart_ix:t,products:e.products,shop:e.shop,handleCheckItem:w,handleSetCount:L}))}))),u.default.createElement("div",{className:"FashionCart_buy"},u.default.createElement("div",{className:B?"":"pointer-events-none opacity-05"},u.default.createElement(l.Link,{to:"/fashion/buy"},u.default.createElement("button",{className:"FashionCart_buy-now btn btn-hv btn-active brs-5px cursor-pointer"},"Buy now"))))),u.default.createElement(_.default,{has_fetched:R,no_item:G,title:u.default.createElement("div",{className:"FashionCart_item-title FashionCart_no-product brs-5px box-shadow-1"},"LET'S GO SHOPPING")}),u.default.createElement("div",{className:"width-fit-content margin-auto"},u.default.createElement(h.default,{is_fetching:!R})))}},9837:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=u(a(45697));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.count_checked,a=e.openConfirmDel,n=e.count_cart,u=e.onCheckAll;return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("div",{className:"FashionCart_del brs-5px "+(t?"":"opacity-05"),onClick:a},"delete")),r.default.createElement("div",{className:"FashionCart_item-title box-shadow-1 bg-primary brs-5px"},r.default.createElement("div",{className:"FashionCart_item-title-row display-flex align-items-center label-field"},r.default.createElement("div",{className:"FashionCart__check"},r.default.createElement("input",{type:"checkbox",checked:t==n,onChange:u})),r.default.createElement("div",{className:"FashionCart__name"},"Name"),r.default.createElement("div",{className:"FashionCart__calculate"},"Quantity and Price"))))}c.propTypes={count_checked:n.default.number,count_cart:n.default.number,openConfirmDel:n.default.func,onCheckAll:n.default.func},t.default=c},2426:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=l(a(45697)),u=l(a(27675));a(92827);var c=l(a(28204));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.cart_ix,a=e.products,n=e.shop,l=e.handleCheckItem,o=e.handleCount;return r.default.createElement("div",{className:"bg-primary box-shadow-1"},r.default.createElement(u.default,{id:n.id,name:n.name,picture:n.picture}),r.default.createElement("div",null,a.map((function(e,a){return!e.is_del&&r.default.createElement("div",{key:"FashionCart_product_"+a,className:"FashionCart_item"},r.default.createElement(c.default,{cart_ix:t,cart_product:e,cart_product_ix:a,handleCheckItem:l,handleCount:o}))}))))}o.propTypes={cart_ix:n.default.number,products:n.default.array,shop:n.default.object,handleCheckItem:n.default.func,handleCount:n.default.func},t.default=o},28204:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=l(a(45697)),u=(a(90663),a(93903)),c=l(a(16939));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.cart_ix,a=e.cart_product,n=e.cart_product_ix,l=e.handleCheckItem,o=e.handleSetCount,i=a.product,d=a.quantity,s=a.checked,f=(0,u.useNewCount)({getCount:function(){return d},getMax:C,getMin:function(){return C()>0?1:0},handleSetCount:function(e){return o(t,n,e)}}),m=f.count,p=f.countUp,h=f.countDown,_=f.beforeCountNum,v=f.countNum,y=f.countNumDone;function C(){return i.total}return r.default.createElement("div",{className:"CartItem padding-8px"},r.default.createElement("div",{className:"CartItem_row-product display-flex align-items-center brs-5px"},r.default.createElement("div",{className:"CartItem_check"},r.default.createElement("input",{type:"checkbox",checked:s,onChange:function(){l(t,n)}})),r.default.createElement("div",{className:"CartItem_products"},r.default.createElement(c.default,{product:i,quantity:+m},r.default.createElement("div",{className:"CartItem_count display-flex align-items-center"},r.default.createElement("div",{onClick:h},"-"),r.default.createElement("div",{className:"CartItem__input"},r.default.createElement("input",{className:"inner-spin-none",type:"number",value:m,onFocus:function(e){_(e.target.value)},onChange:function(e){v(e.target.value)},onBlur:function(e){y(e.target.value)}})),r.default.createElement("div",{onClick:p},"+"))))))}a(89844),o.propTypes={cart_product:n.default.shape({checked:n.default.bool,quantity:n.default.number,product:n.default.object})},o.defaultProps={cart_product:{checked:!1,quantity:0,product:{}}},t.default=o},97817:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},4623:(e,t,a)=>{"use strict";a.r(t)},87406:(e,t,a)=>{"use strict";a.r(t)},92757:(e,t,a)=>{"use strict";a.r(t)},3785:(e,t,a)=>{"use strict";a.r(t)},65286:(e,t,a)=>{"use strict";a.r(t)},92827:(e,t,a)=>{"use strict";a.r(t)},89844:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3435.js.map