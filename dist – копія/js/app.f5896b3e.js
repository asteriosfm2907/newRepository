(function(t){function e(e){for(var o,i,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},s=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.vshowCalendar,expression:"vshowCalendar"}],staticClass:"popup"},[a("div",{staticClass:"popup-conatiner container"},[a("div",{staticClass:"row calendar-menu-row"},[a("div",{staticClass:"col-2 offset-2 menu-bar"},[a("button",{staticClass:"menu-bar-item1",on:{click:function(e){return t.full()}}},[t._v("Весь срок")]),a("button",{staticClass:"menu-bar-item2",on:{click:function(e){return t.today()}}},[t._v("Сегодня")]),a("button",{staticClass:"menu-bar-item3",on:{click:function(e){return t.yesterday()}}},[t._v("Вчера")]),a("button",{staticClass:"menu-bar-item4",on:{click:function(e){return t.lastSeven()}}},[t._v("Последнее 7 дней")]),a("button",{staticClass:"menu-bar-item5",on:{click:function(e){return t.thisMonth()}}},[t._v("Последний месяц")]),a("button",{staticClass:"menu-bar-item6",on:{click:function(e){return t.lastMonth()}}},[t._v("Прошлый месяц")])]),a("div",{staticClass:"jzdbox1 jzdbasf jzdcal col-3"},[a("div",{staticClass:"title-holder"},[a("i",{staticClass:"small material-icons previous",on:{click:function(e){return t.previous()}}},[t._v("play_circle_outline")]),a("i",{staticClass:"jzdcalt",domProps:{textContent:t._s(t.month+" 2020")}}),a("i",{staticClass:"small material-icons next",on:{click:function(e){return t.next()}}},[t._v("play_circle_outline")])]),a("span",[t._v("Su")]),a("span",[t._v("Mo")]),a("span",[t._v("Tu")]),a("span",[t._v("We")]),a("span",[t._v("Th")]),a("span",[t._v("Fr")]),a("span",[t._v("Sa")]),a("div",{staticClass:"calendar-body"},[a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),t._l(31,(function(e){return a("span",{key:e,class:{active:t.activeClass(e)},domProps:{textContent:t._s(e)}})})),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"}),a("span",{staticClass:"jzdb"})],2),a("div",{staticClass:"button-placer d-flex"},[a("button",{staticClass:"button-black button-cancel",on:{click:function(e){return t.showCalendar()}}},[t._v("Отмена")]),a("button",{staticClass:"button-org button-togler browser-default",attrs:{disabled:t.buttonActivator},on:{click:function(e){return t.showCalendar()}}},[t._v("Добавить")])])])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 toolbar"},t._l(9,(function(e){return a("div",{key:e,staticClass:"tool-bar-item"},[a("i",{staticClass:"small material-icons toolbarIcon"},[t._v(t._s(t.toolbarIcon))]),a("span",{domProps:{textContent:t._s(t.toolBarItem(e))}})])})),0),a("div",{staticClass:"col-10"},[a("nav",{staticClass:"navbar1"},[a("div",{staticClass:"nav-calendar",on:{click:function(e){return t.datePicker()}}},[a("img",{staticClass:"nav-calendar-img",attrs:{src:"https://img.icons8.com/ios-filled/50/000000/calendar.png"}}),a("div",{staticClass:"navbar-item1"},[a("span",{staticClass:"day-holder"},[t._v(t._s(t.dayPicker))]),a("i",{staticClass:"material-icons arrow-down",on:{click:function(e){return t.showCalendar()}}},[t._v("keyboard_arrow_down")])]),a("img",{staticClass:"nav-calendar-filter",attrs:{src:"https://img.icons8.com/ios/50/000000/sorting-options--v1.png"}}),t._m(0)]),t._m(1)]),a("div",{staticClass:"content-holder"},[a("table",[a("thead",[a("tr",{staticClass:"footer"},[t._m(2),a("th",[t._v("Пользователь")]),a("th",[t._v("Дата регистрации")]),a("th",[t._v("Последняя активность")]),a("th",[t._v("Последнее действие")]),a("th",[t._v("Продукт")]),a("th",[t._v("Oтобразить")]),a("th",[a("a",{domProps:{textContent:t._s(t.quantity)}}),a("i",{staticClass:"material-icons",staticStyle:{"margin-top":"5px"}},[t._v("expand_more")])])])]),t._l(t.informations,(function(e){return a("tbody",[a("tr",[t._m(3,!0),a("td",[a("a",{domProps:{textContent:t._s(e.user)}})]),a("td",[a("a",{domProps:{textContent:t._s(e.date)}})]),a("td",[a("a",{domProps:{textContent:t._s(e.lastActivity)}})]),a("td",[a("a",{domProps:{textContent:t._s(e.lastAction)}})]),a("td",[a("a",{domProps:{textContent:t._s(e.product)}})]),t._m(4,!0),t._m(5,!0)])])}))],2)])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-item2"},[a("span",{staticClass:"day-holder"},[t._v("Фильтр")]),a("i",{staticClass:"material-icons arrow-down"},[t._v("keyboard_arrow_down")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-buttons"},[a("div",{staticClass:"navbar-item3"},[a("button",{staticClass:"button-black"},[t._v("Выгрузить")])]),a("div",{staticClass:"navbar-item4"},[a("button",{staticClass:"button-org browser-default"},[t._v("Добавить контакты")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("div",{staticClass:"f-circle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("div",{staticClass:"f-circle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"create"},[a("i",{staticClass:"material-icons"},[t._v("create")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("i",{staticClass:"material-icons"},[t._v("delete")])])}],i=(a("a9e3"),a("e20c"),{data:function(){return{vshowCalendar:!1,toolbarIcon:"",dateNow:"",week:"",period:"",dayPicker:"Сегодня",buttonActivator:!0,fullDate:"",quantity:"",informations:[{user:"Maks",tittle:"",lastActivity:"Delete",lastAction:"Deletion",product:"Computerasdasdasd",display:"visible",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()},{user:"sdasd",tittle:"",lastActivity:"last activity",lastAction:"last action",product:"product",display:"display",date:(new Date).toLocaleDateString()}],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],month:""}},methods:{full:function(){this.period=1,this.buttonActivator=!1,this.dayPicker="Весь период"},today:function(){this.period=2,this.buttonActivator=!1,this.dayPicker="Сегодня"},yesterday:function(){this.period=3,this.buttonActivator=!1,this.dayPicker="Вчера"},lastSeven:function(){this.period=4,this.buttonActivator=!1,this.dayPicker="Последние 7 дней"},thisMonth:function(){this.period=5,this.buttonActivator=!1,this.dayPicker="Последний месяц"},lastMonth:function(){this.period=6,this.buttonActivator=!1,this.dayPicker="Прошлый месяц"},datePicker:function(){var t=new Date;this.dateNow=t.getDate(),this.month=this.monthNames[t.getMonth()],console.log(this.dateNow,this.week),this.dateNow=Number(this.dateNow),this.week=this.dateNow-7},activeClass:function(t){switch(this.period){case 1:return!0;case 2:return t===this.dateNow;case 3:return t===this.dateNow-1;case 4:return t<=this.dateNow&&t>=this.week;case 5:return t>0&&t<=this.dateNow;case 6:var e=new Date;return this.month=this.monthNames[e.getMonth()-1],!0}},showCalendar:function(){this.vshowCalendar=!this.vshowCalendar,this.$store.dispatch("controlPeriod",this.period)},toolBarItem:function(t){switch(t){case 1:return this.toolbarIcon="dashboard","Продукт";case 2:return this.toolbarIcon="face","Пользователи";case 3:return this.toolbarIcon="add_box","Конструктор сайта";case 4:return this.toolbarIcon="wifi","Трансляции";case 5:return this.toolbarIcon="mail","Рассылка";case 6:return this.toolbarIcon="people_outline","Маркетинг";case 7:return this.toolbarIcon="call_to_action","Платежи";case 8:return this.toolbarIcon="brightness_5","Настройки";case 9:return this.toolbarIcon="timeline","Аналитика"}}},created:function(){this.quantity=this.informations.length}}),r=i,c=(a("034f"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,null,null),d=l.exports,u=a("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var p=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},f=[],h={name:"Home"},y=h,b=Object(c["a"])(y,v,f,!1,null,"75f55f40",null),m=b.exports;o["a"].use(p["a"]);var w=[{path:"/",name:"Home",component:m}],g=new p["a"]({routes:w}),C=g,_=a("2f62");o["a"].use(_["a"]);var A=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:C,store:A,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,a){},e20c:function(t,e,a){var o,n;(function(s,i){"use strict";o=i,n="function"===typeof o?o.call(e,a,e,t):o,void 0===n||(t.exports=n)})(0,(function(){"use strict";var t=function(){},e="undefined",a=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function n(t,e){var a=t[e];if("function"===typeof a.bind)return a.bind(t);try{return Function.prototype.bind.call(a,t)}catch(o){return function(){return Function.prototype.apply.apply(a,[t,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(o){return"debug"===o&&(o="log"),typeof console!==e&&("trace"===o&&a?s:void 0!==console[o]?n(console,o):void 0!==console.log?n(console,"log"):t)}function r(e,a){for(var n=0;n<o.length;n++){var s=o[n];this[s]=n<e?t:this.methodFactory(s,e,a)}this.log=this.debug}function c(t,a,o){return function(){typeof console!==e&&(r.call(this,a,o),this[t].apply(this,arguments))}}function l(t,e,a){return i(t)||c.apply(this,arguments)}function d(t,a,n){var s,i=this,c="loglevel";function d(t){var a=(o[t]||"silent").toUpperCase();if(typeof window!==e){try{return void(window.localStorage[c]=a)}catch(n){}try{window.document.cookie=encodeURIComponent(c)+"="+a+";"}catch(n){}}}function u(){var t;if(typeof window!==e){try{t=window.localStorage[c]}catch(n){}if(typeof t===e)try{var a=window.document.cookie,o=a.indexOf(encodeURIComponent(c)+"=");-1!==o&&(t=/^([^;]+)/.exec(a.slice(o))[1])}catch(n){}return void 0===i.levels[t]&&(t=void 0),t}}t&&(c+=":"+t),i.name=t,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=n||l,i.getLevel=function(){return s},i.setLevel=function(a,o){if("string"===typeof a&&void 0!==i.levels[a.toUpperCase()]&&(a=i.levels[a.toUpperCase()]),!("number"===typeof a&&a>=0&&a<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+a;if(s=a,!1!==o&&d(a),r.call(i,a,t),typeof console===e&&a<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(t){u()||i.setLevel(t,!1)},i.enableAll=function(t){i.setLevel(i.levels.TRACE,t)},i.disableAll=function(t){i.setLevel(i.levels.SILENT,t)};var p=u();null==p&&(p=null==a?"WARN":a),i.setLevel(p,!1)}var u=new d,p={};u.getLogger=function(t){if("string"!==typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=p[t];return e||(e=p[t]=new d(t,u.getLevel(),u.methodFactory)),e};var v=typeof window!==e?window.log:void 0;return u.noConflict=function(){return typeof window!==e&&window.log===u&&(window.log=v),u},u.getLoggers=function(){return p},u}))}});
//# sourceMappingURL=app.f5896b3e.js.map