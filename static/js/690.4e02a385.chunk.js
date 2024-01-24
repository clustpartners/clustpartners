"use strict";(self.webpackChunk_doar_main=self.webpackChunk_doar_main||[]).push([[690],{21561:function(n,e,r){r.d(e,{I5:function(){return F},eN:function(){return y}});var i,t,s,a,o,l,c,d,x,p,h,m,j=r(60531),g=r(32804),f=r(33028),u=r(71171),Z=r(79941),v=r(49797),b=(0,Z.ZP)((function(n){var e=Object.assign({},n);return(0,v.jsx)(g.mQ,(0,f.Z)({},e))}))(i||(i=(0,u.Z)(["\n    ","\n    .react-tabs {\n        &__tab-list {\n            display: flex;\n            flex-wrap: wrap;\n            border-color: ",";\n            ","\n            ","\n        }\n        &__tab {\n            margin-bottom: 0;\n            background-color: ",";\n            border-color: ",";\n            color: ",";\n            border-bottom-width: 0;\n            position: relative;\n            margin-bottom: -1px;\n            padding: 0 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 38px;\n            transition: background-color 0.2s;\n            border: 1px solid transparent;\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem;\n            cursor: pointer;\n            &:not(:first-of-type) {\n                margin-left: 5px;\n            }\n            &--selected {\n                background-color: #fff;\n                z-index: 5;\n                color: ",";\n                border-color: ","\n                    "," #fff;\n            }\n            &--disabled {\n                background-color: transparent;\n                color: ",";\n                border-color: transparent;\n                pointer-events: none;\n                cursor: default;\n            }\n            ","\n            ","\n\t\t\t","\n                ","\n        }\n        &__tab-panel {\n            transition: all 0.15s linear;\n            display: none;\n            height: 0;\n            max-width: 100%;\n            visibility: hidden;\n            overflow: hidden;\n            opacity: 0;\n            &--selected {\n                display: block;\n                height: auto;\n                visibility: visible;\n                opacity: 1;\n                overflow: visible;\n            }\n        }\n        &__content {\n            ","\n            ","\n        }\n    }\n"])),(function(n){return!0===n.$vertical&&(0,Z.iv)(t||(t=(0,u.Z)(["\n            display: flex;\n            align-items: flex-start;\n        "])))}),(0,Z.R)("colors.border"),(function(n){return!0===n.$vertical&&(0,Z.iv)(s||(s=(0,u.Z)(["\n                    border-bottom: 0;\n                    border-right: 0;\n                    justify-content: flex-start;\n                    flex-direction: column;\n                    width: 150px;\n                "])))}),(function(n){return"line"===n.$variation&&(0,Z.iv)(a||(a=(0,u.Z)(["\n                    border-bottom: 2px solid ",";\n                "])),(0,Z.R)("colors.border"))}),(0,Z.R)("colors.border"),(0,Z.R)("colors.border"),(0,Z.R)("colors.gray700"),(0,Z.R)("colors.primary"),(0,Z.R)("colors.gray300"),(0,Z.R)("colors.gray300"),(0,Z.R)("colors.gray400"),(function(n){return!0===n.$justified&&(0,Z.iv)(o||(o=(0,u.Z)(["\n                    flex-basis: 0;\n                    flex-grow: 1;\n                    text-align: center;\n                "])))}),(function(n){return!0===n.$vertical&&(0,Z.iv)(l||(l=(0,u.Z)(["\n                    border-color: ",";\n                    border-right-width: 0;\n                    margin-bottom: 0;\n                    margin-right: -1px;\n                    border-top-right-radius: 0;\n                    border-bottom-right-radius: 0;\n                    border-top-left-radius: 0.25rem;\n                    border-bottom-left-radius: 0.25rem;\n                    &:not(:first-of-type) {\n                        margin-left: 0;\n                        margin-top: 5px;\n                    }\n                    &--selected {\n                        border-color: ",";\n                    }\n                "])),(0,Z.R)("colors.border"),(0,Z.R)("colors.border"))}),(function(n){return"line"===n.$variation&&(0,Z.iv)(c||(c=(0,u.Z)(['\n                    padding: 8px 0;\n                    background-color: transparent;\n                    border: none;\n                    border-radius: 0;\n                    &:not(:first-of-type) {\n                        margin-left: 25px;\n                    }\n                    &--selected {\n                        border: none;\n                        background-color: transparent;\n                        &:after {\n                            content: "";\n                            position: absolute;\n                            bottom: -1px;\n                            left: 0;\n                            right: 0;\n                            height: 2px;\n                            background-color: ',";\n                        }\n                    }\n                "])),(0,Z.R)("colors.primary"))}),(function(n){return"dark"===n.theme.name&&(0,Z.iv)(d||(d=(0,u.Z)(["\n                    color: ",";\n                "])),(0,Z.R)("colors.gray300"))}),(function(n){return!0===n.$vertical&&(0,Z.iv)(x||(x=(0,u.Z)(["\n                    flex: 1;\n                "])))}),(function(n){return"line"===n.$variation&&(0,Z.iv)(p||(p=(0,u.Z)(["\n                    border: none;\n                    padding: 0;\n                    margin-top: 20px;\n                "])))})),w=Z.ZP.div(h||(h=(0,u.Z)(["\n    padding: 20px;\n    border-top: 0;\n    border: 1px solid ",";\n    ","\n"])),(0,Z.R)("colors.gray300"),(function(n){return"dark"===n.theme.name&&(0,Z.iv)(m||(m=(0,u.Z)(["\n            border-color: ",";\n        "])),(0,Z.R)("colors.gray500"))})),y=function(n){var e=n.className,r=n.children,i=n.justified,t=n.vertical,s=n.variation,a=n.defaultFocus,o=n.defaultIndex,l=n.disabledTabClassName,c=n.domRef,d=n.forceRenderTabPanel,x=n.onSelect,p=n.selectedIndex,h=n.selectedTabClassName,m=n.selectedTabPanelClassName;return(0,v.jsx)(b,{className:(0,j.Z)(e,"react-tabs"),$justified:i,$vertical:t,$variation:s,defaultFocus:a,defaultIndex:o,disabledTabClassName:l,domRef:c,forceRenderTabPanel:d,onSelect:x,selectedIndex:p,selectedTabClassName:h,selectedTabPanelClassName:m,children:r})},F=function(n){var e=n.className,r=n.children;return(0,v.jsx)(w,{className:(0,j.Z)(e,"react-tabs__content"),children:r})}},30574:function(n,e,r){r.d(e,{Z:function(){return Z}});var i,t,s=r(8052),a=r(71880),o=r(83747),l=r(19442),c=r(82327),d=r(89484),x=r(47742),p=r(95161),h=r(66868),m=r(71171),j=r(79941),g=j.ZP.p(i||(i=(0,m.Z)(["\n    font-weight: 500;\n    margin-bottom: 0px;\n"]))),f=j.ZP.span(t||(t=(0,m.Z)(["\n    font-size: 12px;\n    color: ",";\n"])),(0,j.R)("colors.text3")),u=r(49797),Z=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.Z,{title:"People You May Know"}),(0,u.jsxs)(s.Z,{as:"ul",mb:"15px",children:[(0,u.jsxs)(s.Z,{as:"li",alignItems:"center",children:[(0,u.jsx)(a.Z,{path:"#!",children:(0,u.jsx)(o.Z,{children:(0,u.jsx)("img",{src:c,alt:"avatar"})})}),(0,u.jsxs)(l.Z,{ml:"15px",children:[(0,u.jsx)(g,{children:(0,u.jsx)(a.Z,{path:"#!",color:"text",children:"Allan Ray Palban"})}),(0,u.jsx)(f,{children:"Senior Business Analyst"})]})]}),(0,u.jsxs)(s.Z,{as:"li",alignItems:"center",mt:"15px",children:[(0,u.jsx)(a.Z,{path:"#!",children:(0,u.jsx)(o.Z,{children:(0,u.jsx)("img",{src:d,alt:"avatar"})})}),(0,u.jsxs)(l.Z,{ml:"15px",children:[(0,u.jsx)(g,{children:(0,u.jsx)(a.Z,{path:"#!",color:"text",children:"Rhea Castanares"})}),(0,u.jsx)(f,{children:"Product Designer"})]})]}),(0,u.jsxs)(s.Z,{as:"li",alignItems:"center",mt:"15px",children:[(0,u.jsx)(a.Z,{path:"#!",children:(0,u.jsx)(o.Z,{children:(0,u.jsx)("img",{src:x,alt:"avatar"})})}),(0,u.jsxs)(l.Z,{ml:"15px",children:[(0,u.jsx)(g,{children:(0,u.jsx)(a.Z,{path:"#!",color:"text",children:"Philip Cesar Galban"})}),(0,u.jsx)(f,{children:"Executive Assistant"})]})]}),(0,u.jsxs)(s.Z,{as:"li",alignItems:"center",mt:"15px",children:[(0,u.jsx)(a.Z,{path:"#!",children:(0,u.jsx)(o.Z,{children:(0,u.jsx)("img",{src:p,alt:"avatar"})})}),(0,u.jsxs)(l.Z,{ml:"15px",children:[(0,u.jsx)(g,{children:(0,u.jsx)(a.Z,{path:"#!",color:"text",children:"Randy Macapala"})}),(0,u.jsx)(f,{children:"Business Entrepreneur"})]})]}),(0,u.jsxs)(s.Z,{as:"li",alignItems:"center",mt:"15px",children:[(0,u.jsx)(a.Z,{path:"#!",children:(0,u.jsx)(o.Z,{children:(0,u.jsx)("img",{src:p,alt:"avatar"})})}),(0,u.jsxs)(l.Z,{ml:"15px",children:[(0,u.jsx)(g,{children:(0,u.jsx)(a.Z,{path:"#!",color:"text",children:"Abigail Johnson"})}),(0,u.jsx)(f,{children:"System Administrator"})]})]})]})]})}},80721:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var i,t,s,a,o,l,c=r(83638),d=r(717),x=r(23074),p=r(8889),h=r(32804),m=r(77261),j=r(21561),g=r(93673),f=r(13013),u=r(13643),Z=r(91323),v=r(32127),b=r(87098),w=r(72162),y=r.p+"static/media/img30.4d175adf99ee5a4d81a0.jpg",F=r(44307),R=r.p+"static/media/img32.c6fc4480564c7820a8c4.jpg",C=r.p+"static/media/img33.96327113ea148828a06f.jpg",P=r(23025),k=r(95924),N=r.p+"static/media/img35.e612f18950c2d2202990.jpg",S=r(84749),_=r(13574),A=r(71880),D=r(83747),T=r(3806),E=r(53986),I=r(33028),L=r(71171),$=r(79941),z=r(16842),B=r(79432),O=r(49797),M=(0,$.ZP)((function(n){var e=Object.assign({},n);return(0,O.jsx)(z.Z,(0,I.Z)({},e))}))(i||(i=(0,L.Z)(["\n    border-width: 0;\n    .card-img-top {\n        height: 100px;\n        object-fit: cover;\n    }\n"]))),U=(0,$.ZP)((function(n){var e=Object.assign({},n);return(0,O.jsx)(B.Z,(0,I.Z)({},e))}))(t||(t=(0,L.Z)(["\n    font-size: 13px;\n    padding: 15px;\n    border: 1px solid ",";\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    "," {\n        padding: 20px;\n    }\n"])),(0,$.R)("colors.border"),$.Uh.large),J=$.ZP.div(s||(s=(0,L.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    margin-top: -55px;\n"]))),K=$.ZP.h5(a||(a=(0,L.Z)(["\n    font-size: 14px;\n    margin-top: 15px;\n    margin-bottom: 0;\n    "," {\n        font-size: 15px;\n    }\n"])),$.Uh.large),V=function(n){var e=n.cover,r=n.avatar,i=n.name,t=n.designation,s=n.isFollowed,a=n.color,o=n.path;return(0,O.jsxs)(M,{children:[(0,O.jsx)(_.Z,{src:e,alt:"card",isTop:!0}),(0,O.jsx)(U,{children:(0,O.jsxs)(J,{children:[(0,O.jsx)(A.Z,{path:o,children:(0,O.jsxs)(D.Z,{size:"lg",children:[r&&(0,O.jsx)("img",{src:r,alt:"card"}),!r&&(0,O.jsx)(T.Z,{bg:a,children:i.charAt(0)})]})}),(0,O.jsx)(K,{children:(0,O.jsx)(A.Z,{path:o,variant:"link2",children:i})}),(0,O.jsx)(E.Z,{color:"text3",children:t}),(0,O.jsx)(g.Z,{color:s?"primary":"white",fullwidth:!0,children:s?"Unfollow":"Follow"})]})})]})},Y=(0,$.ZP)((function(n){var e=Object.assign({},n);return(0,O.jsx)(j.eN,(0,I.Z)({},e))}))(o||(o=(0,L.Z)(["\n    .react-tabs {\n        &__tab {\n            .badge {\n                background-color: ",";\n                color: ",";\n            }\n            &--selected {\n                .badge {\n                    background-color: ",";\n                    color: #fff;\n                }\n            }\n        }\n    }\n"])),(0,$.R)("colors.light"),(0,$.R)("colors.text3"),(0,$.R)("colors.info")),q=function(){return(0,O.jsx)(p.Z,{lg:9,children:(0,O.jsxs)(Y,{variation:"line",children:[(0,O.jsxs)(h.td,{children:[(0,O.jsxs)(h.OK,{children:["Followers",(0,O.jsx)(m.Z,{ml:"10px",children:"340"})]}),(0,O.jsxs)(h.OK,{children:["Following",(0,O.jsx)(m.Z,{ml:"10px",children:"1,563"})]}),(0,O.jsxs)(h.OK,{children:["Request",(0,O.jsx)(m.Z,{ml:"10px",children:"19"})]})]}),(0,O.jsxs)(j.I5,{children:[(0,O.jsxs)(h.x4,{children:[(0,O.jsxs)(c.Z,{gutters:10,mb:"25px",children:[(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,children:(0,O.jsx)(V,{cover:f,avatar:u,name:"Zhen Juan Chiu",designation:"Software Engineer",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",0],children:(0,O.jsx)(V,{cover:Z,avatar:v,name:"Barbara Marion",designation:"Tech Executive",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",0],children:(0,O.jsx)(V,{cover:b,color:"teal",name:"Christine Arnold",designation:"Lead Creative Design",isFollowed:!0,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",null,0,"10px",0],children:(0,O.jsx)(V,{cover:w,color:"pink",name:"Natalie Corwin",designation:"Product Designer",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:"10px",children:(0,O.jsx)(V,{cover:y,color:"gray300",name:"Carolyn Park",designation:"Lead Creative Design",isFollowed:!0,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:"10px",children:(0,O.jsx)(V,{cover:F,color:"gray900",name:"Debbie Hite",designation:"Lead Animator",isFollowed:!0,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:"10px",children:(0,O.jsx)(V,{cover:R,color:"success",name:"Sandra Valles",designation:"Software Architect",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:"10px",children:(0,O.jsx)(V,{cover:C,color:"indigo",name:"Patrick Miramontes",designation:"Software Engineer",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:"10px",children:(0,O.jsx)(V,{cover:P,avatar:k,name:"Amalia Redfern",designation:"Front-end Engineer",isFollowed:!0,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:"10px",children:(0,O.jsx)(V,{cover:N,avatar:S,name:"Carole Rossignol",designation:"Software Engineer",isFollowed:!0,path:"/profile-view"})})]}),(0,O.jsx)(g.Z,{size:"sm",color:"white",fullwidth:!0,children:"Load more"})]}),(0,O.jsxs)(h.x4,{children:[(0,O.jsxs)(c.Z,{gutters:10,mb:"25px",children:[(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,children:(0,O.jsx)(V,{cover:f,avatar:u,name:"Zhen Juan Chiu",designation:"Software Engineer",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",0],children:(0,O.jsx)(V,{cover:Z,avatar:v,name:"Barbara Marion",designation:"Tech Executive",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",0],children:(0,O.jsx)(V,{cover:b,color:"teal",name:"Christine Arnold",designation:"Lead Creative Design",isFollowed:!0,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",null,0,"10px",0],children:(0,O.jsx)(V,{cover:w,color:"pink",name:"Natalie Corwin",designation:"Product Designer",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:"10px",children:(0,O.jsx)(V,{cover:y,color:"gray300",name:"Carolyn Park",designation:"Lead Creative Design",isFollowed:!0,path:"/profile-view"})})]}),(0,O.jsx)(g.Z,{size:"sm",color:"white",fullwidth:!0,children:"Load more"})]}),(0,O.jsxs)(h.x4,{children:[(0,O.jsxs)(c.Z,{gutters:10,mb:"25px",children:[(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,children:(0,O.jsx)(V,{cover:f,avatar:u,name:"Zhen Juan Chiu",designation:"Software Engineer",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",0],children:(0,O.jsx)(V,{cover:Z,avatar:v,name:"Barbara Marion",designation:"Tech Executive",isFollowed:!1,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",0],children:(0,O.jsx)(V,{cover:b,color:"teal",name:"Christine Arnold",designation:"Lead Creative Design",isFollowed:!0,path:"/profile-view"})}),(0,O.jsx)(p.Z,{sm:4,md:3,lg:4,xl:3,mt:["10px",null,0,"10px",0],children:(0,O.jsx)(V,{cover:w,color:"pink",name:"Natalie Corwin",designation:"Product Designer",isFollowed:!1,path:"/profile-view"})})]}),(0,O.jsx)(g.Z,{size:"sm",color:"white",fullwidth:!0,children:"Load more"})]})]})]})})},G=r(30574),H=r(45044),Q=r(43106),W=r(66868),X=function(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(W.Z,{title:"Discover By Position"}),(0,O.jsxs)(H.Z,{customStyle:"classic",children:[(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Software Engineer"}),(0,O.jsx)(m.Z,{variant:"texted",children:"20"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"UI/UX Designer"}),(0,O.jsx)(m.Z,{variant:"texted",children:"18"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Sales Representative"}),(0,O.jsx)(m.Z,{variant:"texted",children:"14"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Product Representative"}),(0,O.jsx)(m.Z,{variant:"texted",children:"12"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Full-Stack Developer"}),(0,O.jsx)(m.Z,{variant:"texted",children:"10"})]})]})]})},nn=function(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(W.Z,{title:"Discover By Location"}),(0,O.jsxs)(H.Z,{customStyle:"classic",children:[(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"San Francisco, California"}),(0,O.jsx)(m.Z,{variant:"texted",children:"20"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Los Angeles, California"}),(0,O.jsx)(m.Z,{variant:"texted",children:"18"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Las Vegas, Nevada"}),(0,O.jsx)(m.Z,{variant:"texted",children:"14"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Austin, Texas"}),(0,O.jsx)(m.Z,{variant:"texted",children:"12"})]}),(0,O.jsxs)(Q.Z,{path:"#!",children:[(0,O.jsx)("span",{children:"Arlington, Nebraska"}),(0,O.jsx)(m.Z,{variant:"texted",children:"10"})]})]})]})},en=$.ZP.div(l||(l=(0,L.Z)(["\n    &:not(:last-of-type) {\n        margin-bottom: 50px;\n    }\n"]))),rn=function(){return(0,O.jsxs)(p.Z,{lg:3,mt:["40px",null,null,"0px"],children:[(0,O.jsx)(en,{children:(0,O.jsx)(G.Z,{})}),(0,O.jsx)(en,{children:(0,O.jsx)(X,{})}),(0,O.jsx)(en,{children:(0,O.jsx)(nn,{})})]})},tn=r(36875),sn=function(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(tn.Z,{}),(0,O.jsx)(d.Z,{borderBottomWidth:"1px",children:(0,O.jsx)(x.Z,{prev:[{text:"Your Profile",link:"/profile-view"}],title:"Connections",wcText:"Connections"})}),(0,O.jsx)(d.Z,{mt:[null,null,null,"0px"],children:(0,O.jsxs)(c.Z,{children:[(0,O.jsx)(q,{}),(0,O.jsx)(rn,{})]})})]})}},95924:function(n,e,r){n.exports=r.p+"static/media/img11.ed33d47655283f708710.jpg"},84749:function(n,e,r){n.exports=r.p+"static/media/img12.7559691aea215c074db3.jpg"},82327:function(n,e,r){n.exports=r.p+"static/media/img21.2b3cbcb5fea090a910ae.jpg"},89484:function(n,e,r){n.exports=r.p+"static/media/img22.d51f1fcd318bd3ae4dd7.jpg"},47742:function(n,e,r){n.exports=r.p+"static/media/img23.80b3363efb6ec702d9b5.jpg"},95161:function(n,e,r){n.exports=r.p+"static/media/img24.1912afa36e8543d2845a.jpg"},87098:function(n,e,r){n.exports=r.p+"static/media/img27.e98a32716c1f904cc1f3.jpg"},72162:function(n,e,r){n.exports=r.p+"static/media/img29.df00a61e874830a80cf8.jpg"},23025:function(n,e,r){n.exports=r.p+"static/media/img34.b70919aacbe744e797c0.jpg"},13643:function(n,e,r){n.exports=r.p+"static/media/img6.c4557d2660e9a5fd82e0.jpg"},32127:function(n,e,r){n.exports=r.p+"static/media/img7.de51b9df83dedb8a4c22.jpg"}}]);
//# sourceMappingURL=690.4e02a385.chunk.js.map