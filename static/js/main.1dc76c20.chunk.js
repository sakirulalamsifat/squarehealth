(this.webpackJsonpsuqarehealth=this.webpackJsonpsuqarehealth||[]).push([[0],{113:function(e,t,i){},171:function(e,t,i){},173:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(20),r=i.n(s),c=(i(99),i(193)),l=i(192),o=i(87),d=i(197),j=i(191),m=i(86),b=i.n(m),u=i(84),h=i(85),x=i(29),O=i(3),g=function(e){var t=e.doctor;return Object(O.jsxs)(d.a,{className:"my-3 p-3 rounded",children:[Object(O.jsx)(d.a.Header,{children:Object(O.jsxs)("h1",{children:[Object(O.jsx)(u.Icon,{icon:h.a}),Object(O.jsx)("strong",{children:t.name})]})}),Object(O.jsxs)(d.a.Body,{children:[Object(O.jsxs)(d.a.Title,{children:[Object(O.jsx)(b.a,{style:{marginRight:"10px"}}),t.org]}),Object(O.jsxs)(d.a.Text,{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("div",{style:{display:"flex"},children:["Visiting Days:",t.availibility.days.map((function(e){return Object(O.jsx)("span",{style:{marginRight:"5px",marginLeft:"5px"},children:e})}))]}),Object(O.jsxs)("div",{children:["Visiting Duration:"," ",Object(O.jsxs)("span",{style:{marginRight:"5px"},children:[t.visitDurationInMin," minutes"]})]})]}),Object(O.jsx)(x.b,{to:"/appointment/".concat(t.name),children:Object(O.jsx)(j.a,{variant:"primary",children:"Fix appointment"})})]})]})},p=[{name:"Dr. John Doe",org:"Kings London Hospital",availibility:{days:["Sunday","Wednessday","Saturday"],timeslots:{sun:{startingTime:"10:00",endingTime:"18:00"},wed:{startingTime:"18:00",endingTime:"21:00"},sat:{startingTime:"19:00",endingTime:"22:00"}}},visitDurationInMin:15},{name:"Dr. Mary Ellis",org:"ABC Hospital",availibility:{days:["Sunday","Monday","Thursday"],timeslots:{sun:{startingTime:"10:00",endingTime:"18:00"},mon:{startingTime:"21:00",endingTime:"23:00"},thu:{startingTime:"11:00",endingTime:"14:00"}}},visitDurationInMin:15},{name:"Dr. B Chowdhury",org:"Central Hospital",availibility:{days:["Sunday","Monday","Thursday","Friday"],timeslots:{sun:{startingTime:"10:00",endingTime:"18:00"},mon:{startingTime:"21:00",endingTime:"23:00"},thu:{startingTime:"11:00",endingTime:"14:00"},fri:{startingTime:"11:00",endingTime:"14:00"}}},visitDurationInMin:30}],y=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"All Available Doctors"}),Object(O.jsx)(l.a,{children:p.map((function(e){return Object(O.jsx)(o.a,{md:12,lg:12,xl:12,sm:12,children:Object(O.jsx)(g,{doctor:e})},e.name)}))})]})},v=i(25),T=i(12),f=i(195),S=i(115),w=i(88),C=i.n(w),D=i(60),M=i.n(D),F=(i(113),i(114),function(e){var t,i,a=e.days,s=e.doctor,r=Object(n.useState)(null),c=Object(v.a)(r,2),m=c[0],b=c[1],u=Object(n.useState)(""),h=Object(v.a)(u,2),x=h[0],g=h[1],p=Object(n.useState)(""),y=Object(v.a)(p,2),T=y[0],f=y[1],w=String(m).slice(0,3);"Sun"===w?(t=s.availibility.timeslots.sun.startingTime,i=s.availibility.timeslots.sun.endingTime):"Mon"===w?(t=s.availibility.timeslots.mon.startingTime,i=s.availibility.timeslots.mon.endingTime):"Tue"===w?(t=s.availibility.timeslots.tue.startingTime,i=s.availibility.timeslots.tue.endingTime):"Wed"===w?(t=s.availibility.timeslots.wed.startingTime,i=s.availibility.timeslots.wed.endingTime):"Thu"===w?(t=s.availibility.timeslots.thu.startingTime,i=s.availibility.timeslots.thu.endingTime):"Fri"===w?(t=s.availibility.timeslots.fri.startingTime,i=s.availibility.timeslots.fri.endingTime):"Sat"===w&&(t=s.availibility.timeslots.sat.startingTime,i=s.availibility.timeslots.sat.endingTime);for(var D=[],F=0;F<a.length;F++)"Sunday"===a[F]?D.push(0):"Monday"===a[F]?D.push(1):"Tuesday"===a[F]?D.push(2):"Wednessday"===a[F]?D.push(3):"Thursday"===a[F]?D.push(4):"Friday"===a[F]?D.push(5):"Saturday"===a[F]&&D.push(6);var I=function(e,t){var i=M()(e,"HH:mm"),n=M()(t,"HH:mm");n.isBefore(i)&&n.add(1,"day");for(var a=[];i<=n;)a.push(new M.a(i).format("HH:mm")),i.add(s.visitDurationInMin,"minutes");return a}(t,i);function N(e){return(e=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e]).length>1&&((e=e.slice(1))[5]=+e[0]<12?"AM":"PM",e[0]=+e[0]%12||12),e.join("")}return console.log(T),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(o.a,{md:6,children:Object(O.jsx)(C.a,{inline:!0,selected:m,onChange:function(e){return b(e)},minDate:new Date,showMonthDropdown:!0,showYearDropdown:!0,filterDate:function(e){var t=Object(S.default)(e);return D.includes(t)},wrapperClassName:"datepicker"})}),Object(O.jsx)(o.a,{md:3}),Object(O.jsx)(o.a,{md:3,children:Object(O.jsxs)(d.a,{style:{width:"450px"},children:[Object(O.jsx)(d.a.Title,{as:"div",style:{textAlign:"center"},children:Object(O.jsx)("h5",{children:"Availbale Time Slots"})}),Object(O.jsx)("div",{className:"grid-container",children:I.map((function(e){return Object(O.jsx)(j.a,{variant:"outline-primary",onClick:function(){g("Time Slot Selected at"+T+"! Please Give Information Below"),setTimeout((function(){g("")}),5e3),f(N(e))},children:N(e)})}))}),Object(O.jsx)("strong",{children:Object(O.jsx)("h6",{style:{color:"red",textAlign:"center",marginTop:"10px"},children:x})})]})})]})})}),I=function(e){var t=e.match,i=p.find((function(e){return e.name===t.params.name})),a=i.availibility.days,s=Object(n.useState)(""),r=Object(v.a)(s,2),c=r[0],d=r[1],m=Object(n.useState)(""),b=Object(v.a)(m,2),u=b[0],h=b[1],g=Object(n.useState)(""),y=Object(v.a)(g,2),S=y[0],w=y[1],C=Object(T.f)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h4",{style:{textAlign:"center"},children:[" ","Fix an appointment with ",Object(O.jsx)("strong",{children:i.name})]}),Object(O.jsx)(x.b,{className:"btn btn-dark my-3",to:"/",children:"Go Back"}),Object(O.jsx)(l.a,{children:Object(O.jsxs)(o.a,{md:6,children:[Object(O.jsx)("h5",{children:"Select A date"}),Object(O.jsx)(F,{days:a,doctor:i})]})}),Object(O.jsx)(l.a,{style:{marginTop:"50px"},children:Object(O.jsx)(o.a,{md:6,children:Object(O.jsxs)(f.a,{onSubmit:function(){alert("Your Appointment Has Been Scheduled! Please Come on Time"),C.push("/")},children:[Object(O.jsxs)(f.a.Group,{controlId:"name",children:[Object(O.jsx)(f.a.Label,{children:"Name"}),Object(O.jsx)(f.a.Control,{row:"3",value:c,placeholder:"Enter Your Name",required:!0,onChange:function(e){return d(e.target.value)}})]}),Object(O.jsxs)(f.a.Group,{controlId:"phone",children:[Object(O.jsx)(f.a.Label,{children:"Phone Number"}),Object(O.jsx)(f.a.Control,{row:"3",value:u,required:!0,placeholder:"Enter Your Phone Number",onChange:function(e){return h(e.target.value)}})]}),Object(O.jsxs)(f.a.Group,{controlId:"reason",children:[Object(O.jsx)(f.a.Label,{children:"  Problems"}),Object(O.jsx)(f.a.Control,{as:"textarea",row:"3",value:S,required:!0,placeholder:"Enter Your Problems",onChange:function(e){return w(e.target.value)}})]}),Object(O.jsx)(j.a,{type:"submit",variant:"primary",children:"Submit"})]})})})]})},N=i(194),A=i(196),H=i(91),B=function(){return Object(O.jsxs)(N.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:[Object(O.jsx)(x.b,{to:"/",children:Object(O.jsx)(N.a.Brand,{children:"Doctor Lagbe"})}),Object(O.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(N.a.Collapse,{id:"basic-navbar-nav",children:[Object(O.jsx)(A.a,{className:"mr-auto"}),Object(O.jsxs)(f.a,{inline:!0,children:[Object(O.jsx)(H.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(O.jsx)(j.a,{variant:"outline-success",children:"Search"})]})]})]})},k=function(){return Object(O.jsx)("footer",{children:Object(O.jsx)(c.a,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(o.a,{className:"text-center py-3",children:"Copyright \xa9 Md. Sakirul Alam Sifat"})})})})};var P=function(){return Object(O.jsxs)(x.a,{basename:"/squarehealth",children:[Object(O.jsx)(B,{}),Object(O.jsx)(T.c,{children:Object(O.jsx)("main",{className:"py-3",children:Object(O.jsxs)(c.a,{children:[Object(O.jsx)(T.a,{path:"/",component:y,exact:!0}),Object(O.jsx)(T.a,{path:"/appointment/:name",component:I})]})})}),Object(O.jsx)(k,{})]})},L=(i(171),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,198)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),s(e),r(e)}))});r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),L()},99:function(e,t,i){}},[[173,1,2]]]);
//# sourceMappingURL=main.1dc76c20.chunk.js.map