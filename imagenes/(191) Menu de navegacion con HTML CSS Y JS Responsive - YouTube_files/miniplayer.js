(function(g){var window=this;var P5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.Y?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",N:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",N:{points:"0 0 24 0 24 24 0 24"}},{D:"path",N:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Abrir p\u00e1gina del v\u00eddeo";a.M().ea("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.Y?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",N:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",N:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expandir");g.S.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],N:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});var f=this;this.V=a;this.ka("click",this.onClick,this);this.ia("title",g.XL(a,e,"i"));g.me(this,function(){return g.pM(b.Ya(),f.element)})},Q5=function(a){g.S.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.w=this.u=void 0;this.L(a,"minimized",this.mI);this.L(a,"onStateChange",this.QO)},R5=function(a){g.NK.call(this,a);
this.o=new Q5(this.player);this.o.hide();g.AK(this.player,this.o.element,4);a.app.G.o&&(this.load(),g.L(g.gK(a),"ytp-player-minimized",!0))};
g.r(P5,g.S);P5.prototype.onClick=function(){this.V.ma("onExpandMiniplayer")};g.r(Q5,g.S);g.h=Q5.prototype;
g.h.show=function(){this.u=new g.Zm(this.lI,null,this);this.u.start();if(!this.H){this.C=new g.PP(this.player,this);g.C(this,this.C);g.AK(this.player,this.C.element,4);this.C.B=.6;this.S=new g.RO(this.player);g.C(this,this.S);this.A=new g.S({D:"div",I:"ytp-miniplayer-scrim"});g.C(this,this.A);this.A.ba(this.element);this.L(this.A.element,"click",this.RA);var a=new g.S({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"Cerrar"},K:[g.qL()]});g.C(this,a);a.ba(this.A.element);
this.L(a.element,"click",this.jz);a=new P5(this.player,this);g.C(this,a);a.ba(this.A.element);this.B=new g.S({D:"div",I:"ytp-miniplayer-controls"});g.C(this,this.B);this.B.ba(this.A.element);this.L(this.B.element,"click",this.RA);var b=new g.S({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,b);b.ba(this.B.element);a=new g.S({D:"div",I:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ba(this.B.element);var c=new g.S({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,c);c.ba(this.B.element);
this.O=new g.tN(this.player,this,!1);g.C(this,this.O);this.O.ba(b.element);b=new g.pN(this.player,this);g.C(this,b);b.ba(a.element);this.J=new g.tN(this.player,this,!0);g.C(this,this.J);this.J.ba(c.element);this.G=new g.tO(this.player,this);g.C(this,this.G);this.G.ba(this.A.element);this.w=new g.sM(this.player,this);g.C(this,this.w);g.AK(this.player,this.w.element,4);this.F=new g.S({D:"div",I:"ytp-miniplayer-buttons"});g.C(this,this.F);g.AK(this.player,this.F.element,4);a=new g.S({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],N:{"aria-label":"Cerrar"},K:[g.qL()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.jz);a=new g.S({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],N:{"aria-label":"Cerrar"},K:[g.EL()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.IM);this.L(this.player,"presentingplayerstatechange",this.nI);this.L(this.player,"appresize",this.jt);this.L(this.player,"fullscreentoggled",this.jt);this.jt();this.H=!0}0!=this.player.getPlayerState()&&g.S.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.S.prototype.hide.call(this);this.player.app.G.o||(this.H&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.S.prototype.X.call(this)};
g.h.jz=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.IM=function(){this.player.playVideo()};
g.h.RA=function(a){if(a.target==this.A.element||a.target==this.B.element)g.T(this.player.M().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.xC(g.iK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ma("onExpandMiniplayer")};
g.h.mI=function(){g.L(g.gK(this.player),"ytp-player-minimized",this.player.app.G.o)};
g.h.lI=function(){g.wM(this.w);this.G.w();this.u&&this.u.start()};
g.h.nI=function(a){g.X(a.state,32)&&this.C.hide()};
g.h.jt=function(){var a=this.w,b=g.fK(this.player).getPlayerSize().width;a.Ga=0;a.C=b;a.B=!1;g.yM(a);this.w.Mu()};
g.h.QO=function(a){this.player.app.G.o&&(0==a?this.hide():this.show())};
g.h.Ya=function(){return this.C};
g.h.pc=function(){return!1};
g.h.me=function(){return!1};
g.h.Dj=function(){return!1};
g.h.yu=function(){};
g.h.ci=function(){};
g.h.Pk=function(){};
g.h.Rl=function(){return null};
g.h.it=function(){return new g.Xg(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Yj=function(a,b,c,d,e){var f=0,k=d=0,l=g.sh(a);if(b){c=g.mn(b,"ytp-prev-button")||g.mn(b,"ytp-next-button");var m=g.mn(b,"ytp-play-button"),n=g.mn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.ph(b,this.element),k=b.x,f=b.y-12):n&&(k=g.mn(b,"ytp-miniplayer-button-top-left"),f=g.ph(b,this.element),b=g.sh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.fK(this.player).getPlayerSize().width;e=f+(e||0);l=g.td(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.kt=function(){};
g.h.ag=function(){};g.r(R5,g.NK);R5.prototype.create=function(){};
R5.prototype.Jf=function(){return!1};
R5.prototype.load=function(){this.player.hideControls();this.o.show()};
R5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.bL.miniplayer=R5;})(_yt_player);
