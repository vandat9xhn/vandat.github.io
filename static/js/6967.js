(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6967],{17892:(e,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.GetIdSlug=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?parseInt(location.pathname.split("/").slice(-1)[0]):location.pathname.split("/").slice(-1)[0]}},81042:(e,i,s)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.API_PostHisSub_R=i.API_PostSubHistory_L=i.API_PostSubLike_U=i.API_PostSubLike_C=i.API_PostSubLike_L=i.API_PostSub_UD=i.API_PostSub_R=i.API_PostSub_LC=i.API_PostHisCmt_R=i.API_PostCmtHistory_L=i.API_PostCmtLike_U=i.API_PostCmtLike_C=i.API_PostCmtLike_L=i.API_PostCmt_UD=i.API_PostCmt_R=i.API_PostCmt_LC=i.API_PostHistory_R=i.API_PostHistory_L=i.API_PostShare_C=i.API_PostShare_L=i.API_PostLike_U=i.API_PostLike_C=i.API_PostLike_L=i.API_PostPicHistory_L=i.API_PostPicLike_L=i.API_PostPic_RUD=i.API_PostPic_C=i.API_PostPic_L=i.API_Post_U=i.API_Post_RD=i.API_Post_C=i.API_Post_L=void 0;var o,t=(o=s(87421))&&o.__esModule?o:{default:o},r=s(50918),n=s(17332);i.API_Post_L=function(e){return(0,r.API_FakeReal)(n.default_post_arr,(function(){return(0,t.default)({url:"/user/l-post/",method:"GET",params:e})}),e)},i.API_Post_C=function(e){return(0,r.API_FakeReal)({},(function(){return(0,t.default)({url:"/user/c-post/",method:"POST",data:e})}))},i.API_Post_RD=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,r.API_FakeReal)(n.default_post_arr[0],(function(){return(0,t.default)({url:"/user/rd-post/"+e+"/",method:i,params:s})}))},i.API_Post_U=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.API_FakeReal)({},(function(){return(0,t.default)({url:"/user/u-post/"+e+"/",method:"PATCH",data:i})}))},i.API_PostPic_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.API_FakeReal)(Array(6).fill(n.default_post_arr[0].vid_pics),(function(){return(0,t.default)({url:"/user/l-vid-pic-post/",method:"GET",params:e})}),e)},i.API_PostPic_C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.default)({url:"/user/c-vid-pic-post/",method:"POST",data:e})},i.API_PostPic_RUD=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,r.API_FakeReal)(n.default_post_arr[0].vid_pics[0],(function(){return(0,t.default)({url:"/user/rud-vid-pic-post/"+e+"/",method:i,params:s,data:o})}))},i.API_PostPicLike_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.API_FakeReal)(n.default_post_arr[0].vid_pics[0].likes,(function(){return(0,t.default)({url:"/user/l-like-vid-pic-post/",method:"GET",params:e})}),e)},i.API_PostPicHistory_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.API_FakeReal)(n.default_post_arr[0].vid_pics[0].histories,(function(){return(0,t.default)({url:"/user/l-history-vid-pic-post/",method:"GET",params:e})}),e)},i.API_PostLike_L=function(e){return(0,r.API_FakeReal)(n.default_like_post_arr,(function(){return(0,t.default)({url:"/user/lc-like-post/",method:"GET",params:e})}),e)},i.API_PostLike_C=function(e){return(0,t.default)({url:"/user/lc-like-post/",method:"POST",data:e})},i.API_PostLike_U=function(e){return(0,t.default)({url:"/user/u-like-post/",method:"PATCH",data:e})},i.API_PostShare_L=function(e){return(0,r.API_FakeReal)(n.default_share_post_arr,(function(){return(0,t.default)({url:"/user/lc-share-post/",method:"GET",params:e})}),e)},i.API_PostShare_C=function(e){return(0,t.default)({url:"/user/lc-share-post/",method:"POST",data:e})},i.API_PostHistory_L=function(e){return(0,r.API_FakeReal)(n.default_history_post_arr,(function(){return(0,t.default)({url:"/user/lc-history-post/",method:"GET",params:e})}),e)},i.API_PostHistory_R=function(e){return(0,r.API_FakeReal)(n.default_history_post_arr[0],(function(){return(0,t.default)({url:"/user/r-history-post/",method:"GET",params:e})}),e)},i.API_PostCmt_LC=function(e,i,s){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,r.API_FakeReal)("GET"==e?o?[]:n.default_cmt_post_arr:s,(function(){return(0,t.default)({url:"/user/lc-comment"+(o?"-vid-pic":"")+"/",method:e,params:i,data:s})}),i)},i.API_PostCmt_R=function(e,i){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,r.API_FakeReal)(s?[]:n.default_cmt_post_arr[0],(function(){return(0,t.default)({url:"/user/ud-comment"+(s?"-vid-pic":"")+"/"+e+"/",method:"GET",params:i})}))},i.API_PostCmt_UD=function(e,i,s){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,r.API_FakeReal)(s,(function(){return(0,t.default)({url:"/user/ud-comment"+(o?"-vid-pic":"")+"/"+e+"/",method:i,data:s})}))},i.API_PostCmtLike_L=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,r.API_FakeReal)(i?[]:n.default_like_cmt_post_arr,(function(){return(0,t.default)({url:"/user/l-like-comment"+(i?"-vid-pic":"")+"/",method:"GET",params:e})}),e)},i.API_PostCmtLike_C=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,t.default)({url:"/user/c-like-comment"+(i?"-vid-pic":"")+"/",method:"POST",data:e})},i.API_PostCmtLike_U=function(e,i){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,t.default)({url:"/user/u-like-comment"+(s?"-vid-pic":"")+"/"+e+"/",method:"PATCH",data:i})},i.API_PostCmtHistory_L=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,r.API_FakeReal)(i?[]:n.default_history_cmt_post_arr,(function(){return(0,t.default)({url:"/user/lc-history-cmt"+(i?"-vid-pic":"")+"/",method:"GET",params:e})}),e)},i.API_PostHisCmt_R=function(e,i){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,r.API_FakeReal)(s?[]:n.default_history_cmt_post_arr[0],(function(){return(0,t.default)({url:"/user/r-history-cmt"+(s?"-vid-pic":"")+"/"+e+"/",method:"GET",params:i})}))},i.API_PostSub_LC=function(e,i,s){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,r.API_FakeReal)(o?[]:n.default_sub_post_arr,(function(){return(0,t.default)({url:"/user/l-sub-comment"+(o?"-vid-pic":"")+"/",method:e,params:i,data:s})}),i)},i.API_PostSub_R=function(e,i){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,r.API_FakeReal)(s?[]:n.default_sub_post_arr[0],(function(){return(0,t.default)({url:"/user/ud-sub-comment"+(s?"-vid-pic":"")+"/"+e+"/",method:"GET",params:i})}))},i.API_PostSub_UD=function(e,i,s){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,r.API_FakeReal)(s,(function(){return(0,t.default)({url:"/user/ud-sub-comment"+(o?"-vid-pic":"")+"/"+e+"/",method:i,data:s})}))},i.API_PostSubLike_L=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,r.API_FakeReal)(n.default_like_sub_post_arr,(function(){return(0,t.default)({url:"/user/l-like-sub"+(i?"-vid-pic":"")+"/",method:"GET",params:e})}),e)},i.API_PostSubLike_C=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,t.default)({url:"/user/c-like-sub"+(i?"-vid-pic":"")+"/",method:"POST",data:e})},i.API_PostSubLike_U=function(e,i){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,t.default)({url:"/user/u-like-sub"+(s?"-vid-pic":"")+"/"+e+"/",method:"PATCH",data:i})},i.API_PostSubHistory_L=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,r.API_FakeReal)(i?[]:n.default_history_sub_post_arr,(function(){return(0,t.default)({url:"/user/lc-history-sub"+(i?"-vid-pic":"")+"/",method:"GET",params:e})}),e)},i.API_PostHisSub_R=function(e,i){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,r.API_FakeReal)(s?[]:n.default_history_sub_post_arr[0],(function(){return(0,t.default)({url:"/user/r-history-sub"+(s?"-vid-pic":"")+"/"+e+"/",method:"GET",params:i})}))}},17332:(e,i,s)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.more_content_post=i.default_post_arr=i.default_album_vid_pic_arr=i.default_history_sub_post_arr=i.default_like_sub_post_arr=i.default_sub_post_arr=i.default_history_cmt_post_arr=i.default_like_cmt_post_arr=i.default_cmt_post_arr=i.default_history_post_arr=i.default_share_post_arr=i.default_like_post_arr=void 0;var o=r(s(86578)),t=r(s(24237));function r(e){return e&&e.__esModule?e:{default:e}}i.default_like_post_arr=[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:4,vid_pic_model:6,profile_user:3}],i.default_share_post_arr=[{id:1,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:1},{id:2,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:1},{id:3,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:2}],i.default_history_post_arr=[{id:1,vid_pics_create:[],count_vid_pic_create:0,vid_pics_del:[{id:1,vid_pic:o.default,content:"c c c",his_post:1}],count_vid_pic_del:1,content_obj:{has_more_content:!1,content:"aa"},content:"aa",created_time:"2021-05-10T03:27:29.438225Z",version:1,post_model:11},{id:2,vid_pics_create:[{id:2,vid_pic:o.default,note:"c c c",his_post:2}],count_vid_pic_create:1,vid_pics_del:[],count_vid_pic_del:0,content_obj:{has_more_content:!0,content:"as ad asd asd asd asd ads a"},content:"as ad asd asd asd asd ads a",created_time:"2021-05-10T03:27:29.438225Z",version:1,post_model:11},{id:3,vid_pics_create:[{id:4,vid_pic:o.default,note:"c c c",his_post:3}],count_vid_pic_create:1,vid_pics_del:[{id:4,vid_pic:o.default,note:"c c c",his_post:3},{id:4,vid_pic:o.default,note:"d d d",his_post:3},{id:6,vid_pic:o.default,note:"z",his_post:3}],count_vid_pic_del:1,content_obj:{has_more_content:!0,content:"as ad asd asd asd asd ads a"},content:"as ad asd asd asd asd ads a",created_time:"2021-05-10T03:27:29.438225Z",version:1,post_model:11}],i.default_cmt_post_arr=[{id:1,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!1,content:"Comment"},likes:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:2,comment_model:1,profile_user:3}],count_like:1,user_type_like:-2,subs:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!1,content:"Sub comment"},likes:[{id:1,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:3,sub_model:1,profile_user:2}],count_like:1,user_type_like:-1,histories:[],count_history:0,created_time:"2021-04-02T06:44:46.495730Z",updated_time:"2021-04-02T06:44:46.495730Z",vid_pic:o.default,comment_model:1,profile_user:3}],count_sub:1,histories:[],count_history:0,created_time:"2021-04-02T06:42:36.443763Z",updated_time:"2021-04-02T06:42:36.443763Z",vid_pic:o.default,post_model:11,profile_user:2}],i.default_like_cmt_post_arr=[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:2,comment_model:1,profile_user:3}],i.default_history_cmt_post_arr=[{id:1,content_obj:{has_more_content:!1,content:"This is history comment 1"},content:"This is history comment 1",created_time:"2021-05-08T02:57:45.006797Z",vid_pic:"",version:1,comment_model:1},{id:2,content_obj:{has_more_content:!0,content:"This is history comment 2. "},content:"This is history comment 2",created_time:"2021-05-08T02:58:02.639178Z",vid_pic:o.default,version:2,comment_model:1}],i.default_sub_post_arr=[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!0,content:"Sub comment"},likes:[{id:1,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:3,sub_model:1,profile_user:2}],count_like:1,user_type_like:-1,histories:[],count_history:0,created_time:"2021-04-02T06:44:46.495730Z",updated_time:"2021-04-02T06:44:46.495730Z",vid_pic:o.default,comment_model:1,profile_user:3}],i.default_like_sub_post_arr=[{id:1,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:3,sub_model:1,profile_user:2}],i.default_history_sub_post_arr=[{id:1,content_obj:{has_more_content:!0,content:"This is history sub 1. "},content:"This is history sub 1",created_time:"2021-05-08T02:57:45.006797Z",vid_pic:o.default,version:1,sub_model:1},{id:2,content_obj:{has_more_content:!1,content:""},content:"",created_time:"2021-05-08T02:58:02.639178Z",vid_pic:o.default,version:2,sub_model:1}],i.default_album_vid_pic_arr=[{id:1,name:"My My",vid_pics:[{id:1,vid_pic:t.default}]}],i.default_post_arr=[{id:11,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!0,content:"ad asd sd sd dsa d"},vid_pics:[{id:6,content_obj:{has_more_content:!1,content:"note 1"},likes:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:4,vid_pic_model:6,profile_user:3}],arr_unique_like:[0,2,3],count_like:1,vid_pic:t.default,content:"note 1",folder_picture:"my folder picture",post_model:11,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},comments:[{id:8,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!1,content:"Comment"},likes:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:2,comment_model:1,profile_user:3}],count_like:1,user_type_like:-2,subs:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!1,content:"Sub comment"},likes:[{id:1,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:3,sub_model:1,profile_user:2}],count_like:1,user_type_like:1,histories:[],count_history:0,created_time:"2021-04-02T06:44:46.495730Z",updated_time:"2021-04-02T06:44:46.495730Z",vid_pic:o.default,comment_model:8,profile_user:3}],count_sub:1,histories:[],count_history:0,created_time:"2021-04-02T06:42:36.443763Z",updated_time:"2021-04-02T06:42:36.443763Z",vid_pic:o.default,vid_pic_model:6,profile_user:2}],count_comment:1,histories:[],created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}],count_vid_pic:1,likes:[{id:2,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:1,post_model:11,profile_user:2},{id:3,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:2,post_model:11,profile_user:3}],count_like:2,user_type_like:-2,shares:[{id:1,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:1},{id:2,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:1},{id:3,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:2}],count_share:3,count_unique_share:3,count_user_shared:2,comments:[{id:1,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!1,content:"Comment"},likes:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:2,comment_model:1,profile_user:3}],count_like:1,user_type_like:-2,subs:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!1,content:"Sub comment"},likes:[{id:1,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:3,sub_model:1,profile_user:2}],count_like:1,user_type_like:-1,histories:[],count_history:0,created_time:"2021-04-02T06:44:46.495730Z",updated_time:"2021-04-02T06:44:46.495730Z",vid_pic:o.default,comment_model:1,profile_user:3}],count_sub:6,histories:[],count_history:0,created_time:"2021-04-02T06:42:36.443763Z",updated_time:"2021-04-02T06:42:36.443763Z",vid_pic:o.default,post_model:11,profile_user:2}],count_comment:11,histories:[],count_history:0,created_time:"2021-04-01T07:48:48.176630Z",permission_post:0,updated_time:"2021-04-01T15:18:30.339347Z",profile_user:1},{id:11,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},content_obj:{has_more_content:!1,content:"ad asd sd sd dsa d"},vid_pics:[{id:6,content:{has_more_content:!1,note:"note 1"},likes:[{id:1,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:4,vid_pic_model:6,profile_user:3}],count_like:1,vid_pic:o.default,note:"note 1",folder_picture:"my folder picture",post_model:11}],count_vid_pic:1,likes:[{id:2,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:1,post_model:11,profile_user:2},{id:3,user:{id:3,picture:o.default,cover_picture:o.default,first_name:"Clark",last_name:"Porter",nick_name:"super man",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"tuesday@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},type_like:2,post_model:11,profile_user:3}],count_like:2,user_type_like:-2,shares:[{id:1,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:1},{id:2,user:{id:1,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:1},{id:3,user:{id:2,picture:o.default,cover_picture:o.default,first_name:"My",last_name:"My",nick_name:"nkox my",birth:"2021-03-28",permission_birth:0,permission_friends:0,hobby:"s",story:"s",email:"abcxyz@gmail.com",permission_email:0,phone:"0123456789",permission_phone:0,address:"Ha Noi",permission_address:0,work:"Dev",university:"HUBT",high_school:"Hoa Lu",is_online:!1},post_model:11,profile_user:2}],count_share:3,count_unique_share:3,count_user_shared:2,comments:[],count_comment:1,histories:[],count_history:0,created_time:"2021-04-01T07:48:48.176630Z",permission_post:0,updated_time:"2021-04-01T15:18:30.339347Z",profile_user:1}],i.more_content_post=" more content post more\ncontent post more content post more content post"}}]);
//# sourceMappingURL=6967.js.map