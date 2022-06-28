"use strict";(self["webpackChunkwork"]=self["webpackChunkwork"]||[]).push([[69],{4069:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("div",{staticClass:"info"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("校车信息")]),a("el-breadcrumb-item",[t._v("校车班次")])],1)],1),a("div",{staticClass:"search"},[a("el-date-picker",{staticClass:"date",attrs:{type:"date",placeholder:"开始日期"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),a("span",[t._v("到")]),a("el-date-picker",{staticClass:"date",attrs:{type:"date",placeholder:"结束日期"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"medium"},on:{click:t.search}},[t._v("搜索班次")])],1),a("div",[a("el-table",{attrs:{data:t.times}},[a("el-table-column",{attrs:{prop:"id",label:"班次编号",width:"180"}}),a("el-table-column",{attrs:{prop:"time",label:"出发时间",width:"180"}}),a("el-table-column",{attrs:{prop:"start",label:"出发车站",width:"100"}}),a("el-table-column",{attrs:{prop:"end",label:"目的车站",width:"180"}}),a("el-table-column",{attrs:{prop:"number",label:"剩余空位",width:"100"}}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.hasOrdered?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.order(e.row.id)}}},[t._v("预约")]):a("el-button",{attrs:{type:"text",size:"small"}},[t._v("已预约")])]}}])})],1)],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalPages,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.getPageNum}})],1)])},r=[],n=(a(1539),a(4747),{data:function(){return{start:"",end:"",saveStart:"",saveEnd:"",times:[],totalPages:100,currentPage:1}},methods:{goto:function(t){this.$router.push({path:t})},getDate:function(t){if(""===t)return"";var e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},getPageNum:function(t){this.getPage(this.currentPage)},search:function(){this.saveStart=this.start,this.saveEnd=this.end,this.getPage(1)},order:function(t){var e=this;this.$axios({method:"POST",url:"/user/order",data:{id:t}}).then((function(a){var s=a.data;1==s.status?(e.$message({message:"预约成功,校车班次id为"+t,type:"success"}),e.times.forEach((function(t,e,a){t.id==s.id&&(t.number=s.number,t.hasOrdered=s.hasOrdered)}))):0==s.status?e.$message({message:"预约失败,已无剩余座位!",type:"warning"}):2==s.status?e.$message({message:"预约失败,请勿重复预约!",type:"warning"}):(e.$store.state.status=1,e.$store.state.hasLogin=!1,e.$store.state.isManager=!1,e.$store.state.userName="",e.$store.state.email="",e.$store.state.userId="",localStorage.clear(),e.goto("/"))}))},getPage:function(t){var e=this;this.$axios({method:"GET",url:"/user/searchTimes",params:{page:t,number:8,startTime:this.getDate(this.saveStart),endTime:this.getDate(this.saveEnd)}}).then((function(t){var a=t.data;1==a.status?(e.times=a.times,e.totalPages=10*a.pages,e.currentPage=a.currentPage):0==a.status?e.$message({message:"日期输入有误!",type:"warning"}):(e.$store.state.status=1,e.$store.state.hasLogin=!1,e.$store.state.isManager=!1,e.$store.state.userName="",e.$store.state.email="",e.$store.state.userId="",localStorage.clear(),e.goto("/"))}))}},mounted:function(){this.getPage(this.currentPage)}}),i=n,o=a(1001),l=(0,o.Z)(i,s,r,!1,null,"b06fe548",null),u=l.exports}}]);
//# sourceMappingURL=69-legacy.faade679.js.map