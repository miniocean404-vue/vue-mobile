(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1badacaf"],{"1c8e":function(t,e,r){"use strict";r("7364")},3962:function(t,e,r){},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),a=r("7dd0"),i="String Iterator",s=o.set,c=o.getterFor(i);a(String,"String",(function(t){s(this,{type:i,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,f,d,p,h=o(t),m="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,g=void 0!==v,y=l(h),w=0;if(g&&(v=n(v,b>2?arguments[2]:void 0,2)),void 0==y||m==Array&&i(y))for(e=s(h.length),r=new m(e);e>w;w++)p=g?v(h[w],w):h[w],c(r,w,p);else for(f=y.call(h),d=f.next,r=new m;!(u=d.call(f)).done;w++)p=g?a(f,v,[u.value,w],!0):u.value,c(r,w,p);return r.length=w,r}},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},7364:function(t,e,r){},"7cb9":function(t,e,r){"use strict";r("e347")},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(i){throw o(t),i}}},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("NavBar",{staticClass:"home-nav",attrs:{backgroundColor:"#ff699c"}},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("TabControl",{directives:[{name:"show",rawName:"v-show",value:t.isTabshow,expression:"isTabshow"}],ref:"tabControlB",staticClass:"tab-control-b",attrs:{title:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("Scroll",{ref:"scroll",staticClass:"wrapeerSize",attrs:{"probe-type":3,pullUpLoad:!0},on:{scrollon:t.contentScroll,pullUpLoad:t.loadMore}},[r("HomeSwiper",{staticClass:"home-swiper",attrs:{banners:t.banners}}),r("Recommend",{attrs:{recommends:t.recommends}}),r("Feature"),r("TabControl",{ref:"tabControl",staticClass:"tab-control",attrs:{title:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("GoodList",{attrs:{goods:t.showGoods}})],1),r("BackTop",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},o=[];function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return a(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function c(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||s(t)||c(t)||l()}var f=r("a7ac"),d=r("5d17"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-contrlo"},t._l(t.title,(function(e,n){return r("div",{key:n,staticClass:"tab-contrlo-item",class:{active:t.currentIndex==n},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},h=[],m={name:"TabControl",props:{title:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},b=m,v=(r("1c8e"),r("2877")),g=Object(v["a"])(b,p,h,!1,null,null,null),y=g.exports,w=r("74bd"),S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Swiper",t._l(t.banners,(function(t,e){return r("SwiperItem",{key:e},[r("a",{attrs:{href:t.link}},[r("img",{attrs:{src:t.image,alt:""}})])])})),1)},C=[],k=r("dc2c"),T={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},components:{Swiper:k["a"],SwiperItem:k["b"]}},x=T,_=Object(v["a"])(x,S,C,!1,null,null,null),$=_.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e,n){return r("div",{key:n,staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}})]),r("div",{staticClass:"font"},[t._v(t._s(e.title))])])})),0)},O=[],j={name:"Recommend",props:{recommends:{type:Array,default:function(){return[]}}}},I=j,H=(r("bf79"),Object(v["a"])(I,A,O,!1,null,null,null)),G=H.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],M={name:"Feature"},F=M,L=(r("c17f"),Object(v["a"])(F,B,E,!1,null,null,null)),N=L.exports,R=r("0c6d");function U(){return Object(R["a"])({url:"/home/multidata"})}function Y(t,e){return Object(R["a"])({url:"/home/data",params:{type:t,page:e}})}var z=r("eecb"),D={name:"home",mixins:[z["a"]],components:{NavBar:f["a"],HomeSwiper:$,Recommend:G,Feature:N,TabControl:y,GoodList:w["a"],Scroll:d["a"]},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,isTabshow:!1,saveY:0}},created:function(){this.getHomeMultiData(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},computed:{showGoods:function(){return this.goods[this.currentType].list}},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.getSaveY()},methods:{getHomeMultiData:function(){var t=this;U().then((function(e){t.banners=e.data.data.banner.list,t.recommends=e.data.data.recommend.list,t.getOffsetTop()}))},getHomeGoods:function(t){var e=this,r=this.goods[t].page+1;Y(t,r).then((function(n){var o;(o=e.goods[t].list).push.apply(o,u(n.data.data.list)),e.goods[r]=r,e.refresh()}))},getOffsetTop:function(){var t=this;this.$nextTick((function(){t.tabOffsetTop=t.$refs.tabControl.$el.offsetTop}))},tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControlB.currentIndex=t,this.$refs.tabControl.currentIndex=t,this.refresh()},refresh:function(){var t=this;this.$nextTick((function(){t.$refs.scroll.refresh()}))},contentScroll:function(t){this.isShowBackTop=-t.y>1e3,this.isTabshow=-t.y>this.tabOffsetTop},loadMore:function(){this.getHomeGoods(this.currentType),this.$refs.scroll.scroll.finishPullUp()}}},J=D,P=(r("7cb9"),Object(v["a"])(J,n,o,!1,null,null,null));e["default"]=P.exports},bf79:function(t,e,r){"use strict";r("e94d")},c17f:function(t,e,r){"use strict";r("3962")},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("e260"),i=r("9112"),s=r("b622"),c=s("iterator"),l=s("toStringTag"),u=a.values;for(var f in o){var d=n[f],p=d&&d.prototype;if(p){if(p[c]!==u)try{i(p,c,u)}catch(m){p[c]=u}if(p[l]||i(p,l,f),o[f])for(var h in a)if(p[h]!==a[h])try{i(p,h,a[h])}catch(m){p[h]=a[h]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=a.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var p=d.prototype=u.prototype;p.constructor=d;var h=p.toString,m="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(i(f,t))return"";var r=m?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e347:function(t,e,r){},e94d:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),f=r("1dde"),d=r("ae40"),p=f("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),m=u("species"),b=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var r,n,u,f=c(this),d=s(f.length),p=i(t,d),h=i(void 0===e?d:e,d);if(a(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(f,p,h);for(n=new(void 0===r?Array:r)(v(h-p,0)),u=0;p<h;p++,u++)p in f&&l(n,u,f[p]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-1badacaf.54c57209.js.map