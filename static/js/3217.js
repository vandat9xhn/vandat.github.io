(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3217],{25275:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useFocusBlur=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!1),2),t=e[0],a=e[1];return{is_focus:t,setIsFocus:a,handleFocus:function(){a(!0)},handleBlur:function(){a(!1)}}};var n=a(67294)},4124:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children,a=e.onClick,r=e.type,l=e.disabled,u=e.ripple_type,o=e.title;return n.default.createElement("button",{className:"ButtonRipple btn label-field "+(l?"opacity-05 pointer-events-none":"cursor-pointer"),type:r,title:o,disabled:l,onClick:a},n.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+u+" "+(l?"display-none":"")}),t)}a(40824),u.propTypes={type:r.default.string,title:r.default.string,disabled:r.default.bool,ripple_type:r.default.string,children:r.default.any,onClick:r.default.func},u.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=u},6797:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=u(a(45697)),l=a(25275);function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.name,a=e.value,r=e.type,u=e.placeholder,o=e.max_length,i=e.handleChange,s=(0,l.useFocusBlur)(),c=s.is_focus,d=s.handleFocus,f=s.handleBlur;return n.default.createElement("div",{className:"InputNotValid position-rel "+(""!==a||c?"InputNotValid_text input-active":"")},n.default.createElement("input",{className:"InputNotValid_input brs-5px",name:t,type:r,maxLength:o,value:a,onChange:i,onFocus:d,onBlur:f}),n.default.createElement("div",{className:"InputNotValid_placeholder input-placeholder "+(c?"input-placeholder-active":"")},u))}a(8600),o.propTypes={name:r.default.string,type:r.default.string,placeholder:r.default.string,max_length:r.default.number,value:r.default.string,handleChange:r.default.func},o.defaultProps={type:"text",placeholder:"Placeholder",max_length:100},t.default=o},22350:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=i(n),l=i(a(45697)),u=i(a(82702)),o=i(a(6797));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.password,a=e.name,l=e.placeholder,i=e.max_length,s=e.handleChange,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("password"),2),d=c[0],f=c[1];return r.default.createElement("div",{className:"InputNotValidPass"},r.default.createElement("div",null,r.default.createElement(o.default,{name:a,type:d,placeholder:l,max_length:i,value:t,handleChange:s})),r.default.createElement("div",{className:"InputNotValidPass_eye"},r.default.createElement("div",{className:"InputNotValidPass_eye-contain hv-opacity",onClick:function(){f("password"==d?"text":"password")}},r.default.createElement(u.default,{x:200,y:200,close_eye:"password"==d}))))}a(41140),s.propTypes={password:l.default.string,name:l.default.string,placeholder:l.default.string,max_length:l.default.number,handleChange:l.default.func},s.defaultProps={placeholder:"Password",max_length:100},t.default=s},13217:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=y(r),u=a(93191),o=a(15130),i=a(78334),s=a(21092),c=y(a(48321)),d=y(a(39475)),f=y(a(44620)),p=y(a(57108)),m=y(a(4124)),g=y(a(6797)),v=y(a(22350)),h=y(a(66249));function y(e){return e&&e.__esModule?e:{default:e}}function _(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}a(75931),t.default=function(){var e,t,a=(e=regeneratorRuntime.mark((function e(t){var a,r,u,o,s,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x((function(e){return n({},e,{account_wrong:!1})})),a=(0,c.default)({username:N,password:F}),e.next=5,C((function(){return(0,i.LoginRequest)(a)}),l.default.createElement(h.default,{is_fetching:!0}));case 5:"Wrong"==(r=e.sent).data?x((function(e){return n({},e,{account_wrong:!0})})):(u=r.data,o=u.access,s=u.life_time,d=_(u,["access","life_time"]),localStorage.access_token=o,localStorage.life_time=s,localStorage.time_set=(new Date).getTime(),w(d));case 7:case"end":return e.stop()}}),e,this)})),t=function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function n(r,l){try{var u=t[r](l),o=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(o)}("next")}))},function(e){return t.apply(this,arguments)}),y=(0,r.useContext)(o.context_api),w=(y.user,y.setDataUser),b=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({username:"",password:"",type_pass:"password",account_wrong:!1}),2),E=b[0],x=b[1],N=E.username,F=E.password,L=E.type_pass,P=E.account_wrong,C=(0,s.useScreenFetching)();function O(e){var t,a,r;x(n({},E,(t={},a=e.target.name,r=e.target.value,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t)))}return(0,r.useEffect)((function(){document.title="Login"}),[]),l.default.createElement("div",{className:"LoginForm"},l.default.createElement("div",{className:"LoginForm_contain padding-8px"},l.default.createElement("div",{className:"LoginForm_row display-flex flex-wrap"},l.default.createElement("div",{className:"LoginForm_col-left display-flex-center"},l.default.createElement("div",{className:"LoginForm_col-info text-align-center"},l.default.createElement(f.default,{size_icon:"6rem"}),l.default.createElement("div",null,"This web was built by ReactJs and Django"))),l.default.createElement("div",{className:"LoginForm_col-right display-flex justify-content-center"},l.default.createElement("form",{className:"LoginForm_form App_Form padding-8px brs-5px-md bg-react",autoComplete:"off",onSubmit:a},l.default.createElement("h2",{className:"App_title margin-0"},"Login"),l.default.createElement("hr",{className:"App_hr-bg"}),l.default.createElement("div",{className:"LoginForm_error "+(P?"":"display-none")},l.default.createElement(p.default,{Icon:d.default,x:400,y:400},"username or password was wrong")),l.default.createElement("div",{className:"LoginForm_input"},l.default.createElement(g.default,{name:"username",type:"text",placeholder:"username",max_length:15,value:N,handleChange:O})),l.default.createElement("div",{className:"LoginForm_input"},l.default.createElement(v.default,{name:"password",type:L,placeholder:"password",max_length:15,password:F,handleChange:O,toggleType:function(){x(n({},E,{type_pass:"password"==L?"text":"password"}))}})),l.default.createElement("div",{className:"LoginForm_login App_submit display-flex-center"},l.default.createElement(m.default,{type:"submit",title:"Login"},"Login")),l.default.createElement("div",null,l.default.createElement(u.Link,{to:"#"},"Forgot password?")),l.default.createElement("div",{className:"LoginForm_or"},l.default.createElement("div",{className:"LoginForm_or_row display-flex-center"},l.default.createElement("div",null),l.default.createElement("div",null,"or"),l.default.createElement("div",null))),l.default.createElement(u.Link,{className:"text-light",to:"/registration-form"},l.default.createElement("div",{className:"LoginForm_sign_up display-flex-center"},l.default.createElement(m.default,{type:"text",title:"sign up"},l.default.createElement("div",null,"Sign up now")))))))))}},66249:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=u(a(45697)),l=u(a(27883));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_fetching;return n.default.createElement("div",null,n.default.createElement("div",{className:"width-fit-content margin-auto"},n.default.createElement(l.default,{is_fetching:t})),n.default.createElement("div",null,"Logging in..."))}o.propTypes={is_fetching:r.default.bool},t.default=o},40824:(e,t,a)=>{"use strict";a.r(t)},8600:(e,t,a)=>{"use strict";a.r(t)},41140:(e,t,a)=>{"use strict";a.r(t)},75931:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3217.js.map