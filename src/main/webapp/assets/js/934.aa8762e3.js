"use strict";(self["webpackChunkwork"]=self["webpackChunkwork"]||[]).push([[934],{3934:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("div",{staticClass:"info"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("校车信息")]),a("el-breadcrumb-item",[t._v("校车班次")])],1)],1),a("div",{staticClass:"search"},[a("el-date-picker",{staticClass:"date",attrs:{type:"date",placeholder:"开始日期"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),a("span",[t._v("到")]),a("el-date-picker",{staticClass:"date",attrs:{type:"date",placeholder:"结束日期"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"medium"},on:{click:t.search}},[t._v("搜索班次")])],1),a("div",[a("el-table",{attrs:{data:t.times}},[a("el-table-column",{attrs:{prop:"id",label:"班次编号",width:"180"}}),a("el-table-column",{attrs:{prop:"time",label:"出发时间",width:"180"}}),a("el-table-column",{attrs:{prop:"start",label:"出发车站",width:"100"}}),a("el-table-column",{attrs:{prop:"end",label:"目的车站",width:"180"}}),a("el-table-column",{attrs:{prop:"number",label:"剩余空位",width:"100"}}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.hasOrdered?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.order(e.row.id)}}},[t._v("预约")]):a("el-button",{attrs:{type:"text",size:"small"}},[t._v("已预约")])]}}])})],1)],1),a("div",[a("el-pagination",{staticClass:"page",attrs:{background:"",layout:"prev, pager, next",total:t.totalPages,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.getPageNum}})],1)])},r=[],i={data(){return{start:"",end:"",saveStart:"",saveEnd:"",times:[],totalPages:100,currentPage:1}},methods:{goto(t){this.$router.push({path:t})},getDate(t){if(""===t)return"";let e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},getPageNum(t){this.getPage(this.currentPage)},search(){this.saveStart=this.start,this.saveEnd=this.end,this.getPage(1)},order(t){this.$axios({method:"POST",url:"/user/order",data:{id:t}}).then((e=>{let a=e.data;1==a.status?(this.$message({message:"预约成功,校车班次id为"+t,type:"success"}),this.times.forEach(((t,e,s)=>{t.id==a.id&&(t.number=a.number,t.hasOrdered=a.hasOrdered)}))):0==a.status?this.$message({message:"预约失败,已无剩余座位!",type:"warning"}):2==a.status?this.$message({message:"预约失败,请勿重复预约!",type:"warning"}):(this.$store.state.status=1,this.$store.state.hasLogin=!1,this.$store.state.isManager=!1,this.$store.state.userName="",this.$store.state.email="",this.$store.state.userId="",localStorage.clear(),this.goto("/"))}))},getPage(t){this.$axios({method:"GET",url:"/user/searchTimes",params:{page:t,number:8,startTime:this.getDate(this.saveStart),endTime:this.getDate(this.saveEnd)}}).then((t=>{let e=t.data;1==e.status?(this.times=e.times,this.totalPages=10*e.pages,this.currentPage=e.currentPage):0==e.status?this.$message({message:"日期输入有误!",type:"warning"}):(this.$store.state.status=1,this.$store.state.hasLogin=!1,this.$store.state.isManager=!1,this.$store.state.userName="",this.$store.state.email="",this.$store.state.userId="",localStorage.clear(),this.goto("/"))}))}},mounted(){this.getPage(this.currentPage)}},l=i,n=a(1001),o=(0,n.Z)(l,s,r,!1,null,"06f99795",null),u=o.exports}}]);
//# sourceMappingURL=934.aa8762e3.js.map