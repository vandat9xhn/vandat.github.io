(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[965],{81889:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_profile_lang_arr=["Vietnamese","English","Italian","French","Germany","Thai","Chinese","Lao"]},29705:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.useInputDate=function(e){var t=e.initial_day,a=void 0===t?1:t,d=e.initial_month,i=void 0===d?1:d,o=e.initial_year,c=void 0===o?2e3:o,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({day:a,month:i,year:c}),2),f=s[0],m=s[1],p=f.day,_=f.month,h=f.year;function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"month",a="month"==t?(0,l.getLastDayOfMonth)(+e,+h):(0,l.getLastDayOfMonth)(+_,+e);m((function(r){var l;return n({},r,(u(l={},t,e),u(l,"day",r.day>a?a:r.day),l))}))}return{day:p,month:_,year:h,handleChangeDay:function(e){m((function(t){return n({},t,{day:e.target.value})}))},handleChangeMonth:function(e){v(e.target.value,"month")},handleChangeYear:function(e){v(e.target.value,"year")}}};var r=a(67294),l=a(72851);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},15617:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.useInputSelect=function(e){var t=e.all_data_arr,a=e.initial_data_str,r=e.multiple,d=void 0===r||r,i=e.delimiter,o=void 0===i?",":i,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)({cur_data_arr:a?a.split(o):[],value_input:"",option_data_arr:t.filter((function(e){return!a.includes(e)}))}),2),s=c[0],f=c[1],m=s.cur_data_arr,p=s.value_input,_=s.option_data_arr;return{cur_data_arr:m,option_data_arr:_,value_input:p,handleChangeInput:function(e){var a=e.target.value;f(n({},s,{value_input:a,option_data_arr:t.filter((function(e){return!m.includes(e)})).filter((function(e){return e.toLowerCase().includes(a.toLowerCase())}))}))},handleSelectOption:function(e){var a=d?[].concat(u(m),[_[e]]):[_[e]];!m.includes(_[e])&&f(n({},s,{cur_data_arr:a,value_input:"",option_data_arr:(d?_:t).filter((function(t,a){return a!=e}))}))},handleRemoveSelectedItem:function(e){f(n({},s,{cur_data_arr:m.filter((function(t,a){return a!=e})),option_data_arr:[].concat(u(_),[m[e]]).filter((function(e){return e.toLocaleLowerCase().includes(p.toLocaleLowerCase())}))}))}}};var r,l=a(67294);function u(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(r=a(45697))&&r.__esModule},72851:(e,t)=>{"use strict";function a(e,t){return 12==e?31:(new Date(t+"-"+(+e+1))-new Date(t+"-"+e))/864e5}Object.defineProperty(t,"__esModule",{value:!0}),t.getLastDayOfMonth=a,t.getDaysInMonth=function(e,t){var n=a(+e,+t);return Array.from({length:n},(function(e,t){return t+1}))}},97619:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.joinArrayWithAnd=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[""];return 1==e.length?e[0]:e.slice(0,e.length-1).join(", ")+" and "+e.slice(-1)[0]}},86655:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeRange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Array.from({length:t-e},(function(t,a){return a+e}))}},74275:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),r=(d(a(45697)),a(86655)),l=d(a(48197)),u=d(a(91406));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.day,a=e.month,d=e.year,i=e.min_year,o=e.max_year,c=e.invalid,s=e.title_invalid,f=e.handleChangeDay,m=e.handleChangeMonth,p=e.handleChangeYear;return n.default.createElement("div",{className:"InputDate"},n.default.createElement("div",null,n.default.createElement("div",{className:"InputDate_row display-flex align-items-center"},n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item_contain"},n.default.createElement(l.default,{day:t,month:a,year:d,handleChangeDay:f}))),n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item_contain"},n.default.createElement(u.default,{options:(0,r.makeRange)(1,13),current_option:a,onSelectOption:m}))),n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item_contain"},n.default.createElement(u.default,{options:(0,r.makeRange)(i,o+1),current_option:d,onSelectOption:p}))))),c?n.default.createElement("div",{className:"text-red font-12px font-italic"},s||"Date is invalid!"):n.default.createElement("div",null))}a(90214),i.propTypes={},t.default=i},48197:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),a(72851)),l=u(a(91406));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.month,a=e.year,u=e.day,d=e.handleChangeDay,i=(0,r.getDaysInMonth)(t,a);return n.default.createElement(l.default,{options:i,current_option:u,onSelectOption:d})}d.propTypes={},t.default=d},22350:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=i(n),l=i(a(45697)),u=i(a(82702)),d=i(a(6797));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.password,a=e.name,l=e.placeholder,i=e.max_length,o=e.handleChange,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("password"),2),s=c[0],f=c[1];return r.default.createElement("div",{className:"InputNotValidPass"},r.default.createElement("div",null,r.default.createElement(d.default,{name:a,type:s,placeholder:l,max_length:i,value:t,handleChange:o})),r.default.createElement("div",{className:"InputNotValidPass_eye"},r.default.createElement("div",{className:"InputNotValidPass_eye_contain hv-opacity",onClick:function(){f("password"==s?"text":"password")}},r.default.createElement(u.default,{x:200,y:200,close_eye:"password"==s}))))}a(41140),o.propTypes={password:l.default.string,name:l.default.string,placeholder:l.default.string,max_length:l.default.number,handleChange:l.default.func},o.defaultProps={placeholder:"Password",max_length:100},t.default=o},91617:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=s(r),u=s(a(45697)),d=a(25275),i=s(a(35214)),o=s(a(15670)),c=s(a(95557));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.selected_item_arr,a=e.option_item_arr,u=e.value,o=e.multiple,c=e.placeholder,s=e.handleFocusInput,f=e.handleBlurInput,m=e.handleKeyDown,p=e.handleKeyUp,_=e.handleChangeInput,h=e.handleSelectOption,v=e.handleRemoveSelectedItem,b=e.ComponentSelectedList,y=e.ComponentOptionList,E=e.selected_props,g=e.option_props,j=(0,r.useRef)(null),I=(0,r.useRef)(null),P=(0,r.useRef)(null),C=(0,r.useRef)(80),S=(0,d.useFocusBlur)(),A=S.is_focus,O=(S.setIsFocus,S.handleFocus),w=S.handleBlur;return l.default.createElement(i.default,{makeDivHidden:function(){A&&(w(),f())}},l.default.createElement("div",{ref:I,className:"pos-rel "+(A||u||t.length?"input-active":"")},l.default.createElement("div",{className:"InputSelect_head padding-8px brs-5px "+(A?"InputSelect_head-active":""),onClick:function(e){j.current.focus(),A||(O(),s())}},l.default.createElement("div",null,l.default.createElement(b,n({selected_item_arr:t,handleRemoveSelectedItem:v},E)),l.default.createElement("div",{className:"InputSelect_head-item "+(!o&&t.length?"display-none":"inline-block")},l.default.createElement("input",{className:"InputSelect_head-input",style:{width:C.current+"px"},ref:j,type:"text",value:u,onChange:function(e){C.current=P.current.offsetWidth,_(e)},onKeyDown:m,onKeyUp:p})))),l.default.createElement("div",{className:"input-placeholder bg-primary "+(A?"InputSelect_placeholder-active":"")},c),l.default.createElement("div",{className:"InputSelect_foot"},l.default.createElement(y,n({option_item_arr:a,value:u,handleSelectOption:h},g))),l.default.createElement("div",{ref:P,className:"InputSelect_input_length width-fit-content"},l.default.createElement("span",{className:"padding-8px"},u))))}a(96499),f.propTypes={selected_item_arr:u.default.array,option_item_arr:u.default.array,value:u.default.any,multiple:u.default.bool,placeholder:u.default.string,handleFocusInput:u.default.func,handleBlurInput:u.default.func,handleKeyDown:u.default.func,handleKeyUp:u.default.func,handleChangeInput:u.default.func,handleSelectOption:u.default.func,handleRemoveSelectedItem:u.default.func,ComponentSelectedList:u.default.func,ComponentOptionList:u.default.func,selected_props:u.default.object,option_props:u.default.object},f.defaultProps={multiple:!0,placeholder:"Write something",handleFocusInput:function(){},handleBlurInput:function(){},ComponentSelectedList:c.default,ComponentOptionList:o.default,selected_props:{},option_props:{}},t.default=f},15670:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(6550)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.value,a=e.option_item_arr,l=e.handleSelectOption;return n.default.createElement("div",{className:"InputSelectOptionList "+(t?"":"display-none")},n.default.createElement("div",{className:"InputSelectOptionList_contain bg-primary box-shadow-1"},n.default.createElement("ul",{className:"list-none"},a.map((function(e,t){return n.default.createElement("li",{key:"InputSelect_option_"+t},n.default.createElement(r.default,{ix:t,item:e,handleSelectOption:l}))})))))}u.propTypes={},t.default=u},6550:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294));function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ix,a=e.item,r=e.handleSelectOption;return n.default.createElement("div",{className:"cursor-pointer hv-bg-blur padding-8px",onClick:function(){r(t)}},n.default.createElement("div",null,a))}r(a(45697)),l.propTypes={},t.default=l},95557:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(91618)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.selected_item_arr,a=e.handleRemoveSelectedItem;return n.default.createElement("div",{className:"inline-block"},t.map((function(e,t){return n.default.createElement("div",{key:"InputSelect_selected_"+t,className:"InputSelect_head-item inline-block"},n.default.createElement(r.default,{ix:t,item:e,handleRemoveSelectedItem:a}))})))}u.propTypes={},t.default=u},91618:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(37930)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.ix,a=e.item,l=e.handleRemoveSelectedItem;return n.default.createElement("div",{className:"InputSelectedItem brs-8px bg-fb-active text-blue"},n.default.createElement("div",{className:"InputSelectedItem_row"},n.default.createElement("div",{className:"inline-block font-500"},a),n.default.createElement("div",{className:"inline-block"},n.default.createElement("div",{className:"InputSelectedItem_icon display-flex-center cursor-pointer brs-50 hv-bg-blur",onClick:function(){l(t)}},n.default.createElement(r.default,{y:400,size_icon:"1rem"})))))}a(86004),u.propTypes={},t.default=u},15250:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),r=d(a(45697)),l=d(a(48474)),u=d(a(22421));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.title,a=e.ix,r=e.active_ix,d=e.handleChoose;return n.default.createElement("div",{className:"RadioItemCustom cursor-pointer hv-bg-blur",onClick:function(){d(a)}},n.default.createElement(l.default,{ComponentLeft:n.default.createElement(u.default,{is_active:a==r}),ComponentRight:t}))}i.propTypes={title:r.default.string,ix:r.default.number,active_ix:r.default.number,handleChoose:r.default.func},t.default=i},20469:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=u(a(45697)),l=u(a(15250));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.list,a=e.active_ix,r=e.handleChoose;return n.default.createElement("div",null,t.map((function(e,t){return n.default.createElement("div",{key:"RadioListCustom_"+t},n.default.createElement(l.default,{title:e.title,ix:t,active_ix:a,handleChoose:r}))})))}d.propTypes={list:r.default.array,active_ix:r.default.number,handleChoose:r.default.func},t.default=d},31157:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=s(n),l=(s(a(45697)),a(17892)),u=a(2336),d=a(10666),i=a(35155),o=s(a(79335)),c=s(a(48600));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t,a,s=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,d.handle_API_UserOverview_r)({user_id:f});case 4:t=e.sent,I&&_({phone_arr:t.phone_arr,email_obj:t.email_obj,address_arr:t.address_arr,gender_obj:t.gender_obj,birth_obj:t.birth_obj,lang_obj:t.lang_obj,has_fetched:!0});case 6:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var u=e[r](l),d=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(d).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(d)}("next")}))},function(){return a.apply(this,arguments)}),f=(0,l.GetIdSlug)(),m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)((0,u.initial_contact_basis_state)()),2),p=m[0],_=m[1],h=p.phone_arr,v=p.email_obj,b=p.address_arr,y=p.gender_obj,E=p.birth_obj,g=p.lang_obj,j=p.has_fetched,I=(0,i.useMounted)();return(0,n.useEffect)((function(){s()}),[]),r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_part"},r.default.createElement(o.default,{phone_arr:h,email_obj:v,address_arr:b,has_fetched:j})),r.default.createElement("div",{className:"PfAbout_part"},r.default.createElement(c.default,{gender_obj:y,birth_obj:E,lang_obj:g,has_fetched:j})))}a(5271),f.propTypes={},t.default=f},48600:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),i(a(68141))),l=i(a(96153)),u=i(a(11199)),d=i(a(40149));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.gender_obj,a=e.birth_obj,i=e.lang_obj,o=e.has_fetched,c=!(t.title||i.title||a.title);return n.default.createElement("div",null,n.default.createElement("h3",{className:"PfAbout_title"},"Basis info"),n.default.createElement("div",null,n.default.createElement(r.default,{has_fetched:o,no_item:c,title:"No basis info to show"},n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(l.default,{gender_obj:t})),n.default.createElement("div",null,n.default.createElement(d.default,{birth_obj:a})),n.default.createElement("div",null,n.default.createElement(u.default,{lang_obj:i}))))))}o.propTypes={},t.default=o},40149:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(67294)),r=s(a(45697)),l=a(82403),u=a(47442),d=a(10666),i=s(a(21716)),o=s(a(16075)),c=s(a(99681));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.birth_obj,a=(0,l.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add "+(""==t.birth?"":"display-none")},n.default.createElement(i.default,{title_add:"Add a birth",item_obj:{birth:"",permission:0},ComponentEdit:o.default,handleCreate:function(e){var n=e.birth,r=e.permission;t.title=(0,u.formatLocalDateString)(n),t.birth=n,t.permission=r,a()},handle_API_C:d.handle_API_Birth_U})),n.default.createElement("div",{className:""==t.birth?"display-none":""},n.default.createElement(c.default,{birth_obj:t})))}f.propTypes={birth_obj:r.default.object},t.default=f},16075:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=o(n),l=o(a(45697)),u=a(29705),d=o(a(74275)),i=o(a(82322));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,l=e.handleCancel,o=t.permission,c=t.birth,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!1),2),f=s[0],m=s[1],p=(0,u.useInputDate)({initial_day:new Date(c).getDate(),initial_month:new Date(c).getMonth()+1,initial_year:new Date(c).getFullYear()}),_=p.day,h=p.month,v=p.year,b=p.handleChangeDay,y=p.handleChangeMonth,E=p.handleChangeYear;return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_input"},r.default.createElement(d.default,{day:_,month:h,year:v,min_year:1960,max_year:2021,invalid:f,title_invalid:"Date must be from 1960 to now",handleChangeDay:b,handleChangeMonth:y,handleChangeYear:E}))),r.default.createElement("div",null,r.default.createElement(i.default,{permission:o,handleCancel:l,handleSave:function(e){var t=new Date(v+"-"+h+"-"+_);t>=new Date||t<=new Date(1960)?m(!0):a({permission:e,birth:t.getTime()})}})))}c.propTypes={item_obj:l.default.object,handleSave:l.default.func,handleCancel:l.default.func},t.default=c},99681:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(67294)),r=c(a(45697)),l=a(47442),u=a(7392),d=a(10666),i=c(a(59487)),o=c(a(16075));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.birth_obj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(i.default,{item_obj:t,Icon:u.IconsProfileAbout.birth,label:"Birth",ComponentEdit:o.default,handle_API_U:d.handle_API_Birth_U,handleUpdateItemObj:function(e){var a=e.birth,n=e.permission;t.title=(0,l.formatLocalDateString)(a),t.birth=a,t.permission=n}})))}s.propTypes={birth_obj:r.default.object},t.default=s},96153:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),a(7392)),l=a(10666),u=i(a(59487)),d=i(a(10789));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.gender_obj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(u.default,{item_obj:t,Icon:r.IconsProfileAbout.gender,label:"Gender",ComponentEdit:d.default,handle_API_U:l.handle_API_Gender_U,handleUpdateItemObj:function(e){var a=e.gender,n=e.permission;t.permission=n,t.gender=a,t.title=a.slice(0,1).toUpperCase()+a.slice(1)}})))}a(19854),o.propTypes={},t.default=o},10789:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=i(n),l=i(a(45697)),u=i(a(20469)),d=i(a(82322));function i(e){return e&&e.__esModule?e:{default:e}}a(68038);var o=[{gender:"male",title:"Male"},{gender:"female",title:"Female"},{gender:"other",title:"Other"}];function c(e){var t=e.item_obj,a=e.handleSave,l=e.handleCancel,i=t.gender,c=t.permission,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(o.findIndex((function(e){return e.gender==i}))),2),f=s[0],m=s[1];return r.default.createElement("div",{className:"PfAbGenderEdit"},r.default.createElement("div",null,r.default.createElement(u.default,{list:o,active_ix:f,handleChoose:function(e){m(e)}})),r.default.createElement("div",null,r.default.createElement(d.default,{permission:c,handleSave:function(e){a({gender:o[f].gender,permission:e})},handleCancel:l})))}c.propTypes={gender:l.default.string,password:l.default.string,permission:l.default.number,handleSave:l.default.func,handleCancel:l.default.func},t.default=c},11199:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(67294)),r=s(a(45697)),l=a(82403),u=a(97619),d=a(10666),i=s(a(21716)),o=s(a(53049)),c=s(a(83695));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.lang_obj,a=(0,l.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add "+(""==t.title?"":"display-none")},n.default.createElement(i.default,{title_add:"Add a language",item_obj:{lang:"",permission:0},ComponentEdit:o.default,handleCreate:function(e){var n=e.lang,r=e.permission;t.title=(0,u.joinArrayWithAnd)(n.split(",")),t.lang=n,t.permission=r,a()},handle_API_C:d.handle_API_Lang_C})),n.default.createElement("div",null,n.default.createElement(c.default,{lang_obj:t,handleUpdateItemObj:function(e){var n=e.lang,r=e.permission;t.title=(0,u.joinArrayWithAnd)(n.split(",")),t.permission=r,t.lang=n,a()}})))}f.propTypes={lang_arr:r.default.array},t.default=f},53049:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=o(a(45697)),l=a(15617),u=o(a(91617)),d=a(81889),i=o(a(82322));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,r=e.handleCancel,o=t.permission,c=t.lang,s=(0,l.useInputSelect)({all_data_arr:d.data_profile_lang_arr,initial_data_str:c}),f=s.cur_data_arr,m=s.option_data_arr,p=s.value_input,_=s.handleChangeInput,h=s.handleSelectOption,v=s.handleRemoveSelectedItem;return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_input"},n.default.createElement(u.default,{selected_item_arr:f,option_item_arr:m,value:p,placeholder:"Language",handleChangeInput:_,handleSelectOption:h,handleRemoveSelectedItem:v})),n.default.createElement("div",null,n.default.createElement(i.default,{permission:o,handleCancel:r,handleSave:function(e){a({permission:e,lang:f.join(",")})}})))}c.propTypes={item_obj:r.default.object,handleSave:r.default.func,handleCancel:r.default.func},t.default=c},83695:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=o(a(45697)),l=(a(97619),a(7392)),u=a(10666),d=o(a(59487)),i=o(a(53049));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.lang_obj,a=e.handleUpdateItemObj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(d.default,{item_obj:t,Icon:l.IconsProfileAbout.lang,label:"Language",ComponentEdit:i.default,handle_API_U:u.handle_API_Lang_U,handleUpdateItemObj:a})))}c.propTypes={lang_obj:r.default.object},t.default=c},79335:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),i(a(68141))),l=i(a(92411)),u=i(a(97045)),d=i(a(93869));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.phone_arr,a=e.address_arr,i=e.email_obj,o=e.has_fetched,c=!(t.length||a.length||i.title);return n.default.createElement("div",{className:"PfAboutContact"},n.default.createElement("h3",{className:"PfAbout_title"},"Contact info"),n.default.createElement("div",null,n.default.createElement(r.default,{has_fetched:o,no_item:c,title:"No basis info to show"},n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(u.default,{phone_arr:t})),n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(d.default,{address_arr:a})),n.default.createElement("div",null,n.default.createElement(l.default,{email_obj:i}))))))}o.propTypes={},t.default=o},93869:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(67294)),r=c(a(45697)),l=a(82403),u=a(10666),d=c(a(21716)),i=c(a(3167)),o=c(a(17836));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.address_arr,a=(0,l.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(d.default,{title_add:"Add a address",item_obj:{address:"",permission:0},ComponentEdit:i.default,handleCreate:function(e){var n=e.address,r=e.permission;t.push({id:101+t.length,title:n,address:n,permission:r}),a()},handle_API_C:u.handle_API_Address_C})),n.default.createElement("div",null,t.map((function(e){return n.default.createElement("div",{key:"PfAboutAddress_"+e.id},n.default.createElement(o.default,{address_obj:e}))}))))}s.propTypes={address_arr:r.default.array},t.default=s},3167:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=o(r),u=o(a(45697)),d=o(a(82322)),i=o(a(6797));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,o=t.permission,c=t.address,s=(0,r.useState)(c),f=n(s,2),m=f[0],p=f[1],_=(0,r.useState)(!1),h=n(_,2),v=h[0],b=h[1];return l.default.createElement("div",null,l.default.createElement("div",{className:v?"text-red":"display-none"},l.default.createElement("div",null,"Address must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(i.default,{name:"address",value:m,type:"text",placeholder:"Your address",handleChange:function(e){p(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(d.default,{permission:o,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=c&&""==m?a({permission:e,address:m.trim()}):b(!0)}})))}c.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=c},17836:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=o(a(45697)),l=a(7392),u=a(10666),d=o(a(59487)),i=o(a(3167));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.address_obj;return n.default.createElement("div",null,n.default.createElement(d.default,{item_obj:t,Icon:l.IconsProfileAbout.address,ComponentEdit:i.default,handle_API_U:u.handle_API_Address_U,handleUpdateItemObj:function(e){var a=e.address,n=e.permission;t.title=a,t.permission=n,t.address=a}}))}c.propTypes={address_obj:r.default.object},t.default=c},92411:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),a(7392)),l=a(10666),u=i(a(59487)),d=i(a(63023));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.email_obj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(u.default,{item_obj:t,Icon:r.IconsProfileAbout.email,label:"Mail",ComponentEdit:d.default,handle_API_U:l.handle_API_Email_U,handleUpdateItemObj:function(e){var a=e.email,n=(e.password,e.permission);t.permission=n,t.email=a,t.title=a}})))}a(51189),o.propTypes={},t.default=o},63023:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=c(r),u=c(a(45697)),d=c(a(6797)),i=c(a(22350)),o=c(a(82322));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,c=t.email,f=t.permission,m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({cur_email:c,cur_pass:"",is_error:!1}),2),p=m[0],_=m[1],h=p.cur_email,v=p.cur_pass,b=p.is_error;function y(e,t){var a;_(n({},p,(s(a={},e,t.target.value),s(a,"is_error",!1),a)))}return l.default.createElement("div",{className:"PfAbEmailEdit"},l.default.createElement("div",{className:b?"":"display-none"},l.default.createElement("div",{className:"text-red"},"Your email does not look like a real email!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(d.default,{name:"email",value:h,type:"email",placeholder:"Email",handleChange:function(e){y("cur_email",e)}})),l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(i.default,{name:"password",password:v,placeholder:"Confirm Password",handleChange:function(e){y("cur_pass",e)}}))),l.default.createElement("div",null,l.default.createElement(o.default,{permission:f,handleSave:function(e){/^[a-zA-Z0-9]{4,}@[a-z]{2,10}\.[a-z]{2,10}$/.test(h)?a({email:h,password:v,permission:e}):_(n({},p,{is_error:!0}))},handleCancel:u})))}a(71265),f.propTypes={email:u.default.string,password:u.default.string,permission:u.default.number,handleSave:u.default.func,handleCancel:u.default.func},t.default=f},97045:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(67294)),r=c(a(45697)),l=a(82403),u=a(10666),d=c(a(21716)),i=c(a(54100)),o=c(a(49165));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.phone_arr,a=(0,l.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(d.default,{title_add:"Add a phone",item_obj:{phone:"",permission:0},ComponentEdit:i.default,handleCreate:function(e){var n=e.phone,r=e.permission;t.push({id:101+t.length,title:n,phone:n,permission:r}),a()},handle_API_C:u.handle_API_Phone_C})),n.default.createElement("div",null,t.map((function(e){return n.default.createElement("div",{key:"PfAboutPhone_"+e.id},n.default.createElement(o.default,{phone_obj:e}))}))))}s.propTypes={phone_arr:r.default.array},t.default=s},54100:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=o(r),u=o(a(45697)),d=o(a(82322)),i=o(a(6797));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,o=t.permission,c=t.phone,s=(0,r.useState)(c),f=n(s,2),m=f[0],p=f[1],_=(0,r.useState)(!1),h=n(_,2),v=h[0],b=h[1];return l.default.createElement("div",null,l.default.createElement("div",{className:v?"text-red":"display-none"},l.default.createElement("div",null,"Phone must have 10 numbers!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(i.default,{name:"phone",value:m,type:"tel",placeholder:"Your phone",handleChange:function(e){p(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(d.default,{permission:o,handleCancel:u,handleSave:function(e){/^\d{10}$/.test(m)||""!=c&&""==m?a({permission:e,phone:m}):b(!0)}})))}c.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=c},49165:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=o(a(45697)),l=a(7392),u=a(10666),d=o(a(59487)),i=o(a(54100));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.phone_obj;return n.default.createElement("div",null,n.default.createElement(d.default,{item_obj:t,Icon:l.IconsProfileAbout.phone,ComponentEdit:i.default,handle_API_U:u.handle_API_Phone_U,handleUpdateItemObj:function(e){var a=e.phone,n=e.permission;t.title=a,t.permission=n,t.phone=a}}))}c.propTypes={phone_obj:r.default.object},t.default=c},90214:(e,t,a)=>{"use strict";a.r(t)},41140:(e,t,a)=>{"use strict";a.r(t)},96499:(e,t,a)=>{"use strict";a.r(t)},86004:(e,t,a)=>{"use strict";a.r(t)},5271:(e,t,a)=>{"use strict";a.r(t)},19854:(e,t,a)=>{"use strict";a.r(t)},68038:(e,t,a)=>{"use strict";a.r(t)},51189:(e,t,a)=>{"use strict";a.r(t)},71265:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=965.js.map