(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(65);var i=(0,n(25).createHashHistory)();t.a=class extends r.Component{render(){return a.a.createElement("div",null,a.a.createElement(l.f,{mode:"light",icon:"#/Home"===window.location.hash?"":a.a.createElement(l.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{i.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return k}),n.d(t,"f",function(){return W}),n.d(t,"c",function(){return J}),n.d(t,"e",function(){return O}),n.d(t,"b",function(){return j}),n.d(t,"d",function(){return L});var r=n(180),a=n.n(r),l=n(181),i=n.n(l),c=n(182),s=n.n(c),o=n(183),p=n.n(o),m=n(184),d=n.n(m),u=n(185),f=n.n(u),E=n(186),h=n.n(E),x=n(187),g=n.n(x),v=n(176),y=n.n(v),I=n(188),w=n.n(I),b=n(0),C=n.n(b),S=n(232);n(173);function H(e,t){var n=g()(e);if(h.a){var r=h()(e);t&&(r=f()(r).call(r,function(t){return d()(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)p()(n=H(Object(r),!0)).call(n,function(t){w()(e,t,r[t])});else if(s.a)i()(e,s()(r));else{var l;p()(l=H(Object(r))).call(l,function(t){a()(e,t,d()(r,t))})}}return e}class k extends C.a.Component{render(){let e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return C.a.createElement("div",{className:"blockComponent",style:r},C.a.createElement(S.a,{to:t},C.a.createElement("p",{style:a},n)))}}class W extends C.a.Component{render(){return C.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class J extends C.a.Component{render(){return C.a.createElement("div",{className:"label"},C.a.createElement("p",null,C.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class O extends C.a.Component{render(){return C.a.createElement("section",{className:"paragraph",style:N({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class j extends C.a.Component{render(){return C.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},C.a.createElement("pre",null,this.props.content))}}class L extends C.a.Component{render(){var e;return C.a.createElement("div",{className:"listItem"},C.a.createElement("ul",null,y()(e=this.props.list).call(e,(e,t)=>C.a.createElement("li",{key:t},e))))}}},173:function(e,t,n){},411:function(e,t,n){e.exports=n.p+"static/media/JS_sort_art5.91b76e8e.gif"},471:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(171),i=n(172);t.default=class extends a.a.Component{render(){return a.a.createElement(l.a,null,a.a.createElement("div",{style:{padding:"0 10px"}},a.a.createElement(i.f,{title:"\u63d2\u5165\u6392\u5e8f\uff08Insertion Sort\uff09"}),a.a.createElement(i.e,{title:"\u63d2\u5165\u6392\u5e8f\uff08Insertion-Sort\uff09\u7684\u7b97\u6cd5\u63cf\u8ff0\u662f\u4e00\u79cd\u7b80\u5355\u76f4\u89c2\u7684\u6392\u5e8f\u7b97\u6cd5\u3002\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u662f\u901a\u8fc7\u6784\u5efa\u6709\u5e8f\u5e8f\u5217\uff0c\u5bf9\u4e8e\u672a\u6392\u5e8f\u6570\u636e\uff0c\u5728\u5df2\u6392\u5e8f\u5e8f\u5217\u4e2d\u4ece\u540e\u5411\u524d\u626b\u63cf\uff0c\u627e\u5230\u76f8\u5e94\u4f4d\u7f6e\u5e76\u63d2\u5165\u3002"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u63cf\u8ff0"}),a.a.createElement(i.e,{title:"\u4e00\u822c\u6765\u8bf4\uff0c\u63d2\u5165\u6392\u5e8f\u90fd\u91c7\u7528in-place\u5728\u6570\u7ec4\u4e0a\u5b9e\u73b0\u3002\u5177\u4f53\u7b97\u6cd5\u63cf\u8ff0\u5982\u4e0b\uff1a"}),a.a.createElement(i.e,{title:"\u4ece\u7b2c\u4e00\u4e2a\u5143\u7d20\u5f00\u59cb\uff0c\u8be5\u5143\u7d20\u53ef\u4ee5\u8ba4\u4e3a\u5df2\u7ecf\u88ab\u6392\u5e8f\uff1b"}),a.a.createElement(i.e,{title:"\u53d6\u51fa\u4e0b\u4e00\u4e2a\u5143\u7d20\uff0c\u5728\u5df2\u7ecf\u6392\u5e8f\u7684\u5143\u7d20\u5e8f\u5217\u4e2d\u4ece\u540e\u5411\u524d\u626b\u63cf\uff1b"}),a.a.createElement(i.e,{title:"\u5982\u679c\u8be5\u5143\u7d20\uff08\u5df2\u6392\u5e8f\uff09\u5927\u4e8e\u65b0\u5143\u7d20\uff0c\u5c06\u8be5\u5143\u7d20\u79fb\u5230\u4e0b\u4e00\u4f4d\u7f6e\uff1b"}),a.a.createElement(i.e,{title:"\u91cd\u590d\u6b65\u9aa43\uff0c\u76f4\u5230\u627e\u5230\u5df2\u6392\u5e8f\u7684\u5143\u7d20\u5c0f\u4e8e\u6216\u8005\u7b49\u4e8e\u65b0\u5143\u7d20\u7684\u4f4d\u7f6e\uff1b"}),a.a.createElement(i.e,{title:"\u5c06\u65b0\u5143\u7d20\u63d2\u5165\u5230\u8be5\u4f4d\u7f6e\u540e\uff1b"}),a.a.createElement(i.e,{title:"\u91cd\u590d\u6b65\u9aa42~5\u3002"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u52a8\u56fe\u6f14\u793a"}),a.a.createElement("img",{style:{width:"100%"},src:n(411),alt:"png"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u4ee3\u7801\u5b9e\u73b0"}),a.a.createElement(i.b,{content:"function insertionSort(arr) {\n    var len = arr.length;\n    var preIndex, current;\n    for (var i = 1; i < len; i++) {\n        preIndex = i - 1;\n        current = arr[i];\n        while (preIndex >= 0 && arr[preIndex] > current) {\n            arr[preIndex + 1] = arr[preIndex];\n            preIndex--;\n        }\n        arr[preIndex + 1] = current;\n    }\n    return arr;\n}\n"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u5206\u6790"}),a.a.createElement(i.e,{title:"\u63d2\u5165\u6392\u5e8f\u5728\u5b9e\u73b0\u4e0a\uff0c\u901a\u5e38\u91c7\u7528in-place\u6392\u5e8f\uff08\u5373\u53ea\u9700\u7528\u5230O(1)\u7684\u989d\u5916\u7a7a\u95f4\u7684\u6392\u5e8f\uff09\uff0c\u56e0\u800c\u5728\u4ece\u540e\u5411\u524d\u626b\u63cf\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u53cd\u590d\u628a\u5df2\u6392\u5e8f\u5143\u7d20\u9010\u6b65\u5411\u540e\u632a\u4f4d\uff0c\u4e3a\u6700\u65b0\u5143\u7d20\u63d0\u4f9b\u63d2\u5165\u7a7a\u95f4\u3002"})))}}}}]);