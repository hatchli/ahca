(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1kfB":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/permissions",function(){return t("xo/1")}])},"2FTe":function(n,e,t){"use strict";var r=t("vOnD").c.button.withConfig({displayName:"SickButton",componentId:"sc-8ekf3l-0"})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;cursor:pointer;&[disabled]{opacity:0.5;cursor:not-allowed;}"]);e.a=r},"5c+8":function(n,e,t){"use strict";var r=t("q1tI"),i=t.n(r),o=t("vbcS"),a=t("VliS"),s=t("SDjk"),u=i.a.createElement;e.a=function(n){return u(o.b,{query:a.a},(function(e){var t=e.data;return e.loading?u("p",null,"Loading..."):t.me?n.children:u("div",null,u("p",null,"Please Sign in before continuing"),u(s.a,null))}))}},dfwq:function(n,e,t){"use strict";var r=t("p0XB"),i=t.n(r);var o=t("d04V"),a=t.n(o),s=t("yLu3"),u=t.n(s);function l(n){return function(n){if(i()(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(u()(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n))return a()(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(e,"a",(function(){return l}))},"xo/1":function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t.n(r),o=t("5c+8"),a=t("dfwq"),s=t("0iUn"),u=t("sLSF"),l=t("MI3g"),c=t("a7VT"),d=t("AT/M"),p=t("Tit0"),f=t("vYYK"),m=t("rt45"),h=t("vbcS"),b=t("VUBQ"),g=t("lTCR"),v=t.n(g),w=t("vOnD").c.table.withConfig({displayName:"Table",componentId:"sc-922rl6-0"})(["border-spacing:0;width:100%;border:1px solid ",";thead{font-size:10px;}td,th{border-bottom:1px solid ",";border-right:1px solid ",";padding:5px;position:relative;&:last-child{border-right:none;width:150px;button{width:100%;}}label{padding:10px 5px;display:block;}}tr{&:hover{background:",";}}"],(function(n){return n.theme.offWhite}),(function(n){return n.theme.offWhite}),(function(n){return n.theme.offWhite}),(function(n){return n.theme.offWhite})),y=t("2FTe"),k=i.a.createElement;function E(){var n=Object(m.a)(["\n  query {\n    users {\n      id\n      name\n      email\n      permissions\n    }\n  }\n"]);return E=function(){return n},n}function I(){var n=Object(m.a)(["\n  mutation updatePermissions($permissions: [Permission], $userId: ID!) {\n    updatePermissions(permissions: $permissions, userId: $userId) {\n      id\n      permissions\n      name\n      email\n    }\n  }\n"]);return I=function(){return n},n}var O=["ADMIN","USER","ITEMCREATE","ITEMUPDATE","ITEMDELETE","PERMISSIONUPDATE"],T=v()(I()),j=v()(E()),x=function(n){function e(){var n,t;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=Object(l.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i))),Object(f.a)(Object(d.a)(t),"state",{permissions:t.props.user.permissions}),Object(f.a)(Object(d.a)(t),"handlePermissionChange",(function(n){var e=n.target,r=Object(a.a)(t.state.permissions);e.checked?r.push(e.value):r=r.filter((function(n){return n!==e.value})),t.setState({permissions:r})})),t}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this,e=this.props.user;return k(h.a,{mutation:T,variables:{permissions:this.state.permissions,userId:this.props.user.id}},(function(t,r){var o=r.loading,a=r.error;return k(i.a.Fragment,null,a&&k("tr",null,k("td",{colspan:"8"},k(b.a,{error:a}))),k("tr",null,k("td",null,e.name),k("td",null,e.email),O.map((function(t){return k("td",{key:t},k("label",{htmlFor:"".concat(e.id,"-permission-").concat(t)},k("input",{id:"".concat(e.id,"-permission-").concat(t),type:"checkbox",checked:n.state.permissions.includes(t),value:t,onChange:n.handlePermissionChange})))})),k("td",null,k(y.a,{type:"button",disabled:o,onClick:t},"Updat",o?"ing":"e"))))}))}}]),e}(i.a.Component),P=function(n){return k(h.b,{query:j},(function(n){var e=n.data,t=n.loading,r=n.error;console.log(e);var o=e?e.users:null;return t?k(i.a.Fragment,null,k("h2",null,"Loading...")):k("div",null,k(b.a,{error:r}),k("div",null,k("h2",null,"Manage Permissions"),k(w,null,k("thead",null,k("tr",null,k("th",null,"Name"),k("th",null,"Email"),O.map((function(n){return k("th",{key:n},n)})),"}",k("th",null,"\ud83d\udc47\ud83c\udffb"))),k("tbody",null,o.map((function(n){return k(x,{user:n,key:n.id})}))))))}))},S=i.a.createElement;e.default=function(){return S("div",null,S(o.a,null,S(P,null)))}}},[["1kfB",1,0]]]);