(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(65);var c=(0,n(25).createHashHistory)();t.a=class extends a.Component{render(){return r.a.createElement("div",null,r.a.createElement(l.f,{mode:"light",icon:"#/Home"===window.location.hash?"":r.a.createElement(l.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{c.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return D}),n.d(t,"f",function(){return H}),n.d(t,"c",function(){return M}),n.d(t,"e",function(){return N}),n.d(t,"b",function(){return S}),n.d(t,"d",function(){return V});var a=n(179),r=n.n(a),l=n(180),c=n.n(l),i=n(181),o=n.n(i),s=n(182),m=n.n(s),d=n(183),u=n.n(d),p=n(184),E=n.n(p),f=n(185),h=n.n(f),v=n(186),x=n.n(v),b=n(176),y=n.n(b),w=n(187),g=n.n(w),C=n(0),k=n.n(C),O=n(232);n(173);function T(e,t){var n=x()(e);if(h.a){var a=h()(e);t&&(a=E()(a).call(a,function(t){return u()(e,t).enumerable})),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)m()(n=T(Object(a),!0)).call(n,function(t){g()(e,t,a[t])});else if(o.a)c()(e,o()(a));else{var l;m()(l=T(Object(a))).call(l,function(t){r()(e,t,u()(a,t))})}}return e}class D extends k.a.Component{render(){let e=this.props,t=e.route,n=e.title,a=e.containerStyle,r=e.titleStyle;return k.a.createElement("div",{className:"blockComponent",style:a},k.a.createElement(O.a,{to:t},k.a.createElement("p",{style:r},n)))}}class H extends k.a.Component{render(){return k.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class M extends k.a.Component{render(){return k.a.createElement("div",{className:"label"},k.a.createElement("p",null,k.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class N extends k.a.Component{render(){return k.a.createElement("section",{className:"paragraph",style:$({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class S extends k.a.Component{render(){return k.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},k.a.createElement("pre",null,this.props.content))}}class V extends k.a.Component{render(){var e;return k.a.createElement("div",{className:"listItem"},k.a.createElement("ul",null,y()(e=this.props.list).call(e,(e,t)=>k.a.createElement("li",{key:t},e))))}}},173:function(e,t,n){},312:function(e,t,n){e.exports=n.p+"static/media/lifecycle.b3251a15.png"},451:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(171),c=n(172);t.default=class extends r.a.Component{render(){return r.a.createElement(l.a,null,r.a.createElement("div",{style:{padding:"0 10px"}},r.a.createElement(c.f,{title:"\u751f\u547d\u5468\u671f\u94a9\u5b50"}),r.a.createElement("img",{style:{width:"100%"},src:n(312),alt:"lifecycle"}),r.a.createElement(c.e,{style:{background:"#eee",fontSize:"13px"},title:"\u6240\u6709\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u81ea\u52a8\u7ed1\u5b9a this \u4e0a\u4e0b\u6587\u5230\u5b9e\u4f8b\u4e2d\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u8bbf\u95ee\u6570\u636e\uff0c\u5bf9\u5c5e\u6027\u548c\u65b9\u6cd5\u8fdb\u884c\u8fd0\u7b97\u3002\u8fd9\u610f\u5473\u7740\u4f60\u4e0d\u80fd\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u6765\u5b9a\u4e49\u4e00\u4e2a\u751f\u547d\u5468\u671f\u65b9\u6cd5 (\u4f8b\u5982 created: () => this.fetchTodos())\u3002\u8fd9\u662f\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a\u4e86\u7236\u4e0a\u4e0b\u6587\uff0c\u56e0\u6b64 this \u4e0e\u4f60\u671f\u5f85\u7684 Vue \u5b9e\u4f8b\u4e0d\u540c\uff0cthis.fetchTodos \u7684\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"}),r.a.createElement(c.c,{title:"beforeCreate"}),r.a.createElement(c.e,{title:"\u5728\u5b9e\u4f8b\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u6570\u636e\u89c2\u6d4b (data observer) \u548c event/watcher \u4e8b\u4ef6\u914d\u7f6e\u4e4b\u524d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.c,{title:"created"}),r.a.createElement(c.e,{title:"\u5728\u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u88ab\u7acb\u5373\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u5df2\u5b8c\u6210\u4ee5\u4e0b\u7684\u914d\u7f6e\uff1a\u6570\u636e\u89c2\u6d4b (data observer)\uff0c\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u8fd0\u7b97\uff0cwatch/event \u4e8b\u4ef6\u56de\u8c03\u3002\u7136\u800c\uff0c\u6302\u8f7d\u9636\u6bb5\u8fd8\u6ca1\u5f00\u59cb\uff0c$el \u5c5e\u6027\u76ee\u524d\u4e0d\u53ef\u89c1\u3002"}),r.a.createElement(c.c,{title:"beforeMount"}),r.a.createElement(c.e,{title:"\u5728\u6302\u8f7d\u5f00\u59cb\u4e4b\u524d\u88ab\u8c03\u7528\uff1a\u76f8\u5173\u7684 render \u51fd\u6570\u9996\u6b21\u88ab\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.c,{title:"mounted"}),r.a.createElement(c.e,{title:"el \u88ab\u65b0\u521b\u5efa\u7684 vm.$el \u66ff\u6362\uff0c\u5e76\u6302\u8f7d\u5230\u5b9e\u4f8b\u4e0a\u53bb\u4e4b\u540e\u8c03\u7528\u8be5\u94a9\u5b50\u3002\u5982\u679c root \u5b9e\u4f8b\u6302\u8f7d\u4e86\u4e00\u4e2a\u6587\u6863\u5185\u5143\u7d20\uff0c\u5f53 mounted \u88ab\u8c03\u7528\u65f6 vm.$el \u4e5f\u5728\u6587\u6863\u5185\u3002"}),r.a.createElement(c.e,{title:"\u6ce8\u610f mounted \u4e0d\u4f1a\u627f\u8bfa\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u4e5f\u90fd\u4e00\u8d77\u88ab\u6302\u8f7d\u3002\u5982\u679c\u4f60\u5e0c\u671b\u7b49\u5230\u6574\u4e2a\u89c6\u56fe\u90fd\u6e32\u67d3\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u7528 vm.$nextTick \u66ff\u6362\u6389\uff0c\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.b,{content:"mounted: function () {\n    this.$nextTick(function () {\n        // Code that will run only after the\n        // entire view has been rendered\n    })\n}"}),r.a.createElement(c.c,{title:"beforeUpdate"}),r.a.createElement(c.e,{title:"\u6570\u636e\u66f4\u65b0\u65f6\u8c03\u7528\uff0c\u53d1\u751f\u5728\u865a\u62df DOM \u6253\u8865\u4e01\u4e4b\u524d\u3002\u8fd9\u91cc\u9002\u5408\u5728\u66f4\u65b0\u4e4b\u524d\u8bbf\u95ee\u73b0\u6709\u7684 DOM\uff0c\u6bd4\u5982\u624b\u52a8\u79fb\u9664\u5df2\u6dfb\u52a0\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\uff0c\u56e0\u4e3a\u53ea\u6709\u521d\u6b21\u6e32\u67d3\u4f1a\u5728\u670d\u52a1\u7aef\u8fdb\u884c\u3002"}),r.a.createElement(c.c,{title:"updated"}),r.a.createElement(c.e,{title:"\u7531\u4e8e\u6570\u636e\u66f4\u6539\u5bfc\u81f4\u7684\u865a\u62df DOM \u91cd\u65b0\u6e32\u67d3\u548c\u6253\u8865\u4e01\uff0c\u5728\u8fd9\u4e4b\u540e\u4f1a\u8c03\u7528\u8be5\u94a9\u5b50\u3002"}),r.a.createElement(c.e,{title:"\u5f53\u8fd9\u4e2a\u94a9\u5b50\u88ab\u8c03\u7528\u65f6\uff0c\u7ec4\u4ef6 DOM \u5df2\u7ecf\u66f4\u65b0\uff0c\u6240\u4ee5\u4f60\u73b0\u5728\u53ef\u4ee5\u6267\u884c\u4f9d\u8d56\u4e8e DOM \u7684\u64cd\u4f5c\u3002\u7136\u800c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u907f\u514d\u5728\u6b64\u671f\u95f4\u66f4\u6539\u72b6\u6001\u3002\u5982\u679c\u8981\u76f8\u5e94\u72b6\u6001\u6539\u53d8\uff0c\u901a\u5e38\u6700\u597d\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u6216 watcher \u53d6\u800c\u4ee3\u4e4b\u3002"}),r.a.createElement(c.e,{title:"\u6ce8\u610f updated \u4e0d\u4f1a\u627f\u8bfa\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u4e5f\u90fd\u4e00\u8d77\u88ab\u91cd\u7ed8\u3002\u5982\u679c\u4f60\u5e0c\u671b\u7b49\u5230\u6574\u4e2a\u89c6\u56fe\u90fd\u91cd\u7ed8\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u7528 vm.$nextTick \u66ff\u6362\u6389\uff0c\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.b,{content:"updated: function () {\n    this.$nextTick(function () {\n        // Code that will run only after the\n        // entire view has been re-rendered\n    })\n}"}),r.a.createElement(c.c,{title:"activated"}),r.a.createElement(c.e,{title:"keep-alive \u7ec4\u4ef6\u6fc0\u6d3b\u65f6\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.c,{title:"deactivated"}),r.a.createElement(c.e,{title:"keep-alive \u7ec4\u4ef6\u505c\u7528\u65f6\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.c,{title:"beforeDestroy"}),r.a.createElement(c.e,{title:"\u5b9e\u4f8b\u9500\u6bc1\u4e4b\u524d\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u4ecd\u7136\u5b8c\u5168\u53ef\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.c,{title:"destroyed"}),r.a.createElement(c.e,{title:"Vue \u5b9e\u4f8b\u9500\u6bc1\u540e\u8c03\u7528\u3002\u8c03\u7528\u540e\uff0cVue \u5b9e\u4f8b\u6307\u793a\u7684\u6240\u6709\u4e1c\u897f\u90fd\u4f1a\u89e3\u7ed1\u5b9a\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u4f1a\u88ab\u79fb\u9664\uff0c\u6240\u6709\u7684\u5b50\u5b9e\u4f8b\u4e5f\u4f1a\u88ab\u9500\u6bc1\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),r.a.createElement(c.c,{title:"errorCaptured"}),r.a.createElement(c.e,{title:"\u5f53\u6355\u83b7\u4e00\u4e2a\u6765\u81ea\u5b50\u5b59\u7ec4\u4ef6\u7684\u9519\u8bef\u65f6\u88ab\u8c03\u7528\u3002\u6b64\u94a9\u5b50\u4f1a\u6536\u5230\u4e09\u4e2a\u53c2\u6570\uff1a\u9519\u8bef\u5bf9\u8c61\u3001\u53d1\u751f\u9519\u8bef\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u4ee5\u53ca\u4e00\u4e2a\u5305\u542b\u9519\u8bef\u6765\u6e90\u4fe1\u606f\u7684\u5b57\u7b26\u4e32\u3002\u6b64\u94a9\u5b50\u53ef\u4ee5\u8fd4\u56de false \u4ee5\u963b\u6b62\u8be5\u9519\u8bef\u7ee7\u7eed\u5411\u4e0a\u4f20\u64ad\u3002"})))}}}}]);