webpackJsonp([1],{"0plR":function(e,t){},"1WhG":function(e,t){},"3nre":function(e,t){},"5reh":function(e,t){},"8sJK":function(e,t){},"9cck":function(e,t){},K0mV:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("mvHQ"),n=r.n(s),i=r("/5sW"),a=r("zYko"),o=r.n(a),l=r("zL8q"),c=r.n(l),u=(r("tvR6"),r("/ocq")),d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))]),this._v(" "),t("router-link",{attrs:{to:"/friend"}},[this._v("盆友圈状态")])],1)},staticRenderFns:[]};var m=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(e){r("d47J")},"data-v-d6965c52",null).exports,f=r("fZjL"),h=r.n(f),g=r("bOdI"),v=r.n(g),p=r("NYxO"),_={name:"List",data:function(){return{title:"",articles:[]}},created:function(){this.match()},watch:v()({},"$route.query",function(){console.log("re render"),this.articles=[],this.match()}),computed:Object(p.d)(["user"]),methods:{match:function(){var e=this.$route.query.type||this.$route.query.cid;switch(this.$Progress.start(),e){case"me":this.getMyArticles("我的文章");break;case"all":this.getAllArticles("所有文章");break;default:this.getCategoryArticle(e)}},getAllArticles:function(e){var t=this;this.axios.get("/").then(function(r){var s=[];r.data.result.articles&&h()(r.data.result.articles).map(function(e){s.push(r.data.result.articles[e])}),t.articles=s,t.title=e})},getCategoryArticle:function(e){},getMyArticles:function(e){this.title=e,this.articles=this.user.articles}}},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.title?r("div",[r("header",[r("h2",[e._v(e._s(e.title))])]),e._v(" "),r("section",e._l(e.articles,function(t){return r("article",{key:t.id},[r("h3",[r("router-link",{attrs:{to:{name:"ArticleShow",params:{id:t.id}}}},[e._v(e._s(t.title))]),e._v(" "),r("router-link",{attrs:{to:{name:"User",params:{id:t.author.uid}}}},[e._v(e._s(t.author.name))])],1)])}))]):r("div",[e._v("Loading")])])},staticRenderFns:[]};var b=r("VU/8")(_,w,!1,function(e){r("3nre")},"data-v-84a0ecc6",null).exports,y=r("Dd8w"),x=r.n(y),C={name:"index",data:function(){return{article:null,id:1}},created:function(){this.id=this.$route.params.id,this.getArticle(this.id)},computed:x()({},Object(p.c)(["uid"])),methods:{getArticle:function(e){var t=this;this.axios.get("/articles/"+e).then(function(e){t.article=e.data.result,t.$Progress.finish()}).catch(console.error)},destroy:function(){var e=this;this.axios.post("/articles/"+id,null).then(function(t){e.$message({type:"success",message:"删除成功"}),e.$router.replace({path:"/article?type=all"})}).catch(console.error)}}},k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.article?[r("h2",[e._v(e._s(e.article.title))]),e._v(" "),e.uid==e.article.author.uid?r("div",{staticClass:"oprator"},[r("router-link",{attrs:{to:{name:"ArticleEdit",params:{id:e.article.id}},tag:"button"}},[e._v("修改")]),e._v(" "),r("button",{on:{click:e.destroy}},[e._v("删除")])],1):e._e(),e._v(" "),r("div",{staticClass:"container"},[r("span",[e._v(" author "+e._s(e.article.author.name))]),e._v(" "),r("br"),e._v(" "),r("span",[e._v(" cate "+e._s(e.article.category))])]),e._v(" "),r("div",{staticClass:"content",domProps:{innerHTML:e._s(e.article.content)}})]:e._e()],2)},staticRenderFns:[]};var F=r("VU/8")(C,k,!1,function(e){r("K0mV")},"data-v-595cf100",null).exports,E={name:"user",data:function(){return{current_user:null,articles:null,followed:!1,id:this.$route.params.id,dialogFormVisible:!1,form:{msg:""},rules:{msg:[{required:!0,message:"必填项",trigger:"blur"}]}}},computed:Object(p.d)(["user"]),created:function(){this.checkFowlled(),this.getCurrentUser()},methods:{getCurrentUser:function(){var e=this;this.$store.dispatch("getCurrentUser",this.id).then(function(t){e.current_user=t.data.result,e.getArticles(e.current_user)})},getArticles:function(e){var t=this;this.axios.get(e.name+e.pwd).then(function(e){t.articles=e.data.result.articles,t.$Progress.finish()}).catch(function(e){t.$message.error(e.message)})},toggleFollow:function(){var e=this,t=this.id,r=this.user.followed||[];this.followed?(r=r.filter(function(e){return e!==t}),this.axios.post(this.user.name+this.user.pwd+"/followed",r).then(function(){e.followed=!1,e.$message({type:"success",message:"取消关注成功"}),e.$sotre.commit("setFollowed",r)}).catch(console.error),this.axios.get(this.current_user.name+this.current_user.pwd+"/follower").then(function(t){var r=t.data.result||[];r=r.filter(function(t){return t!==e.user.uid}),e.axios.post(e.current_user.name+e.current_user.pwd+"/follower",r).then(function(){}).catch(console.error)}).catch(console.error)):(!r.includes(t)&&r.push(t),this.axios.post(this.user.name+this.user.pwd+"/followed",r).then(function(){e.followed=!0,e.$message({type:"success",message:"关注成功"}),e.$sotre.commit("setFollowed",r)}).catch(console.error),this.axios.get(this.current_user.name+this.current_user.pwd+"/follower").then(function(t){var r=t.data.result||[];r.push(e.user.uid),e.axios.post(e.current_user.name+e.current_user.pwd+"/follower",r).then(function(){}).catch(console.error)}).catch(console.error))},checkFowlled:function(){var e=this,t=this.user.followed||[];this.axios.get(this.user.name+this.user.pwd+"/followed").then(function(r){t=r.data.result,e.followed=t.includes(e.id)})},sendMsg:function(){var e=this;if(this.form.msg){var t=this.current_user,r=t.uid,s=t.name,n=r,i=s+t.pwd,a=this.user.uid,o={},l=new Date;o.id=l.getTime(),o.time=l.toLocaleDateString()+" "+l.toLocaleTimeString(),o.content=this.form.msg,o.to={uid:n,name:s},o.form={uid:a,name:this.user.name},this.axios.post(i+"/messages/"+a+"/"+l.getTime(),o).then(function(t){t.data.ok&&(e.dialogFormVisible=!1,e.$message({message:"发送私信成功！",type:"success"}))},function(t){e.$message.error(t)})}else this.$message.error("信息不能为空")}}},U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.current_user?r("div",{staticClass:"container"},[r("h3",[e._v(e._s(e.current_user.name))]),e._v(" "),r("hr"),e._v(" "),e.user?r("div",{staticClass:"oprator"},[e.user.uid!=e.current_user.uid?r("button",{on:{click:e.toggleFollow}},[e._v(e._s(e.followed?"取消关注":"关注")+"该用户")]):e._e(),e._v(" "),e.user.uid!=e.current_user.uid?r("button",{on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("发送私信")]):e._e()]):e._e(),e._v(" "),r("el-dialog",{attrs:{title:"发送私信给该用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top",rules:e.rules}},[r("el-form-item",{attrs:{label:"私信内容",prop:"msg"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.msg,callback:function(t){e.$set(e.form,"msg",t)},expression:"form.msg"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.sendMsg}},[e._v("确 定")])],1)],1),e._v(" "),r("ul",e._l(e.articles,function(t){return r("li",{key:t.id},[r("router-link",{attrs:{to:{name:"ArticleShow",params:{id:t.id}}}},[e._v(e._s(t.title))])],1)}))],1):r("span",[e._v(" loading ")])},staticRenderFns:[]};var A=r("VU/8")(E,U,!1,function(e){r("1WhG")},"data-v-41b33d7c",null).exports,V={name:"myFollower",data:function(){return{followers:[],loading:!0}},computed:Object(p.d)(["user"]),mounted:function(){this.getFollower()},methods:{getFollower:function(){var e=this;this.axios.get(this.user.name+this.user.pwd+"/follower").then(function(t){e.loading=!1,e.followers=t.data.result||[]})}}},j={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("我的粉丝")]),e._v(" "),e.loading?r("span",[e._v(" loading  ")]):e._e(),e._v(" "),e.followers.length?r("ul",e._l(e.followers,function(t){return r("li",{key:t},[r("router-link",{attrs:{to:{name:"User",params:{id:t}}}},[e._v(e._s(t)+" 观看粉丝信息")])],1)})):e.loading?e._e():r("span",[e._v("你没有粉丝")])])},staticRenderFns:[]};var q=r("VU/8")(V,j,!1,function(e){r("t0VU")},"data-v-b751a1b8",null).exports,R={name:"myFollowee",data:function(){return{followees:[],loading:!0}},computed:Object(p.d)(["user"]),mounted:function(){this.getFollowee()},methods:{getFollowee:function(){var e=this;this.axios.get(this.user.name+this.user.pwd+"/followed").then(function(t){e.loading=!1,e.followees=t.data.result})}}},O={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("我的关注")]),e._v(" "),e.loading?r("span",[e._v(" loading  ")]):e._e(),e._v(" "),e.followees.length?r("ul",e._l(e.followees,function(t){return r("li",{key:t},[r("router-link",{attrs:{to:{name:"User",params:{id:t}}}},[e._v(e._s(t)+" 观看-信息")])],1)})):e.loading?e._e():r("span",[e._v("你没有关注任何人")])])},staticRenderFns:[]};var P=r("VU/8")(R,O,!1,function(e){r("gvpP")},"data-v-2eaac432",null).exports,I={name:"friend",data:function(){return{statuses:[],loading:!0}},created:function(){this.getFriendMsg()},computed:Object(p.d)(["user"]),methods:{getFriendMsg:function(){var e=this;this.user.followed&&this.user.followed.forEach(function(t,r){e.axios.get("/status/"+t).then(function(t){t.data.result&&e.statuses.push(t.data.result)}).catch(function(e){return console.error("哈哈")}),r==e.user.followed.length-1&&(e.loading=!1)})}}},M={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.statuses.length?r("ul",e._l(e.statuses,function(t){return r("li",{key:t.article.id},[r("router-link",{attrs:{to:{name:"User",params:{id:t.source.uid}}}},[e._v(e._s(t.source.name))]),e._v(" 在 "+e._s(Date(t.article.id).slice(11,24))+"\n      "),"create_article"==t.source.type?r("span",[e._v("\n        创建了新的文章 "),r("router-link",{attrs:{to:{name:"ArticleShow",params:{id:t.article.id}}}},[e._v(e._s(t.article.title))])],1):e._e()],1)})):e.loading?r("span",[e._v(" loding ")]):r("span",[e._v(" 🈚️状态 ")])])},staticRenderFns:[]};var S=r("VU/8")(I,M,!1,function(e){r("0plR")},"data-v-31b1d4b2",null).exports,L={name:"myMessage",data:function(){return{messages:[]}},created:function(){this.getMessages()},computed:Object(p.d)(["user"]),methods:{getMessages:function(){var e=this,t=this.user,r=(t.uid,t.name+t.pwd);this.axios.get(r+"/messages").then(function(t){if(t.data.result){var r=t.data.result;h()(r).forEach(function(t){h()(r[t]).forEach(function(s){e.messages.push(r[t][s]),e.$Progress.finish()})})}}).catch(function(t){e.$message.error(t)})},destroy:function(e){var t=this,r=this.user,s=(r.uid,r.name+r.pwd),n=this.messages[e],i=n.form,a=n.id;console.log(s+"/messages/"+i.uid+"/"+a),this.axios.delete(s+"/messages/"+i.uid+"/"+a).then(function(r){r.data.ok&&(t.messages.splice(e,1),t.$message({message:"删除成功",type:"success"}))}).catch(console.error)}}},W={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("我的消息")]),e._v(" "),e.messages.length?r("ul",e._l(e.messages,function(t,s){return r("li",{key:t.id+t.form.uid},[r("router-link",{attrs:{to:{name:"User",params:{id:t.form.uid}}}},[e._v(e._s(t.form.name))]),e._v(" 给你发了一条信息\n      "),r("p",[r("button",{on:{click:function(t){e.destroy(s)}}},[e._v("删除")])]),e._v(" "),r("p",[e._v(e._s(t.content))])],1)})):r("span",[e._v("没有消息")])])},staticRenderFns:[]};var J=r("VU/8")(L,W,!1,function(e){r("WBZZ")},"data-v-4619af8b",null).exports,H=r("//Fk"),T=r.n(H),D=null,N={name:"create",data:function(){return{article:null,categorys:[],form:{category:null,title:""},rules:{title:[{required:!0,message:"必须填写标题哦!",trigger:"blur"}],category:[{type:"string",required:!0,message:"必须填写分类哦!",trigger:"blur"}]},validate:{error:!1}}},created:function(){this.getCategory(),this.getArticle()},mounted:function(){this.initEditor()},computed:x()({},Object(p.d)(["user"]),{text:{get:function(){return D.$txt.html()},set:function(e){return D.$txt.html(e)}}}),methods:{getContent:function(){return D.$txt.html()},setContent:function(e){return D.$txt.html(e)},getArticle:function(){var e=this,t=this.$route.params.id;this.axios.get("/articles/"+t).then(function(t){var r=t.data.result,s=r.article,n=r.category,i=r.title,a=r.content;e.article=s,e.form.title=i,e.wait(e.categorys.length).then(function(){e.form.category=n}),e.wait(D).then(function(){e.setContent(a)}),e.$Progress.finish()})},wait:function(e){return console.log(e),new T.a(function(t,r){var s=null;e?t():s=setInterval(function(){e&&(t(),clearInterval(s))},500)})},initEditor:function(){var e=this,t=window.wangEditor;(D=new t("editor")).config.menus=$.map(wangEditor.config.menus,function(e,t){return"location"===e?null:e}),D.create(),D.onchange=function(){e.validateContent()}},getCategory:function(){var e=this;this.axios.get(this.user.name+this.user.pwd+"/Category").then(function(e){return e.data.result}).then(function(t){e.categorys=t,e.form.category=t[0]}).catch(console.error)},validateContent:function(){if("<p><br></p>"==this.getContent())return this.validate.error=!0,void $(".wangEditor-container").css({borderColor:"red"});this.validate.error=!1,$(".wangEditor-container").css({borderColor:"#ccc"})},createArticle:function(){var e={};return e.author={name:this.user.name,uid:this.user.uid},e.title=this.form.title,e.content=this.getContent(),e.category=this.form.category,e.id=this.$route.params.id,e},save:function(e){var t=this,r=this.$route.params.id;this.axios.post("/"+this.user.name+this.user.pwd+"/articles/"+r,e).then(function(s){console.log(t.user.name+t.user.pwd+"/"+r,e);var n="文章《"+e.title+"》修改成功";t.$message({message:n,type:"success"})}).catch(console.error),this.axios.post("/articles/"+r,e).then(function(e){}).catch(console.error)},submit:function(){var e=this;this.$refs.form.validate(function(t){if(e.validateContent(),!t)return console.log("error submit!!"),e.$message.error("错了哦，您填写的信息有错误，请按照提示修改。"),!1;var r=e.createArticle();e.save(r)})}}},Y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h3",{staticClass:"title is-3"},[e._v("发布一篇新的文章")]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{label:"文章分类",prop:"category"}},[r("el-select",{attrs:{placeholder:"请选择文章分类"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categorys,function(t){return r("el-option",{key:t,attrs:{label:t,value:t}},[e._v(e._s(t))])}))],1),e._v(" "),r("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("div",{staticClass:"el-form-item is-required",class:{"is-error":e.validate.error}},[r("label",{staticClass:"el-form-item__label"},[e._v("文章内容")]),e._v(" "),r("div",{staticClass:"el-form-item__content"},[r("div",{attrs:{id:"editor"}}),e._v(" "),e.validate.error?r("div",{staticClass:"el-form-item__error"},[e._v("正文怎能没有内容呢？")]):e._e()])]),e._v(" "),r("div",{staticClass:"oprator right"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:e.submit,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submit(t):null}}},[e._v("发布文章")]),e._v(" "),r("hr")],1)],1)],1)},staticRenderFns:[]};var Z=r("VU/8")(N,Y,!1,function(e){r("vjJI")},"data-v-aec85f2e",null).exports,z={name:"signUp",data:function(){var e=this;return{labelPosition:"top",user:{name:"yobrave",email:"865501259@qq.com",pwd:"yobrave1",cpwd:"yobrave1"},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:7,message:"长度在 3 到 7 个字符之间",trigger:"blur"}],email:[{required:!0,message:"请填入邮箱",trigger:"blur"},{type:"email",message:"必须是合法的邮箱格式",trigger:"blur"}],pwd:[{required:!0,message:"必须填写",trigger:"blur"},{validator:function(t,r,s){""===r?s(new Error("请输入密码")):(""!==e.user.cpwd&&e.$refs.form.validateField("cpwd"),s())},trigger:"blur"}],cpwd:[{required:!0,message:"必须填写",trigger:"blur"},{validator:function(t,r,s){""===r?s(new Error("请再次输入密码")):r!==e.user.pwd?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this,r=this.user,s=r.name,n=r.email,i=r.pwd,a=(new Date).getTime();this.$refs[e].validate(function(e){if(!e)return t.$message.error("错了哦，您填写的信息有错误，请按照提示修改。"),!1;t.axios.get(s+i).then(function(e){if(e.data.result)throw new Error(" 有人啦 , 改改名字");t.axios.post(s+i,{name:s,email:n,pwd:i,uid:a}).then(function(e){t.$store.dispatch("login",e.config.data),t.$router.go(-1),t.$message.success("注册成功！")}).catch(function(e){t.$message.error(e.message)}),t.axios.post("/"+a,{name:s,email:n,pwd:i,uid:a}).then(function(e){}).catch(function(e){t.$message.error(e.message)})}).catch(function(e){t.$message.error(e.message)})})}}},B={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("注册")]),e._v(" "),r("div",{staticClass:"from-panel"},[r("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"80px",rules:e.rules,model:e.user}},[r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮件",prop:"email"}},[r("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.user.pwd,callback:function(t){e.$set(e.user,"pwd",t)},expression:"user.pwd"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"cpwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.user.cpwd,callback:function(t){e.$set(e.user,"cpwd",t)},expression:"user.cpwd"}})],1),e._v(" "),r("div",{staticClass:"oprator"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("提交")])],1)],1)],1)])},staticRenderFns:[]};var K=r("VU/8")(z,B,!1,function(e){r("m13I")},"data-v-ce3af55c",null).exports,Q={name:"signIn",data:function(){return{labelPosition:"top",user:{name:"yo1995",pwd:"yobrave1"},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:7,message:"长度在 3 到 7 个字符之间",trigger:"blur"}],pwd:[{required:!0,message:"必须填写",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$message.error("错了哦，您填写的信息有错误，请按照提示修改。"),!1;t.axios.get(t.user.name+t.user.pwd).then(function(e){if(!e.data.result)throw new Error("登录失败");t.$store.dispatch("login",e.data.result),t.$router.push({path:"/"}),t.$message.success("登陆成功！")}).catch(function(e){console.error(e),t.$message.error(e.message)})})}}},G={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("登陆")]),e._v(" "),r("div",{staticClass:"from-panel"},[r("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"80px",rules:e.rules,model:e.user}},[r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.user.pwd,callback:function(t){e.$set(e.user,"pwd",t)},expression:"user.pwd"}})],1),e._v(" "),r("div",{staticClass:"oprator"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("登陆")])],1)],1)],1)])},staticRenderFns:[]};var X=r("VU/8")(Q,G,!1,function(e){r("rhjB")},"data-v-0635eff1",null).exports,ee=null,te={name:"create",data:function(){return{categorys:[],form:{category:null,title:""},rules:{title:[{required:!0,message:"必须填写标题哦!",trigger:"blur"}],category:[{type:"string",required:!0,message:"必须填写分类哦!",trigger:"blur"}]},validate:{error:!1}}},created:function(){this.getCategory(),this.$Progress.finish()},mounted:function(){this.initEditor()},computed:Object(p.d)(["user"]),methods:{content:function(){return ee.$txt.html()},initEditor:function(){var e=this,t=window.wangEditor;(ee=new t("editor")).config.menus=$.map(wangEditor.config.menus,function(e,t){return"location"===e?null:e}),ee.create(),ee.onchange=function(){e.validateContent()}},getCategory:function(){var e=this;this.axios.get("/Category").then(function(e){return e.data.result}).then(function(t){e.categorys=t,e.form.category=t[0]}).catch(console.error)},validateContent:function(){if("<p><br></p>"==this.content())return this.validate.error=!0,void $(".wangEditor-container").css({borderColor:"red"});this.validate.error=!1,$(".wangEditor-container").css({borderColor:"#ccc"})},createArticle:function(){var e={};return e.author={name:this.user.name,uid:this.user.uid},e.title=this.form.title,e.content=this.content(),e.category=this.form.category,e.id=(new Date).getTime(),e},save:function(e){var t=this,r=e.id;this.axios.post("/"+this.user.name+this.user.pwd+"/articles/"+r,e).then(function(s){console.log(t.user.name+t.user.pwd+"/"+r,e);var n="文章《"+e.title+"》发布成功";t.$message({message:n,type:"success"});var i=t.user,a={source:{uid:i.uid,name:i.name,type:"create_article"},article:e};t.axios.post("/status/"+t.user.uid,a).then(function(e){}).catch(console.error)}).catch(console.error),this.axios.post("/articles/"+r,e).then(function(e){}).catch(console.error)},submit:function(){var e=this;this.$refs.form.validate(function(t){if(e.validateContent(),!t)return console.log("error submit!!"),e.$message.error("错了哦，您填写的信息有错误，请按照提示修改。"),!1;var r=e.createArticle();e.save(r)})}}},re={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h3",{staticClass:"title is-3"},[e._v("发布一篇新的文章")]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{label:"文章分类",prop:"category"}},[r("el-select",{attrs:{placeholder:"请选择文章分类"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categorys,function(t){return r("el-option",{key:t,attrs:{label:t,value:t}},[e._v(e._s(t))])}))],1),e._v(" "),r("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("div",{staticClass:"el-form-item is-required",class:{"is-error":e.validate.error}},[r("label",{staticClass:"el-form-item__label"},[e._v("文章内容")]),e._v(" "),r("div",{staticClass:"el-form-item__content"},[r("div",{attrs:{id:"editor"}}),e._v(" "),e.validate.error?r("div",{staticClass:"el-form-item__error"},[e._v("正文怎能没有内容呢？")]):e._e()])]),e._v(" "),r("div",{staticClass:"oprator right"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:e.submit,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submit(t):null}}},[e._v("发布文章")]),e._v(" "),r("hr")],1)],1)],1)},staticRenderFns:[]};var se=r("VU/8")(te,re,!1,function(e){r("9cck")},"data-v-fe022b62",null).exports;i.default.use(u.a);var ne=new u.a({routes:[{path:"/",name:"HelloWorld",component:m},{path:"/user/:id",name:"User",component:A},{path:"/follower",name:"Follower",component:q},{path:"/followee",name:"Followee",component:P},{path:"/friend",name:"Friend",component:S,meta:{needLogin:!0}},{path:"/message",name:"Message",component:J},{path:"/article",name:"ArticleList",component:b},{path:"/signup",name:"signup",component:K},{path:"/signIn",name:"signIn",component:X},{path:"/articles/create",name:"ArticleCreate",component:se,meta:{needLogin:!0}},{path:"/articles/:id",name:"ArticleShow",component:F},{path:"/article/:id/edit",name:"ArticleEdit",component:Z,meta:{needLogin:!0}}]}),ie=r("mtWM"),ae=r.n(ie),oe=r("pFYg"),le=r.n(oe);i.default.use(p.a);var ce=new p.a.Store({state:{user:null},mutations:{setUser:function(e,t){localStorage.setItem("user",n()(t)),e.user=t},setFollowed:function(e,t){e.user.followed=t}},getters:{uid:function(e){var t=e.user;return!!t&&t.uid}},actions:{exit:function(e){e.commit("setUser",null)},login:function(e,t){t="string"==typeof t?JSON.parse(t):t,console.log(void 0===t?"undefined":le()(t)),e.commit("setUser",t)},getCurrentUser:function(e,t){return ue.get("/"+t).then(function(e){return e}).catch(function(e){i.default.$message.error(e.message)}),ue.get("/"+t).then(function(e){return e}).catch(function(e){i.default.$message.error(e.message)})}}});r("5reh");ae.a.defaults.timeout=5e3,ae.a.defaults.baseURL="https://www.jsonstore.io/b4c710a6acbd548e7ced1166c06c78007c180f4c00cb93967224896cddaacca9",ae.a.interceptors.request.use(function(e){return ce.state.token&&(e.headers.Authorization="token "+ce.state.token),e},function(e){return T.a.reject(e)}),ae.a.interceptors.response.use(function(e){return e},function(e){return T.a.reject(e.response.data)});var ue=ae.a,de={name:"Header",data:function(){return{active:"/"}},created:function(){var e=this;this.active=this.$route.path,this.$router.afterEach(function(t,r){e.active=t.path})},computed:Object(p.d)(["user"]),methods:x()({handleSelect:function(e,t){console.log(e,t)}},Object(p.b)(["exit"]),{heandleExit:function(){this.exit(),this.$router.replace({path:"/"}),this.$message.success("成功退出")}})},me={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-menu",{staticClass:"el-menu",attrs:{router:!0,"default-active":e.active,mode:"horizontal"},on:{select:e.handleSelect}},[r("el-menu-item",{staticClass:"logo",attrs:{index:"/"}},[e._v("聊🌟聊")]),e._v(" "),r("el-menu-item",{attrs:{index:"/article?type=all"}},[r("i",{staticClass:"fa fa-flag",attrs:{"aria-hidden":"true"}}),e._v(" 探索")]),e._v(" "),e.user?[r("li",{staticClass:"el-menu-item right",on:{click:e.heandleExit}},[r("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}}),e._v(" 注销")]),e._v(" "),r("el-submenu",{staticClass:"right",attrs:{index:"5"}},[r("span",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(e.user.name)+" ")]),e._v(" "),r("el-menu-item",{attrs:{index:"/article?type=me"}},[e._v("我的文章")]),e._v(" "),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("发布文章")]),e._v(" "),r("el-menu-item",{attrs:{index:"/follower"}},[e._v("我的follower")]),e._v(" "),r("el-menu-item",{attrs:{index:"/followee"}},[e._v("我的关注")]),e._v(" "),r("el-menu-item",{attrs:{index:"/message"}},[e._v("消息")]),e._v(" "),r("el-menu-item",{attrs:{index:"me",route:{name:"User",params:{id:e.user.uid}}}},[e._v("我的主页")])],1)]:[r("el-menu-item",{staticClass:"right",attrs:{index:"/signUp"}},[r("i",{staticClass:"fa fa-user-o",attrs:{"aria-hidden":"true"}}),e._v(" 注册")]),e._v(" "),r("el-menu-item",{staticClass:"right",attrs:{index:"/signIn"}},[r("i",{staticClass:"fa fa-key",attrs:{"aria-hidden":"true"}}),e._v(" 登陆")])]],2)],1)},staticRenderFns:[]};var fe={name:"App",components:{MyHeader:r("VU/8")(de,me,!1,function(e){r("xYlo")},"data-v-4ab53ae4",null).exports},mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach(function(t,r,s){if(void 0!==t.meta.progress){var n=t.meta.progress;e.$Progress.parseMeta(n)}e.$Progress.start(),s()}),this.$router.afterEach(function(t,r){e.$Progress.finish()})}},he={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("my-header"),this._v(" "),t("router-view"),this._v(" "),t("vue-progress-bar")],1)},staticRenderFns:[]};var ge=r("VU/8")(fe,he,!1,function(e){r("UQpW")},null,null).exports;r("8sJK");"null"!==localStorage.getItem("user")&&ce.commit("setUser",JSON.parse(localStorage.getItem("user"))),i.default.prototype.axios=ue,i.default.config.productionTip=!1,i.default.use(c.a),i.default.use(o.a,{color:"blue",failedColor:"#874b4b",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1}),window.toJSON=n.a,ne.beforeEach(function(e,t,r){e.matched.some(function(e){return e.meta.needLogin})?ce.state.user?r():(ve.$message.error("请先登录"),r({path:"/signIn"})):r()});var ve=new i.default({el:"#app",axios:ue,router:ne,store:ce,render:function(e){return e(ge)}})},UQpW:function(e,t){},WBZZ:function(e,t){},d47J:function(e,t){},gvpP:function(e,t){},m13I:function(e,t){},rhjB:function(e,t){},t0VU:function(e,t){},tvR6:function(e,t){},vjJI:function(e,t){},xYlo:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5bf63305607d3219574e.js.map