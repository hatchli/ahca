(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/Tr7":function(t,e,n){"use strict";function r(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}n.d(e,"a",(function(){return r}))},"/h9T":function(t,e,n){"use strict";function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return r}))},"5c+8":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vbcS"),o=n("VliS"),u=n("SDjk"),s=a.a.createElement;e.a=function(t){return s(i.b,{query:o.a},(function(e){var n=e.data;return e.loading?s("p",null,"Loading..."):n.me?t.children:s("div",null,s("p",null,"Please Sign in before continuing"),s(u.a,null))}))}},"7MTR":function(t,e,n){"use strict";n("q1tI");var r=n("vOnD").c.div.withConfig({displayName:"WidthStyles",componentId:"sc-7j56cs-0"})(["max-width:",";margin:0 auto;padding:2rem;"],(function(t){return t.theme.maxWidth}));e.a=r},JCDJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=6e4;function a(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var a=e.getTime()%r;return n*r+a}},QcRT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return n("V+vy")}])},"V+vy":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),i=n("YFqc"),o=n.n(i),u=n("0iUn"),s=n("sLSF"),l=n("MI3g"),d=n("a7VT"),m=n("Tit0"),c=n("rt45"),f=n("vbcS"),h=n("/Tr7");function g(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(h.a)(t),r=Object(h.a)(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function v(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(h.a)(t),r=Object(h.a)(e),a=g(n,r),i=Math.abs(function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(h.a)(t),r=Object(h.a)(e);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(n,r));n.setMonth(n.getMonth()-a*i);var o=a*(i-(g(n,r)===-a));return 0===o?0:o}function p(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(h.a)(t),r=Object(h.a)(e);return n.getTime()-r.getTime()}(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var b=n("iSMj");function y(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},t)}var w=n("JCDJ"),D=1440,M=2520,T=43200,j=86400;var S=n("/h9T"),N=36e5,O=6e4,W=2,P={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},x=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,C=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,q=/^([+-])(\d{2})(?::?(\d{2}))?$/;function E(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=e||{},r=null==n.additionalDigits?W:Object(S.a)(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,i=function(t){var e,n={},r=t.split(P.dateTimeDelimiter);/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],P.timeZoneDelimiter.test(n.date)&&(n.date=t.split(P.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length)));if(e){var a=P.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(t);if(i.date){var o=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}(i.date,r);a=function(t,e){if(null===e)return null;var n=t.match(x);if(!n)return null;var r=!!n[4],a=k(n[1]),i=k(n[2])-1,o=k(n[3]),u=k(n[4]),s=k(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=r.getUTCDay()||7,i=7*(e-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(e,u,s):new Date(NaN);var l=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(A[e]||(I(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(I(t)?366:365)}(e,a)?(l.setUTCFullYear(e,i,Math.max(a,o)),l):new Date(NaN)}(o.restDateString,o.year)}if(isNaN(a)||!a)return new Date(NaN);var u,s=a.getTime(),l=0;if(i.time&&(l=function(t){var e=t.match(C);if(!e)return null;var n=X(e[1]),r=X(e[2]),a=X(e[3]);if(!function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a))return NaN;return n*N+r*O+1e3*a}(i.time),isNaN(l)||null===l))return new Date(NaN);if(i.timezone){if(u=function(t){if("Z"===t)return 0;var e=t.match(q);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;if(!function(t,e){return e>=0&&e<=59}(0,a))return NaN;return n*(r*N+a*O)}(i.timezone),isNaN(u))return new Date(NaN)}else{var d=s+l,m=new Date(d);u=Object(w.a)(m);var c=new Date(d);u>0?c.setDate(m.getDate()+1):c.setDate(m.getDate()-1);var f=Object(w.a)(c)-u;f>0&&(u+=f)}return new Date(s+l+u)}function k(t){return t?parseInt(t):1}function X(t){return t&&parseFloat(t.replace(",","."))||0}var A=[31,null,31,30,31,30,31,31,30,31,30,31];function I(t){return t%400===0||t%4===0&&t%100}var F=n("lTCR"),J=n.n(F),R=n("vOnD"),Y=n("2y/O"),z=R.c.li.withConfig({displayName:"OrderItemStyles",componentId:"sc-1r53nvz-0"})(["box-shadow:",";list-style:none;padding:2rem;border:1px solid ",";h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"],(function(t){return t.theme.bs}),(function(t){return t.theme.offWhite})),U=n("VUBQ"),_=n("7MTR"),V=a.a.createElement;function Q(){var t=Object(c.a)(["\n  query USER_ORDERS_QUERY {\n    orders(orderBy: createdAt_DESC) {\n      id\n      total\n      createdAt\n      items {\n        id\n        title\n        price\n        description\n        quantity\n        image\n      }\n    }\n  }\n"]);return Q=function(){return t},t}var B=J()(Q()),Z=R.c.ul.withConfig({displayName:"OrderList__OrderUl",componentId:"sc-1ho1jd6-0"})(["display:grid;grid-gap:4rem;grid-template-columns:repeat(auto-fit,minmax(40%,1fr));"]),L=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return V(_.a,null,V(f.b,{query:B},(function(t){var e=t.data,n=e?e.orders:null,r=e?e.loading:null,a=e?e.error:null;return r?V("p",null,"Loading..."):a?V(U.a,{error:a}):V("div",null,V("h2",null,"You have ",null===n||void 0===n?void 0:n.length," orders"),V(Z,null,null===n||void 0===n?void 0:n.map((function(t){return V(z,{key:t.id},V(o.a,{href:{pathname:"/order",query:{id:t.id}}},V("a",null,V("div",{className:"order-meta"},V("p",null,t.items.reduce((function(t,e){return t+e.quantity}),0)," ","Items"),V("p",null,t.items.length," Products"),V("p",null,function(t,e,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=n||{},a=r.locale||b.a;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=g(t,e);if(isNaN(i))throw new RangeError("Invalid time value");var o,u,s=y(r);s.addSuffix=Boolean(r.addSuffix),s.comparison=i,i>0?(o=Object(h.a)(e),u=Object(h.a)(t)):(o=Object(h.a)(t),u=Object(h.a)(e));var l,d=p(u,o),m=(Object(w.a)(u)-Object(w.a)(o))/1e3,c=Math.round((d-m)/60);if(c<2)return r.includeSeconds?d<5?a.formatDistance("lessThanXSeconds",5,s):d<10?a.formatDistance("lessThanXSeconds",10,s):d<20?a.formatDistance("lessThanXSeconds",20,s):d<40?a.formatDistance("halfAMinute",null,s):d<60?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",1,s):0===c?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",c,s);if(c<45)return a.formatDistance("xMinutes",c,s);if(c<90)return a.formatDistance("aboutXHours",1,s);if(c<D){var f=Math.round(c/60);return a.formatDistance("aboutXHours",f,s)}if(c<M)return a.formatDistance("xDays",1,s);if(c<T){var S=Math.round(c/D);return a.formatDistance("xDays",S,s)}if(c<j)return l=Math.round(c/T),a.formatDistance("aboutXMonths",l,s);if((l=v(u,o))<12){var N=Math.round(c/T);return a.formatDistance("xMonths",N,s)}var O=l%12,W=Math.floor(l/12);return O<3?a.formatDistance("aboutXYears",W,s):O<9?a.formatDistance("overXYears",W,s):a.formatDistance("almostXYears",W+1,s)}(E(t.createdAt),new Date)),V("p",null,Object(Y.a)(t.total))),V("div",{className:"images"},t.items.map((function(t){return V("img",{key:t.id,src:t.image,alt:t.itlte})}))," "))))}))))})))}}]),e}(a.a.Component),$=n("5c+8"),H=a.a.createElement;e.default=function(t){return H("div",null,H($.a,null,H(L,null)))}},iSMj:function(t,e,n){"use strict";var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,l=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(r)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(r)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(l.length)}}}var l,d={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"===typeof r[t]?r[t]:1===e?r[t].one:r[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(t,e,n,r){return o[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(l.matchPattern);if(!a)return null;var i=a[0],o=n.match(l.parsePattern);if(!o)return null;var u=l.valueCallback?l.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};e.a=d}},[["QcRT",1,0]]]);