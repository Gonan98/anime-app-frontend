(this["webpackJsonpanimefav-frontend"]=this["webpackJsonpanimefav-frontend"]||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),l=a(1),o=a(7),i=a(2),u=function(e){var t=e.setIsAuth,a=e.username,n=function(){localStorage.removeItem("token"),t(!1)};return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(o.b,{className:"navbar-brand",to:"/anime-app-frontend"},"Animefav"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),a?r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor02"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/vistos"},"Vistos")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/por-ver"},"Por ver")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/about"},"About"))),r.a.createElement("ul",{className:"navbar-nav mr-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link text-white",to:"/perfil"},a)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link text-white",to:"/anime-app-frontend",onClick:n},"Salir")))):r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor02"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/about"},"About"))),r.a.createElement("ul",{className:"navbar-nav mr-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link text-white",to:"/signin"},"Iniciar Sesion")))))},m=a(5),p=a.n(m),b=a(29),d=a(3),v=a.n(d),f=a(10),E=function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/animes/status/watched",{headers:{"access-token":t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/animes/status/towatch",{headers:{"access-token":t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/animes",{headers:{"access-token":t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("/api/animes/".concat(a),{headers:{"access-token":t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/animes",Object(b.a)({},a),{headers:{"access-token":t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.put("/api/animes/".concat(a.id),{status:a.status},{headers:{"access-token":t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}();var j=function(e){var t=e.title,a=e.synopsis,c=e.episodes,s=e.image_url,o=e.type,i=e.saved,u=Object(n.useState)(i),m=Object(l.a)(u,2),p=m[0],b=m[1],d=function(e){var n=localStorage.getItem("token");y(n,{title:t,synopsis:a,episodes:c,image_url:s,type:o,status:e}).then((function(e){return b(!0)})).catch((function(e){return window.alert("Debe iniciar sesion si quiere guardar un anime")}))};return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:s,className:"card-img w-100",alt:t})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},"Episodios: ",c),r.a.createElement("p",{className:"card-text"},"Tipo: ",o),p?r.a.createElement("button",{className:"btn btn-info btn-sm"},r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})):r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){return d("watched")}},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){return d("towatch")}},r.a.createElement("i",{className:"fa fa-eye","aria-hidden":"true"}))))))))};var w=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)([]),b=Object(l.a)(m,2),d=b[0],v=b[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");e&&g(e).then((function(e){return v(e)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"form-inline mt-4",onSubmit:function(e){e.preventDefault(),p.a.get("https://api.jikan.moe/v3/search/anime?q=".concat(a)).then((function(e){var t=e.data.results;u(t)})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"mx-auto"},r.a.createElement("input",{className:"form-control",placeholder:"Nombre del anime",type:"text",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Buscar"))),r.a.createElement("div",{className:"row row-cols-1 row-cols-md-4 p-4"},i.map((function(e){return r.a.createElement(j,{key:e.mal_id,id:e.mal_id,title:e.title,synopsis:e.synopsis,episodes:e.episodes,type:e.type,image_url:e.image_url,saved:(t=e.title,d.filter((function(e){return e.title===t})).length>0)});var t}))))};var k=function(e){var t=e.setIsAuth,a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],u=c[1],m=Object(n.useState)(""),b=Object(l.a)(m,2),d=b[0],v=b[1],f=Object(n.useState)(!1),E=Object(l.a)(f,2),h=E[0],g=E[1],N=Object(n.useState)(!1),y=Object(l.a)(N,2),O=y[0],j=y[1],w=Object(n.useState)(""),k=Object(l.a)(w,2),S=k[0],x=k[1];return r.a.createElement("div",{className:"card mt-5 mx-auto",style:{width:"24rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j(!0),p.a.post("/api/signin",{username:s,password:d}).then((function(e){localStorage.setItem("token",e.data.token),j(!1),t(!0),g(!0)})).catch((function(e){console.error(e),x("Usuario o contrase\xf1a incorrectos"),j(!1)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Usuario"),r.a.createElement("input",{autoFocus:!0,type:"text",value:s,onChange:function(e){return u(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement("input",{type:"password",value:d,onChange:function(e){return v(e.target.value)},className:"form-control"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Iniciar sesion"),function(){if(S)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},S)}(),function(){if(O)return r.a.createElement("div",{className:"spinner-border text-primary",role:"status"})}(),r.a.createElement("p",null,"\xbfNo tiene una cuenta? Reg\xedstrese ",r.a.createElement(o.b,{to:"/signup"},"aqu\xed")))),function(){if(h)return r.a.createElement(i.a,{to:"/"})}())};var S=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(""),b=Object(l.a)(m,2),d=b[0],v=b[1],f=Object(n.useState)(""),E=Object(l.a)(f,2),h=E[0],g=E[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),O=y[0],j=y[1],w=Object(n.useState)(!1),k=Object(l.a)(w,2),S=k[0],x=k[1],I=Object(n.useState)(!1),C=Object(l.a)(I,2),_=C[0],A=C[1];return r.a.createElement("div",{className:"card mt-5 mx-auto",style:{width:"30rem"}},function(){if(S)return r.a.createElement("div",{className:"alert alert-success",role:"alert"},"Se registr\xf3 correctamente")}(),function(){if(O)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},O)}(),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A(!0),p.a.post("/api/signup",{username:a,email:i,password:d}).then((function(e){console.log(e),c(""),u(""),v(""),g(""),A(!1),x(!0)})).catch((function(e){console.log(e),j("Este correo o usuario ya est\xe1 registrado")}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nombre de usuario"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",value:i,onChange:function(e){return u(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{type:"password",value:d,onChange:function(e){return v(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirma contrase\xf1a"),r.a.createElement("input",{type:"password",value:h,onChange:function(e){return g(e.target.value)},className:"form-control"}),function(){if(h!==d&&h.length>=d.length)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Las contrase\xf1as no coinciden")}()),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Registrar"))),function(){if(_)return r.a.createElement("div",{className:"spinner-border text-primary",role:"status"})}())};var x=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Sobre la aplicaci\xf3n..."),r.a.createElement("p",{className:"lead"},"Esta es una aplicacion web para guardar animes que hayas visto o que quieras ver en un futuro."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."))};function I(e){var t=e.id,a=e.title,n=e.episodes,c=e.type,s=e.image_url,l=e.reload,o=e.typeItem,i=function(){var e=Object(f.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("\xbfDesea quitarlo de la lista?")){e.next=6;break}return a=localStorage.getItem("token"),e.next=5,N(a,t);case 5:l(!0);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=localStorage.getItem("token");O(e,{id:t,status:"watched"}).then((function(e){console.log(e),l(!0)})).catch(console.error)};return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:s,className:"card-img",alt:a})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("strong",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},"Episodios: ",n),r.a.createElement("p",{className:"card-text"},"Tipo: ",c),"POR VER"===o?r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("button",{className:"btn btn-success btn-sm",onClick:u},r.a.createElement("i",{className:"fas fa-check-double"})),r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:i},r.a.createElement("i",{className:"fas fa-times","aria-hidden":"true"}))):r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:i},r.a.createElement("i",{className:"fas fa-times"})))))))}var C=function(e){var t=e.typeList,a=Object(n.useState)([]),c=Object(l.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),m=u[0],p=u[1],b=Object(n.useState)(!0),d=Object(l.a)(b,2),v=d[0],f=d[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");return"VISTOS"===t?E(e).then((function(e){o(e),f(!1)})).catch((function(e){return console.log(e)})):h(e).then((function(e){o(e),f(!1)})).catch((function(e){return console.log(e)})),function(){f(!0),p(!1)}}),[t,m]),r.a.createElement("div",{className:"p-4"},"VISTOS"===t?r.a.createElement("h2",null,"Animes Vistos"):r.a.createElement("h2",null,"Animes Por Ver"),r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"},v?r.a.createElement("h3",{className:"m-5"},"Cargando..."):s.map((function(e,a){return r.a.createElement(I,{key:a,id:e._id,title:e.title,synopsis:e.synopsis,episodes:e.episodes,type:e.type,image_url:e.image_url,reload:p,typeItem:t})}))))};var _=function(e){return r.a.createElement("div",null,"Informacion del anime")};function A(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Mi Perfil"))}var V=function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/profile",{headers:{"access-token":t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var q=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),p=m[0],b=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");e?V(e).then((function(e){c(!0),b(e.username)})).catch((function(e){return console.log(e)})):(b(""),c(!1))}),[a]),r.a.createElement("div",{className:"px-3"},r.a.createElement(o.a,null,r.a.createElement(u,{setIsAuth:c,username:p}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/animes/:id",component:_}),r.a.createElement(i.b,{path:"/signup",component:S}),r.a.createElement(i.b,{path:"/signin"},r.a.createElement(k,{setIsAuth:c})),r.a.createElement(i.b,{path:"/about",component:x}),r.a.createElement(i.b,{path:"/vistos"},r.a.createElement(C,{typeList:"VISTOS"})),r.a.createElement(i.b,{path:"/por-ver"},r.a.createElement(C,{typeList:"POR VER"})),r.a.createElement(i.b,{path:"/perfil",component:A}),r.a.createElement(i.b,{path:"/anime-app-frontend"},r.a.createElement(w,null)))))};a(58),a(59);p.a.defaults.baseURL="https://animefav.herokuapp.com",s.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2d1498a8.chunk.js.map