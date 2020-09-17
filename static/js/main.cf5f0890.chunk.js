(this["webpackJsonpanime-app"]=this["webpackJsonpanime-app"]||[]).push([[0],{29:function(e,a,t){e.exports=t(59)},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),s=t(5),o=t.n(s),m=t(11),i=t(1),u=t(9),p=t(2),v=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(u.b,{className:"navbar-brand",to:"/"},"Anime App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),e.username?r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor02"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/vistos"},"Vistos")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"))),r.a.createElement("ul",{className:"navbar-nav mr-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link text-white",to:"/perfil"},e.username)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link text-white",to:"/",onClick:e.signOut},"Salir")))):r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor02"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"))),r.a.createElement("ul",{className:"navbar-nav mr-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link text-white",to:"/signin"},"Iniciar Sesion")))))},b=t(4),d=t.n(b);var f=function(e){var a=localStorage.getItem("token"),t=Object(n.useState)(!1),c=Object(i.a)(t,2),l=c[0],s=c[1];Object(n.useEffect)((function(){s(e.saved)}),[e.saved]);var o=function(){d.a.post("/api/animes",{title:e.title,synopsis:e.synopsis,episodes:e.episodes,image_url:e.image_url,type:e.type},{headers:{"access-token":a}}).then((function(e){console.log(e),s(!0)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:e.image_url,className:"card-img",alt:e.title})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("strong",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},"Episodios: ",e.episodes),r.a.createElement("p",{className:"card-text"},"Tipo: ",e.type),l?r.a.createElement("button",{className:"btn btn-success"},"A\xf1adido"):r.a.createElement("button",{className:"btn btn-info",onClick:o},"A\xf1adir"))))))};var E=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)([]),u=Object(i.a)(s,2),p=u[0],v=u[1],b=Object(n.useState)([]),E=Object(i.a)(b,2),g=E[0],N=E[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){var e=Object(m.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))){e.next=12;break}return e.prev=2,e.next=5,d.a.get("/api/animes",{headers:{"access-token":a}});case 5:t=e.sent,N(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"form-inline mt-4",onSubmit:function(e){e.preventDefault(),d.a.get("https://api.jikan.moe/v3/search/anime?q=".concat(c)).then((function(e){var a=e.data.results;v(a)})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"mx-auto"},r.a.createElement("input",{className:"form-control",placeholder:"Nombre del anime",type:"text",value:c,onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Buscar"))),r.a.createElement("div",{className:"row row-cols-1 row-cols-md-4 p-4"},p.map((function(e){return r.a.createElement(f,{key:e.mal_id,title:e.title,synopsis:e.synopsis,episodes:e.episodes,type:e.type,image_url:e.image_url,saved:(a=e.title,g.filter((function(e){return e.title===a})).length>0)});var a}))))};var g=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),v=Object(i.a)(s,2),b=v[0],d=v[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),g=E[0],N=E[1],h=Object(n.useState)(!1),y=Object(i.a)(h,2),j=y[0],O=y[1],k=function(){var a=Object(m.a)(o.a.mark((function a(t){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,e.signIn(c,b);case 3:a.sent?N(!0):O(!0);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"card mt-5 mx-auto",style:{width:"24rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:k},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Usuario"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){l(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement("input",{type:"password",value:b,onChange:function(e){d(e.target.value)},className:"form-control"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Iniciar sesion"),function(){if(j)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Usuario o contrase\xf1a incorrectos")}(),r.a.createElement("p",null,"\xbfNo tiene una cuenta? Reg\xedstrese ",r.a.createElement(u.b,{to:"/signup"},"aqu\xed")))),function(){if(g)return r.a.createElement(p.a,{to:"/"})}())};var N=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),o=s[0],m=s[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),v=p[0],b=p[1],f=Object(n.useState)(""),E=Object(i.a)(f,2),g=E[0],N=E[1],h=Object(n.useState)(!1),y=Object(i.a)(h,2),j=y[0],O=y[1];return r.a.createElement("div",{className:"card mt-5 mx-auto",style:{width:"30rem"}},function(){if(j)return r.a.createElement("div",{className:"alert alert-success",role:"alert"},"Se registr\xf3 correctamente")}(),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d.a.post("/api/signup",{username:t,email:o,password:v}).then((function(e){console.log(e),c(""),m(""),b(""),N(""),O(!0)})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nombre de usuario"),r.a.createElement("input",{type:"text",value:t,onChange:function(e){c(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",value:o,onChange:function(e){m(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{type:"password",value:v,onChange:function(e){b(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirma contrase\xf1a"),r.a.createElement("input",{type:"password",value:g,onChange:function(e){N(e.target.value)},className:"form-control"}),function(){if(g!==v&&g.length>=v.length)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Las contrase\xf1as no coinciden")}()),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Registrar"))))};var h=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Sobre la aplicaci\xf3n..."),r.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."))};function y(e){return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:e.image_url,className:"card-img",alt:e.title})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("strong",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},"Episodios: ",e.episodes),r.a.createElement("p",{className:"card-text"},"Tipo: ",e.type),r.a.createElement("button",{className:"btn btn-warning btn-sm fas fa-times",onClick:function(){var a=localStorage.getItem("token");d.a.delete("/api/animes/".concat(e.id),{headers:{"access-token":a}}).then((function(a){console.log(a),e.reload()})).catch((function(e){return console.log(e)}))}}))))))}var j=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),s=Object(i.a)(l,2),u=s[0],p=s[1],v=function(){var e=Object(m.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,d.a.get("/api/animes",{headers:{"access-token":a}});case 4:t=e.sent,c(t.data),p(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3 p-4"},u?r.a.createElement("h3",{className:"m-5"},"Cargando..."):t.map((function(e,a){return r.a.createElement(y,{key:a,id:e._id,title:e.title,synopsis:e.synopsis,episodes:e.episodes,type:e.type,image_url:e.image_url,reload:v})}))))};var O=function(e){return r.a.createElement("div",null,"Informacion del anime")};var k=function(){return r.a.createElement("div",null,"Mi Perfil")};var w=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(m.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))){e.next=12;break}return e.prev=2,e.next=5,d.a.get("/api/profile",{headers:{"access-token":a}});case 5:t=e.sent,c(t.data.username),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(o.a.mark((function e(a,t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/api/signin",{username:a,password:t});case 3:return n=e.sent,localStorage.setItem("token",n.data.token),e.next=7,l();case 7:return e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a,t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"p-2"},r.a.createElement(u.a,null,r.a.createElement(v,{username:t,signOut:function(){localStorage.removeItem("token"),c("")}}),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",component:E}),r.a.createElement(p.b,{path:"/signup",component:N}),r.a.createElement(p.b,{path:"/signin"},r.a.createElement(g,{signIn:s})),r.a.createElement(p.b,{path:"/about",component:h}),r.a.createElement(p.b,{path:"/vistos"},r.a.createElement(j,null)),r.a.createElement(p.b,{path:"/anime/:id",component:O}),r.a.createElement(p.b,{path:"/perfil",component:k}))))};t(57),t(58);d.a.defaults.baseURL="https://animefav.herokuapp.com/",l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cf5f0890.chunk.js.map