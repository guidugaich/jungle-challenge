(this["webpackJsonpjungle-challenge"]=this["webpackJsonpjungle-challenge"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(5),i=a.n(c),r=(a(10),a(3)),o=(a(11),a.p+"static/media/PathCopy.006e8a73.svg"),l=a.p+"static/media/oval.2293db9f.svg",d=(a(12),a(0));function j(){return Object(d.jsxs)("div",{className:"header-top-logo-shape",children:[Object(d.jsx)("img",{src:o,alt:"smile",className:"header-top-logo-smile"}),Object(d.jsx)("img",{src:l,alt:"eye1",className:"header-top-logo-eye1"}),Object(d.jsx)("img",{src:l,alt:"eye2",className:"header-top-logo-eye2"})]})}a(14);function h(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("a",{children:"Create Your Nanny Share"}),Object(d.jsx)("a",{children:"Browse Shares"}),Object(d.jsx)("a",{children:"Our Story"})]})}a(15);function b(){return Object(d.jsx)("button",{className:"sign-up-btn",children:"Become a Nanny Share Host"})}a(16);function u(){return Object(d.jsx)("button",{className:"sign-in-btn",children:"Sign In"})}a(17);function m(){return Object(d.jsxs)("div",{className:"header-top-container",children:[Object(d.jsxs)("div",{className:"top-left",children:[Object(d.jsx)(j,{}),Object(d.jsx)(h,{})]}),Object(d.jsxs)("div",{className:"top-right",children:[Object(d.jsx)(b,{}),Object(d.jsx)(u,{})]})]})}a(18);var O=a.p+"static/media/PlayButton.7a34ea28.svg";function p(){return Object(d.jsxs)("div",{className:"header-title-container",children:[Object(d.jsx)("p",{className:"header-title-main",children:"Easily create or join a local nanny share with Hapu"}),Object(d.jsx)("p",{className:"header-description-title",children:"Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare."}),Object(d.jsxs)("div",{className:"play-action",children:[Object(d.jsx)("img",{src:O,alt:"Play button"}),Object(d.jsx)("span",{children:"See hapu in action (27 seconds)"})]})]})}var x=a.p+"static/media/ImageHeader.b5a24ca9.svg";function f(){return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"header-middle-section",children:[Object(d.jsx)(p,{}),Object(d.jsx)("img",{src:x,alt:"Header"})]})]})}a(19);var y=a.p+"static/media/ProfileImage.1be06b6c.svg";function g(){return Object(d.jsxs)("div",{className:"available-now-container",children:[Object(d.jsx)("img",{src:y,alt:"Profile"}),Object(d.jsx)("span",{className:"available-now-link",children:"Sarah's day care available now in North Sydney"}),Object(d.jsx)("span",{className:"available-now-schedule",children:"Wednesday, Thursday, Friday - 7:30 - 5:30"})]})}a(20);var v=a.p+"static/media/ImageSection1.03b2b307.svg";function N(){return Object(d.jsxs)("div",{className:"hero-section-container",children:[Object(d.jsxs)("div",{className:"hero-section-content",children:[Object(d.jsx)("h2",{children:"Share your home, nanny and costs"}),Object(d.jsxs)("p",{children:["You have a fantastic home, a fantastic nanny and wouldn\u2019t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. ",Object(d.jsx)("span",{children:"Hapu means tribe"})," and it\u2019s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."]}),Object(d.jsx)("span",{className:"hero-section-link",children:"Ready to get started?"})]}),Object(d.jsx)("img",{src:v,alt:"App preview"})]})}var w=a(2);a(21),a(22);function S(){return Object(d.jsx)("div",{class:"loader-outer",children:Object(d.jsxs)("div",{class:"loader",children:[Object(d.jsx)("span",{class:"dot dot-1"}),Object(d.jsx)("span",{class:"dot dot-2"}),Object(d.jsx)("span",{class:"dot dot-3"})]})})}function k(e){var t=e.title,a=e.description,s=e.onAction,c=Object(n.useState)(""),i=Object(w.a)(c,2),r=i[0],o=i[1],l=Object(n.useState)(""),j=Object(w.a)(l,2),h=j[0],b=j[1],u=Object(n.useState)(!1),m=Object(w.a)(u,2),O=m[0],p=m[1],x=Object(n.useState)(!1),f=Object(w.a)(x,2),y=f[0],g=f[1],v=Object(n.useState)(!1),N=Object(w.a)(v,2),k=N[0],C=N[1];function H(e){var t=e.target;"name"===t.name&&o(t.value),"email"===t.name&&b(t.value)}return Object(d.jsxs)("div",{className:"form-section-container",children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("p",{children:a}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0),fetch("https://api.jungledevs.com/api/v1/challenge-newsletter/",{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:r,email:h}),method:"POST"}).then((function(e){e.ok?g(!0):g(!1),p(!1),k||C(!0)}))},children:[Object(d.jsx)("label",{children:Object(d.jsx)("input",{placeholder:"Your name",name:"name",onChange:H,"data-testid":"name-input"})}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{placeholder:"Your email",name:"email",onChange:H,"data-testid":"email-input"})}),Object(d.jsx)("button",{type:"submit",disabled:!/[a-z0-9]+@[a-z0-9]+(\.com)$/gi.test(h)&&!O,onClick:s,"data-testid":"submit-btn",children:O?Object(d.jsx)(S,{}):Object(d.jsx)(d.Fragment,{children:"Send"})}),k&&Object(d.jsx)("span",{className:y?"form-success":"form-error",children:y?"Success!":"Error. Try again"})]})]})}a(23);var C=a.p+"static/media/ImageSection3.b1719e95.svg";function H(){return Object(d.jsxs)("div",{className:"payment-section-container",children:[Object(d.jsx)("img",{src:C,alt:"Payments"}),Object(d.jsxs)("div",{className:"payment-section-content",children:[Object(d.jsx)("h2",{children:"Shared payments made simple"}),Object(d.jsx)("p",{children:"Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."}),Object(d.jsx)("span",{className:"payment-section-link",children:"Read how Bridget\u2019s share (without Hapu) ended over $15"})]})]})}a(24);var A=a.p+"static/media/ImageSection4.de931c08.svg";function T(){return Object(d.jsxs)("div",{className:"desc-section-container",children:[Object(d.jsx)("h2",{children:"A framework built for the long term"}),Object(d.jsx)("p",{children:"Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."}),Object(d.jsx)("span",{className:"desc-section-link",children:"Read how Hapu\u2019s tribal background defines our app "}),Object(d.jsx)("img",{src:A,alt:"Billing history"})]})}a(25);var I=a.p+"static/media/ImageSection5.665be6a6.svg";function P(){return Object(d.jsxs)("div",{className:"coming-soon-container",children:[Object(d.jsx)("img",{src:I,alt:"Coming soon"}),Object(d.jsx)("h2",{children:"Coming soon: Nanny Share Daily Diary!"}),Object(d.jsx)("p",{children:"With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"})]})}a(26),a(27);var B=a.p+"static/media/Calendar.aa43e26a.svg";function F(){return Object(d.jsxs)("div",{className:"create-share-btn-container",children:[Object(d.jsx)("img",{src:B,alt:"Calendar icon"}),Object(d.jsxs)("div",{className:"create-share-btn-text",children:[Object(d.jsx)("p",{children:"Create Your Nanny Share"}),Object(d.jsx)("p",{children:"Takes less than 5 minutes"})]})]})}a(28);var Y=a.p+"static/media/HapuLogo.f5bd6642.svg",D=a.p+"static/media/Facebook.52d5df86.svg",L=a.p+"static/media/Twitter.eb814650.svg",W=a.p+"static/media/Instagram.75afcdcd.svg";function E(){return Object(d.jsxs)("div",{className:"footer-link-bar-container",children:[Object(d.jsx)("img",{src:Y,alt:"Hapu logo"}),Object(d.jsxs)("div",{className:"footer-central-links",children:[Object(d.jsx)("span",{children:"Share Your Nanny"}),Object(d.jsx)("span",{children:"Our Story"}),Object(d.jsx)("span",{children:"Blog"}),Object(d.jsx)("span",{children:"Terms & Privacy"})]}),Object(d.jsxs)("div",{className:"footer-social-media",children:[Object(d.jsx)("div",{className:"social-media-icon",children:Object(d.jsx)("img",{src:D,alt:"Facebook"})}),Object(d.jsx)("div",{className:"social-media-icon",children:Object(d.jsx)("img",{src:L,alt:"Facebook"})}),Object(d.jsx)("div",{className:"social-media-icon",children:Object(d.jsx)("img",{src:W,alt:"Facebook"})})]})]})}function J(){return Object(d.jsxs)("div",{className:"footer-container",children:[Object(d.jsx)("h2",{className:"footer-title",children:"Become a nanny share host"}),Object(d.jsx)("p",{className:"footer-subtitle",children:"Takes less than 5 minutes to get started"}),Object(d.jsx)(F,{}),Object(d.jsx)("span",{className:"footer-link",children:"Or browse local nanny-shares"}),Object(d.jsx)(E,{}),Object(d.jsx)("p",{className:"copyright",children:"Copyright \xa9 2017 Hapu PTY Limited All rights reserved"})]})}a(29);function R(){return Object(d.jsx)("hr",{className:"section-divider"})}var $=function(){return Object(d.jsxs)("div",{className:"page-container",children:[Object(d.jsx)(f,{}),Object(d.jsx)(g,{}),Object(d.jsx)(N,{}),Object(d.jsx)(R,{}),Object(d.jsxs)(r.a,{trackedAction:"Different texts",id:"03883355-e59e-4b29-82cf-0da99aba401c",children:[Object(d.jsx)(r.b,{description:"Original",children:function(e){return Object(d.jsx)(k,{onAction:e,title:"Are you a parent without a nanny and looking to share?",description:"Leave us your name and email and we\u2019ll update you as soon as a share becomes available in your area!"})}}),Object(d.jsx)(r.b,{description:"Alternative",children:function(e){return Object(d.jsx)(k,{onAction:e,title:"Create the childcare you need at a price you can afford",description:"Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started."})}})]}),Object(d.jsx)(R,{}),Object(d.jsx)(H,{}),Object(d.jsx)(R,{}),Object(d.jsx)(T,{}),Object(d.jsx)(R,{}),Object(d.jsx)(P,{}),Object(d.jsx)(J,{})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)($,{})}),document.getElementById("root")),z()}],[[30,1,2]]]);
//# sourceMappingURL=main.5c03c09c.chunk.js.map