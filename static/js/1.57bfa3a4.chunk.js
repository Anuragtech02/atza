(this.webpackJsonpatza=this.webpackJsonpatza||[]).push([[1],{119:function(e,t,a){"use strict";var n=a(40),r=a(26),c=a(22),o=a(4),i=a(0),s=(a(33),a(20)),l=a(38),u=a(111),d=a(68),b=["sx"];function _(e){var t,a=e.sx,r=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(a){d.b[a]?t.systemProps[a]=e[a]:t.otherProps[a]=e[a]})),t}(Object(c.a)(e,b)),i=r.systemProps,s=r.otherProps;return t=Array.isArray(a)?[i].concat(Object(n.a)(a)):"function"===typeof a?function(){var e=a.apply(void 0,arguments);return Object(u.b)(e)?Object(o.a)({},i,e):i}:Object(o.a)({},i,a),Object(o.a)({},s,{sx:t})}var j=a(109),p=a(54),x=a(55);var m=i.createContext(),v=a(122),g=a(110);function f(e){return Object(v.a)("MuiGrid",e)}var O=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=Object(g.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(n.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(n.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(n.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(n.a)(O.map((function(e){return"grid-xs-".concat(e)}))),Object(n.a)(O.map((function(e){return"grid-sm-".concat(e)}))),Object(n.a)(O.map((function(e){return"grid-md-".concat(e)}))),Object(n.a)(O.map((function(e){return"grid-lg-".concat(e)}))),Object(n.a)(O.map((function(e){return"grid-xl-".concat(e)}))))),w=a(2),S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function N(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function C(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[a["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var n=e.xs,r=e.sm,c=e.md,o=e.lg,i=e.xl;return[Number(n)>0&&(a["spacing-xs-".concat(String(n))]||"spacing-xs-".concat(String(n))),Number(r)>0&&(a["spacing-sm-".concat(String(r))]||"spacing-sm-".concat(String(r))),Number(c)>0&&(a["spacing-md-".concat(String(c))]||"spacing-md-".concat(String(c))),Number(o)>0&&(a["spacing-lg-".concat(String(o))]||"spacing-lg-".concat(String(o))),Number(i)>0&&(a["spacing-xl-".concat(String(i))]||"spacing-xl-".concat(String(i)))]}var k=Object(p.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,r=a.container,c=a.direction,o=a.item,i=a.lg,s=a.md,l=a.sm,u=a.spacing,d=a.wrap,b=a.xl,_=a.xs,j=a.zeroMinWidth;return[t.root,r&&t.container,o&&t.item,j&&t.zeroMinWidth].concat(Object(n.a)(C(u,r,t)),["row"!==c&&t["direction-xs-".concat(String(c))],"wrap"!==d&&t["wrap-xs-".concat(String(d))],!1!==_&&t["grid-xs-".concat(String(_))],!1!==l&&t["grid-sm-".concat(String(l))],!1!==s&&t["grid-md-".concat(String(s))],!1!==i&&t["grid-lg-".concat(String(i))],!1!==b&&t["grid-xl-".concat(String(b))]])}})((function(e){var t=e.ownerState;return Object(o.a)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"nowrap"===t.wrap&&{flexWrap:"nowrap"},"reverse"===t.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var t=e.theme,a=e.ownerState,n=Object(l.d)({values:a.direction,breakpoints:t.breakpoints.values});return Object(l.b)({theme:t},n,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(h.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,a=e.ownerState,n=a.container,c=a.rowSpacing,o={};if(n&&0!==c){var i=Object(l.d)({values:c,breakpoints:t.breakpoints.values});o=Object(l.b)({theme:t},i,(function(e){var a=t.spacing(e);return"0px"!==a?Object(r.a)({marginTop:"-".concat(N(a))},"& > .".concat(h.item),{paddingTop:N(a)}):{}}))}return o}),(function(e){var t=e.theme,a=e.ownerState,n=a.container,c=a.columnSpacing,o={};if(n&&0!==c){var i=Object(l.d)({values:c,breakpoints:t.breakpoints.values});o=Object(l.b)({theme:t},i,(function(e){var a=t.spacing(e);return"0px"!==a?Object(r.a)({width:"calc(100% + ".concat(N(a),")"),marginLeft:"-".concat(N(a))},"& > .".concat(h.item),{paddingLeft:N(a)}):{}}))}return o}),(function(e){var t=e.theme,a=e.ownerState;return t.breakpoints.keys.reduce((function(e,n){return function(e,t,a,n){var r=n[a];if(r){var c={};if(!0===r)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var i=Object(l.d)({values:n.columns,breakpoints:t.breakpoints.values}),s="object"===typeof i?i[a]:i,u="".concat(Math.round(r/s*1e8)/1e6,"%"),d={};if(n.container&&n.item&&0!==n.columnSpacing){var b=t.spacing(n.columnSpacing);if("0px"!==b){var _="calc(".concat(u," + ").concat(N(b),")");d={flexBasis:_,maxWidth:_}}}c=Object(o.a)({flexBasis:u,flexGrow:0,maxWidth:u},d)}0===t.breakpoints.values[a]?Object.assign(e,c):e[t.breakpoints.up(a)]=c}}(e,t,n,a),e}),{})})),y=i.forwardRef((function(e,t){var a,r=_(Object(x.a)({props:e,name:"MuiGrid"})),l=r.className,u=r.columns,d=r.columnSpacing,b=r.component,p=void 0===b?"div":b,v=r.container,g=void 0!==v&&v,O=r.direction,h=void 0===O?"row":O,N=r.item,y=void 0!==N&&N,F=r.lg,B=void 0!==F&&F,W=r.md,M=void 0!==W&&W,I=r.rowSpacing,z=r.sm,D=void 0!==z&&z,R=r.spacing,H=void 0===R?0:R,T=r.wrap,G=void 0===T?"wrap":T,P=r.xl,L=void 0!==P&&P,A=r.xs,q=void 0!==A&&A,J=r.zeroMinWidth,U=void 0!==J&&J,Q=Object(c.a)(r,S),Z=I||H,E=d||H,X=i.useContext(m),Y=u||X||12,V=Object(o.a)({},r,{columns:Y,container:g,direction:h,item:y,lg:B,md:M,sm:D,rowSpacing:Z,columnSpacing:E,wrap:G,xl:L,xs:q,zeroMinWidth:U}),K=function(e){var t=e.classes,a=e.container,r=e.direction,c=e.item,o=e.lg,i=e.md,s=e.sm,l=e.spacing,u=e.wrap,d=e.xl,b=e.xs,_={root:["root",a&&"container",c&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat(Object(n.a)(C(l,a)),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==u&&"wrap-xs-".concat(String(u)),!1!==b&&"grid-xs-".concat(String(b)),!1!==s&&"grid-sm-".concat(String(s)),!1!==i&&"grid-md-".concat(String(i)),!1!==o&&"grid-lg-".concat(String(o)),!1!==d&&"grid-xl-".concat(String(d))])};return Object(j.a)(_,f,t)}(V);return a=Object(w.jsx)(k,Object(o.a)({ownerState:V,className:Object(s.a)(K.root,l),as:p,ref:t},Q)),12!==Y?Object(w.jsx)(m.Provider,{value:Y,children:a}):a}));t.a=y},23:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return w})),a.d(t,"c",(function(){return C}));var n=a(20),r=a(10),c=a(30),o=a.n(c),i=a(2),s=function(){return Object(i.jsx)("div",{className:o.a.wrapper,children:Object(i.jsxs)("nav",{className:o.a.container,children:[Object(i.jsx)("ul",{className:Object(n.a)(o.a.navItems,o.a.leftNav),children:Object(i.jsx)("li",{className:o.a.navItem,children:Object(i.jsx)(r.b,{to:"/",children:"Services"})})}),Object(i.jsxs)("ul",{className:Object(n.a)(o.a.navItems,o.a.rightNav),children:[Object(i.jsx)("li",{className:o.a.navItem,children:Object(i.jsx)(r.b,{to:"/blog",children:"Blog"})}),Object(i.jsx)("li",{className:o.a.navItem,children:Object(i.jsx)(r.b,{to:"/contact",children:"Contact Us"})}),Object(i.jsx)("li",{className:o.a.navItem,children:Object(i.jsx)(r.b,{to:"/about",children:"About Us"})})]}),Object(i.jsxs)("div",{className:o.a.burgerMenu,children:[Object(i.jsx)("div",{className:o.a.burger}),Object(i.jsx)("div",{className:o.a.burger}),Object(i.jsx)("div",{className:o.a.burger})]})]})})},l=(a(31),a(44),a(32)),u=a.n(l),d=a(116),b=a(28),_=a(48),j=a(47),p=function(){return Object(i.jsx)("footer",{className:u.a.footerContainer,children:Object(i.jsxs)("div",{className:u.a.content,children:[Object(i.jsx)("h4",{children:"shall we chat?"}),Object(i.jsxs)("h1",{children:["Let's talk about your",Object(i.jsx)("br",{})," business?"]}),Object(i.jsx)("div",{className:u.a.hline}),Object(i.jsxs)("div",{className:u.a.socialLinks,children:[Object(i.jsx)(d.a,{className:u.a.socialIcon,children:Object(i.jsx)(j.a,{color:"white"})}),Object(i.jsx)(d.a,{className:u.a.socialIcon,children:Object(i.jsx)(b.a,{color:"white"})}),Object(i.jsx)(d.a,{className:u.a.socialIcon,children:Object(i.jsx)(_.a,{color:"white"})}),Object(i.jsx)(d.a,{className:u.a.socialIcon,children:Object(i.jsx)(b.b,{color:"white"})})]})]})})},x=a(49),m=a(0),v=(a(50),a(51),a(52)),g=a.n(v),f=a(34),O=a.n(f),h=a(43),w=function(e,t){var a=e.children,r=e.className,c=e.prevBtnClasses,o=e.nextBtnClasses,s=Object(x.a)(Object(x.a)({dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1},t),{},{responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1100,settings:{slidesToShow:3,slidesToScroll:1}}]}),l=Object(m.useRef)(null);return Object(i.jsxs)("div",{className:O.a.sliderWrapper,children:[Object(i.jsx)(g.a,Object(x.a)(Object(x.a)({},s),{},{className:Object(n.a)(O.a.carousel,r),ref:l,children:a})),Object(i.jsx)(d.a,{onClick:function(){l.current.slickPrev()},className:Object(n.a)(O.a.prevBtn,c),children:Object(i.jsx)(h.a,{})}),Object(i.jsx)(d.a,{onClick:function(){l.current.slickNext()},className:Object(n.a)(O.a.nextBtn,o),children:Object(i.jsx)(h.b,{})})]})},S=a(35),N=a.n(S),C=function(e){var t=e.component,a=e.title,r=e.description,c=e.bg,o=e.classes,s=void 0===o?[]:o;return t||Object(i.jsx)("div",{style:{backgroundImage:"url(".concat(c,")")},className:Object(n.a)(N.a.container,s),children:Object(i.jsxs)("div",{className:N.a.content,children:[Object(i.jsx)("h1",{children:a}),Object(i.jsx)("span",{}),Object(i.jsx)("p",{children:r})]})})}},29:function(e,t,a){"use strict";var n=a(23),r=a(20),c=a(2);t.a=function(e){var t=e.children,a=e.classes,o=void 0===a?[]:a;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n.d,{}),Object(c.jsx)("main",{className:Object(r.a)(o),children:t}),Object(c.jsx)(n.b,{})]})}},30:function(e,t,a){e.exports={flexRow:"Navbar_flexRow__nOIGq",container:"Navbar_container__Stw5O",navItems:"Navbar_navItems__w-8Cj",loading:"Navbar_loading__2psax",flexCol:"Navbar_flexCol__3YAsS",justifyBetween:"Navbar_justifyBetween__2h0Z2",noDecoration:"Navbar_noDecoration__1UFbe",verticalSeparator:"Navbar_verticalSeparator__3thf8",hline:"Navbar_hline__21oDa",wrapper:"Navbar_wrapper__3AFU4",leftNav:"Navbar_leftNav__2fcm9",rightNav:"Navbar_rightNav__3CqtO",burgerMenu:"Navbar_burgerMenu__JqABq",burger:"Navbar_burger__2LrXr"}},31:function(e,t,a){e.exports={flexRow:"FeatureCard_flexRow__1VG1i",container:"FeatureCard_container__xLUru",content:"FeatureCard_content__3mdPK",loading:"FeatureCard_loading__2Pecj",flexCol:"FeatureCard_flexCol__3jrbE",justifyBetween:"FeatureCard_justifyBetween__3bS0D",noDecoration:"FeatureCard_noDecoration__AF8sD",verticalSeparator:"FeatureCard_verticalSeparator__2Qirs",hline:"FeatureCard_hline__1Oxgf"}},32:function(e,t,a){e.exports={flexRow:"Footer_flexRow__3SaZ8",loading:"Footer_loading__20SnZ",flexCol:"Footer_flexCol__2-b4e",justifyBetween:"Footer_justifyBetween__be3N3",noDecoration:"Footer_noDecoration__1XIgo",verticalSeparator:"Footer_verticalSeparator__1exiF",hline:"Footer_hline__2DNQN",footerContainer:"Footer_footerContainer__187vn",content:"Footer_content__2lZHa",socialLinks:"Footer_socialLinks__3c7rh",socialIcon:"Footer_socialIcon__1dkGY"}},34:function(e,t,a){e.exports={flexRow:"Carousel_flexRow__38Sie",loading:"Carousel_loading__1YOjk",flexCol:"Carousel_flexCol__3tSBa",justifyBetween:"Carousel_justifyBetween__129H7",noDecoration:"Carousel_noDecoration__38SOc",verticalSeparator:"Carousel_verticalSeparator___Mh0z",hline:"Carousel_hline__3f4p7",carousel:"Carousel_carousel__QZuyW",sliderWrapper:"Carousel_sliderWrapper__3qyoW",nextBtn:"Carousel_nextBtn__wylJv",prevBtn:"Carousel_prevBtn__2gvtj"}},35:function(e,t,a){e.exports={flexRow:"Header_flexRow__1__LS",container:"Header_container__21wXn",loading:"Header_loading__2pgbE",flexCol:"Header_flexCol__1Jtnl",content:"Header_content__3z1OQ",justifyBetween:"Header_justifyBetween__3QV-q",noDecoration:"Header_noDecoration__2JtzA",verticalSeparator:"Header_verticalSeparator__wte3H",hline:"Header_hline__xU8-T"}}}]);
//# sourceMappingURL=1.57bfa3a4.chunk.js.map