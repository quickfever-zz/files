(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),r=a.n(o),i=(a(27),a(73)),c=a(74),s=a(5),m=a(6),d=a(8),u=a(7),p=a(9),b=a(72),h=a(70),E=a(11),f=a.n(E),v=a(13),g=a.n(v),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(e){if(window.confirm("This can not be undone! Are you sure?")){var t=a.state.myNotes;delete t[e],a.setState({myNotes:t}),localStorage.setItem("myNotes",JSON.stringify(t))}},a.state={myNotes:JSON.parse(localStorage.getItem("myNotes"))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.myNotes;if(!t)return l.a.createElement(b.a,{to:{pathname:"/1"}});var a=Object.keys(t).map(function(e){var a=t[e];return a.noteId=e,a});return a.sort(function(e,t){return f()(e.lastUpdated).isBefore(t.lastUpdated)?1:f()(e.lastUpdated).isAfter(t.lastUpdated)?-1:0}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"container bg-white pt-3 mb-2 fixed-top"},l.a.createElement("h2",{className:"float-left text-secondary"},"My Notes"),l.a.createElement(h.a,{to:"/"+g.a.slug(),className:"btn btn-outline-primary float-right"},"Create New"),l.a.createElement("div",{className:"clearfix"}),l.a.createElement("hr",{className:"mb-0"})),l.a.createElement("div",{className:"col bg-white pt-3 mb-2"},l.a.createElement("h2",{className:"float-left text-secondary"},"My Notes"),l.a.createElement(h.a,{to:"/"+g.a.slug(),className:"btn btn-outline-primary float-right"},"Create New"),l.a.createElement("div",{className:"clearfix"}),l.a.createElement("hr",{className:"mb-0"}))),l.a.createElement("div",{className:"row"},a.map(function(t){return l.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 my-3",key:t.noteId},l.a.createElement("div",{className:"card h-100"},l.a.createElement("div",{className:"card-body p-0",style:{height:150,overflow:"hidden"}},l.a.createElement(h.a,{to:"/"+t.noteId,className:"list-group-item p-2 list-group-item-action border-0 h-100"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.note},style:{transform:"scale(0.5)",transformOrigin:"10px 10px",width:"200%"}}))),l.a.createElement("div",{className:"card-footer bg-transparent text-secondary px-2 py-1"},l.a.createElement("small",{title:"Last updated"},f()(t.lastUpdated).format("MMM DD,YYYY hh:MM A")),l.a.createElement("img",{title:"Delete note",onClick:function(){return e.handleDelete(t.noteId)},alt:"Delete",src:"/images/article.svg",style:{height:20,cursor:"pointer",marginTop:4},className:"float-right"}))))})))}}]),t}(l.a.Component),y=a(16),w=a(12),N=(a(33),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).shouldComponentUpdate=function(e){return e.html!==a.editable.current.innerHTML&&(a.editable.current.innerHTML=e.html,!0)},a.emitChange=function(){var e=a.editable.current.innerHTML;a.props.onChange&&e!==a.lastHtml&&a.props.onChange({target:{value:e}}),a.lastHtml=e},a.eventHandler=function(e){if(e.altKey&&(e.metaKey||e.ctrlKey))switch(e.keyCode){case 48:return void a.execCommand(e,"formatblock","div");case 49:return void a.execCommand(e,"formatblock","h1");case 50:return void a.execCommand(e,"formatblock","h2");case 51:return void a.execCommand(e,"formatblock","h3");case 52:return void a.execCommand(e,"formatblock","h4");case 53:return void a.execCommand(e,"formatblock","h5");case 54:return void a.execCommand(e,"formatblock","h6")}if(e.shiftKey&&(e.metaKey||e.ctrlKey)&&!e.altKey)switch(e.key.toLowerCase()){case"c":return void a.execCommand(e,"justifycenter");case"l":return void a.execCommand(e,"justifyleft");case"r":return void a.execCommand(e,"justifyright");case"a":return void a.execCommand(e,"removeFormat");case"o":return void a.execCommand(e,"insertunorderedlist");case"i":return void a.execCommand(e,"insertorderedlist");case"x":return void a.execCommand(e,"strikethrough")}if(!e.shiftKey&&(e.metaKey||e.ctrlKey)&&!e.altKey)switch(e.key){case"p":return void a.printDoc(e);case"o":return void a.goToMyNotes(e);case"k":return void a.createNew(e);case"h":return e.preventDefault(),void a.props.onSideBar(e);case"b":return void a.execCommand(e,"bold");case"i":return void a.execCommand(e,"italic");case"u":return void a.execCommand(e,"underline");case"z":return void a.execCommand(e,"undo");case"y":return void a.execCommand(e,"redo")}if(e.shiftKey)switch(e.key){case"Tab":return void a.execCommand(e,"outdent")}switch(e.key){case"Tab":return void a.execCommand(e,"indent")}},a.setEndOfContenteditable=function(){var e,t,n=a.editable.current;document.createRange?((e=document.createRange()).selectNodeContents(n),e.collapse(!1),(t=window.getSelection()).removeAllRanges(),t.addRange(e)):document.selection&&((e=document.body.createTextRange()).moveToElementText(n),e.collapse(!1),e.select())},a.execCommand=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e&&e.preventDefault&&e.preventDefault(),window.document.execCommand("StyleWithCSS"),window.document.execCommand(t,!1,a)},a.printDoc=function(e){if(window.print){e.preventDefault();var t=window.open("","_blank","width=960,height=600,left=200,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");t&&(t.document.open(),t.document.write('<!doctype html><html><head><title>My Notes</title></head><body onload="print();">'+a.editable.current.innerHTML+"</body></html>"),t.document.close())}},a.goToMyNotes=function(e){e.preventDefault(),a.props.history.push("/")},a.createNew=function(e){e.preventDefault(),a.props.history.push("/"+g.a.slug())},a.editable=l.a.createRef(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setEndOfContenteditable(),window.document.addEventListener("keydown",this.eventHandler,!1)}},{key:"componentWillUnmount",value:function(){window.document.removeEventListener("keydown",this.eventHandler)}},{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{ref:this.editable,id:"editable",placeholder:"Type here...",style:{minHeight:"100%",outline:0,padding:20},onInput:this.emitChange,onBlur:this.emitChange,contentEditable:"true","data-gramm_editor":"false",dangerouslySetInnerHTML:{__html:this.props.html||""}})}}]),t}(l.a.Component)),C=(a(35),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).preventDefault=function(e){e.preventDefault()},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"sendEvent",value:function(e,t,a,n,l){var o={preventDefault:function(){},key:e,keyCode:l,shiftKey:a,metaKey:t,ctrlKey:t,altKey:n};this.props.sendEvent(o)}},{key:"render",value:function(){var e=this,t=this.props,a=t.isOpen,n=t.onSideBar,o="ctrl";return window.navigator&&window.navigator.userAgent.indexOf("Mac")>-1&&(o="cmd"),l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{onMouseDown:this.preventDefault,onClick:n,className:"opener icon-text "+(a?"close":"")}," ? "),l.a.createElement("div",{className:"sidebar-container "+(a?"open":"")},l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-action  bg-light sticky-top py-2"},l.a.createElement("span",null,"Quick Edit"),l.a.createElement("div",{className:"float-right icon-text close-icon",onMouseDown:this.preventDefault,onClick:n},"\xd7")),l.a.createElement("li",{onClick:function(){e.sendEvent("h",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"h")),l.a.createElement("div",{className:"float-right"},"Quick Edit Panel"))),l.a.createElement("li",{onClick:function(){e.sendEvent("o",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"o")),l.a.createElement("div",{className:"float-right"},"My Notes"))),l.a.createElement("li",{onClick:function(){e.sendEvent("k",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"k")),l.a.createElement("div",{className:"float-right"},"Create New"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("b",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"b")),l.a.createElement("b",{className:"float-right"},"Bold"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("i",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"i")),l.a.createElement("i",{className:"float-right"},"Italics"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("u",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"u")),l.a.createElement("u",{className:"float-right"},"Underline"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("x",!0,!0)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"shift"),"+",l.a.createElement("kbd",null,"x")),l.a.createElement("div",{style:{textDecorationLine:"line-through"},className:"float-right"},"Strikethrough"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("l",!0,!0)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"shift"),"+",l.a.createElement("kbd",null,"l")),l.a.createElement("div",{className:"float-right"},"Left Align"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("c",!0,!0)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"shift"),"+",l.a.createElement("kbd",null,"c")),l.a.createElement("div",{className:"float-right"},"Center Align"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("r",!0,!0)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"shift"),"+",l.a.createElement("kbd",null,"r")),l.a.createElement("div",{className:"float-right"},"Right Align"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("o",!0,!0)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"shift"),"+",l.a.createElement("kbd",null,"o")),l.a.createElement("div",{className:"float-right"},"Bulleted List"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("i",!0,!0)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"shift"),"+",l.a.createElement("kbd",null,"i")),l.a.createElement("div",{className:"float-right"},"Numbered List"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("",!0,!1,!0,49)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"alt"),"+",l.a.createElement("kbd",null,"1...6")),l.a.createElement("div",{className:"float-right"},"Header 1...6"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("",!0,!1,!0,48)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"alt"),"+",l.a.createElement("kbd",null,"0")),l.a.createElement("div",{className:"float-right"},"Normal Text"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("Tab",!1,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,"tab")),l.a.createElement("div",{className:"float-right"},"Indent"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("Tab",!1,!0)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,"shift"),"+",l.a.createElement("kbd",null,"tab")),l.a.createElement("div",{className:"float-right"},"Outdent"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("p",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"p")),l.a.createElement("div",{className:"float-right"},"Print"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("z",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"z")),l.a.createElement("div",{className:"float-right"},"Undo"))),l.a.createElement("li",{onMouseDown:this.preventDefault,onClick:function(){e.sendEvent("y",!0,!1)},className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,l.a.createElement("kbd",null,o),"+",l.a.createElement("kbd",null,"y")),l.a.createElement("div",{className:"float-right"},"Redo"))),l.a.createElement("li",{onMouseDown:this.preventDefault,className:"list-group-item list-group-item-action py-2 pointer"},l.a.createElement("a",{href:"mailTo:mahesh@microtheta.com"},l.a.createElement("small",{className:"d-block"},l.a.createElement("kbd",null,"mahesh@microtheta.com"),l.a.createElement("div",{className:"float-right"},"Feedback")))))))}}]),t}(l.a.Component)),x=function(e){function t(e){var a;if(Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleOpenClose=function(e){a.setState({isOpen:!a.state.isOpen})},a.sendEvent=function(e){a.editable.current.eventHandler(e)},a.handleChange=function(e){var t=e.target.value;a.setState({html:t});var n=JSON.parse(window.localStorage.getItem("myNotes"))||{};n[a.props.match.params.noteId]={note:t,lastUpdated:f()()},localStorage.setItem("myNotes",JSON.stringify(n))},a.editable=l.a.createRef(),a.state={html:"",noteId:e.match.params.noteId,isOpen:!1},window){var n=JSON.parse(window.localStorage.getItem("myNotes"))||Object(y.a)({},e.match.params.noteId,{}),o=n[e.match.params.noteId]?n[e.match.params.noteId].note:"";o&&(a.state.html=o)}return a.sendEvent=a.sendEvent.bind(Object(w.a)(Object(w.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{to:"/",className:"myNotesMenu"},l.a.createElement("span",{className:"menu-bar"}),l.a.createElement("span",{className:"menu-bar"}),l.a.createElement("span",{className:"menu-bar"})),l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"row h-100"},l.a.createElement("div",{className:"col main-page "+(this.state.isOpen?"opened-sidebar":"")},l.a.createElement(N,Object.assign({},this.props,{ref:this.editable,html:this.state.html,onChange:this.handleChange,onSideBar:this.handleOpenClose}))))),l.a.createElement(C,{sendEvent:this.sendEvent,onSideBar:this.handleOpenClose,isOpen:this.state.isOpen}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(t.noteId!==e.match.params.noteId){var a=JSON.parse(window.localStorage.getItem("myNotes"))||Object(y.a)({},e.match.params.noteId,{});return{html:a[e.match.params.noteId]&&a[e.match.params.noteId].note||"",noteId:e.match.params.noteId}}return null}}]),t}(l.a.Component),D=function(){return l.a.createElement(i.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{path:"/",exact:!0,component:k}),l.a.createElement(c.a,{path:"/:noteId",component:x})))},O=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"editable",placeholder:"Type here...","data-gramm_editor":"false",style:{minHeight:"100%",outline:"0px",padding:"20px"}},l.a.createElement("h1",null,"Quick Notes - Online Notepad"),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement("div",null,"This is a simple yet very powerful notepad."),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement("div",null,"All your data is stored in your browser and this app works offline too!"),l.a.createElement("div",null,"So, anything you write in microtheta notepad gets backed up to your browser, so it\u2019s always there even if you restart your browser or if it happens to crash.",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement("div",null,"Microtheta Notepad has got rich text editing support and all formatting options can be accessed using your keyboard, that's cool!"),l.a.createElement("div",null,"It\u2019s free from distractions, works offline, and supports multiple notes. It's open source!",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("br",{className:"Apple-interchange-newline"}),"This app can simply replace sticky notes."),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement("div",null,"My notes are always listed in recent order, that's good.")),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",null,"Free Online Notepad - no login required"),l.a.createElement("div",null,"Best of all - microtheta notepad is a fast, clean, simple to use and FREE online web notepad."),l.a.createElement("br",null),l.a.createElement("h1",null," Online notepad. Create note online "),l.a.createElement("div",null,"Online notepad. Free online notes app. No login required, no sign up required")))}}]),t}(l.a.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var j=new RegExp("(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)","i"),I=window.navigator.userAgent||"";j.test(I)?r.a.render(l.a.createElement(O,null),document.getElementById("root")):r.a.render(l.a.createElement(D,null),document.getElementById("root")),a.e(2).then(a.t.bind(null,71,7)).then(function(e){e.init({dsn:"https://b1c05155a231405a991cd55f92b226ce@sentry.io/1356723"})}).catch(function(e){console.log(e)}),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");M?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[22,3,1]]]);
//# sourceMappingURL=main.7ed68170.chunk.js.map