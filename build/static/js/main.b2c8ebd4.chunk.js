(this.webpackJsonpreactpollfrontend=this.webpackJsonpreactpollfrontend||[]).push([[0],{54:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(27),a=c.n(i),r=c(12),j=c(0);function o(e){var t=e.rank,c=e.itemObject;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:c.item.imageUrl,alt:""})}),Object(j.jsx)("td",{children:c.item.itemName}),Object(j.jsx)("td",{children:c.item.description}),Object(j.jsx)("td",{children:c.item.wins}),Object(j.jsx)("td",{children:c.item.matchups}),Object(j.jsx)("td",{children:"".concat(0==c.item.matchups?0:Math.round(c.item.wins/c.item.matchups*1e3)/10,"%")})]})}var l=c(9),b=c.n(l),d="https://csgoitemranker.herokuapp.com";function h(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)({totalMatchups:0,mean:0}),a=Object(r.a)(i,2),l=a[0],h=a[1];return Object(n.useEffect)((function(){b.a.get("".concat(d,"/items")).then((function(e){s(e.data.sort((function(e,t){if(0==t.item.matchups)return-1;var c=t.item.wins/t.item.matchups-e.item.wins/e.item.matchups;return 0==c&&(c=t.item.matchups-e.item.matchups),c})))}))}),[]),Object(n.useEffect)((function(){b.a.get("".concat(d,"/info")).then((function(e){h(e.data)}))}),[c]),console.log(c),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"infobox",children:[Object(j.jsx)("div",{className:"infobox-header",children:"Rankings"}),Object(j.jsx)("div",{className:"infobox-body",children:"".concat(l.totalMatchups," total votes. Average of ").concat(Math.round(10*l.mean)/10," votes per weapon.")})]}),Object(j.jsx)("div",{className:"itemlist",children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Rank"}),Object(j.jsx)("th",{children:"Image"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Wins"}),Object(j.jsx)("th",{children:"Matchups"}),Object(j.jsx)("th",{children:"Winrate"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e,t){return Object(j.jsx)(o,{className:"item",rank:t+1,itemObject:e},e.id)}))})]})})]})}var m=c(15),O=c.n(m),x=c(28);function u(e){var t=e.reroll;return Object(j.jsxs)("div",{className:"rerollbox voter-element",children:[Object(j.jsx)("div",{className:"element-header",children:"Don't know"}),Object(j.jsx)("div",{className:"element-body",children:"Reroll options"}),Object(j.jsx)("div",{className:"element-footer",children:Object(j.jsx)("button",{className:"voteboxbutton",onClick:t,children:"Reroll"})})]})}function v(e){var t=e.itemObject,c=e.click;return Object(j.jsxs)("div",{className:"votebox voter-element",children:[Object(j.jsx)("div",{className:"element-header",children:t.item.itemName}),Object(j.jsxs)("div",{className:"element-body",children:[Object(j.jsx)("img",{src:t.item.imageUrl,alt:""}),t.item.description]}),Object(j.jsx)("div",{className:"element-footer",children:Object(j.jsx)("button",{className:"voteboxbutton",onClick:c,children:"Choose"})})]})}function f(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],s=t[1],i=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.get("".concat(d,"/matchups")).then((function(e){s(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(e){return function(){s(null),b.a.put("".concat(d,"/matchups/").concat(c.id,"/").concat(e)),i()}};return Object(n.useEffect)((function(){i()}),[]),c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"infobox",children:[Object(j.jsx)("div",{className:"infobox-header",children:"Vote"}),Object(j.jsx)("div",{className:"infobox-body",children:"Vote for the weapon you think is best"})]}),Object(j.jsxs)("div",{className:"voter",children:[Object(j.jsx)(v,{itemObject:c.contestants[0],click:a(0)}),Object(j.jsx)(u,{reroll:a(2)}),Object(j.jsx)(v,{itemObject:c.contestants[1],click:a(1)})]})]}):Object(j.jsx)("p",{children:"Loading"})}c(54);var p=c(11);function N(){return Object(j.jsx)("div",{className:"navbarcontainer",children:Object(j.jsxs)("div",{className:"navbar indent",children:[Object(j.jsx)(p.b,{to:"/vote",activeClassName:"active-nav-link",children:"Vote"}),Object(j.jsx)(p.b,{to:"/rankings",activeClassName:"active-nav-link",children:"Rankings"})]})})}var k=c(2);var g=function(){return Object(j.jsx)(p.a,{basename:"/csgoitemranker/",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"indent",children:Object(j.jsxs)(k.d,{children:[Object(j.jsx)(k.b,{path:"/rankings",children:Object(j.jsx)(h,{})}),Object(j.jsx)(k.b,{path:"/vote",children:Object(j.jsx)(f,{})}),Object(j.jsx)(k.b,{path:"/",children:Object(j.jsx)(k.a,{to:"/rankings"})})]})})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.b2c8ebd4.chunk.js.map