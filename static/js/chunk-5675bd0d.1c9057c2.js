(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5675bd0d"],{"333d":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.total>0?r("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[r("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1):e._e()},a=[],o=(r("a9e3"),r("ac1f"),r("5319"),r("96cf"),r("1da1"));Math.easeInOutQuad=function(e,t,r,n){return e/=n/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function u(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(e,t,r){var n=s(),a=e-n,o=20,c=0;t="undefined"===typeof t?500:t;var l=function e(){c+=o;var s=Math.easeInOutQuad(c,n,a,t);u(s),c<t?i(e):r&&"function"===typeof r&&r()};l()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},data:function(){return{layouts:""}},created:function(){this.currentPage=this.$route.query.current||this.page,this.handleCurrentChange(this.currentPage)},computed:{currentPage:{get:function(){return this.$route.query.current||this.page},set:function(e){var t=JSON.parse(JSON.stringify(this.$route.query));this.$emit("update:page",e),t.current!=e&&e!=this.page&&(t.current=e,this.$router.replace({path:this.$route.path,query:t}))}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{delete:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=Math.ceil((t.total-e)/t.pageSize),t.currentPage>n&&(t.currentPage=n),t.handleCurrentChange(t.currentPage);case 3:case"end":return r.stop()}}),r)})))()},update:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:log(e),n=Math.ceil((e||1)/t.pageSize),t.currentPage>n&&(t.currentPage=n),t.handleCurrentChange(t.currentPage);case 4:case"end":return r.stop()}}),r)})))()},handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&c(0,800)},handleCurrentChange:function(e){log(7410,e),this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},d=l,p=(r("a8e8"),r("2877")),m=Object(p["a"])(d,n,a,!1,null,"68eacec9",null);t["a"]=m.exports},"9eef":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"pw",rawName:"v-pw",value:"SS_R_list",expression:"'SS_R_list'"}],staticClass:"container agreement",staticStyle:{margin:"10px"}},[r("el-card",{staticClass:"pd10"},[r("el-row",{attrs:{type:"flex",justify:"start",gutter:10}},[r("el-col",{attrs:{span:10}},[e.pw("SS_R_Operation")?r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push({name:"Role-Add"})}}},[e._v(" 添加 ")]):e._e()],1),r("el-col",{attrs:{span:5}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择应用公司类型"},model:{value:e.searchQuery.companyTypes,callback:function(t){e.$set(e.searchQuery,"companyTypes",t)},expression:"searchQuery.companyTypes"}},e._l(e.seProType,(function(e){return r("el-option",{key:e.id,attrs:{label:e.typeName,value:e.id}})})),1)],1),r("el-col",{attrs:{span:7}},[r("el-input",{attrs:{type:"text",placeholder:"请输入角色名称"},model:{value:e.searchQuery.roleName,callback:function(t){e.$set(e.searchQuery,"roleName",t)},expression:"searchQuery.roleName"}})],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.search("search")}}},[e._v("查询")])],1)],1)],1),r("el-card",{staticClass:"asdTable",staticStyle:{"margin-top":"10px"}},[r("table-list",{attrs:{list:e.table},on:{reload:e.updateData}})],1),r("pagination",{ref:"pagination",attrs:{total:e.table.totalCount,page:e.query.current,limit:e.query.limit,layout:"total, prev, pager, next,jumper"},on:{"update:page":function(t){return e.$set(e.query,"current",t)},"update:limit":function(t){return e.$set(e.query,"limit",t)},pagination:e.loadData}})],1)},a=[],o=(r("99af"),r("96cf"),r("1da1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.list.loading,expression:"list.loading"}],class:{nohasData:!e.list.data.length},staticStyle:{width:"100%"},attrs:{border:"",data:e.list.data},on:{"row-click":e.lookDetails}},[r("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"creator",label:"创建人"}}),r("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),r("el-table-column",{attrs:{label:"操作",width:"100","class-name":"opter"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.pw("SS_R_Operation")?r("div",{staticStyle:{"text-align":"center"},on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},[r("el-button",{attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.$router.push({name:"AuthorizedEdit",params:{id:t.row.id}})}}},[e._v(" 编辑 ")]),r("el-button",{staticClass:"del",attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.delTabItem(t.row)}}},[e._v("删除")])],1):e._e()]}}])})],1)],1)},u=[],s=(r("cc5e"),{components:{},filters:{},props:{list:{type:Object,default:function(){return{loading:!1,data:[]}}}},data:function(){return{array:[],disabled:!0,options:[]}},created:function(){},methods:{lookDetails:function(e,t,r,n){var a=this;this.lookInfo(t,(function(){a.$router.push({name:"Role-Details",params:{id:e.id}})}))},delTabItem:function(e){var t=this;this.$MessageBox.confirm("确定删除当前数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("reload",1e3),e.abrupt("return");case 4:r=e.sent,n=r.code,a=r.msg,0===n&&(t.$Message.success(a),t.$emit("reload"));case 8:case"end":return e.stop()}}),e)})))).catch((function(){}))}}}),c=s,l=r("2877"),d=Object(l["a"])(c,i,u,!1,null,null,null),p=d.exports,m=r("333d"),f=r("b73f"),h={components:{TableList:p,Pagination:m["a"]},data:function(){return{query:{limit:10,current:1},searchQuery:{roleName:"",limit:10,current:1,companyTypes:""},table:{data:[],loading:!1,totalCount:0},seProType:[]}},created:function(){this.selectCompanyTypeListFn()},methods:{updateData:function(e){this.$refs["pagination"].update(e)},selectCompanyTypeListFn:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["g"])();case 2:r=t.sent,n=r.data,e.seProType=[{id:"",typeName:"全部"}].concat(n||[]);case 5:case"end":return t.stop()}}),t)})))()},search:function(){this.query.current=1,this.query=Object.assign({},this.searchQuery),this.loadData()},loadData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])(e.query);case 2:r=t.sent,n=r.data,e.table=e.setTableData(n);case 5:case"end":return t.stop()}}),t)})))()}}},g=h,y=Object(l["a"])(g,n,a,!1,null,null,null);t["default"]=y.exports},a8e8:function(e,t,r){"use strict";r("e9f4")},b775:function(e,t,r){"use strict";r("caad"),r("d3b7"),r("2532");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("4360"),u=r("4328"),s=r.n(u),c=r("e350"),l=a.a.create({baseURL:"https://bj.xiaoyihuanbao.com",timeout:6e5});function d(e,t){Object(o["Message"])({message:e,type:t,duration:5e3})}l.interceptors.request.use((function(e){var t=window.localStorage.getItem("user_id"),r=window.localStorage.getItem("token");r&&(e.headers["token"]=r,e.headers["userId"]=t,e.headers["user_id"]=t,e.headers["companyId"]=i["a"].getters.companyId);var n=Object(c["a"])(e);return"GET"!==e.method&&e.data&&(e.data.postId=n,e.data.userId=e.data.userId||t,e.data=s.a.stringify(e.data)),e}),(function(e){return console.error("Request error:",e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;return 200!==e.status||0!==t.ret_code?(d(t.error_msg||t.message||"Error","error"),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){if(console.error("Response error:",e),"ECONNABORTED"===e.code&&e.message.includes("timeout")){var t=e.config;return t.__retryCount>=t.retry?Promise.reject(e):(t.__retryCount=(t.__retryCount||0)+1,new Promise((function(e){return setTimeout(e,t.retryDelay||1)})).then((function(){return l(t)})))}if(e.response)switch(e.response.status){case 401:o["MessageBox"].confirm("您的登录状态异常，您可以留在此页面，也可以重新登录！","状态异常",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))}));break}return d(e.response?e.response.data.message:e.message,"error"),{}})),t["a"]=l},cc5e:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return c}));var n=r("b775");function a(e){return Object(n["a"])({qs:!0,url:"/authority/menu/addMenu",method:"POST",data:e})}function o(e){return Object(n["a"])({qs:!0,url:"/authority/menu/doUpdate",method:"POST",data:e})}function i(e){return Object(n["a"])({qs:!0,url:"/authority/menu/listMenuByPage",method:"GET",params:e})}function u(e){return Object(n["a"])({qs:!0,url:"/authority/menu/enableOrDisable",method:"POST",data:e})}function s(e){return Object(n["a"])({qs:!0,url:"/authority/menu/deleteMenuById",method:"POST",data:e})}function c(e){return Object(n["a"])({qs:!0,url:"/authority/role/beforeAddRole",method:"POST",data:e})}},e9f4:function(e,t,r){}}]);