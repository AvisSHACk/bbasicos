(this.webpackJsonpbasicos=this.webpackJsonpbasicos||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(0),c=n(1),i=n(4),a=function(e){var t=e.usuario,n=void 0===t?"Usuario":t,r=e.color,c=void 0===r?"grey":r;return Object(s.jsxs)("h1",{className:"titulo",style:{color:c},children:["Hola ",n]})},o=function(){var e=["Alejandro","Manuel","Cesar"],t="Per\xfa";return Object(s.jsxs)("div",{children:[Object(s.jsx)(a,{}),Object(s.jsx)(a,{usuario:"Manuel",color:"purple"}),Object(s.jsx)("p",{children:"Que tengas un buen dia"}),Object(s.jsxs)("p",{children:["T\xfa eres de: ",t]}),Object(s.jsxs)("ul",{children:[e.map((function(e,t){return Object(s.jsx)("li",{children:e},t)})),e]})]})},j=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],a=n[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),u=j[0],b=j[1],l=function(e){"usuario"===e.target.name?a(e.target.value):"password"===e.target.name&&b(e.target.value)};return Object(s.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault(),"carlos"===i&&"123"===u?e.cambiarEstadoSesion(!0):(alert("Datos incorrectos"),a(""),b(""))},autoComplete:"off",children:[Object(s.jsxs)("p",{children:["Usuario: ",i]}),Object(s.jsxs)("p",{children:["Contrase\xf1a: ",u]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"usuario",children:"Usuario"}),Object(s.jsx)("input",{id:"usuario",type:"text",name:"usuario",value:i,onChange:l})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(s.jsx)("input",{id:"password",type:"password",name:"password",value:u,onChange:l})]}),Object(s.jsx)("button",{type:"submit",children:"Iniciar Sesion"})]})},u=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1],a=function(e){"Incrementar"===e.target.textContent?i(n+1):i(n-1)};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Contador: ",n]}),Object(s.jsx)("button",{onClick:a,children:"Incrementar"}),Object(s.jsx)("button",{onClick:a,children:"Disminuir"})]})},b=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(s.jsx)(s.Fragment,{children:!0===n?Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{}),Object(s.jsx)(u,{}),Object(s.jsx)("button",{onClick:function(){return i(!1)},children:"Cerrar Sesion"})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"No has iniciado Sesion"}),Object(s.jsx)(j,{cambiarEstadoSesion:i})]})})};n.n(i).a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9db6edf7.chunk.js.map