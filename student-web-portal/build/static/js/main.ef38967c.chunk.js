(this["webpackJsonpstudent-web-portal"]=this["webpackJsonpstudent-web-portal"]||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"Exam_wrapper__3Wlsb",globalTimer:"Exam_globalTimer__1I3Tn",examContainer:"Exam_examContainer__2nlR2",exam:"Exam_exam__2hhTn",questionContainer:"Exam_questionContainer__c1Tv_",answerInput:"Exam_answerInput__1ddcy",controllers:"Exam_controllers__1UKs9",navigators:"Exam_navigators__Ya5M-",monitoring:"Exam_monitoring__23Pph",camera:"Exam_camera__1_R5x",submitModal:"Exam_submitModal__1u4-q"}},11:function(e,t,a){e.exports={wrapper:"Home_wrapper__2T_Fn",heroText:"Home_heroText__3I49M",controllers:"Home_controllers__rFN4B",heroImageContainer:"Home_heroImageContainer__5GJSf",login:"Home_login__3S8x2",features:"Home_features__A2lTZ",feature:"Home_feature__2TjzW"}},12:function(e,t,a){e.exports={wrapper:"Prepare_wrapper__1ybL3",uploader:"Prepare_uploader__20TiM",selectedFiles:"Prepare_selectedFiles__14XkU",controller:"Prepare_controller__3OCaC",keytopics:"Prepare_keytopics__3aQdm",heading:"Prepare_heading__1xgX6",topic:"Prepare_topic__3HU2-",data:"Prepare_data__13z2y"}},15:function(e,t,a){e.exports={wrapper:"Sidebar_wrapper__gwEoM",logo:"Sidebar_logo__3Q6XX",link:"Sidebar_link__303yt",active:"Sidebar_active__1lCKK"}},19:function(e,t,a){e.exports={wrapper:"Navbar_wrapper__1QIQ5",maxWidthContainer:"Navbar_maxWidthContainer__2-4ht",logo:"Navbar_logo__1fIJA",links:"Navbar_links__2Vz8A"}},20:function(e,t,a){e.exports={wrapper:"AnswerKeys_wrapper__2jXNJ",vector:"AnswerKeys_vector__95QQ_",form:"AnswerKeys_form__1vB3b",answerKeyContainer:"AnswerKeys_answerKeyContainer__27rt6"}},21:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1DrTO",content:"Modal_content__XeYIx",modalController:"Modal_modalController__2gUDd"}},26:function(e){e.exports=JSON.parse('{"baseUrl":"https://pariksha.imswarnabha.in"}')},27:function(e,t,a){e.exports={wrapper:"StartExam_wrapper__CCxpq",vector:"StartExam_vector__3BARk",form:"StartExam_form__2I9l4"}},32:function(e,t,a){e.exports={wrapper:"RootDashboard_wrapper__2wysm",controller:"RootDashboard_controller__2N5II"}},43:function(e,t,a){e.exports={button:"Button_button__co9Na"}},45:function(e,t,a){e.exports={wrapper:"Preloader_wrapper__HHg0A"}},62:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(42),r=a.n(s),o=a(11),i=a.n(o),l=a(4),j=a.p+"static/media/hero.4c262f70.png",d=a(19),b=a.n(d),u=a.p+"static/media/logo.e123e9be.png",p=a(43),x=a.n(p),m=a(0);function O(e){var t=e.name,a=e.width,n=e.backgroundColor,c=e.textColor,s=e.onClick,r=e.type,o=e.form;return Object(m.jsx)("button",{className:x.a.button,onClick:s,type:r,form:o,style:{width:a,backgroundColor:n,color:c},children:t})}var h="#4D3159",_="#60BF81",f="#F2ECE4",v="#F2785C";function g(){return Object(m.jsx)("div",{className:b.a.wrapper,children:Object(m.jsxs)("div",{className:b.a.maxWidthContainer,children:[Object(m.jsx)("div",{className:b.a.logo,children:Object(m.jsx)("img",{src:u,alt:""})}),Object(m.jsxs)("div",{className:b.a.links,children:[Object(m.jsx)("p",{children:"Home"}),Object(m.jsx)("p",{children:"About"}),Object(m.jsx)("p",{children:"Team"})]})]})})}function w(){var e=Object(l.f)();return Object(m.jsxs)("div",{className:i.a.wrapper,children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{className:i.a.heroText,children:[Object(m.jsx)("p",{children:"Redefining your exam experience"}),Object(m.jsxs)("div",{className:i.a.controllers,children:[Object(m.jsx)(O,{onClick:function(){e.push("/dashboard/start")},name:"Get Started",backgroundColor:_,width:"150px"}),Object(m.jsx)(O,{name:"Learn More",backgroundColor:_,width:"150px"})]})]}),Object(m.jsxs)("div",{className:i.a.features,children:[Object(m.jsx)("div",{className:i.a.feature}),Object(m.jsx)("div",{className:i.a.feature}),Object(m.jsx)("div",{className:i.a.feature})]}),Object(m.jsxs)("div",{className:i.a.heroImageContainer,children:[Object(m.jsxs)("div",{className:i.a.controllers,children:[Object(m.jsx)("button",{className:i.a.login,children:"Login"}),Object(m.jsx)(O,{name:"Sign Up",width:"150px",backgroundColor:h,textColor:f})]}),Object(m.jsx)("img",{src:j,alt:""})]})]})}a(62);var N=a(13),C=a(32),k=a.n(C),y=a(5),S=a(15),E=a.n(S),I=a(88),T=a(89),A=a(90);function q(){var e=Object(n.useState)("start"),t=Object(y.a)(e,2),a=t[0],c=t[1],s=Object(l.g)(),r=Object(l.f)();function o(e){r.push(e)}return Object(n.useEffect)((function(){var e=s.pathname.split("/");c(e[e.length-1])}),[s.pathname]),Object(m.jsxs)("div",{className:E.a.wrapper,children:[Object(m.jsx)("div",{className:E.a.logo,children:Object(m.jsx)("img",{src:u,alt:""})}),Object(m.jsxs)("div",{className:E.a.link,children:[Object(m.jsxs)("button",{onClick:o.bind(this,"/dashboard/start"),className:"start"===a&&E.a.active,children:[Object(m.jsx)(I.a,{})," Start an exam"]}),Object(m.jsxs)("button",{onClick:o.bind(this,"/dashboard/prepare"),className:"prepare"===a&&E.a.active,children:[Object(m.jsx)(T.a,{}),"Preparation"]}),Object(m.jsxs)("button",{onClick:o.bind(this,"/dashboard/answers"),className:"answers"===a&&E.a.active,children:[Object(m.jsx)(A.a,{})," Answer Key"]})]})]})}var D=a(93),F=a(20),P=a.n(F),M=a.p+"static/media/answers.5728de23.png",K=a(16),H=a.n(K),Q=a(26);function R(e){return H.a.get("".concat(Q.baseUrl).concat(e))}function U(e,t){return H.a.put("".concat(Q.baseUrl).concat(e),t)}var X=a(21),B=a.n(X),J=a(91),L=function(e){return Object(m.jsx)(m.Fragment,{children:e.isOpen?Object(m.jsx)("div",{className:B.a.backdrop,children:Object(m.jsxs)("div",{className:B.a.content,children:[Object(m.jsxs)("div",{className:B.a.modalController,children:[Object(m.jsx)("p",{style:e.titleColor?{color:e.titleColor}:null,children:e.title}),Object(m.jsx)("button",{onClick:e.onClose,children:Object(m.jsx)(J.a,{})})]}),Object(m.jsx)("div",{className:B.a.child,children:e.children})]})}):null})},z=a(45),W=a.n(z),V=a(46),Y=a.n(V);function G(){return Object(m.jsx)("div",{className:W.a.wrapper,children:Object(m.jsx)(Y.a,{color:"#6a2c70",size:10})})}function Z(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(y.a)(s,2),o=r[0],i=r[1],l=Object(n.useState)(!1),j=Object(y.a)(l,2),d=j[0],b=j[1],u=Object(n.useState)(!1),p=Object(y.a)(u,2),x=p[0],_=p[1];function f(){b((function(e){return!e}))}return x?Object(m.jsx)(G,{}):Object(m.jsxs)("div",{className:P.a.wrapper,children:[Object(m.jsx)("div",{className:P.a.vector,children:Object(m.jsx)("img",{src:M,alt:""})}),Object(m.jsx)("div",{className:P.a.form,children:Object(m.jsxs)("form",{onChange:function(e){c(e.target.value)},onSubmit:function(e){e.preventDefault(),_(!0),R("/api/students/answerkey/".concat(a)).then((function(e){console.log(e),i(e.data.questions)})).catch((function(e){return console.log(e)})).finally((function(){_(!1),f()}))},children:[Object(m.jsx)("label",{children:"Enter exam code"}),Object(m.jsx)("input",{type:"text"}),Object(m.jsx)(O,{name:"View Answer Key",backgroundColor:h})]})}),Object(m.jsx)(L,{isOpen:d,onClose:f,title:"Answer Key",children:Object(m.jsx)("div",{className:P.a.answerKeyContainer,children:o&&o.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:[Object(m.jsxs)("span",{children:["Q",t+1,")"]})," ",e.question]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"Ans)"})," ",e.answer]})]})}))})})]})}var $=a(51),ee=a(10),te=a.n(ee),ae=a(47),ne=a.n(ae),ce=a(92),se=a(48);function re(e){var t=e.expiryTimestamp,a=Object(se.useTimer)({expiryTimestamp:t,onExpire:function(){return console.warn("onExpire called")}}),n=a.seconds,c=a.minutes,s=a.hours;a.isRunning;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ce.a,{})," ",s," : ",c," : ",n]})}function oe(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),r=Object(y.a)(s,2),o=r[0],i=r[1],j=Object(n.useState)([]),d=Object(y.a)(j,2),b=d[0],u=d[1],p=Object(n.useState)(null),x=Object(y.a)(p,2),h=x[0],f=x[1],g=Object(n.useState)(""),w=Object(y.a)(g,2),N=w[0],C=w[1],k=Object(n.useState)(!1),S=Object(y.a)(k,2),E=S[0],I=S[1],T=Object(n.useState)(!0),A=Object(y.a)(T,2),q=A[0],D=A[1],F=Object(n.useRef)(),P=Object(l.h)(),M=Object(l.f)(),K=new Date;function H(){I((function(e){return!e}))}return K.setSeconds(K.getSeconds()+3600),Object(n.useEffect)((function(){R("/api/students/examination/".concat(P.examId.toLowerCase())).then((function(e){console.log(e),c(e.data)})).catch((function(e){return console.log(e)})).finally((function(){D(!1)}))}),[]),a&&!q?Object(m.jsxs)("div",{className:te.a.wrapper,children:[Object(m.jsx)("div",{className:te.a.globalTimer,children:Object(m.jsx)(re,{expiryTimestamp:K})}),Object(m.jsxs)("div",{className:te.a.examContainer,children:[Object(m.jsxs)("div",{className:te.a.exam,children:[Object(m.jsx)("div",{className:te.a.questionContainer,children:Object(m.jsxs)("p",{children:["Q",o+1,") ",a.questions[o].question]})}),Object(m.jsx)("div",{className:te.a.answerInput,children:Object(m.jsx)("form",{ref:F,id:"response",onChange:function(e){C(e.target.value)},onSubmit:function(e){e.preventDefault();var t=Object($.a)(b),n=t.findIndex((function(e){return e.questionID===a.questions[o].question_id}));-1===n?t.push({QuestionID:a.questions[o].question_id,response:N}):t[n]={QuestionID:a.questions[o].question_id,response:N},console.log(t);var c={student_username:"cp99says",answers:t};U("/api/students/response/".concat(P.examId),c).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),u(t)},children:Object(m.jsx)("textarea",{name:"answer",defaultValue:h||null,placeholder:"Type your answer here..."})})}),Object(m.jsxs)("div",{className:te.a.controllers,children:[Object(m.jsx)("div",{className:te.a.navigators,children:Object(m.jsx)(O,{name:"NEXT",type:"submit",form:"response",onClick:function(e){switch(console.log(o),console.log(b[o]),F.current.reset(),e){case"prev":if(0===o)return;i((function(e){return f(0===e?b[e].response:b[e-1].response),e-1}));break;case"next":b[o]&&f(b[o].response),i((function(e){return e+1}));break;default:return 0}}.bind(this,"next"),backgroundColor:_,width:"100px"})}),Object(m.jsx)(O,{onClick:H,name:"END EXAM",backgroundColor:v,width:"150px"})]})]}),Object(m.jsx)("div",{className:te.a.monitoring,children:Object(m.jsx)("div",{className:te.a.camera,children:Object(m.jsx)(ne.a,{mirrored:!0})})})]}),Object(m.jsx)(L,{isOpen:E,title:"Submit Exam?",onClose:H,children:Object(m.jsxs)("div",{className:te.a.submitModal,children:[Object(m.jsx)("p",{children:"Are you sure you want to submit your exam?"}),Object(m.jsxs)("div",{className:te.a.controllers,children:[Object(m.jsx)(O,{onClick:H,name:"No",backgroundColor:_,width:"150px"}),Object(m.jsx)(O,{onClick:function(){var e={student_username:"cp99says",answers:b};U("/api/students/response/".concat(P.examId),e).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})).finally((function(){M.push("/dashboard/start")}))},name:"Yes",backgroundColor:v,width:"150px"})]})]})})]}):Object(m.jsx)(G,{})}var ie=a(28),le=a(12),je=a.n(le),de=a(50);function be(){var e=Object(de.a)(),t=e.acceptedFiles,a=e.getRootProps,c=e.getInputProps,s=Object(n.useState)(null),r=Object(y.a)(s,2),o=(r[0],r[1]),i=Object(n.useState)(null),l=Object(y.a)(i,2),j=l[0],d=l[1],b=Object(n.useState)(!1),u=Object(y.a)(b,2),p=u[0],x=u[1];return Object(n.useEffect)((function(){console.log(t)}),[t]),p?Object(m.jsx)(G,{}):Object(m.jsxs)("div",{className:je.a.wrapper,children:[Object(m.jsx)("div",{className:je.a.uploader,children:Object(m.jsxs)("div",Object(ie.a)(Object(ie.a)({},a({className:"dropzone"})),{},{children:[Object(m.jsx)("input",Object(ie.a)({},c())),Object(m.jsx)("p",{children:"Drag 'n' drop a file here, or click to select a file"})]}))}),Object(m.jsx)("div",{className:je.a.selectedFiles,children:t.map((function(e){return Object(m.jsx)("p",{children:e.name})}))}),Object(m.jsx)("div",{className:je.a.controller,children:Object(m.jsx)(O,{onClick:function(){x(!0);var e=new FormData;e.append("file",t[0]),H.a.post("https://api.cp99says.in/upload/file",e).then((function(e){console.log(e),o(e.data.file_url),function(e,t){return H.a.post("".concat(Q.baseUrl).concat(e),t)}("/api/students/keytopics",{blob_url:e.data.file_url,blob_type:"string"}).then((function(e){console.log(e),d(e.data)})).catch((function(e){return console.log(e)})).finally((function(){x(!1)}))})).catch((function(e){return console.log(e)})).finally((function(){}))},name:"Upload",width:"150px",backgroundColor:h})}),j&&Object(m.jsxs)("div",{className:je.a.keytopics,children:[Object(m.jsx)("p",{className:je.a.heading,children:"Important Topics :"}),Object.entries(j).map((function(e){return Object(m.jsxs)("div",{className:je.a.topic,children:[Object(m.jsx)("p",{children:e[0]}),Object(m.jsx)("div",{className:je.a.data,children:e[1].map((function(e){return Object(m.jsx)("p",{children:e})}))})]})}))]})]})}var ue=a(27),pe=a.n(ue),xe=a.p+"static/media/exam.340d3a1f.png";function me(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],s=Object(l.f)();return Object(m.jsxs)("div",{className:pe.a.wrapper,children:[Object(m.jsx)("div",{className:pe.a.vector,children:Object(m.jsx)("img",{src:xe,alt:""})}),Object(m.jsx)("div",{className:pe.a.form,children:Object(m.jsxs)("form",{onChange:function(e){c(e.target.value)},onSubmit:function(e){e.preventDefault(),s.push("/dashboard/exam/".concat(a))},children:[Object(m.jsx)("label",{children:"Enter exam code"}),Object(m.jsx)("input",{type:"text"}),Object(m.jsx)(O,{name:"START EXAM",backgroundColor:h})]})})]})}function Oe(){return Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/dashboard/start",component:me}),Object(m.jsx)(l.a,{exact:!0,path:"/dashboard/prepare",component:be}),Object(m.jsx)(l.a,{exact:!0,path:"/dashboard/answers",component:Z}),Object(m.jsx)(l.a,{exact:!0,path:"/dashboard/exam/:examId",component:oe})]})}function he(){return Object(m.jsxs)("div",{className:k.a.wrapper,children:[Object(m.jsx)(q,{}),Object(m.jsxs)("div",{className:k.a.controller,children:[Object(m.jsx)("div",{children:"A"}),"Atimabh Barunaha",Object(m.jsx)(D.a,{})]}),Object(m.jsx)(Oe,{})]})}var _e=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(N.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/dashboard",component:he}),Object(m.jsx)(l.a,{path:"/",component:w})]})})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_e,{})}),document.getElementById("root")),fe()}},[[86,1,2]]]);
//# sourceMappingURL=main.ef38967c.chunk.js.map