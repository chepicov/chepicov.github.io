(this.webpackJsonpluuk=this.webpackJsonpluuk||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var r=n(149),a=n(0),o=n.n(a),c=n(13),i=n.n(c),s=n(61),l=n(14),u=n(133),d=n(137),f=n(138),b=n(6),p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{position:"static",children:Object(b.jsx)(d.a,{children:Object(b.jsx)(f.a,{variant:"h1",children:"Luuk"})})})})},j=n(139),m=n(27),h=n(46),O=n(19),x=n.n(O),g=n(16),v=n(58),k=n(35),y=n(28),w=n(76),S=n(140),C=n(144),T=n(146),A=n(147),E=n(148),N=n(145),I=n(142),P=n(151),U=n(18),_=n(150),z=n(143),D=["ACCOUNT_STATUS_ENABLE","ADGROUP_STATUS_DELIVERY_OK","CAMPAIGN_STATUS_ENABLE"],L=["ACCOUNT_STATUS_DISABLED","ADGROUP_STATUS_DISABLE","CAMPAIGN_STATUS_DISABLE"],B=["ADGROUP_STATUS_DELETE","CAMPAIGN_STATUS_DELETE"],F=function(e){return e&&"$".concat(e)},R=function(e){return e&&"".concat(e,"%")},W=[{key:"conversion",name:"Conv.",width:"6%"},{key:"cost_per_conversion",name:"CPA",format:F,width:"6%"},{key:"spend",name:"Spend",format:F,width:"6%"},{key:"clicks",name:"Clicks",width:"6%"},{key:"impressions",name:"Impr.",width:"6%"},{key:"conversion_rate",name:"CR",format:R,width:"6%"},{key:"ctr",name:"CTR",format:R,width:"6%"},{key:"cpc",name:"CPC",format:F,width:"6%"},{key:"balance",name:"Balance",format:F,width:"7%"}],G=[{key:"checkbox",show:!0},{key:"name",name:"Account Name",bold:!0,left:!0}].concat(W),M=[{key:"checkbox"},{key:"name",bold:!0,left:!0,style:{paddingLeft:"2rem"}}].concat(W),H=[{key:"checkbox"},{key:"name",left:!0,bold:!0,style:{paddingLeft:"1rem"}}].concat(W),J=["body","isFormData"],V="https://luukapi.com",Y=function(e,t){if(0===Object.keys(t).length&&t.constructor!==Object)return e;var n="",r=function(e){Array.isArray(t[e])?n+=t[e].map((function(t){return"&".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t))})).join(""):n+="&".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))};for(var a in t)r(a);return e+"?"+n.slice(1)},$=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r,a,o,c,i,s,l,u,d,f=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},r=n.body,a=n.isFormData,o=Object(v.a)(n,J),c=Object(g.a)({},null===o||void 0===o?void 0:o.params),i=new Headers(Object(g.a)(Object(g.a)({},a?null:{"Content-Type":"application/json"}),o.headers)),s=Object(g.a)(Object(g.a)({method:r?"POST":"GET"},o),{},{params:c,headers:i}),r&&(s.body=a?r:JSON.stringify(r)),t=c?Y(t,c):t,e.prev=6,e.next=9,fetch("".concat(V).concat(t),s);case 9:l=e.sent,e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new Error(e.t0);case 15:if(l.ok){e.next=26;break}return e.prev=16,e.next=19,l.json();case 19:return u=e.sent,e.abrupt("return",Promise.reject(u));case 23:return e.prev=23,e.t1=e.catch(16),e.abrupt("return",Promise.reject(l));case 26:return e.prev=26,e.next=29,l.json();case 29:return d=e.sent,e.abrupt("return",d);case 33:return e.prev=33,e.t2=e.catch(26),e.abrupt("return",l);case 36:case"end":return e.stop()}}),e,null,[[6,12],[16,23],[26,33]])})));return function(t){return e.apply(this,arguments)}}(),K={GET:function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,$(t,Object(g.a)({method:"GET"},n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),POST:function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,$(t,Object(g.a)({method:"POST"},n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),PUT:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return $(e,Object(g.a)({method:"PUT"},t))},PATCH:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return $(e,Object(g.a)({method:"PATCH"},t))},DELETE:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return $(e,Object(g.a)({method:"DELETE"},t))}},X=function(e){return"/stats/campaign/".concat(e,"/groups")},q=function(e){return"/stats/campaign/".concat(e,"/status")},Q=function(e){return"/stats/group/".concat(e,"/status")},Z=Object(j.a)((function(e){return{circleWrapper:{display:"flex",justifyContent:"center"},circle:{width:15,height:15,borderRadius:8,margin:6}}})),ee=function(e){return-1!==D.indexOf(e)?"#13cf10":-1!==L.indexOf(e)?"#ff3939":-1!==B.indexOf(e)?"#adabab":"#f9e81f"},te=function(e){var t=e.value,n=Z();return Object(b.jsx)("div",{className:n.circleWrapper,children:Object(b.jsx)("div",{className:n.circle,style:{backgroundColor:ee(t)}})})},ne=["metrics"],re=function(e){var t=e.show,n=e.columns,r=e.endpoint,a=e.children,c=e.filterable,i=e.date,s=e.level,l=ae(),u=o.a.useState([]),f=Object(y.a)(u,2),p=f[0],j=f[1],m=o.a.useState(!0),O=Object(y.a)(m,2),w=O[0],T=O[1],A=o.a.useState(!1),E=Object(y.a)(A,2),N=E[0],U=E[1],_=o.a.useState([]),B=Object(y.a)(_,2),F=B[0],R=B[1],W=o.a.useState([]),G=Object(y.a)(W,2),M=G[0],H=G[1],J=o.a.useState([]),V=Object(y.a)(J,2),Y=V[0],$=V[1],X=o.a.useState(0),Z=Object(y.a)(X,2),ee=Z[0],re=Z[1];o.a.useEffect((function(){if(c){var e=JSON.parse(window.localStorage.getItem("filter")||"[]")||[];$(e),re(ee+1)}}),[]),o.a.useEffect((function(){t||R([])}),[t]),o.a.useEffect((function(){if(t&&(!c||0!==ee)){var e=function(){var e=Object(k.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.GET(r,c?{params:{excludeIds:Y,date:i?i.toISOString():void 0}}:{params:{date:i?i.toISOString():void 0}});case 3:t=e.sent,j(t.map((function(e){var t=e.metrics,n=Object(v.a)(e,ne);return Object(g.a)(Object(g.a)({},t),n)})).sort((function(e,t){return Number(t.impressions)-Number(e.impressions)}))),T(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),T(!1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e();var n=setInterval(e,6e4);return function(){return clearInterval(n)}}}),[t,ee,c,i]);var ce=function(){var e=Object(k.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[].concat(Object(h.a)(Y),Object(h.a)(M)),ie(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(e){var t=e.filter((function(e){return"overall"!==e}));$(t),re(ee+1),R([]),H([]),U(!1),window.localStorage.setItem("filter",JSON.stringify(t))},se=function(){var e=Object(k.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="campaign"===s?q(t):Q(t),e.next=3,K.PUT(r,{body:{status:n}});case 3:re(ee+1);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(e,t){return"checkbox"===e.key?"overall"===t.id?Object(b.jsx)(S.a,{component:"td"}):c&&N?Object(b.jsx)(S.a,{component:"td",onClick:function(e){return e.stopPropagation()},children:Object(b.jsx)(P.a,{size:"small",color:"primary",onChange:function(e){return n=t.id,void(-1!==M.indexOf(n)?H(M.filter((function(e){return e!==n}))):H([].concat(Object(h.a)(M),[n])));var n},checked:-1!==M.indexOf(t.id),className:l.checkbox})},e.key):Object(b.jsx)(S.a,{component:"td",children:Object(b.jsx)(te,{value:t.status})}):"name"===e.key&&"advertiser"!==s?Object(b.jsx)(S.a,{style:Object(g.a)(Object(g.a)({},e.style),{},{textAlign:e.left?"left":"right",color:e.color?e.color(t[e.key]):null}),component:"td",children:Object(b.jsxs)("div",{className:l.nameWrapper,children:[Object(b.jsx)("div",{children:t[e.key]}),Object(b.jsxs)("div",{onClick:function(e){return e.stopPropagation()},children:[-1!==D.indexOf(t.status)&&Object(b.jsx)("div",{className:l.toggleButton,onClick:function(){return se(t.id,!1)},children:"Disable"}),-1!==L.indexOf(t.status)&&Object(b.jsx)("div",{className:l.toggleButton,onClick:function(){return se(t.id,!0)},children:"Enable"})]})]})},e.key):Object(b.jsx)(S.a,{style:Object(g.a)(Object(g.a)({},e.style),{},{textAlign:e.left?"left":"right",color:e.color?e.color(t[e.key]):null}),component:"td",children:e.format?e.format(t[e.key]):t[e.key]},e.key)};return t?w?Object(b.jsx)(I.a,{style:{backgroundColor:oe(s)},children:Object(b.jsx)(S.a,{component:"td",colSpan:n.length,children:Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(b.jsx)(z.a,{})})})}):Object(b.jsxs)(b.Fragment,{children:[p.map((function(e){return Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsx)(I.a,{className:"group"!==s&&"overall"!==e.id?l.clickable:void 0,onClick:function(){var t;"overall"!==(t=e.id)&&(-1!==F.indexOf(t)?R(F.filter((function(e){return e!==t}))):R([].concat(Object(h.a)(F),[t])))},style:{backgroundColor:oe(s)},children:n.map((function(t){return le(t,e)}))}),a&&a(e.id,-1!==F.indexOf(e.id))]},e.id)})),c&&Object(b.jsxs)(b.Fragment,{children:[N?Object(b.jsx)(C.a,{onClick:function(){return U(!1)},color:"primary",children:"Disable filter"}):Object(b.jsx)(C.a,{onClick:function(){return U(!0)},color:"primary",children:"Activate filter"}),Y.length>0&&Object(b.jsx)(C.a,{onClick:function(){ie([])},color:"primary",children:"Reset filter"}),M.length>0&&Object(b.jsx)(d.a,{component:"div",className:l.footer,children:Object(b.jsxs)("div",{children:[Object(b.jsx)(C.a,{color:"primary",onClick:function(){var e=p.map((function(e){return e.id})).filter((function(e){return-1===M.indexOf(e)}));ie(e)},children:"Remove Other"}),Object(b.jsx)(C.a,{color:"primary",onClick:ce,children:"Remove"})]})})]})]}):null},ae=Object(j.a)((function(e){var t,n,r;return{clickable:{cursor:"pointer"},table:{"& td":(t={borderBottom:"1px solid #ccc","& + td":{borderLeft:"1px solid #ccc"}},Object(m.a)(t,e.breakpoints.down("lg"),{fontSize:"1rem",padding:4}),Object(m.a)(t,e.breakpoints.down("sm"),{fontSize:"0.6rem",padding:4,width:45}),t),"& th":(n={"& + th":{borderLeft:"1px solid #ccc"}},Object(m.a)(n,e.breakpoints.down("lg"),{fontSize:"1rem",padding:4}),Object(m.a)(n,e.breakpoints.down("sm"),{fontSize:"0.6rem",padding:4}),n)},customTableContainer:{overflowX:"initial"},bold:{fontWeight:"bold"},row:{"&:hover":{backgroundColor:"#cccaca"},backgroundColor:"#ececec",cursor:"pointer"},footer:{width:"100%",backgroundColor:"#fff",position:"fixed",top:"auto",bottom:0},checkboxCell:{width:30},checkbox:{margin:-5},input:{margin:"1rem","& input":{padding:"0.5rem"}},nameWrapper:{display:"flex",flexDirection:"column",alignItems:"flex-start"},toggleButton:(r={cursor:"pointer",fontSize:"0.8rem",marginTop:"-0.2rem",color:e.palette.primary.main},Object(m.a)(r,e.breakpoints.down("lg"),{fontSize:"0.7rem"}),Object(m.a)(r,e.breakpoints.down("sm"),{fontSize:"0.6rem"}),r)}})),oe=function(e){switch(e){case"campaign":return"#ededed";case"group":return"#dfdfdf";default:return"#fff"}},ce=function(){var e=ae(),t=o.a.useState(new Date),n=Object(y.a)(t,2),r=n[0],a=n[1];return Object(b.jsxs)("div",{className:e.table,children:[Object(b.jsx)(U.a,{utils:w.a,children:Object(b.jsx)(_.a,{value:r,onChange:function(e){return a(e)},disableFuture:!0,inputVariant:"outlined",InputProps:{classes:{root:e.input}}})}),Object(b.jsx)(N.a,{classes:{root:e.customTableContainer},children:Object(b.jsxs)(T.a,{stickyHeader:!0,children:[Object(b.jsx)(A.a,{children:Object(b.jsx)(I.a,{children:G.map((function(t){return"checkbox"===t.key?Object(b.jsx)(S.a,{component:"th",className:e.checkboxCell},t.key):Object(b.jsx)(S.a,{style:{width:t.width,textAlign:t.left?"left":"right"},component:"th",children:t.name},t.key)}))})}),Object(b.jsx)(E.a,{children:Object(b.jsx)(re,{endpoint:"/stats/today",columns:G,date:r,level:"advertiser",show:!0,filterable:!0,children:function(e,t){return Object(b.jsx)(re,{show:t,endpoint:(n=e,"/stats/".concat(n,"/campaigns")),columns:H,date:r,level:"campaign",children:function(e,t){return Object(b.jsx)(re,{endpoint:X(e),columns:M,show:t,date:r,level:"group"})}});var n}})})]})})]})},ie=Object(j.a)((function(e){return{root:{marginBottom:100}}})),se=function(){var e=ie();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(ce,{})})},le=Object(j.a)((function(e){return{body:{padding:100,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},image:{height:150,width:150},text:{marginTop:40,fontSize:"3rem",fontWeight:400}}})),ue=function(){var e=le();return Object(b.jsxs)("div",{className:e.body,children:[Object(b.jsx)("img",{className:e.image,src:"https://img.icons8.com/pastel-glyph/300/000000/page-not-found--v2.png",alt:"not-found"}),Object(b.jsx)("div",{className:e.text,children:"Page not found."})]})},de=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,component:se}),Object(b.jsx)(l.a,{path:"/",component:ue})]})]})},fe=n(77),be=n(10),pe=Object(fe.a)({otherColors:{gray:"#e5e5e5"},palette:{primary:{dark:"#0890a0",light:"#55bec8",main:"#0ca2b0"},secondary:{dark:"#fafafa",light:"#fff",main:"#fff"},warning:{dark:"#f93030",light:"#fc7878",main:"#fa3e3e"}},typography:{fontFamily:["Open Sans","sans-serif"].join(","),h1:{fontSize:"2rem",color:"#fff",fontWeight:700},h2:{fontSize:"1.3rem",fontWeight:700},h3:{fontSize:20,fontWeight:700},body1:{color:Object(be.b)("#000",.87),lineHeight:"20px"},body2:{fontSize:"0.8rem"}},overrides:{MuiButton:{root:{fontSize:"1rem",whiteSpace:"nowrap"},textSecondary:{textTransform:"none"},containedSecondary:{textTransform:"none",color:"#fff",backgroundColor:"#0ca2b0","&:hover":{backgroundColor:"#0ca2b0"}}},MuiCssBaseline:{"@global":{html:{fontSize:14},body:{fontFamily:'"Open Sans", sans-serif !important',lineHeight:"20px",backgroundColor:"#fff","& ::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,0.3)",backgroundColor:"#F5F5F5"},"& ::-webkit-scrollbar":{width:10,height:10,backgroundColor:"#F5F5F5"},"& ::-webkit-scrollbar-thumb":{borderRadius:5,"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,.3)",backgroundColor:"#55bec8"},overflowY:"hidden"},button:{fontFamily:'"Open Sans", sans-serif'},".breakWords":{wordBreak:"break-word"}}},MuiTable:{root:{backgroundColor:"#fafafa",tableLayout:"fixed"}},MuiTableCell:{root:{fontSize:"1.1rem",color:"#222222"},body:{fontSize:"1rem",whiteSpace:"normal",wordBreak:"break-word",padding:"8px 16px"},head:{fontSize:"12px",fontWeight:700,color:"#222222",lineHeight:1.2}},MuiTableSortLabel:{root:{"&:hover":{color:"#222222"},"&:focus":{color:"#222222"}},icon:{color:"#0ca2b0"},active:{"& path":{color:"#0ca2b0"}}},MuiTablePagination:{root:{backgroundColor:"#fafafa"},input:{fontSize:"1rem"}},MuiAccordion:{root:{backgroundColor:"#fafafa","&$expanded":{margin:0}}}},breakpoints:{values:{xs:0,sm:600,md:900,lg:1200,xl:1536}}});n(103);i.a.render(Object(b.jsx)(r.a,{theme:pe,children:Object(b.jsx)(s.a,{children:Object(b.jsx)(de,{})})}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.37cfeb45.chunk.js.map