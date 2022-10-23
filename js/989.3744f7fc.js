"use strict";(self["webpackChunkmono"]=self["webpackChunkmono"]||[]).push([[989],{8989:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var a=s(4562),i=s(9582),n=s(4886),r=s(4324),o=s(5495),l=s(3687),c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"login-card"}},[t.initialized?e(i.Z,{attrs:{flat:""}},[e(n.EB,[e(a.Z,{staticClass:"mr-1",attrs:{icon:"",small:""},on:{click:t.navigateBack}},[e(r.Z,{attrs:{small:""}},[t._v("mdi-arrow-left")])],1),e(l.Z),e(o.Z,{attrs:{src:t.institution.icon,"max-width":"50px","max-height":"50px"}}),e(l.Z),e(a.Z,{staticClass:"ml-1",attrs:{icon:"",small:""},on:{click:t.navigateBack}},[e(r.Z,{attrs:{small:""}},[t._v("mdi-close")])],1)],1),e(n.ZB,{staticClass:"pa-0"},[e("div",{staticClass:"title mb-5 d-flex flex-column align-center"},[t._v(" "+t._s(t.isLoggedIn?"Choose Account":"Log in")+" "),t.isLoggedIn?e("div",[t._v("Please select an account to continue")]):t._e()]),e("div",{staticClass:"content-section pa-10"},[t.isLoggedIn?e("select-account"):e("connection-auth")],1)])],1):t._e()],1)},u=[],d=(s(7658),s(629)),h=s(266),m=s(7678),g=s(2500),p=s(4712),v=(0,m.Z)(g.Z,(0,p.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))})):s.valid=e(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const s=this.watchers.find((t=>t._uid===e._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),f=s(3305),_=s(1713),Z=s(7148),w=function(){var t=this,e=t._self._c;return e(v,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(_.Z,{attrs:{"no-gutters":""}},[e(h.Z,{attrs:{cols:"12",md:"12"}},[e(Z.Z,{attrs:{label:"User ID",name:"userID",outlined:"",rules:[t.rules.userIDRequired]},model:{value:t.userID,callback:function(e){t.userID=e},expression:"userID"}})],1),e(h.Z,{attrs:{cols:"12",md:"12"}},[e(Z.Z,{attrs:{label:"Password",name:"password",type:"password",outlined:"",rules:[t.rules.passwordRequired]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e(h.Z,{attrs:{cols:"12",md:"12"}},[e(a.Z,{attrs:{"x-large":"",depressed:"",type:"submit",disabled:t.loading,color:"primary",block:""}},[t._v(" "+t._s(t.loading?"Linking Account":"Link Account")+" "),t.loading?e(f.Z,{staticClass:"ml-2",attrs:{width:3,size:20,color:"#FFFFFF",indeterminate:""}}):t._e()],1)],1)],1)],1)},b=[],k={name:"ConnectionAuthForm",data(){return{loading:!1,valid:!1,userID:null,password:null,rules:{userIDRequired:t=>!!t||"User ID is required",passwordRequired:t=>!!t||"Password is required"}}},methods:{...(0,d.nv)({loginSession:"login"}),async login(){if(this.valid=this.$refs.form.validate(),!this.valid)return;this.loading=!0;const t={username:this.userID,password:this.password};try{await this.loginSession(t),this.loading=!1}catch(e){this.loading=!1,console.error(e.response.data),this.$toast.error(e.response.data.message)}}}},C=k,B=s(1001),x=(0,B.Z)(C,w,b,!1,null,null,null),S=x.exports,I=function(){var t=this,e=t._self._c;return e(_.Z,[t.accountDetails&&!t.accountDetails.length?e("div",{staticClass:"d-flex align-center"},[t._v(" No account found! ")]):t._e(),t._l(t.accountDetails,(function(a){return e(h.Z,{key:a.accountNumber,attrs:{lg:"3",md:"12",cols:"12"}},[e(i.Z,{staticClass:"pa-5",class:{selected:a.accountNumber===t.selectedAccount},attrs:{"min-height":"107",flat:""},on:{click:function(e){return t.setAccountSelected(a.accountNumber)}}},[e(_.Z,{attrs:{"no-gutters":""}},[e(h.Z,{attrs:{md:"3",cols:"3"}},[e(o.Z,{staticClass:"currency-icon",attrs:{width:"40px",src:s(3536)}})],1),e(h.Z,{staticClass:"d-flex flex-column",attrs:{md:"7",cols:"7"}},[e("div",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"account"},[t._v(t._s(a.accountNumber))]),e("div",{staticClass:"amount"},[t._v(t._s(a.currency)+" "+t._s(t.thousandSeparator(a.balance)))])]),e(h.Z,{attrs:{md:"2",cols:"2"}},[e(o.Z,{staticClass:"check",attrs:{width:"16px",src:s(1215)}})],1)],1)],1)],1)})),e(h.Z,{attrs:{cols:"12",md:"12"}},[e(a.Z,{attrs:{"x-large":"",depressed:"",disabled:t.loading||t.noSelection,color:"primary",block:""},on:{click:t.submitAccount}},[t._v(" Continue "),t.loading?e(f.Z,{staticClass:"ml-2",attrs:{width:3,size:20,color:"#FFFFFF",indeterminate:""}}):t._e()],1)],1)],2)},y=[],D={methods:{thousandSeparator(t){if(t||0===t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},A={name:"SelectAccount",mixins:[D],data(){return{loading:!1,noSelection:!1,accountDetails:null,selectedAccount:null}},methods:{setAccountSelected(t){this.selectedAccount=t,this.noSelection=!1},submitAccount(){this.$router.push("/SuccessConnect")}},created(){this.accountDetails=JSON.parse(localStorage.getItem("accounts"))}},F=A,$=(0,B.Z)(F,I,y,!1,null,"25ac9664",null),V=$.exports,z={name:"ConnectBank",components:{ConnectionAuth:S,SelectAccount:V},data(){return{institution:null}},computed:{...(0,d.Se)({selectedBank:"getSelectedBank"}),isLoggedIn(){return localStorage.getItem("loggedInCode")},initialized(){return Object.keys(this.institution).length>0}},methods:{navigateBack(){localStorage.clear(),this.$router.push("/")}},created(){const t=JSON.parse(localStorage.getItem("selectedBank"));this.institution=t||this.selectedBank}},E=z,L=(0,B.Z)(E,c,u,!1,null,null,null),N=L.exports},1215:function(t,e,s){t.exports=s.p+"img/check.c70b86ef.svg"},3536:function(t,e,s){t.exports=s.p+"img/currency.1ea0acec.svg"}}]);
//# sourceMappingURL=989.3744f7fc.js.map