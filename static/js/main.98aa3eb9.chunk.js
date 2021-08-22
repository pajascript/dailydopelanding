(this["webpackJsonpreactsite-test2"]=this["webpackJsonpreactsite-test2"]||[]).push([[0],{34:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var i,a,c,r,o,s,d,l,j,x,m,p,b,h,f,u,g,O,w,v,k,y,z,S,E,N,L,C,M,P,A,D,V,I=t(2),Y=t.n(I),F=t(10),q=t.n(F),H=(t(34),t(6)),J=t(3),B=t(4),G=t(5),R=B.a.nav(i||(i=Object(J.a)(["\n    width: 100%;\n    height: 70px;\n    background: transparent;\n    z-index: 999;\n    position: fixed;\n    top: 0;\n    transition: all 400ms ease-in-out;\n\n    &.scroll-down {\n        transform: translateY(-70px);\n    }\n\n    &.scroll-up {\n        transform: translateY(0);\n    }\n"]))),T=B.a.div(a||(a=Object(J.a)(["\n    transition: all 400ms ease-in-out;\n    width: 100%;\n    height: 100%;\n    \n    &.active {\n        background: #0f0f0f;\n    }\n"]))),K=B.a.div(c||(c=Object(J.a)(["\n    margin: 0 auto;\n    height: 100%;\n    width: 100%;\n    max-width: 1100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 10px;\n"]))),Q=Object(B.a)(G.Link)(r||(r=Object(J.a)(["\n    background-image: linear-gradient(to right, #f195ac, #00a8ff);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    cursor: pointer;\n    font-size: 2.2rem;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-family: 'Poppins', sans-serif;\n"]))),U=B.a.div(o||(o=Object(J.a)(["\n    color: #fff;\n    cursor: pointer;\n    font-size: 2rem;\n    display: none;\n\n    @media screen and (max-width: 820px) {\n        display: flex;\n    }\n"]))),W=B.a.div(s||(s=Object(J.a)(["\n    display: flex;\n    align-items: center;\n    gap: 25px;\n\n    @media screen and (max-width: 820px) {\n        display: none;\n    }\n"]))),X=B.a.div(d||(d=Object(J.a)(["\n    display: flex;\n\n"]))),Z=Object(B.a)(G.Link)(l||(l=Object(J.a)(["\n    color: #fff;\n    cursor: pointer;\n    padding: 0 2.5rem;\n    transition: all 0.3s ease;\n\n    &:hover {\n        color: #ccc;\n    }\n"]))),$=B.a.a(j||(j=Object(J.a)(["\n    color: #000;\n    padding: 0.5rem 2rem;\n    transition: all 0.3s ease-in-out;\n    background: #00a8ff;\n    border-radius: 10px;\n    text-decoration: none;\n\n    &:hover {\n        background: #6dceff;\n    }\n"]))),_=t(27),nn=t(1),en=function(n){var e=n.toggleMenu,t=Object(I.useState)(!1),i=Object(H.a)(t,2),a=i[0],c=i[1],r=Object(I.useState)(!0),o=Object(H.a)(r,2),s=o[0],d=o[1],l=0,j=function(){window.scrollY>=70?c(!0):c(!1);var n=window.pageYOffset;n<l&&(d(!0),console.log("up")),n>l&&d(!1),l=n};return Object(I.useEffect)((function(){window.addEventListener("scroll",j)}),[]),Object(nn.jsx)(R,{className:s?"scroll-up":"scroll-down",children:Object(nn.jsx)(T,{className:a?"active":"",children:Object(nn.jsxs)(K,{children:[Object(nn.jsx)(Q,{to:"home",children:"Daily Dope"}),Object(nn.jsx)(U,{onClick:e,children:Object(nn.jsx)(_.a,{})}),Object(nn.jsxs)(W,{children:[Object(nn.jsxs)(X,{children:[Object(nn.jsx)(Z,{to:"home",smooth:!0,duration:600,children:"Home"}),Object(nn.jsx)(Z,{to:"about",smooth:!0,duration:600,children:"About"}),Object(nn.jsx)(Z,{to:"products",smooth:!0,duration:600,children:"Products"})]}),Object(nn.jsx)($,{children:"Sign In"})]})]})})})},tn=t(28),an=B.a.nav(x||(x=Object(J.a)(["\n    display: none;\n    height: 100%;\n\n    @media screen and (max-width: 820px) {\n        display: flex;\n        position: fixed;\n        top: ",";\n        right: 0;\n        left: 0;\n        background: #0d0d0d;\n        transition: all 0.2s ease-in-out;\n        opacity: ",";\n        pointer-events: ",";\n        z-index: 999;\n    }\n"])),(function(n){return n.isOpen?"0":"-100%"}),(function(n){return n.isOpen?"100%":"0"}),(function(n){return n.isOpen?"all":"none"})),cn=B.a.div(m||(m=Object(J.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n"]))),rn=B.a.div(p||(p=Object(J.a)(["\n    color: #fff;\n    font-size: 2.8rem;\n    font-weight: bolder;\n    position: fixed;\n    top: 15px;\n    right: 10px;\n    cursor: pointer;\n"]))),on=B.a.div(b||(b=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin-top: 80px;\n"]))),sn=Object(B.a)(G.Link)(h||(h=Object(J.a)(["\n    text-decoration: none;\n    color: #fff;\n    text-align: center;\n    font-size: 1.6rem;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    width: 100%;\n    padding: 0.8rem;\n\n    &:hover {\n        color: #f195ac;\n    }\n"]))),dn=B.a.a(f||(f=Object(J.a)(["\n    text-decoration: none;\n    color: #000;\n    background: #00a8ff;\n    cursor: pointer;\n    padding: 0.5rem 2rem;\n    transition: all 0.3s ease;\n    border-radius: 50px;\n    margin: 40px 0;\n    font-size: 1.3rem;\n\n    &:hover {\n        background: #f195ac;\n    }\n"]))),ln=function(n){var e=n.isOpen,t=n.toggleMenu;return Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsx)(an,{isOpen:e,onClick:t,children:Object(nn.jsxs)(cn,{children:[Object(nn.jsx)(rn,{onClick:t,children:Object(nn.jsx)(tn.a,{})}),Object(nn.jsxs)(on,{children:[Object(nn.jsx)(sn,{onClick:t,to:"home",smooth:!0,duration:600,children:"Home"}),Object(nn.jsx)(sn,{onClick:t,to:"about",smooth:!0,duration:600,children:"About"}),Object(nn.jsx)(sn,{onClick:t,to:"products",smooth:!0,duration:600,children:"Products"})]}),Object(nn.jsx)(dn,{children:"Sign In"})]})})})},jn=t.p+"static/media/bg.fe746a86.jpg",xn=B.a.section(u||(u=Object(J.a)(["\n    position: relative;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: url(",");\n    background-size: cover;\n    background-color: rgba(0, 0, 0, 0.4);\n    background-position: center left;\n    background-attachment: fixed;\n    background-blend-mode: multiply;\n    background-repeat: no-repeat;\n    padding: 0 10px;\n    text-align: center;\n    gap: 25px;\n"])),jn),mn=B.a.h1(g||(g=Object(J.a)(["\n    color: #fff;\n    font-size: 5rem;\n    line-height: 4rem;\n\n    @media screen and (max-width: 820px) {\n        font-size: 4rem;\n    }\n\n    @media screen and (max-width: 420px) {\n        font-size: 3rem;\n    }\n"]))),pn=B.a.p(O||(O=Object(J.a)(["\n    font-size: 1.4rem;\n    color: #fff;\n    margin-top: 15px;\n\n    @media screen and (max-width: 420px) {\n        font-size: 1rem;\n    }\n"]))),bn=B.a.a(w||(w=Object(J.a)(["\n    padding: 0.9rem 2.4rem;\n    text-decoration: none;\n    color: #0d0d0d;\n    background: #00a8ff;\n    transition: all 400ms ease;\n    border-radius: 10px;\n    font-size: 1.4rem;\n    font-weight: bold;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    z-index: 10;\n\n    &:hover {\n        background: #6dceff;\n    }\n\n    @media screen and (max-width: 520px) {\n        font-size: 1rem;\n    }\n"]))),hn=function(){return Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsxs)(xn,{id:"home",children:[Object(nn.jsxs)(mn,{children:["Choose your ",Object(nn.jsx)("span",{className:"highlightedText",children:"flavor"})]}),Object(nn.jsx)(pn,{children:"Don't play with your lungs. Start Vaping!"}),Object(nn.jsx)(bn,{children:"Shop Now"})]})})},fn=B.a.section(v||(v=Object(J.a)(["\n    background-image: linear-gradient(135deg, #2e1c20, #001824);\n    height: 42em;\n\n    @media screen and (max-width: 380px) {\n        height: auto;\n    }\n"]))),un=B.a.div(k||(k=Object(J.a)(["\n    width: 100%;\n    height: 100%;\n    max-width: 1100px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin: 0 auto;\n    gap: 10px;\n    position: relative;\n    overflow: hidden;\n    padding: 0 20px;\n\n    @media screen and (max-width: 380px) {\n        flex-direction: column;\n        justify-content: center;\n        text-align: center;\n        gap: 25px;\n    }\n    @media screen and (max-width: 550px) {\n        padding-block: 60px;\n    }\n"]))),gn=B.a.div(y||(y=Object(J.a)(["\n    display: flex;\n    justify-content:center;\n    align-items: flex-start;\n    gap: 25px;\n    flex-direction: column;\n    max-width: 50%;\n\n    @media screen and (max-width: 380px) {\n        max-width: 100%;\n        align-items: center;\n    }\n"]))),On=B.a.h1(z||(z=Object(J.a)(["\n    color: #fafafa;\n    font-size: 3rem;\n    line-height: 2.6rem;\n    z-index: 10;\n    font-weight: bold;\n\n    @media screen and (max-width: 510px) {\n        font-size: 2rem;\n    }\n"]))),wn=B.a.p(S||(S=Object(J.a)(["\n    color: rgb(230, 230, 230);\n    font-size: 1.3rem;\n    line-height: 1.5rem;\n    z-index: 10;\n\n    @media screen and (max-width: 510px) {\n        font-size: 1rem;\n    }\n"]))),vn=B.a.div(E||(E=Object(J.a)(["\n    max-width: 265px;\n    height: auto;\n    z-index: 10;\n"]))),kn=t.p+"static/media/aboutImg.4e2e3137.jpg",yn=t.p+"static/media/blob.19b66412.svg",zn=t(11),Sn=t.n(zn),En=(t(23),function(){return Object(I.useEffect)((function(){Sn.a.init({duration:1500})}),[]),Object(nn.jsx)(fn,{id:"about",children:Object(nn.jsxs)(un,{children:[Object(nn.jsxs)(gn,{children:[Object(nn.jsx)("img",{className:"blob",src:yn,alt:"just some blob for decoration"}),Object(nn.jsx)(On,{children:"Effortless Vaping Experience"}),Object(nn.jsx)(wn,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(nn.jsx)(bn,{children:"Get Started"})]}),Object(nn.jsx)(vn,{"data-aos":"fade-left",children:Object(nn.jsx)("img",{className:"about-img",src:kn,alt:"Vaping Man"})})]})})}),Nn=B.a.section(N||(N=Object(J.a)(["\n    width: 100%;\n    height: 42em;\n    background-image: linear-gradient(135deg, #001824, #2e1c20);\n\n    @media screen and (max-width: 820px) {\n        height: auto;\n    }\n"]))),Ln=B.a.div(L||(L=Object(J.a)(["\n    max-width: 1100px;\n    width: 100%;\n    height: 100%;\n    margin-inline: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 35px;\n\n    @media screen and (max-width: 820px) {\n        padding-block: 60px;\n    }\n"]))),Cn=B.a.h1(C||(C=Object(J.a)(["\n    color: #fafafa;\n    font-size: 3rem;\n    line-height: 2.6rem;\n    z-index: 10;\n\n    @media screen and (max-width: 510px) {\n        font-size: 2rem;\n    }\n"]))),Mn=B.a.div(M||(M=Object(J.a)(["\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 25px;\n\n    @media screen and (max-width: 820px) {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    @media screen and (max-width: 545px) {\n        grid-template-columns: 1fr;\n    }\n"]))),Pn=B.a.div(P||(P=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: rgb(221, 221, 221);\n    border-radius: 10px;\n    width: 250px;\n    height: 365px;\n    z-index: 10;\n    text-align: center;\n    box-shadow: 0 0 5px rgb(10, 10, 10);\n    transition: all 0.4s ease-in-out;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n"]))),An=B.a.h3(A||(A=Object(J.a)(["\n    font-size: 1.4rem;\n    color: #0d0d0d;\n    line-height: 1.4rem;\n    margin-top: 10px;\n"]))),Dn=B.a.p(D||(D=Object(J.a)(["\n    margin-top: 10px;\n    color: #010101;\n    line-height: 1.2rem;\n"]))),Vn=B.a.a(V||(V=Object(J.a)(["\n    text-decoration: none;\n    color: #00a8ff;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    font-size: 1.2rem;\n    \n    &:hover {\n        transform: scale(1.1);\n    }\n"]))),In=t.p+"static/media/cali g.8a89db36.jpg",Yn=t.p+"static/media/e juice.f2c65292.jpg",Fn=t.p+"static/media/accessories.8f586351.jpg",qn=t(29),Hn=function(){return Object(I.useEffect)((function(){Sn.a.init({duration:1500})}),[]),Object(nn.jsx)(Nn,{id:"products",children:Object(nn.jsxs)(Ln,{children:[Object(nn.jsx)(Cn,{children:"Available Products"}),Object(nn.jsxs)(Mn,{children:[Object(nn.jsxs)(Pn,{"data-aos":"fade-right",children:[Object(nn.jsx)("img",{className:"products",src:In,alt:"Vape Pod Devices"}),Object(nn.jsx)(An,{children:"Devices"}),Object(nn.jsx)(Dn,{children:"Lorem ipsum dolor sit amet, consectetur apidiscing elit"})]}),Object(nn.jsxs)(Pn,{"data-aos":"zoom-out",children:[Object(nn.jsx)("img",{className:"products",src:Yn,alt:"E-juices"}),Object(nn.jsx)(An,{children:"E-liquids"}),Object(nn.jsx)(Dn,{children:"Lorem ipsum dolor sit amet, consectetur apidiscing elit"})]}),Object(nn.jsxs)(Pn,{"data-aos":"fade-left",children:[Object(nn.jsx)("img",{className:"products",src:Fn,alt:"Vape Pod Accessories"}),Object(nn.jsx)(An,{children:"Accessories / Replacements"}),Object(nn.jsx)(Dn,{children:"Lorem ipsum dolor sit amet, consectetur apidiscing elit"})]})]}),Object(nn.jsxs)(Vn,{children:["See all in shop ",Object(nn.jsx)(qn.a,{})]})]})})},Jn=function(){var n=Object(I.useState)(!1),e=Object(H.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsx)(en,{toggleMenu:a}),Object(nn.jsx)(ln,{isOpen:t,toggleMenu:a}),Object(nn.jsx)(hn,{}),Object(nn.jsx)(En,{}),Object(nn.jsx)(Hn,{})]})};var Bn=function(){return Object(nn.jsx)(Jn,{})};q.a.render(Object(nn.jsx)(Y.a.StrictMode,{children:Object(nn.jsx)(Bn,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.98aa3eb9.chunk.js.map