(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{171:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(65),s=(0,n(25).createHashHistory)();t.a=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement(r.f,{mode:"light",icon:"#/Home"===window.location.hash?"":l.a.createElement(r.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{s.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return $}),n.d(t,"g",function(){return D}),n.d(t,"c",function(){return M}),n.d(t,"e",function(){return T}),n.d(t,"b",function(){return N}),n.d(t,"d",function(){return S}),n.d(t,"f",function(){return H});var a=n(178),l=n.n(a),r=n(179),s=n.n(r),c=n(180),i=n.n(c),m=n(181),o=n.n(m),u=n(182),d=n.n(u),p=n(183),E=n.n(p),h=n(184),v=n.n(h),g=n(185),b=n.n(g),f=n(174),x=n.n(f),V=n(186),w=n.n(V),y=n(0),O=n.n(y),k=n(232);n(173);function C(e,t){var n=b()(e);if(v.a){var a=v()(e);t&&(a=E()(a).call(a,function(t){return d()(e,t).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)o()(n=C(Object(a),!0)).call(n,function(t){w()(e,t,a[t])});else if(i.a)s()(e,i()(a));else{var r;o()(r=C(Object(a))).call(r,function(t){l()(e,t,d()(a,t))})}}return e}class $ extends O.a.Component{render(){var e=this.props,t=e.route,n=e.title,a=e.containerStyle,l=e.titleStyle;return O.a.createElement("div",{className:"blockComponent",style:a},O.a.createElement(k.a,{to:t},O.a.createElement("p",{style:l},n)))}}class D extends O.a.Component{render(){return O.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class M extends O.a.Component{render(){return O.a.createElement("div",{className:"label"},O.a.createElement("p",null,O.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class T extends O.a.Component{render(){return O.a.createElement("section",{className:"paragraph",style:j({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class N extends O.a.Component{render(){return O.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},O.a.createElement("pre",null,this.props.content))}}class S extends O.a.Component{render(){var e;return O.a.createElement("div",{className:"listItem"},O.a.createElement("ul",null,x()(e=this.props.list).call(e,(e,t)=>O.a.createElement("li",{key:t},e))))}}class H extends O.a.Component{render(){var e=this.props,t=e.header,n=e.data;return O.a.createElement("div",{className:"renderTable"},O.a.createElement("table",null,O.a.createElement("thead",null,O.a.createElement("tr",null,x()(t).call(t,(e,t)=>O.a.createElement("th",{key:t},e)))),O.a.createElement("tbody",null,x()(n).call(n,(e,t)=>O.a.createElement("tr",{key:t},x()(e).call(e,(e,t)=>O.a.createElement("td",{key:t},e)))))))}}},173:function(e,t,n){},317:function(e,t,n){e.exports=n.p+"static/media/responsiveData.5de7af21.png"},454:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(171),s=n(172);t.default=class extends l.a.Component{render(){return l.a.createElement(r.a,null,l.a.createElement("div",{style:{padding:"0 10px"}},l.a.createElement(s.g,{title:"vue\u54cd\u5e94\u5f0f\u539f\u7406"}),l.a.createElement(s.e,{title:"Vue \u6700\u72ec\u7279\u7684\u7279\u6027\u4e4b\u4e00\uff0c\u662f\u5176\u975e\u4fb5\u5165\u6027\u7684\u54cd\u5e94\u5f0f\u7cfb\u7edf\u3002\u6570\u636e\u6a21\u578b\u4ec5\u4ec5\u662f\u666e\u901a\u7684 JavaScript \u5bf9\u8c61\u3002\u800c\u5f53\u4f60\u4fee\u6539\u5b83\u4eec\u65f6\uff0c\u89c6\u56fe\u4f1a\u8fdb\u884c\u66f4\u65b0"}),l.a.createElement(s.c,{title:"\u5982\u4f55\u8ffd\u8e2a\u53d8\u5316"}),l.a.createElement(s.e,{title:"\u5f53\u4f60\u628a\u4e00\u4e2a\u666e\u901a\u7684 JavaScript \u5bf9\u8c61\u4f20\u5165 Vue \u5b9e\u4f8b\u4f5c\u4e3a data \u9009\u9879\uff0cVue \u5c06\u904d\u5386\u6b64\u5bf9\u8c61\u6240\u6709\u7684\u5c5e\u6027\uff0c\u5e76\u4f7f\u7528 Object.defineProperty \u628a\u8fd9\u4e9b\u5c5e\u6027\u5168\u90e8\u8f6c\u4e3a getter/setter\u3002Object.defineProperty \u662f ES5 \u4e2d\u4e00\u4e2a\u65e0\u6cd5 shim \u7684\u7279\u6027\uff0c\u8fd9\u4e5f\u5c31\u662f Vue \u4e0d\u652f\u6301 IE8 \u4ee5\u53ca\u66f4\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\u7684\u539f\u56e0\u3002"}),l.a.createElement(s.e,{title:"\u8fd9\u4e9b getter/setter \u5bf9\u7528\u6237\u6765\u8bf4\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u4f46\u662f\u5728\u5185\u90e8\u5b83\u4eec\u8ba9 Vue \u80fd\u591f\u8ffd\u8e2a\u4f9d\u8d56\uff0c\u5728\u5c5e\u6027\u88ab\u8bbf\u95ee\u548c\u4fee\u6539\u65f6\u901a\u77e5\u53d8\u66f4\u3002\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e0d\u540c\u6d4f\u89c8\u5668\u5728\u63a7\u5236\u53f0\u6253\u5370\u6570\u636e\u5bf9\u8c61\u65f6\u5bf9 getter/setter \u7684\u683c\u5f0f\u5316\u5e76\u4e0d\u540c\uff0c\u6240\u4ee5\u5efa\u8bae\u5b89\u88c5 vue-devtools \u6765\u83b7\u53d6\u5bf9\u68c0\u67e5\u6570\u636e\u66f4\u52a0\u53cb\u597d\u7684\u7528\u6237\u754c\u9762\u3002"}),l.a.createElement(s.e,{title:"\u6bcf\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u90fd\u5bf9\u5e94\u4e00\u4e2a watcher \u5b9e\u4f8b\uff0c\u5b83\u4f1a\u5728\u7ec4\u4ef6\u6e32\u67d3\u7684\u8fc7\u7a0b\u4e2d\u628a\u201c\u63a5\u89e6\u201d\u8fc7\u7684\u6570\u636e\u5c5e\u6027\u8bb0\u5f55\u4e3a\u4f9d\u8d56\u3002\u4e4b\u540e\u5f53\u4f9d\u8d56\u9879\u7684 setter \u89e6\u53d1\u65f6\uff0c\u4f1a\u901a\u77e5 watcher\uff0c\u4ece\u800c\u4f7f\u5b83\u5173\u8054\u7684\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002"}),l.a.createElement("img",{style:{width:"100%"},src:n(317),alt:"responsiveData"}),l.a.createElement(s.c,{title:"\u68c0\u6d4b\u53d8\u5316\u7684\u6ce8\u610f\u4e8b\u9879"}),l.a.createElement(s.e,{title:"\u53d7\u73b0\u4ee3 JavaScript \u7684\u9650\u5236 (\u800c\u4e14 Object.observe \u4e5f\u5df2\u7ecf\u88ab\u5e9f\u5f03)\uff0cVue \u65e0\u6cd5\u68c0\u6d4b\u5230\u5bf9\u8c61\u5c5e\u6027\u7684\u6dfb\u52a0\u6216\u5220\u9664\u3002\u7531\u4e8e Vue \u4f1a\u5728\u521d\u59cb\u5316\u5b9e\u4f8b\u65f6\u5bf9\u5c5e\u6027\u6267\u884c getter/setter \u8f6c\u5316\uff0c\u6240\u4ee5\u5c5e\u6027\u5fc5\u987b\u5728 data \u5bf9\u8c61\u4e0a\u5b58\u5728\u624d\u80fd\u8ba9 Vue \u5c06\u5b83\u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u7684\u3002\u4f8b\u5982\uff1a"}),l.a.createElement(s.b,{content:"var vm = new Vue({\n    data:{\n        a:1\n    }\n})\n  \n// vm.a \u662f\u54cd\u5e94\u5f0f\u7684\n\nvm.b = 2\n// vm.b \u662f\u975e\u54cd\u5e94\u5f0f\u7684"}),l.a.createElement(s.e,{title:"\u5bf9\u4e8e\u5df2\u7ecf\u521b\u5efa\u7684\u5b9e\u4f8b\uff0cVue \u4e0d\u5141\u8bb8\u52a8\u6001\u6dfb\u52a0\u6839\u7ea7\u522b\u7684\u54cd\u5e94\u5f0f\u5c5e\u6027\u3002\u4f46\u662f\uff0c\u53ef\u4ee5\u4f7f\u7528 Vue.set(object, propertyName, value) \u65b9\u6cd5\u5411\u5d4c\u5957\u5bf9\u8c61\u6dfb\u52a0\u54cd\u5e94\u5f0f\u5c5e\u6027\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\uff1a"}),l.a.createElement(s.b,{content:"Vue.set(vm.someObject, 'b', 2)"}),l.a.createElement(s.e,{title:"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 vm.$set \u5b9e\u4f8b\u65b9\u6cd5\uff0c\u8fd9\u4e5f\u662f\u5168\u5c40 Vue.set \u65b9\u6cd5\u7684\u522b\u540d\uff1a"}),l.a.createElement(s.b,{content:"this.$set(this.someObject,'b',2)"}),l.a.createElement(s.e,{title:"\u6709\u65f6\u4f60\u53ef\u80fd\u9700\u8981\u4e3a\u5df2\u6709\u5bf9\u8c61\u8d4b\u503c\u591a\u4e2a\u65b0\u5c5e\u6027\uff0c\u6bd4\u5982\u4f7f\u7528 Object.assign() \u6216 _.extend()\u3002\u4f46\u662f\uff0c\u8fd9\u6837\u6dfb\u52a0\u5230\u5bf9\u8c61\u4e0a\u7684\u65b0\u5c5e\u6027\u4e0d\u4f1a\u89e6\u53d1\u66f4\u65b0\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u7528\u539f\u5bf9\u8c61\u4e0e\u8981\u6df7\u5408\u8fdb\u53bb\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u4e00\u8d77\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002"}),l.a.createElement(s.b,{content:"// \u4ee3\u66ff Object.assign(this.someObject, { a: 1, b: 2 })\nthis.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })"}),l.a.createElement(s.c,{title:"\u58f0\u660e\u54cd\u5e94\u5f0f\u5c5e\u6027"}),l.a.createElement(s.e,{title:"\u7531\u4e8e Vue \u4e0d\u5141\u8bb8\u52a8\u6001\u6dfb\u52a0\u6839\u7ea7\u54cd\u5e94\u5f0f\u5c5e\u6027\uff0c\u6240\u4ee5\u4f60\u5fc5\u987b\u5728\u521d\u59cb\u5316\u5b9e\u4f8b\u524d\u58f0\u660e\u6240\u6709\u6839\u7ea7\u54cd\u5e94\u5f0f\u5c5e\u6027\uff0c\u54ea\u6015\u53ea\u662f\u4e00\u4e2a\u7a7a\u503c\uff1a"}),l.a.createElement(s.b,{content:"var vm = new Vue({\n    data: {\n        // \u58f0\u660e message \u4e3a\u4e00\u4e2a\u7a7a\u503c\u5b57\u7b26\u4e32\n        message: ''\n    },\n    template: '<div>{{ message }}</div>'\n})\n// \u4e4b\u540e\u8bbe\u7f6e message\nvm.message = 'Hello!"}),l.a.createElement(s.e,{title:"\u5982\u679c\u4f60\u672a\u5728 data \u9009\u9879\u4e2d\u58f0\u660e message\uff0cVue \u5c06\u8b66\u544a\u4f60\u6e32\u67d3\u51fd\u6570\u6b63\u5728\u8bd5\u56fe\u8bbf\u95ee\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u3002"}),l.a.createElement(s.e,{title:"\u8fd9\u6837\u7684\u9650\u5236\u5728\u80cc\u540e\u662f\u6709\u5176\u6280\u672f\u539f\u56e0\u7684\uff0c\u5b83\u6d88\u9664\u4e86\u5728\u4f9d\u8d56\u9879\u8ddf\u8e2a\u7cfb\u7edf\u4e2d\u7684\u4e00\u7c7b\u8fb9\u754c\u60c5\u51b5\uff0c\u4e5f\u4f7f Vue \u5b9e\u4f8b\u80fd\u66f4\u597d\u5730\u914d\u5408\u7c7b\u578b\u68c0\u67e5\u7cfb\u7edf\u5de5\u4f5c\u3002\u4f46\u4e0e\u6b64\u540c\u65f6\u5728\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u65b9\u9762\u4e5f\u6709\u4e00\u70b9\u91cd\u8981\u7684\u8003\u8651\uff1adata \u5bf9\u8c61\u5c31\u50cf\u7ec4\u4ef6\u72b6\u6001\u7684\u7ed3\u6784 (schema)\u3002\u63d0\u524d\u58f0\u660e\u6240\u6709\u7684\u54cd\u5e94\u5f0f\u5c5e\u6027\uff0c\u53ef\u4ee5\u8ba9\u7ec4\u4ef6\u4ee3\u7801\u5728\u672a\u6765\u4fee\u6539\u6216\u7ed9\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u9605\u8bfb\u65f6\u66f4\u6613\u4e8e\u7406\u89e3\u3002"}),l.a.createElement(s.c,{title:"\u5f02\u6b65\u66f4\u65b0\u961f\u5217"}),l.a.createElement(s.e,{title:"\u53ef\u80fd\u4f60\u8fd8\u6ca1\u6709\u6ce8\u610f\u5230\uff0cVue \u5728\u66f4\u65b0 DOM \u65f6\u662f\u5f02\u6b65\u6267\u884c\u7684\u3002\u53ea\u8981\u4fa6\u542c\u5230\u6570\u636e\u53d8\u5316\uff0cVue \u5c06\u5f00\u542f\u4e00\u4e2a\u961f\u5217\uff0c\u5e76\u7f13\u51b2\u5728\u540c\u4e00\u4e8b\u4ef6\u5faa\u73af\u4e2d\u53d1\u751f\u7684\u6240\u6709\u6570\u636e\u53d8\u66f4\u3002\u5982\u679c\u540c\u4e00\u4e2a watcher \u88ab\u591a\u6b21\u89e6\u53d1\uff0c\u53ea\u4f1a\u88ab\u63a8\u5165\u5230\u961f\u5217\u4e2d\u4e00\u6b21\u3002\u8fd9\u79cd\u5728\u7f13\u51b2\u65f6\u53bb\u9664\u91cd\u590d\u6570\u636e\u5bf9\u4e8e\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u548c DOM \u64cd\u4f5c\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u7136\u540e\uff0c\u5728\u4e0b\u4e00\u4e2a\u7684\u4e8b\u4ef6\u5faa\u73af\u201ctick\u201d\u4e2d\uff0cVue \u5237\u65b0\u961f\u5217\u5e76\u6267\u884c\u5b9e\u9645 (\u5df2\u53bb\u91cd\u7684) \u5de5\u4f5c\u3002Vue \u5728\u5185\u90e8\u5bf9\u5f02\u6b65\u961f\u5217\u5c1d\u8bd5\u4f7f\u7528\u539f\u751f\u7684 Promise.then\u3001MutationObserver \u548c setImmediate\uff0c\u5982\u679c\u6267\u884c\u73af\u5883\u4e0d\u652f\u6301\uff0c\u5219\u4f1a\u91c7\u7528 setTimeout(fn, 0) \u4ee3\u66ff\u3002"}),l.a.createElement(s.e,{title:"\u4f8b\u5982\uff0c\u5f53\u4f60\u8bbe\u7f6e vm.someData = new value\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u4f1a\u7acb\u5373\u91cd\u65b0\u6e32\u67d3\u3002\u5f53\u5237\u65b0\u961f\u5217\u65f6\uff0c\u7ec4\u4ef6\u4f1a\u5728\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u201ctick\u201d\u4e2d\u66f4\u65b0\u3002\u591a\u6570\u60c5\u51b5\u6211\u4eec\u4e0d\u9700\u8981\u5173\u5fc3\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u4f46\u662f\u5982\u679c\u4f60\u60f3\u57fa\u4e8e\u66f4\u65b0\u540e\u7684 DOM \u72b6\u6001\u6765\u505a\u70b9\u4ec0\u4e48\uff0c\u8fd9\u5c31\u53ef\u80fd\u4f1a\u6709\u4e9b\u68d8\u624b\u3002\u867d\u7136 Vue.js \u901a\u5e38\u9f13\u52b1\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u201c\u6570\u636e\u9a71\u52a8\u201d\u7684\u65b9\u5f0f\u601d\u8003\uff0c\u907f\u514d\u76f4\u63a5\u63a5\u89e6 DOM\uff0c\u4f46\u662f\u6709\u65f6\u6211\u4eec\u5fc5\u987b\u8981\u8fd9\u4e48\u505a\u3002\u4e3a\u4e86\u5728\u6570\u636e\u53d8\u5316\u4e4b\u540e\u7b49\u5f85 Vue \u5b8c\u6210\u66f4\u65b0 DOM\uff0c\u53ef\u4ee5\u5728\u6570\u636e\u53d8\u5316\u4e4b\u540e\u7acb\u5373\u4f7f\u7528 Vue.nextTick(callback)\u3002\u8fd9\u6837\u56de\u8c03\u51fd\u6570\u5c06\u5728 DOM \u66f4\u65b0\u5b8c\u6210\u540e\u88ab\u8c03\u7528\u3002\u4f8b\u5982\uff1a"}),l.a.createElement(s.b,{content:'<div id="example">{{message}}</div>'}),l.a.createElement(s.b,{content:"var vm = new Vue({\n    el: '#example',\n    data: {\n        message: '123'\n    }\n})\nvm.message = 'new message' // \u66f4\u6539\u6570\u636e\nvm.$el.textContent === 'new message' // false\nVue.nextTick(function () {\n    vm.$el.textContent === 'new message' // true\n})"}),l.a.createElement(s.e,{title:"\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528 vm.$nextTick() \u5b9e\u4f8b\u65b9\u6cd5\u7279\u522b\u65b9\u4fbf\uff0c\u56e0\u4e3a\u5b83\u4e0d\u9700\u8981\u5168\u5c40 Vue\uff0c\u5e76\u4e14\u56de\u8c03\u51fd\u6570\u4e2d\u7684 this \u5c06\u81ea\u52a8\u7ed1\u5b9a\u5230\u5f53\u524d\u7684 Vue \u5b9e\u4f8b\u4e0a\uff1a"}),l.a.createElement(s.b,{content:"Vue.component('example', {\n    template: '<span>{{ message }}</span>',\n    data: function () {\n        return {\n            message: '\u672a\u66f4\u65b0'\n        }\n    },\n    methods: {\n        updateMessage: function () {\n            this.message = '\u5df2\u66f4\u65b0'\n            console.log(this.$el.textContent) // => '\u672a\u66f4\u65b0'\n            this.$nextTick(function () {\n                console.log(this.$el.textContent) // => '\u5df2\u66f4\u65b0'\n            })\n        }\n    }\n})"}),l.a.createElement(s.e,{title:"\u56e0\u4e3a $nextTick() \u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u4f7f\u7528\u65b0\u7684 ES2017 async/await \u8bed\u6cd5\u5b8c\u6210\u76f8\u540c\u7684\u4e8b\u60c5\uff1a"}),l.a.createElement(s.b,{content:"methods: {\n    updateMessage: async function () {\n        this.message = '\u5df2\u66f4\u65b0'\n        console.log(this.$el.textContent) // => '\u672a\u66f4\u65b0'\n        await this.$nextTick()\n        console.log(this.$el.textContent) // => '\u5df2\u66f4\u65b0'\n    }\n}"})))}}}}]);