(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[5680],{7392:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconsProfileAbout=void 0;var r=a(n(67294)),l=a(n(4299));function a(e){return e&&e.__esModule?e:{default:e}}t.IconsProfileAbout={work:r.default.createElement(l.default,null),university:r.default.createElement(l.default,null),school:r.default.createElement(l.default,null),family:r.default.createElement(l.default,null),relationship:r.default.createElement(l.default,null),town:r.default.createElement(l.default,null),city:r.default.createElement(l.default,null),life_event:r.default.createElement(l.default,null),you:r.default.createElement(l.default,null),favour:r.default.createElement(l.default,null),other_name:r.default.createElement(l.default,null),email:r.default.createElement(l.default,{x:200}),phone:r.default.createElement(l.default,{y:200}),address:r.default.createElement(l.default,null),gender:r.default.createElement(l.default,null),birth:r.default.createElement(l.default,null),lang:r.default.createElement(l.default,null)}},25275:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useFocusBlur=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,l=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){l=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),t=e[0],n=e[1];return{is_focus:t,setIsFocus:n,handleFocus:function(){n(!0)},handleBlur:function(){n(!1)}}};var r=n(67294)},2336:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_contact_basis_state=function(){return{gender_obj:{gender:"",permission:0,title:""},lang_obj:{lang:"",permission:0,title:""},birth_obj:{birth:"",permission:0,title:""},email_obj:{id:0,title:"",email:"",permission:0},phone_arr:[{id:0,title:"",phone:"",permission:0}],address_arr:[{id:0,title:"",address:"",permission:0}],has_fetched:!1}},t.initial_detail_state=function(){return{you_obj:{id:0,title:"",you:"",permission:0},other_name_arr:[],favour_obj:{id:0,title:"",favour:"",permission:0},has_fetched:!1,no_item:!1}},t.initial_life_state=function(){return{life_event_arr:[],has_fetched:!1}},t.initial_place_state=function(){return{town_arr:[],city_arr:[],has_fetched:!1}},t.initial_relation_state=function(){return{relationship_obj:{relationship:"",permission:0},family_arr:[],has_fetched:!1}},t.initial_work_edu_state=function(){return{school_arr:[],university_arr:[],work_arr:[],has_fetched:!1}},t.initial_overview_obj=function(){return{work_arr:[{name:"",permission:0}]}}},6797:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),l=i(n(45697)),a=n(25275);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.name,n=e.value,l=e.type,i=e.placeholder,u=e.max_length,o=e.handleChange,s=(0,a.useFocusBlur)(),d=s.is_focus,c=s.handleFocus,f=s.handleBlur;return r.default.createElement("div",{className:"InputNotValid pos-rel "+(""!==n||d?"InputNotValid_text input-active":"")},r.default.createElement("input",{className:"InputNotValid_input brs-5px",name:t,type:l,maxLength:u,value:n,onChange:o,onFocus:c,onBlur:f}),r.default.createElement("div",{className:"InputNotValid_placeholder input-placeholder "+(d?"input-placeholder-active":"")},i))}n(8600),u.propTypes={name:l.default.string,type:l.default.string,placeholder:l.default.string,max_length:l.default.number,value:l.default.string,handleChange:l.default.func},u.defaultProps={type:"text",placeholder:"Placeholder",max_length:100},t.default=u},82919:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),l=u(n(45697)),a=u(n(37930)),i=u(n(57108));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.children,n=e.onClick;return r.default.createElement("div",{className:"AddDiv cursor-pointer label-field",onClick:n},r.default.createElement(i.default,{Icon:a.default,y:400,size_icon:"1rem"},t))}n(72997),o.propTypes={children:l.default.any,onClick:l.default.func},t.default=o},12702:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),l=i(n(45697)),a=i(n(78870));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.has_fetched,n=e.no_item,l=e.title;return r.default.createElement(a.default,{no_item:t&&n,title:l})}u.propTypes={has_fetched:l.default.bool,no_item:l.default.bool,title:a.default.propTypes.title},t.default=u},57736:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),l=d(r),a=d(n(45697)),i=n(15130),u=n(14927),o=d(n(23337)),s=d(n(25237));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.permission,n=e.is_editing,a=e.handleChoosePermission,d=e.toggleEdit,c=(0,r.useContext)(i.context_api).openScreenFloor;return l.default.createElement("div",null,l.default.createElement("div",{className:"display-flex align-item-center"},l.default.createElement("div",{className:"PermissionEditDiv_left "+(n?"display-none":""),onClick:function(){(0,u.openScreenPermission)({openScreenFloor:c,permission:t,handleChoosePermission:a})},title:"Change permission"},l.default.createElement(s.default,{permission:t,show_title:n})),l.default.createElement("div",{className:"display-flex-center"},l.default.createElement("div",{className:"PermissionEditDiv_right-icon display-flex-center brs-50 cursor-pointer hv-bg-blur",onClick:d,title:"Edit"},l.default.createElement(o.default,{is_editing:n,size_icon:"1rem"})))))}n(86943),c.propTypes={permission:a.default.number,is_editing:a.default.bool,handleChoosePermission:a.default.func,toggleEdit:a.default.func},t.default=c},21716:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),l=d(r),a=(d(n(45697)),n(15130)),i=n(21092),u=n(35155),o=n(17892),s=d(n(82919));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t,n,d=(t=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E((function(){return _(t)}));case 2:p(t),C();case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(l,a){try{var i=e[l](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(e){return n.apply(this,arguments)}),c=e.title_add,f=e.item_obj,m=e.ComponentEdit,p=e.handleCreate,_=e.handle_API_C,h=(0,r.useContext)(a.context_api).user.id==(0,o.GetIdSlug)(),v=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,l=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){l=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),y=v[0],b=v[1],E=(0,i.useScreenFetching)(),g=(0,u.useMounted)();function C(){g&&b(!1)}return h&&l.default.createElement("div",{className:"PfAbout_add"},l.default.createElement("div",null,l.default.createElement("div",{className:"PfAboutAdd_add_contain "+(y?"display-none":""),onClick:function(){b(!0)}},l.default.createElement(s.default,null,c))),y&&l.default.createElement("div",null,l.default.createElement(m,{item_obj:f,handleCancel:function(){C()},handleSave:d})))}c.propTypes={},t.default=c},82322:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),l=s(r),a=s(n(45697)),i=n(15130),u=n(14927),o=s(n(25237));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.permission,n=e.handleCancel,a=e.handleSave,s=(0,r.useContext)(i.context_api).openScreenFloor,d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,l=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){l=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(t),2),c=d[0],f=d[1];return l.default.createElement("div",{className:"PfAboutConfirm"},l.default.createElement("div",{className:"display-flex align-items-center space-between"},l.default.createElement("div",{onClick:function(){(0,u.openScreenPermission)({openScreenFloor:s,permission:c,handleChoosePermission:f})}},l.default.createElement(o.default,{permission:c,show_title:!0})),l.default.createElement("div",null,l.default.createElement("div",{className:"display-flex align-items-center"},l.default.createElement("button",{className:"PfAboutConfirm_right_btn bg-ccc label-field hv-btn active-scale-sm",onClick:n},"Cancel"),l.default.createElement("button",{className:"PfAboutConfirm_right_btn bg-blue label-field text-white hv-btn active-scale-sm",onClick:function(){a(c)}},"Save")))))}n(30396),d.propTypes={permission:a.default.number,handleCancel:a.default.func,handleSave:a.default.func},t.default=d},68141:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(67294),a=f(l),i=f(n(45697)),u=n(15130),o=n(17892),s=f(n(4299)),d=f(n(48474)),c=f(n(12702));function f(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=e.has_fetched,n=e.no_item,r=e.title,i=e.ComponentLeft,s=e.children,f=(0,l.useContext)(u.context_api).user.id==(0,o.GetIdSlug)();return a.default.createElement("div",null,a.default.createElement("div",{className:"text-secondary label-field"},a.default.createElement(c.default,{has_fetched:t&&!f,no_item:n,title:a.default.createElement(d.default,{ComponentLeft:i,ComponentRight:r})})),a.default.createElement("div",{className:t&&!f&&n?"display-none":""},s))}m.propTypes=r({},c.default.propTypes,{children:i.default.element,ComponentLeft:i.default.element}),m.defaultProps={ComponentLeft:a.default.createElement(s.default,{size_icon:"1.5rem"})},t.default=m},87163:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),l=u(n(45697)),a=u(n(57736)),i=u(n(48474));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_user,n=e.Icon,l=e.title,u=e.permission,o=e.is_editing,s=e.handleChoosePermission,d=e.toggleEdit;return r.default.createElement("div",null,r.default.createElement("div",{className:"AboutRowItem_left display-flex "+(o?"justify-content-end":"space-between")},r.default.createElement("div",{className:o?"display-none":"flex-grow-1"},r.default.createElement(i.default,{align_center:!1,ComponentLeft:n,ComponentRight:l})),t&&r.default.createElement("div",{className:"AboutRowItem_right"},r.default.createElement(a.default,{permission:u,is_editing:o,handleChoosePermission:s,toggleEdit:d}))))}n(59508),o.propTypes={is_user:l.default.bool,Icon:l.default.element,title:l.default.oneOfType([l.default.string,l.default.element]),permission:l.default.number,is_editing:l.default.bool,handleChoosePermission:l.default.func,toggleEdit:l.default.func},t.default=o},59487:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),l=c(r),a=c(n(45697)),i=n(15130),u=n(82403),o=n(21092),s=n(17892),d=c(n(87163));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(l,a){try{var i=t[l](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}function m(e){var t,n,a=(t=f(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j((function(){return v({permission:t})}));case 2:m.permission=t,x();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)}),c=(n=f(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j((function(){return v(t)}));case 2:y(t),P(!1);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),m=e.item_obj,p=e.Icon,_=e.label,h=e.ComponentEdit,v=e.handle_API_U,y=e.handleUpdateItemObj,b=(0,r.useContext)(i.context_api).user.id==(0,s.GetIdSlug)(),E=m.permission,g=m.title,C=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,l=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){l=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),w=C[0],P=C[1],x=(0,u.useForceUpdate)(),j=(0,o.useScreenFetching)();return l.default.createElement("div",{className:"AboutRowItemEdit "+(g?"":"display-none")},_&&l.default.createElement("div",null,l.default.createElement("div",{className:"label-field text-secondary"},_)),l.default.createElement("div",null,l.default.createElement("div",{className:"AboutRowItemEdit_item"},l.default.createElement(d.default,{is_user:b,Icon:p,title:g,permission:E,is_editing:w,handleChoosePermission:a,toggleEdit:function(){P(!w)}})),b&&w&&l.default.createElement("div",{className:"PfAbout_edit"},l.default.createElement(h,{item_obj:m,handleCancel:function(){P(!1)},handleSave:c}))))}n(40312),m.propTypes={item_obj:a.default.object,Icon:a.default.element,label:a.default.string,handle_API_U:a.default.func,ComponentEdit:a.default.func,handleUpdateItemObj:a.default.func},m.defaultProps={label:""},t.default=m},8600:(e,t,n)=>{"use strict";n.r(t)},72997:(e,t,n)=>{"use strict";n.r(t)},86943:(e,t,n)=>{"use strict";n.r(t)},30396:(e,t,n)=>{"use strict";n.r(t)},59508:(e,t,n)=>{"use strict";n.r(t)},40312:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=5680.js.map