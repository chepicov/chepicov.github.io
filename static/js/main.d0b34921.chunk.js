(this.webpackJsonpluuk=this.webpackJsonpluuk||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(92),o=n(0),a=n.n(o),c=n(44),i=n.n(c),s=n(23),u=n(6),l=n(93),d=n(82),b=n(83),f=n(2),p=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(l.a,{position:"static",children:Object(f.jsx)(d.a,{children:Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)(b.a,{variant:"h1",children:"Luuk"})})})})})},j=n(32),h=n(13),m=n.n(h),O=n(9),x=n(37),v=n(20),g=n(21),k=n(91),y=n(35),w=n(85),C=n(86),S=n(88),T=n(89),N=n(84),E=n(87),P=n(90),F=Object(k.a)((function(e){return{table:{},bold:{fontWeight:"bold"},row:{"&:hover":{backgroundColor:"#cccaca"},backgroundColor:"#ececec",cursor:"pointer"}}})),I=function(e){var t=e.rows,n=e.columns,r=e.isLoading,o=e.onRowClick,c=e.extendedItems,i=e.groupColumns,s=F(),u=a.a.useState([]),l=Object(g.a)(u,2),d=l[0],b=l[1];return Object(f.jsx)("div",{className:s.table,children:Object(f.jsx)(N.a,{children:Object(f.jsxs)(w.a,{children:[Object(f.jsx)(C.a,{children:Object(f.jsx)(E.a,{children:n.map((function(e){return Object(f.jsx)(S.a,{style:{width:e.width},component:"th",children:e.name},e.key)}))})}),Object(f.jsxs)(T.a,{children:[r&&Object(f.jsx)(E.a,{children:Object(f.jsx)(S.a,{component:"td",colSpan:n.length,children:Object(f.jsx)(P.a,{})})}),t.map((function(e){return Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)(E.a,{className:s.row,onClick:function(){return!!Number(e.impressions)&&function(e){if("overall"!==e)return-1===d.indexOf(e)?(b([].concat(Object(y.a)(d),[e])),void o(e)):void b(d.filter((function(t){return t!==e})))}(e.id)},children:n.map((function(t){return Object(f.jsx)(S.a,{className:t.bold?s.bold:void 0,component:"td",children:e[t.key]},t.key)}))}),-1!==d.indexOf(e.id)&&(c[e.id]?c[e.id].map((function(e){return Object(f.jsx)(E.a,{style:{backgroundColor:"#fff"},children:i.map((function(t){return Object(f.jsx)(S.a,{component:"td",children:e[t.key]},t.key)}))})})):Object(f.jsx)(E.a,{style:{backgroundColor:"#fff"},children:Object(f.jsx)(S.a,{component:"td",colSpan:i.length,children:Object(f.jsx)(P.a,{})})}))]},e.id)}))]})]})})})},z=[{key:"advertiserName",name:"Account Name",width:"30%",bold:!0},{key:"conversion",name:"Conversions"},{key:"clicks",name:"Clicks"},{key:"impressions",name:"Impressions"},{key:"cost_per_conversion",name:"CPA"},{key:"conversion_rate",name:"CR"},{key:"spend",name:"Spend"},{key:"ctr",name:"CTR"},{key:"cpc",name:"CPC"}],R=[{key:"groupName",width:"30%",bold:!0}].concat(Object(y.a)(z.filter((function(e){return"advertiserName"!==e.key})))),A=["body","isFormData"],L="http://161.35.211.110:3001/",M=function(e,t){if(0===Object.keys(t).length&&t.constructor!==Object)return e;var n="",r=function(e){Array.isArray(t[e])?n+=t[e].map((function(t){return"&".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t))})).join(""):n+="&".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))};for(var o in t)r(o);return e+"?"+n.slice(1)},W=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,o,a,c,i,s,u,l,d,b=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.length>1&&void 0!==b[1]?b[1]:{},r=n.body,o=n.isFormData,a=Object(x.a)(n,A),c=Object(O.a)({},null===a||void 0===a?void 0:a.params),i=new Headers(Object(O.a)(Object(O.a)({},o?null:{"Content-Type":"application/json"}),a.headers)),s=Object(O.a)(Object(O.a)({method:r?"POST":"GET"},a),{},{params:c,headers:i}),r&&(s.body=o?r:JSON.stringify(r)),t=c?M(t,c):t,e.prev=6,e.next=9,fetch("".concat(L).concat(t),s);case 9:u=e.sent,e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new Error(e.t0);case 15:if(u.ok){e.next=26;break}return e.prev=16,e.next=19,u.json();case 19:return l=e.sent,e.abrupt("return",Promise.reject(l));case 23:return e.prev=23,e.t1=e.catch(16),e.abrupt("return",Promise.reject(u));case 26:return e.prev=26,e.next=29,u.json();case 29:return d=e.sent,e.abrupt("return",d);case 33:return e.prev=33,e.t2=e.catch(26),e.abrupt("return",u);case 36:case"end":return e.stop()}}),e,null,[[6,12],[16,23],[26,33]])})));return function(t){return e.apply(this,arguments)}}(),H={GET:function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,W(t,Object(O.a)({method:"GET"},n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),POST:function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,W(t,Object(O.a)({method:"POST"},n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),PUT:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W(e,Object(O.a)({method:"PUT"},t))},PATCH:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W(e,Object(O.a)({method:"PATCH"},t))},DELETE:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W(e,Object(O.a)({method:"DELETE"},t))}},U=function(e){return"/stats/".concat(e,"/groups")},B=["metrics"],D=Object(k.a)((function(e){return{root:{}}})),G=function(){var e=D(),t=a.a.useState([]),n=Object(g.a)(t,2),r=n[0],o=n[1],c=a.a.useState({}),i=Object(g.a)(c,2),s=i[0],u=i[1],l=a.a.useState(!1),d=Object(g.a)(l,2),b=d[0],p=d[1];a.a.useEffect((function(){var e=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,H.GET("/stats/today");case 4:t=e.sent,o(t.map((function(e){var t=e.metrics,n=Object(x.a)(e,B);return Object(O.a)(Object(O.a)({},t),n)})).sort((function(e,t){return Number(t.impressions)-Number(e.impressions)}))),p(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),p(!1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval(e,6e4);return function(){return clearInterval(t)}}),[]);return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(I,{rows:r,columns:z,groupColumns:R,isLoading:b,onRowClick:function(e){(function(){var t=Object(v.a)(m.a.mark((function t(n){var r,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.GET(U(n));case 3:r=t.sent,o=r.filter((function(e){var t=e.impressions;return!!Number(t)})).sort((function(e,t){return Number(t.impressions)-Number(e.impressions)})),u(Object(O.a)(Object(O.a)({},s),{},Object(j.a)({},e,o))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}})()(e)},extendedItems:s})})},J=Object(k.a)((function(e){return{body:{padding:100,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},image:{height:150,width:150},text:{marginTop:40,fontSize:"3rem",fontWeight:400}}})),_=function(){var e=J();return Object(f.jsxs)("div",{className:e.body,children:[Object(f.jsx)("img",{className:e.image,src:"https://img.icons8.com/pastel-glyph/300/000000/page-not-found--v2.png",alt:"not-found"}),Object(f.jsx)("div",{className:e.text,children:"Page not found."})]})},Y=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(p,{}),Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/",exact:!0,component:G}),Object(f.jsx)(u.a,{path:"/",component:_})]})]})},$=n(49),q=n(16),K=Object($.a)({otherColors:{gray:"#e5e5e5"},palette:{primary:{dark:"#0890a0",light:"#55bec8",main:"#0ca2b0"},secondary:{dark:"#fafafa",light:"#fff",main:"#fff"},warning:{dark:"#f93030",light:"#fc7878",main:"#fa3e3e"}},typography:{fontFamily:["Open Sans","sans-serif"].join(","),h1:{fontSize:"2rem",color:"#fff",fontWeight:700},h2:{fontSize:"1.3rem",fontWeight:700},h3:{fontSize:20,fontWeight:700},body1:{color:Object(q.b)("#000",.87),lineHeight:"20px"},body2:{fontSize:"0.8rem"}},overrides:{MuiButton:{root:{fontSize:"1rem",whiteSpace:"nowrap"},textSecondary:{textTransform:"none"},containedSecondary:{textTransform:"none",color:"#fff",backgroundColor:"#0ca2b0","&:hover":{backgroundColor:"#0ca2b0"}}},MuiCssBaseline:{"@global":{html:{fontSize:14},body:{fontFamily:'"Open Sans", sans-serif !important',lineHeight:"20px",backgroundColor:"#fff","& ::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,0.3)",backgroundColor:"#F5F5F5"},"& ::-webkit-scrollbar":{width:10,height:10,backgroundColor:"#F5F5F5"},"& ::-webkit-scrollbar-thumb":{borderRadius:5,"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,.3)",backgroundColor:"#55bec8"},overflowY:"hidden"},button:{fontFamily:'"Open Sans", sans-serif'},".breakWords":{wordBreak:"break-word"}}},MuiTable:{root:{backgroundColor:"#fafafa",tableLayout:"fixed"}},MuiTableCell:{root:{fontSize:"1.1rem",color:"#222222"},body:{whiteSpace:"normal",wordBreak:"break-word",padding:"8px 16px"},head:{fontSize:"12px",fontWeight:700,color:"#222222",lineHeight:1.2}},MuiTableSortLabel:{root:{"&:hover":{color:"#222222"},"&:focus":{color:"#222222"}},icon:{color:"#0ca2b0"},active:{"& path":{color:"#0ca2b0"}}},MuiTablePagination:{root:{backgroundColor:"#fafafa"},input:{fontSize:"1rem"}},MuiAccordion:{root:{backgroundColor:"#fafafa","&$expanded":{margin:0}}}}});n(63);i.a.render(Object(f.jsx)(r.a,{theme:K,children:Object(f.jsx)(s.a,{children:Object(f.jsx)(Y,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.d0b34921.chunk.js.map