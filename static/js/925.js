(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[925],{76047:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=c(r),u=(c(a(45697)),a(17892)),i=a(70361),d=a(39835),o=c(a(79514));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){var t,a,c=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.handle_API_UserOverview_r)({user_id:f});case 2:t=e.sent,_({town_arr:t.town_arr,city_arr:t.city_arr,has_fetched:!0});case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var u=e[r](l),i=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(){return a.apply(this,arguments)}),f=(0,u.GetIdSlug)(),s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(n({},d.initial_place_state)),2),m=s[0],_=s[1],v=m.town_arr,p=m.city_arr,h=m.has_fetched;return(0,r.useEffect)((function(){c()}),[]),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(o.default,{town_arr:v,city_arr:p,has_fetched:h})))}f.propTypes={},t.default=f},79514:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),u(a(64464))),l=u(a(69606));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.town_arr,a=e.city_arr,u=e.has_fetched;return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_part"},n.default.createElement(r.default,{town_arr:t,has_fetched:u})),n.default.createElement("div",{className:"PfAbout_part"},n.default.createElement(l.default,{city_arr:a,has_fetched:u})))}i.propTypes={},t.default=i},69606:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(67294)),r=f(a(45697)),l=a(20804),u=a(70361),i=f(a(21716)),d=f(a(22536)),o=f(a(1111)),c=f(a(68141));function f(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.city_arr,a=e.has_fetched,r=(0,l.useForceUpdate)(),f=!t.length;return n.default.createElement("div",null,n.default.createElement("h3",{className:"PfAbout_title"},"City"),n.default.createElement("div",null,n.default.createElement(c.default,{has_fetched:a,no_item:f,title:"No city to show"},n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(i.default,{title_add:"Add a City",item_obj:{city:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var a=e.city,n=e.permission;t.push({id:101+t.length,title:a,city:a,permission:n}),r()},handle_API_C:u.handle_API_City_C})),n.default.createElement("div",null,t.map((function(e){return n.default.createElement("div",{key:"PfAboutCity_"+e.id},n.default.createElement(o.default,{city_obj:e}))})))))))}s.propTypes={city_arr:r.default.array},t.default=s},22536:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=o(r),u=o(a(45697)),i=o(a(82322)),d=o(a(6797));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,o=t.permission,c=t.city,f=(0,r.useState)(c),s=n(f,2),m=s[0],_=s[1],v=(0,r.useState)(!1),p=n(v,2),h=p[0],y=p[1];return l.default.createElement("div",null,l.default.createElement("div",{className:h?"text-red":"display-none"},l.default.createElement("div",null,"City must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(d.default,{name:"city",value:m,type:"text",placeholder:"City",handleChange:function(e){_(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(i.default,{permission:o,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=c&&""==m?a({permission:e,city:m.trim()}):y(!0)}})))}c.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=c},1111:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=o(a(45697)),l=a(7392),u=a(70361),i=o(a(59487)),d=o(a(22536));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.city_obj;return n.default.createElement("div",null,n.default.createElement(i.default,{item_obj:t,Icon:l.IconsProfileAbout.city,ComponentEdit:d.default,handle_API_U:u.handle_API_City_U,handleUpdateItemObj:function(e){var a=e.city,n=e.permission;t.title=a,t.permission=n,t.city=a}}))}c.propTypes={city_obj:r.default.object},t.default=c},64464:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(67294)),r=f(a(45697)),l=a(20804),u=a(70361),i=f(a(21716)),d=f(a(62512)),o=f(a(4102)),c=f(a(68141));function f(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.town_arr,a=e.has_fetched,r=(0,l.useForceUpdate)(),f=!t.length;return n.default.createElement("div",null,n.default.createElement("h3",{className:"PfAbout_title"},"Town"),n.default.createElement("div",null,n.default.createElement(c.default,{has_fetched:a,no_item:f,title:"No town to show"},n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(i.default,{title_add:"Add a Town",item_obj:{town:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var a=e.town,n=e.permission;t.push({id:101+t.length,title:a,town:a,permission:n}),r()},handle_API_C:u.handle_API_Town_C})),n.default.createElement("div",null,t.map((function(e){return n.default.createElement("div",{key:"PfAboutTown_"+e.id},n.default.createElement(o.default,{town_obj:e}))})))))))}s.propTypes={town_arr:r.default.array},t.default=s},62512:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=o(r),u=o(a(45697)),i=o(a(82322)),d=o(a(6797));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,o=t.permission,c=t.town,f=(0,r.useState)(c),s=n(f,2),m=s[0],_=s[1],v=(0,r.useState)(!1),p=n(v,2),h=p[0],y=p[1];return l.default.createElement("div",null,l.default.createElement("div",{className:h?"text-red":"display-none"},l.default.createElement("div",null,"Town must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(d.default,{name:"town",value:m,type:"text",placeholder:"Home town",handleChange:function(e){_(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(i.default,{permission:o,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=c&&""==m?a({permission:e,town:m.trim()}):y(!0)}})))}c.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=c},4102:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=o(a(45697)),l=a(7392),u=a(70361),i=o(a(59487)),d=o(a(62512));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.town_obj;return n.default.createElement("div",null,n.default.createElement(i.default,{item_obj:t,Icon:l.IconsProfileAbout.town,ComponentEdit:d.default,handle_API_U:u.handle_API_Town_U,handleUpdateItemObj:function(e){var a=e.town,n=e.permission;t.title=a,t.permission=n,t.town=a}}))}c.propTypes={town_obj:r.default.object},t.default=c}}]);
//# sourceMappingURL=925.js.map