(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{171:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(65),m=(0,n(25).createHashHistory)();t.a=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement(r.f,{mode:"light",icon:"#/Home"===window.location.hash?"":l.a.createElement(r.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{m.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return z}),n.d(t,"g",function(){return H}),n.d(t,"c",function(){return N}),n.d(t,"e",function(){return P}),n.d(t,"b",function(){return L}),n.d(t,"d",function(){return T}),n.d(t,"f",function(){return D});var a=n(178),l=n.n(a),r=n(179),m=n.n(r),c=n(180),i=n.n(c),p=n(181),o=n.n(p),s=n(182),x=n.n(s),d=n(183),E=n.n(d),u=n(184),h=n.n(u),f=n(185),y=n.n(f),g=n(174),I=n.n(g),b=n(186),v=n.n(b),C=n(0),S=n.n(C),w=n(232);n(173);function W(e,t){var n=y()(e);if(h.a){var a=h()(e);t&&(a=E()(a).call(a,function(t){return x()(e,t).enumerable})),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)o()(n=W(Object(a),!0)).call(n,function(t){v()(e,t,a[t])});else if(i.a)m()(e,i()(a));else{var r;o()(r=W(Object(a))).call(r,function(t){l()(e,t,x()(a,t))})}}return e}class z extends S.a.Component{render(){var e=this.props,t=e.route,n=e.title,a=e.containerStyle,l=e.titleStyle;return S.a.createElement("div",{className:"blockComponent",style:a},S.a.createElement(w.a,{to:t},S.a.createElement("p",{style:l},n)))}}class H extends S.a.Component{render(){return S.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class N extends S.a.Component{render(){return S.a.createElement("div",{className:"label"},S.a.createElement("p",null,S.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class P extends S.a.Component{render(){return S.a.createElement("section",{className:"paragraph",style:k({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class L extends S.a.Component{render(){return S.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},S.a.createElement("pre",null,this.props.content))}}class T extends S.a.Component{render(){var e;return S.a.createElement("div",{className:"listItem"},S.a.createElement("ul",null,I()(e=this.props.list).call(e,(e,t)=>S.a.createElement("li",{key:t},e))))}}class D extends S.a.Component{render(){var e=this.props,t=e.header,n=e.data;return S.a.createElement("div",{className:"renderTable"},S.a.createElement("table",null,S.a.createElement("thead",null,S.a.createElement("tr",null,I()(t).call(t,(e,t)=>S.a.createElement("th",{key:t},e)))),S.a.createElement("tbody",null,I()(n).call(n,(e,t)=>S.a.createElement("tr",{key:t},I()(e).call(e,(e,t)=>S.a.createElement("td",{key:t},e)))))))}}},173:function(e,t,n){},442:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(171),m=n(172);t.default=class extends l.a.Component{render(){return l.a.createElement(r.a,null,l.a.createElement("div",{style:{padding:"0 10px"}},l.a.createElement(m.g,{title:"css\u4e2d\u7684px\u3001em\u3001rem \u8be6\u89e3"}),l.a.createElement(m.c,{title:"\u6982\u5ff5\u4ecb\u7ecd\uff1a"}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"1\u3001px (pixel\uff0c\u50cf\u7d20)\uff1a"}),l.a.createElement(m.e,{title:"\u662f\u4e00\u4e2a\u865a\u62df\u957f\u5ea6\u5355\u4f4d\uff0c\u662f\u8ba1\u7b97\u673a\u7cfb\u7edf\u7684\u6570\u5b57\u5316\u56fe\u50cf\u957f\u5ea6\u5355\u4f4d\uff0c\u5982\u679cpx\u8981\u6362\u7b97\u6210\u7269\u7406\u957f\u5ea6\uff0c\u9700\u8981\u6307\u5b9a\u7cbe\u5ea6DPI(Dots Per Inch\uff0c\u6bcf\u82f1\u5bf8\u50cf\u7d20\u6570)\uff0c\u5728\u626b\u63cf\u6253\u5370\u65f6\u4e00\u822c\u90fd\u6709DPI\u53ef\u9009\u3002Windows\u7cfb\u7edf\u9ed8\u8ba4\u662f96dpi\uff0cApple\u7cfb\u7edf\u9ed8\u8ba4\u662f72dpi\u3002"}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"2\u3001em(\u76f8\u5bf9\u957f\u5ea6\u5355\u4f4d\uff0c\u76f8\u5bf9\u4e8e\u5f53\u524d\u5bf9\u8c61\u5185\u6587\u672c\u7684\u5b57\u4f53\u5c3a\u5bf8)\uff1a"}),l.a.createElement(m.e,{title:"\u662f\u4e00\u4e2a\u76f8\u5bf9\u957f\u5ea6\u5355\u4f4d\uff0c\u6700\u521d\u662f\u6307\u5b57\u6bcdM\u7684\u5bbd\u5ea6\uff0c\u6545\u540dem\u3002\u73b0\u6307\u7684\u662f\u5b57\u7b26\u5bbd\u5ea6\u7684\u500d\u6570\uff0c\u7528\u6cd5\u7c7b\u4f3c\u767e\u5206\u6bd4\uff0c\u5982\uff1a0.8em, 1.2em,2em\u7b49\u3002\u901a\u5e381em=16px\u3002"}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"3\u3001pt (point\uff0c\u78c5)\uff1a"}),l.a.createElement(m.e,{title:"\u662f\u4e00\u4e2a\u7269\u7406\u957f\u5ea6\u5355\u4f4d\uff0c\u6307\u7684\u662f72\u5206\u4e4b\u4e00\u82f1\u5bf8\u3002pt=1/72(\u82f1\u5bf8), px=1/dpi(\u82f1\u5bf8)"}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"4\u3001rem\uff08root em\uff0c\u6839em\uff09\uff1a"}),l.a.createElement(m.e,{title:"\u662fCSS3\u65b0\u589e\u7684\u4e00\u4e2a\u76f8\u5bf9\u5355\u4f4d\uff0c\u8fd9\u4e2a\u5355\u4f4d\u5f15\u8d77\u4e86\u5e7f\u6cdb\u5173\u6ce8\u3002\u8fd9\u4e2a\u5355\u4f4d\u4e0eem\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f\u533a\u522b\u5728\u4e8e\u4f7f\u7528rem\u4e3a\u5143\u7d20\u8bbe\u5b9a\u5b57\u4f53\u5927\u5c0f\u65f6\uff0c\u4ecd\u7136\u662f\u76f8\u5bf9\u5927\u5c0f\uff0c\u4f46\u76f8\u5bf9\u7684\u53ea\u662fHTML\u6839\u5143\u7d20\u3002\u8fd9\u4e2a\u5355\u4f4d\u53ef\u8c13\u96c6\u76f8\u5bf9\u5927\u5c0f\u548c\u7edd\u5bf9\u5927\u5c0f\u7684\u4f18\u70b9\u4e8e\u4e00\u8eab\uff0c\u901a\u8fc7\u5b83\u65e2\u53ef\u4ee5\u505a\u5230\u53ea\u4fee\u6539\u6839\u5143\u7d20\u5c31\u6210\u6bd4\u4f8b\u5730\u8c03\u6574\u6240\u6709\u5b57\u4f53\u5927\u5c0f\uff0c\u53c8\u53ef\u4ee5\u907f\u514d\u5b57\u4f53\u5927\u5c0f\u9010\u5c42\u590d\u5408\u7684\u8fde\u9501\u53cd\u5e94\u3002\u76ee\u524d\uff0c\u9664\u4e86IE8\u53ca\u66f4\u65e9\u7248\u672c\u5916\uff0c\u6240\u6709\u6d4f\u89c8\u5668\u5747\u5df2\u652f\u6301rem\u3002\u5bf9\u4e8e\u4e0d\u652f\u6301\u5b83\u7684\u6d4f\u89c8\u5668\uff0c\u5e94\u5bf9\u65b9\u6cd5\u4e5f\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u591a\u5199\u4e00\u4e2a\u7edd\u5bf9\u5355\u4f4d\u7684\u58f0\u660e\u3002\u8fd9\u4e9b\u6d4f\u89c8\u5668\u4f1a\u5ffd\u7565\u7528rem\u8bbe\u5b9a\u7684\u5b57\u4f53\u5927\u5c0f\u3002"}),l.a.createElement(m.c,{title:"em\u4e0epx\u7684\u95ee\u9898"}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"px\u662f\u4f55\u7269\uff1f"}),l.a.createElement(m.e,{title:"px\u50cf\u7d20\uff08Pixel\uff09\u3002\u76f8\u5bf9\u957f\u5ea6\u5355\u4f4d\u3002\u50cf\u7d20px\u662f\u76f8\u5bf9\u4e8e\u663e\u793a\u5668\u5c4f\u5e55\u5206\u8fa8\u7387\u800c\u8a00\u7684\u3002(\u5f15\u81eaCSS2.0\u624b\u518c)em\u662f\u76f8\u5bf9\u957f\u5ea6\u5355\u4f4d\u3002\u76f8\u5bf9\u4e8e\u5f53\u524d\u5bf9\u8c61\u5185\u6587\u672c\u7684\u5b57\u4f53\u5c3a\u5bf8\u3002\u5982\u5f53\u524d\u5bf9\u884c\u5185\u6587\u672c\u7684\u5b57\u4f53\u5c3a\u5bf8\u672a\u88ab\u4eba\u4e3a\u8bbe\u7f6e\uff0c\u5219\u76f8\u5bf9\u4e8e\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u5b57\u4f53\u5c3a\u5bf8\u3002(\u5f15\u81eaCSS2.0\u624b\u518c)PX\u7279\u70b9"}),l.a.createElement(m.d,{list:["IE\u65e0\u6cd5\u8c03\u6574\u90a3\u4e9b\u4f7f\u7528px\u4f5c\u4e3a\u5355\u4f4d\u7684\u5b57\u4f53\u5927\u5c0f\uff1b","\u56fd\u5916\u7684\u5927\u90e8\u5206\u7f51\u7ad9\u80fd\u591f\u8c03\u6574\u7684\u539f\u56e0\u5728\u4e8e\u5176\u4f7f\u7528\u4e86em\u6216rem\u4f5c\u4e3a\u5b57\u4f53\u5355\u4f4d\uff1b","Firefox\u80fd\u591f\u8c03\u6574px\u548cem\uff0crem\uff0c\u4f46\u662f96%\u4ee5\u4e0a\u7684\u4e2d\u56fd\u7f51\u6c11\u4f7f\u7528IE\u6d4f\u89c8\u5668(\u6216\u5185\u6838)\u3002"]}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"em\u662f\u4f55\u7269\uff1f"}),l.a.createElement(m.e,{title:"em \u6307\u5b57\u4f53\u9ad8\uff0c\u4efb\u610f\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u5b57\u4f53\u9ad8\u90fd\u662f16px\u3002\u6240\u4ee5\u672a\u7ecf\u8c03\u6574\u7684\u6d4f\u89c8\u5668\u90fd\u7b26\u5408: 1em=16px\u3002\u90a3\u4e4812px=0.75em, 10px=0.625em\u3002\u4e3a\u4e86\u7b80\u5316font -size\u7684\u6362\u7b97\uff0c\u9700\u8981\u5728css\u4e2d\u7684body\u9009\u62e9\u5668\u4e2d\u58f0\u660eFont-size=62.5%\uff0c\u8fd9\u5c31\u4f7fem\u503c\u53d8\u4e3a16px*62.5%=10px, \u8fd9\u683712px=1.2em, 10px=1em, \u4e5f\u5c31\u662f\u8bf4\u53ea\u9700\u8981\u5c06\u4f60\u7684\u539f\u6765\u7684px\u6570\u503c\u9664\u4ee510\uff0c\u7136\u540e\u6362\u4e0aem\u4f5c\u4e3a\u5355\u4f4d\u5c31\u884c\u4e86\u3002"}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"em\u7279\u70b9\uff1a"}),l.a.createElement(m.e,{title:"1em\u6307\u7684\u662f\u4e00\u4e2a\u5b57\u4f53\u7684\u5927\u5c0f\uff0c\u5b83\u4f1a\u7ee7\u627f\u7236\u7ea7\u5143\u7d20\u7684\u5b57\u4f53\u5927\u5c0f\uff0c\u56e0\u6b64\u5e76\u4e0d\u662f\u4e00\u4e2a\u56fa\u5b9a\u7684\u503c\u3002\u4efb\u4f55\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u5b57\u4f53\u5927\u5c0f\u90fd\u662f16px\u3002\u56e0\u6b64\uff0c12px = 0.75em\u3002\u5b9e\u9645\u5e94\u7528\u4e2d\u4e3a\u4e86\u65b9\u4fbf\u6362\u7b97\uff0c\u901a\u5e38\u4f1a\u5982\u4e0b\u8bbe\u7f6e\u6837\u5f0f\uff1a CSS\u4ee3\u7801"}),l.a.createElement(m.b,{content:"html { font-size: 62.5%; }\n"}),l.a.createElement(m.e,{title:"\u8fd9\u6837\uff0c1em = 10px\u3002\u6211\u4eec\u5e38\u7528\u76841.2em\u7406\u8bba\u4e0a\u5c31\u662f12px\u3002\u4f46\u662f\uff0c\u8fd9\u4e2a\u6362\u7b97\u5728IE\u6d4f\u89c8\u5668\u4e0b\u4e0d\u6210\u7acb\uff0c1.2em\u4f1a\u6bd412px\u7a0d\u5927\u4e00\u4e9b\uff0c\u89e3\u51b3\u529e\u6cd5\u662f\u628ahtml\u6807\u7b7e\u6837\u5f0f\u4e2d\u768462.5%\u6539\u621063%\uff0c\u5373\uff1a CSS\u4ee3\u7801"}),l.a.createElement(m.b,{content:"html { font-size: 63%; }\n"}),l.a.createElement(m.e,{title:"\u5728 \u4e2d\u6587\u7684\u6587\u7ae0\u4e2d\uff0c\u4e00\u822c\u4f1a\u5728\u6bb5\u9996\u7a7a\u4e24\u683c\u3002\u5982\u679c\u7528px\u4f5c\u4e3a\u5355\u4f4d\uff0c\u5bf912px\u5b57\u4f53\u6765\u8bf4\u9700\u8981\u7a7a\u51fa24px\uff0c\u5bf914px\u5b57\u4f53\u6765\u8bf4\u9700\u8981\u7a7a\u51fa28px\u2026\u2026\u8fd9\u6837\u6362\u7b97\u975e\u5e38\u4e0d\u901a \u7528\u3002\u5982\u679c\u7528\u4e0aem\u5355\u4f4d\uff0c\u8fd9\u4e2a\u95ee\u9898\u5c31\u5f88\u597d\u89e3\u51b3\u4e86\uff0c1\u4e2a\u5b57\u7684\u5927\u5c0f\u5c31\u662f1em\uff0c\u90a3\u4e24\u4e2a\u5b57\u7684\u5927\u5c0f\u5c31\u662f2em\u3002\u56e0\u6b64\uff0c\u53ea\u9700\u8fd9\u6837\u5b9a\u4e49\u5c31\u884c\u4e86\uff1aCSS\u4ee3\u7801"}),l.a.createElement(m.b,{content:"p { text-indent: 2em; }\n"}),l.a.createElement(m.c,{title:"em\u548cpx\u4e24\u79cd\u5b57\u4f53\u5355\u4f4d\u7684\u533a\u522b"}),l.a.createElement(m.e,{title:"\u5b57\u4f53\u5355\u4f4d\u5e94\u8be5\u7528em\u800c\u4e0d\u7528px\uff0c\u539f\u56e0\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u652f\u6301IE6\u4e0b\u7684\u5b57\u4f53\u7f29\u653e\uff0c\u5728\u9875\u9762\u4e2d\u6309ctrl+\u6eda\u8f6e\uff0c\u5b57\u4f53\u4ee5px\u4e3a\u5355\u4f4d\u7684\u7f51\u7ad9\u6ca1\u6709\u53cd\u5e94\u3002px\u662f\u7edd\u5bf9\u5355\u4f4d\uff0c\u4e0d\u652f\u6301IE\u7684\u7f29\u653e\uff0cem\u662f\u76f8\u5bf9\u5355\u4f4d\u3002\u6211\u5728\u8c03\u6574\u672cblog\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u4e0d\u4ec5\u4ec5\u662f\u5b57\u4f53\uff0c\u5c06\u884c\u8ddd(line-height)\uff0c\u548c\u7eb5\u5411\u9ad8\u5ea6\u7684\u5355\u4f4d\u90fd\u7528em\u3002\u4fdd\u8bc1\u7f29\u653e\u65f6\u5019\u7684\u6574\u4f53\u6027\u3002"}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"em\u6709\u5982\u4e0b\u7279\u70b9\uff1a"}),l.a.createElement(m.d,{list:["em\u7684\u503c\u5e76\u4e0d\u662f\u56fa\u5b9a\u7684\uff1b","em\u4f1a\u7ee7\u627f\u7236\u7ea7\u5143\u7d20\u7684\u5b57\u4f53\u5927\u5c0f\u3002"]}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"em\u91cd\u5199\u6b65\u9aa4\uff1a"}),l.a.createElement(m.d,{list:["body\u9009\u62e9\u5668\u4e2d\u58f0\u660eFont-size=62.5%\uff1b","\u5c06\u4f60\u7684\u539f\u6765\u7684px\u6570\u503c\u9664\u4ee510\uff0c\u7136\u540e\u6362\u4e0aem\u4f5c\u4e3a\u5355\u4f4d\uff1b\u7b80 \u5355\u5427\uff0c\u5982\u679c\u53ea\u9700\u8981\u4ee5\u4e0a\u4e24\u6b65\u5c31\u80fd\u89e3\u51b3\u95ee\u9898\u7684\u8bdd\uff0c\u53ef\u80fd\u5c31\u6ca1\u4eba\u7528px\u4e86\u3002\u7ecf\u8fc7\u4ee5\u4e0a\u4e24\u6b65\uff0c\u4f60\u4f1a\u53d1\u73b0\u4f60\u7684\u7f51\u7ad9\u5b57\u4f53\u5927\u5f97\u51fa\u4e4e\u60f3\u8c61\u3002\u56e0\u4e3aem\u7684\u503c\u4e0d\u56fa\u5b9a\uff0c\u53c8\u4f1a\u7ee7\u627f\u7236\u7ea7 \u5143\u7d20\u7684\u5927\u5c0f\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728content\u8fd9\u4e2adiv\u91cc\u628a\u5b57\u4f53\u5927\u5c0f\u8bbe\u4e3a1.2em, \u4e5f\u5c31\u662f12px\u3002\u7136\u540e\u4f60\u53c8\u628a\u9009\u62e9\u5668p\u7684\u5b57\u4f53\u5927\u5c0f\u4e5f\u8bbe\u4e3a1.2em\uff0c\u4f46\u5982\u679cp\u5c5e\u4e8econtent\u7684\u5b50\u7ea7\u7684\u8bdd\uff0cp\u7684\u5b57\u4f53\u5927\u5c0f\u5c31\u4e0d\u662f12px\uff0c\u800c\u662f1.2em= 1.2 * 12px=14.4px\u3002\u8fd9\u662f\u56e0\u4e3acontent\u7684\u5b57\u4f53\u5927\u5c0f\u88ab\u8bbe\u4e3a1.2em\uff0c\u8fd9\u4e2aem\u503c\u7ee7\u627f\u5176\u7236\u7ea7\u5143\u7d20body\u7684\u5927\u5c0f\uff0c\u4e5f\u5c31\u662f16px * 62.5% * 1.2=12px, \u800cp\u4f5c\u4e3a\u5176\u5b50\u7ea7\uff0cem\u5219\u7ee7\u627fcontent\u7684\u5b57\u4f53\u9ad8\uff0c\u4e5f\u5c31\u662f12px\u3002\u6240\u4ee5p\u76841.2em\u5c31\u4e0d\u518d\u662f12px\uff0c\u800c\u662f14.4px\u3002","\u91cd\u65b0\u8ba1\u7b97\u90a3\u4e9b\u88ab\u653e\u5927\u7684\u5b57\u4f53\u7684em\u6570\u503c\u3002\u907f\u514d\u5b57\u4f53\u5927\u5c0f\u7684\u91cd\u590d\u58f0\u660e\uff0c\u4e5f\u5c31\u662f\u907f\u514d\u4ee5\u4e0a\u63d0\u5230\u76841.2 * 1.2= 1.44\u7684\u73b0\u8c61\u3002\u6bd4\u5982\u8bf4\u4f60\u5728#content\u4e2d\u58f0\u660e\u4e86\u5b57\u4f53\u5927\u5c0f\u4e3a1.2em\uff0c\u90a3\u4e48\u5728\u58f0\u660ep\u7684\u5b57\u4f53\u5927\u5c0f\u65f6\u5c31\u53ea\u80fd\u662f1em\uff0c\u800c\u4e0d\u662f1.2em, \u56e0\u4e3a\u6b64em\u975e\u5f7cem\uff0c\u5b83\u56e0\u7ee7\u627f#content\u7684\u5b57\u4f53\u9ad8\u800c\u53d8\u4e3a\u4e861em=12px\u3002"]}),l.a.createElement(m.e,{style:{textIndent:0,fontWeight:700},title:"IE\u4e2d\u768412px\u6c49\u5b57\uff1a"}),l.a.createElement(m.e,{title:"\u5b8c\u6210 em\u8f6c\u6362\u65f6\u8fd8\u53d1\u73b0\u4e86\u4e00\u4e2a\u8be1\u5f02\u7684\u73b0\u8c61\uff0c\u5c31\u662f\u7531\u4ee5\u4e0a\u65b9\u6cd5\u5f97\u5230\u768412px(1.2em)\u5927\u5c0f\u7684\u6c49\u5b57\u5728IE\u4e2d\u5e76\u4e0d\u7b49\u4e8e\u76f4\u63a5\u752812px\u5b9a\u4e49\u7684\u5b57\u4f53\u5927\u5c0f\uff0c\u800c \u662f\u7a0d\u5927\u4e00\u70b9\u3002\u4f60\u53ea\u9700\u5728body\u9009\u62e9\u5668\u4e2d\u628a62.5%\u6362\u621063%\u5c31\u80fd\u6b63\u5e38\u663e\u793a\u4e86\u3002\u539f\u56e0\u53ef\u80fd\u662fIE\u5904\u7406\u6c49\u5b57\u65f6\uff0c\u5bf9\u4e8e\u6d6e\u70b9\u7684\u53d6\u503c\u7cbe\u786e\u5ea6\u6709 \u9650\u3002\u672c\u73b0\u8c61\u53ea\u53d1\u751f\u572812px\u7684\u6c49\u5b57\uff0c\u82f1\u6587\u4e0d\u5b58\u5728\u6b64\u73b0\u8c61\u3002\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u628astyle.css\u4e2d\u768462.5%\u6362 \u4e3a63%\u3002"}),l.a.createElement(m.c,{title:"rem\u7279\u70b9"}),l.a.createElement(m.e,{title:"rem\u662fCSS3\u65b0\u589e\u7684\u4e00\u4e2a\u76f8\u5bf9\u5355\u4f4d\uff08root em\uff0c\u6839em\uff09\uff0c\u8fd9\u4e2a\u5355\u4f4d\u5f15\u8d77\u4e86\u5e7f\u6cdb\u5173\u6ce8\u3002\u8fd9\u4e2a\u5355\u4f4d\u4e0eem\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f\u533a\u522b\u5728\u4e8e\u4f7f\u7528rem\u4e3a\u5143\u7d20\u8bbe\u5b9a\u5b57\u4f53\u5927\u5c0f\u65f6\uff0c\u4ecd\u7136\u662f\u76f8\u5bf9\u5927\u5c0f\uff0c\u4f46\u76f8\u5bf9\u7684\u53ea\u662fHTML\u6839\u5143\u7d20\u3002\u8fd9\u4e2a\u5355\u4f4d\u53ef\u8c13\u96c6\u76f8\u5bf9\u5927\u5c0f\u548c\u7edd\u5bf9\u5927\u5c0f\u7684\u4f18\u70b9\u4e8e\u4e00\u8eab\uff0c\u901a\u8fc7\u5b83\u65e2\u53ef\u4ee5\u505a\u5230\u53ea\u4fee\u6539\u6839\u5143\u7d20\u5c31\u6210\u6bd4\u4f8b\u5730\u8c03\u6574\u6240\u6709\u5b57\u4f53\u5927\u5c0f\uff0c\u53c8\u53ef\u4ee5\u907f\u514d\u5b57\u4f53\u5927\u5c0f\u9010\u5c42\u590d\u5408\u7684\u8fde\u9501\u53cd\u5e94\u3002\u76ee\u524d\uff0c\u9664\u4e86IE8\u53ca\u66f4\u65e9\u7248\u672c\u5916\uff0c\u6240\u6709\u6d4f\u89c8\u5668\u5747\u5df2\u652f\u6301rem\u3002\u5bf9\u4e8e\u4e0d\u652f\u6301\u5b83\u7684\u6d4f\u89c8\u5668\uff0c\u5e94\u5bf9\u65b9\u6cd5\u4e5f\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u591a\u5199\u4e00\u4e2a\u7edd\u5bf9\u5355\u4f4d\u7684\u58f0\u660e\u3002\u8fd9\u4e9b\u6d4f\u89c8\u5668\u4f1a\u5ffd\u7565\u7528rem\u8bbe\u5b9a\u7684\u5b57\u4f53\u5927\u5c0f\u3002\u4e3e\u4f8b\uff1a"}),l.a.createElement(m.b,{content:"p {font-size:14px; font-size:.875rem;}\n"}),l.a.createElement(m.e,{style:{background:"#eee",fontSize:"13px",padding:"0 4px"},title:"\u6ce8\u610f\uff1a \u9009\u62e9\u4f7f\u7528\u4ec0\u4e48\u5b57\u4f53\u5355\u4f4d\u4e3b\u8981\u7531\u4f60\u7684\u9879\u76ee\u6765\u51b3\u5b9a\uff0c\u5982\u679c\u4f60\u7684\u7528\u6237\u7fa4\u90fd\u4f7f\u7528\u6700\u65b0\u7248\u7684\u6d4f\u89c8\u5668\uff0c\u90a3\u63a8\u8350\u4f7f\u7528rem\uff0c\u5982\u679c\u8981\u8003\u8651\u517c\u5bb9\u6027\uff0c\u90a3\u5c31\u4f7f\u7528px,\u6216\u8005\u4e24\u8005\u540c\u65f6\u4f7f\u7528\u3002"})))}}}}]);