(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8874],{5306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)("vid_pic-observe opacity-0"),2),r=t[0],n=t[1];return(0,a.useEffect)((function(){e.current&&(0,o.default)({elements:[e.current],callback:function(){n("vid_pic-observe opacity-1")}})}),[e]),r};var n,a=r(67294),o=(n=r(66810))&&n.__esModule?n:{default:n}},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,r=e.threshold,n=void 0===r?0:r,a=e.callback,o=void 0===a?function(){}:a,u=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),o())}))}),{threshold:n});t.forEach((function(e){u.observe(e)}))}},17089:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=document.getElementsByClassName(e)[0].getBoundingClientRect().width,a=document.getElementsByClassName(t)[0].getBoundingClientRect().width,o=a*r,u=Math.floor(n/a)*a,l=o-n;return[u,l]}},62944:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting?(e.target.dataset.appearance=!0,t.unobserve(e.target)):e.target.dataset.appearance&&(e.target.dataset.appearance=!1,t.unobserve(e.target))}))}),{threshold:.9}).observe(e)}},15765:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),a=r(93191),o=c(r(45697)),u=r(27179),l=c(r(19400)),i=c(r(86383));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.num_row_info,r=e.link,o=e.img,c=e.name,s=e.in_stock,d=e.new_price,f=e.old_price,p=e.discount,m=e.installment;return c?n.default.createElement("div",{className:"ProductItem padding-8px pos-rel",title:c},n.default.createElement(a.Link,{to:r,className:"normal-text hv-cl-blue"},n.default.createElement("div",{className:"ProductItem_head pos-rel padding-top-100per"},n.default.createElement(l.default,{vid_pic:o,type:"img",img_props:{className:"ProductItem_head-img pos-abs left-0 bottom-0 wh-100 brs-5px object-fit-cover"}})),n.default.createElement("div",{className:"ProductItem_foot font-14px"},n.default.createElement("div",{className:"ProductItem_name wk-box-vertical line-clamp-2 overflow-hidden font-400"},c),n.default.createElement("div",{className:"text-red"},s),n.default.createElement("div",{className:"ProductItem_price text-nowrap"},n.default.createElement("span",{className:"margin-right-5px font-400 font-italic color-fashion"},(0,u.formatNum)(d),n.default.createElement("sup",{className:"font-10px"},"đ")),f?n.default.createElement("del",{className:"text-del font-11px"},(0,u.formatNum)(f),n.default.createElement("sup",{className:"font-10px"},"đ")):null))),p&&n.default.createElement("div",{className:"ProductItem_discount text-red"},-p+"%"),void 0!==m&&n.default.createElement("div",{className:"ProductItem_installment brs-5px"},m,"%")):n.default.createElement(i.default,{num_row_info:t})}r(82463),s.propTypes={num_row_info:o.default.number,link:o.default.string,img:o.default.string,name:o.default.string,in_stock:o.default.string,new_price:o.default.number,old_price:o.default.number,discount:o.default.oneOfType([o.default.string,o.default.number]),installment:o.default.oneOfType([o.default.string,o.default.number])},s.defaultProps={num_row_info:4},t.default=s},86383:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),u(r(29875))),o=u(r(97817));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.num_row_info;return n.default.createElement("div",{className:"ProductItem padding-8px pos-rel"},n.default.createElement("div",{className:"ProductItem_head"},n.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},n.default.createElement("img",{src:o.default,alt:""}))),n.default.createElement("div",{className:"ProductItem_foot"},n.default.createElement(a.default,{num:t})))}l.propTypes={},t.default=l},19400:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=c(a),u=c(r(45697)),l=r(5306),i=r(32006);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.vid_pic,r=e.type,u=e.video_props,c=e.img_props,s=(0,i.type_video_or_img)(t,r),d=(0,a.useRef)(null),f=(0,l.useObserveVidPic)(d);return"img"==s?o.default.createElement("img",n({ref:d,className:""+f,"data-src":t,alt:""},c)):"video"==s?o.default.createElement("video",n({ref:d,className:""+f,"data-src":t},u)):null}s.propTypes={vid_pic:u.default.string,type:u.default.string,video_props:u.default.object,img_props:u.default.object},s.defaultProps={video_props:{},img_props:{}},t.default=s},87934:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=u(r(45697)),o=u(r(15765));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.products;return n.default.createElement("div",{className:"ProductContent bg-primary"},n.default.createElement("div",{className:"ProductContent_row display-flex flex-wrap"},t.map((function(e,t){return n.default.createElement("div",{key:t,className:"ProductContent_item padding-8px border-blur"},n.default.createElement(o.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment}))}))))}r(90548),l.propTypes={products:a.default.array},t.default=l},98874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=r(67294),u=f(o),l=(f(r(45697)),r(25770)),i=r(35155),c=f(r(37824)),s=f(r(38326)),d=f(r(46163));function f(e){return e&&e.__esModule?e:{default:e}}r(37981);var p=[1,2,3,4,5,6],m=[1,2,3,4,5,6,7,8,9,10,11,12],_={pk:-1,gte_price:0,lte_price:1e8,in_stock:"",page:1};function v(e){var t,r,f=(t=regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.API_PhoneLaptop_L)(n({},_,t));case 3:a=e.sent,A&&r(a.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e,t){return r.apply(this,arguments)}),v=(0,o.useState)(m),h=a(v,2),y=h[0],b=h[1],g=(0,o.useState)(p),P=a(g,2),E=P[0],x=P[1],w=(0,o.useState)(p),N=a(w,2),k=N[0],O=N[1],j=(0,o.useRef)(null),M=(0,o.useRef)(null),I=(0,o.useRef)(null),A=(0,i.useMounted)();return(0,o.useEffect)((function(){document.title="Phone Laptop",(0,c.default)({elm:j.current,callback:function(){return f({is_hot:1,size:12},b)}}),(0,c.default)({elm:M.current,callback:function(){return f({type_product:"phone",size:15},x)}}),(0,c.default)({elm:I.current,callback:function(){return f({type_product:"laptop",size:15},O)}})}),[]),u.default.createElement("div",{className:"PhoneLaptop fashion-width padding-top-20px"},u.default.createElement("div",{ref:j,className:"PhoneLaptop_banner margin-bottom-20px"},u.default.createElement(s.default,{products:y})),u.default.createElement("div",{ref:M,className:"PhoneLaptop_phone margin-bottom-20px"},u.default.createElement(d.default,{products:E,title:"Phone",link:"/phone-laptop-phones"})),u.default.createElement("div",{ref:I,className:"PhoneLaptop_laptop"},u.default.createElement(d.default,{products:k,title:"Laptop",link:"/phone-laptop-laptops"})))}v.propTypes={},t.default=v},38326:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(67294),u=f(o),l=f(r(45697)),i=f(r(17089)),c=f(r(62944)),s=f(r(61498));r(39480);var d=f(r(15765));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(44149);var _=function(e){function t(){var e,r,a;p(this,t);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return r=a=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={translateX:0},a.refProductAnimate=function(e){null!=e&&(a.ref_product_animate=e)},a.makeBtnDisabled=function(){a.stop_auto=!0,a.just_click=!0,setTimeout((function(){a.just_click=!1}),1e3)},a.handleNextPrev=function(e){if(!a.just_click){var t=(0,i.default)("ProductsAnimate_row","ProductsAnimate_item_0",a.props.products.length),r=n(t,2),o=r[0],u=r[1];e(a.state.translateX,o,u),a.makeBtnDisabled()}},a.nextPhones=function(){a.handleNextPrev((function(e,t,r){a.setState({translateX:e>=r?0:e+t<r?e+t:r})}))},a.prevPhones=function(){a.handleNextPrev((function(e,t,r){a.setState({translateX:0==e?r:e-t<0?0:e-t})}))},a.autoNext=function(){a.mounted&&("false"!=a.ref_product_animate.dataset.appearance&&(a.stop_auto||a.nextPhones(),a.stop_auto=!1),setTimeout((function(){(0,c.default)(a.ref_product_animate),setTimeout((function(){a.autoNext()}),1e3)}),7e3))},m(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.just_click=!1,this.stop_auto=!0,this.autoNext()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.translateX,t=this.props.products;return u.default.createElement("div",{className:"ProductsAnimate"},u.default.createElement("h2",{className:"ProductsAnimate_title padding-y-10px text-align-center text-white font-16px font-500 text-upper"},"Sản phẩm nổi bật"),u.default.createElement("div",{className:"padding-y-20px"},u.default.createElement("div",{ref:this.refProductAnimate,className:"ProductsAnimate_contain brs-5px box-shadow-1","data-appearance":"false"},u.default.createElement("div",{className:"ProductsAnimate_row display-flex",style:{transform:"translateX("+-e+"px)"}},t.map((function(e,t){return u.default.createElement("div",{key:t,className:"ProductsAnimate_item flex-shrink-0 ProductsAnimate_item_"+t},u.default.createElement(d.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment,img_or_dataset:t<6}))}))),u.default.createElement("div",{className:"text-light"},u.default.createElement(s.default,{handleNext:this.nextPhones,handlePrev:this.prevPhones})))))}}]),t}(o.Component);_.propTypes={products:l.default.array},t.default=_},46163:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=r(93191),o=l(r(45697)),u=l(r(87934));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.products,r=e.title,o=e.link;return n.default.createElement("div",{className:"SpecProducts"},n.default.createElement("div",{className:"bg-gold"},n.default.createElement("h2",{className:"padding-y-10px text-align-center text-upper font-500 font-16px"},n.default.createElement(a.Link,{className:"SpecProducts_text text-white",to:o},r))),n.default.createElement("div",{className:"SpecProducts_list"},n.default.createElement(u.default,{products:t})))}r(20802),i.propTypes={products:o.default.array},t.default=i},97817:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},82463:(e,t,r)=>{"use strict";r.r(t)},90548:(e,t,r)=>{"use strict";r.r(t)},37981:(e,t,r)=>{"use strict";r.r(t)},39480:(e,t,r)=>{"use strict";r.r(t)},44149:(e,t,r)=>{"use strict";r.r(t)},20802:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=8874.js.map