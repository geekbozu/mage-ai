(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1079],{52136:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(47329),i=n.n(r),a=n(82684),s=n(63588),o=n.n(s),l=n(5237),u=n(29989),f=n(81352),c=n(46119),g=n(88543),d=n(12765),h=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function v(e){var t=e.top,n=void 0===t?0:t,r=e.left,i=void 0===r?0:r,s=e.scale,v=e.height,x=e.stroke,y=void 0===x?"#eaf0f6":x,m=e.strokeWidth,b=void 0===m?1:m,k=e.strokeDasharray,w=e.className,O=e.numTicks,R=void 0===O?10:O,q=e.lineStyle,T=e.offset,E=e.tickValues,N=e.children,C=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,h),P=null!=E?E:(0,c.Z)(s,R),L=(null!=T?T:0)+(0,d.Z)(s)/2,Z=P.map((function(e,t){var n,r=(null!=(n=(0,g.Z)(s(e)))?n:0)+L;return{index:t,from:new f.Z({x:r,y:0}),to:new f.Z({x:r,y:v})}}));return a.createElement(u.Z,{className:o()("visx-columns",w),top:n,left:i},N?N({lines:Z}):Z.map((function(e){var t=e.from,n=e.to,r=e.index;return a.createElement(l.Z,p({key:"column-line-"+r,from:t,to:n,stroke:y,strokeWidth:b,strokeDasharray:k,style:q},C))})))}v.propTypes={tickValues:i().array,height:i().number.isRequired}},67778:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(47329),i=n.n(r),a=n(82684),s=n(63588),o=n.n(s),l=n(5237),u=n(29989),f=n(81352),c=n(46119),g=n(88543),d=n(12765),h=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function v(e){var t=e.top,n=void 0===t?0:t,r=e.left,i=void 0===r?0:r,s=e.scale,v=e.width,x=e.stroke,y=void 0===x?"#eaf0f6":x,m=e.strokeWidth,b=void 0===m?1:m,k=e.strokeDasharray,w=e.className,O=e.children,R=e.numTicks,q=void 0===R?10:R,T=e.lineStyle,E=e.offset,N=e.tickValues,C=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,h),P=null!=N?N:(0,c.Z)(s,q),L=(null!=E?E:0)+(0,d.Z)(s)/2,Z=P.map((function(e,t){var n,r=(null!=(n=(0,g.Z)(s(e)))?n:0)+L;return{index:t,from:new f.Z({x:0,y:r}),to:new f.Z({x:v,y:r})}}));return a.createElement(u.Z,{className:o()("visx-rows",w),top:n,left:i},O?O({lines:Z}):Z.map((function(e){var t=e.from,n=e.to,r=e.index;return a.createElement(l.Z,p({key:"row-line-"+r,from:t,to:n,stroke:y,strokeWidth:b,strokeDasharray:k,style:T},C))})))}v.propTypes={tickValues:i().array,width:i().number.isRequired}},12765:function(e,t,n){"use strict";function r(e){return"bandwidth"in e?e.bandwidth():0}n.d(t,{Z:function(){return r}})},84482:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(47329),i=n.n(r),a=n(82684),s=["flexDirection","alignItems","margin","display","children"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e){var t=e.flexDirection,n=void 0===t?"row":t,r=e.alignItems,i=void 0===r?"center":r,l=e.margin,u=void 0===l?"0":l,f=e.display,c=void 0===f?"flex":f,g=e.children,d=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,s);return a.createElement("div",o({className:"visx-legend-item",style:{display:c,alignItems:i,flexDirection:n,margin:u}},d),g)}l.propTypes={alignItems:i().string,margin:i().oneOfType([i().string,i().number]),children:i().node,display:i().string}},76771:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(47329),i=n.n(r),a=n(82684),s=["flex","label","margin","align","children"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e){var t=e.flex,n=void 0===t?"1":t,r=e.label,i=e.margin,l=void 0===i?"5px 0":i,u=e.align,f=void 0===u?"left":u,c=e.children,g=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,s);return a.createElement("div",o({className:"visx-legend-label",style:{justifyContent:f,display:"flex",flex:n,margin:l}},g),c||r)}l.propTypes={align:i().string,label:i().node,flex:i().oneOfType([i().string,i().number]),margin:i().oneOfType([i().string,i().number]),children:i().node}},17066:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(82684),i=n(47329),a=n.n(i),s=n(63588),o=n.n(s),l=n(84482),u=n(76771);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function c(e){var t=e.fill,n=e.width,i=e.height,a=e.style;return r.createElement("div",{style:f({width:n,height:i,background:t},a)})}c.propTypes={fill:a().string,width:a().oneOfType([a().string,a().number]),height:a().oneOfType([a().string,a().number])};var g=n(29989);function d(e){var t=e.fill,n=e.width,i=e.height,a=e.style,s="string"===typeof n||"undefined"===typeof n?0:n,o="string"===typeof i||"undefined"===typeof i?0:i,l=Math.max(s,o),u=l/2;return r.createElement("svg",{width:l,height:l},r.createElement(g.Z,{top:u,left:u},r.createElement("circle",{r:u,fill:t,style:a})))}function h(e){var t=e.fill,n=e.width,i=e.height,a=e.style,s="string"===typeof i||"undefined"===typeof i?0:i,o="number"===typeof(null==a?void 0:a.strokeWidth)?null==a?void 0:a.strokeWidth:2;return r.createElement("svg",{width:n,height:i},r.createElement(g.Z,{top:s/2-o/2},r.createElement("line",{x1:0,x2:n,y1:0,y2:0,stroke:t,strokeWidth:o,style:a})))}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}d.propTypes={fill:a().string,width:a().oneOfType([a().string,a().number]),height:a().oneOfType([a().string,a().number])},h.propTypes={fill:a().string,width:a().oneOfType([a().string,a().number]),height:a().oneOfType([a().string,a().number])};var v=function(){};function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function y(e){var t=e.shape,n=void 0===t?c:t,i=e.width,a=e.height,s=e.margin,o=e.label,l=e.item,u=e.itemIndex,f=e.fill,g=e.size,y=e.shapeStyle;return r.createElement("div",{className:"visx-legend-shape",style:{display:"flex",width:g?g(x({},o)):i,height:g?g(x({},o)):a,margin:s}},function(e){var t=e.shape,n=void 0===t?"rect":t,i=e.fill,a=void 0===i?v:i,s=e.size,o=void 0===s?v:s,l=e.width,u=e.height,f=e.label,g=e.item,x=e.itemIndex,y=e.shapeStyle,m=void 0===y?v:y,b={width:l,height:u,item:g,itemIndex:x,label:f,fill:a(p({},f)),size:o(p({},f)),style:m(p({},f))};return"string"===typeof n?"circle"===n?r.createElement(d,b):"line"===n?r.createElement(h,b):r.createElement(c,b):r.isValidElement(n)?r.cloneElement(n,b):n?r.createElement(n,b):null}({shape:n,item:l,itemIndex:u,label:o,width:i,height:a,fill:f,shapeStyle:y}))}function m(e){return e&&"object"===typeof e&&"value"in e&&"undefined"!==typeof e.value?e.value:e}function b(e){return String(m(e))}function k(e){var t=e.scale,n=e.labelFormat;return function(e,r){return{datum:e,index:r,text:""+n(e,r),value:t(e)}}}y.propTypes={itemIndex:a().number.isRequired,margin:a().oneOfType([a().string,a().number]),width:a().oneOfType([a().string,a().number]),height:a().oneOfType([a().string,a().number])};var w=["className","style","scale","shape","domain","fill","size","labelFormat","labelTransform","shapeWidth","shapeHeight","shapeMargin","shapeStyle","labelAlign","labelFlex","labelMargin","itemMargin","direction","itemDirection","legendLabelProps","children"];function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var R={display:"flex"};function q(e){var t=e.className,n=e.style,i=void 0===n?R:n,a=e.scale,s=e.shape,f=e.domain,c=e.fill,g=void 0===c?b:c,d=e.size,h=void 0===d?b:d,p=e.labelFormat,v=void 0===p?m:p,x=e.labelTransform,q=void 0===x?k:x,T=e.shapeWidth,E=void 0===T?15:T,N=e.shapeHeight,C=void 0===N?15:N,P=e.shapeMargin,L=void 0===P?"2px 4px 2px 0":P,Z=e.shapeStyle,_=e.labelAlign,j=void 0===_?"left":_,M=e.labelFlex,$=void 0===M?"1":M,F=e.labelMargin,S=void 0===F?"0 4px":F,U=e.itemMargin,I=void 0===U?"0":U,z=e.direction,A=void 0===z?"column":z,W=e.itemDirection,D=void 0===W?"row":W,B=e.legendLabelProps,V=e.children,H=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,w),Y=f||("domain"in a?a.domain():[]),J=q({scale:a,labelFormat:v}),K=Y.map(J);return V?r.createElement(r.Fragment,null,V(K)):r.createElement("div",{className:o()("visx-legend",t),style:O({},i,{flexDirection:A})},K.map((function(e,t){return r.createElement(l.Z,O({key:"legend-"+e.text+"-"+t,margin:I,flexDirection:D},H),r.createElement(y,{shape:s,height:C,width:E,margin:L,item:Y[t],itemIndex:t,label:e,fill:g,size:h,shapeStyle:Z}),r.createElement(u.Z,O({label:e.text,flex:$,margin:S,align:j},B)))})))}function T(e){return r.createElement(q,e)}q.propTypes={children:a().func,className:a().string,domain:a().array,shapeWidth:a().oneOfType([a().string,a().number]),shapeHeight:a().oneOfType([a().string,a().number]),shapeMargin:a().oneOfType([a().string,a().number]),labelAlign:a().string,labelFlex:a().oneOfType([a().string,a().number]),labelMargin:a().oneOfType([a().string,a().number]),itemMargin:a().oneOfType([a().string,a().number]),fill:a().func,size:a().func,shapeStyle:a().func}},86465:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(82684),i=n(63588),a=n.n(i),s=["className","innerRef"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e){var t=e.className,n=e.innerRef,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,s);return r.createElement("circle",o({ref:n,className:a()("visx-circle",t)},i))}},85587:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(82684),i=n(63588),a=n.n(i),s=n(39309),o=["children","data","x","y","fill","className","curve","innerRef","defined"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e){var t=e.children,n=e.data,i=void 0===n?[]:n,u=e.x,f=e.y,c=e.fill,g=void 0===c?"transparent":c,d=e.className,h=e.curve,p=e.innerRef,v=e.defined,x=void 0===v?function(){return!0}:v,y=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o),m=(0,s.jv)({x:u,y:f,defined:x,curve:h});return t?r.createElement(r.Fragment,null,t({path:m})):r.createElement("path",l({ref:p,className:a()("visx-linepath",d),d:m(i)||"",fill:g,strokeLinecap:"round"},y))}},39309:function(e,t,n){"use strict";n.d(t,{SO:function(){return s},jv:function(){return o}});var r=n(48167),i=n(92201),a=n(49894);function s(e){var t=void 0===e?{}:e,n=t.x,i=t.x0,s=t.x1,o=t.y,l=t.y0,u=t.y1,f=t.defined,c=t.curve,g=(0,r.Z)();return n&&(0,a.Z)(g.x,n),i&&(0,a.Z)(g.x0,i),s&&(0,a.Z)(g.x1,s),o&&(0,a.Z)(g.y,o),l&&(0,a.Z)(g.y0,l),u&&(0,a.Z)(g.y1,u),f&&g.defined(f),c&&g.curve(c),g}function o(e){var t=void 0===e?{}:e,n=t.x,r=t.y,s=t.defined,o=t.curve,l=(0,i.Z)();return n&&(0,a.Z)(l.x,n),r&&(0,a.Z)(l.y,r),s&&l.defined(s),o&&l.curve(o),l}},5237:function(e,t,n){"use strict";t.Z=function(e){var t=e.from,n=void 0===t?{x:0,y:0}:t,s=e.to,l=void 0===s?{x:1,y:1}:s,u=e.fill,f=void 0===u?"transparent":u,c=e.className,g=e.innerRef,d=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a),h=n.x===l.x||n.y===l.y;return r.default.createElement("line",o({ref:g,className:(0,i.default)("visx-line",c),x1:n.x,y1:n.y,x2:l.x,y2:l.y,fill:f,shapeRendering:h?"crispEdges":"auto"},d))};var r=s(n(82684)),i=s(n(63588)),a=["from","to","fill","className","innerRef"];function s(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}},98889:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(47329),i=n.n(r),a=n(82684),s=n(63588),o=n.n(s),l=n(39309),u=["children","x","x0","x1","y","y0","y1","data","defined","className","curve","innerRef"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function c(e){var t=e.children,n=e.x,r=e.x0,i=e.x1,s=e.y,c=e.y0,g=e.y1,d=e.data,h=void 0===d?[]:d,p=e.defined,v=void 0===p?function(){return!0}:p,x=e.className,y=e.curve,m=e.innerRef,b=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,u),k=(0,l.SO)({x:n,x0:r,x1:i,y:s,y0:c,y1:g,defined:v,curve:y});return t?a.createElement(a.Fragment,null,t({path:k})):a.createElement("path",f({ref:m,className:o()("visx-area",x),d:k(h)||""},b))}var g=["id","children"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function h(e){var t=e.id,n=e.children,r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,g);return a.createElement("defs",null,a.createElement("clipPath",d({id:t},r),n))}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function v(e){var t=e.className,n=e.curve,r=e.clipAboveTo,i=e.clipBelowTo,s=e.data,l=e.defined,u=e.x,f=e.y0,g=e.y1,d=e.aboveAreaProps,v=e.belowAreaProps,x=e.id,y=void 0===x?"":x;return a.createElement("g",{className:o()("visx-threshold",t)},a.createElement(c,{curve:n,data:s,x:u,y1:g,defined:l},(function(e){var t=e.path,n=null,o=null;return n=t.y0(i)(s),o=t.y0(r)(s),a.createElement("g",null,a.createElement(h,{id:"threshold-clip-below-"+y},a.createElement("path",{d:n||""})),a.createElement(h,{id:"threshold-clip-above-"+y},a.createElement("path",{d:o||""})))})),a.createElement(c,p({curve:n,data:s,defined:l,x:u,y0:f,y1:g,strokeWidth:0,clipPath:"url(#threshold-clip-below-"+y+")"},v)),a.createElement(c,p({curve:n,data:s,defined:l,x:u,y0:f,y1:g,strokeWidth:0,clipPath:"url(#threshold-clip-above-"+y+")"},d)))}h.propTypes={id:i().string.isRequired,children:i().node},v.propTypes={className:i().string,clipAboveTo:i().oneOfType([i().func,i().number]).isRequired,clipBelowTo:i().oneOfType([i().func,i().number]).isRequired,id:i().string.isRequired,data:i().array.isRequired,defined:i().func,x:i().oneOfType([i().func,i().number]).isRequired,y0:i().oneOfType([i().func,i().number]).isRequired,y1:i().oneOfType([i().func,i().number]).isRequired}},6154:function(e,t,n){"use strict";function r(e){return function(){return e}}function i(e){return e[0]}function a(e){return e[1]}function s(){this._=null}function o(e){e.U=e.C=e.L=e.R=e.P=e.N=null}function l(e,t){var n=t,r=t.R,i=n.U;i?i.L===n?i.L=r:i.R=r:e._=r,r.U=i,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}function u(e,t){var n=t,r=t.L,i=n.U;i?i.L===n?i.L=r:i.R=r:e._=r,r.U=i,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}function f(e){for(;e.L;)e=e.L;return e}n.d(t,{Z:function(){return z}}),s.prototype={constructor:s,insert:function(e,t){var n,r,i;if(e){if(t.P=e,t.N=e.N,e.N&&(e.N.P=t),e.N=t,e.R){for(e=e.R;e.L;)e=e.L;e.L=t}else e.R=t;n=e}else this._?(e=f(this._),t.P=null,t.N=e,e.P=e.L=t,n=e):(t.P=t.N=null,this._=t,n=null);for(t.L=t.R=null,t.U=n,t.C=!0,e=t;n&&n.C;)n===(r=n.U).L?(i=r.R)&&i.C?(n.C=i.C=!1,r.C=!0,e=r):(e===n.R&&(l(this,n),n=(e=n).U),n.C=!1,r.C=!0,u(this,r)):(i=r.L)&&i.C?(n.C=i.C=!1,r.C=!0,e=r):(e===n.L&&(u(this,n),n=(e=n).U),n.C=!1,r.C=!0,l(this,r)),n=e.U;this._.C=!1},remove:function(e){e.N&&(e.N.P=e.P),e.P&&(e.P.N=e.N),e.N=e.P=null;var t,n,r,i=e.U,a=e.L,s=e.R;if(n=a?s?f(s):a:s,i?i.L===e?i.L=n:i.R=n:this._=n,a&&s?(r=n.C,n.C=e.C,n.L=a,a.U=n,n!==s?(i=n.U,n.U=e.U,e=n.R,i.L=e,n.R=s,s.U=n):(n.U=i,i=n,e=n.R)):(r=e.C,e=n),e&&(e.U=i),!r)if(e&&e.C)e.C=!1;else{do{if(e===this._)break;if(e===i.L){if((t=i.R).C&&(t.C=!1,i.C=!0,l(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,u(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,l(this,i),e=this._;break}}else if((t=i.L).C&&(t.C=!1,i.C=!0,u(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,l(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,u(this,i),e=this._;break}t.C=!0,e=i,i=i.U}while(!e.C);e&&(e.C=!1)}}};var c=s;function g(e,t,n,r){var i=[null,null],a=$.push(i)-1;return i.left=e,i.right=t,n&&h(i,e,t,n),r&&h(i,t,e,r),j[e.index].halfedges.push(a),j[t.index].halfedges.push(a),i}function d(e,t,n){var r=[t,n];return r.left=e,r}function h(e,t,n,r){e[0]||e[1]?e.left===n?e[1]=r:e[0]=r:(e[0]=r,e.left=t,e.right=n)}function p(e,t,n,r,i){var a,s=e[0],o=e[1],l=s[0],u=s[1],f=0,c=1,g=o[0]-l,d=o[1]-u;if(a=t-l,g||!(a>0)){if(a/=g,g<0){if(a<f)return;a<c&&(c=a)}else if(g>0){if(a>c)return;a>f&&(f=a)}if(a=r-l,g||!(a<0)){if(a/=g,g<0){if(a>c)return;a>f&&(f=a)}else if(g>0){if(a<f)return;a<c&&(c=a)}if(a=n-u,d||!(a>0)){if(a/=d,d<0){if(a<f)return;a<c&&(c=a)}else if(d>0){if(a>c)return;a>f&&(f=a)}if(a=i-u,d||!(a<0)){if(a/=d,d<0){if(a>c)return;a>f&&(f=a)}else if(d>0){if(a<f)return;a<c&&(c=a)}return!(f>0||c<1)||(f>0&&(e[0]=[l+f*g,u+f*d]),c<1&&(e[1]=[l+c*g,u+c*d]),!0)}}}}}function v(e,t,n,r,i){var a=e[1];if(a)return!0;var s,o,l=e[0],u=e.left,f=e.right,c=u[0],g=u[1],d=f[0],h=f[1],p=(c+d)/2,v=(g+h)/2;if(h===g){if(p<t||p>=r)return;if(c>d){if(l){if(l[1]>=i)return}else l=[p,n];a=[p,i]}else{if(l){if(l[1]<n)return}else l=[p,i];a=[p,n]}}else if(o=v-(s=(c-d)/(h-g))*p,s<-1||s>1)if(c>d){if(l){if(l[1]>=i)return}else l=[(n-o)/s,n];a=[(i-o)/s,i]}else{if(l){if(l[1]<n)return}else l=[(i-o)/s,i];a=[(n-o)/s,n]}else if(g<h){if(l){if(l[0]>=r)return}else l=[t,s*t+o];a=[r,s*r+o]}else{if(l){if(l[0]<t)return}else l=[r,s*r+o];a=[t,s*t+o]}return e[0]=l,e[1]=a,!0}function x(e,t){var n=e.site,r=t.left,i=t.right;return n===i&&(i=r,r=n),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(n===r?(r=t[1],i=t[0]):(r=t[0],i=t[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function y(e,t){return t[+(t.left!==e.site)]}function m(e,t){return t[+(t.left===e.site)]}var b,k=[];function w(){o(this),this.x=this.y=this.arc=this.site=this.cy=null}function O(e){var t=e.P,n=e.N;if(t&&n){var r=t.site,i=e.site,a=n.site;if(r!==a){var s=i[0],o=i[1],l=r[0]-s,u=r[1]-o,f=a[0]-s,c=a[1]-o,g=2*(l*c-u*f);if(!(g>=-S)){var d=l*l+u*u,h=f*f+c*c,p=(c*d-u*h)/g,v=(l*h-f*d)/g,x=k.pop()||new w;x.arc=e,x.site=i,x.x=p+s,x.y=(x.cy=v+o)+Math.sqrt(p*p+v*v),e.circle=x;for(var y=null,m=M._;m;)if(x.y<m.y||x.y===m.y&&x.x<=m.x){if(!m.L){y=m.P;break}m=m.L}else{if(!m.R){y=m;break}m=m.R}M.insert(y,x),y||(b=x)}}}}function R(e){var t=e.circle;t&&(t.P||(b=t.N),M.remove(t),k.push(t),o(t),e.circle=null)}var q=[];function T(){o(this),this.edge=this.site=this.circle=null}function E(e){var t=q.pop()||new T;return t.site=e,t}function N(e){R(e),_.remove(e),q.push(e),o(e)}function C(e){var t=e.circle,n=t.x,r=t.cy,i=[n,r],a=e.P,s=e.N,o=[e];N(e);for(var l=a;l.circle&&Math.abs(n-l.circle.x)<F&&Math.abs(r-l.circle.cy)<F;)a=l.P,o.unshift(l),N(l),l=a;o.unshift(l),R(l);for(var u=s;u.circle&&Math.abs(n-u.circle.x)<F&&Math.abs(r-u.circle.cy)<F;)s=u.N,o.push(u),N(u),u=s;o.push(u),R(u);var f,c=o.length;for(f=1;f<c;++f)u=o[f],l=o[f-1],h(u.edge,l.site,u.site,i);l=o[0],(u=o[c-1]).edge=g(l.site,u.site,null,i),O(l),O(u)}function P(e){for(var t,n,r,i,a=e[0],s=e[1],o=_._;o;)if((r=L(o,s)-a)>F)o=o.L;else{if(!((i=a-Z(o,s))>F)){r>-F?(t=o.P,n=o):i>-F?(t=o,n=o.N):t=n=o;break}if(!o.R){t=o;break}o=o.R}!function(e){j[e.index]={site:e,halfedges:[]}}(e);var l=E(e);if(_.insert(t,l),t||n){if(t===n)return R(t),n=E(t.site),_.insert(l,n),l.edge=n.edge=g(t.site,l.site),O(t),void O(n);if(n){R(t),R(n);var u=t.site,f=u[0],c=u[1],d=e[0]-f,p=e[1]-c,v=n.site,x=v[0]-f,y=v[1]-c,m=2*(d*y-p*x),b=d*d+p*p,k=x*x+y*y,w=[(y*b-p*k)/m+f,(d*k-x*b)/m+c];h(n.edge,u,v,w),l.edge=g(u,e,null,w),n.edge=g(e,v,null,w),O(t),O(n)}else l.edge=g(t.site,l.site)}}function L(e,t){var n=e.site,r=n[0],i=n[1],a=i-t;if(!a)return r;var s=e.P;if(!s)return-1/0;var o=(n=s.site)[0],l=n[1],u=l-t;if(!u)return o;var f=o-r,c=1/a-1/u,g=f/u;return c?(-g+Math.sqrt(g*g-2*c*(f*f/(-2*u)-l+u/2+i-a/2)))/c+r:(r+o)/2}function Z(e,t){var n=e.N;if(n)return L(n,t);var r=e.site;return r[1]===t?r[0]:1/0}var _,j,M,$,F=1e-6,S=1e-12;function U(e,t){return t[1]-e[1]||t[0]-e[0]}function I(e,t){var n,r,i,a=e.sort(U).pop();for($=[],j=new Array(e.length),_=new c,M=new c;;)if(i=b,a&&(!i||a[1]<i.y||a[1]===i.y&&a[0]<i.x))a[0]===n&&a[1]===r||(P(a),n=a[0],r=a[1]),a=e.pop();else{if(!i)break;C(i.arc)}if(function(){for(var e,t,n,r,i=0,a=j.length;i<a;++i)if((e=j[i])&&(r=(t=e.halfedges).length)){var s=new Array(r),o=new Array(r);for(n=0;n<r;++n)s[n]=n,o[n]=x(e,$[t[n]]);for(s.sort((function(e,t){return o[t]-o[e]})),n=0;n<r;++n)o[n]=t[s[n]];for(n=0;n<r;++n)t[n]=o[n]}}(),t){var s=+t[0][0],o=+t[0][1],l=+t[1][0],u=+t[1][1];!function(e,t,n,r){for(var i,a=$.length;a--;)v(i=$[a],e,t,n,r)&&p(i,e,t,n,r)&&(Math.abs(i[0][0]-i[1][0])>F||Math.abs(i[0][1]-i[1][1])>F)||delete $[a]}(s,o,l,u),function(e,t,n,r){var i,a,s,o,l,u,f,c,g,h,p,v,x=j.length,b=!0;for(i=0;i<x;++i)if(a=j[i]){for(s=a.site,o=(l=a.halfedges).length;o--;)$[l[o]]||l.splice(o,1);for(o=0,u=l.length;o<u;)p=(h=m(a,$[l[o]]))[0],v=h[1],c=(f=y(a,$[l[++o%u]]))[0],g=f[1],(Math.abs(p-c)>F||Math.abs(v-g)>F)&&(l.splice(o,0,$.push(d(s,h,Math.abs(p-e)<F&&r-v>F?[e,Math.abs(c-e)<F?g:r]:Math.abs(v-r)<F&&n-p>F?[Math.abs(g-r)<F?c:n,r]:Math.abs(p-n)<F&&v-t>F?[n,Math.abs(c-n)<F?g:t]:Math.abs(v-t)<F&&p-e>F?[Math.abs(g-t)<F?c:e,t]:null))-1),++u);u&&(b=!1)}if(b){var k,w,O,R=1/0;for(i=0,b=null;i<x;++i)(a=j[i])&&(O=(k=(s=a.site)[0]-e)*k+(w=s[1]-t)*w)<R&&(R=O,b=a);if(b){var q=[e,t],T=[e,r],E=[n,r],N=[n,t];b.halfedges.push($.push(d(s=b.site,q,T))-1,$.push(d(s,T,E))-1,$.push(d(s,E,N))-1,$.push(d(s,N,q))-1)}}for(i=0;i<x;++i)(a=j[i])&&(a.halfedges.length||delete j[i])}(s,o,l,u)}this.edges=$,this.cells=j,_=M=$=j=null}I.prototype={constructor:I,polygons:function(){var e=this.edges;return this.cells.map((function(t){var n=t.halfedges.map((function(n){return y(t,e[n])}));return n.data=t.site.data,n}))},triangles:function(){var e=[],t=this.edges;return this.cells.forEach((function(n,r){if(a=(i=n.halfedges).length)for(var i,a,s,o,l,u,f=n.site,c=-1,g=t[i[a-1]],d=g.left===f?g.right:g.left;++c<a;)s=d,d=(g=t[i[c]]).left===f?g.right:g.left,s&&d&&r<s.index&&r<d.index&&(l=s,u=d,((o=f)[0]-u[0])*(l[1]-o[1])-(o[0]-l[0])*(u[1]-o[1])<0)&&e.push([f.data,s.data,d.data])})),e},links:function(){return this.edges.filter((function(e){return e.right})).map((function(e){return{source:e.left.data,target:e.right.data}}))},find:function(e,t,n){for(var r,i,a=this,s=a._found||0,o=a.cells.length;!(i=a.cells[s]);)if(++s>=o)return null;var l=e-i.site[0],u=t-i.site[1],f=l*l+u*u;do{i=a.cells[r=s],s=null,i.halfedges.forEach((function(n){var r=a.edges[n],o=r.left;if(o!==i.site&&o||(o=r.right)){var l=e-o[0],u=t-o[1],c=l*l+u*u;c<f&&(f=c,s=o.index)}}))}while(null!==s);return a._found=r,null==n||f<=n*n?i.site:null}};function z(e){var t=e.width,n=void 0===t?0:t,s=e.height,o=void 0===s?0:s,l=e.x,u=e.y,f=function(){var e=i,t=a,n=null;function s(r){return new I(r.map((function(n,i){var a=[Math.round(e(n,i,r)/F)*F,Math.round(t(n,i,r)/F)*F];return a.index=i,a.data=n,a})),n)}return s.polygons=function(e){return s(e).polygons()},s.links=function(e){return s(e).links()},s.triangles=function(e){return s(e).triangles()},s.x=function(t){return arguments.length?(e="function"===typeof t?t:r(+t),s):e},s.y=function(e){return arguments.length?(t="function"===typeof e?e:r(+e),s):t},s.extent=function(e){return arguments.length?(n=null==e?null:[[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]],s):n&&[[n[0][0],n[0][1]],[n[1][0],n[1][1]]]},s.size=function(e){return arguments.length?(n=null==e?null:[[0,0],[+e[0],+e[1]]],s):n&&[n[1][0]-n[0][0],n[1][1]-n[0][1]]},s}();return l&&f.x(l),u&&f.y(u),f.extent([[-1,-1],[n+1,o+1]]),f}},47409:function(e,t,n){e=n.nmd(e),ace.define("ace/mode/python_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,a=function(){var e=this.createKeywordMapper({"invalid.deprecated":"debugger","support.function":"abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|binfile|bin|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|apply|delattr|help|next|setattr|set|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern|ascii|breakpoint|bytes","variable.language":"self|cls","constant.language":"True|False|None|NotImplemented|Ellipsis|__debug__",keyword:"and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield|async|await|nonlocal"},"identifier"),t="(?:[rR][fF]|[fF][rR])",n="(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))",r="(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))",i="(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+))(?:[eE][+-]?\\d+))|"+r+")",a="\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"string",regex:'[uU]?"{3}',next:"qqstring3"},{token:"string",regex:'[uU]?"(?=.)',next:"qqstring"},{token:"string",regex:"[uU]?'{3}",next:"qstring3"},{token:"string",regex:"[uU]?'(?=.)",next:"qstring"},{token:"string",regex:'[rR]"{3}',next:"rawqqstring3"},{token:"string",regex:'[rR]"(?=.)',next:"rawqqstring"},{token:"string",regex:"[rR]'{3}",next:"rawqstring3"},{token:"string",regex:"[rR]'(?=.)",next:"rawqstring"},{token:"string",regex:'[fF]"{3}',next:"fqqstring3"},{token:"string",regex:'[fF]"(?=.)',next:"fqqstring"},{token:"string",regex:"[fF]'{3}",next:"fqstring3"},{token:"string",regex:"[fF]'(?=.)",next:"fqstring"},{token:"string",regex:t+'"{3}',next:"rfqqstring3"},{token:"string",regex:t+'"(?=.)',next:"rfqqstring"},{token:"string",regex:t+"'{3}",next:"rfqstring3"},{token:"string",regex:t+"'(?=.)",next:"rfqstring"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|@|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"punctuation",regex:",|:|;|\\->|\\+=|\\-=|\\*=|\\/=|\\/\\/=|%=|@=|&=|\\|=|^=|>>=|<<=|\\*\\*="},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:["keyword","text","entity.name.function"],regex:"(def|class)(\\s+)([\\u00BF-\\u1FFF\\u2C00-\\uD7FF\\w]+)"},{token:"text",regex:"\\s+"},{include:"constants"}],qqstring3:[{token:"constant.language.escape",regex:a},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qstring3:[{token:"constant.language.escape",regex:a},{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:a},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:a},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],rawqqstring3:[{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],rawqstring3:[{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],rawqqstring:[{token:"string",regex:"\\\\$",next:"rawqqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],rawqstring:[{token:"string",regex:"\\\\$",next:"rawqstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],fqqstring3:[{token:"constant.language.escape",regex:a},{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring3:[{token:"constant.language.escape",regex:a},{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqqstring:[{token:"constant.language.escape",regex:a},{token:"string",regex:"\\\\$",next:"fqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring:[{token:"constant.language.escape",regex:a},{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring3:[{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring3:[{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring:[{token:"string",regex:"\\\\$",next:"rfqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring:[{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstringParRules:[{token:"paren.lparen",regex:"[\\[\\(]"},{token:"paren.rparen",regex:"[\\]\\)]"},{token:"string",regex:"\\s+"},{token:"string",regex:"'[^']*'"},{token:"string",regex:'"[^"]*"'},{token:"function.support",regex:"(!s|!r|!a)"},{include:"constants"},{token:"paren.rparen",regex:"}",next:"pop"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"}],constants:[{token:"constant.numeric",regex:"(?:"+i+"|\\d+)[jJ]\\b"},{token:"constant.numeric",regex:i},{token:"constant.numeric",regex:n+"[lL]\\b"},{token:"constant.numeric",regex:n+"\\b"},{token:["punctuation","function.support"],regex:"(\\.)([a-zA-Z_]+)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};r.inherits(a,i),t.PythonHighlightRules=a})),ace.define("ace/mode/folding/pythonic",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){this.foldingStartMarker=new RegExp("([\\[{])(?:\\s*)$|("+e+")(?:\\s*)(?:#.*)?$")};r.inherits(a,i),function(){this.getFoldWidgetRange=function(e,t,n){var r=e.getLine(n).match(this.foldingStartMarker);if(r)return r[1]?this.openingBracketBlock(e,r[1],n,r.index):r[2]?this.indentationBlock(e,n,r.index+r[2].length):this.indentationBlock(e,n)}}.call(a.prototype)})),ace.define("ace/mode/python",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/python_highlight_rules","ace/mode/folding/pythonic","ace/range"],(function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,a=e("./python_highlight_rules").PythonHighlightRules,s=e("./folding/pythonic").FoldMode,o=e("../range").Range,l=function(){this.HighlightRules=a,this.foldingRules=new s("\\:"),this.$behaviour=this.$defaultBehaviour};r.inherits(l,i),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e).tokens;if(i.length&&"comment"==i[i.length-1].type)return r;"start"==e&&(t.match(/^.*[\{\(\[:]\s*$/)&&(r+=n));return r};var e={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(t,n,r){if("\r\n"!==r&&"\r"!==r&&"\n"!==r)return!1;var i=this.getTokenizer().getLineTokens(n.trim(),t).tokens;if(!i)return!1;do{var a=i.pop()}while(a&&("comment"==a.type||"text"==a.type&&a.value.match(/^\s+$/)));return!!a&&("keyword"==a.type&&e[a.value])},this.autoOutdent=function(e,t,n){n+=1;var r=this.$getIndent(t.getLine(n)),i=t.getTabString();r.slice(-i.length)==i&&t.remove(new o(n,r.length-i.length,n,r.length))},this.$id="ace/mode/python",this.snippetFileId="ace/snippets/python"}.call(l.prototype),t.Mode=l})),ace.require(["ace/mode/python"],(function(t){e&&(e.exports=t)}))},4673:function(e,t,n){"use strict";var r=n(82684);const i=()=>{};function a(e,t){return Math.floor(Math.random()*(t-e+1)+e)}const s=(0,r.forwardRef)((({progress:e,height:t=2,className:n="",color:s="red",background:o="transparent",onLoaderFinished:l,transitionTime:u=300,loaderSpeed:f=500,waitingTime:c=1e3,shadow:g=!0,containerStyle:d={},style:h={},shadowStyle:p={},containerClassName:v=""},x)=>{const y=(0,r.useRef)(!1),[m,b]=(0,r.useState)(0),[k,w]=(0,r.useState)({active:!1,startingValue:20,refreshRate:1e3}),[O,R]=(0,r.useState)(!1),[q,T]=(0,r.useState)({active:!1,value:20}),E={height:"100%",background:s,transition:`all ${f}ms ease`,width:"0%"},N={position:"fixed",top:0,left:0,height:t,background:o,zIndex:99999999999,width:"100%"},C={boxShadow:`0 0 10px ${s}, 0 0 10px ${s}`,width:"5%",opacity:1,position:"absolute",height:"100%",transition:`all ${f}ms ease`,transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},[P,L]=(0,r.useState)(E),[Z,_]=(0,r.useState)(C);(0,r.useEffect)((()=>(y.current=!0,()=>{y.current=!1})),[]),(0,r.useImperativeHandle)(x,(()=>({continuousStart(e,t=1e3){if(q.active)return;if(O)return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");const n=e||a(10,20);w({active:!0,refreshRate:t,startingValue:e}),b(n),j(n)},staticStart(e){if(k.active)return;if(O)return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");const t=e||a(30,50);T({active:!0,value:t}),b(t),j(t)},complete(){O?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(b(100),j(100))}}))),(0,r.useEffect)((()=>{L({...P,background:s}),_({...Z,boxShadow:`0 0 10px ${s}, 0 0 5px ${s}`})}),[s]),(0,r.useEffect)((()=>{if(x){if(x&&void 0!==e)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');j(m),R(!1)}else e&&j(e),R(!0)}),[e]);const j=e=>{e>=100?(L({...P,width:"100%"}),g&&_({...Z,left:e-10+"%"}),setTimeout((()=>{y.current&&(L({...P,opacity:0,width:"100%",transition:`all ${u}ms ease-out`,color:s}),setTimeout((()=>{y.current&&(k.active&&(w({...k,active:!1}),b(0),j(0)),q.active&&(T({...q,active:!1}),b(0),j(0)),l&&l(),b(0),j(0))}),u))}),c)):(L((t=>({...t,width:e+"%",opacity:1,transition:e>0?`all ${f}ms ease`:""}))),g&&_({...Z,left:e-5.5+"%",transition:e>0?`all ${f}ms ease`:""}))};return function(e,t,n){const a=(0,r.useRef)(i);(0,r.useEffect)((()=>{a.current=e})),(0,r.useEffect)((()=>{n&&null!==t&&!1!==t&&a.current()}),[n]),(0,r.useEffect)((()=>{if(null===t||!1===t)return;const e=setInterval((()=>a.current()),t);return()=>clearInterval(e)}),[t])}((()=>{const e=a(10,20);m+e<90&&(b(m+e),j(m+e))}),k.active?k.refreshRate:null),(0,r.createElement)("div",{className:v,style:{...N,...d}},(0,r.createElement)("div",{className:n,style:{...P,...h}},g?(0,r.createElement)("div",{style:{...Z,...p}}):null))}));t.Z=s},89989:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(58026),i=n(30198),a=n(18907),s=n(85847);function o(e){return(0,r.Z)(e)||(0,i.Z)(e)||(0,a.Z)(e)||(0,s.Z)()}}}]);