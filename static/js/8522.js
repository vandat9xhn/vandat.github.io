(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8522],{66963:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=l(n(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.class_icon,n=e.x,a=e.y,l=e.size_icon,i=e.stroke,o=e.stroke_width,c=e.fill;return r.default.createElement("svg",{className:"IconFriends "+t,viewBox:n+" "+a+" 200 200",width:l,height:l,stroke:i,fill:c,strokeLinecap:"round",strokeWidth:o},r.default.createElement("circle",{cx:"460",cy:"60",r:"35"}),r.default.createElement("path",{d:"M405,175 Q410,100 460,100 Q510,100 515,175 Z"}),r.default.createElement("circle",{cx:"550",cy:"60",r:"25"}),r.default.createElement("path",{d:"M500,145 Q505,90 550,90 Q590,90 595,145 Z"}))}i.propTypes={class_icon:a.default.string,x:a.default.number,y:a.default.number,size_icon:a.default.string,stroke:a.default.string,stroke_width:a.default.number,fill:a.default.string},i.defaultProps={class_icon:"",x:400,y:0,size_icon:"1rem",stroke:"none",stroke_width:0,fill:"currentColor"},t.default=i},75238:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=(i(n(45697)),n(55852)),l=i(n(64458));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.user_id,n=e.title_action;return a.IS_MOBILE?n:r.default.createElement(l.default,{user_id:t,title_action:n})}o.propTypes={},t.default=o},42610:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=n(93191),l=(i(n(45697)),i(n(66963)));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.mutual_friend_count,n=e.friend_arr;return r.default.createElement("div",{className:"ActionsPreviewFriend display-flex"},r.default.createElement(l.default,{fill:"var(--md-color-secondary)"}),r.default.createElement("div",null,r.default.createElement("span",null,t," mutual friend",t>=2?"s":"",t<=2?": ":", including "),n.slice(0,2).map((function(e,t){return r.default.createElement("span",{key:t},r.default.createElement(a.Link,{className:"color-inherit font-500 hv-underline",to:"/profile/"+e.id},e.first_name," ",e.last_name),n.length>=2&&0==t?" and ":"")}))))}o.propTypes={},t.default=o},46617:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.Icon,n=e.title,a=e.info;return r.default.createElement("div",{className:"ActionsPreviewInfo display-flex"},t,r.default.createElement("div",null,r.default.createElement("span",null,n)," ",r.default.createElement("span",{className:"font-500"},a)))}a(n(45697)),l.propTypes={},t.default=l},64458:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(67294),l=h(a),i=n(93191),o=(h(n(45697)),n(78295)),c=n(80941),u=n(82403),s=n(68291),d=h(n(4299)),f=h(n(98989)),_=h(n(28139)),p=h(n(40808)),m=h(n(87049)),v=h(n(42610)),y=h(n(46617));function h(e){return e&&e.__esModule?e:{default:e}}function E(e){var t,n,h=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(r({},k,{is_fetching:!0})),e.next=3,(0,c.handle_API_ProfileInfo_R)({user_id:E});case 3:t=e.sent,P(r({},k,{profile:t,is_fetching:!1,has_fetched:!0}));case 5:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,l){try{var i=e[a](l),o=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(o).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(o)}("next")}))},function(){return n.apply(this,arguments)}),E=e.user_id,w=e.title_action,b=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({profile:(0,o.initial_profile)(),is_fetching:!1,has_fetched:!1,show_count:0}),2),k=b[0],P=b[1],g=k.profile,x=k.is_fetching,L=k.has_fetched,M=k.show_count,N=g.id,A=g.first_name,T=g.last_name,O=g.picture,S=g.mutual_friend_count,j=g.friend_arr,H=g.time_to_birth,I=g.town,C=g.university,Q=g.action_case_arr,z=(0,s.useHold)({time:100,time_holding_start:400}),F=z.StartHold,R=z.StopHold,B=(0,u.useForceUpdate)();function Z(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];P((function(t){var n=t.show_count+(e?1:-1);return r({},t,{show_count:n<=0?0:1})}))}function U(){0==M?F((function(){Z(!0)})):Z(!0)}function W(){R(),Z(!1)}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(e)}var D=[{component:v.default,props:{mutual_friend_count:S,friend_arr:j},can_show:S>0},{component:y.default,props:{Icon:l.default.createElement(d.default,null),title:"Studied at",info:C},can_show:!!C},{component:y.default,props:{Icon:l.default.createElement(d.default,null),title:(0==H?"Today is":H+" day"+(H>=2?"s":"")+" to")+" birthday of "+T,info:0==H?"Happy birthday to "+T:""},can_show:H>=0},{component:y.default,props:{Icon:l.default.createElement(d.default,null),title:"Lives in",info:I},can_show:!!I}];return l.default.createElement(_.default,{title_action:l.default.createElement("div",{className:"ActionPreviewProfilePc_title display-inherit cursor-pointer hv-underline",onMouseEnter:U,onMouseLeave:W},w),class_action_contain:"ActionPreviewProfilePc",use_own_title:!0,is_show:M>0,callbackOpen:function(){L?B():h()}},l.default.createElement("div",{className:"ActionPreviewProfilePc_contain",onMouseEnter:U,onMouseLeave:W},L?l.default.createElement("div",{className:x?"display-none":""},l.default.createElement("div",{className:"display-flex"},l.default.createElement("div",null,l.default.createElement(i.Link,{to:"/profile/"+N},l.default.createElement("img",{className:"brs-50 object-fit-cover",src:O,alt:"",width:"96",height:"96"}))),l.default.createElement("div",{className:"ActionPreviewProfilePc_right padding-left-16px overflow-hidden"},l.default.createElement("div",{className:"margin-y-8px text-nowrap"},l.default.createElement(i.Link,{className:"font-20px font-700 color-inherit hv-underline",to:"/profile/"+N},A," ",T)),D.map((function(e,t){return e.can_show?l.default.createElement("div",{key:t,className:"margin-y-8px"},l.default.createElement(e.component,e.props)):null})))),l.default.createElement("div",{className:"display-flex flex-wrap padding-top-15px"},Q.map((function(e,t){return l.default.createElement("div",{key:t,className:"ActionPreviewProfilePc_btn ActionPreviewProfilePc_btn_main flex-grow-1"},l.default.createElement(p.default,{action_case:e.name,user_id:E,is_at_body:!0,handleAction:q}))})),l.default.createElement("div",{className:"ActionPreviewProfilePc_btn"},l.default.createElement(m.default,{user_id:E,class_action_contain:"ActionPreviewProfilePc_other_contain",is_at_body:!0,handleAction:q})))):null,l.default.createElement("div",{className:x?"display-flex-center":"display-none"},l.default.createElement(f.default,{is_fetching:x}))))}n(1549),E.propTypes={},t.default=E},48999:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=o(r),l=(o(n(45697)),n(68291)),i=o(n(28139));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.title_action,n=e.class_action_contain,o=e.children,c=e.scroll_elm,u=e.changeStyleAction,s=e.x_always,d=e.transform_x_more,f=e.y_always,_=e.transform_y_more,p=e.time_hold,m=void 0===p?500:p,v=e.time_leave,y=void 0===v?800:v,h=e.force_close,E=e.callbackOpen,w=e.callbackClose,b=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(0),2),k=b[0],P=b[1],g=(0,l.useHold)({time:m}),x=g.StartHold,L=g.StopHold,M=(0,l.useHold)({time:y}),N=M.StartHold,A=M.StopHold;function T(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];P((function(t){return t+(e?1:-1)<=0?0:1}))}function O(){A(),x((function(){T(!0)}))}function S(){L(),N((function(){T(!1)}))}return(0,r.useEffect)((function(){L(),P(0)}),[h]),a.default.createElement(i.default,{title_action:a.default.createElement("div",{className:"ActionsHoldPc_title display-inherit cursor-pointer hv-underline",onMouseEnter:O,onMouseLeave:S},t),class_action_contain:"ActionsHoldPc "+n,use_own_title:!0,is_show:k>0,scroll_elm:c,changeStyleAction:u,x_always:s,transform_x_more:d,y_always:f,transform_y_more:_,callbackOpen:E,callbackClose:w},a.default.createElement("div",{className:"ActionsHoldPc_contain",onMouseEnter:O,onMouseLeave:S},o))}c.propTypes={},t.default=c},98184:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),a=o(n(45697)),l=n(53898);n(34181);var i=o(n(548));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.chooseListTypeLike,n=e.open_type_like;return r.default.createElement("div",{className:"ListTypeLike pos-rel user-select-none"},r.default.createElement("div",{className:n?"open-type-like":"display-none"},r.default.createElement("div",{className:"ListTypeLike_contain padding-5px bg-primary"},r.default.createElement("div",{className:"ListTypeLike_row display-flex"},l.type_likes.map((function(e,n){return r.default.createElement("div",{key:n,className:"ListTypeLike_item margin-x-5px flex-shrink-0"},r.default.createElement(i.default,{index:n,title:e.title,component:e.component,chooseListTypeLike:t}))}))))))}c.propTypes={open_type_like:a.default.bool,chooseListTypeLike:a.default.func},t.default=c},548:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=l(n(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.index,n=e.title,a=e.component,l=e.chooseListTypeLike;return r.default.createElement("div",{className:"ListTypeLikeItem pos-rel cursor-pointer",onClick:function(){l(t)},title:n},a)}n(67741),i.propTypes={index:a.default.number,title:a.default.string,component:a.default.object,chooseListTypeLike:a.default.func},t.default=i},1549:(e,t,n)=>{"use strict";n.r(t)},34181:(e,t,n)=>{"use strict";n.r(t)},67741:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=8522.js.map