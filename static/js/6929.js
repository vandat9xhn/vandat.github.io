(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6929],{5306:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)("vid_pic-observe opacity-0"),2),a=t[0],n=t[1];return(0,l.useEffect)((function(){e.current&&(0,r.default)({elements:[e.current],callback:function(){n("vid_pic-observe opacity-1")}})}),[e]),a};var n,l=a(67294),r=(n=a(66810))&&n.__esModule?n:{default:n}},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,a=e.threshold,n=void 0===a?0:a,l=e.callback,r=void 0===l?function(){}:l,u=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),r())}))}),{threshold:n});t.forEach((function(e){u.observe(e)}))}},14565:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openScreenNotice=function(e){var t=e.openScreenOnce,a=e.ComponentNotice;t({ScreenOneComponent:n.default.createElement(u,{ComponentNotice:a})})};var n=r(a(67294)),l=(r(a(45697)),r(a(3995)));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.ComponentNotice;return n.default.createElement(l.default,null,t)}u.propTypes={},t.default=u},4124:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294)),l=r(a(45697));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children,a=e.onClick,l=e.type,r=e.disabled,u=e.ripple_type,c=e.title;return n.default.createElement("button",{className:"ButtonRipple btn label-field "+(r?"opacity-05 pointer-events-none":"cursor-pointer"),type:l,title:c,disabled:r,onClick:a},n.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+u+" "+(r?"display-none":"")}),t)}a(40824),u.propTypes={type:l.default.string,title:l.default.string,disabled:l.default.bool,ripple_type:l.default.string,children:l.default.any,onClick:l.default.func},u.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=u},15765:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),l=a(93191),r=i(a(45697)),u=a(27179),c=i(a(19400)),o=i(a(86383));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.num_row_info,a=e.link,r=e.img,i=e.name,d=e.in_stock,s=e.new_price,f=e.old_price,m=e.discount,p=e.installment;return i?n.default.createElement("div",{className:"ProductItem padding-8px position-rel",title:i},n.default.createElement(l.Link,{to:a,className:"normal-text hv-cl-blue"},n.default.createElement("div",{className:"ProductItem_head"},n.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},n.default.createElement(c.default,{vid_pic:r}))),n.default.createElement("div",{className:"ProductItem_foot"},n.default.createElement("div",{className:"ProductItem_name label-field"},i),d&&n.default.createElement("div",{className:"text-red"},d),n.default.createElement("div",{className:"ProductItem_price"},s&&n.default.createElement("div",{className:"label-field font-italic"},(0,u.formatNum)(s)),f&&n.default.createElement("div",null,n.default.createElement("span",{className:"ProductItem_old-price"},(0,u.formatNum)(f)),n.default.createElement("sup",{className:"dv-vnd"},"đ"))))),m&&n.default.createElement("div",{className:"ProductItem_discount text-red"},-m+"%"),void 0!==p&&n.default.createElement("div",{className:"ProductItem_installment brs-5px"},p,"%")):n.default.createElement(o.default,{num_row_info:t})}a(82463),d.propTypes={num_row_info:r.default.number,link:r.default.string,img:r.default.string,name:r.default.string,in_stock:r.default.string,new_price:r.default.oneOfType([r.default.string,r.default.number]),old_price:r.default.oneOfType([r.default.string,r.default.number]),discount:r.default.oneOfType([r.default.string,r.default.number]),installment:r.default.oneOfType([r.default.string,r.default.number])},d.defaultProps={num_row_info:4},t.default=d},86383:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),l=(u(a(45697)),u(a(29875))),r=u(a(97817));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.num_row_info;return n.default.createElement("div",{className:"ProductItem padding-8px position-rel"},n.default.createElement("div",{className:"ProductItem_head"},n.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},n.default.createElement("img",{src:r.default,alt:""}))),n.default.createElement("div",{className:"ProductItem_foot"},n.default.createElement(l.default,{num:t})))}c.propTypes={},t.default=c},3995:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294)),l=r(a(45697));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children;return n.default.createElement("div",{className:"NoticeDiv"},t)}a(83705),u.propTypes={children:l.default.element},t.default=u},19400:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(67294),r=i(l),u=i(a(45697)),c=a(5306),o=a(32006);function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.vid_pic,a=e.type,u=e.video_props,i=e.img_props,d=(0,o.type_video_or_img)(t,a),s=(0,l.useRef)(null),f=(0,c.useObserveVidPic)(s);return"img"==d?r.default.createElement("img",n({ref:s,className:""+f,"data-src":t,alt:""},i)):"video"==d?r.default.createElement("video",n({ref:s,className:""+f,"data-src":t},u)):null}d.propTypes={vid_pic:u.default.string,type:u.default.string,video_props:u.default.object,img_props:u.default.object},d.defaultProps={video_props:{},img_props:{}},t.default=d},46929:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(67294),r=y(l),u=a(93191),c=(y(a(45697)),a(15130)),o=a(25770),i=a(21092),d=y(a(48321)),s=y(a(37824)),f=a(14565),m=y(a(71975)),p=y(a(69879)),_=y(a(98270)),v=y(a(84724));function y(e){return e&&e.__esModule?e:{default:e}}function h(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function n(l,r){try{var u=t[l](r),c=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(c).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(c)}("next")}))}}a(56405);var E={product:{},action:"",open_discount:!1,type_buy_ix:0,has_fetched:!1};function b(){var e,t,a=(e=h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(E),e.next=4,(0,o.API_PhoneLaptop_R)(b);case 4:t=e.sent,document.title=t.data.name,T((function(e){return n({},e,{product:t.data,has_fetched:!0})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return e.apply(this,arguments)}),y=(t=h(regeneratorRuntime.mark((function e(t,a,l){var u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,d.default)({full_name:t,address:a,phone_number:l,phone_color:M,phone_model:b,quantity:1,status:"order"}),e.next=3,j((function(){return(0,o.API_PhoneOrder_C)(u)}));case 3:T(n({},w,{action:"",type_buy_ix:0,open_discount:!1})),(0,f.openScreenNotice)({openScreenOnce:P,ComponentNotice:r.default.createElement("div",{className:"PhoneLaptopDetail_notice-success brs-5px bg-loader"},"Order successfully")}),setTimeout((function(){g()}),800);case 6:case"end":return e.stop()}}),e,this)}))),function(e,a,n){return t.apply(this,arguments)}),b=+(0,u.useParams)().id,N=(0,l.useContext)(c.context_api),P=N.openScreenOnce,g=N.closeScreenOnce,x=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)(E),2),w=x[0],T=x[1],k=w.product,O=w.action,C=w.open_discount,M=w.type_buy_ix,B=w.has_fetched,I=(0,l.useRef)(null),j=(0,i.useScreenFetching)();function D(){T(n({},w,{action:"type_buy"}))}return(0,l.useEffect)((function(){window.scrollTo(0,0),(0,s.default)(I.current,a,0)}),[b]),r.default.createElement("div",{className:"bg-primary"},r.default.createElement("div",{ref:I},r.default.createElement(m.default,{product:k,has_fetched:B,openTypeBuy:D})),r.default.createElement("hr",{className:"App_hr-bg"}),r.default.createElement("div",null,r.default.createElement(p.default,{product_id:b})),r.default.createElement("div",{className:""==O?"display-none":"screen-blur"},r.default.createElement("div",{className:"form-fixed"},r.default.createElement("div",{className:"type_buy"==O?"":"display-none"},r.default.createElement(_.default,{product:k,open_discount:C,type_buy_ix:M,toggleDiscountType:function(){T(n({},w,{open_discount:!C}))},handleChangeTypeBuy:function(e){M!==e&&T(n({},w,{type_buy_ix:e}))},openConfirmBuy:function(){T(n({},w,{action:"confirm_buy"}))},closeTypeBuy:function(){T(n({},w,{action:""}))}})),r.default.createElement("div",{className:"confirm_buy"==O?"":"display-none"},r.default.createElement(v.default,{closeConfirmBuy:function(){D()},handleSubmit:y})))))}b.propTypes={},t.default=b},84160:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294));function l(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.openTypeBuy;return n.default.createElement("div",{className:"PhoneLaptopBuying"},n.default.createElement("div",{className:"PhoneLaptopBuying_row-btn"},n.default.createElement("div",{className:"PhoneLaptopBuying_btn brs-5px",onClick:t},"Buy now"),n.default.createElement("div",{className:"font-italic"},"Delivery or receive at supermarket")))}l(a(45697)),a(81753),r.propTypes={},t.default=r},84724:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),l=c(n),r=c(a(45697)),u=c(a(37930));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.handleSubmit,a=e.closeConfirmBuy,r=(0,n.useRef)(null),c=(0,n.useRef)(null),o=(0,n.useRef)(null);return l.default.createElement("div",null,l.default.createElement("div",{className:"PhoneLaptopConfirmBuy_contain scroll-thin brs-5px box-shadow-1"},l.default.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r.current.value,c.current.value,o.current.value)},autoComplete:"off"},l.default.createElement("div",null,l.default.createElement("label",{className:"label-field"},"Full name"),l.default.createElement("div",{className:"PhoneLaptopConfirmBuy__input"},l.default.createElement("input",{ref:r,type:"text",name:"full_name",required:!0}))),l.default.createElement("div",null,l.default.createElement("label",{className:"label-field"},"Address"),l.default.createElement("div",{className:"PhoneLaptopConfirmBuy__input"},l.default.createElement("input",{ref:c,type:"text",name:"address",required:!0}))),l.default.createElement("div",null,l.default.createElement("label",{className:"label-field"},"Phone"),l.default.createElement("div",{className:"PhoneLaptopConfirmBuy__input"},l.default.createElement("input",{ref:o,type:"tel",name:"phone",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"0123456789",required:!0}))),l.default.createElement("div",{className:"PhoneLaptopConfirmBuy_submit"},l.default.createElement("button",{type:"submit"},"Send information"))),l.default.createElement("div",{className:"PhoneLaptopConfirmBuy_close"},l.default.createElement("div",{className:"PhoneLaptopConfirmBuy_close-icon brs-50 hv-opacity",onClick:a},l.default.createElement(u.default,{y:400,size_icon:"1rem"})))))}a(28374),o.propTypes={handleSubmit:r.default.func,closeConfirmBuy:r.default.func},t.default=o},71975:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),l=i(a(45697)),r=a(27179),u=i(a(29875)),c=i(a(84160)),o=i(a(97817));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.product,a=e.openTypeBuy,l=e.has_fetched,i=t.url,d=t.name,s=t.new_price,f=t.old_price,m=t.in_stock,p=t.discount,_=t.installment,v=t.promotion,y=t.gift,h=t.product_sets,E=t.cpu,b=t.os,N=t.ram,P=t.internal_memory,g=t.camera,x=t.memory_stick,w=l?[{name:"CPU",value:E},{name:"OS",value:b},{name:"RAM",value:N},{name:"Internal memory",value:P},{name:"Camera",value:g},{name:"Memory stick",value:x}]:void 0;return n.default.createElement("div",{className:"ProductDetail"},n.default.createElement("div",{className:"padding-8px"},l?n.default.createElement("h2",{className:"ProductDetail_name margin-0"},d):n.default.createElement("h2",{className:"ProductDetail_name-skeleton margin-0"},n.default.createElement(u.default,null))),n.default.createElement("hr",{className:"App_hr-bg"}),n.default.createElement("div",{className:"ProductDetail_contain"},n.default.createElement("div",{className:"ProductDetail_row display-flex"},n.default.createElement("div",{className:"ProductDetail_col"},n.default.createElement("div",{className:"ProductDetail_image"},n.default.createElement("div",{className:"ProductDetail__img position-rel"},n.default.createElement("img",{className:"wh-100",src:i||o.default,alt:""}),n.default.createElement("div",{className:"ProductDetail__discount"},"-",p,"%"),n.default.createElement("div",{className:"ProductDetail__installment"},"Installment ",_,"%")),l?n.default.createElement("div",null,n.default.createElement("div",null,(0,r.formatNum)(s)," VND"," ",n.default.createElement("del",null,(0,r.formatNum)(f))),n.default.createElement("div",{className:"text-red"},m)):n.default.createElement(u.default,{num:2}))),n.default.createElement("div",{className:"ProductDetail_col"},n.default.createElement("div",null,n.default.createElement("h3",{className:"ProductDetail_specs_title"},"* Promotion:"," "),l?v.split("\n").map((function(e,t){return n.default.createElement("div",{key:"ProductDetail_promotion_"+t},e)})):n.default.createElement(u.default,{num:6})),n.default.createElement("div",null,y)),n.default.createElement("div",{className:"ProductDetail_col"},n.default.createElement("div",null,n.default.createElement("h3",{className:"ProductDetail_specs_title"},"* Product sets:"," "),l?h.split("\n").map((function(e,t){return n.default.createElement("div",{key:"ProductDetail_product_sets_"+t},e)})):n.default.createElement(u.default,{num:6}))))),n.default.createElement("hr",{className:"App_hr-bg"}),n.default.createElement("div",{className:"ProductDetail_specs"},n.default.createElement("h3",{className:"ProductDetail_specs_title"},"* Product specifications:"),l?w.map((function(e,t){return n.default.createElement("div",{key:"ProductDetail_product_specs_"+t},"- ",e.name,": ",e.value)})):n.default.createElement(u.default,{num:6})),n.default.createElement("div",null,n.default.createElement(c.default,{openTypeBuy:a})))}a(27980),d.propTypes={product:l.default.object},t.default=d},69879:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),l=i(n),r=i(a(45697)),u=a(25770),c=i(a(37824)),o=i(a(15765));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t,a,r=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({products:[],has_fetched:!1}),e.next=3,(0,u.API_PhoneLaptop_L)({pk:i,page:1,size:10});case 3:t=e.sent,f({products:t.data.data,has_fetched:!0});case 5:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(l,r){try{var u=e[l](r),c=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(c).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(c)}("next")}))},function(){return a.apply(this,arguments)}),i=e.product_id,d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({products:[],has_fetched:!1}),2),s=d[0],f=d[1],m=s.products,p=s.has_fetched,_=(0,n.useRef)(null);return(0,n.useEffect)((function(){(0,c.default)(_.current,r,0)}),[i]),l.default.createElement("div",{ref:_,className:"RelativeProducts brs-5px padding-8px"},l.default.createElement("h2",null,"Relative"),l.default.createElement("div",{className:"RelativeProducts_row display-flex justify-content-center flex-wrap"},(p?m:Array(5).fill(1)).map((function(e,t){return l.default.createElement("div",{key:"RelativeProducts_item_"+t,className:"RelativeProducts_col"},l.default.createElement(o.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment}))}))))}a(40703),d.propTypes={product_id:r.default.number},t.default=d},98270:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),l=i(a(45697)),r=a(27179),u=i(a(37930)),c=i(a(4124)),o=i(a(12077));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.product,a=e.open_discount,l=e.type_buy_ix,i=e.toggleDiscountType,d=e.handleChangeTypeBuy,s=e.openConfirmBuy,f=e.closeTypeBuy,m=t.name,p=t.new_price,_=t.old_price,v=t.types,y=t.promotion;return n.default.createElement("div",{className:"PhoneLaptopType position-rel scroll-thin bg-primary brs-5px box-shadow-1"},n.default.createElement("div",{className:"PhoneLaptopType_head padding-8px"},n.default.createElement("h3",{className:"margin-0"},m),n.default.createElement("div",null,n.default.createElement("span",{className:"PhoneLaptopType_new-price"},(0,r.formatNum)(p)," vnd"),n.default.createElement("span",{className:"PhoneLaptopType_old-price"},(0,r.formatNum)(_)," vnd"))),n.default.createElement("div",{className:"PhoneLaptopType_body"},n.default.createElement("label",{className:"padding-8px label-field"},"Choose type:"),n.default.createElement("ul",{className:"PhoneLaptopType_list display-flex list-none"},v&&v.map((function(e,t){return n.default.createElement("li",{key:"PhoneLaptopType_"+t},n.default.createElement(o.default,{ix:t,is_active:t==l,url:e.url,title:e.title,handleChangeTypeBuy:d}))})))),n.default.createElement("div",{className:"PhoneLaptopType_bottom padding-8px"},n.default.createElement("div",null,n.default.createElement("div",{className:"label-field width-fit-content cursor-pointer font-italic",onClick:i},a?"Hide discount":"Show more discount")),n.default.createElement("div",{className:a?"PhoneLaptopType_bottom_promotion":"display-none"},y)),n.default.createElement("div",{className:"App_submit display-flex-center"},n.default.createElement(c.default,{type:"text",title:"Buy now",onClick:s},"Buy now")),n.default.createElement("div",{className:"PhoneLaptopType_close"},n.default.createElement("div",{className:"close-icon-small brs-50 hv-opacity cursor-pointer",onClick:f},n.default.createElement(u.default,{y:400,size_icon:"1rem"}))))}a(40474),d.propTypes={types:l.default.array},d.defaultProps={types:[]},t.default=d},12077:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294));function l(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.ix,a=e.is_active,l=e.url,r=e.title,u=e.handleChangeTypeBuy;return n.default.createElement("label",{htmlFor:"TypeItem_phone_"+t,className:"TypeItem padding-8px cursor-pointer"},n.default.createElement("div",{className:"TypeItem_row flex-col display-flex align-items-center"},n.default.createElement("div",null,n.default.createElement("img",{src:l,alt:"",width:"80",height:"100"})),n.default.createElement("div",null,n.default.createElement("input",{id:"TypeItem_phone_"+t,type:"radio",name:"type_buy",checked:a,onChange:function(){u(t)}})),n.default.createElement("div",null,r)))}l(a(45697)),a(98977),r.propTypes={},t.default=r},97817:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},40824:(e,t,a)=>{"use strict";a.r(t)},82463:(e,t,a)=>{"use strict";a.r(t)},83705:(e,t,a)=>{"use strict";a.r(t)},56405:(e,t,a)=>{"use strict";a.r(t)},81753:(e,t,a)=>{"use strict";a.r(t)},28374:(e,t,a)=>{"use strict";a.r(t)},27980:(e,t,a)=>{"use strict";a.r(t)},40703:(e,t,a)=>{"use strict";a.r(t)},40474:(e,t,a)=>{"use strict";a.r(t)},98977:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=6929.js.map