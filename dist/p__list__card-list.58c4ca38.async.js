(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"8rkt":function(t,e,a){t.exports={cardList:"antd-pro-pages-list-card-list-style-cardList",card:"antd-pro-pages-list-card-list-style-card",item:"antd-pro-pages-list-card-list-style-item",extraImg:"antd-pro-pages-list-card-list-style-extraImg",newButton:"antd-pro-pages-list-card-list-style-newButton",cardAvatar:"antd-pro-pages-list-card-list-style-cardAvatar",cardDescription:"antd-pro-pages-list-card-list-style-cardDescription",pageHeaderContent:"antd-pro-pages-list-card-list-style-pageHeaderContent",contentLink:"antd-pro-pages-list-card-list-style-contentLink"}},Pj08:function(t,e,a){"use strict";a.r(e);a("+L6B");var n=a("2/Rp"),r=(a("Mwp2"),a("VXEj")),c=(a("IzEo"),a("bx4M")),s=a("oBTY"),l=a("fWQN"),i=a("mtLc"),o=a("yKVA"),d=a("Nsem"),p=a("oZsa"),m=(a("tU7J"),a("wFql")),u=a("xvlK"),g=a("q1tI"),y=a.n(g),f=a("Hx5s"),E=a("9kvl"),v=a("8rkt"),h=a.n(v);function b(t){var e=w();return function(){var a,n=Object(p["a"])(t);if(e){var r=Object(p["a"])(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(d["a"])(this,a)}}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var j=m["a"].Paragraph,L=function(t){Object(o["a"])(a,t);var e=b(a);function a(){return Object(l["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){var t=this.props.dispatch;t({type:"listAndcardList/fetch",payload:{count:8}})}},{key:"render",value:function(){var t=this.props,e=t.listAndcardList.list,a=t.loading,l=y.a.createElement("div",{className:h.a.pageHeaderContent},y.a.createElement("p",null,"\u6bb5\u843d\u793a\u610f\uff1a\u8682\u8681\u91d1\u670d\u52a1\u8bbe\u8ba1\u5e73\u53f0 ant.design\uff0c\u7528\u6700\u5c0f\u7684\u5de5\u4f5c\u91cf\uff0c\u65e0\u7f1d\u63a5\u5165\u8682\u8681\u91d1\u670d\u751f\u6001\uff0c \u63d0\u4f9b\u8de8\u8d8a\u8bbe\u8ba1\u4e0e\u5f00\u53d1\u7684\u4f53\u9a8c\u89e3\u51b3\u65b9\u6848\u3002"),y.a.createElement("div",{className:h.a.contentLink},y.a.createElement("a",null,y.a.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"})," ","\u5feb\u901f\u5f00\u59cb"),y.a.createElement("a",null,y.a.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"})," ","\u4ea7\u54c1\u7b80\u4ecb"),y.a.createElement("a",null,y.a.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"})," ","\u4ea7\u54c1\u6587\u6863"))),i=y.a.createElement("div",{className:h.a.extraImg},y.a.createElement("img",{alt:"\u8fd9\u662f\u4e00\u4e2a\u6807\u9898",src:"https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"})),o={};return y.a.createElement(f["c"],{content:l,extraContent:i},y.a.createElement("div",{className:h.a.cardList},y.a.createElement(r["a"],{rowKey:"id",loading:a,grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:[o].concat(Object(s["a"])(e)),renderItem:function(t){return t&&t.id?y.a.createElement(r["a"].Item,{key:t.id},y.a.createElement(c["a"],{hoverable:!0,className:h.a.card,actions:[y.a.createElement("a",{key:"option1"},"\u64cd\u4f5c\u4e00"),y.a.createElement("a",{key:"option2"},"\u64cd\u4f5c\u4e8c")]},y.a.createElement(c["a"].Meta,{avatar:y.a.createElement("img",{alt:"",className:h.a.cardAvatar,src:t.avatar}),title:y.a.createElement("a",null,t.title),description:y.a.createElement(j,{className:h.a.item,ellipsis:{rows:3}},t.description)}))):y.a.createElement(r["a"].Item,null,y.a.createElement(n["a"],{type:"dashed",className:h.a.newButton},y.a.createElement(u["a"],null)," \u65b0\u589e\u4ea7\u54c1"))}})))}}]),a}(g["Component"]);e["default"]=Object(E["b"])((function(t){var e=t.listAndcardList,a=t.loading;return{listAndcardList:e,loading:a.models.listAndcardList}}))(L)}}]);