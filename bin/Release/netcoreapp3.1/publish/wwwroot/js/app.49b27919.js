(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-sucess"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Keepr")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("My-Dashboard")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("bc3a"),c=a.n(o);c.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},d=u,p=a("2877"),m=Object(p["a"])(d,r,l,!1,null,null,null),v=m.exports,h=a("335d"),b={name:"App",async beforeCreate(){await Object(h["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},f=b,g=(a("5c0b"),Object(p["a"])(f,n,i,!1,null,null,null)),C=g.exports,w=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container-fluid"},[t._m(0),a("div",{staticClass:"row",staticStyle:{"padding-top":"1em"}},[a("div",{staticClass:"col-12"},[t.keepForm?a("button",{staticClass:"btn btn-danger",on:{click:function(e){t.keepForm=!1}}},[t._v("Cancel")]):a("button",{staticClass:"btn btn-outline-info",on:{click:function(e){t.keepForm=!0}}},[t._v("New Keep")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t.keepForm?a("create-keep"):t._e()],1)]),a("div",{staticClass:"row",staticStyle:{"padding-top":"2em"}},t._l(t.keeps,(function(t){return a("keep",{key:t.id,attrs:{keepData:t}})})),1)])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row text-center",staticStyle:{"padding-top":"2em"}},[s("div",{staticClass:"col-12"},[s("img",{staticStyle:{"max-width":"100%",height:"auto"},attrs:{src:a("e3b6")}})])])}],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 col-sm-6 col-12 text-center",staticStyle:{"padding-top":"2em","padding-left":"2.5em"}},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.keepData.img,alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.keepData.name))]),a("p",{staticClass:"card-text"}),a("p",[t._v(t._s(t.keepData.description))]),a("p",[t._v(t._s(t.keepData.keeps))]),a("div",{staticClass:"dropdown show"},[a("a",{staticClass:"btn btn-sm btn-info dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Add To Vault")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[a("div",t._l(t.vaults,(function(e){return a("a",{key:e.name,staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return t.addToVault(e.id)}}},[t._v(t._s(e.name))])})),0)])]),a("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.deleteKeep}},[t._v("Delete")])])])])},$=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 col-sm-6 col-12 text-center",staticStyle:{"padding-top":"2em","padding-left":"2.5em"}},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.vaultData.name))]),a("p",{staticClass:"card-text"}),a("p",[t._v(t._s(t.vaultData.description))]),a("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.deleteVault}},[t._v("Delete")]),a("router-link",{attrs:{to:{name:"VaultDetails",params:{vaultId:this.vaultData.id}}}},[a("button",{staticClass:"btn btn-sm btn-info"},[t._v("Open Vault")])])],1)])])},K=[],V={name:"vault",props:["vaultData"],data(){return{}},methods:{deleteVault(){this.$store.dispatch("deleteVault",this.vaultData.id)}},computed:{}},D=V,O=Object(p["a"])(D,x,K,!1,null,null,null),j=O.exports,E={name:"keep",props:["keepData","vaultData","profileData"],data(){return{}},methods:{deleteKeep(){this.$store.dispatch("deleteKeep",this.keepData.id)},addToVault(t){let e={keepId:this.keepData.id,vaultId:t};this.$store.dispatch("addToVault",e)}},computed:{vaults(){return this.$store.state.vaults}},componets:{vault:j}},P=E,M=Object(p["a"])(P,k,$,!1,null,null,null),N=M.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-keep"},[a("button",{staticClass:"btn btn-outline-info",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Create New Keep")]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body text-center"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createKeep(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],attrs:{type:"text",name:"name",placeholder:"Name...",required:""},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.Description,expression:"newKeep.Description"}],attrs:{type:"text",name:"description",placeholder:"Description...",required:""},domProps:{value:t.newKeep.Description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"Description",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],attrs:{type:"text",name:"imgUrl",placeholder:"imgUrl...",required:""},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}}),a("br"),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Submit")])])]),t._m(1)])])])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("New Keep")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],F={name:"CreateKeep",data(){return{newKeep:{title:"",descripton:"",img:""}}},methods:{createKeep(){this.$store.dispatch("createKeep",this.newKeep),this.newKeep={title:"",description:""},this.form=!1}}},B=F,L=Object(p["a"])(B,S,T,!1,null,null,null),U=L.exports,I={name:"home",async mounted(){this.$store.dispatch("getKeeps"),await Object(h["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getVaults"),this.$store.dispatch("getProfile")},data(){return{keepForm:!1}},computed:{keeps(){return this.$store.state.publicKeeps},user(){return this.$store.state.user},profile(){return this.$store.state.profile}},methods:{logout(){this.$store.dispatch("logout")}},components:{keep:N,CreateKeep:U}},q=I,A=Object(p["a"])(q,_,y,!1,null,null,null),R=A.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("div",{staticClass:"contianer-fluid text-center"},[a("div",{staticClass:"row"}),t.vaultForm?a("button",{staticClass:"btn btn-danger",on:{click:function(e){t.vaultForm=!1}}},[t._v("Cancel")]):a("button",{staticClass:"btn btn-info",on:{click:function(e){t.vaultForm=!0}}},[t._v("New Vault")])]),a("div",{staticClass:"col-12"},[t.vaultForm?a("create-vault"):t._e()],1),a("div",{staticClass:"row"},t._l(t.vaults,(function(t){return a("vault",{key:t.id,attrs:{vaultData:t}})})),1)])},J=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-vault"},[a("button",{staticClass:"btn btn-outline-info",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Create New Vault")]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body text-center"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createVault(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],attrs:{type:"text",name:"name",placeholder:"Name...",required:""},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.Description,expression:"newVault.Description"}],attrs:{type:"text",name:"description",placeholder:"Description...",required:""},domProps:{value:t.newVault.Description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"Description",e.target.value)}}}),a("br"),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Submit")])])]),t._m(1)])])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],X={name:"CreateVault",data(){return{newVault:{title:"",descripton:""}}},methods:{createVault(){this.$store.dispatch("createVault",this.newVault),this.newKeep={title:"",description:""},this.form=!1}}},Y=X,G=Object(p["a"])(Y,H,W,!1,null,null,null),Q=G.exports,Z={async mounted(){await Object(h["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getVaults")},data(){return{vaultForm:!1}},computed:{vaults(){return this.$store.state.vaults}},components:{vault:j,CreateVault:Q}},tt=Z,et=Object(p["a"])(tt,z,J,!1,null,null,null),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-details"},[a("div",{staticClass:"container-fluid"},[t._m(0),a("div",{staticClass:"row"},t._l(t.keeps,(function(t){return a("keep",{key:t.id,attrs:{keepData:t}})})),1)])])},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h1",[t._v("Your Vault")])])])}],it={name:"VaultDetails",props:["vaultData"],data:{return:{}},mounted(){this.$store.dispatch("getKeepsByVaultId",this.$route.params.vaultId)},data(){return{}},computed:{vaults(){return this.$store.state.vaults},keeps(){return this.$store.state.vaultKeeps}},methods:{},components:{keep:N}},rt=it,lt=Object(p["a"])(rt,st,nt,!1,null,null,null),ot=lt.exports;s["a"].use(w["a"]);var ct=new w["a"]({routes:[{path:"/",name:"home",component:R},{path:"/dashboard",name:"dashboard",component:at,beforeEnter:h["b"]},{path:"/vaults/:vaultId",name:"VaultDetails",component:ot}]}),ut=a("2f62");s["a"].use(ut["a"]);let dt=location.host.includes("localhost")?"https://localhost:5001/":"/",pt=c.a.create({baseURL:dt+"api/",timeout:3e3,withCredentials:!0});var mt=new ut["a"].Store({state:{publicKeeps:[],vaults:[],vaultKeeps:[],profile:[]},mutations:{setPublicKeeps(t,e){t.publicKeeps=e},setVaults(t,e){t.vaults=e},setVaultKeeps(t,e){t.vaultKeeps=e},setProfile(t,e){t.profile=e},addKeep(t,e){t.publicKeeps.push(e)},addVault(t,e){t.vaults.push(e)}},actions:{setBearer({},t){pt.defaults.headers.authorization=t},resetBearer(){pt.defaults.headers.authorization=""},async getKeeps({commit:t,dispatch:e}){let a=await pt.get("keeps");t("setPublicKeeps",a.data)},async getVaults({commit:t,dispatch:e}){let a=await pt.get("vaults");t("setVaults",a.data)},async getProfile({commit:t,dispatch:e}){let a=await pt.get("profile");t("setProfile",a.data)},async getKeepsByVaultId({commit:t,dispatch:e},a){let s=await pt.get("vaults/"+a+"/keeps");t("setVaultKeeps",s.data)},async deleteKeep({commit:t,dispatch:e},a){await pt.delete("keeps/"+a);e("getKeeps")},async deleteVault({commit:t,dispatch:e},a){await pt.delete("vaults/"+a);e("getVaults")},async createKeep({commit:t,dispatch:e},a){pt.post("keeps",a);t("addKeep",a)},async createVault({commit:t,dispatch:e},a){pt.post("vaults",a);t("addVault",a)},async addToVault({commit:t,dispatch:e},a){pt.post("vaultKeeps",a);t("setVaultKeeps",a)},async addToKeepCount({commit:t,dispatch:e},a){pt.put("")}}});const vt="dev-1238bkw3.auth0.com",ht="https://keeprv2.com",bt="OofttyU7Rpi0eFBwiNsPA5ihEK7ks6XK";s["a"].use(h["a"],{domain:vt,clientId:bt,audience:ht,onRedirectCallback:t=>{ct.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:ct,store:mt,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(t,e,a){},e3b6:function(t,e,a){t.exports=a.p+"img/keepr.c67eec0f.png"},e7a0:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="e7a0"}});