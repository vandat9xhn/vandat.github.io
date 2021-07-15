(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6204],{29705:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.useInputDate=function(e){var t=e.initial_day,a=void 0===t?1:t,u=e.initial_month,s=void 0===u?1:u,o=e.initial_year,d=void 0===o?2e3:o,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({day:a,month:s,year:d}),2),f=c[0],m=c[1],p=f.day,h=f.month,y=f.year;function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"month",a="month"==t?(0,l.getLastDayOfMonth)(+e,+y):(0,l.getLastDayOfMonth)(+h,+e);m((function(r){var l;return n({},r,(i(l={},t,e),i(l,"day",r.day>a?a:r.day),l))}))}return{day:p,month:h,year:y,handleChangeDay:function(e){m((function(t){return n({},t,{day:e.target.value})}))},handleChangeMonth:function(e){v(e.target.value,"month")},handleChangeYear:function(e){v(e.target.value,"year")}}};var r=a(67294),l=a(72851);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},82702:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,a=e.x,r=e.y,l=e.close_eye;return n.default.createElement("svg",{className:"IconsEye",height:t,width:t,viewBox:a+" "+r+" 200 200",stroke:"var(--black-brown)",fill:"var(--black-brown)",strokeLinecap:"round"},n.default.createElement("path",{d:"M200,300 Q300,200 400,300 Q300,400 200,300",fill:"none",strokeWidth:"10"}),n.default.createElement("circle",{className:l?"display-none":"",cx:"300",cy:"300",r:"30"}),n.default.createElement("g",{className:l?"":"display-none"},n.default.createElement("path",{d:"M200,300 Q300,350 400,300",fill:"none",strokeWidth:"20"}),n.default.createElement("line",{x1:"210",y1:"210",x2:"390",y2:"390",strokeWidth:"30"})))}i.propTypes={size_icon:r.default.string,color:r.default.string,x:r.default.number,y:r.default.number,close_eye:r.default.bool},i.defaultProps={x:0,y:0,size_icon:"1.5rem",close_eye:!0},t.default=i},54752:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fields=t.validationSchema=t.initialValues=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(57503));t.initialValues={username:"",password:"",password_confirm:"",email:"",first_name:"",last_name:""},t.validationSchema=n.object().shape({username:n.string().matches(/^[a-zA-Z0-9]{5,15}$/,"Username is invalid").required(),password:n.string().matches(/[A-Z]/,"Password is invalid").required(),password_confirm:n.string().oneOf([n.ref("password"),null],"Password is not right").required(),email:n.string().email("Invalid email").matches(/^\S{4,10}@[a-z]mail\.com$/,"Invalid email").required(),first_name:n.string().matches(/^\S/,"First name is invalid").min(1,"First name is invalid").max(20,"First name is invalid").trim("First name is invalid").required(),last_name:n.string().matches(/^\S/,"First name is invalid").min(1,"Last name is invalid").max(20,"Last name is invalid").trim("Last name is invalid").required()}),t.fields=[{name:"username",type:"text",label:"Username",help:"5-15 english letters and no space",max_length:15},{name:"password",type:"password",label:"Password",help:"5-15 english letters, no space and at least 1 uppercase letter",max_length:15},{name:"password_confirm",type:"password",label:"Password confirm",help:"Confirm your password",max_length:15},{name:"email",type:"email",label:"Email",help:"****@*mail.com"},{name:"first_name",type:"text",label:"First name",help:"1-20 letters, spaces and start with a letter",max_length:20},{name:"last_name",type:"text",label:"Last name",help:"1-15 letters, spaces and start with a letter",max_length:15}]},72851:(e,t)=>{"use strict";function a(e,t){return 12==e?31:(new Date(t+"-"+(+e+1))-new Date(t+"-"+e))/864e5}Object.defineProperty(t,"__esModule",{value:!0}),t.getLastDayOfMonth=a,t.getDaysInMonth=function(e,t){var n=a(+e,+t);return Array.from({length:n},(function(e,t){return t+1}))}},86655:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeRange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Array.from({length:t-e},(function(t,a){return a+e}))}},54902:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SignupRequest=void 0;var n,r=(n=a(62667))&&n.__esModule?n:{default:n},l=a(50918),i=a(44550);t.SignupRequest=function(e){return(0,l.API_FakeReal)(i.default_login,(function(){return(0,r.default)({method:"POST",data:e,url:"/registration/sign-up/"})}))}},4124:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.children,a=e.onClick,r=e.type,l=e.disabled,i=e.ripple_type,u=e.title;return n.default.createElement("button",{className:"ButtonRipple btn label-field "+(l?"opacity-05 pointer-events-none":"cursor-pointer"),type:r,title:u,disabled:l,onClick:a},n.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+i+" "+(l?"display-none":"")}),t)}a(40824),i.propTypes={type:r.default.string,title:r.default.string,disabled:r.default.bool,ripple_type:r.default.string,children:r.default.any,onClick:r.default.func},i.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=i},74275:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),a(86655)),l=u(a(48197)),i=u(a(91406));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.day,a=e.month,u=e.year,s=e.min_year,o=e.max_year,d=e.invalid,c=e.title_invalid,f=e.handleChangeDay,m=e.handleChangeMonth,p=e.handleChangeYear;return n.default.createElement("div",{className:"InputDate"},n.default.createElement("div",null,n.default.createElement("div",{className:"InputDate_row display-flex align-items-center"},n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item-contain"},n.default.createElement(l.default,{day:t,month:a,year:u,handleChangeDay:f}))),n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item-contain"},n.default.createElement(i.default,{options:(0,r.makeRange)(1,13),current_option:a,onSelectOption:m}))),n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item-contain"},n.default.createElement(i.default,{options:(0,r.makeRange)(s,o+1),current_option:u,onSelectOption:p}))))),d?n.default.createElement("div",{className:"text-red font-12px font-italic"},c||"Date is invalid!"):n.default.createElement("div",null))}a(90214),s.propTypes={},t.default=s},48197:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),a(72851)),l=i(a(91406));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.month,a=e.year,i=e.day,u=e.handleChangeDay,s=(0,r.getDaysInMonth)(t,a);return n.default.createElement(l.default,{options:s,current_option:i,onSelectOption:u})}u.propTypes={},t.default=u},3028:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=d(r),i=d(a(45697)),u=d(a(82702)),s=d(a(39475)),o=d(a(57108));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.field,a=e.form,i=e.label,d=e.placeholder,c=e.max_length,f=e.help,m=t.name,p=a.touched,h=a.errors,y=p[m]&&h[m],v=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!0),2),_=v[0],g=v[1];return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("label",{className:"label-field"},i)),l.default.createElement("div",{className:"InputPassword_password position-rel"},l.default.createElement("input",n({className:"InputPassword_input w-100per padding-8px brs-5px "+(p[m]&&!h[m]?"InputPassword_valid":"")+" "+(p[m]&&h[m]?"InputPassword_invalid":"")},t,{maxLength:c,placeholder:d,type:_?"password":"text"})),l.default.createElement("div",{className:"InputPassword__eye"},l.default.createElement("div",{onClick:function(){g(!_)}},l.default.createElement(u.default,{x:200,y:200,close_eye:_})))),f&&l.default.createElement("div",{className:"help-text"},l.default.createElement(o.default,{Icon:s.default,x:600},"* ",f)),y&&l.default.createElement("div",{className:"error-field"},l.default.createElement(o.default,{Icon:s.default,x:400,y:400},h[m])))}a(38093),c.propTypes={field:i.default.object,form:i.default.object,label:i.default.string,max_length:i.default.number,placeholder:i.default.string},c.defaultProps={max_length:15},t.default=c},22607:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=o(a(67294)),l=o(a(45697)),i=a(66878),u=o(a(57108)),s=o(a(39475));function o(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.field,a=e.form,l=e.is_textarea,o=e.type,d=e.label,c=e.placeholder,f=e.dataList,m=e.help,p=e.max_length,h=t.name,y=t.onChange,v=a.touched,_=a.errors,g=v[h]&&_[h],b="list_"+h+"_"+d;return r.default.createElement("div",{className:"InputText"},r.default.createElement("div",null,r.default.createElement("label",{className:"label-field"},d)),r.default.createElement("div",null,l?r.default.createElement("textarea",n({className:"InputText_input InputText_textarea scroll-thin brs-5px "+(v[h]&&!_[h]?"InputText_valid":"")+" "+(v[h]&&_[h]?"InputText_invalid":"")},t,{onChange:function(e){y(e),(0,i.makeAutoHeight)(e)},placeholder:c,type:o,maxLength:p})):r.default.createElement("input",n({className:"InputText_input brs-5px "+(v[h]&&!_[h]?"InputText_valid":"")+" "+(v[h]&&_[h]?"InputText_invalid":"")},t,{placeholder:c,type:o,list:b,maxLength:p}))),r.default.createElement("datalist",{id:b},f.map((function(e,t){return r.default.createElement("option",{key:"InputText_"+t},e)}))),m&&r.default.createElement("div",{className:"InputText_help help-text"},r.default.createElement(u.default,{Icon:s.default,x:600},"*",m)),g&&r.default.createElement("div",{className:"InputText_help_error error-field"},r.default.createElement(u.default,{Icon:s.default,x:400,y:400},_[h])))}a(17727),d.propTypes={field:l.default.object,form:l.default.object,is_textarea:l.default.bool,type:l.default.string,label:l.default.string,placeholder:l.default.string,dataList:l.default.array,help:l.default.string,max_length:l.default.number},d.defaultProps={is_textarea:!1,dataList:[],type:"text"},t.default=d},6204:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=E(r),i=a(18948),u=(E(a(45697)),a(15130)),s=a(54902),o=a(21092),d=a(29705),c=E(a(48321)),f=a(13118),m=E(a(39475)),p=E(a(4124)),h=E(a(57108)),y=E(a(27883)),v=E(a(22607)),_=E(a(3028)),g=a(54752),b=E(a(74275)),x=E(a(86578));function E(e){return e&&e.__esModule?e:{default:e}}function w(e){var t,a,E=(t=regeneratorRuntime.mark((function e(t){var a,n,r,i,u,o,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,f.handleScrollSmooth)((function(){window.scroll(0,0)})),a=t.username,n=t.password,r=t.email,i=t.first_name.trim(),u=t.last_name.trim(),o=(0,c.default)({username:a,password:n,email:r,first_name:i,last_name:u,day:B,month:z,year:V}),e.prev=5,e.next=8,F((function(){return(0,s.SignupRequest)(o)}),l.default.createElement(y.default,{is_fetching:!0}));case 8:d=e.sent,"username_existed"==(m=d.data)?N(!0):"email_existed"==m?D(!0):(sessionStorage.new_member=i+" "+u,I({id:m.id,first_name:i,last_name:u,picture:x.default})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[5,13]])})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var i=e[r](l),u=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),w=(0,r.useContext)(u.context_api),I=(w.user,w.setDataUser),O=(0,r.useState)(!1),S=n(O,2),P=S[0],N=S[1],M=(0,r.useState)(!1),k=n(M,2),j=k[0],D=k[1],C=(0,r.useState)(!1),T=n(C,2),A=T[0],R=T[1],L=(0,r.useRef)(null),F=(0,o.useScreenFetching)(),q=(0,d.useInputDate)({}),B=q.day,z=q.month,V=q.year,U=q.handleChangeDay,W=q.handleChangeMonth,Y=q.handleChangeYear;function Q(){P&&N(!1),j&&D(!1),A&&R(!1)}return(0,r.useEffect)((function(){return document.title="Registration",document.documentElement.setAttribute("data-theme","light"),function(){1!=localStorage.light_mode&&document.documentElement.setAttribute("data-theme","dark")}}),[]),l.default.createElement("div",{ref:L},l.default.createElement(i.Formik,{initialValues:g.initialValues,validationSchema:g.validationSchema,onSubmit:function(e,t){E(e)}},(function(e){return l.default.createElement(i.Form,{autoComplete:"off",className:"Registration_form App_Form brs-5px-md padding-8px",onClick:Q},l.default.createElement("h2",{className:"App_title margin-0"},"Sign up")," ",l.default.createElement("hr",{className:"App_hr-bg"}),l.default.createElement("div",{className:"Registration_error text-red "+(P||j?"":"display-none")},l.default.createElement(h.default,{Icon:m.default,x:400,y:400},P?"Username":"Email"," was existed")),l.default.createElement("div",null,g.fields.map((function(e,t){return l.default.createElement("div",{key:"Registration_"+t,className:"Registration_input"},l.default.createElement(i.FastField,{name:e.name,component:e.name.startsWith("password")?_.default:v.default,label:e.label,placeholder:e.label+"...",help:e.help,max_length:e.max_length}))})),l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("div",{className:"label-field"},"Birth day")),l.default.createElement("div",null,l.default.createElement(b.default,{day:B,month:z,year:V,min_year:1960,max_year:2021,invalid:A,title_invalid:"Birth must be from 1960 to now",handleChangeDay:U,handleChangeMonth:W,handleChangeYear:Y})))),l.default.createElement("br",null),l.default.createElement("div",{className:"App_submit display-flex-center"},l.default.createElement(p.default,{type:"submit",onClick:function(t){return function(e,t){if(t.dirty){var a=Object.keys(t.errors);a.length&&(0,f.handleScrollSmooth)((function(){L.current.querySelector("[name="+a[0]+"]").scrollIntoView(!1)}))}var n=new Date(V,z,B);(n>new Date||n<=new Date(1960))&&(R(!0),e.preventDefault())}(t,e)}},"Sign up")))})))}a(3912),w.propTypes={},t.default=w},40824:(e,t,a)=>{"use strict";a.r(t)},90214:(e,t,a)=>{"use strict";a.r(t)},38093:(e,t,a)=>{"use strict";a.r(t)},17727:(e,t,a)=>{"use strict";a.r(t)},3912:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=6204.js.map