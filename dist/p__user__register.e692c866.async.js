(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{qq80:function(e,r,a){"use strict";a.r(r);a("14J3");var t=a("BMrR"),s=(a("+L6B"),a("2/Rp")),n=(a("jCWc"),a("kPKH")),i=(a("Q9mQ"),a("diRs")),c=(a("MXD1"),a("CFYs")),l=a("k1fw"),d=(a("miYZ"),a("tsqr")),o=a("tJVT"),u=(a("5NDa"),a("5rEg")),g=(a("OaEy"),a("2fM7")),m=(a("y8nQ"),a("Vl3Y")),p=a("q1tI"),b=a.n(p),h=a("9kvl"),E=a("55Ip"),f=a("sYde"),w=a.n(f),v=m["a"].Item,j=g["a"].Option,O=u["a"].Group,y={ok:b.a.createElement("div",{className:w.a.success},b.a.createElement(h["a"],{id:"userandregister.strength.strong"})),pass:b.a.createElement("div",{className:w.a.warning},b.a.createElement(h["a"],{id:"userandregister.strength.medium"})),poor:b.a.createElement("div",{className:w.a.error},b.a.createElement(h["a"],{id:"userandregister.strength.short"}))},q={ok:"success",pass:"normal",poor:"exception"},N=function(e){var r,a=e.submitting,f=e.dispatch,N=e.userAndregister,k=Object(p["useState"])(0),F=Object(o["a"])(k,2),z=F[0],C=F[1],V=Object(p["useState"])(!1),I=Object(o["a"])(V,2),A=I[0],S=I[1],Y=Object(p["useState"])("86"),x=Object(o["a"])(Y,2),J=x[0],P=x[1],R=Object(p["useState"])(!1),M=Object(o["a"])(R,2),Q=M[0],T=M[1],B=!1,D=m["a"].useForm(),W=Object(o["a"])(D,1),G=W[0];Object(p["useEffect"])((function(){if(N){var e=G.getFieldValue("mail");"ok"===N.status&&(d["a"].success("\u6ce8\u518c\u6210\u529f\uff01"),h["e"].push({pathname:"/user/register-result",state:{account:e}}))}}),[N]),Object(p["useEffect"])((function(){return function(){clearInterval(r)}}),[]);var H=function(){var e=59;C(e),r=window.setInterval((function(){e-=1,C(e),0===e&&clearInterval(r)}),1e3)},K=function(){var e=G.getFieldValue("password");return e&&e.length>9?"ok":e&&e.length>5?"pass":"poor"},L=function(e){f({type:"userAndregister/submit",payload:Object(l["a"])(Object(l["a"])({},e),{},{prefix:J})})},U=function(e,r){var a=Promise;return r&&r!==G.getFieldValue("password")?a.reject(Object(h["c"])({id:"userandregister.password.twice"})):a.resolve()},X=function(e,r){var a=Promise;return r?(A||S(!!r),T(!Q),r.length<6?a.reject(""):(r&&B&&G.validateFields(["confirm"]),a.resolve())):(S(!!r),a.reject(Object(h["c"])({id:"userandregister.password.required"})))},Z=function(e){P(e)},$=function(){var e=G.getFieldValue("password"),r=K();return e&&e.length?b.a.createElement("div",{className:w.a["progress-".concat(r)]},b.a.createElement(c["a"],{status:q[r],className:w.a.progress,strokeWidth:6,percent:10*e.length>100?100:10*e.length,showInfo:!1})):null};return b.a.createElement("div",{className:w.a.main},b.a.createElement("h3",null,b.a.createElement(h["a"],{id:"userandregister.register.register"})),b.a.createElement(m["a"],{form:G,name:"UserRegister",onFinish:L},b.a.createElement(v,{name:"mail",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.email.required"})},{type:"email",message:Object(h["c"])({id:"userandregister.email.wrong-format"})}]},b.a.createElement(u["a"],{size:"large",placeholder:Object(h["c"])({id:"userandregister.email.placeholder"})})),b.a.createElement(i["a"],{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:A&&b.a.createElement("div",{style:{padding:"4px 0"}},y[K()],$(),b.a.createElement("div",{style:{marginTop:10}},b.a.createElement(h["a"],{id:"userandregister.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:A},b.a.createElement(v,{name:"password",className:G.getFieldValue("password")&&G.getFieldValue("password").length>0&&w.a.password,rules:[{validator:X}]},b.a.createElement(u["a"],{size:"large",type:"password",placeholder:Object(h["c"])({id:"userandregister.password.placeholder"})}))),b.a.createElement(v,{name:"confirm",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.confirm-password.required"})},{validator:U}]},b.a.createElement(u["a"],{size:"large",type:"password",placeholder:Object(h["c"])({id:"userandregister.confirm-password.placeholder"})})),b.a.createElement(O,{compact:!0},b.a.createElement(g["a"],{size:"large",value:J,onChange:Z,style:{width:"20%"}},b.a.createElement(j,{value:"86"},"+86"),b.a.createElement(j,{value:"87"},"+87")),b.a.createElement(v,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(h["c"])({id:"userandregister.phone-number.wrong-format"})}]},b.a.createElement(u["a"],{size:"large",placeholder:Object(h["c"])({id:"userandregister.phone-number.placeholder"})}))),b.a.createElement(t["a"],{gutter:8},b.a.createElement(n["a"],{span:16},b.a.createElement(v,{name:"captcha",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.verification-code.required"})}]},b.a.createElement(u["a"],{size:"large",placeholder:Object(h["c"])({id:"userandregister.verification-code.placeholder"})}))),b.a.createElement(n["a"],{span:8},b.a.createElement(s["a"],{size:"large",disabled:!!z,className:w.a.getCaptcha,onClick:H},z?"".concat(z," s"):Object(h["c"])({id:"userandregister.register.get-verification-code"})))),b.a.createElement(v,null,b.a.createElement(s["a"],{size:"large",loading:a,className:w.a.submit,type:"primary",htmlType:"submit"},b.a.createElement(h["a"],{id:"userandregister.register.register"})),b.a.createElement(E["a"],{className:w.a.login,to:"/user/login"},b.a.createElement(h["a"],{id:"userandregister.register.sign-in"})))))};r["default"]=Object(h["b"])((function(e){var r=e.userAndregister,a=e.loading;return{userAndregister:r,submitting:a.effects["userAndregister/submit"]}}))(N)},sYde:function(e,r,a){e.exports={main:"antd-pro-pages-user-register-style-main",password:"antd-pro-pages-user-register-style-password",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning",error:"antd-pro-pages-user-register-style-error","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);