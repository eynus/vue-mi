(function(t){function a(a){for(var i,e,l=a[0],n=a[1],o=a[2],v=0,_=[];v<l.length;v++)e=l[v],r[e]&&_.push(r[e][0]),r[e]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);d&&d(a);while(_.length)_.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var t,a=0;a<c.length;a++){for(var s=c[a],i=!0,e=1;e<s.length;e++){var l=s[e];0!==r[l]&&(i=!1)}i&&(c.splice(a--,1),t=n(n.s=s[0]))}return t}var i={},e={app:0},r={app:0},c=[];function l(t){return n.p+"js/"+({login:"login"}[t]||t)+"."+{"chunk-1a38b93a":"e87d698b","chunk-357cc9c2":"92541424","chunk-400c38a0":"d37efc86","chunk-780a5c3a":"08228be8",login:"478b06c4"}[t]+".js"}function n(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(t){var a=[],s={"chunk-1a38b93a":1,"chunk-357cc9c2":1,"chunk-400c38a0":1,"chunk-780a5c3a":1,login:1};e[t]?a.push(e[t]):0!==e[t]&&s[t]&&a.push(e[t]=new Promise(function(a,s){for(var i="css/"+({login:"login"}[t]||t)+"."+{"chunk-1a38b93a":"28cf69b4","chunk-357cc9c2":"ca5a288f","chunk-400c38a0":"840eba04","chunk-780a5c3a":"db352746",login:"fbe3fade"}[t]+".css",r=n.p+i,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var o=c[l],v=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(v===i||v===r))return a()}var _=document.getElementsByTagName("style");for(l=0;l<_.length;l++){o=_[l],v=o.getAttribute("data-href");if(v===i||v===r)return a()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=a,d.onerror=function(a){var i=a&&a.target&&a.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete e[t],d.parentNode.removeChild(d),s(c)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){e[t]=0}));var i=r[t];if(0!==i)if(i)a.push(i[2]);else{var c=new Promise(function(a,s){i=r[t]=[a,s]});a.push(i[2]=c);var o,v=document.createElement("script");v.charset="utf-8",v.timeout=120,n.nc&&v.setAttribute("nonce",n.nc),v.src=l(t),o=function(a){v.onerror=v.onload=null,clearTimeout(_);var s=r[t];if(0!==s){if(s){var i=a&&("load"===a.type?"missing":a.type),e=a&&a.target&&a.target.src,c=new Error("Loading chunk "+t+" failed.\n("+i+": "+e+")");c.type=i,c.request=e,s[1](c)}r[t]=void 0}};var _=setTimeout(function(){o({type:"timeout",target:v})},12e4);v.onerror=v.onload=o,document.head.appendChild(v)}return Promise.all(a)},n.m=t,n.c=i,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)n.d(s,i,function(a){return t[a]}.bind(null,i));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/",n.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],v=o.push.bind(o);o.push=a,o=o.slice();for(var _=0;_<o.length;_++)a(o[_]);var d=v;c.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0418":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"topbar"},[s("div",{staticClass:"container"},[t._m(0),t.loggedIn?s("div",[s("div",{staticClass:"topbar-cart"},[s("router-link",{attrs:{to:"/cart"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("购物车(  \n            "),s("span",{staticClass:"cart-num"},[t._v(t._s(t.cartNum))]),t._v(" )\n          ")])],1),s("div",{staticClass:"topbar-info"},[s("a",{staticClass:"username",attrs:{href:"javascript:;"}},[t._v(t._s(t.user.name))]),s("span",{},[t._v("|")]),s("a",{staticClass:"logout",attrs:{href:"javascript:;"},on:{click:t.confirmQuit}},[t._v("注销")])])]):s("div",[s("div",{staticClass:"topbar-info clearfix"},[s("router-link",{attrs:{to:"/login"}},[t._v("登录")]),s("span",[t._v("|")]),s("router-link",{attrs:{to:"/login?type=register"}},[t._v("注册")]),s("span",[t._v("|")])],1)])])]),s("div",{staticClass:"header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"header-logo"},[s("router-link",{staticClass:"lr",attrs:{to:"/"}},[t._v("小米官网")])],1),s("div",{staticClass:"header-nav"},[s("ul",{staticClass:"nav-list clearfix"},[t.allProShow?s("li",{staticClass:"nav-category"},[s("a",{attrs:{href:""}},[t._v("全部商品分类")]),s("div",{staticClass:"category-list"},[s("ul",t._l(t.menuLeft,function(a,i){return s("li",{key:"left_"+i,staticClass:"tpl-cat"},[s("a",{staticClass:"title"},[s("span",[t._v(t._s(a.name))]),s("i",{staticClass:"iconfont"},[t._v("")])]),a.list?s("div",{staticClass:"children clearfix"},[s("ul",{staticClass:"children-list"},t._l(a.list,function(a,i){return s("li",{key:"left_p_"+i,staticClass:"tpl-children"},[s("router-link",{attrs:{to:"/product/"+a.pid}},[s("img",{attrs:{src:a.img}}),s("span",{staticClass:"text"},[t._v(t._s(a.name))])])],1)}),0)]):t._e()])}),0)])]):t._e(),t._l(t.menuTop,function(a,i){return s("li",{key:"top_"+i,staticClass:"nav-item tpl-nav"},[s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(a.name))])])})],2)]),t._m(1)])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"topbar-nav"},[s("a",{attrs:{href:""}},[t._v("小米商城")]),s("span",[t._v("|")]),s("a",{attrs:{href:""}},[t._v("MIUI")]),s("span",[t._v("|")]),s("a",{attrs:{href:""}},[t._v("IoT")]),s("span",[t._v("|")]),s("a",{attrs:{href:""}},[t._v("云服务")]),s("span",[t._v("|")]),s("a",{attrs:{href:""}},[t._v("金融")]),s("span",[t._v("|")]),s("a",{attrs:{href:""}},[t._v("有品")]),s("span",[t._v("|")]),s("a",{attrs:{href:""}},[t._v("小爱开放平台")]),s("span",[t._v("|")]),s("a",{attrs:{href:""}},[t._v("政企服务")]),s("span",[t._v("|")]),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("资质证照")]),s("span",{staticClass:"divider"},[t._v("|")]),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("协议规则")]),s("span",{staticClass:"divider"},[t._v("|")]),s("a",{staticClass:"download",attrs:{target:"_blank",href:"#"}},[t._v("\n          下载app\n          "),s("div",{staticClass:"download-box"},[s("img",{attrs:{src:"homeimage/2d.png",alt:"下载二维码"}}),s("p",[t._v("小米商城APP")])])]),s("span",{staticClass:"divider"},[t._v("|")]),s("a",{attrs:{href:""}},[t._v("Select Region")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header-search"},[s("form",{staticClass:"search-form",attrs:{action:""}},[s("input",{staticClass:"search-text",attrs:{type:"search",name:"keyword",autocomplete:"off"}}),s("button",{staticClass:"search-btn iconfont"},[t._v("")]),s("div",{staticClass:"tag-group"},[s("a",{staticClass:"tag",attrs:{target:"_blank",href:"#"}},[t._v("红米Note7")]),s("a",{staticClass:"tag",attrs:{target:"_blank",href:"#"}},[t._v("小米8")])]),s("div",{staticClass:"input-recom"},[s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("小米6X")]),s("span",{staticClass:"amount"},[t._v("约有6件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("电视32寸")]),s("span",{staticClass:"amount"},[t._v("约有6件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("净水器")]),s("span",{staticClass:"amount"},[t._v("约有6件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("黑鲨手机游戏")]),s("span",{staticClass:"amount"},[t._v("约有13件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("小米6")]),s("span",{staticClass:"amount"},[t._v("约有13件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("电脑")]),s("span",{staticClass:"amount"},[t._v("约有3件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("你猜")]),s("span",{staticClass:"amount"},[t._v("约有3件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("小米MIX 5")]),s("span",{staticClass:"amount"},[t._v("约有9件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("小米Note")]),s("span",{staticClass:"amount"},[t._v("约有8件")])]),s("a",{staticClass:"item",attrs:{href:"#"}},[s("span",{staticClass:"title"},[t._v("空气净化器")]),s("span",{staticClass:"amount"},[t._v("约有4件")])])])])])}],r=s("cebc"),c=s("2f62"),l=s("cb30"),n={props:["allProShow","cartNum"],data:function(){return{menuTop:[],menuLeft:[]}},created:function(){var t=this;l["a"].get("/menu?type=top",{_silent:!0}).then(function(a){t.menuTop=a}),l["a"].get("/menu?type=left",{_silent:!0}).then(function(a){t.menuLeft=a})},computed:Object(r["a"])({},Object(c["c"])("user",["loggedIn","user"])),methods:Object(r["a"])({},Object(c["b"])("user",["logout"]),{confirmQuit:function(){var t=this;this.$confirm("确认退出登录？").then(function(){t.logout(),t.$router.push("/login")}).catch(function(){})}})},o=n,v=(s("138f"),s("2877")),_=Object(v["a"])(o,i,e,!1,null,"018acd06",null);a["a"]=_.exports},"138f":function(t,a,s){"use strict";var i=s("1ca9"),e=s.n(i);e.a},"1ca9":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("router-view")},r=[],c={},l=c,n=s("2877"),o=Object(n["a"])(l,e,r,!1,null,null,null),v=o.exports,_=s("8c4f"),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("app-header",{attrs:{allProShow:!0,cartNum:t.cartNum}}),s("div",{staticClass:"hero"},[s("div",{staticClass:"container hero-container"},[s("div",{staticClass:"hero-banner"},[t.menuCarousel.length>0?s("Swiper",{ref:"swiper",attrs:{autoPlay:!0,showIndicator:!0,interval:"4000",duration:"700"}},t._l(t.menuCarousel,function(t,a){return s("Slide",{key:"carousel_"+a},[s("router-link",{attrs:{to:"/product/1"}},[s("img",{attrs:{src:t.img,alt:"",width:"1226"}})])],1)}),1):t._e(),s("div",{staticClass:"banner-control"},[s("div",{staticClass:"control-rl"},[s("a",{staticClass:"rl-prev",attrs:{href:"#"},on:{click:function(a){return t.$refs.swiper.prevSlide()}}},[t._v("上一张")]),s("a",{staticClass:"rl-next",attrs:{href:"#"},on:{click:function(a){return t.$refs.swiper.nextSlide()}}},[t._v("下一张")])])])],1),t._m(0)])]),s("div",{staticClass:"main"},[s("div",{staticClass:"container"},[t._l(t.menuIndex,function(a,i){return[a.list&&8==a.list.length?s("div",{key:"cards_hd_"+i,staticClass:"main-hd"},[s("h2",[t._v(t._s(a.name))])]):t._e(),a.list&&8==a.list.length?s("div",{key:"cards_bd_"+i,staticClass:"main-bd clearfix"},[s("div",{staticClass:"bd-ad"},[s("ul",{staticClass:"clearfix"},[s("li",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:a.img,alt:""}})])])])]),s("div",{staticClass:"bd-product clearfix"},[s("ul",{staticClass:"clearfix"},t._l(a.list,function(a,i){return s("li",{key:"card_"+i,staticClass:"tpl-body-item"},[s("div",[s("div",{staticClass:"face"},[s("router-link",{attrs:{to:"/product/"+a.pid}},[s("img",{attrs:{src:a.img,alt:""}})])],1),s("h3",{staticClass:"title"},[s("router-link",{attrs:{to:"/product/"+a.pid}},[t._v(t._s(a.name))])],1),s("p",{staticClass:"desc"},[t._v(t._s(a.desc))]),s("p",{staticClass:"price"},[s("span",{staticClass:"num"},[t._v(t._s(a.market_price))]),t._v("元\n                    "),s("del",[s("span",{staticClass:"num"},[t._v(t._s(a.price))]),t._v("元\n                    ")])]),s("div",{staticClass:"flag",style:{"background-color":a.flagcolor}},[t._v(t._s(a.flag))])])])}),0)])]):t._e()]}),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],2)]),t._m(6)],1)},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hero-sub clearfix"},[s("div",{staticClass:"sub-tool"},[s("ul",{staticClass:"clearfix"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("选购手机\n              ")])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("企业团购\n              ")])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("F码通道\n              ")])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("米粉卡\n              ")])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("以旧换新\n              ")])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("话费充值\n              ")])])])]),s("div",{staticClass:"sub-promo"},[s("ul",[s("li",{staticClass:"first"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"homeimage/promo1.jpg",alt:""}})])]),s("li",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"homeimage/promo2.jpg",alt:""}})])]),s("li",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"homeimage/promo3.jpg",alt:""}})])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row card-group"},[s("div",{staticClass:"row card-group-head clearfix"},[s("h2",{staticClass:"col title fl"},[t._v("家电")]),s("ul",{staticClass:"col tab fr"},[s("li",{staticClass:"fl"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("热门")])]),s("li",{staticClass:"fl"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("电视影音")])]),s("li",{staticClass:"fl"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("电脑")])]),s("li",{staticClass:"fl"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("家居")])])])]),s("div",{staticClass:"row card-group-body clearfix"},[s("div",{staticClass:"col fl leader"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/5500.html"}},[s("img",{attrs:{src:"homeimage/ls_01.jpg",alt:""}})]),s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/4348.html"}},[s("img",{attrs:{src:"homeimage/ls_02.jpg",alt:""}})])]),s("div",{staticClass:"col fr"},[s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic pic-sm"},[s("img",{attrs:{src:"homeimage/c_09.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米家互联网空调")])]),s("p",{staticClass:"desc"},[t._v("1.5匹变频 / 高效制冷热 / AI远程控制")]),s("p",{staticClass:"price"},[s("span",[t._v("2299")]),t._v("元\n                  ")])])]),s("div",{staticClass:"comment"},[s("p",{staticClass:"content"},[t._v("已安装好了，是不是很气派")]),s("p",{staticClass:"auth"},[t._v("来自于 小小孙 的评价")])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic pic-sm"},[s("img",{attrs:{src:"homeimage/cs_02.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米家互联网空调")])]),s("p",{staticClass:"desc"},[t._v("1.5匹变频 / 高效制冷热 / AI远程控制")]),s("p",{staticClass:"price"},[s("span",[t._v("2299")]),t._v("元\n                  ")])])]),s("div",{staticClass:"comment"},[s("p",{staticClass:"content"},[t._v("速度快！服务好！质量高！师傅辛苦了！")]),s("p",{staticClass:"auth"},[t._v("来自于 小小孙 的评价")])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic pic-sm"},[s("img",{attrs:{src:"homeimage/c_11.png",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v('15.6"笔记本 i5 4G MX110')])]),s("p",{staticClass:"desc"}),s("p",{staticClass:"price"},[s("span",[t._v("4199")]),t._v("元\n                  ")])])]),s("p",{staticClass:"discount bg-gn"},[t._v("新品")]),s("div",{staticClass:"comment"},[s("p",{staticClass:"content"},[t._v("速度快！服务好！质量高！师傅辛苦了！")]),s("p",{staticClass:"auth"},[t._v("来自于 小小孙 的评价")])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic pic-sm"},[s("img",{attrs:{src:"homeimage/cs_04.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米家互联网空调")])]),s("p",{staticClass:"desc"},[t._v("1.5匹变频 / 高效制冷热 / AI远程控制")]),s("p",{staticClass:"price"},[s("span",[t._v("2299")]),t._v("元\n                  ")])])]),s("div",{staticClass:"comment"},[s("p",{staticClass:"content"},[t._v("速度快！服务好！质量高！师傅辛苦了！")]),s("p",{staticClass:"auth"},[t._v("来自于 小小孙 的评价")])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic pic-sm"},[s("img",{attrs:{src:"homeimage/cs_06.png",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米家互联网空调")])]),s("p",{staticClass:"desc"},[t._v("1.5匹变频 / 高效制冷热 / AI远程控制")]),s("p",{staticClass:"price"},[s("span",[t._v("2299")]),t._v("元\n                  ")])])]),s("div",{staticClass:"comment"},[s("p",{staticClass:"content"},[t._v("速度快！服务好！质量高！师傅辛苦了！")]),s("p",{staticClass:"auth"},[t._v("来自于 小小孙 的评价")])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic pic-sm"},[s("img",{attrs:{src:"homeimage/cs_07.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米家互联网空调")])]),s("p",{staticClass:"desc"},[t._v("1.5匹变频 / 高效制冷热 / AI远程控制")]),s("p",{staticClass:"price"},[s("span",[t._v("2299")]),t._v("元\n                  ")])])]),s("div",{staticClass:"comment"},[s("p",{staticClass:"content"},[t._v("速度快！服务好！质量高！师傅辛苦了！")]),s("p",{staticClass:"auth"},[t._v("来自于 小小孙 的评价")])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic pic-sm"},[s("img",{attrs:{src:"homeimage/cs_08.png",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米家互联网空调")])]),s("p",{staticClass:"desc"},[t._v("1.5匹变频 / 高效制冷热 / AI远程控制")]),s("p",{staticClass:"price"},[s("span",[t._v("2299")]),t._v("元\n                  ")])])]),s("div",{staticClass:"comment"},[s("p",{staticClass:"content"},[t._v("速度快！服务好！质量高！师傅辛苦了！")]),s("p",{staticClass:"auth"},[t._v("来自于 小小孙 的评价")])])]),s("div",{staticClass:"fl"},[s("div",{staticClass:"card-sm"},[s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://www.mi.com/water2/"}},[t._v("小米净水器（厨下式")])]),s("p",{staticClass:"price"},[s("span",[t._v("1999")]),t._v("元\n                  ")])]),s("a",{staticClass:"pic-xs local",attrs:{href:"https://www.mi.com/water2/"}},[s("img",{attrs:{src:"homeimage/cs_01.jpg",alt:""}})])]),s("div",{staticClass:"card-sm"},[s("div",{staticClass:"text"},[s("h3",{staticClass:"title hot-title"},[s("a",{attrs:{target:"_blank",href:"http://www.mi.com/a/h/8043.html"}},[t._v("浏览更多")])]),s("p",{staticClass:"desc"},[t._v("热门")])]),s("a",{staticClass:"hot-more local",attrs:{target:"_blank",href:"http://www.mi.com/a/h/8043.html"}},[s("i",{staticClass:"iconfont"},[t._v("")])])])])])]),s("div",{staticClass:"row spec-product"},[s("a",{attrs:{target:"_blank",href:"http://www.mi.com/a/h/8448.html"}},[s("img",{attrs:{src:"homeimage/bg_03.jpg",alt:""}})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row card-group recommend clearfix"},[s("div",{staticClass:"row card-group-head clearfix"},[s("h2",{staticClass:"col title fl"},[t._v("为你推荐")]),s("a",{staticClass:"col link fr",attrs:{target:"_blank",href:"https://www.mi.com/p/1915.html"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("a",{staticClass:"col link fr",attrs:{target:"_blank",href:"https://www.mi.com/p/1915.html"}},[s("i",{staticClass:"iconfont"},[t._v("")])])]),s("div",{staticClass:"row card-group-body clearfix"},[s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_51.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("小米家庭影院")])]),s("p",{staticClass:"price"},[t._v("2099元")]),s("p",{staticClass:"desc"})])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_52.jpeg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("最生活浴巾•Air（1条装）")])]),s("p",{staticClass:"price"},[t._v("69元")]),s("p",{staticClass:"desc"},[t._v("32人好评")])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_53.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("FREETIE云弹减震运动鞋 男款")])]),s("p",{staticClass:"price"},[t._v("249元")]),s("p",{staticClass:"desc"},[t._v("977人好评")])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_54.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("悦活每日水果燕麦")])]),s("p",{staticClass:"price"},[t._v("49元")]),s("p",{staticClass:"desc"},[t._v("32人好评")])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_55.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("小米家庭影院")])]),s("p",{staticClass:"price"},[t._v("2099元")]),s("p",{staticClass:"desc"},[t._v("32人好评")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row card-group card-group-4 hot-product clearfix"},[s("div",{staticClass:"row card-group-head clearfix"},[s("h2",{staticClass:"col title fl"},[t._v("热评产品")])]),s("div",{staticClass:"row card-group-body clearfix"},[s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_21.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("p",{staticClass:"desc"},[s("a",{attrs:{href:"#",target:"_blank"}},[t._v("外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...")])]),s("p",{staticClass:"auth"},[t._v("来自于 酸小妞～！ 的评价")]),s("p",{staticClass:"pro-info"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("米家压力IH电饭煲")]),s("span",{staticClass:"divider"},[t._v("|")]),s("span",{staticClass:"price"},[t._v("299元")])])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_22.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("p",{staticClass:"desc"},[s("a",{attrs:{href:"#",target:"_blank"}},[t._v("非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖")])]),s("p",{staticClass:"auth"},[t._v("来自于 酸小妞～！ 的评价")]),s("p",{staticClass:"pro-info"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("米家压力IH电饭煲")]),s("span",{staticClass:"divider"},[t._v("|")]),s("span",{staticClass:"price"},[t._v("299元")])])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_23.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("p",{staticClass:"desc"},[s("a",{attrs:{href:"#",target:"_blank"}},[t._v("东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...")])]),s("p",{staticClass:"auth"},[t._v("来自于 酸小妞～！ 的评价")]),s("p",{staticClass:"pro-info"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("米家压力IH电饭煲")]),s("span",{staticClass:"divider"},[t._v("|")]),s("span",{staticClass:"price"},[t._v("299元")])])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_24.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("p",{staticClass:"desc"},[s("a",{attrs:{href:"#",target:"_blank"}},[t._v("包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...")])]),s("p",{staticClass:"auth"},[t._v("来自于 酸小妞～！ 的评价")]),s("p",{staticClass:"pro-info"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("米家压力IH电饭煲")]),s("span",{staticClass:"divider"},[t._v("|")]),s("span",{staticClass:"price"},[t._v("299元")])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row card-group card-group-4 content clearfix"},[s("div",{staticClass:"row card-group-head clearfix"},[s("h2",{staticClass:"col title fl"},[t._v("内容")])]),s("div",{staticClass:"row card-group-body"},[s("div",{staticClass:"card fl"},[s("div",[s("h3",{staticClass:"cat"},[t._v("图书")]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("哈利·波特与被诅咒的孩子")])]),s("p",{staticClass:"desc"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！")])]),s("p",{staticClass:"price"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("29.37元")])])]),s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_49.png",alt:""}})])]),s("a",{staticClass:"page-last",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("a",{staticClass:"page-next",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("ul",[s("li",{staticClass:"focused"},[s("span")]),s("li",[s("span")]),s("li",[s("span")])])]),s("div",{staticClass:"card fl"},[s("div",[s("h3",{staticClass:"cat"},[t._v("MIUI 主题")]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("\n                    LINE\n                    FRIENDS温暖圣诞主题\n                  ")])]),s("p",{staticClass:"desc"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("\n                    超萌超可爱 LINE\n                    FRIENDS来袭~\n                  ")])]),s("p",{staticClass:"price"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}})])]),s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_48.png",alt:""}})])]),s("a",{staticClass:"page-last",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("a",{staticClass:"page-next",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("ul",[s("li",{staticClass:"focused"},[s("span")]),s("li",[s("span")]),s("li",[s("span")]),s("li",[s("span")])])]),s("div",{staticClass:"card fl"},[s("div",[s("h3",{staticClass:"cat"},[t._v("游戏")]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("非人学园")])]),s("p",{staticClass:"desc"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("脑洞大开的二次元竞技手游")])]),s("p",{staticClass:"price"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}})])]),s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_47.png",alt:""}})])]),s("a",{staticClass:"page-last",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("a",{staticClass:"page-next",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("ul",[s("li",{staticClass:"focused"},[s("span")]),s("li",[s("span")]),s("li",[s("span")]),s("li",[s("span")])])]),s("div",{staticClass:"card fl"},[s("div",[s("h3",{staticClass:"cat"},[t._v("应用")]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("2018金米奖")])]),s("p",{staticClass:"desc"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}},[t._v("最优秀的应用和游戏")])]),s("p",{staticClass:"price"},[s("a",{attrs:{target:"_blank",href:"http://www.duokan.com/book/120800"}})])]),s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_46.png",alt:""}})])]),s("a",{staticClass:"page-last",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("a",{staticClass:"page-next",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")])]),s("ul",[s("li",{staticClass:"focused"},[s("span")]),s("li",[s("span")]),s("li",[s("span")]),s("li",[s("span")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row card-group card-group-4 video clearfix"},[s("div",{staticClass:"row card-group-head clearfix"},[s("h2",{staticClass:"col title fl"},[t._v("视频")]),s("a",{staticClass:"col link fr",attrs:{target:"_blank",href:"https://www.mi.com/p/1915.html"}},[t._v("\n            查看全部\n            "),s("i",{staticClass:"iconfont"},[t._v("")])])]),s("div",{staticClass:"row card-group-body clearfix"},[s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_41.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("一团火")])]),s("p",{staticClass:"desc"},[t._v("小米创业8年内部纪录片（手机篇）")])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_42.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("小米8，一部与众不同的手机")])]),s("p",{staticClass:"desc"},[t._v("透明探索版，将科技与美学完美结合")])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_43.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("小米MIX 2S，一面科技 一面艺术")])]),s("p",{staticClass:"desc"},[t._v("艺术品般陶瓷机身，惊艳、璀璨")])])])]),s("div",{staticClass:"card fl"},[s("div",[s("a",{staticClass:"pic",attrs:{href:"https://item.mi.com/product/10000117.html",target:"_blank"}},[s("img",{attrs:{src:"homeimage/c_44.jpg",alt:""}})]),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[s("a",{attrs:{target:"_blank",href:"https://item.mi.com/product/10000117.html"}},[t._v("生活中无所不在的小爱同学")])]),s("p",{staticClass:"desc"},[t._v("一句话搞定手机复杂操作")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row footer"},[s("div",{staticClass:"more-info"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"support"},[s("li",[s("a",{attrs:{target:"_blank",href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("预约维修服务\n            ")])]),s("li",[s("a",{attrs:{target:"_blank",href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("7天无理由退货\n            ")])]),s("li",[s("a",{attrs:{target:"_blank",href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("15天免费换货\n            ")])]),s("li",[s("a",{attrs:{target:"_blank",href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("满150包邮\n            ")])]),s("li",[s("a",{attrs:{target:"_blank",href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("520余家售后网点\n            ")])])]),s("div",{staticClass:"row more clearfix"},[s("dl",{staticClass:"col link-group fl"},[s("dt",[t._v("帮助中心")]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("账户管理")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("购物指南")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("订单操作")])])]),s("dl",{staticClass:"col link-group fl"},[s("dt",[t._v("帮助中心")]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("账户管理")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("购物指南")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("订单操作")])])]),s("dl",{staticClass:"col link-group fl"},[s("dt",[t._v("帮助中心")]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("账户管理")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("购物指南")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("订单操作")])])]),s("dl",{staticClass:"col link-group fl"},[s("dt",[t._v("帮助中心")]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("账户管理")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("购物指南")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("订单操作")])])]),s("dl",{staticClass:"col link-group fl"},[s("dt",[t._v("帮助中心")]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("账户管理")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("购物指南")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("订单操作")])])]),s("dl",{staticClass:"col link-group fl"},[s("dt",[t._v("帮助中心")]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("账户管理")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("购物指南")])]),s("dd",[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("订单操作")])])]),s("div",{staticClass:"col contact fr"},[s("div",{staticClass:"tel"},[t._v("400-100-5678")]),s("div",{staticClass:"desc"},[t._v("\n              周一至周日 8:00-18:00\n              "),s("br"),t._v("（仅收市话费）\n            ")]),s("button",[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("联系客服\n            ")])])])])]),s("div",{staticClass:"meta"},[s("div",{staticClass:"container"},[s("div",{staticClass:"detail clearfix"},[s("div",{staticClass:"logo fl"},[s("img",{attrs:{src:"homeimage/logo-footer.png",alt:""}})]),s("div",{staticClass:"links fl"},[s("div",{staticClass:"sites"},[s("a",{attrs:{target:"_blank",href:"#"}},[t._v("小米商城")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("MIUI")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米家")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米聊")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("多看")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("游戏")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("路由器")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("米粉卡")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("政企服务")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("小米天猫店")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("隐私政策")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("商城用户协议")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("账号协议")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("问题反馈")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("廉正举报")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("诚信合规")]),t._v(" |\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("Select Region")])]),s("p",[t._v("\n              ©\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("mi.com")]),t._v(" 京ICP证110507号 京ICP备10046444号\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("京公网安备11010802020134号")]),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("京网文[2017]1530-131号")]),s("br"),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("（京）网械平台备字（2018）第00005号")]),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("互联网药品信息服务资格证 (京) -非经营性-2014-0090")]),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("营业执照")]),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("医疗器械公告")]),s("br"),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("增值电信业务许可证")]),t._v(" 网络食品经营备案（京）【2018】WLSPJYBAHF-12\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("食品经营许可证")]),s("br"),t._v("违法和不良信息举报电话：185-0130-1238\n              "),s("a",{attrs:{target:"_blank",href:"#"}},[t._v("知识产权侵权投诉")]),t._v("\n              本网站所列数据，除特殊说明，所有数据均出自我司实验室测试\n            ")])])]),s("div",{staticClass:"confirm clearfix"},[s("img",{attrs:{src:"homeimage/v-logo-1 .png",alt:""}}),s("img",{attrs:{src:"homeimage/v-logo-2.png",alt:""}}),s("img",{attrs:{src:"homeimage/v-logo-3.png",alt:""}}),s("img",{attrs:{src:"homeimage/v-logo-4.png",alt:""}})]),s("div",{staticClass:"mi-bg"})])])])}],h=s("cebc"),m=s("0418"),f=s("2f62"),u=s("cb30"),C=s("ccc8"),g={data:function(){return{menuCarousel:[],menuIndex:[],carouselIndex:0,cartNum:0}},created:function(){var t=this;u["a"].get("/menu?type=carousel",{_silent:!0}).then(function(a){t.menuCarousel=a}),u["a"].get("/menu?type=index",{_silent:!0}).then(function(a){console.log(a),t.menuIndex=a}),this.loggedIn&&u["a"].get("/user/cart").then(function(a){t.cartNum=a.length})},components:{"app-header":m["a"],Swiper:C["b"],Slide:C["a"]},computed:Object(h["a"])({},Object(f["c"])("user",["user"])),methods:Object(h["a"])({},Object(f["b"])("user",["checklogin"]))},b=g,k=(s("de14"),Object(n["a"])(b,d,p,!1,null,"2a810a46",null)),w=k.exports;i["default"].use(_["a"]);var x=new _["a"]({mode:"hash",routes:[{path:"/",name:"home",component:w},{path:"/login",name:"login",component:function(){return s.e("login").then(s.bind(null,"a55b"))}},{path:"/product/:id",name:"product",component:function(){return s.e("chunk-400c38a0").then(s.bind(null,"d2f1"))}},{path:"/cart",name:"cart",component:function(){return s.e("chunk-1a38b93a").then(s.bind(null,"b789"))}},{path:"/checkout/:ids",name:"checkout",component:function(){return s.e("chunk-780a5c3a").then(s.bind(null,"7cb4"))}},{path:"/confirm/:order_no",name:"confirm",component:function(){return s.e("chunk-357cc9c2").then(s.bind(null,"e116"))}}]}),y={namespaced:!0,state:{loggedIn:!1,user:{}},mutations:{LOGIN:function(t,a){t.user=a,t.loggedIn=!0,console.log("为以后请求统一设置"),u["a"].defaults.headers.common["Token"]=a.token},LOGOUT:function(t){t.user={},t.loggedIn=!1,u["a"].defaults.headers.common["Token"]&&(u["a"].defaults.headers.common["Token"]="")}},actions:{login:function(t,a){var s=t.commit;return u["a"].post("/login",a).then(function(t){s("LOGIN",t)})},register:function(t,a){var s=t.commit;return u["a"].post("/register",a).then(function(t){s("LOGIN",t)})},logout:function(t){var a=t.commit;a("LOGOUT")},check_login:function(t){var a=t.state;u["a"].defaults.headers.common["Token"]=a.user.token||""}}},j=s("0e44");i["default"].use(f["a"]);var I=new f["a"].Store({modules:{user:y},state:{},mutations:{},actions:{},plugins:[Object(j["a"])({key:"userInfo",paths:["user"],subscriber:function(t){return t.dispatch("user/check_login"),function(a){return t.subscribe(a)}}})]}),O=s("5c96"),E=s.n(O),S=(s("0fae"),s("7bb1")),N=s("fd7a"),T=s.n(N);i["default"].use(E.a),i["default"].use(S["b"]),S["a"].localize("zh_CN",T.a),i["default"].config.productionTip=!1,new i["default"]({router:x,store:I,render:function(t){return t(v)}}).$mount("#app")},bff1:function(t,a,s){},cb30:function(t,a,s){"use strict";var i=s("bc3a"),e=s.n(i),r=e.a.create({baseURL:"http://vip.chanke.xyz/mi"});r.interceptors.response.use(function(t){return t.data.data},function(t){t.config._silent?console.warn(t):alert(t.response.data.errorMessage)}),a["a"]=r},de14:function(t,a,s){"use strict";var i=s("bff1"),e=s.n(i);e.a}});
//# sourceMappingURL=app.cfa71816.js.map