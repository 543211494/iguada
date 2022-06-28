"use strict";(self["webpackChunkwork"]=self["webpackChunkwork"]||[]).push([[602],{6602:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back"},[s("div",{staticClass:"info"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),s("el-breadcrumb-item",[t._v("校车管理")])],1)],1),s("div",{staticClass:"search"},[s("el-input",{staticClass:"date",attrs:{placeholder:"请输入公告标题或id",maxlength:"16"},model:{value:t.searchInfo,callback:function(e){t.searchInfo=e},expression:"searchInfo"}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"medium"},on:{click:t.search}},[t._v("搜索公告")]),s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"medium"},on:{click:function(e){t.showAdd=!0}}},[t._v("发布公告")])],1),s("div",[s("el-table",{attrs:{data:t.notices}},[s("el-table-column",{attrs:{prop:"id",label:"公告编号",width:"120"}}),s("el-table-column",{attrs:{prop:"title",label:"公告标题",width:"220"}}),s("el-table-column",{attrs:{prop:"sender",label:"发布者",width:"140"}}),s("el-table-column",{attrs:{prop:"sendTime",label:"发布时间",width:"180"}}),s("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{staticClass:"el-icon-delete-solid",attrs:{type:"text",size:"small"},on:{click:function(s){return t.del(e.row.id)}}},[t._v("删除")]),s("el-button",{staticClass:"el-icon-search",attrs:{type:"text",size:"small"},on:{click:function(s){return t.look(e.row.id)}}},[t._v("查看")])]}}])})],1)],1),s("div",{staticClass:"page"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalPages,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.getPageNum}})],1),s("el-dialog",{attrs:{visible:t.showAdd,width:"30%",center:"","close-on-click-modal":!1,"lock-scroll":!1,"before-close":t.close},on:{"update:visible":function(e){t.showAdd=e}}},[s("div",{staticClass:"add"},[s("h2",[t._v("发布公告")]),s("el-input",{staticClass:"input",attrs:{"prefix-icon":"el-icon-document",placeholder:"公告标题",maxlength:"16"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),s("el-input",{staticClass:"input",attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"公告正文"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"medium"},on:{click:t.add}},[t._v("发布公告")])],1)]),s("el-dialog",{attrs:{title:t.title,visible:t.showLook,"before-close":t.close,width:"30%",center:"","close-on-click-modal":!1,"lock-scroll":!1},on:{"update:visible":function(e){t.showLook=e}}},[s("p",[t._v("      "+t._s(t.content))])])],1)},i=[],o={data(){return{showAdd:!1,showLook:!1,title:"",content:"",searchInfo:"",saveInfo:"",totalPages:100,currentPage:1,notices:[]}},methods:{getPageNum(t){this.getPage(this.currentPage)},del(t){this.$axios({method:"POST",url:"/manager/delNotice",data:{id:t,page:this.currentPage,number:8}}).then((e=>{let s=e.data;1==s.status?(this.$message({message:"删除成功,公告id为"+t,type:"success"}),this.notices=s.notices,this.totalPages=10*s.pages,this.currentPage=s.currentPage):0==s.status?this.$message.error("删除失败,未知错误!"):2==s.status?(this.$store.state.status=2,this.$store.dispatch("setIsManager",!1),this.goto("/user/userInfo")):(this.$store.state.status=1,this.$store.state.hasLogin=!1,this.$store.state.isManager=!1,this.$store.state.userName="",this.$store.state.email="",this.$store.state.userId="",localStorage.clear(),this.goto("/"))}))},look(t){let e=this;this.notices.forEach((function(s,a,i){s.id===t&&(e.title=s.title,e.content=s.content)})),this.showLook=!0},add(){if(""==this.title||""==this.content)this.$message({message:"输入不能为空!",type:"warning"});else{let t=new Date,e=t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+" "+t.getHours()+":"+t.getMinutes();this.$axios({method:"POST",url:"/manager/addNotice",data:{title:this.title,content:this.content,sendTime:e,page:this.currentPage,number:8}}).then((t=>{let e=t.data;1==e.status?(this.$message({message:"添加成功",type:"success"}),this.notices=e.notices,this.totalPages=10*e.pages,this.currentPage=e.currentPage,this.title="",this.content="",this.showAdd=!1):0==e.status?this.$message.error("未知错误!"):2==e.status?(this.$store.state.status=2,this.$store.dispatch("setIsManager",!1),this.goto("/user/userInfo")):(this.$store.state.status=1,this.$store.state.hasLogin=!1,this.$store.state.isManager=!1,this.$store.state.userName="",this.$store.state.email="",this.$store.state.userId="",localStorage.clear(),this.goto("/"))}))}},search(){this.saveInfo=this.searchInfo,this.getPage(1)},getPage(t){this.$axios({method:"GET",url:"/manager/searchNotices",params:{info:this.saveInfo,page:t,number:8}}).then((t=>{let e=t.data;1==e.status?(this.notices=e.notices,this.totalPages=10*e.pages,this.currentPage=e.currentPage):0==e.status?this.$message.error("未知错误!"):2==e.status?(this.$store.state.status=2,this.$store.dispatch("setIsManager",!1),this.goto("/user/userInfo")):(this.$store.state.status=1,this.$store.state.hasLogin=!1,this.$store.state.isManager=!1,this.$store.state.userName="",this.$store.state.email="",this.$store.state.userId="",localStorage.clear(),this.goto("/"))}))},close(t){this.title="",this.content="",t()}},mounted(){this.getPage(this.currentPage)}},r=o,n=s(1001),l=(0,n.Z)(r,a,i,!1,null,"e0e27b50",null),c=l.exports}}]);
//# sourceMappingURL=602.3bda3f64.js.map