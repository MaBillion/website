(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(65);var o=(0,n(25).createHashHistory)();t.a=class extends a.Component{render(){return r.a.createElement("div",null,r.a.createElement(l.f,{mode:"light",icon:"#/Home"===window.location.hash?"":r.a.createElement(l.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{o.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return H}),n.d(t,"f",function(){return R}),n.d(t,"c",function(){return j}),n.d(t,"e",function(){return N}),n.d(t,"b",function(){return S}),n.d(t,"d",function(){return D});var a=n(180),r=n.n(a),l=n(181),o=n.n(l),i=n(182),c=n.n(i),s=n(183),m=n.n(s),g=n(184),p=n.n(g),x=n(185),E=n.n(x),d=n(186),h=n.n(d),u=n(187),f=n.n(u),v=n(176),_=n.n(v),w=n(188),b=n.n(w),k=n(0),y=n.n(k),I=n(232);n(173);function C(e,t){var n=f()(e);if(h.a){var a=h()(e);t&&(a=E()(a).call(a,function(t){return p()(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)m()(n=C(Object(a),!0)).call(n,function(t){b()(e,t,a[t])});else if(c.a)o()(e,c()(a));else{var l;m()(l=C(Object(a))).call(l,function(t){r()(e,t,p()(a,t))})}}return e}class H extends y.a.Component{render(){let e=this.props,t=e.route,n=e.title,a=e.containerStyle,r=e.titleStyle;return y.a.createElement("div",{className:"blockComponent",style:a},y.a.createElement(I.a,{to:t},y.a.createElement("p",{style:r},n)))}}class R extends y.a.Component{render(){return y.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class j extends y.a.Component{render(){return y.a.createElement("div",{className:"label"},y.a.createElement("p",null,y.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class N extends y.a.Component{render(){return y.a.createElement("section",{className:"paragraph",style:U({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class S extends y.a.Component{render(){return y.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},y.a.createElement("pre",null,this.props.content))}}class D extends y.a.Component{render(){var e;return y.a.createElement("div",{className:"listItem"},y.a.createElement("ul",null,_()(e=this.props.list).call(e,(e,t)=>y.a.createElement("li",{key:t},e))))}}},173:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(171),o=n(172);t.default=class extends r.a.Component{render(){return r.a.createElement(l.a,null,r.a.createElement("div",{style:{padding:"0 10px"}},r.a.createElement(o.f,{title:"nginx\u5165\u95e8"}),r.a.createElement(o.e,{title:r.a.createElement("p",null,"\u672c\u6587\u5c5e\u4e8e\u7ffb\u8bd1\u6587\u7ae0\uff0c\u539f\u6587\u94fe\u63a5\u4e3a ",r.a.createElement("a",{href:"http://nginx.org/en/docs/beginners_guide.html",target:"_blank",rel:"noopener noreferrer"},"nginx Beginner\u2019s Guide\u3002"),"\u662f\u81f3\u4eca\u4e3a\u6b62\u89c1\u8fc7\u6700\u597d\u7684 nginx \u5165\u95e8\u6587\u7ae0\u3002\u989d\u3002\u3002\u3002\u6ca1\u6709\u4e4b\u4e00\u3002")}),r.a.createElement(o.e,{title:r.a.createElement("p",null,"\u8fd9\u7bc7\u6559\u7a0b\u7b80\u5355\u4ecb\u7ecd\u4e86 nginx \u5e76\u4e14\u8bb2\u89e3\u4e86\u4e00\u4e9b nginx \u53ef\u4ee5\u89e3\u51b3\u7684\u7b80\u5355\u4efb\u52a1\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u5047\u8bbe nginx \u5df2\u7ecf\u5b89\u88c5\u5728\u8bfb\u8005\u7684\u673a\u5668\u4e0a\u3002\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u770b\u4e00\u4e0b",r.a.createElement("a",{href:"http://nginx.org/en/docs/install.html",target:"_blank",rel:"noopener noreferrer"},"\u5982\u4f55\u5b89\u88c5 nginx"),"\u3002\u8fd9\u7bc7\u6559\u7a0b\u4e3b\u8981\u8bb2\u89e3\u7684\u662f\u5982\u4f55\u542f\u7528\u548c\u505c\u6b62nginx\uff0c\u548c\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\uff0c\u63cf\u8ff0\u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u7ed3\u6784\u548c\u600e\u6837\u642d\u5efa\u4e00\u4e2a nginx \u9759\u6001\u8f85\u52a9\u5668\uff0c\u600e\u6837\u914d\u7f6e nginx \u4f5c\u4e3a\u4e00\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\u6765\u3002")}),r.a.createElement(o.e,{title:r.a.createElement("p",null,"nginx \u6709\u4e00\u4e2a\u4e3b\u8fdb\u7a0b\u548c\u5176\u4ed6\u5b50\u8fdb\u7a0b\u3002\u4e3b\u8fdb\u7a0b\u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u52a0\u8f7d\u548c\u6267\u884c\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u4e14\u9a7b\u7559\u5b50\u8fdb\u7a0b\u3002\u5b50\u8fdb\u7a0b\u7528\u6765\u4f5c\u4e3a\u5b9e\u9645\u7684\u8bf7\u6c42\u5904\u7406\u3002nginx \u91c7\u53d6\u57fa\u4e8e\u4e8b\u4ef6\u7684\u6a21\u578b\u548c OS \u4f9d\u8d56\u7684\u673a\u5236\uff0c\u5728\u591a\u4e2a\u5b50\u8fdb\u7a0b\u4e4b\u95f4\u9ad8\u6548\u7684\u5206\u914d\u8bf7\u6c42\u3002\u5b50\u8fdb\u7a0b\u7684\u4e2a\u6570\u4f1a\u76f4\u63a5\u5199\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5e76\u4e14\uff0c\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u914d\u7f6e\u53ef\u4ee5\u662f\u56fa\u5b9a\u7684\uff0c\u6216\u8005\u6839\u636e\u53ef\u7528\u7684 CPU \u6838\u6570\u81ea\u52a8\u7684\u8fdb\u884c\u8c03\u6574\uff08\u53c2\u8003 ",r.a.createElement("a",{href:"http://nginx.org/en/docs/ngx_core_module.html#worker_processes",target:"_blank",rel:"noopener noreferrer"},"\u5b50\u8fdb\u7a0b"),"\uff09\u3002")}),r.a.createElement(o.e,{title:"nginx \u548c\u5b83\u6a21\u5757\u7684\u5de5\u4f5c\u65b9\u5f0f\u662f\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5199\u597d\u7684\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u901a\u5e38\u547d\u540d\u4e3a nginx.conf \u5e76\u4e14\u4f1a\u653e\u7f6e\u5728 /usr/local/nginx/conf\uff0c/etc/nginx\uff0c\u6216\u8005 /usr/local/etc/nginx\u3002"}),r.a.createElement(o.c,{title:"\u542f\u7528\uff0c\u505c\u6b62\u548c\u91cd\u8f7d\u914d\u7f6e"}),r.a.createElement(o.e,{title:"\u8fd0\u884c\u53ef\u6267\u884c\u6587\u4ef6\u5c31\u53ef\u4ee5\u5f00\u542f nginx\uff0c\u6bd4\u5982\uff1a"}),r.a.createElement(o.b,{content:"\n// -c \u4e3a nginx \u7684\u914d\u7f6e\u6587\u4ef6\nnginx -c /usr/local/nginx/conf/nginx.conf\n"}),r.a.createElement(o.e,{title:"\u5982\u679c\uff0cnginx \u5df2\u7ecf\u5f00\u542f\uff0c\u90a3\u4e48\u5b83\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 -s \u53c2\u6570\u7684\u53ef\u6267\u884c\u547d\u4ee4\u63a7\u5236\u3002\u4f7f\u7528\u4e0b\u5217\u683c\u5f0f\uff1a"}),r.a.createElement(o.b,{content:"nginx -s signal\n"}),r.a.createElement(o.e,{title:"signal \u53ef\u4ee5\u4e3a\u4e0b\u5217\u547d\u4ee4\u4e4b\u4e00\uff1a"}),r.a.createElement(o.d,{list:["stop \u2014 \u76f4\u63a5\u5173\u95ed nginx","quit \u2014 \u4f1a\u5728\u5904\u7406\u5b8c\u5f53\u524d\u6b63\u5728\u7684\u8bf7\u6c42\u540e\u9000\u51fa\uff0c\u4e5f\u53eb\u4f18\u96c5\u5173\u95ed","reload \u2014 \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u76f8\u5f53\u4e8e\u91cd\u542f","reopen \u2014 \u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6"]}),r.a.createElement(o.e,{title:"\u6bd4\u5982\uff0c\u7b49\u5f85\u5f53\u524d\u5b50\u8fdb\u7a0b\u5904\u7406\u5b8c\u6b63\u5728\u6267\u884c\u7684\u8bf7\u6c42\u540e\uff0c\u7ed3\u675f nginx \u8fdb\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff1a"}),r.a.createElement(o.b,{content:"nginx -s quit\n"}),r.a.createElement(o.e,{title:"\u6267\u884c\u8be5\u547d\u4ee4\u7684\u7528\u6237\u9700\u8981\u548c\u542f\u52a8\u7684 nginx \u7684\u7528\u6237\u4e00\u81f4\u3002"}),r.a.createElement(o.e,{title:"\u5982\u679c\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\u7684\u547d\u4ee4\u6ca1\u6709\u4f20\u9012\u7ed9 nginx \u6216\u8005 nginx \u6ca1\u6709\u91cd\u542f\uff0c\u90a3\u4e48\u914d\u7f6e\u6587\u4ef6\u7684\u6539\u52a8\u662f\u4e0d\u4f1a\u88ab\u4f7f\u7528\u7684\u3002\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\u7684\u547d\u4ee4\u53ef\u4ee5\u4f7f\u7528\uff1a"}),r.a.createElement(o.b,{content:"nginx -s reload\n"}),r.a.createElement(o.e,{title:"\u4e00\u65e6\u4e3b\u8fdb\u7a0b\u63a5\u6536\u5230\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\u7684\u547d\u4ee4\u540e\uff0c\u5b83\u4f1a\u5148\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5\u7684\u5408\u6cd5\u6027\uff0c\u5982\u679c\u6ca1\u6709\u9519\u8bef\uff0c\u5219\u4f1a\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002\u5982\u679c\u6210\u529f\uff0c\u5219\u4e3b\u8fdb\u7a0b\u4f1a\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u5e76\u4e14\u53d1\u9001\u5173\u95ed\u8bf7\u6c42\u7ed9\u4ee5\u524d\u7684\u5b50\u8fdb\u7a0b\u3002\u5982\u679c\u6ca1\u6709\u6210\u529f\uff0c\u4e3b\u8fdb\u7a0b\u4f1a\u56de\u6eda\u6539\u52a8\u5e76\u4e14\u7ee7\u7eed\u4f7f\u7528\u4ee5\u524d\u7684\u914d\u7f6e\u3002\u8001\u7684\u5b50\u8fdb\u7a0b\u5728\u63a5\u53d7\u5173\u95ed\u7684\u547d\u4ee4\u540e\uff0c\u4f1a\u505c\u6b62\u63a5\u53d7\u65b0\u7684\u8bf7\u6c42\u5e76\u4e14\u7ee7\u7eed\u5904\u7406\u5f53\u524d\u7684\u8bf7\u6c42\uff0c\u76f4\u5230\u5904\u7406\u5b8c\u6bd5\u3002\u4e4b\u540e\uff0c\u8be5\u5b50\u8fdb\u7a0b\u5c31\u76f4\u63a5\u9000\u51fa\u4e86\u3002"}),r.a.createElement(o.e,{title:"\u5728 Unix \u5de5\u5177\u7684\u5e2e\u52a9\u4e0b\uff0c\u6bd4\u5982\u4f7f\u7528 kill \u5de5\u5177\uff0c\u8be5\u4fe1\u53f7\u4f1a\u88ab\u53d1\u9001\u7ed9 nginx \u8fdb\u7a0b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4fe1\u53f7\u4f1a\u88ab\u76f4\u63a5\u53d1\u9001\u7ed9\u5e26\u6709\u8fdb\u7a0b ID \u7684\u8fdb\u7a0b\u3002nginx \u7684\u4e3b\u8fdb\u7a0b\u7684\u8fdb\u7a0b ID \u662f\u5199\u6b7b\u5728 nginx.pid \u6587\u4ef6\u4e2d\u7684\u3002\u8be5\u6587\u4ef6\u901a\u5e38\u653e\u5728 /usr/local/nginx/logs \u6216\u8005 /var/run\u76ee\u5f55\u4e0b\u3002\u6bd4\u5982\uff0c\u5982\u679c\u4e3b\u8fdb\u7a0b\u7684 ID \u662f 1628\uff0c\u4e3a\u4e86\u53d1\u9001 QUIT \u4fe1\u53f7\u6765\u4f7f nginx \u4f18\u96c5\u9000\u51fa\uff0c\u53ef\u4ee5\u6267\u884c\uff1a"}),r.a.createElement(o.b,{content:"kill -s QUIT 1628\n"}),r.a.createElement(o.e,{title:"\u4e3a\u4e86\u5f97\u5230\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684 nginx \u8fdb\u7a0b\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u4f7f\u7528\u5230 ps \u5de5\u5177\uff0c\u6bd4\u5982\uff0c\u50cf\u4e0b\u5217\u7684\u65b9\u5f0f\uff1a"}),r.a.createElement(o.b,{content:"$ ps -ax | grep nginx\n// \u7ed3\u679c\u4e3a\uff1a\uff08\u4e0b\u9762\u662f\u5355\u6838 CPU \u7684\u60c5\u51b5\uff09\n 516 pts/0    D+     0:00 grep --color=auto nginx\n 1156 ?        S      1:22 nginx: worker process\n27999 ?        Ss     0:00 nginx: master process ./nginx\n"}),r.a.createElement(o.e,{title:r.a.createElement("p",null,"\u66f4\u591a\u5173\u4e8e\u53d1\u9001\u4fe1\u53f7\u7ed9 nginx\uff0c\u53ef\u4ee5\u53c2\u8003 ",r.a.createElement("a",{href:"http://nginx.org/en/docs/ngx_core_module.html#worker_processes",target:"_blank",rel:"noopener noreferrer"},"nginx \u63a7\u5236"),"\u3002")}),r.a.createElement(o.c,{title:"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"}),r.a.createElement(o.e,{title:"nginx \u662f\u7531\u4e00\u4e9b\u6a21\u5757\u7ec4\u6210\uff0c\u6211\u4eec\u4e00\u822c\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528\u4e00\u4e9b\u5177\u4f53\u7684\u6307\u4ee4\u6765\u63a7\u5236\u5b83\u4eec\u3002\u6307\u4ee4\u88ab\u5206\u4e3a\u7b80\u5355\u6307\u4ee4\u548c\u5757\u7ea7\u547d\u4ee4\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u6307\u4ee4\u662f\u7531\u540d\u5b57\u548c\u53c2\u6570\u7ec4\u6210\uff0c\u4e2d\u95f4\u7528\u7a7a\u683c\u5206\u5f00\uff0c\u5e76\u4ee5\u5206\u53f7\u7ed3\u5c3e\u3002\u4f8b\u5982\uff1a"}),r.a.createElement(o.b,{content:"// \u7b80\u5355\u6307\u4ee4\nroot /data/www;\n"}),r.a.createElement(o.e,{title:r.a.createElement("p",null,"\u5757\u7ea7\u6307\u4ee4\u548c\u7b80\u5355\u6307\u4ee4\u4e00\u6837\u6709\u7740\u7c7b\u4f3c\u7684\u7ed3\u6784\uff0c\u4f46\u662f\u672b\u5c3e\u4e0d\u662f\u5206\u53f7\u800c\u662f\u7528 "," \u548c "," \u5927\u62ec\u53f7\u5305\u88f9\u7684\u989d\u5916\u6307\u4ee4\u96c6\u3002\u5982\u679c\u4e00\u4e2a\u5757\u7ea7\u6307\u4ee4\u7684\u5927\u62ec\u53f7\u91cc\u6709\u5176\u4ed6\u6307\u4ee4\uff0c\u5219\u5b83\u88ab\u53eb\u505a\u4e00\u4e2a\u4e0a\u4e0b\u6587\uff08\u6bd4\u5982\uff1a",r.a.createElement("a",{href:"http://nginx.org/en/docs/ngx_core_module.html#events",target:"_blank",rel:"noopener noreferrer"},"events"),"\uff0c",r.a.createElement("a",{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#httph",target:"_blank",rel:"noopener noreferrer"},"http"),"\uff0c",r.a.createElement("a",{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#servers",target:"_blank",rel:"noopener noreferrer"},"server"),"\uff0c\u548c ",r.a.createElement("a",{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#location",target:"_blank",rel:"noopener noreferrer"},"location"),"\uff09\u3002")}),r.a.createElement(o.e,{title:"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6ca1\u6709\u653e\u5728\u4efb\u4f55\u4e0a\u4e0b\u6587\u4e2d\u7684\u6307\u4ee4\u90fd\u662f\u5904\u5728\u4e3b\u4e0a\u4e0b\u6587\u4e2d\u3002events \u548c http \u7684\u6307\u4ee4\u662f\u653e\u5728\u4e3b\u4e0a\u4e0b\u6587\u4e2d\uff0cserver \u653e\u5728 http \u4e2d, location \u653e\u5728 server \u4e2d\u3002"}),r.a.createElement(o.e,{title:"\u4ee5 # \u5f00\u5934\u7684\u884c\uff0c\u4f1a\u88ab\u5f53\u505a\u6ce8\u91ca\u3002"}),r.a.createElement(o.b,{content:"# this is a comment\nevents {\n    worker_connections  4096;  ## Default: 1024\n}\n\nhttp {\n    server { \n        listen       80;\n        server_name  domain1.com www.domain1.com;\n        access_log   logs/domain1.access.log  main;\n        root         html;\n\n        location ~ \\.php$ {\n        fastcgi_pass   127.0.0.1:1025;\n        }\n    }\n}\n"}),r.a.createElement(o.c,{title:"\u9759\u6001\u670d\u52a1\u5668"}),r.a.createElement(o.e,{title:"\u4e00\u4e2a\u91cd\u8981\u7684\u7f51\u7edc\u670d\u52a1\u5668\u7684\u4efb\u52a1\u662f\u5904\u7406\u6587\u4ef6\uff08\u6bd4\u5982\u56fe\u7247\u6216\u8005\u9759\u6001 HTML \u6587\u4ef6\uff09\u3002\u8fd9\u91cc\uff0c\u4f60\u4f1a\u5b9e\u8df5\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6587\u4ef6\u4f1a\u4ece\u4e0d\u540c\u7684\u76ee\u5f55\u4e2d\u6620\u5c04\uff08\u53d6\u51b3\u4e8e\u8bf7\u6c42\uff09\uff1a/data/www\uff08\u653e\u7f6e HTML \u6587\u4ef6\uff09\u548c /data/images\uff08\u653e\u7f6e\u56fe\u7247\uff09\u3002\u8fd9\u9700\u8981\u914d\u7f6e\u4e00\u4e0b\u6587\u4ef6\uff0c\u5c06\u5e26\u6709\u4e24\u4e2a location \u7684\u6307\u4ee4\u7684 server \u7684\u5757\u7ea7\u547d\u4ee4\u653e\u5728 server \u6307\u4ee4\u4e2d\u3002"}),r.a.createElement(o.e,{title:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a /data/www \u76ee\u5f55\uff0c\u7136\u540e\u653e\u7f6e\u4e00\u4e2a\u4e8b\u5148\u5199\u597d\u5185\u5bb9\u7684 index.html \u6587\u4ef6\u3002\u63a5\u7740\uff0c\u521b\u5efa\u4e00\u4e2a /data/images \u76ee\u5f55\uff0c\u7136\u540e\u653e\u7f6e\u4e00\u4e9b\u56fe\u7247\u3002"}),r.a.createElement(o.e,{title:"\u4e0b\u4e00\u6b65\uff0c\u6253\u5f00\u914d\u7f6e\u6587\u4ef6\u3002\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u5df2\u7ecf\u5305\u542b\u4e86\u4e00\u4e9b\u5173\u4e8e server \u6307\u4ee4\u7684\u6837\u5f0f\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u76f4\u63a5\u628a\u4ed6\u4eec\u7ed9\u6ce8\u91ca\u6389\u3002\u73b0\u5728\uff0c\u6ce8\u91ca\u6389\u5176\u4ed6\u7684\u533a\u5757\uff0c\u7136\u540e\u5199\u4e00\u4e2a\u65b0\u7684 server \u533a\u5757\uff1a"}),r.a.createElement(o.b,{content:"http {\n    server {\n    }\n}\n"}),r.a.createElement(o.e,{title:"\u901a\u5e38\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u53ef\u80fd\u4f1a\u5305\u542b\u591a\u4e2a server \u6307\u4ee4\u3002\u8fd9\u4e9b server \u6307\u4ee4\u76d1\u542c\u4e0d\u540c\u7684\u7aef\u53e3\u548c\u670d\u52a1\u5668\u540d\u3002\u4e00\u65e6 nginx \u51b3\u5b9a\u54ea\u4e2a\u670d\u52a1\u8fdb\u7a0b\u5904\u7406\u8bf7\u6c42\uff0c\u5b83\u4f1a\u6839\u636e\u5728 server \u5757\u7ea7\u6307\u4ee4\u4e2d\u5b9a\u4e49\u597d\u7684 location \u6307\u4ee4\u7684\u53c2\u6570\uff0c\u6765\u5339\u914d\u8bf7\u6c42\u5934\u4e2d\u6307\u5b9a\u7684 URI\u3002"}),r.a.createElement(o.e,{title:"\u5c06\u4e0b\u5217 location \u6307\u4ee4\u6dfb\u52a0\u5230 server \u6307\u4ee4\u4e2d\uff1a"}),r.a.createElement(o.b,{content:"location / {\n    root /data/www;\n}\n"}),r.a.createElement(o.e,{title:"\u8be5 location \u6307\u4ee4\u76f8\u5bf9\u4e8e\u8bf7\u6c42\u4e2d\u7684 URI \u6267\u884c\u4e86 \u201c/\u201d \u7684\u524d\u7f00\u3002\u4e3a\u4e86\u5339\u914d\u8bf7\u6c42\uff0cURI \u4f1a\u88ab\u6dfb\u52a0\u5230 root \u547d\u4ee4\u6307\u5b9a\u7684\u8def\u5f84\u540e\uff0c\u5373 /data/www\uff0c\u5f97\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u8bf7\u6c42\u6587\u4ef6\u7684\u8def\u5f84\u3002\u5982\u679c\uff0c\u6709\u51e0\u4e2a location \u5339\u914d\u5230\uff0c\u90a3\u4e48 nginx \u4f1a\u9009\u62e9\u6700\u957f\u7684\u524d\u7f00\u3002\u4e0a\u9762\u7684 location \u63d0\u4f9b\u4e86\u957f\u5ea6\u4e3a 1 \u7684\u524d\u7f00\uff0c\u6240\u4ee5\uff0c\u4ec5\u5f53\u5176\u4ed6\u7684 location \u5339\u914d\u5931\u8d25\u540e\uff0c\u8be5\u6307\u4ee4\u624d\u4f1a\u4f7f\u7528\u3002"}),r.a.createElement(o.e,{title:"\u63a5\u7740\uff0c\u6dfb\u52a0\u7b2c\u4e8c\u4e2a location \u533a\u5757\uff1a"}),r.a.createElement(o.b,{content:"location /images/ {\n    root /data;\n}\n"}),r.a.createElement(o.e,{title:"\u5b83\u4f1a\u5339\u914d\u5230\u4ee5 /images/ \u5f00\u5934\u7684\u8bf7\u6c42\uff08location / \u4e5f\u4f1a\u5339\u914d\u5230\u8be5\u8bf7\u6c42\uff0c\u53ea\u662f\u524d\u7f00\u66f4\u77ed\uff09server \u5757\u7ea7\u547d\u4ee4\u7684\u914d\u7f6e\u7ed3\u679c\u5982\u4e0b\uff1a"}),r.a.createElement(o.b,{content:"server {\n    location / {\n        root /data/www;\n    }\n\n    location /images/ {\n        root /data;\n    }\n}\n"}),r.a.createElement(o.e,{title:"\u8fd9\u5df2\u7ecf\u662f\u4e00\u4e2a\u53ef\u7528\u7684\u670d\u52a1\u5668\u914d\u7f6e\uff0c\u5b83\u76d1\u542c\u6807\u51c6\u7684 80 \u7aef\u53e3\u5e76\u4e14\u53ef\u4ee5\u5728\u672c\u5730\u4e0a\u901a\u8fc7 http://localhost/ \u8bbf\u95ee\u3002\u5bf9\u4e8e URI \u4ee5 /images/ \u5f00\u5934\u7684\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u4f1a\u4ece /data/images \u76ee\u5f55\u4e2d\uff0c\u8fd4\u56de\u5bf9\u5e94\u7684\u6587\u4ef6\u3002\u4f8b\u5982\uff0cnginx \u4f1a\u8fd4\u56de /data/images/example.png \u6587\u4ef6\uff0c\u5f53\u63a5\u6536\u5230 http://localhost/images/example.png \u7684\u8bf7\u6c42\u54cd\u5e94\u65f6\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0cnginx \u4f1a\u8fd4\u56de\u4e00\u4e2a 404 \u9519\u8bef\u7684\u54cd\u5e94\u3002\u6ca1\u6709\u4ee5 /images/ \u5f00\u5934\u7684 URI \u7684\u8bf7\u6c42\uff0c\u5c06\u4f1a\u76f4\u63a5\u6620\u5c04\u5230 /data/www \u76ee\u5f55\u4e2d\u3002\u6bd4\u5982\uff0c\u54cd\u5e94 http://localhost/some/example.html \u7684\u8bf7\u6c42\uff0cnginx \u4f1a\u53d1\u9001 /data/www/some/example.html \u6587\u4ef6\u3002"}),r.a.createElement(o.e,{title:"\u4e3a\u4e86\u4f7f\u7528\u65b0\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u8fd8\u6ca1\u5f00\u542f nginx \u9700\u8981\u5148\u5f00\u542f\uff0c\u7136\u540e\u5c06\u91cd\u8f7d\u4fe1\u53f7\u53d1\u9001\u7ed9 nginx \u7684\u4e3b\u8fdb\u7a0b\uff0c\u901a\u8fc7\u6267\u884c\uff1a"}),r.a.createElement(o.b,{content:"nginx -s reload\n"}),r.a.createElement(o.e,{title:"\u5982\u679c\u4f60\u53d1\u73b0\u6709\u4e9b\u5730\u65b9\u51fa\u4e86\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u5728 /usr/local/nginx/logs \u6216\u8005 /var/log/nginx \u76ee\u5f55\u4e0b\u7684 access.log \u548c error.log \u6587\u4ef6\u4e2d\uff0c\u627e\u5230\u539f\u56e0\u3002"}),r.a.createElement(o.c,{title:"\u642d\u5efa\u4e00\u4e2a\u7b80\u6613\u7684\u4ee3\u7406\u670d\u52a1"}),r.a.createElement(o.e,{title:"nginx \u5e38\u5e38\u7528\u6765\u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u8fd9\u4ee3\u8868\u7740\u670d\u52a1\u5668\u63a5\u6536\u8bf7\u6c42\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u4f20\u9012\u7ed9\u88ab\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u5f97\u5230\u8bf7\u6c42\u7684\u54cd\u5e94\uff0c\u518d\u5c06\u5b83\u4eec\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002"}),r.a.createElement(o.e,{title:"\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a\u57fa\u672c\u7684\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u5b83\u4f1a\u5904\u7406\u672c\u5730\u56fe\u7247\u6587\u4ef6\u7684\u8bf7\u6c42\u5e76\u8fd4\u56de\u5176\u4ed6\u7684\u8bf7\u6c42\u7ed9\u88ab\u4ee3\u7406\u7684\u670d\u52a1\u5668\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e24\u4e2a\u670d\u52a1\u5668\u90fd\u4f1a\u5b9a\u4e49\u5728\u4e00\u4e2a nginx \u5b9e\u4f8b\u4e2d\u3002"}),r.a.createElement(o.e,{title:"\u9996\u5148\uff0c\u901a\u8fc7\u5728 nginx \u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u53e6\u4e00\u4e2a server \u533a\u5757\uff0c\u6765\u5b9a\u4e49\u4e00\u4e2a\u88ab\u4ee3\u7406\u7684\u670d\u52a1\u5668\uff0c\u50cf\u4e0b\u9762\u7684\u914d\u7f6e\uff1a"}),r.a.createElement(o.b,{content:"server {\n    listen 8080;\n    root /data/up1;\n\n    location / {\n    }\n}\n"}),r.a.createElement(o.e,{title:"\u4e0a\u9762\u5c31\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u670d\u52a1\u5668\uff0c\u5b83\u76d1\u542c\u5728 8080 \u7aef\u53e3\uff08\u4e4b\u524d\uff0clisten \u5e76\u6ca1\u88ab\u5b9a\u4e49\uff0c\u662f\u56e0\u4e3a\u9ed8\u8ba4\u76d1\u542c\u7684 80 \u7aef\u53e3\uff09\u5e76\u4e14\u4f1a\u6620\u5c04\u6240\u6709\u7684\u8bf7\u6c42\u7ed9 \u672c\u5730\u6587\u4ef6\u76ee\u5f55 /data/up1\u3002\u521b\u5efa\u8be5\u76ee\u5f55\uff0c\u7136\u540e\u6dfb\u52a0 index.html \u6587\u4ef6\u3002\u6ce8\u610f\uff0croot \u6307\u4ee4\u662f\u653e\u5728 server \u4e0a\u4e0b\u6587\u4e2d\u3002\u5f53\u54cd\u5e94\u8bf7\u6c42\u7684 location \u533a\u5757\u4e2d\uff0c\u6ca1\u6709\u81ea\u5df1\u7684 root \u6307\u4ee4\uff0c\u4e0a\u8ff0\u7684 root\u6307\u4ee4\u624d\u4f1a\u88ab\u4f7f\u7528\u3002"}),r.a.createElement(o.e,{title:r.a.createElement("p",null,"\u63a5\u7740\uff0c\u4f7f\u7528\u524d\u9762\u7ae0\u8282\u4e2d\u7684 server \u914d\u7f6e\uff0c\u7136\u540e\u5c06\u5b83\u6539\u4e3a\u4e00\u4e2a\u4ee3\u7406\u670d\u52a1\u914d\u7f6e\u3002\u5728\u7b2c\u4e00\u4e2a location \u533a\u5757\u4e2d\uff0c\u653e\u7f6e\u5df2\u7ecf\u6dfb\u52a0\u88ab\u4ee3\u7406\u670d\u52a1\u5668\u7684\u534f\u8bae\uff0c\u540d\u5b57\u548c\u7aef\u53e3\u7b49\u53c2\u6570\u7684 ",r.a.createElement("a",{href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass",target:"_blank",rel:"noopener noreferrer"},"proxy_pass")," \u6307\u4ee4\uff08\u5728\u8fd9\u91cc\uff0c\u5c31\u662f http://localhost:8080\uff09:")}),r.a.createElement(o.b,{content:"server {\n    location / {\n        proxy_pass http://localhost:8080;\n    }\n\n    location /images/ {\n        root /data;\n    }\n}\n"}),r.a.createElement(o.e,{title:"\u6211\u4eec\u5c06\u4fee\u6539\u7b2c\u4e8c\u4e2a location \u533a\u5757\uff0c\u4f7f\u4ed6\u8fd4\u56de\u4e00\u4e9b\u5178\u578b\u540e\u7f00\u7684\u56fe\u7247\u6587\u4ef6\u8bf7\u6c42\uff0c\u73b0\u5728\u5b83\u53ea\u4f1a\u6620\u5c04\u5e26\u6709 /images/ \u524d\u7f00\u7684\u8bf7\u6c42\u5230 /data/images \u76ee\u5f55\u4e0b\u3002\u4fee\u6539\u540e\u7684 location \u6307\u4ee4\u5982\u4e0b\uff1a"}),r.a.createElement(o.b,{content:"location ~ \\.(gif|jpg|png)$ {\n    root /data/images;\n}\n"}),r.a.createElement(o.e,{title:"\u8be5\u53c2\u6570\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5b83\u4f1a\u5339\u914d\u6240\u6709\u4ee5 .gif\uff0c.jpg \u6216\u8005 .png \u7ed3\u5c3e\u7684 URIs\u3002\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u9700\u8981\u4ee5 ~ \u5f00\u5934\u3002\u5339\u914d\u5230\u7684\u8bf7\u6c42\u4f1a\u88ab\u6620\u5c04\u5230 /data/images\u76ee\u5f55\u4e0b\u3002"}),r.a.createElement(o.e,{title:"\u5f53 nginx \u5728\u9009\u62e9 location \u53bb\u54cd\u5e94\u4e00\u4e2a\u8bf7\u6c42\u65f6\uff0c\u5b83\u4f1a\u5148\u68c0\u6d4b\u5e26\u6709\u524d\u7f00\u7684 location\u6307\u4ee4\uff0c\u8bb0\u4f4f\u5148\u662f\u68c0\u6d4b\u5e26\u6709\u6700\u957f\u524d\u7f00\u7684 location\uff0c\u7136\u540e\u68c0\u6d4b\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u5982\u679c\u6709\u4e00\u4e2a\u6b63\u5219\u7684\u5339\u914d\u7684\u89c4\u5219\uff0cnginx \u4f1a\u9009\u62e9\u8be5 location\uff0c\u5426\u5219\uff0c\u4f1a\u9009\u62e9\u4e4b\u524d\u7f13\u5b58\u7684\u89c4\u5219\u3002"}),r.a.createElement(o.e,{title:"\u6700\u7ec8\uff0c\u4e00\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\u7684\u914d\u7f6e\u7ed3\u679c\u5982\u4e0b\uff1a"}),r.a.createElement(o.b,{content:"server {\n    location / {\n        proxy_pass http://localhost:8080/;\n    }\n\n    location ~ \\.(gif|jpg|png)$ {\n        root /data/images;\n    }\n}\n"}),r.a.createElement(o.e,{title:"\u8be5\u670d\u52a1\u5668\u4f1a\u9009\u62e9\u4ee5 .gif\uff0c.jpg\uff0c\u6216\u8005 .png \u7ed3\u675f\u7684\u8bf7\u6c42\u5e76\u4e14\u6620\u5c04\u5230 /data/images \u76ee\u5f55\uff08\u901a\u8fc7\u6dfb\u52a0 URI \u7ed9 root \u6307\u4ee4\u7684\u53c2\u6570\uff09\uff0c\u63a5\u7740\u5c06\u5176\u4ed6\u6240\u6709\u7684\u8bf7\u6c42\u6620\u5c04\u5230\u4e0a\u8ff0\u88ab\u4ee3\u7406\u7684\u670d\u52a1\u5668\u3002\u4e3a\u4e86\u4f7f\u7528\u65b0\u7684\u914d\u7f6e\uff0c\u50cf\u524d\u51e0\u4e2a\u7ae0\u8282\u63cf\u8ff0\u7684\u4e00\u6837\uff0c\u9700\u8981\u5411 nginx \u53d1\u9001\u91cd\u8f7d\u4fe1\u53f7\u3002"}),r.a.createElement(o.e,{title:r.a.createElement("p",null,"\u8fd9\u8fd8\u6709\u5f88\u591a\u5176",r.a.createElement("a",{href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html",target:"_blank",rel:"noopener noreferrer"},"\u4ed6\u7684\u6307\u4ee4"),"\uff0c\u53ef\u4ee5\u7528\u4e8e\u8fdb\u4e00\u6b65\u914d\u7f6e\u4ee3\u7406\u8fde\u63a5\u3002")})))}}}}]);