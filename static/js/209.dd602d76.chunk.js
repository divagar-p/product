"use strict";(self.webpackChunkmy_report=self.webpackChunkmy_report||[]).push([[209],{8209:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var i=n(9439),r=n(5403),a=n(4554),s=n(7391),o=n(3466),l=n(8096),c=n(4925),d=n(8583),u=n(3786),p=n(890),x=n(2791),h=n(9434),f=n(257),g=n(1413),v=n(1009),Z=n(8996),m=n(9122),j=n(8008),w=n(9953),b=n(4395),y=n(4708),S=n(4721),C=n(3400),P=n(493),k=n(5021),z=n(6278),L=n(7064),I=n(9900),W=n(4663),E=n(6934),F=n(3967),N=n(184),O=240,_=(0,E.ZP)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return(0,g.Z)({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(O,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),A=(0,E.ZP)(b.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return(0,g.Z)({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100% - ".concat(O,"px)"),marginLeft:"".concat(O,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})})),H=(0,E.ZP)("div")((function(e){var t=e.theme;return(0,g.Z)((0,g.Z)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function T(e){var t=(0,F.Z)(),n=e.title,r=e.children,s=x.useState(!1),o=(0,i.Z)(s,2),l=o[0],c=o[1];return(0,N.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,N.jsx)(y.ZP,{}),(0,N.jsx)(A,{position:"fixed",open:l,children:(0,N.jsxs)(W.Z,{children:[(0,N.jsx)(C.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",sx:(0,g.Z)({mr:2},l&&{display:"none"}),children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)(p.Z,{variant:"h6",noWrap:!0,component:"div",children:n})]})}),(0,N.jsxs)(w.ZP,{sx:{width:O,flexShrink:0,"& .MuiDrawer-paper":{width:O,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:l,children:[(0,N.jsx)(H,{children:(0,N.jsx)(C.Z,{onClick:function(){c(!1)},children:"ltr"===t.direction?(0,N.jsx)(v.Z,{}):(0,N.jsx)(Z.Z,{})})}),(0,N.jsx)(S.Z,{}),(0,N.jsx)(P.Z,{children:["Product List"].map((function(e,t){return(0,N.jsx)(k.ZP,{disablePadding:!0,children:(0,N.jsxs)(z.Z,{children:[(0,N.jsx)(L.Z,{children:(0,N.jsx)(m.Z,{})}),(0,N.jsx)(I.Z,{primary:e})]})},e)}))})]}),(0,N.jsxs)(_,{open:l,children:[(0,N.jsx)(H,{}),r]})]})}var B=n(7621),D=n(1582),G=n(748),M=n(6098),R=n.n(M),V=n(5987),q=n(7087),J=["ratio","disabledEffect","effect","sx"];function K(e){var t=e.ratio,n=e.disabledEffect,i=void 0!==n&&n,r=e.effect,s=void 0===r?"blur":r,o=e.sx,l=(0,V.Z)(e,J);return t?(0,N.jsx)(a.Z,{component:"span",sx:(0,g.Z)({width:1,lineHeight:0,display:"block",overflow:"hidden",position:"relative",pt:Q(t),"& .wrapper":{top:0,left:0,right:0,bottom:0,lineHeight:0,position:"absolute",backgroundSize:"cover !important"}},o),children:(0,N.jsx)(a.Z,(0,g.Z)({component:q.LazyLoadImage,wrapperClassName:"wrapper",effect:i?void 0:s,placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"fill"}},l))}):(0,N.jsx)(a.Z,{component:"span",sx:(0,g.Z)({lineHeight:0,display:"block",overflow:"hidden","& .wrapper":{width:1,height:1,backgroundSize:"cover !important"}},o),children:(0,N.jsx)(a.Z,(0,g.Z)({component:q.LazyLoadImage,wrapperClassName:"wrapper",effect:i?void 0:s,placeholderSrc:"https://zone-assets-api.vercel.app/assets/img_placeholder.svg",sx:{width:1,height:1,objectFit:"cover"}},l))})}function Q(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}var U=function(e){return e.toLocaleString("en-IN",{maximumFractionDigits:2,style:"currency",currency:"INR"})},X=function(e){return R()(e/100).format("0.0%")},Y=(0,E.ZP)(p.Z)((function(e){e.theme;return{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}));function $(e){var t=e.product,n=t.id,i=t.title,r=t.thumbnail,s=t.price,o=t.description,l=t.rating,c=t.discountPercentage;return(0,N.jsxs)(B.Z,{children:[(0,N.jsx)(a.Z,{sx:{position:"relative"},children:(0,N.jsx)(K,{alt:i,src:r,ratio:"1/1"})}),(0,N.jsxs)(D.Z,{spacing:2,sx:{p:3},children:[(0,N.jsx)(p.Z,{variant:"subtitle1",noWrap:!0,children:i}),(0,N.jsx)(Y,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:o}),(0,N.jsxs)(D.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,N.jsx)(G.Z,{name:"size-small",defaultValue:l,precision:.5,size:"small",readOnly:!0}),(0,N.jsxs)(D.Z,{direction:"row",spacing:.5,children:[(0,N.jsx)(p.Z,{variant:"subtitle1",fontSize:"16px",children:U(null!==s&&void 0!==s?s:0)}),c&&(0,N.jsx)(p.Z,{variant:"subtitle1",fontSize:"12px",sx:{color:"green"},children:" "+X(c)+" off"})]})]})]})]},n)}var ee=n(7047);function te(){return(0,N.jsxs)(B.Z,{children:[(0,N.jsx)(ee.Z,{variant:"rectangular",sx:{paddingTop:"100%"}}),(0,N.jsxs)(D.Z,{spacing:2,sx:{p:3},children:[(0,N.jsx)(ee.Z,{variant:"text",sx:{width:.5}}),(0,N.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,N.jsxs)(D.Z,{direction:"row",children:[(0,N.jsx)(ee.Z,{variant:"circular",sx:{width:16,height:16}}),(0,N.jsx)(ee.Z,{variant:"circular",sx:{width:16,height:16}}),(0,N.jsx)(ee.Z,{variant:"circular",sx:{width:16,height:16}})]}),(0,N.jsx)(ee.Z,{variant:"text",sx:{width:40}})]})]})]})}var ne=n(4581),ie=n(9194);var re=function(){var e=(0,h.I0)(),t=(0,x.useState)(!1),n=(0,i.Z)(t,2),g=n[0],v=n[1],Z=(0,x.useState)([]),m=(0,i.Z)(Z,2),j=m[0],w=m[1],b=(0,x.useState)([]),y=(0,i.Z)(b,2),S=y[0],C=y[1],P=(0,x.useState)(""),k=(0,i.Z)(P,2),z=k[0],L=k[1],I=(0,x.useState)(""),W=(0,i.Z)(I,2),E=W[0],F=W[1],O=(0,h.v9)((function(e){return e.product})),_=(0,h.v9)((function(e){return e.category}));return(0,x.useEffect)((function(){e((0,ie.wv)()),e((0,ne.CP)()),L("")}),[e]),(0,x.useEffect)((function(){null!==O&&void 0!==O&&O.product&&w(null===O||void 0===O?void 0:O.product),null!==O&&void 0!==O&&O.loading?v(null===O||void 0===O?void 0:O.loading):v(!1)}),[O]),(0,x.useEffect)((function(){null!==_&&void 0!==_&&_.categories&&C(null===_||void 0===_?void 0:_.categories)}),[_]),(0,N.jsxs)(T,{title:"Product List",children:[g&&(0,N.jsx)(f.Z,{}),(0,N.jsxs)(a.Z,{sx:{display:"grid",gap:1,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},textAlign:"center",mb:3},children:[(0,N.jsx)(s.Z,{size:"small",placeholder:"Search product\u2026",value:null!==E&&void 0!==E?E:"",onChange:function(t){return n=t.target.value,F(n),e((0,ie.wP)(n)),void L("");var n},InputProps:{startAdornment:(0,N.jsx)(o.Z,{position:"start",children:(0,N.jsx)(r.Z,{})})}}),(0,N.jsxs)(l.Z,{fullWidth:!0,size:"small",children:[(0,N.jsx)(c.Z,{id:"demo-simple-select-label",children:"Category"}),(0,N.jsx)(d.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Category",name:"Category",value:null!==z&&void 0!==z?z:"",onChange:function(t){return n=t.target.value,L(n),e((0,ie.W)(n)),void F("");var n},children:null===S||void 0===S?void 0:S.map((function(e,t){return(0,N.jsx)(u.Z,{value:e,children:e},t)}))})]})]}),0!==(null===j||void 0===j?void 0:j.length)?(0,N.jsx)(a.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(5, 1fr)"}},children:j.map((function(e,t){return e?(0,N.jsx)($,{product:e},t):(0,N.jsx)(te,{},t)}))}):(0,N.jsx)(p.Z,{variant:"subtitle1",fontSize:"20px",sx:{textAlign:"center"},children:"No data found"})]})}}}]);
//# sourceMappingURL=209.dd602d76.chunk.js.map