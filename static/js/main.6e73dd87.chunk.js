(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/Adam_Doyle_Resume.43bee061.pdf"},5319:function(e,t,n){e.exports=n(5483)},5332:function(e,t,n){},5480:function(e,t,n){},5483:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(25),r=n.n(o),l=n(12),c=n(13),s=function(e){return{type:"SET_SCREEN_SIZE",screenSize:e}},p=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desktop",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_SCREEN_SIZE":return(e=n.screenSize)<600?"mobile":e>=600&&e<1e3?"tablet":"desktop";default:return t}},d=function(){return{type:"OPEN_ABOUT"}},m=function(){return{type:"CLOSE_ABOUT"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_ABOUT":return!0;case"CLOSE_ABOUT":return!1;default:return e}},h=function(e){return{type:"SELECT_COMPANY",company:e}},b={HEARTH:"Hearth",VERTAFORE:"Vertafore",WALMART:"Walmart Labs"},f=b.HEARTH,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_COMPANY":return t.company;default:return e}},y=function(){return{type:"OPEN_CONTACT_MODAL"}},v=function(){return{type:"CLOSE_CONTACT_MODAL"}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_CONTACT_MODAL":return!0;case"CLOSE_CONTACT_MODAL":return!1;default:return e}},x=n(24),C=n.n(x),S=n(28),w=n(94),O={serviceId:"gmail",templateId:"template_QlwfBWPE",userId:"user_6NdIceWS3QBGkrEOHXYY1"},k=function(e){return function(){var t=Object(S.a)(C.a.mark(function t(n,a){var i;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n(j()),i={to_name:"Adam",from_name:"".concat(e.name," email: ").concat(e.email),message_html:e.message},w.send(O.serviceId,O.templateId,i,O.userId).then(function(e){n(T()),console.log("SUCCESS!",e.status,e.text)},function(e){n(z()),console.log("FAILED...",e)});case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},j=function(){return{type:"EMAIL_SENT"}},T=function(){return{type:"EMAIL_RECEIVED"}},z=function(){return{type:"EMAIL_FAILED"}},A={emailInFlight:!1,emailReceived:!1,emailFailed:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;switch((arguments.length>1?arguments[1]:void 0).type){case"EMAIL_SENT":return Object.assign({},e,{emailInFlight:!0,emailReceived:!1,emailFailed:!1});case"EMAIL_RECEIVED":return Object.assign({},e,{emailInFlight:!1,emailReceived:!0,emailFailed:!1});case"EMAIL_FAILED":return Object.assign({},e,{emailInFlight:!1,emailReceived:!1,emailFailed:!0});default:return e}},I=Object(c.c)({screenSize:p,aboutOpen:u,selectedCompany:g,contactModalIsOpen:E,emailStatus:H}),M=n(5485),D=n(5486),R=(n(5332),n(4)),B=n(5),L=n(7),N=n(6),F=n(8),_=n(95),W=n.n(_),P=n(96),U=n.n(P),V=n(37),J=n.n(V),X=n(48),G=n(34),Y=n.n(G),q={background:"#2A2A2A",white:"#E5E5E5",grey:"#848586",blue:"#16ADC2",primary:"#401786",secondary:"#9880C1",third:"#38E5F2"},Q={navBar:{desktop:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:q.background,position:"fixed",width:"100vw",marginTop:"-100px"},tablet:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:q.background,position:"fixed",width:"100vw",marginTop:"-100px"},mobile:{cursor:"pointer",height:"11vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:q.background,position:"fixed",width:"100vw",marginTop:"-100px"}},logo:{desktop:{height:"40px",color:q.white,marginLeft:"203px"},tablet:{height:"40px",color:q.white},mobile:{height:"40px",color:q.white}},paths:{display:"flex",flexDirection:"row",path:{marginRight:"30px",cursor:"pointer",color:q.white}},hamburger:{color:q.white},resumeLink:{textDecoration:"none",color:q.white,border:"1px solid ".concat(q.white),width:"107px",height:"40px",boxSizing:"border-box",borderRadius:"5px",padding:"3px",mobile:{textDecoration:"none",color:"black"}}},K={ABOUT:"about",EXPERIENCE:"experience",CONTACT:"contact",HOME:"home"},Z=function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(i)))).state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleOpenResume=function(){n.handleClose()},n.handleClose=function(){n.setState({anchorEl:null})},n.scroll=function(){var e=Object(S.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.handleClose();case 2:n.props.scrollToElement(t);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl;return i.a.createElement("div",null,i.a.createElement(W.a,{onClick:this.handleClick},i.a.createElement(X.b,{style:Q.hamburger})),i.a.createElement(U.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},i.a.createElement(J.a,{onClick:function(){e.scroll(K.ABOUT)}}," ","About"," "),i.a.createElement(J.a,{onClick:function(){e.scroll(K.EXPERIENCE)}}," ","Experience"," "),i.a.createElement(J.a,{onClick:function(){e.scroll(K.CONTACT)}}," ","Contact"," "),i.a.createElement(J.a,null,i.a.createElement("a",{href:Y.a,target:"_blank",style:Q.resumeLink.mobile},"Resume"))))}}]),t}(i.a.Component),$=n(97),ee=n.n($),te=function(e){return i.a.createElement("div",{style:Q.navBar[e.screenSize]},i.a.createElement("div",null,i.a.createElement("img",{onClick:function(){e.scrollToElement(K.HOME)},style:Q.logo[e.screenSize],src:ee.a,alt:"Adam Doyle"})),"desktop"===e.screenSize||"tablet"===e.screenSize?i.a.createElement("div",{style:Q.paths},i.a.createElement("div",{onClick:function(){e.scrollToElement(K.ABOUT)},style:Q.paths.path}," ","About"," "),i.a.createElement("div",{onClick:function(){e.scrollToElement(K.EXPERIENCE)},style:Q.paths.path}," ","Experience"," "),i.a.createElement("div",{onClick:function(){e.scrollToElement(K.CONTACT)},style:Q.paths.path}," ","Contact"," "),i.a.createElement("div",{style:Q.paths.path},i.a.createElement("a",{href:Y.a,target:"_blank",style:Q.resumeLink},"Resume"))):i.a.createElement(Z,e))},ne=function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(i)))).viewResume=function(){window.open("data:application/pdf"+Y.a)},n.scrollToElement=function(e){n.props.scrollToMyRef(e)},n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:K.HOME},i.a.createElement(te,{viewResume:this.viewResume,screenSize:this.props.screenSize,scrollToElement:this.scrollToElement,style:Q.navBarComponent}))}}]),t}(a.Component),ae=Object(l.b)(function(e){return{screenSize:e.screenSize,aboutOpen:e.aboutOpen}},function(e){return Object(c.b)({openAbout:d,closeAbout:m},e)})(ne),ie=n(3),oe={body:{desktop:{marginLeft:"203px",marginRight:"203px",marginBottom:"150px",backgroundColor:q.background},mobile:{marginBottom:"150px",backgroundColor:q.background,marginLeft:"10px",marginRight:"10px"}},componentHeader:{color:q.blue,fontSize:"30px",marginBottom:"15px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal"},componentSubHeader:{color:q.white,fontFamily:"Helvetica",lineHeight:"normal"}},re=function(e){return{headline:{desktop:Object(ie.a)({},oe.body.desktop,{height:"100vh",marginTop:"100px",marginBottom:"0"}),tablet:Object(ie.a)({},oe.body.mobile,{marginTop:"100px"}),mobile:Object(ie.a)({},oe.body.mobile,{marginTop:"100px"})},intro:{color:q.grey,fontFamily:"Helvetica",lineHeight:"30px",fontSize:"desktop"===e?"30px":"20px",fontWeight:"bold",marginBottom:"desktop"===e?"10vh":"0vh"},myNameIs:{color:q.blue,fontSize:"desktop"===e?"100px":"70px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal",marginBottom:"desktop"===e?"10vh":"15px"},wat:{color:q.white,fontSize:"desktop"===e?"30px":"20px",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"desktop"===e?"50px":"30px",marginBottom:"desktop"===e?"5vh":"15px"},details:{color:q.grey,fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"desktop"===e?"30px":"20px",marginBottom:"desktop"===e?"10vh":"50px"},contact:{backgroundColor:q.blue,padding:"5px",width:"110px",display:"flex",justifyContent:"center",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px",cursor:"pointer"},title:{color:q.blue}}},le={modal:{mobile:{height:"75vh",width:"75vw",margin:"auto"},desktop:{height:"75vh",width:"600px",margin:"auto"},tablet:{height:"75vh",width:"600px",margin:"auto"}},contactContent:{backgroundColor:q.grey,padding:"3vh",height:"69vh",display:"flex",flexDirection:"column"},header:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"4vh"},cancel:{marginTop:"5px"},headerText:{color:q.blue,fontSize:"26px",fontWeight:"bold"},input:{height:"5vh",marginBottom:"4vh"},messageInput:{height:"20vh",marginBottom:"4vh"},emailButton:{true:{backgroundColor:"grey",padding:"5px",width:"110px",display:"flex",justifyContent:"center",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px",cursor:"pointer"},false:{backgroundColor:q.blue,padding:"5px",width:"110px",display:"flex",justifyContent:"center",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px",cursor:"pointer"}}},ce=n(36),se=n.n(ce),pe={errorModal:{margin:"auto",height:"80px",width:"300px",border:"1px solid black"},content:{backgroundColor:"white"},header:{backgroundColor:"white",padding:"24px 24px 20px 24px",fontSize:"16px",fontWeight:"bold",marginBottom:"4vh"},message:{padding:"0 24px 40px"},ok:{position:"relative",bottom:"8px",left:"252px",color:q.blue,cursor:"pointer",fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"30px",fontSize:"15px"}},de=function(e){function t(){return Object(R.a)(this,t),Object(L.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement(se.a,{open:this.props.open,style:pe.errorModal},i.a.createElement("div",{style:pe.content},i.a.createElement("div",{style:pe.header},"Cannot send email"),i.a.createElement("div",{style:pe.message},this.props.errorMessage),i.a.createElement("div",{style:pe.ok,onClick:this.props.closeErrorModal},"OK")))}}]),t}(a.Component),me=function(e){function t(e){var n;return Object(R.a)(this,t),(n=Object(L.a)(this,Object(N.a)(t).call(this,e))).handleNameChange=function(e){e.preventDefault(),n.setState({name:e.target.value})},n.handleMessageChange=function(e){e.preventDefault(),n.setState({message:e.target.value})},n.handleEmailChange=function(e){e.preventDefault(),n.setState({email:e.target.value})},n.handleSubjectChange=function(e){e.preventDefault(),n.setState({subject:e.target.value})},n.closeErrorModal=function(){n.setState({error:!1,name:"",message:"",email:"",subject:"",errorMessage:""})},n.checkMail=Object(S.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.email||!n.state.message){e.next=6;break}return e.next=3,n.props.sendEmail(n.state);case 3:window.setTimeout(function(){n.props.closeContactModal()},1500),e.next=8;break;case 6:t=n.state.email||n.state.message?n.state.email?"Please include a message to send an email":"Please include an email address to send an email":"Please include an email address and message to send an email",n.setState({error:!0,errorMessage:t});case 8:case"end":return e.stop()}},e,this)})),n.state={name:"",message:"",email:"",subject:"",errorMessage:"",error:!1},n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this,t=this.props.emailStatus.emailInFlight;return i.a.createElement(se.a,{open:this.props.open,style:le.modal[this.props.screenSize]},i.a.createElement("div",{style:le.contactContent},i.a.createElement("div",{style:le.header},i.a.createElement("div",{style:le.headerText},"Get in Touch"),i.a.createElement(X.a,{style:le.cancel,onClick:function(){e.props.closeContactModal()}})),i.a.createElement("input",{placeholder:"name",style:le.input,onChange:this.handleNameChange}),i.a.createElement("input",{placeholder:"email",style:le.input,onChange:this.handleEmailChange}),i.a.createElement("input",{placeholder:"subject",style:le.input,onChange:this.handleSubjectChange}),i.a.createElement("textarea",{cols:40,placeholder:"message",style:le.messageInput,onChange:this.handleMessageChange}),i.a.createElement("div",{style:le.emailButton[t],onClick:function(){!t&&e.checkMail()}},"SEND"),i.a.createElement(de,{open:this.state.error,errorMessage:this.state.errorMessage,closeErrorModal:this.closeErrorModal})))}}]),t}(a.Component),ue=Object(l.b)(function(e){return{emailStatus:e.emailStatus}},function(e){return Object(c.b)({sendEmail:k},e)})(me),he=function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(i)))).closeContactModal=function(){n.props.closeContactModal()},n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement(ue,{open:this.props.contactModalIsOpen,screenSize:this.props.screenSize,closeContactModal:this.props.closeContactModal})}}]),t}(a.Component),be=Object(l.b)(function(e){return{screenSize:e.screenSize,contactModalIsOpen:e.contactModalIsOpen}},function(e){return Object(c.b)({closeContactModal:v},e)})(he),fe={intro:"Hi, my name is",myNameIs:"ADAM DOYLE",wat:"I'm a software engineer specializing in developing high-quality mobile and web applications.",watTwo:" specializing in developing high-quality mobile and web applications.",contact:"Get in Touch",details:"Currently living in Orange County California and building software solutions at Hearth"},ge=n(31),ye=n.n(ge),ve=function(e){function t(e){var n;return Object(R.a)(this,t),(n=Object(L.a)(this,Object(N.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("resize",n.handleResize)},n.handleResize=Object(S.a)(C.a.mark(function e(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({override:!0});case 2:return e.next=4,n.setState({override:!1});case 4:case"end":return e.stop()}},e,this)})),n.isVowel=function(e){return"a"===e.toLowerCase()||"e"===e.toLowerCase()||"i"===e.toLowerCase()||"o"===e.toLowerCase()||"u"===e.toLowerCase()},n.state={titleIndex:0,override:!1},n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement(i.a.Fragment,null,i.a.createElement(ye.a,{loop:!0,onFinishedTyping:function(){var t=e.state.titleIndex===e.props.titles.length-1?0:e.state.titleIndex+1;e.setState({titleIndex:t})},onStartedTyping:window.addEventListener("resize",i.a.createElement(ye.a.Reset,{count:1,delay:5}))},i.a.createElement(ye.a.Speed,{ms:50}),i.a.createElement("div",{id:"title",style:re().title},this.props.titles[this.state.titleIndex]),i.a.createElement(ye.a.Delay,{ms:1e3}),i.a.createElement(ye.a.Backspace,{count:this.props.titles[this.state.titleIndex].length+1}),i.a.createElement(ye.a.Reset,{count:1,delay:5}))),n=this.isVowel(this.props.titles[this.state.titleIndex][0])?"I'm an ":"I'm a ";return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,n),this.state.override?i.a.createElement("div",null):t)}}]),t}(a.Component),Ee=function(e){function t(e){var n;return Object(R.a)(this,t),(n=Object(L.a)(this,Object(N.a)(t).call(this,e))).componentWillMount=function(){},n.startChangingTitles=function(){setTimeout(n.changeTitle,6e3)},n.changeTitle=function(){var e=n.state.currentTitle,t=e===n.state.titles.length-1?0:++e;n.setState({currentTitle:t})},n.state={titles:["software engineer","problem solver","adrenaline junkie","risk taker","lifelong learner"],currentTitle:0},n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:re(this.props.screenSize).headline[this.props.screenSize]},i.a.createElement("div",{style:re(this.props.screenSize).intro},fe.intro),i.a.createElement("div",{style:re(this.props.screenSize).myNameIs},fe.myNameIs),i.a.createElement("div",{style:re(this.props.screenSize).wat},i.a.createElement(ve,{titles:this.state.titles}),i.a.createElement("span",null,fe.watTwo)),i.a.createElement("div",{style:re(this.props.screenSize).details},fe.details),i.a.createElement("div",{onClick:function(){e.props.scrollToMyRef(K.CONTACT)},style:re(this.props.screenSize).contact},fe.contact),i.a.createElement(be,null))}}]),t}(a.Component),xe=Object(l.b)(void 0,function(e){return Object(c.b)({openContactModal:y},e)})(Ee),Ce={about:{desktop:Object(ie.a)({},oe.body.desktop,{marginTop:"75px",fontSize:"20px"}),tablet:Object(ie.a)({},oe.body.mobile),mobile:Object(ie.a)({},oe.body.mobile)},aboutHeader:Object(ie.a)({},oe.componentHeader),aboutContent:{desktop:Object(ie.a)({},oe.componentSubHeader,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),tablet:Object(ie.a)({},oe.componentSubHeader,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),mobile:Object(ie.a)({},oe.componentSubHeader,{display:"flex",flexDirection:"column",alignItems:"center"})},aboutWords:{display:"flex",flexDirection:"column",marginBottom:"50px"},aboutText:{marginRight:"10px",marginBottom:"30px"},skillsHeader:Object(ie.a)({},oe.componentSubHeader,{color:q.grey,marginBottom:"30px",fontWeight:"bold"}),skills:{display:"flex",flexDirection:"row"},individualSkill:{desktop:{marginBottom:"10px",color:q.white},tablet:{marginBottom:"10px",color:q.white},mobile:{marginBottom:"10px",color:q.white}},bullet:{color:q.blue,marginBottom:"15px"},skillsColumn:{display:"flex",flexDirection:"column",marginRight:"20px"},profilePicture:{desktop:{width:"25vw",marginLeft:"150px",marginBottom:"50px"},tablet:{width:"250px",marginLeft:"150px",marginBottom:"50px"},mobile:{width:"200px",marginBottom:"50px"}}},Se={aboutHeader:"ABOUT",aboutTextP1:"I am a software engineer with a passion for building high-quality, high performance applications. I am focused on user-experience driven development, and building clean, maintainable products.",aboutTextP2:"Prior to my career in programming, I had a successful career in restaurant operations. My interest in creating system-level solutions and optimizations has proven to be one my biggest assets as an engineer.",aboutTextP3:" In my career I have had the opportunity to work on a variety of prodcts with some awesome teams. I am always looking for new opportunities to explore new technologies, solve intersting problems and deliver value to users.",skillsHeader:"Here's a few things I'm experienced with"},we=n(98),Oe=n.n(we),ke=function(e){return i.a.createElement("div",{style:Ce.about[e.screenSize]},i.a.createElement("div",{style:Ce.aboutHeader},Se.aboutHeader),i.a.createElement("div",{style:Ce.aboutContent[e.screenSize]},i.a.createElement("div",{style:Ce.aboutWords},i.a.createElement("div",{style:Ce.aboutText},Se.aboutTextP1),i.a.createElement("div",{style:Ce.aboutText},Se.aboutTextP2),i.a.createElement("div",{style:Ce.aboutText},Se.aboutTextP3)),i.a.createElement("div",null,i.a.createElement("img",{style:Ce.profilePicture[e.screenSize],src:Oe.a,alt:"Adam Doyle"}))),i.a.createElement("div",null,i.a.createElement("div",{style:Ce.skillsHeader},Se.skillsHeader),i.a.createElement("div",null,"desktop"===(t=e.screenSize)||"tablet"===t?i.a.createElement("div",{style:Ce.skills},i.a.createElement("div",{style:Ce.skillsColumn},i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"JavaScript")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"HTML & CSS")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"React & Redux")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"Jest/Mocha"))),i.a.createElement("div",{style:Ce.skillsColumn},i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"Node")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"MongoDB")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"Express")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"Cypress"))),i.a.createElement("div",{style:Ce.skillsColumn},i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"Agile/Scrum methodologies")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"Responsive/Mobile First Development")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"Test-Driven Development")),i.a.createElement("li",{style:Ce.bullet},i.a.createElement("span",{style:Ce.individualSkill[t]},"CI/CD")))):i.a.createElement("div",{style:Ce.skills},i.a.createElement("div",{style:Ce.skillsColumn},i.a.createElement("div",{style:Ce.individualSkill[t]},"JavaScript"),i.a.createElement("div",{style:Ce.individualSkill[t]},"HTML & CSS"),i.a.createElement("div",{style:Ce.individualSkill[t]},"React & Redux"),i.a.createElement("div",{style:Ce.individualSkill[t]},"Node"),i.a.createElement("div",{style:Ce.individualSkill[t]},"Cypress")),i.a.createElement("div",{style:Ce.skillsColumn},i.a.createElement("div",{style:Ce.individualSkill[t]},"MongoDB"),i.a.createElement("div",{style:Ce.individualSkill[t]},"Agile/Scrum methodologies"),i.a.createElement("div",{style:Ce.individualSkill[t]},"Responsive/Mobile First Development"),i.a.createElement("div",{style:Ce.individualSkill[t]},"Test-Driven Development"))))));var t},je=function(e){function t(){return Object(R.a)(this,t),Object(L.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"about"},i.a.createElement(ke,{screenSize:this.props.screenSize}))}}]),t}(a.Component),Te=Object(l.b)(function(e){return{screenSize:e.screenSize}})(je),ze={companyNameList:{desktop:{fontSize:"20px"},tablet:{},mobile:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},companyName:Object(ie.a)({},oe.componentSubHeader,{marginBottom:"20px",marginTop:"20px",cursor:"pointer",width:"150px"}),selectedCompany:Object(ie.a)({},oe.componentSubHeader,{marginBottom:"20px",marginTop:"20px",color:q.third,cursor:"pointer",width:"150px"})},Ae=function(e){return i.a.createElement("div",{style:ze.companyNameList[e.screenSize]},i.a.createElement("div",{style:e.selectedCompany===b.HEARTH?ze.selectedCompany:ze.companyName,onClick:function(){e.selectCompany(b.HEARTH)}},"Hearth"),i.a.createElement("div",{style:e.selectedCompany===b.VERTAFORE?ze.selectedCompany:ze.companyName,onClick:function(){e.selectCompany(b.VERTAFORE)}},"Vertafore"),i.a.createElement("div",{style:e.selectedCompany===b.WALMART?ze.selectedCompany:ze.companyName,onClick:function(){e.selectCompany(b.WALMART)}},"Walmart Labs"))},He=function(e){function t(){return Object(R.a)(this,t),Object(L.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement(Ae,{selectCompany:this.props.selectCompany,selectedCompany:this.props.selectedCompany,screenSize:this.props.screenSize})}}]),t}(a.Component),Ie=Object(l.b)(function(e){return{screenSize:e.screenSize,selectedCompany:e.selectedCompany}},function(e){return Object(c.b)({selectCompany:h},e)})(He),Me=function(e){return{jobs:{marginLeft:"20px"},jobHeader:{display:"flex",flexDirection:"row"},title:Object(ie.a)({},oe.componentSubHeader,{color:q.primary}),company:Object(ie.a)({},oe.componentSubHeader,{color:q.secondary}),dates:{color:q.primary},titleAndDate:{color:q.grey,fontSize:"24px",fontWeight:"bold",marginBottom:"10px"},bullet:{color:q.white,marginBottom:"10px",fontSize:"desktop"===e?"20px":null},bulletItem:{color:q.white},bulletContainer:{desktop:{marginTop:"20px",width:"55vw"},tablet:{marginTop:"20px",width:"55vw"},mobile:{marginTop:"20px"}}}},De={Hearth:{title:"Full-stack Software Engineer",company:"Hearth",dates:"Nov 2021 - Present",bullets:["Developed, launched, and iterated on financial applications to help private contractors more effectively manage their businesses","Built web and native application,s in React, React Native, and Typescript","Developed backend services in Go","Developed and released private npm packages to bridge native SDKs to React Native projects","Interviewed and effectively participated in the hiring and onboarding of new employees"]},Vertafore:{title:"Software Engineer",company:"Vertafore",dates:"Feb 2020 - Nov 2021",bullets:["Software Engineer working on web applications using React.js","Contributor and maintainer to greenfield products aimed at modernizing the insurance industry","Contributor and maintainer to multiple custom inhouse UI Libraries promoting UI/UX consistency across platform and company","Responsible for writing, reviewing and testing code","Create reusable components leveraging custom hooks and providers","Mentor new developers as part of a mentorship pilot program"]},"Walmart Labs":{title:"Software Engineer",company:"Walmart Labs",dates:"Dec 2017 - Feb 2020",bullets:["Software Engineer working on mobile applications using React.js while integrating with teams throughout a micro-service ecosystem","Contributor to a cutting-edge team in supply chain technologies","Working in an agile environment with a focus on UX-driven development and CI/CD practices","Responsible for writing and reviewing JavaScript code, QA, planning and breaking down work","Frequently meet with, and provide support to business partners while collecting feedback from end-users","Interview and effectively participate in hiring and onboarding of employees"]}},Re=function(e){return i.a.createElement("div",{style:Me(e.screenSize).jobs},i.a.createElement("div",{style:Me(e.screenSize).bulletContainer[e.screenSize]},i.a.createElement("div",{style:Me(e.screenSize).titleAndDate},"".concat(De[e.selectedCompany].title," ").concat(De[e.selectedCompany].dates)),De[e.selectedCompany].bullets.map(function(t){return i.a.createElement("li",{style:Me(e.screenSize).bullet},t)})))},Be=function(e){function t(){return Object(R.a)(this,t),Object(L.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement(Re,{selectedCompany:this.props.selectedCompany,screenSize:this.props.screenSize})}}]),t}(a.Component),Le=Object(l.b)(function(e){return{selectedCompany:e.selectedCompany,screenSize:e.screenSize}})(Be),Ne={experience:{desktop:Object(ie.a)({},oe.body.desktop),tablet:Object(ie.a)({},oe.body.mobile),mobile:Object(ie.a)({},oe.body.mobile)},experienceHeader:Object(ie.a)({},oe.componentHeader),jobInfo:{desktop:{display:"flex",flexDirection:"row",justifyContent:"space-between"},tablet:{display:"flex",flexDirection:"row",justifyContent:"space-between"},mobile:{display:"flex",flexDirection:"column"}}},Fe=function(e){return i.a.createElement("div",{id:"experience",style:Ne.experience[e.screenSize]},i.a.createElement("div",{style:Ne.experienceHeader},"Experience"),i.a.createElement("div",{style:Ne.jobInfo[e.screenSize]},i.a.createElement(Ie,null),i.a.createElement(Le,null)))},_e=function(e){function t(){return Object(R.a)(this,t),Object(L.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement(Fe,{screenSize:this.props.screenSize})}}]),t}(a.Component),We=Object(l.b)(function(e){return{screenSize:e.screenSize}})(_e),Pe={getInTouch:{desktop:Object(ie.a)({},oe.body.desktop,{display:"flex",justifyContent:"center",flexDirection:"column"}),tablet:Object(ie.a)({},oe.body.mobile,{display:"flex",justifyContent:"center",flexDirection:"column"}),mobile:Object(ie.a)({},oe.body.mobile,{display:"flex",justifyContent:"center",flexDirection:"column"})},header:Object(ie.a)({},oe.componentHeader,{textAlign:"center",marginBottom:"30px"}),subHeader:{color:q.grey,fontWeight:"bold",fontFamily:"Helvetica",lineHeight:"normal",fontSize:"20px",marginBottom:"30px",textAlign:"center"},contact:{color:q.white,fontFamily:"Helvetica",lineHeight:"normal",fontSize:"20px",marginBottom:"15px",textAlign:"center"}},Ue={HEADER:"Get in Touch!",SUB_HEADER:"Let's connect! Feel free to reach out to me, regarding a potential project or just to stay hi.",PHONE:"(630)217-2264",EMAIL:"acdoyle630@gmail.com"},Ve=function(e){return i.a.createElement("div",{id:"contact",style:Pe.getInTouch[e.screenSize]},i.a.createElement("div",{style:Pe.header},Ue.HEADER),i.a.createElement("div",{style:Pe.subHeader},Ue.SUB_HEADER),i.a.createElement("div",{style:Pe.contact},Ue.EMAIL))},Je=function(e){function t(){return Object(R.a)(this,t),Object(L.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement(Ve,{screenSize:this.props.screenSize})}}]),t}(a.Component),Xe=Object(l.b)(function(e){return{screenSize:e.screenSize}})(Je),Ge=(n(5480),function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(L.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(i)))).componentDidMount=function(){n.resize(),window.addEventListener("resize",n.resize)},n.resize=function(){n.props.setScreenSize(window.innerWidth)},n.scrollToMyRef=function(e){if(e){var t=document.getElementById(e),n=document.body.getBoundingClientRect().top,a=t.getBoundingClientRect().top-n-100;window.scrollTo({top:a,behavior:"smooth"})}},n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(ae,{scrollToMyRef:this.scrollToMyRef}),i.a.createElement(xe,{screenSize:this.props.screenSize,scrollToMyRef:this.scrollToMyRef}),i.a.createElement(Te,null),i.a.createElement(We,null),i.a.createElement(Xe,null))}}]),t}(a.Component)),Ye=Object(l.b)(function(e){return{screenSize:e.screenSize}},function(e){return Object(c.b)({setScreenSize:s},e)})(Ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=n(99),Qe=Object(c.d)(I,Object(c.a)(qe.a));r.a.render(i.a.createElement(l.a,{store:Qe},i.a.createElement(M.a,{basename:"/adam_doyle"},i.a.createElement("div",null,i.a.createElement(D.a,{exact:!0,path:"/",component:Ye})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,n){e.exports=n.p+"static/media/logo.5ab808bf.svg"},98:function(e,t,n){e.exports=n.p+"static/media/Adam_Doyle_img.8a0f871b.jpg"}},[[5319,2,1]]]);
//# sourceMappingURL=main.6e73dd87.chunk.js.map