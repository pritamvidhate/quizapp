(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n(1),c=n(5),r=n.n(c),s=n(2),a=(n(3),Object(i.createContext)());var u=function(){var t=Object(i.useContext)(a),e=(t.gameState,t.setGameState);return Object(o.jsx)("div",{className:"menu",children:Object(o.jsx)("button",{id:"start",onClick:function(){e("quiz")},children:"Start Quiz"})})},j=[{promp:"what is 1+3?",optionA:"30",optionB:"4",optionC:"39",optionD:"33",answer:"B"},{promp:"How many cards are there in a playing deck?",optionA:"52 cards",optionB:"50 cards",optionC:"39 cards",optionD:"33 cards",answer:"A"},{promp:"which is streaming platform?",optionA:"twitter",optionB:"facebook",optionC:"twitch",optionD:"instagram",answer:"C"},{promp:"How many hours are there in a day?",optionA:"20 hours",optionB:"34 hours",optionC:"24 hours",optionD:"23 hours",answer:"C"},{promp:" How many minutes are there in an hour?",optionA:"60 minutes",optionB:"64 minutes",optionC:"54 minutes",optionD:"34 minutes",answer:"A"}];var p=function(){var t=Object(i.useContext)(a),e=t.score,n=t.setScore,c=t.setGameState,r=Object(i.useState)(0),u=Object(s.a)(r,2),p=u[0],b=u[1],d=Object(i.useState)(""),h=Object(s.a)(d,2),l=h[0],m=h[1];return Object(o.jsxs)("div",{className:"quiz",children:[Object(o.jsx)("h1",{children:j[p].promp}),Object(o.jsxs)("div",{className:"options",children:[Object(o.jsx)("button",{onClick:function(){return m("A")},children:j[p].optionA}),Object(o.jsx)("button",{onClick:function(){return m("B")},children:j[p].optionB}),Object(o.jsx)("button",{onClick:function(){return m("C")},children:j[p].optionC}),Object(o.jsx)("button",{onClick:function(){return m("D")},children:j[p].optionD})]}),p==j.length-1?Object(o.jsx)("button",{id:"btn_div",onClick:function(){j[p].answer==l&&n(e+1),c("endscreen")},children:" Finished Quiz "}):Object(o.jsx)("button",{id:"btn_div",onClick:function(){j[p].answer==l&&n(e+1),b(p+1)},children:" Next Question "})]})};var b=function(){var t=Object(i.useContext)(a),e=t.score,n=t.setScore,c=t.setGameState;return Object(o.jsxs)("div",{className:"endScreen",children:[Object(o.jsx)("h1",{children:"Quiz Finished"}),Object(o.jsxs)("h3",{children:[e," / ",j.length]}),Object(o.jsx)("button",{onClick:function(){n(0),c("menu")},children:"Restart Quiz"})]})};var d=function(){var t=Object(i.useState)("menu"),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)(0),j=Object(s.a)(r,2),d=j[0],h=j[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Quiz App"}),Object(o.jsxs)(a.Provider,{value:{gameState:n,setGameState:c,score:d,setScore:h},children:["menu"===n&&Object(o.jsx)(u,{}),"quiz"===n&&Object(o.jsx)(p,{}),"endscreen"===n&&Object(o.jsx)(b,{})]})]})};r.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))},3:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.e8a49a20.chunk.js.map