(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8874],{28308:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useMounted=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!0),2),t=e[0],a=e[1];return(0,r.useEffect)((function(){return function(){a(!1)}}),[]),t};var r=a(67294)},35682:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("vid_pic-observe opacity-0"),2),a=t[0],r=t[1];return(0,n.useEffect)((function(){e.current&&(0,l.default)({elements:[e.current],callback:function(){r("vid_pic-observe opacity-1")}})}),[e]),a};var r,n=a(67294),l=(r=a(66810))&&r.__esModule?r:{default:r}},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,a=e.threshold,r=void 0===a?0:a,n=e.callback,l=void 0===n?function(){}:n,u=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),l())}))}),{threshold:r});t.forEach((function(e){u.observe(e)}))}},17089:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=document.getElementsByClassName(e)[0].getBoundingClientRect().width,n=document.getElementsByClassName(t)[0].getBoundingClientRect().width,l=n*a,u=Math.floor(r/n)*n,o=l-r;return[u,o]}},62944:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting?(e.target.dataset.appearance=!0,t.unobserve(e.target)):e.target.dataset.appearance&&(e.target.dataset.appearance=!1,t.unobserve(e.target))}))}),{threshold:.9}).observe(e)}},25770:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PhoneOrder_C=t.CreateFilterAllProducts=t.API_PhoneLaptop_R=t.API_FilterPhoneLaptop_L=t.API_PhoneLaptop_L=void 0;var r,n=(r=a(62667))&&r.__esModule?r:{default:r},l=a(50918),u=a(55835);t.API_PhoneLaptop_L=function(e){return(0,l.API_FakeReal)(Array(12).fill(u.default_phone_arr[0]),(function(){return(0,n.default)({url:"/phone/list/",params:e})}),e)},t.API_FilterPhoneLaptop_L=function(e){return(0,l.API_FakeReal)(Array(12).fill(u.default_phone_arr[0]),(function(){return(0,n.default)({url:"/phone/list-filter/",params:e})}),e)},t.API_PhoneLaptop_R=function(e){return(0,l.API_FakeReal)(u.default_phone_arr[0],(function(){return(0,n.default)({url:"/phone/"+e+"/"})}))},t.CreateFilterAllProducts=function(e){return(0,n.default)({method:"POST",url:"/phone/create/",data:e})},t.API_PhoneOrder_C=function(e){return(0,l.API_FakeReal)({},(function(){return(0,n.default)({url:"/phone/order-c/",method:"POST",data:e})}))}},97284:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(67294),l=i(n),u=i(a(37930)),o=i(a(25061));function i(e){return e&&e.__esModule?e:{default:e}}a(36233),t.default=function(e){var t=(0,n.useState)(!1),a=r(t,2),i=a[0],c=a[1],s=(0,n.useState)(!1),d=r(s,2),f=d[0],p=d[1];return l.default.createElement("div",{className:location.pathname.includes("phone")?"Contact":"display-none"},l.default.createElement("div",{className:"Contact_close"},l.default.createElement("div",{onClick:function(){c(!i),f&&p(!1)},title:i?"Close":"Contact"},i?l.default.createElement(u.default,{x:400}):l.default.createElement(u.default,{x:200}))),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("div",{className:"Contact_main "+(i?"":"Contact_hide")},l.default.createElement("div",{className:"Contact_phone"},l.default.createElement("div",{className:"Contact_phone-number",onClick:function(){!f&&p(!0)}},l.default.createElement("img",{className:i?"Contact_phone-img":"",src:o.default,alt:""})),l.default.createElement("div",{className:i?"Contact_phone-animation":""})),l.default.createElement("div",{className:"Contact_web"},l.default.createElement("div",{className:"Contact_web-online"},"FB"),l.default.createElement("div",{className:"Contact_web-online"},"ZL"),l.default.createElement("div",{className:"Contact_web-online"},"TT")),l.default.createElement("div",{className:"Contact_number "+(f?"":"display-none")},l.default.createElement("div",{className:"label-field"},"0987.654.321"))))}},15765:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=a(93191),l=c(a(45697)),u=a(27179),o=c(a(19400)),i=c(a(86383));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.img_or_dataset,a=e.num_row_info,l=e.link,c=e.img,s=e.name,d=e.in_stock,f=e.new_price,p=e.old_price,m=e.discount,_=e.installment;return s?r.default.createElement("div",{className:"ProductItem padding-8px position-rel",title:s},r.default.createElement(n.Link,{to:l,className:"normal-text hv-cl-blue"},r.default.createElement("div",{className:"ProductItem_head"},r.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},t?r.default.createElement("img",{src:c,alt:""}):r.default.createElement(o.default,{vid_pic:c}))),r.default.createElement("div",{className:"ProductItem_foot"},r.default.createElement("div",{className:"ProductItem_name label-field"},s),d&&r.default.createElement("div",{className:"text-red"},d),r.default.createElement("div",{className:"ProductItem_price"},f&&r.default.createElement("div",{className:"label-field font-italic"},(0,u.formatNum)(f)),p&&r.default.createElement("div",null,r.default.createElement("span",{className:"ProductItem_old-price"},(0,u.formatNum)(p)),r.default.createElement("sup",{className:"dv-vnd"},"đ"))))),m&&r.default.createElement("div",{className:"ProductItem_discount text-red"},-m+"%"),void 0!==_&&r.default.createElement("div",{className:"ProductItem_installment brs-5px"},_,"%")):r.default.createElement(i.default,{num_row_info:a})}a(82463),s.propTypes={img_or_dataset:l.default.bool,num_row_info:l.default.number,link:l.default.string,img:l.default.string,name:l.default.string,in_stock:l.default.string,new_price:l.default.oneOfType([l.default.string,l.default.number]),old_price:l.default.oneOfType([l.default.string,l.default.number]),discount:l.default.oneOfType([l.default.string,l.default.number]),installment:l.default.oneOfType([l.default.string,l.default.number])},s.defaultProps={img_or_dataset:!0,num_row_info:4},t.default=s},86383:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),u(a(29875))),l=u(a(97817));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.num_row_info;return r.default.createElement("div",{className:"ProductItem padding-8px position-rel"},r.default.createElement("div",{className:"ProductItem_head"},r.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},r.default.createElement("img",{src:l.default,alt:""}))),r.default.createElement("div",{className:"ProductItem_foot"},r.default.createElement(n.default,{num:t})))}o.propTypes={},t.default=o},19400:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),l=c(n),u=c(a(45697)),o=a(35682),i=a(32006);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.vid_pic,a=e.type,u=e.video_props,c=e.img_props,s=(0,i.type_video_or_img)(t,a),d=(0,n.useRef)(null),f=(0,o.useObserveVidPic)(d);return"img"==s?l.default.createElement("img",r({ref:d,className:""+f,"data-src":t,alt:""},c)):"video"==s?l.default.createElement("video",r({ref:d,className:""+f,"data-src":t},u)):l.default.createElement("div",null)}s.propTypes={vid_pic:u.default.string,type:u.default.string,video_props:u.default.object,img_props:u.default.object},s.defaultProps={video_props:{},img_props:{}},t.default=s},55835:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_phone_arr=void 0;var r,n=(r=a(51374))&&r.__esModule?r:{default:r};t.default_phone_arr=[{id:1,url:n.default,in_stock:"in stock",discount:10,installment:0,gift:"asd asd\nad asd\nasd asd sad",product_sets:"asd asd asd\nasdsadas\nasd asdsadas asd sad\nasd asd asda",cpu:"500",os:"Android",ram:"3G",internal_memory:"32G",camera:"Full HD",memory_stick:"120G",type_product:"phone",name:"Abc Xyz",new_price:8e6,old_price:85e5,types:[{url:n.default,title:"Black"},{url:n.default,title:"Blue"},{url:n.default,title:"White"}],promotion:"ad asd ad asd as asd asd \nad ada d asda dsa dasd \nasd asd asd as asd asd asd asd"}]},87934:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=u(a(45697)),l=u(a(15765));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.products;return r.default.createElement("div",{className:"ProductContent padding-8px bg-primary"},r.default.createElement("div",{className:"ProductContent_row display-flex justify-content-center flex-wrap"},t.map((function(e,t){return r.default.createElement("div",{key:t,className:"ProductContent_item"},r.default.createElement(l.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment}))}))))}a(90548),o.propTypes={products:n.default.array},t.default=o},98874:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=a(67294),u=p(l),o=(p(a(45697)),a(25770)),i=a(28308),c=p(a(37824)),s=p(a(97284)),d=p(a(38326)),f=p(a(46163));function p(e){return e&&e.__esModule?e:{default:e}}a(37981);var m=[1,2,3,4,5,6],_=[1,2,3,4,5,6,7,8,9,10,11,12],v={pk:-1,gte_price:0,lte_price:1e8,in_stock:"",page:1};function h(e){var t,a,p=(t=regeneratorRuntime.mark((function e(t,a){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.API_PhoneLaptop_L)(r({},v,t));case 3:n=e.sent,M&&a(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function r(n,l){try{var u=e[n](l),o=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(o)}("next")}))},function(e,t){return a.apply(this,arguments)}),h=(0,l.useState)(_),y=n(h,2),b=y[0],P=y[1],E=(0,l.useState)(m),g=n(E,2),N=g[0],w=g[1],k=(0,l.useState)(m),O=n(k,2),A=O[0],j=O[1],x=(0,l.useRef)(null),I=(0,l.useRef)(null),C=(0,l.useRef)(null),M=(0,i.useMounted)();return(0,l.useEffect)((function(){document.title="Phone Laptop",(0,c.default)(x.current,(function(){return p({is_hot:1,size:12},P)}),0),(0,c.default)(I.current,(function(){return p({type_product:"phone",size:15},w)}),0),(0,c.default)(C.current,(function(){return p({type_product:"laptop",size:15},j)}),0)}),[]),u.default.createElement("div",{className:"PhoneLaptop"},u.default.createElement("div",{ref:x,className:"PhoneLaptop_banner"},u.default.createElement(d.default,{products:b})),u.default.createElement("div",{ref:I,className:"PhoneLaptop_phone"},u.default.createElement(f.default,{products:N,title:"Phone",link:"/phone-laptop-phones"})),u.default.createElement("div",{ref:C,className:"PhoneLaptop_laptop"},u.default.createElement(f.default,{products:A,title:"Laptop",link:"/phone-laptop-laptops"})),u.default.createElement(s.default,null))}h.propTypes={},t.default=h},38326:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a(67294),u=f(l),o=f(a(45697)),i=f(a(17089)),c=f(a(62944)),s=f(a(61498));a(39480);var d=f(a(15765));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(44149);var _=function(e){function t(){var e,a,n;p(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return a=n=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={translateX:0},n.refProductAnimate=function(e){null!=e&&(n.ref_product_animate=e)},n.makeBtnDisabled=function(){n.stop_auto=!0,n.just_click=!0,setTimeout((function(){n.just_click=!1}),1e3)},n.handleNextPrev=function(e){if(!n.just_click){var t=(0,i.default)("ProductsAnimate_row","ProductsAnimate__0",n.props.products.length),a=r(t,2),l=a[0],u=a[1];e(n.state.translateX,l,u),n.makeBtnDisabled()}},n.nextPhones=function(){n.handleNextPrev((function(e,t,a){n.setState({translateX:e>=a?0:e+t<a?e+t:a})}))},n.prevPhones=function(){n.handleNextPrev((function(e,t,a){n.setState({translateX:0==e?a:e-t<0?0:e-t})}))},n.autoNext=function(){n.mounted&&("false"!=n.ref_product_animate.dataset.appearance&&(n.stop_auto||n.nextPhones(),n.stop_auto=!1),setTimeout((function(){(0,c.default)(n.ref_product_animate),setTimeout((function(){n.autoNext()}),1e3)}),7e3))},m(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.just_click=!1,this.stop_auto=!0,this.autoNext()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.translateX,t=this.props.products;return u.default.createElement("div",{className:"ProductsAnimate"},u.default.createElement("h3",{className:"ProductsAnimate_title App_title margin-0"},"HOT PRODUCTS"),u.default.createElement("div",null,u.default.createElement("div",{ref:this.refProductAnimate,className:"ProductsAnimate_contain brs-5px box-shadow-1","data-appearance":"false"},u.default.createElement("div",{className:"ProductsAnimate_row",style:{transform:"translateX("+-e+"px)"}},t.map((function(e,t){return u.default.createElement("div",{className:"ProductsAnimate__"+t,key:"ProductsAnimate__"+t},u.default.createElement(d.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment,img_or_dataset:t<6}))}))),u.default.createElement(s.default,{handleNext:this.nextPhones,handlePrev:this.prevPhones}))))}}]),t}(l.Component);_.propTypes={products:o.default.array},t.default=_},46163:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=a(93191),l=o(a(45697)),u=o(a(87934));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.products,a=e.title,l=e.link;return r.default.createElement("div",{className:"SpecProducts"},r.default.createElement("div",{className:"SpecProducts_title"},r.default.createElement("h3",{className:"App_title margin-0"},r.default.createElement(n.Link,{className:"SpecProducts_text normal-text",to:l},a))),r.default.createElement("div",{className:"SpecProducts_list"},r.default.createElement(u.default,{products:t})))}a(20802),i.propTypes={products:l.default.array},t.default=i},97817:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},36233:(e,t,a)=>{"use strict";a.r(t)},82463:(e,t,a)=>{"use strict";a.r(t)},90548:(e,t,a)=>{"use strict";a.r(t)},37981:(e,t,a)=>{"use strict";a.r(t)},39480:(e,t,a)=>{"use strict";a.r(t)},44149:(e,t,a)=>{"use strict";a.r(t)},20802:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=8874.js.map