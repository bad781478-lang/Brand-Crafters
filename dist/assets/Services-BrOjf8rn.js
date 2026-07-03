import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{c as t,f as n,n as r,t as i}from"./index-g5lYoJ1C.js";import{t as a}from"./ScrollTrigger-D6hK7qt7.js";import{t as o}from"./gsap-BzhAgjyT.js";/* empty css                          */import s from"./CTASection-CZVAacZP.js";var c=e(n(),1),l=i();o.registerPlugin(a);var u={front:`/images/services/result-driven-hero-card-cube.webp`,right:`/images/services/result-driven-hero-team-cube.webp`,back:`/images/services/result-driven-hero-focus-cube.webp`,left:`/images/services/result-driven-hero-app-rewards-cube.webp`,top:`/images/services/result-driven-hero-reference-merch-cube.webp`,bottom:`/images/services/result-driven-hero-reference-play-cube.webp`};function d(){let e=(0,c.useRef)(null),t=(0,c.useRef)(null),n=(0,c.useRef)(null),r=(0,c.useRef)(null),i=(0,c.useRef)(null),s=(0,c.useRef)(null);return(0,c.useRef)(.1),(0,c.useRef)(!1),(0,c.useLayoutEffect)(()=>{let c=o.context(()=>{let c=t.current.querySelectorAll(`.result-hero-word`);a.create({trigger:e.current,start:`top bottom-=25%`,onEnter:()=>{o.fromTo(c,{opacity:0,yPercent:50,rotateX:-20},{opacity:1,yPercent:0,rotateX:0,duration:1.2,ease:`expo.out`,stagger:.05})},once:!0});let l=.4,u={value:l},d=0,f=0,p=()=>{u.value+=(l-u.value)*.05,d+=u.value,f+=u.value,o.set(i.current,{rotateY:f,rotateX:d})};o.timeline({paused:!0,defaults:{ease:`power0`},scrollTrigger:{trigger:s.current,scrub:.2,start:`top top+=10`,end:`bottom top`,invalidateOnRefresh:!0,onUpdate:({getVelocity:e})=>{u.value=e()*.003}}}).fromTo(n.current,{y:0},{y:s.current?s.current.offsetHeight*.8:0}),a.create({trigger:s.current,start:`top bottom`,end:`bottom top`,onToggle:({isActive:e})=>{e?o.ticker.add(p):o.ticker.remove(p)}});let m=o.timeline({defaults:{ease:`power4.out`,duration:3.2},delay:.3});m.fromTo(r.current,{y:-window.innerHeight*1.5,x:0},{y:0,x:Math.PI*3,duration:1.8,modifiers:{x:e=>`${Math.sin(parseFloat(e))*window.innerWidth*.1}px`}}),m.fromTo(u,{value:10},{value:l,ease:`expo.out`},`<`)},e.current);return()=>{c.revert()}},[]),(0,c.useEffect)(()=>(document.body.style.transition=`color 0.64s cubic-bezier(.36, .33, 0, 1), background 0.64s cubic-bezier(.36, .33, 0, 1)`,()=>{document.body.style.transition=``}),[]),(0,l.jsxs)(`section`,{ref:e,className:`result-hero hero`,children:[(0,l.jsx)(`div`,{className:`result-hero_container container`,children:(0,l.jsx)(`div`,{className:`result-hero-perspective`,children:(0,l.jsxs)(`h1`,{ref:t,className:`result-hero-headline`,"aria-label":`Solutions That Build Brands`,children:[(0,l.jsxs)(`span`,{className:`result-hero-line`,"aria-hidden":`true`,children:[(0,l.jsx)(`span`,{className:`result-hero-word`,children:`SOLUTIONS`}),(0,l.jsx)(`span`,{className:`result-hero-word`,children:`THAT`})]}),(0,l.jsxs)(`span`,{className:`result-hero-line`,"aria-hidden":`true`,children:[(0,l.jsx)(`span`,{className:`result-hero-word`,children:`BUILD`}),(0,l.jsx)(`span`,{className:`result-hero-word`,children:`BRANDS`})]})]})})}),(0,l.jsx)(`div`,{ref:s,className:`cube_wrapper`,children:(0,l.jsx)(`div`,{ref:n,className:`c-cube`,children:(0,l.jsx)(`div`,{ref:r,className:`cube_holder`,children:(0,l.jsxs)(`div`,{ref:i,className:`cube`,children:[(0,l.jsx)(`div`,{className:`cube_face cube_face_front`,children:(0,l.jsx)(`img`,{src:u.front,alt:`Brand Identity`,width:`400`,height:`400`,loading:`eager`})}),(0,l.jsx)(`div`,{className:`cube_face cube_face_right`,children:(0,l.jsx)(`img`,{src:u.right,alt:`Websites and UI`,width:`400`,height:`400`,loading:`eager`})}),(0,l.jsx)(`div`,{className:`cube_face cube_face_back`,children:(0,l.jsx)(`img`,{src:u.back,alt:`Creative Production`,width:`400`,height:`400`,loading:`eager`})}),(0,l.jsx)(`div`,{className:`cube_face cube_face_left`,children:(0,l.jsx)(`img`,{src:u.left,alt:`Marketing and Growth`,width:`400`,height:`400`,loading:`eager`})}),(0,l.jsx)(`div`,{className:`cube_face cube_face_top`,children:(0,l.jsx)(`img`,{src:u.top,alt:`Brand Kit`,width:`400`,height:`400`,loading:`eager`})}),(0,l.jsx)(`div`,{className:`cube_face cube_face_btm`,children:(0,l.jsx)(`img`,{src:u.bottom,alt:`Background`,width:`400`,height:`400`,loading:`eager`})})]})})})})]})}var f=({text:e,isItalic:t})=>{let n=(0,c.useRef)(null);(0,c.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?o.to(e.target.querySelectorAll(`.inner-word`),{y:`0%`,duration:1.9,ease:`expo.out`,stagger:.05,delay:.4,overwrite:!0}):e.boundingClientRect.top>0&&o.set(e.target.querySelectorAll(`.inner-word`),{y:`120%`,overwrite:!0})})},{threshold:0,rootMargin:`10px`});return n.current&&e.observe(n.current),()=>e.disconnect()},[]);let r=e.split(` `);return(0,l.jsx)(`span`,{ref:n,className:`inline-block mr-[0.25em] ${t?`italic font-light`:``}`,children:r.map((e,n)=>(0,l.jsx)(`span`,{className:`inline-block overflow-hidden align-bottom pb-[0.1em] ${t?`mr-[0.1em]`:`mr-[0.25em]`}`,children:(0,l.jsx)(`span`,{className:`inner-word inline-block translate-y-[120%] will-change-transform leading-[1.1] ${t?`pr-[0.15em]`:``}`,children:e})},n))})},p=()=>{let e=(0,c.useRef)(null),t=(0,c.useRef)(null),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(o.to(t.target,{y:0,opacity:1,duration:1,ease:`power3.out`}),e.unobserve(t.target))})},{threshold:.1});return n.current&&(o.set(n.current,{y:50,opacity:0}),e.observe(n.current)),()=>e.disconnect()},[]),(0,l.jsxs)(`div`,{ref:n,className:`flex flex-col items-center opacity-0`,style:{marginTop:`12rem`,marginBottom:`6rem`},children:[(0,l.jsx)(`a`,{href:r,target:`_blank`,rel:`noreferrer`,onMouseEnter:()=>{o.killTweensOf([e.current,t.current]),o.fromTo(t.current,{x:`-100%`},{x:`0%`,duration:.3,ease:`power2.in`}),o.fromTo(e.current,{x:`0%`},{x:`125%`,duration:.3,ease:`power2.in`,onComplete:()=>{o.set(e.current,{x:`-125%`})}})},onMouseLeave:()=>{o.killTweensOf([e.current,t.current]),o.fromTo(e.current,{x:`-125%`},{x:`0%`,duration:.3,ease:`power2.out`}),o.fromTo(t.current,{x:`0%`},{x:`200%`,duration:.3,ease:`power2.out`,onComplete:()=>{o.set(t.current,{x:`-100%`})}})},className:`relative bg-[#ffffff] text-[#000000] border border-[#ffffff] rounded-xl flex items-center justify-center cursor-pointer overflow-hidden transform-gpu`,style:{paddingTop:`19.5px`,paddingBottom:`19.5px`,paddingLeft:`clamp(48px, 18vw, 151px)`,paddingRight:`clamp(48px, 18vw, 151px)`},children:(0,l.jsxs)(`div`,{className:`relative overflow-hidden w-[101%] h-full flex items-center justify-center`,children:[(0,l.jsx)(`span`,{ref:e,className:`relative z-10 block text-center whitespace-nowrap will-change-transform font-body text-base font-medium`,children:`Book a Call`}),(0,l.jsx)(`span`,{ref:t,className:`absolute inset-0 z-20 flex items-center justify-center -translate-x-full will-change-transform w-[102%] ml-[-1px]`,"aria-hidden":`true`,children:(0,l.jsx)(`span`,{className:`text-2xl leading-none`,children:`->`})})]})}),(0,l.jsxs)(`div`,{className:`text-center text-white/80 font-body`,style:{marginTop:`30px`,fontSize:`18px`,lineHeight:`130%`},children:[`Not sure which service fits your needs?`,(0,l.jsx)(`br`,{}),`We'll figure it out together on the call.`]})]})};function m(){let e=(0,c.useRef)(null);(0,c.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(o.to(e.target.children,{y:0,opacity:1,duration:1,stagger:.15,ease:`power3.out`}),t.unobserve(e.target))})},{threshold:.1});return e.current&&(o.set(e.current.children,{y:50,opacity:0}),t.observe(e.current)),()=>t.disconnect()},[]);let t=[{text:`We keep things`,italic:!1},{text:`simple.`,italic:!0},{text:`Four essential services`,italic:!1},{text:`that`,italic:!1,br:!0},{text:`tackle`,italic:!0},{text:`the main`,italic:!1},{text:`obstacles`,italic:!0},{text:`growing`,italic:!1,br:!0},{text:`and mid-sized brands face today.`,italic:!1}],n=[[{text:`We keep things`,italic:!1},{text:`simple.`,italic:!0},{text:`Four essential services`,italic:!1},{text:`that`,italic:!1}],[{text:`tackle`,italic:!0},{text:`the main`,italic:!1},{text:`obstacles`,italic:!0},{text:`growing`,italic:!1}],[{text:`and mid-sized brands face today.`,italic:!1}]],r=[{id:`brand-identity`,title:`Brand
Identity`,desc:`Building distinctive visual identities that communicate your brand's story with clarity.`,link:`/services/brand-identity`,images:(0,l.jsx)(`div`,{className:`relative flex justify-center items-start w-full overflow-visible`,children:(0,l.jsx)(`img`,{src:`/images/services/service-card-brand-identity-final.png`,alt:`Brand Identity`,className:`image-transform service-card-art service-card-art--brand relative object-contain origin-center z-10 mx-auto`,style:{height:`430px`,marginTop:`-82px`}})})},{id:`websites-apps`,title:`Websites &
Apps`,desc:`Designing engaging digital experiences and scalable platforms built to grow with you.`,link:`/services/websites-apps`,images:(0,l.jsx)(`div`,{className:`relative flex justify-center items-start w-full overflow-visible`,children:(0,l.jsx)(`img`,{src:`/images/services/service-card-websites-apps-v2-transparent.png`,alt:`Websites & Apps`,className:`image-transform three service-card-art service-card-art--web object-contain origin-center mx-auto`,style:{width:`100%`,height:`430px`,marginTop:`-88px`}})})},{id:`creative-production`,title:`Creative
Production`,desc:`Premium content creation — from video production to 3D design and beyond.`,link:`/services/creative-production`,images:(0,l.jsx)(`div`,{className:`relative flex justify-center items-start w-full overflow-visible`,children:(0,l.jsx)(`img`,{src:`/images/services/service-card-creative-production.png`,alt:`Creative Production`,className:`image-transform four object-contain origin-center`,style:{width:`100%`,height:`410px`,marginTop:`-82px`,marginRight:`8px`}})})},{id:`marketing-visibility`,title:`Marketing &
Visibility`,desc:`Data-driven campaigns designed to accelerate growth and boost brand visibility.`,link:`/services/marketing-visibility`,images:(0,l.jsx)(`div`,{className:`relative flex justify-center items-start w-full overflow-visible`,children:(0,l.jsx)(`img`,{src:`https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/servisecards/marketing-visibility-growth.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvc2VydmlzZWNhcmRzL21hcmtldGluZy12aXNpYmlsaXR5LWdyb3d0aC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyNjYzMzY0LCJleHAiOjMzMzE4NjYzMzY0fQ.iPBfsokaVaojeL7Y9odXYd_6mclO_NkZ47tuHX8yA4c`,alt:`Marketing & Visibility`,className:`image-transform object-contain origin-center mx-auto`,style:{height:`420px`,marginTop:`-88px`}})})}];return(0,l.jsx)(`div`,{className:`w-full bg-[#000000] min-h-[145vh] flex flex-col justify-center`,children:(0,l.jsx)(`section`,{className:`flex justify-center items-center px-8 bg-transparent w-full`,children:(0,l.jsxs)(`div`,{className:`w-full flex flex-col items-center h-auto`,style:{maxWidth:`1350px`,paddingTop:`180px`,paddingBottom:`64px`},children:[(0,l.jsxs)(`h1`,{"aria-label":`We keep things simple. Four essential services that tackle the main obstacles growing and mid-sized brands face today.`,className:`text-white text-center font-headline font-medium tracking-tight text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] w-full flex flex-col items-center`,style:{marginTop:`40px`,lineHeight:`1.1`,maxWidth:`1350px`},children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,className:`xl:hidden flex flex-wrap justify-center w-full`,style:{paddingLeft:`0.25em`},children:t.map((e,t)=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(f,{text:e.text,isItalic:e.italic}),e.br&&(0,l.jsx)(`div`,{className:`basis-full h-0 hidden lg:block`})]},t))}),(0,l.jsx)(`span`,{"aria-hidden":`true`,className:`hidden xl:flex xl:flex-col xl:items-center w-full`,children:n.map((e,t)=>(0,l.jsx)(`span`,{className:`flex justify-center whitespace-nowrap w-full`,style:{paddingLeft:`0.25em`},children:e.map((e,n)=>(0,l.jsx)(f,{text:e.text,isItalic:e.italic},`${t}-${n}`))},t))})]}),(0,l.jsx)(p,{}),(0,l.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
            .service-card-1x:hover .image-transform, .service-card-1x:hover .image-left {
              transform: rotate(-3deg) scale(1.03) !important;
            }
            .service-card-1x:hover .discover-pill {
              opacity: 1;
              transform: translateX(-20px);
            }
            .service-card-1x:hover .eye-icon {
              transform: translateX(70px);
            }
            .discover-pill {
              opacity: 0;
              transform: translateX(-100px);
              transition: all 500ms ease;
            }
            .eye-icon {
              transform: translateX(0px);
              transition: all 500ms ease;
            }
            .image-transform, .image-left {
              transition: transform 500ms ease;
            }
            .service-card-art {
              max-width: 440px;
              filter: drop-shadow(0 22px 26px rgba(0, 0, 0, 0.08));
            }
            .service-card-art--web {
              max-width: 470px;
            }

            /* Tablet Breakpoint (991px) */
            @media screen and (max-width: 991px) {
              .image-transform {
                height: 500px !important; margin-top: -44px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.two {
                height: 500px !important; margin-top: -26px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.three {
                margin-top: 4px !important; margin-bottom: 0 !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.four {
                margin-top: 13px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.five {
                height: 550px !important; margin-top: -56px !important; margin-left: auto !important; margin-right: auto !important;
              }
              .image-transform.clock {
                height: 400px !important; margin-top: 7px !important; margin-left: auto !important; margin-right: auto !important;
              }
              .image-left {
                transform: translate(52px, -7px) rotate(7deg) !important;
              }
              .image-left.two {
                transform: translate(-34px, -25px) !important;
              }
              .service-card-art {
                width: 100% !important;
                max-width: 470px;
                height: 500px !important;
                margin-top: -34px !important;
                margin-right: auto !important;
                margin-left: auto !important;
                transform: none !important;
              }
              .service-card-art--web {
                max-width: 500px;
                margin-top: -18px !important;
              }
            }

            /* Mobile Breakpoint (479px) */
            @media screen and (max-width: 479px) {
              .image-transform {
                height: 500px !important; margin-top: 10px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.two {
                height: 500px !important; margin-top: 61px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.three {
                object-fit: contain !important; width: auto !important; height: 500px !important; margin-top: -29px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.four {
                margin-top: -9px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.five {
                margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.clock {
                height: 350px !important; margin-top: 4px !important; margin-left: auto !important; margin-right: auto !important; overflow: visible !important; transform: none !important;
              }
              .service-card-art {
                width: auto !important;
                max-width: none;
                height: 500px !important;
                margin-top: -28px !important;
                margin-right: auto !important;
                margin-left: auto !important;
                transform: none !important;
              }
              .service-card-art--web {
                height: 500px !important;
                margin-top: -30px !important;
                margin-right: auto !important;
                margin-left: auto !important;
                transform: none !important;
              }
            }
          `}}),(0,l.jsx)(`div`,{ref:e,className:`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden`,style:{gap:`25px`},children:r.map((e,t)=>(0,l.jsxs)(`a`,{href:e.link,id:e.id,className:`service-card-1x group relative bg-[#ffffff] block w-full overflow-hidden`,style:{borderRadius:`10px`,height:`100%`,minHeight:`500px`,paddingTop:`40px`,opacity:1,transform:`translate3d(0,0,0) scale(1) rotate(0)`,scrollMarginTop:`110px`,boxShadow:`0 8px 30px rgba(255, 255, 255, 0.06)`},children:[(0,l.jsxs)(`div`,{className:`flex flex-col text-center`,style:{gap:`30px`,paddingLeft:`37px`,paddingRight:`37px`,marginBottom:`50px`},children:[(0,l.jsx)(`h2`,{className:`text-[#000000] font-headline font-bold text-2xl tracking-tight leading-tight whitespace-pre-line`,children:e.title}),(0,l.jsx)(`p`,{className:`text-[#000000] font-body text-base leading-relaxed`,children:e.desc})]}),e.images,(0,l.jsxs)(`div`,{className:`absolute inset-x-0 bottom-0 w-full flex justify-center items-center pointer-events-none z-20`,style:{marginBottom:`40px`},children:[(0,l.jsx)(`div`,{className:`discover-pill bg-[#000000] text-[#ffffff] font-body font-bold text-sm tracking-wider flex items-center justify-center whitespace-nowrap`,style:{borderRadius:`100px`,padding:`14px 24px`},children:`Discover More`}),(0,l.jsx)(`div`,{className:`eye-icon absolute bg-[#000000] rounded-full flex items-center justify-center w-10 h-10 shadow-lg`,children:(0,l.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,l.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]})})]})]},t))})]})})})}function h(){let e=t();return(0,c.useEffect)(()=>{let t=window.requestAnimationFrame(()=>{if(e.hash){let t=document.getElementById(e.hash.slice(1));t&&(window.__lenis?.scrollTo?window.__lenis.scrollTo(t,{immediate:!0}):t.scrollIntoView({block:`start`}))}});document.title=`Our Services | Brand Identity, Website Development, Creative Production & Digital Growth | Brand Crafters`;let n=(e,t,n=!1)=>{let r=n?`property`:`name`,i=document.querySelector(`meta[${r}="${e}"]`);i||(i=document.createElement(`meta`),i.setAttribute(r,e),document.head.appendChild(i)),i.setAttribute(`content`,t)};return n(`description`,`Explore Brand Crafters services in brand identity, logo design, website development, app development, creative production, CGI, video editing, SEO, ads, and digital growth for modern businesses.`),n(`og:title`,`Brand Crafters Services — Brand Identity, Websites, Creative Production & Digital Growth`,!0),n(`og:description`,`A connected creative system for businesses that need premium branding, modern websites, powerful content, and smarter visibility.`,!0),()=>{window.cancelAnimationFrame(t),document.title=`Brand Crafters`}},[e.hash]),(0,l.jsxs)(`div`,{className:`services-page min-h-screen bg-[#000000] text-white`,children:[(0,l.jsx)(d,{}),(0,l.jsx)(m,{}),(0,l.jsx)(s,{})]})}export{h as default};