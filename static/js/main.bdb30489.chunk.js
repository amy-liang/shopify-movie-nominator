(this["webpackJsonpshopify-movie-nominator"]=this["webpackJsonpshopify-movie-nominator"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);n(60);var r,o,i,a,c,l,u=n(0),s=n.n(u),p=n(49),h=n.n(p),m=(n(65),n(10)),f=n(13),d=n(17),b=n(16),v=n(2),g=n(7),y=n(12),O=n(4),j=(n(25),n(3)),w=n(1),x={OMDbStore:Symbol("OMDbStore")},S=n(23),E=n(28),N=n.n(E),C=n(50),k=n(58),M=Object(S.injectable)()((o=function(){function e(){Object(m.a)(this,e),Object(g.a)(this,"searchResults",i,this),Object(g.a)(this,"nominations",a,this),Object(g.a)(this,"error",c,this),Object(g.a)(this,"searchMovies",l,this)}return Object(f.a)(e,[{key:"parseAndSetMovieData",value:function(e){var t,n=[],r=Object(k.a)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push({title:o.Title,release_year:o.Year,poster_url:o.Poster,id:o.imdbID})}}catch(i){r.e(i)}finally{r.f()}this.searchResults=n}},{key:"addNomination",value:function(e){this.nominations.length<5&&(this.nominations.push(e),this.updateCache())}},{key:"removeNomination",value:function(e){this.nominations=this.nominations.filter((function(t){return t!==e})),this.updateCache()}},{key:"setNominationsFromCache",value:function(){var e=localStorage.getItem("shopify_movie_nominations_cached");if(null!=e)for(var t=e.indexOf("}");t>-1;){var n=JSON.parse(e.substring(0,t+1));this.nominations.push(n),t=(e=e.slice(t+2)).indexOf("}")}}},{key:"updateCache",value:function(){localStorage.setItem("shopify_movie_nominations_cached",this.nominations.map((function(e){return JSON.stringify(e)})).toString())}}]),e}(),i=Object(O.a)(o.prototype,"searchResults",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=Object(O.a)(o.prototype,"nominations",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=Object(O.a)(o.prototype,"error",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=Object(O.a)(o.prototype,"searchMovies",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(C.a)(N.a.mark((function t(r,o){var i,a,c,l,u;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.trim().length<=0)){t.next=4;break}return e.searchResults=[],e.error=null,t.abrupt("return");case 4:return i="?s="+r,a="&p="+o,"&type=movie","&apikey=24cbac1c",c=n(93).default,t.prev=9,t.next=12,c.get("https://www.omdbapi.com/"+i+a+"&type=movie&apikey=24cbac1c");case 12:if("False"!==(l=t.sent).data.Response){t.next=15;break}throw l.data.Error;case 15:u=l.data.Search,e.parseAndSetMovieData(u),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(9),e.error=t.t0;case 22:case"end":return t.stop()}}),t,null,[[9,19]])})));return function(e,n){return t.apply(this,arguments)}}()}}),Object(O.a)(o.prototype,"parseAndSetMovieData",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"parseAndSetMovieData"),o.prototype),Object(O.a)(o.prototype,"addNomination",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"addNomination"),o.prototype),Object(O.a)(o.prototype,"removeNomination",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"removeNomination"),o.prototype),Object(O.a)(o.prototype,"setNominationsFromCache",[w.f],Object.getOwnPropertyDescriptor(o.prototype,"setNominationsFromCache"),o.prototype),r=o))||r,D=new S.Container;D.bind(x.OMDbStore).to(M).inSingletonScope();var R=n(19),z=function e(){Object(m.a)(this,e)};z.green="#A1D683",z.navy="#025157",z.white="#ffffff",z.gray="#898989";var _=function e(){Object(m.a)(this,e)};function I(){var e=Object(v.a)(["\n    width: 100vw;\n    height: ","px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    position: fixed;\n    padding-left: 32px;\n    border-bottom: 0.5px solid ",";\n"]);return I=function(){return e},e}_.headerHeight=70,_.footerHeight=50;var A=j.a.div(I(),_.headerHeight,z.navy),H=function(){return u.createElement(A,null,u.createElement("h1",null,"The Shoppies"))};function F(){var e=Object(v.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0px 8px;\n"]);return F=function(){return e},e}function P(){var e=Object(v.a)(["\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    height: ",";\n    background-color: ",";\n"]);return P=function(){return e},e}var L,J,q,T,W,Y=j.a.div(P(),_.footerHeight,z.green),B=j.a.div(F()),G=function(){return u.createElement(Y,null,u.createElement(B,null,u.createElement("p",null,"Shopify W'21 Web Developer Intern Challenge by Amy Liang"),u.createElement("p",null,"Icons made by"," ",u.createElement("a",{href:"https://www.flaticon.com/authors/photo3idea-studio",title:"photo3idea_studio"},"photo3idea_studio")," ","from"," ",u.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," ","www.flaticon.com"))))},K=n(54),Q=n.n(K),U=n(55),V=n.n(U);function X(){var e=Object(v.a)(["\n    padding: 0 32px;\n    width: 100%;\n    border-radius: 24px;\n    border-size: 0px;\n    border: 1px solid lightgray;\n    height: 35px;\n    font-family: Montserrat;\n"]);return X=function(){return e},e}function Z(){var e=Object(v.a)(["\n    position: absolute;\n    top: 9px;\n    left: 10px;\n    width: 17px;\n"]);return Z=function(){return e},e}function $(){var e=Object(v.a)(["\n    display: flex;\n    position: relative;\n    height: 30px;\n    margin-top: 32px;\n"]);return $=function(){return e},e}var ee=j.a.div($()),te=j.a.img(Z()),ne=j.a.input(X()),re=Object(R.a)((J=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),Object(g.a)(e,"omdbStore",q,Object(y.a)(e)),Object(g.a)(e,"query",T,Object(y.a)(e)),Object(g.a)(e,"onInput",W,Object(y.a)(e)),e}return Object(f.a)(n,[{key:"render",value:function(){var e=V()(this.onInput,500);return u.createElement(ee,null,u.createElement(te,{src:Q.a}),u.createElement(ne,{className:"search",placeholder:"Search for a movie",type:"text",onChange:function(t){return e(t.target.value)}}))}}]),n}(u.Component),q=Object(O.a)(J.prototype,"omdbStore",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return D.get(x.OMDbStore)}}),T=Object(O.a)(J.prototype,"query",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),W=Object(O.a)(J.prototype,"onInput",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.omdbStore.searchMovies(t,1)}}}),L=J))||L,oe=n(56),ie=n.n(oe),ae=n(57),ce=n.n(ae);function le(){var e=Object(v.a)(["\n    width: ","px;\n    height: ","px;\n"]);return le=function(){return e},e}var ue,se=j.a.div(le(),(function(e){return e.width?e.width:0}),(function(e){return e.height?e.height:0})),pe=function(e){return u.createElement(se,{width:e.width,height:e.height},e.children)};function he(){var e=Object(v.a)(["\n    cursor: pointer;\n    border: 1px solid white;\n    margin-top: 8px;\n    padding: 16px;\n"]);return he=function(){return e},e}function me(){var e=Object(v.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    z-index: 100;\n    background-color: rgb(0 0 0 / 50%);\n    > * {\n        color: ",";\n    }\n"]);return me=function(){return e},e}var fe,de,be,ve,ge,ye,Oe=j.a.div(me(),z.white),je=j.a.div(he()),we=Object(R.a)(ue=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return u.createElement(Oe,null,u.createElement("h2",null,"You did it!"),u.createElement("p",null,"Successfully nominated 5 movies"),u.createElement(je,{onClick:this.props.onClick},"Close"))}}]),n}(u.Component))||ue;function xe(){var e=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    margin: 16px 0;\n    flex-direction: column;\n    margin-bottom: ","px;\n"]);return xe=function(){return e},e}function Se(){var e=Object(v.a)(["\n    border: 1px solid ",";\n    color: ",";\n    margin-right: 16px;\n    width: 94px;\n    height: 30px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    cursor: ",";\n    justify-content: center;\n"]);return Se=function(){return e},e}function Ee(){var e=Object(v.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return Ee=function(){return e},e}function Ne(){var e=Object(v.a)(["\n    width: 42px;\n    height: 60px;\n    object-fit: cover;\n"]);return Ne=function(){return e},e}function Ce(){var e=Object(v.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 8px;\n"]);return Ce=function(){return e},e}function ke(){var e=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return ke=function(){return e},e}function Me(){var e=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: flex;\n    flex-direction: column;\n    margin: 0 16px;\n    margin-bottom: ","px;\n"]);return Me=function(){return e},e}function De(){var e=Object(v.a)(["\n    width: 50vw;\n    height: 100vh;\n    padding: 0px 16px;\n    display: flex;\n    flex-direction: column;\n"]);return De=function(){return e},e}function Re(){var e=Object(v.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return Re=function(){return e},e}var ze=j.a.div(Re()),_e=j.a.div(De()),Ie=j.a.div(Me(),_.footerHeight+12),Ae=j.a.div(ke()),He=j.a.div(Ce()),Fe=j.a.img(Ne()),Pe=j.a.div(Ee()),Le=j.a.div(Se(),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.cursor})),Je=j.a.div(xe(),_.footerHeight+12),qe=Object(R.a)((de=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),Object(g.a)(e,"omdbStore",be,Object(y.a)(e)),Object(g.a)(e,"showModal",ve,Object(y.a)(e)),e.toggleNomination=function(t,n){n?e.omdbStore.removeNomination(t):e.omdbStore.nominations.includes(t)||(e.omdbStore.addNomination(t),e.omdbStore.nominations.length>=5&&e.showNominationCompleteModal())},Object(g.a)(e,"showNominationCompleteModal",ge,Object(y.a)(e)),Object(g.a)(e,"hideNominationCompleteModal",ye,Object(y.a)(e)),e.renderSearchResultsList=function(){return e.omdbStore.searchResults.map((function(t){return e.renderSearchResult(t,!1)}))},e.renderNominationsList=function(){return e.omdbStore.nominations.map((function(t){return e.renderSearchResult(t,!0)}))},e.renderSearchResult=function(t,n){var r,o=z.green,i="pointer";return n?(r="Remove",o=z.navy):(r="Nominate",e.omdbStore.nominations.includes(t)&&(o=z.gray,i="default",r="Nominated!")),u.createElement(He,{key:t.id},u.createElement(Pe,null,u.createElement(Fe,{src:t.poster_url}),u.createElement(pe,{width:16}),u.createElement("div",null,u.createElement("h4",null,t.title),u.createElement("p",null,t.release_year))),u.createElement(Le,{onClick:function(){return e.toggleNomination(t,n)},color:o,cursor:i},r))},e.renderSearchResultsContainer=function(){return u.createElement(_e,null,u.createElement(pe,{height:_.headerHeight}),u.createElement(re,null),u.createElement(pe,{height:32}),u.createElement(Ie,null,e.showingSearchResults?e.renderSearchResultsList():u.createElement(Ae,null,e.omdbStore.error?null:u.createElement("img",{src:ie.a,alt:"search placeholder",width:140}),u.createElement("p",null,e.omdbStore.error?e.omdbStore.error:"Search for a movie!"))))},e.renderNominationsContainer=function(){return u.createElement(_e,null,u.createElement(pe,{height:_.headerHeight}),u.createElement(Je,null,u.createElement("h2",null,"Nominations"),e.hasNominations?e.renderNominationsList():u.createElement(Ae,null,u.createElement("img",{src:ce.a,alt:"nominations placeholder",width:140}),u.createElement("p",null,"None yet!"))))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.omdbStore.setNominationsFromCache()}},{key:"render",value:function(){return u.createElement(u.Fragment,null,this.showModal?u.createElement(we,{onClick:this.hideNominationCompleteModal}):null,u.createElement(H,null),u.createElement(ze,null,this.renderSearchResultsContainer(),this.renderNominationsContainer()),u.createElement(G,null))}},{key:"showingSearchResults",get:function(){return this.omdbStore.searchResults.length>0}},{key:"hasNominations",get:function(){return this.omdbStore.nominations.length>0}}]),n}(u.Component),be=Object(O.a)(de.prototype,"omdbStore",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return D.get(x.OMDbStore)}}),ve=Object(O.a)(de.prototype,"showModal",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(O.a)(de.prototype,"showingSearchResults",[w.g],Object.getOwnPropertyDescriptor(de.prototype,"showingSearchResults"),de.prototype),Object(O.a)(de.prototype,"hasNominations",[w.g],Object.getOwnPropertyDescriptor(de.prototype,"hasNominations"),de.prototype),ge=Object(O.a)(de.prototype,"showNominationCompleteModal",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.showModal=!0}}}),ye=Object(O.a)(de.prototype,"hideNominationCompleteModal",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.showModal=!1}}}),fe=de))||fe;function Te(){var e=Object(v.a)(["\n    width: 100vw;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    font-family: Montserrat;\n"]);return Te=function(){return e},e}var We=j.a.div(Te()),Ye=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return u.createElement(We,null,u.createElement(qe,null))}}]),n}(u.Component);h.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Ye,null)),document.getElementById("root"))},54:function(e,t,n){e.exports=n.p+"static/media/search.070dbfaa.svg"},56:function(e,t,n){e.exports=n.p+"static/media/cinema.dc3d4eba.png"},57:function(e,t,n){e.exports=n.p+"static/media/trophy.593a2a6e.png"},59:function(e,t,n){e.exports=n(119)},65:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.bdb30489.chunk.js.map