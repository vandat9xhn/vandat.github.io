(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3861],{73674:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_City_UD=t.API_City_C=void 0;var r,l=a(50918),n=(r=a(87421))&&r.__esModule?r:{default:r};t.API_City_C=function(e){return(0,l.API_FakeReal)({},(function(){return(0,n.default)({url:"/api01/c-city/",method:"POST",data:e})}))},t.API_City_UD=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,l.API_FakeReal)({},(function(){return(0,n.default)({url:"/api01/ud-city/"+e+"/",method:t,data:a})}))}},4124:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294)),l=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.children,a=e.onClick,l=e.type,n=e.disabled,i=e.ripple_type,u=e.title;return r.default.createElement("button",{className:"ButtonRipple label-field "+(n?"opacity-5 pointer-events-none":"cursor-pointer"),type:l,title:u,disabled:n,onClick:a},r.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+i+" "+(n?"display-none":"")}),t)}a(40824),i.propTypes={type:l.default.string,title:l.default.string,disabled:l.default.bool,ripple_type:l.default.string,children:l.default.any,onClick:l.default.func},i.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=i},22607:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=d(a(67294)),n=d(a(45697)),i=d(a(57108)),u=d(a(39475));function d(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.field,a=e.form,n=e.type,d=e.label,o=e.placeholder,c=e.dataList,s=e.help,f=e.max_length,m=t.name,p=a.touched,y=a.errors,v=p[m]&&y[m],_="list_"+m+"_"+d;return l.default.createElement("div",{className:"InputText"},l.default.createElement("div",null,l.default.createElement("label",{className:"label-field",htmlFor:m},d)),l.default.createElement("div",null,l.default.createElement("input",r({className:"InputText_input brs-5px "+(p[m]&&!y[m]?"InputText_valid":"")+" "+(p[m]&&y[m]?"InputText_invalid":"")},t,{placeholder:o,type:n,list:_,maxLength:f}))),l.default.createElement("datalist",{id:_},c.map((function(e,t){return l.default.createElement("option",{key:"InputText_"+t},e)}))),s&&l.default.createElement("div",{className:"help-text"},l.default.createElement(i.default,{Icon:u.default,x:600},"* ",s)),v&&l.default.createElement("div",{className:"error-field"},l.default.createElement(i.default,{Icon:u.default,x:400,y:400},y[m])))}a(17727),o.propTypes={field:n.default.object,form:n.default.object,type:n.default.string,label:n.default.string,placeholder:n.default.string,dataList:n.default.array,help:n.default.string,max_length:n.default.number},o.defaultProps={dataList:[],type:"text"},t.default=o},2278:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_arr_city=t.initialValues=t.validationSchema=void 0;var r,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(57503)),n=(r=a(81972))&&r.__esModule?r:{default:r};t.validationSchema=l.object().shape({city:l.string().required("City is required").min(3,"At least 3 letters").max(50,"max 50 letters"),street:l.string().required("City is required").min(3,"At least 3 letters").max(50,"max 50 letters"),image:l.mixed().required("Image is required")}),t.initialValues={city:"",street:"",image:""},t.default_arr_city=[{user:{id:1,first_name:"My",last_name:"My",picture:n.default},city:"Ha Noi",street:"Duong lua",image:n.default,is_user:!0,count_his:2}]},28108:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),l=s(r),n=s(a(45697)),i=a(18948),u=a(2278),d=s(a(22607)),o=s(a(4124)),c=s(a(90520));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.initialValues,a=e.title_submit,n=e.handleSubmit,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(""),2),f=s[0],m=s[1];function p(e){m(e)}return l.default.createElement(i.Formik,{initialValues:t,validationSchema:u.validationSchema,onSubmit:function(e,t){n({city:e.city,street:e.street,image:e.image,file:f})}},(function(e){return l.default.createElement(i.Form,{className:"CityForm App_Form brs-5px App_box_shadow scroll-thin",autoComplete:"off"},l.default.createElement(i.FastField,{name:"city",component:d.default,label:"City",placeholder:"Your city...",dataList:["Ha Noi","Ho Chi Minh","Da Nang"],help:"5-50 letters"}),l.default.createElement(i.FastField,{name:"street",component:d.default,label:"Street",placeholder:"Your Street...",dataList:["Nguyen Trai","Nguyen Hue","Quang Trung","Tran Phu"],help:"5-50 letters"}),l.default.createElement(i.FastField,{name:"image",component:c.default,label:"Image",handleImageChange:p}),l.default.createElement("br",null),l.default.createElement("div",{className:"App_submit"},l.default.createElement(o.default,{type:"submit",title:"Create new city"},a)))}))}a(18886),f.propTypes={initialValues:n.default.object,title_submit:n.default.string,handleSubmit:n.default.func},f.defaultProps={title_submit:"Upload"},t.default=f},90520:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=a(67294),n=c(l),i=c(a(45697)),u=c(a(23596)),d=c(a(86804)),o=c(a(37279));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.form,a=e.field,i=e.type,c=e.label,s=e.handleImageChange,f=a.name,m=a.value,p=t.touched,y=t.errors,v=p[f]&&y[f],_=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)(m?[{url:m,type:f}]:[]),2),h=_[0],b=_[1];return n.default.createElement("div",{className:"InputImage"},n.default.createElement("div",null,n.default.createElement("label",{className:"label-field",htmlFor:f},c)),n.default.createElement("div",{className:"InputImage_file"},n.default.createElement(d.default,r({width:"2rem",type:i},a,{onChange:function(e){var a=e.target.files;if(a.length){var r=new FileReader;r.onload=function(){b([{url:r.result,type:a[0].type}]),t.setFieldValue("image",r.result)},r.readAsDataURL(a[0]),s(a[0])}},accept:"image/*"}),n.default.createElement(o.default,null))),v&&n.default.createElement("div",{className:"error-field"},v),n.default.createElement("div",{className:"InputImage_preview"},n.default.createElement(u.default,{deleteAnItem:function(){b([]),s(""),t.setFieldValue("image","")},delete_in_pic:!0,urls:h})))}a(49764),s.propTypes={form:i.default.object,field:i.default.object,type:i.default.string,label:i.default.string,onImageChange:i.default.func},s.defaultProps={type:"file"},t.default=s},23861:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=a(67294),n=m(l),i=a(93191),u=a(73674),d=m(a(48321)),o=m(a(11781)),c=m(a(27883)),s=a(2278),f=m(a(28108));function m(e){return e&&e.__esModule?e:{default:e}}a(72155),t.default=function(){var e,t,a=(e=regeneratorRuntime.mark((function e(t){var a,r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.city,r=t.street,l=t.file,v(!0),n=(0,d.default)({city:a,street:r,image:l,profile_user:1}),e.next=6,(0,u.API_City_C)(n);case 6:g(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),v(!1);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})),t=function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function r(l,n){try{var i=t[l](n),u=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))},function(e){return t.apply(this,arguments)}),m=(0,l.useState)(!1),p=r(m,2),y=p[0],v=p[1],_=(0,l.useState)(!1),h=r(_,2),b=h[0],g=h[1];return(0,l.useEffect)((function(){document.title="Add new city"}),[]),b?n.default.createElement(i.Redirect,{to:"/city-street"}):1!=localStorage.is_login?n.default.createElement(i.Redirect,{to:"/login-form"}):n.default.createElement("div",{className:"AddNewCity"},n.default.createElement("div",{className:"label-field text-align-center"},"Let's create a post about your city now!"),n.default.createElement("br",null),n.default.createElement("div",null,n.default.createElement(f.default,{initialValues:s.initialValues,handleSubmit:a})),n.default.createElement(o.default,{FetchingComponent:c.default,open_fetching:y}))}},40824:(e,t,a)=>{"use strict";a.r(t)},17727:(e,t,a)=>{"use strict";a.r(t)},18886:(e,t,a)=>{"use strict";a.r(t)},49764:(e,t,a)=>{"use strict";a.r(t)},72155:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3861.js.map