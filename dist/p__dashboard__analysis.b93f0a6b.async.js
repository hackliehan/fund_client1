(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{UXoT:function(a,e,t){a.exports={iconGroup:"antd-pro-pages-dashboard-analysis-style-iconGroup",anticon:"antd-pro-pages-dashboard-analysis-style-anticon",rankingList:"antd-pro-pages-dashboard-analysis-style-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-style-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-style-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-style-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-style-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-style-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-style-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-style-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-style-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-style-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-style-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-style-offlineCard",trendText:"antd-pro-pages-dashboard-analysis-style-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-style-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-style-salesExtraWrap"}},t2zc:function(a,e,t){"use strict";t.r(e);t("14J3");var n=t("BMrR"),s=(t("jCWc"),t("kPKH")),r=(t("qVdP"),t("jsC+")),l=(t("lUTK"),t("BvKs")),i=t("fWQN"),o=t("mtLc"),c=t("yKVA"),d=t("Nsem"),u=t("oZsa"),p=t("GZ0F"),y=t("q1tI"),h=t.n(y),f=t("Hx5s"),m=t("9kvl"),g=(t("T2oS"),t("W9HT")),b=function(){return h.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},h.a.createElement(g["a"],{size:"large"}))},v=t("wd/R"),T=t.n(v);function k(a){return 1*a<10?"0".concat(a):a}function E(a){var e=new Date,t=864e5;if("today"===a)return e.setHours(0),e.setMinutes(0),e.setSeconds(0),[T()(e),T()(e.getTime()+(t-1e3))];if("week"===a){var n=e.getDay();e.setHours(0),e.setMinutes(0),e.setSeconds(0),0===n?n=6:n-=1;var s=e.getTime()-n*t;return[T()(s),T()(s+(7*t-1e3))]}var r=e.getFullYear();if("month"===a){var l=e.getMonth(),i=T()(e).add(1,"months"),o=i.year(),c=i.month();return[T()("".concat(r,"-").concat(k(l+1),"-01 00:00:00")),T()(T()("".concat(o,"-").concat(k(c+1),"-01 00:00:00")).valueOf()-1e3)]}return[T()("".concat(r,"-01-01 00:00:00")),T()("".concat(r,"-12-31 23:59:59"))]}var D=t("UXoT"),C=t.n(D);function S(a){var e=P();return function(){var t,n=Object(u["a"])(a);if(e){var s=Object(u["a"])(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return Object(d["a"])(this,t)}}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(a){return!1}}var R=h.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(0),t.e(36)]).then(t.bind(null,"p3gl"))})),x=h.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(0),t.e(39)]).then(t.bind(null,"7W9t"))})),A=h.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(0),t.e(40)]).then(t.bind(null,"4Bm3"))})),w=h.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(0),t.e(38)]).then(t.bind(null,"4IyT"))})),O=h.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(0),t.e(37)]).then(t.bind(null,"tKSp"))})),I=function(a){Object(c["a"])(t,a);var e=S(t);function t(){var a;Object(i["a"])(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return a=e.call.apply(e,[this].concat(s)),a.state={salesType:"all",currentTabKey:"",rangePickerValue:E("year")},a.reqRef=0,a.timeoutId=0,a.handleChangeSalesType=function(e){a.setState({salesType:e.target.value})},a.handleTabChange=function(e){a.setState({currentTabKey:e})},a.handleRangePickerChange=function(e){var t=a.props.dispatch;a.setState({rangePickerValue:e}),t({type:"dashboardAndanalysis/fetchSalesData"})},a.selectDate=function(e){var t=a.props.dispatch;a.setState({rangePickerValue:E(e)}),t({type:"dashboardAndanalysis/fetchSalesData"})},a.isActive=function(e){var t=a.state.rangePickerValue;if(!t)return"";var n=E(e);return n&&t[0]&&t[1]&&t[0].isSame(n[0],"day")&&t[1].isSame(n[1],"day")?C.a.currentDate:""},a}return Object(o["a"])(t,[{key:"componentDidMount",value:function(){var a=this.props.dispatch;this.reqRef=requestAnimationFrame((function(){a({type:"dashboardAndanalysis/fetch"})}))}},{key:"componentWillUnmount",value:function(){var a=this.props.dispatch;a({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var a,e=this.state,t=e.rangePickerValue,i=e.salesType,o=e.currentTabKey,c=this.props,d=c.dashboardAndanalysis,u=c.loading,m=d.visitData,g=d.visitData2,v=d.salesData,T=d.searchData,k=d.offlineData,E=d.offlineChartData,D=d.salesTypeData,S=d.salesTypeDataOnline,P=d.salesTypeDataOffline;a="all"===i?D:"online"===i?S:P;var I=h.a.createElement(l["a"],null,h.a.createElement(l["a"].Item,null,"\u64cd\u4f5c\u4e00"),h.a.createElement(l["a"].Item,null,"\u64cd\u4f5c\u4e8c")),j=h.a.createElement("span",{className:C.a.iconGroup},h.a.createElement(r["a"],{overlay:I,placement:"bottomRight"},h.a.createElement(p["a"],null))),K=o||k[0]&&k[0].name;return h.a.createElement(f["b"],null,h.a.createElement(h.a.Fragment,null,h.a.createElement(y["Suspense"],{fallback:h.a.createElement(b,null)},h.a.createElement(R,{loading:u,visitData:m})),h.a.createElement(y["Suspense"],{fallback:null},h.a.createElement(x,{rangePickerValue:t,salesData:v,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:u,selectDate:this.selectDate})),h.a.createElement(n["a"],{gutter:24,style:{marginTop:24}},h.a.createElement(s["a"],{xl:12,lg:24,md:24,sm:24,xs:24},h.a.createElement(y["Suspense"],{fallback:null},h.a.createElement(A,{loading:u,visitData2:g,searchData:T,dropdownGroup:j}))),h.a.createElement(s["a"],{xl:12,lg:24,md:24,sm:24,xs:24},h.a.createElement(y["Suspense"],{fallback:null},h.a.createElement(w,{dropdownGroup:j,salesType:i,loading:u,salesPieData:a,handleChangeSalesType:this.handleChangeSalesType})))),h.a.createElement(y["Suspense"],{fallback:null},h.a.createElement(O,{activeKey:K,loading:u,offlineData:k,offlineChartData:E,handleTabChange:this.handleTabChange}))))}}]),t}(y["Component"]);e["default"]=Object(m["b"])((function(a){var e=a.dashboardAndanalysis,t=a.loading;return{dashboardAndanalysis:e,loading:t.effects["dashboardAndanalysis/fetch"]}}))(I)}}]);