(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[1389],{78974:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fs_notice_arr=void 0;var n=a(39727),r=a(69565),o=a(8047),i=a(7605),l=function(){return{id:(0,r.getRandomId)(),link_to:"/fashion",logo:(0,o.getRandomVidPic)(),name:"Rình rang mã hot cho siêu sale 22.09",info:"😍 Hoàn xu đến 20K cho đơn 99K 💥 Hoàn xu đến 100K cho đơn 500K ⚡ Hoàn xu Shopee Mall đến70K👉 Săn trước hôm nay để dành 22.9 bạn ơi!",img:(0,o.getRandomVidPicOrNull)(),has_read:(0,n.getRandomBool)(),created_time:(new Date).getTime()}};t.default_fs_notice_arr=function(){return(0,i.getDefaultArr)(l,8,10)}},82892:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FsNotice_L=void 0;var n,r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=(t.handle_API_FsNotice_L=(n=regeneratorRuntime.mark((function e(t){var a,n=t.c_count,r=void 0===n?0:n,l=t.params,c=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_FsNotice_L)({params:o({page:1,size:5,c_count:r},c)});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=n.apply(this,arguments);return new Promise((function(t,a){return function n(r,o){try{var i=e[r](o),l=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return r.apply(this,arguments)}),a(49436))},49436:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FsNotice_L=void 0;var n,r=(n=a(87421))&&n.__esModule?n:{default:n},o=a(50918),i=a(78974);t.API_FsNotice_L=function(e){var t=e.params,a=void 0===t?{}:t;return(0,o.API_FakeReal)((0,i.default_fs_notice_arr)(),(function(){return(0,r.default)({url:"api/shopee/bank-l/",method:"GET",params:a})}),a,!0)}},2490:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.has_new,a=e.markAllAsRead;return n.default.createElement("div",{className:"FsPNoticeMarkAll padding-y-10px padding-x-20px"},n.default.createElement("div",{className:"flex-end"},n.default.createElement("button",{className:"btn "+(t?"hv-cl-fashion cursor-pointer":"pointer-events-none opacity-02"),type:"button",onClick:a},"Đánh dấu Đã đọc tất cả")))}r(a(45697)),o.propTypes={},t.default=o},36054:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.FsPNotice_markAllAsRead=function(e){(0,e.setDataState)((function(e){var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(e.data_arr));return t.forEach((function(e){e.has_read=!0})),a({},e,{data_arr:t})}))}},21389:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=m(n),o=m(a(45697)),i=a(82892),l=a(84353),c=m(a(11623)),u=m(a(60146)),s=m(a(27883)),d=m(a(2490)),f=a(36054);function m(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=e.notice_type,a=(0,l.useDataShowMore)({initial_arr:[],handle_API_L:function(e){return(0,i.handle_API_FsNotice_L)({c_count:e,params:{notice_type:t}})}}),o=a.data_state,m=a.setDataState,_=a.getData_API,p=o.data_arr,h=o.count,v=o.is_fetching,g=o.has_fetched;return(0,n.useEffect)((function(){_()}),[]),r.default.createElement("div",{className:"FsPNoticeCommon bg-primary"},g?r.default.createElement("div",null,r.default.createElement("div",{className:"border-bottom-blur font-14px"},r.default.createElement(d.default,{has_new:p.some((function(e){return!e.has_read})),markAllAsRead:function(){(0,f.FsPNotice_markAllAsRead)({setDataState:m})}})),p.map((function(e,t){return r.default.createElement("div",{key:e.id,className:e.has_read?"":"bg-fashion-heart"},r.default.createElement(u.default,{logo:e.logo,name:e.name,info:e.info,img:e.img,created_time:e.created_time,link_to:e.link_to}))})),r.default.createElement("div",null,r.default.createElement(c.default,{title:"Xem thêm",is_fetching:v,is_show_more:p.length<h,FetchingComponent:s.default,handleShowMore:function(){_()}}))):r.default.createElement("div",{className:"h-100per"}))}_.propTypes={notice_type:o.default.string},_.defaultProps={notice_type:""},t.default=_},60146:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),a(93191)),o=a(47442);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.logo,a=e.name,i=e.info,l=e.img,c=e.created_time,u=e.link_to;return n.default.createElement("div",{className:"FsPNCommonItem padding-20px font-14px"},n.default.createElement("div",{className:"FsPNCommonItem_row display-flex space-between"},n.default.createElement("div",{className:"margin-right-20px"},n.default.createElement("img",{className:"object-fit-cover",src:t,alt:"",width:"80",height:"80"})),n.default.createElement("div",{className:"flex-grow-1 margin-right-20px"},n.default.createElement("h2",{className:"margin-bottom-10px font-16px font-400"},a),n.default.createElement("div",{className:"text-third"},i),l?n.default.createElement("div",{className:"margin-top-5px margin=bottom-5px"},n.default.createElement("img",{className:"object-fit-cover",src:l,alt:"",width:"400",height:"200"})):null,n.default.createElement("div",{className:"text-del"},(0,o.formatLocalDateTimeString)(c))),n.default.createElement("div",null,n.default.createElement(r.Link,{className:"color-inherit font-12px text-cap",to:u},n.default.createElement("div",{className:"FsPNCommonItem_link_contain padding-y-4px padding-x-8px border-blur hv-cl-fashion text-nowrap"},"Xem chi tiết")))))}a(29105),l.propTypes={},t.default=l},29105:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=1389.js.map