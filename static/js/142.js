(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[142],{59149:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(67294)),n=(d(a(45697)),d(a(4663))),u=d(a(58726)),r=d(a(81066)),o=d(a(68141));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t={you:"",permission:0},a=[],d={favour:"",permission:0},i=!(t.title||a.length||d.title);return l.default.createElement("div",null,l.default.createElement("h3",{className:"PfAbout_title"},"Details about ",""),l.default.createElement("div",null,l.default.createElement(o.default,{has_fetched:!0,no_item:i,title:"No detail to show"},l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(n.default,{you_obj:t})),l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(u.default,{other_name_arr:a})),l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(r.default,{favour_obj:d}))))))}i.propTypes={},t.default=i},4663:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(a(67294)),n=f(a(45697)),u=a(20804),r=a(70361),o=f(a(21716)),d=f(a(29562)),i=f(a(65337));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.you_obj,a=(0,u.useForceUpdate)();return l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_add "+(""==t.you?"":"display-none")},l.default.createElement(o.default,{title_add:"Add about you",item_obj:{you:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var l=e.you,n=e.permission;t.title=l,t.you=l,t.permission=n,a()},handle_API_C:r.handle_API_You_U})),l.default.createElement("div",null,l.default.createElement(i.default,{you_obj:t,handleUpdateItemObj:function(e){var l=e.you,n=e.permission;t.title=l,t.permission=n,t.you=l,a()}})))}c.propTypes={you_obj:n.default.object},t.default=c},29562:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(67294),n=d(l),u=d(a(45697)),r=d(a(6797)),o=d(a(82322));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,d=t.permission,i=t.you,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],l=!0,n=!1,u=void 0;try{for(var r,o=e[Symbol.iterator]();!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){n=!0,u=e}finally{try{!l&&o.return&&o.return()}finally{if(n)throw u}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)(i),2),c=f[0],m=f[1];return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_input"},n.default.createElement(r.default,{name:"you",value:c,placeholder:"About you",max_length:1e3,handleChange:function(e){m(e.target.value)}}))),n.default.createElement("div",null,n.default.createElement(o.default,{permission:d,handleCancel:u,handleSave:function(e){a({permission:e,you:c})}})))}i.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=i},65337:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(67294)),n=i(a(45697)),u=a(7392),r=a(70361),o=i(a(59487)),d=i(a(29562));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.you_obj,a=e.handleUpdateItemObj;return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement(o.default,{item_obj:t,Icon:u.IconsProfileAbout.you,label:"About you",ComponentEdit:d.default,handle_API_U:r.handle_API_You_U,handleUpdateItemObj:a})))}f.propTypes={you_obj:n.default.object,handleUpdateItemObj:n.default.func},t.default=f},81066:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(a(67294)),n=f(a(45697)),u=a(20804),r=a(70361),o=f(a(21716)),d=f(a(53114)),i=f(a(85695));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.favour_obj,a=(0,u.useForceUpdate)();return l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_add "+(""==t.title?"":"display-none")},l.default.createElement(o.default,{title_add:"Add a favour",item_obj:{favour:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var l=e.favour,n=e.permission;t.title=l,t.favour=l,t.permission=n,a()},handle_API_C:r.handle_API_Favour_U})),l.default.createElement("div",null,l.default.createElement(i.default,{favour_obj:t,handleUpdateItemObj:function(e){var l=e.favour,n=e.permission;t.title=l,t.permission=n,t.favour=l,a()}})))}c.propTypes={favour_obj:n.default.object},t.default=c},53114:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(67294),n=d(l),u=d(a(45697)),r=d(a(6797)),o=d(a(82322));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,d=t.permission,i=t.favour,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],l=!0,n=!1,u=void 0;try{for(var r,o=e[Symbol.iterator]();!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){n=!0,u=e}finally{try{!l&&o.return&&o.return()}finally{if(n)throw u}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)(i),2),c=f[0],m=f[1];return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_input"},n.default.createElement(r.default,{name:"favour",value:c,placeholder:"About favour",max_length:1e3,handleChange:function(e){m(e.target.value)}}))),n.default.createElement("div",null,n.default.createElement(o.default,{permission:d,handleCancel:u,handleSave:function(e){a({permission:e,favour:c})}})))}i.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=i},85695:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(67294)),n=i(a(45697)),u=a(7392),r=a(70361),o=i(a(59487)),d=i(a(53114));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.favour_obj,a=e.handleUpdateItemObj;return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement(o.default,{item_obj:t,Icon:u.IconsProfileAbout.favour,label:"Favour",ComponentEdit:d.default,handle_API_U:r.handle_API_Favour_U,handleUpdateItemObj:a})))}f.propTypes={favour_obj:n.default.object,handleUpdateItemObj:n.default.func},t.default=f},58726:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(a(67294)),n=f(a(45697)),u=a(20804),r=a(70361),o=f(a(21716)),d=f(a(15455)),i=f(a(10512));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.other_name_arr,a=(0,u.useForceUpdate)();return l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_add"},l.default.createElement(o.default,{title_add:"Add a other name",item_obj:{other_name:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var l=e.other_name,n=e.permission;t.push({id:101+t.length,title:l,other_name:l,permission:n}),a()},handle_API_C:r.handle_API_OtherName_C})),l.default.createElement("div",null,t.map((function(e){return l.default.createElement("div",{key:"PfAboutOtherName_"+e.id},l.default.createElement(i.default,{other_name_obj:e}))}))))}c.propTypes={other_name_arr:n.default.array},t.default=c},15455:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],l=!0,n=!1,u=void 0;try{for(var r,o=e[Symbol.iterator]();!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){n=!0,u=e}finally{try{!l&&o.return&&o.return()}finally{if(n)throw u}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(67294),u=i(n),r=i(a(45697)),o=i(a(82322)),d=i(a(6797));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.item_obj,a=e.handleSave,r=e.handleCancel,i=t.permission,f=t.other_name,c=(0,n.useState)(f),m=l(c,2),s=m[0],_=m[1],v=(0,n.useState)(!1),p=l(v,2),h=p[0],b=p[1];return u.default.createElement("div",null,u.default.createElement("div",{className:h?"text-red":"display-none"},u.default.createElement("div",null,"OtherName must have at least 2 letters!"),u.default.createElement("br",null)),u.default.createElement("div",null,u.default.createElement("div",{className:"PfAbout_input"},u.default.createElement(d.default,{name:"other_name",value:s,type:"text",placeholder:"Other name",handleChange:function(e){_(e.target.value)}}))),u.default.createElement("div",null,u.default.createElement(o.default,{permission:i,handleCancel:r,handleSave:function(e){/[a-zA-Z]{2,}/.test(s)||""!=f&&""==s?a({permission:e,other_name:s.trim()}):b(!0)}})))}f.propTypes={item_obj:r.default.object,handleSave:r.default.func,handleCancel:r.default.func},t.default=f},10512:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(67294)),n=i(a(45697)),u=a(7392),r=a(70361),o=i(a(59487)),d=i(a(15455));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.other_name_obj;return l.default.createElement("div",null,l.default.createElement(o.default,{item_obj:t,Icon:u.IconsProfileAbout.other_name,ComponentEdit:d.default,handle_API_U:r.handle_API_OtherName_U,handleUpdateItemObj:function(e){var a=e.other_name,l=e.permission;t.title=a,t.permission=l,t.other_name=a}}))}f.propTypes={other_name_obj:n.default.object},t.default=f}}]);
//# sourceMappingURL=142.js.map