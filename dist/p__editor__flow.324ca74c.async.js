(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{C7IC:function(e,a,t){e.exports={contextMenu:"antd-pro-pages-editor-flow-components-editor-context-menu-index-contextMenu",item:"antd-pro-pages-editor-flow-components-editor-context-menu-index-item",anticon:"antd-pro-pages-editor-flow-components-editor-context-menu-index-anticon"}},JSTj:function(e,a,t){e.exports={detailPanel:"antd-pro-pages-editor-flow-components-editor-detail-panel-index-detailPanel"}},Qb4Y:function(e,a,t){e.exports={toolbar:"antd-pro-pages-editor-flow-components-editor-toolbar-index-toolbar",tooltip:"antd-pro-pages-editor-flow-components-editor-toolbar-index-tooltip"}},c1CB:function(e,a,t){e.exports={editor:"antd-pro-pages-editor-flow-index-editor",editorHd:"antd-pro-pages-editor-flow-index-editorHd",editorBd:"antd-pro-pages-editor-flow-index-editorBd",editorSidebar:"antd-pro-pages-editor-flow-index-editorSidebar",editorContent:"antd-pro-pages-editor-flow-index-editorContent",flow:"antd-pro-pages-editor-flow-index-flow",mind:"antd-pro-pages-editor-flow-index-mind",koni:"antd-pro-pages-editor-flow-index-koni"}},qNYI:function(e,a,t){"use strict";t.r(a);t("14J3");var n=t("BMrR"),l=(t("jCWc"),t("kPKH")),i=t("vzA7"),m=t("Hx5s"),I=t("q1tI"),c=t.n(I),o=t("9kvl"),d=(t("IzEo"),t("bx4M")),r=function(){return c.a.createElement(d["a"],{type:"inner",size:"small",title:"Minimap",bordered:!1},c.a.createElement(i["o"],{height:200}))},b=r,s=t("R+Pm"),p=Object(s["a"])({scriptUrl:"https://at.alicdn.com/t/font_1101588_01zniftxm9yp.js"}),Z=p,u=t("C7IC"),g=t.n(u),G=function(e){return e.toLowerCase().replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))},P=function(e){var a=e.command,t=e.icon,n=e.text;return c.a.createElement(i["c"],{name:a},c.a.createElement("div",{className:g.a.item},c.a.createElement(Z,{type:"icon-".concat(t||a)}),c.a.createElement("span",null,n||G(a))))},y=P,M=function(){return c.a.createElement(i["d"],{className:g.a.contextMenu},c.a.createElement(i["r"],null,c.a.createElement(y,{command:"copy"}),c.a.createElement(y,{command:"delete"})),c.a.createElement(i["f"],null,c.a.createElement(y,{command:"delete"})),c.a.createElement(i["i"],null,c.a.createElement(y,{command:"copy"}),c.a.createElement(y,{command:"delete"}),c.a.createElement(y,{command:"unGroup",icon:"ungroup",text:"Ungroup"})),c.a.createElement(i["p"],null,c.a.createElement(y,{command:"copy"}),c.a.createElement(y,{command:"paste"}),c.a.createElement(y,{command:"addGroup",icon:"group",text:"Add Group"}),c.a.createElement(y,{command:"delete"})),c.a.createElement(i["a"],null,c.a.createElement(y,{command:"undo"}),c.a.createElement(y,{command:"redo"}),c.a.createElement(y,{command:"pasteHere",icon:"paste",text:"Paste Here"})))},j=M,x=t("0Owb"),N=(t("5NDa"),t("5rEg")),E=t("jrin"),C=t("k1fw"),S=t("fWQN"),D=t("mtLc"),z=t("yKVA"),W=t("879j"),h=(t("OaEy"),t("2fM7")),w=(t("y8nQ"),t("Vl3Y")),A=function(e){return e.toLowerCase().replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))},B=w["a"].Item,v=h["a"].Option,H={labelCol:{sm:{span:8}},wrapperCol:{sm:{span:16}}},R=function(e){Object(z["a"])(t,e);var a=Object(W["a"])(t);function t(){var e;Object(S["a"])(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return e=a.call.apply(a,[this].concat(l)),e.handleFieldChange=function(a){var t=e.props.propsAPI,n=t.getSelected,l=t.executeCommand,i=t.update;setTimeout((function(){var e=n()[0];e&&l((function(){i(e,Object(C["a"])({},a))}))}),0)},e.handleInputBlur=function(a){return function(t){t.preventDefault(),e.handleFieldChange(Object(E["a"])({},a,t.currentTarget.value))}},e.renderNodeDetail=function(){var a=e.item.getModel(),t=a.label;return c.a.createElement(w["a"],{initialValues:{label:t}},c.a.createElement(B,Object(x["a"])({label:"Label",name:"label"},H),c.a.createElement(N["a"],{onBlur:e.handleInputBlur("label")})))},e.renderEdgeDetail=function(){var a=e.item.getModel(),t=a.label,n=void 0===t?"":t,l=a.shape,i=void 0===l?"flow-smooth":l;return c.a.createElement(w["a"],{initialValues:{label:n,shape:i}},c.a.createElement(B,Object(x["a"])({label:"Label",name:"label"},H),c.a.createElement(N["a"],{onBlur:e.handleInputBlur("label")})),c.a.createElement(B,Object(x["a"])({label:"Shape",name:"shape"},H),c.a.createElement(h["a"],{onChange:function(a){return e.handleFieldChange({shape:a})}},c.a.createElement(v,{value:"flow-smooth"},"Smooth"),c.a.createElement(v,{value:"flow-polyline"},"Polyline"),c.a.createElement(v,{value:"flow-polyline-round"},"Polyline Round"))))},e.renderGroupDetail=function(){var a=e.item.getModel(),t=a.label,n=void 0===t?"\u65b0\u5efa\u5206\u7ec4":t;return c.a.createElement(w["a"],{initialValues:{label:n}},c.a.createElement(B,Object(x["a"])({label:"Label",name:"label"},H),c.a.createElement(N["a"],{onBlur:e.handleInputBlur("label")})))},e}return Object(D["a"])(t,[{key:"render",value:function(){var e=this.props.type;return this.item?c.a.createElement(d["a"],{type:"inner",size:"small",title:A(e),bordered:!1},"node"===e&&this.renderNodeDetail(),"edge"===e&&this.renderEdgeDetail(),"group"===e&&this.renderGroupDetail()):null}},{key:"item",get:function(){var e=this.props.propsAPI;return e.getSelected()[0]}}]),t}(c.a.Component),J=Object(i["v"])(R),V=t("JSTj"),k=t.n(V),L=function(){return c.a.createElement(i["e"],{className:k.a.detailPanel},c.a.createElement(i["s"],null,c.a.createElement(J,{type:"node"})),c.a.createElement(i["g"],null,c.a.createElement(J,{type:"edge"})),c.a.createElement(i["j"],null,c.a.createElement(J,{type:"group"})),c.a.createElement(i["q"],null,c.a.createElement(d["a"],{type:"inner",size:"small",title:"Multi Select",bordered:!1})),c.a.createElement(i["b"],null,c.a.createElement(d["a"],{type:"inner",size:"small",title:"Canvas",bordered:!1})))},X=L,f=t("yPnl"),T=t.n(f),Y=function(){return c.a.createElement(i["l"],{className:T.a.itemPanel},c.a.createElement(d["a"],{bordered:!1},c.a.createElement(i["k"],{type:"node",size:"72*72",shape:"flow-circle",model:{color:"#FA8C16",label:"Start"},src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPjxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRkZGMkU4IiB4bGluazpocmVmPSIjYiIvPjxjaXJjbGUgc3Ryb2tlPSIjRkZDMDY5IiBjeD0iMzYiIGN5PSIzNiIgcj0iMzUuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyMyIgeT0iNDEiPlN0YXJ0PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="}),c.a.createElement(i["k"],{type:"node",size:"80*48",shape:"flow-rect",model:{color:"#1890FF",label:"Normal"},src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSI0Ii8+PGZpbHRlciB4PSItOC44JSIgeT0iLTEwLjQlIiB3aWR0aD0iMTE3LjUlIiBoZWlnaHQ9IjEyOS4yJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPjxyZWN0IHN0cm9rZT0iIzE4OTBGRiIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzkiIGhlaWdodD0iNDciIHJ4PSI0Ii8+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHRzcGFuIHg9IjIxIiB5PSIyOSI+Tm9ybWFsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="}),c.a.createElement(i["k"],{type:"node",size:"80*72",shape:"flow-rhombus",model:{color:"#13C2C2",label:"Decision"},src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00Mi42NyAxLjY3bDM0Ljk2NSAzMS4zNTJhNCA0IDAgMCAxIDAgNS45NTZMNDIuNjcgNzAuMzNhNCA0IDAgMCAxLTUuMzQgMEwyLjM2NSAzOC45NzhhNCA0IDAgMCAxIDAtNS45NTZMMzcuMzMgMS42N2E0IDQgMCAwIDEgNS4zNCAweiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii04LjglIiB5PSItNi45JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMTkuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAxKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0U2RkZGQiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM1Q0RCRDMiIGQ9Ik00Mi4zMzcgMi4wNDJhMy41IDMuNSAwIDAgMC00LjY3NCAwTDIuNjk4IDMzLjM5NGEzLjUgMy41IDAgMCAwIDAgNS4yMTJsMzQuOTY1IDMxLjM1MmEzLjUgMy41IDAgMCAwIDQuNjc0IDBsMzQuOTY1LTMxLjM1MmEzLjUgMy41IDAgMCAwIDAtNS4yMTJMNDIuMzM3IDIuMDQyeiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMSkiPjx0c3BhbiB4PSIxOCIgeT0iNDIiPkRlY2lzaW9uPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="}),c.a.createElement(i["k"],{type:"node",size:"80*48",shape:"flow-capsule",model:{color:"#722ED1",label:"Model"},src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSIyNCIvPjxmaWx0ZXIgeD0iLTguOCUiIHk9Ii0xMC40JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMjkuMiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0Y5RjBGRiIgeGxpbms6aHJlZj0iI2IiLz48cmVjdCBzdHJva2U9IiNCMzdGRUIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9Ijc5IiBoZWlnaHQ9IjQ3IiByeD0iMjMuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyNCIgeT0iMjkiPk1vZGVsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="})))},Q=Y,F=(t("/zsF"),t("PArb")),U=(t("5Dmo"),t("3S7+")),O=t("Qb4Y"),K=t.n(O),q=function(e){return e.toLowerCase().replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))},_=function(e){var a=e.command,t=e.icon,n=e.text;return c.a.createElement(i["c"],{name:a},c.a.createElement(U["a"],{title:n||q(a),placement:"bottom",overlayClassName:K.a.tooltip},c.a.createElement(Z,{type:"icon-".concat(t||a)})))},$=_,ee=function(){return c.a.createElement(i["t"],{className:K.a.toolbar},c.a.createElement($,{command:"undo"}),c.a.createElement($,{command:"redo"}),c.a.createElement(F["a"],{type:"vertical"}),c.a.createElement($,{command:"copy"}),c.a.createElement($,{command:"paste"}),c.a.createElement($,{command:"delete"}),c.a.createElement(F["a"],{type:"vertical"}),c.a.createElement($,{command:"zoomIn",icon:"zoom-in",text:"Zoom In"}),c.a.createElement($,{command:"zoomOut",icon:"zoom-out",text:"Zoom Out"}),c.a.createElement($,{command:"autoZoom",icon:"fit-map",text:"Fit Map"}),c.a.createElement($,{command:"resetZoom",icon:"actual-size",text:"Actual Size"}),c.a.createElement(F["a"],{type:"vertical"}),c.a.createElement($,{command:"toBack",icon:"to-back",text:"To Back"}),c.a.createElement($,{command:"toFront",icon:"to-front",text:"To Front"}),c.a.createElement(F["a"],{type:"vertical"}),c.a.createElement($,{command:"multiSelect",icon:"multi-select",text:"Multi Select"}),c.a.createElement($,{command:"addGroup",icon:"group",text:"Add Group"}),c.a.createElement($,{command:"unGroup",icon:"ungroup",text:"Ungroup"}))},ae=ee,te=t("c1CB"),ne=t.n(te);i["u"].setTrackable(!1);a["default"]=function(){return c.a.createElement(m["c"],{content:Object(o["c"])({id:"editorandflow.description",defaultMessage:""})},c.a.createElement(i["u"],{className:ne.a.editor},c.a.createElement(n["a"],{className:ne.a.editorHd},c.a.createElement(l["a"],{span:24},c.a.createElement(ae,null))),c.a.createElement(n["a"],{className:ne.a.editorBd},c.a.createElement(l["a"],{span:4,className:ne.a.editorSidebar},c.a.createElement(Q,null)),c.a.createElement(l["a"],{span:16,className:ne.a.editorContent},c.a.createElement(i["h"],{className:ne.a.flow})),c.a.createElement(l["a"],{span:4,className:ne.a.editorSidebar},c.a.createElement(X,null),c.a.createElement(b,null))),c.a.createElement(j,null)))}},yPnl:function(e,a,t){e.exports={itemPanel:"antd-pro-pages-editor-flow-components-editor-item-panel-index-itemPanel"}}}]);