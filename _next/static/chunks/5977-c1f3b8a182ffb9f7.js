(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5977],{18602:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(85893),o=n(93967),a=n.n(o),r=n(6812),l=n(67294),s=function(e){let t=l.Children.count(e),n=l.Children.toArray(e);if(1!==t||1!==n.length)throw Error("In ImageConfig, found ".concat(t," total children and ").concat(n.length," valid children. Please ensure that ImageConfig has exactly one child element, and ensure it is a valid image element."));let i=n[0];if(!(0,l.isValidElement)(i))throw Error("In ImageConfig, found child that does not seem to be a valid React element. Please ensure that ImageConfig contains a valid image element.");let o=i.props.mdxType||i.type;if("img"===o)return i;if("p"===o)return function(e){let t=l.Children.toArray(e.props.children);t.length>1&&console.warn("Warning: <ImageConfig /> was passed multiple children. We'll filter these children to find the image element being configured. All other children will be ignored. Please ensure that ImageConfig contains only a single image element.");let n=t.filter(e=>!!(0,l.isValidElement)(e)&&"img"==(e.props.mdxType||e.type));if(0==n.length||!(0,l.isValidElement)(n[0]))throw Error("In ImageConfig, could not find a valid image element. Please ensure that ImageConfig contains a valid image element. Child element details: ".concat(JSON.stringify(e,null,2)));return n[0]}(i);throw Error('In ImageConfig, found child with unexpected type: "'.concat(o,'". Please ensure that ImageConfig contains a single <img /> element. Child element details: ').concat(JSON.stringify(i,null,2)))},c=n(29163),h=n(72963),d=n.n(h),u=n(49423),m=n(12315),g=n.n(m);let f={a:u.nu,blockquote:u.N2,h1:u.NM,h2:u.e2,h3:u.Uw,h4:u.RC,h5:u.xh,h6:u.Je,inlineCode:u.yf,li:u.l2,ol:u.P8,p:u.im,pre:u.cb,table:u.pf,ul:u.u$,CodeBlockConfig:u.No,CodeTabs:u.kw,Highlight:u.FZ,ImageConfig:function(e){let{children:t,caption:n,hideBorder:o=!1,width:a,height:r,inline:l}=e,{src:h,alt:u,title:m}=s(t).props;if("string"!=typeof h||""==h)throw Error("Images in MDX must have an source defined. Use the format ![some alt text](path/to/img.jpg). Image details: ".concat(JSON.stringify({src:h,alt:u,title:m})," "));return n?(0,i.jsxs)("figure",{className:d().figure,children:[(0,i.jsx)(c.Z,{src:h,alt:u,title:m,noMargin:!0,noBorder:o,width:a,height:r,inline:l}),(0,i.jsx)("figcaption",{className:d().caption,children:n})]}):(0,i.jsx)(c.Z,{src:h,alt:u,title:m,noBorder:o,width:a,height:r,inline:l})},Note:u.z9,Tab:u.mn,Tabs:u.Nk,Tip:u.au,TryHcpCallout:u.BO,Warning:u.am};var p=e=>{let t,{className:n,children:o,mdxRemoteProps:l}=e;return t=o||(0,i.jsx)(r.R,{...l,components:{...f,...null==l?void 0:l.components}}),(0,i.jsx)("div",{className:a()(g().root,n),children:t})}},44504:function(e,t,n){"use strict";var i=n(85893);n(67294);var o=n(93967),a=n.n(o),r=n(91121),l=n(12712),s=n(62522),c=n(2150),h=n(60348),d=n(83147),u=n.n(d);let m={next:r.k,previous:l.n,final:s.H};t.Z=function(e){let{id:t,href:n,label:o,name:r,ariaLabel:l,direction:s}=e,d=m[s];return(0,i.jsxs)(c.Z,{id:t,className:a()(u().linkbox,u()["direction-".concat(s)]),href:n,"aria-label":l,"data-heap-track":"directional-link-box-".concat(s),children:[(0,i.jsxs)("span",{className:u().directionLabel,children:[" ",(0,i.jsx)(d,{className:a()(u().icon,u()["direction-".concat(s)])}),(0,i.jsx)(h.Z,{className:u().labelText,asElement:"span",size:200,weight:"medium",children:o})]}),(0,i.jsx)(h.Z,{className:u().name,children:r})]},t)}},29163:function(e,t,n){"use strict";var i=n(85893),o=n(25675),a=n.n(o),r=n(93967),l=n.n(r),s=n(79359),c=n.n(s);t.Z=function(e){let{src:t,alt:n,title:o,noMargin:r,noBorder:s,height:h,width:d,inline:u=!1}=e;"string"!=typeof n&&console.warn('Warning: Found MDX image with undefined alternate text. Even if an image is decorative, it\'s important for alt to be set to an empty string. Please define alt text the syntax "![Some alt text.](/some-image.jpg)". Image details: '.concat(JSON.stringify({src:t,alt:n,title:o})));let m=function(e,t){let n={};return e&&(n.width="".concat(e,"px")),t&&(n.height="".concat(t,"px")),n}(d,h),g=d&&h?{width:d,height:h}:null;g||(g=function(e){if(!e.startsWith("https://content.hashicorp.com"))return null;let t=new URL(e).searchParams,n=t.get("width"),i=t.get("height");return n&&i?{width:parseInt(n),height:parseInt(i)}:null}(t));let f=function(e){let t;let n=new URL(e,"https://developer.hashicorp.com"),i=new RegExp(/#(dark|light)-theme-only/);return i.test(n.hash)?t=n.hash.match(i)[1]:n.hash&&console.warn("[Image]: A hash (#) was detected in src url but it does not match the theme pattern: #{dark|light}-theme-only"),t}(t);return(0,i.jsx)("span",{className:l()(c().root,{[c().noMargin]:r,[c().noBorder]:s,[c().inline]:u}),"data-show-on-theme":f||null,children:g?(0,i.jsx)(a(),{src:t,alt:n,title:o,width:g.width,height:g.height,style:m}):(0,i.jsx)("img",{src:t,alt:n,title:o,style:m})})}},31354:function(e,t,n){"use strict";n.d(t,{Vt:function(){return u},BC:function(){return r},ZA:function(){return m},Nc:function(){return w}});var i=n(85893),o=n(71499),a=n.n(o);function r(e){let{title:t,url:n,isActive:o,items:r,dataHeapTrack:l}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{title:t,url:n,isActive:o,dataHeapTrack:l}),(0,i.jsx)("ol",{className:a().nested,"aria-label":t,children:(0,i.jsx)(m,{items:r})})]})}var l=n(93967),s=n.n(l),c=n(2150),h=n(41997),d=n.n(h);function u(e){let{title:t,url:n,isActive:o,dataHeapTrack:a}=e;return(0,i.jsx)(c.Z,{className:s()(d().root,{[d().isActive]:o}),href:n,"data-heap-track":a,children:t})}function m(e){let{items:t}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e,t)=>(0,i.jsx)("li",{children:"items"in e?(0,i.jsx)(r,{...e}):(0,i.jsx)(u,{...e})},"".concat(t,"-").concat(e.url)))})}var g=n(67294),f=n(20041),p=n(83952),x=n(70609),_=n.n(x),b=function(e){let{items:t}=e,n=(0,p.Me)();return(0,i.jsxs)("nav",{"aria-labelledby":n,children:[(0,i.jsx)("p",{id:n,className:_().navLabel,children:"On this page:"}),(0,i.jsx)("ol",{className:_().listRoot,children:(0,i.jsx)(m,{items:t})})]})},y=n(80147);function w(e){let{items:t}=e,n=(0,g.useRef)(),o=(0,f.Y)(n),a=(0,g.useMemo)(()=>(function e(t){let n=[];for(let i of t){let t=new URL(i.url,"https://www.example.com").hash.replace("#","");""!==t&&n.push(t),"items"in i&&n.push(...e(i.items))}return n})(t),[t]),r=a.length>1,l=(0,y.L)(a,o&&r),s=(0,g.useMemo)(()=>(function e(t,n){return t.map(t=>{let i=t.url===n;if(!("items"in t))return{...t,isActive:i};{let o=e(t.items,n);return{...t,items:o,isActive:i}}})})(t,"#".concat(l)),[t,l]);return r?(0,i.jsx)("div",{ref:n,children:(0,i.jsx)(b,{items:s})}):(0,i.jsx)("div",{ref:n})}},12315:function(e){e.exports={root:"dev-dot-content_root__UJDct hds-typography-body-300"}},83147:function(e){e.exports={linkbox:"directional-link-box_linkbox__JkyCe","direction-previous":"directional-link-box_direction-previous__GRBSm","direction-next":"directional-link-box_direction-next__hJws_","direction-final":"directional-link-box_direction-final__TitRh",icon:"directional-link-box_icon__O9thX",directionLabel:"directional-link-box_directionLabel__IVbM7",labelText:"directional-link-box_labelText__LT7Iq",name:"directional-link-box_name__HiDHR --token-typography-body-200"}},72963:function(e){e.exports={figure:"image-config_figure__ryaEI",caption:"image-config_caption__kRe62 hds-typography-body-200"}},79359:function(e){e.exports={root:"image_root__Kkwm7",noMargin:"image_noMargin__4ittr",noBorder:"image_noBorder__e_8et",inline:"image_inline__EKAR7"}},71499:function(e){e.exports={nested:"outline-link-with-nesting_nested__A2Dq2"}},41997:function(e){e.exports={root:"outline-link_root__S7fQg hds-typography-body-200 g-focus-ring-from-box-shadow",isActive:"outline-link_isActive__VNGIh"}},70609:function(e){e.exports={navLabel:"outline-nav_navLabel__HrjQb hds-typography-body-100",listRoot:"outline-nav_listRoot__Sm1fr"}}}]);