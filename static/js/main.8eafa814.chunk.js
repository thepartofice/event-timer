(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),i=(a(29),a(5)),l=a(6),s=a(8),m=a(7),u=a(9),d=a(23),p=a(19),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).oninputchange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.onsubmit=function(t){t.preventDefault();var a=e.state,n=a.eName,r=a.day,o=a.time,c=r.split("-"),i=o.split(":"),l=c[1].toString()+" "+c[2].toString()+" "+c[0].toString()+" "+i[0].toString()+":"+i[1].toString()+":00",s={eName:n,deadline:new Date(l)};e.props.sendEventData(s)},e.state={eName:"",day:"",time:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("input[type=date]"),t=new Date,a=t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2);e.setAttribute("min",a)}},{key:"render",value:function(){return r.a.createElement("form",{className:"eventformcard mx-auto mt-3",onSubmit:this.onsubmit},r.a.createElement("h2",{style:{textAlign:"center"}}," Create an event "),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"eName"},"Event Name"),r.a.createElement("input",{type:"text",className:"form-control form-control-sm",name:"eName",onChange:this.oninputchange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"day"},"Day"),r.a.createElement("input",{type:"date",className:"form-control form-control-sm",name:"day",onChange:this.oninputchange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"time"},"Time"),r.a.createElement("input",{type:"time",className:"form-control form-control-sm",name:"time",onChange:this.oninputchange,required:!0}),"           "),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-success ",value:"Start Event Timer"}))}}]),t}(r.a.Component),h=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).stopTimer=function(){e.props.stopTimer(e.props.eventId)},e.state={timerDisplay:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.deadline&&(this.interval=setInterval(function(){var t=new Date,a=e.props.deadline-t,n=Math.floor(a/864e5),r=Math.floor(a%864e5/36e5),o=Math.floor(a%36e5/6e4),c=Math.floor(a%6e4/1e3),i=n.toString()+":"+r.toString()+":"+o.toString()+":"+c.toString();e.setState({timerDisplay:i}),a<=0&&(e.setState({timerDisplay:"0:0:0:0"}),clearInterval(e.interval))},1e3))}},{key:"render",value:function(){return r.a.createElement("div",{className:"eventtimer mx-auto"},r.a.createElement("p",null,this.props.eName),r.a.createElement("h1",null,this.state.timerDisplay),r.a.createElement("button",{onClick:this.stopTimer,className:"btn btn-outline-danger"},"Stop Timer"))}}]),t}(r.a.Component),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).receiveEventData=function(t){var a={eventName:t.eName,deadline:t.deadline};e.setState({events:[].concat(Object(d.a)(e.state.events),[a]),addEvent:!1})},e.stopTimer=function(t){var a=e.state.events;a.splice(t,1),e.setState({events:a},function(){console.log(e.state.events)})},e.state={events:[],addEvent:!0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app row"},r.a.createElement("div",{className:"col col-12 col-xl-9 col-lg-8 col-md-6 col-12 rb"},r.a.createElement("div",{className:"row"},this.state.events.map(function(t,a){return r.a.createElement("div",{className:"col col-md-4"},r.a.createElement(h,{eName:t.eventName,deadline:t.deadline,stopTimer:e.stopTimer,eventId:a}))}))),r.a.createElement("div",{className:"col col-12 col-xl-3 col-lg-4 col-md-6 col-12"},this.state.addEvent?r.a.createElement(v,{sendEventData:this.receiveEventData}):r.a.createElement("button",{className:"btn btn-block btn-success addbtn",onClick:function(){e.setState({addEvent:!0})}},"Add Event")))}}]),t}(r.a.Component),f=a(20),E=a(10),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:b})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.8eafa814.chunk.js.map