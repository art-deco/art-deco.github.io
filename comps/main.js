function p(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:p(a)}}function t(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var u="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function w(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&u(c,a,{configurable:!0,writable:!0,value:b})}}
var x="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};w("Object.assign",function(a){return a||x});w("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});function y(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var e=a[d];return e?e:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};var z=preact,A=z.h,B=z.Component,C=z.render;function D(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,b:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}function E(a,b,c,d){this.f=d;this.i=c;this.b=a;this.parent=b;this.unrender=this.a=null}
E.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.a)this.a.componentDidMount&&this.a.componentDidMount(),this.a.forceUpdate();else{this.f.render(this.f.h(this.i,b,a),this.parent,this.b);var c=this.b._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.a=c}};
function F(a,b,c,d,e,f,m){function g(){c.render(Object.assign({},f,{children:m}));a.instance=c}var h={render:C,Component:B,h:A},l=a.plain;!c&&l?c=new b(d,e):c||(c=new E(d,e,b,h));b.load?b.load(function(k,n){n&&Object.assign(f,n);k?console.warn(k):g()},d,f):g();return c};function G(a,b,c,d){var e=void 0===e?{}:e;var f=window.top,m=f.outerHeight,g=f.screenY,h=f.outerWidth,l=f.screenX;f=[];c&&f.push("width="+c,"left="+(h/2+l-c/2));d&&f.push("top="+(m/2+g-d/2-50),"height="+d);c=Object.keys(e).map(function(k){return k+"="+e[k]});f.push.apply(f,c instanceof Array?c:t(q(c)));window.open(a,b,f.join(","))};function H(a){var b=a.size,c=a.href,d=a.l,e=a.color,f=a.alt,m=void 0===a.width?900:a.width,g=void 0===a.height?650:a.height,h=void 0===a.borderRadius?"4px":a.borderRadius,l=a.j,k=c(a.url,a.title,a.c);a=A("img",{src:"/buttons/"+d+".svg",width:b,height:b,alt:f,style:"background:"+e+"; border-radius:"+h});return l?A("a",{href:k},a):A("a",{onClick:function(n){G(k,f,m,g);n.preventDefault();return!1},href:"#"},a)}
function I(a){return Object.entries(a).map(function(b){var c=q(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var J={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+I({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+I({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+I({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
I({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+I({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};var K={},L={"social-buttons":function(a){var b=void 0===a.size?32:a.size,c=a.url,d=a.c,e=a.title,f=a.borderRadius;if(a.g){a=document.querySelector('meta[name="description"]');if(!a)return A("span",{className:"SplendidSharingButtons"},"Error Loading Social Buttons");e=a.content;d||(d=a.content)}return A("span",{className:"SplendidSharingButtons"},Object.entries(J).reduce(function(m,g){var h=q(g);g=h.next().value;var l=h.next().value;h=Object.assign({},l);l=l.color;h=(delete h.color,h);m.push(A(H,Object.assign({},
h,{size:b,l:g,color:"rgb("+l+")",title:e,url:c,c:d,borderRadius:f,j:"email"==g}))," ");return m},[]))}},N=function(a){var b=a=void 0===a?{}:a,c=Object.assign({},b);a=void 0===b.rootMargin?"76px":b.rootMargin;var d=void 0===b.log?!0:b.log;b=(delete c.rootMargin,delete c.log,c);var e=new IntersectionObserver(function(f){f.forEach(function(m){var g=m.target,h=g.render.g,l=h.key,k=h.id,n=h.plain;if(m.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",n?"":" Preact",
l,k,g);try{var r=g.render();r&&!r.unrender&&e.unobserve(g)}catch(M){d&&console.warn(M)}}else h.instance&&(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",n?"":" Preact",l,k,g),h.instance.unrender())})},Object.assign({},{rootMargin:a},b));return e}();
[{key:"social-buttons",id:"ce658",props:{url:"https://art-deco.github.io/",c:"Main Page",title:"The 150-160 characters search engine meta:description"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children,f=L[b],m=f.plain||/^\s*class\s+/.test(f.toString())&&!B.isPrototypeOf(f);d.o={m:function(g){return y(K[g])}};c.split(",").forEach(function(g){var h=D(g,b),l=h.parent,k=h.b,n={key:b,id:g,plain:m},r;k.render=function(){return r=F(n,f,r,k,l,d,e)};
k.render.g=n;N.observe(k)})});

//# sourceMappingURL=main.js.map