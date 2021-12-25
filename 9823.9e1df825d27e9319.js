"use strict";(self.webpackChunksolidapp=self.webpackChunksolidapp||[]).push([[9823],{9823:(oe,h,a)=>{a.r(h),a.d(h,{HttpLoaderFactory:()=>k,LoginModule:()=>b,createTranslateLoader:()=>A});var x=a(9808),L=a(520),s=a(3075),d=a(1062),Z=a(40),T=a(3583),y=a(900),O=a(919),I=a(7006),g=a(9291);class m{static checkLeftOvers(r,t){for(let o=0;o<r.length;o++)if(r[o].parent_id===t.name){delete r[o].parent_id,t.children?t.children.push(r[o]):t.children=[r[o]],t.count=t.children.length;const i=r.splice(o,1);this.checkLeftOvers(r,i[0])}}static findParent(r,t){let o=!1;for(let i=0;i<r.length;i++){if(r[i].name===t.parent_id)return o=!0,delete t.parent_id,r[i].children?r[i].children.push(t):r[i].children=[t],r[i].count=r[i].children.length,!0;r[i].children&&(o=this.findParent(r[i].children,t))}return o}static sort(r){r.forEach(({children:t=[]})=>this.sort(t)),r.sort((t,o)=>t.menu_seq_no>o.menu_seq_no?1:-1)}}var G=a(4971),M=a(7217),E=a(6288),e=a(5e3),C=a(5094),q=a(7071),w=a(629),S=a(2340);let P=(()=>{class n{constructor(t){this.http=t}getmenu(t){return this.http.post(`${S.N.apiEndpoint}/menu`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(L.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=a(7093),U=a(5970),R=a(3363),u=a(9224),f=a(7322),F=a(7531),J=a(3874),Q=a(7446),Y=a(7423),D=a(773);function W(n,r){1&n&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"LOGIN-PAGE.WARN.USERID-REQUIRED")))}function z(n,r){1&n&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"LOGIN-PAGE.INFO.USERID-LENGTH")))}function j(n,r){1&n&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"LOGIN-PAGE.ERROR.USERID-FORMAT")))}function H(n,r){if(1&n&&(e.TgZ(0,"mat-error"),e.YNc(1,W,3,3,"div",21),e.YNc(2,z,3,3,"div",21),e.YNc(3,j,3,3,"div",21),e.qZA()),2&n){e.oxw();const t=e.MAs(26);e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.pattern)}}function B(n,r){1&n&&(e.TgZ(0,"div",32),e._UZ(1,"mat-progress-spinner",33),e.qZA())}function _(n,r){1&n&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"LOGIN-PAGE.WARN.PASSWORD-REQUIRED")))}function X(n,r){1&n&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"LOGIN-PAGE.INFO.PASSWORD-LENGTH")))}function K(n,r){if(1&n&&(e.TgZ(0,"mat-error"),e.YNc(1,_,3,3,"div",21),e.YNc(2,X,3,3,"div",21),e.qZA()),2&n){e.oxw();const t=e.MAs(32);e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.errors?null:t.errors.minlength)}}const $=[{path:"",component:(()=>{class n{constructor(t,o,i,l,c,ee,te,ne){this.router=t,this.activatedRoute=o,this.store=i,this.translate=l,this.fb=c,this.snackbarService=ee,this.authService=te,this.menuService=ne,this.showProgress=!1,this.model={username:"",password:""},this.hide=!0,this.appearanceType="outline",this.store.select(G.D6).subscribe(v=>{this.translate.use(v.userPreference.language),this.appearanceType=v.userPreference.appearanceType})}submit(){this.showProgress=!0,this.authService.signIn(this.model).subscribe({next:t=>{if(t&&t.access_token){const o=JSON.parse(atob(t.access_token.split(".")[1]));let l;this.store.dispatch(E.x4({firstName:o.first_name,lastName:o.last_name,email:o.email,IsLoggedIn:!0,permissions:t.permissions,access_token:t.access_token,refresh_token:t.refresh_token,token_prefix:t.token_prefix})),this.menuService.getmenu(t.permissions).subscribe(c=>{l=class{static unflatten(r){return r.reduce((t,o,i,l)=>(null===o.parent_id?(t.left.length&&m.checkLeftOvers(t.left,o),delete o.parent_id,o.root=!0,t.nested.push(o)):m.findParent(t.nested,o)?m.checkLeftOvers(t.left,o):t.left.push(o),i<l.length-1?t:t.nested),{nested:[],left:[]})}}.unflatten(c),m.sort(l),this.store.dispatch(M.K0({menu:l})),this.showProgress=!1,this.router.navigateByUrl(l[0].menu_url)})}this.showProgress=!1},error:t=>{this.showProgress=!1,this.snackbarService.warn(t&&t.error&&t.error.detail?t.error.detail:"Error occured while authenticating user")}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0),e.Y36(g.gz),e.Y36(C.yh),e.Y36(d.sK),e.Y36(s.qu),e.Y36(q.o),e.Y36(w.e),e.Y36(P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:58,vars:42,consts:[["fxLayout","column","fxLayoutAlign","space-around stretch",1,"login-page"],["fxLayout","row","fxLayoutAlign","end center","fxFlex","40px",1,"mr-4"],[3,"isLoginPage"],["fxFlex",""],["fxFlex","100%","fxLayout","row","fxLayoutAlign","center center"],["fxLayout","column","fxLayoutGap","10px"],["fxLayout","row"],[1,"login-card"],["fxLayoutAlign","center center"],["fxLayoutAlign","center center",2,"margin-top","10px"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px"],[1,"welcome-to"],[1,"login-logo"],[1,"signin-continue"],[2,"margin-top","5px !important"],["name","form","novalidate","",2,"margin-top","5px !important"],["f","ngForm"],["fxLayout","column","fxLayout.lt-md","column","fxLayoutGap","5px"],[1,"full-width",3,"appearance"],["matInput","","minlength","4","type","text","name","username","autocomplete","off","pattern","^(?:\\d{10}|\\w+@\\w+\\.\\w{2,3})$","required","",3,"placeholder","ngModel","ngModelChange"],["username","ngModel"],[4,"ngIf"],["class","spin-overlay","fxFlex","100%","fxLayout","row","fxLayoutAlign","center center",4,"ngIf"],["matInput","","minlength","4","name","password","autocomplete","off","required","",3,"type","placeholder","ngModel","ngModelChange"],["password","ngModel"],["matSuffix","",3,"mouseenter","mouseleave"],[2,"margin-top","10px"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"forgot-password","ml-3"],["mat-raised-button","","color","primary",1,"full-width",3,"disabled","click"],["fxFlex","100%","fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","10px"],[1,"mat-icon-rtl-mirror","white-color"],["fxFlex","100%","fxLayout","row","fxLayoutAlign","center center",1,"spin-overlay"],["diameter","50","mode","indeterminate","color","accent"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"app-language",2),e._UZ(3,"app-palette",2),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"mat-card",7),e.TgZ(9,"mat-card-header",8),e.TgZ(10,"mat-card-title",9),e.TgZ(11,"div",10),e.TgZ(12,"mat-label",11),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"div",12),e._UZ(16,"span"),e.qZA(),e.TgZ(17,"mat-label",13),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"mat-card-content",14),e.TgZ(21,"form",15,16),e.TgZ(23,"div",17),e.TgZ(24,"mat-form-field",18),e.TgZ(25,"input",19,20),e.NdJ("ngModelChange",function(l){return o.model.username=l}),e.ALo(27,"translate"),e.qZA(),e.YNc(28,H,4,3,"mat-error",21),e.qZA(),e.YNc(29,B,2,0,"div",22),e.TgZ(30,"mat-form-field",18),e.TgZ(31,"input",23,24),e.NdJ("ngModelChange",function(l){return o.model.password=l}),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"mat-icon",25),e.NdJ("mouseenter",function(){return o.hide=!1})("mouseleave",function(){return o.hide=!0}),e._uU(35),e.qZA(),e.YNc(36,K,3,2,"mat-error",21),e.qZA(),e.TgZ(37,"mat-checkbox"),e._uU(38),e.ALo(39,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"mat-card-actions",26),e.TgZ(41,"div",27),e.TgZ(42,"mat-label",28),e._uU(43),e.ALo(44,"translate"),e.qZA(),e.TgZ(45,"button",29),e.NdJ("click",function(){return o.submit()}),e._uU(46),e.ALo(47,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",30),e.TgZ(49,"mat-label",31),e._uU(50),e.ALo(51,"translate"),e.qZA(),e.TgZ(52,"mat-label",31),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.TgZ(55,"mat-label",31),e._uU(56),e.ALo(57,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const i=e.MAs(22),l=e.MAs(26),c=e.MAs(32);e.xp6(2),e.Q6J("isLoginPage",!0),e.xp6(1),e.Q6J("isLoginPage",!0),e.xp6(10),e.hij(" ",e.lcZ(14,22,"LOGIN-PAGE.WELCOME"),""),e.xp6(5),e.Oqu(e.lcZ(19,24,"LOGIN-PAGE.SIGNIN-CONTINUE")),e.xp6(6),e.Q6J("appearance",o.appearanceType),e.xp6(1),e.s9C("placeholder",e.lcZ(27,26,"LOGIN-PAGE.USERID")),e.Q6J("ngModel",o.model.username),e.xp6(3),e.Q6J("ngIf",l.touched&&l.invalid),e.xp6(1),e.Q6J("ngIf",o.showProgress),e.xp6(1),e.Q6J("appearance",o.appearanceType),e.xp6(1),e.s9C("placeholder",e.lcZ(33,28,"LOGIN-PAGE.PASSWORD")),e.Q6J("type",o.hide?"password":"text")("ngModel",o.model.password),e.xp6(4),e.Oqu(o.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",c.touched&&c.invalid),e.xp6(2),e.Oqu(e.lcZ(39,30,"LOGIN-PAGE.REMEMBER-ME")),e.xp6(5),e.Oqu(e.lcZ(44,32,"LOGIN-PAGE.FORGOT-PASSWORD")),e.xp6(2),e.Q6J("disabled",!i.form.valid),e.xp6(1),e.Oqu(e.lcZ(47,34,"LOGIN-PAGE.LOGIN")),e.xp6(4),e.Oqu(e.lcZ(51,36,"LOGIN-PAGE.HELP")),e.xp6(3),e.Oqu(e.lcZ(54,38,"LOGIN-PAGE.PRIVACY")),e.xp6(3),e.Oqu(e.lcZ(57,40,"LOGIN-PAGE.TERMS"))}},directives:[p.xw,p.Wh,p.yH,U.C,R.n,p.SQ,u.a8,u.dk,u.n5,f.hX,u.dn,s._Y,s.JL,s.F,f.KE,F.Nt,s.Fj,s.wO,s.c5,s.Q7,s.JJ,s.On,x.O5,J.Hw,f.R9,Q.oG,u.hq,Y.lW,f.TO,D.Ou],pipes:[d.X$],styles:[".login-page[_ngcontent-%COMP%]{height:100vh;width:100vw;overflow:hidden}.login-card[_ngcontent-%COMP%]{min-width:250px!important;min-height:400px!important;max-width:320px!important;max-height:480px!important;opacity:85%;box-shadow:0 0!important;border:1px solid lightgray}.login-logo[_ngcontent-%COMP%]{min-width:210px;min-height:55px;background-repeat:no-repeat}.welcome-to[_ngcontent-%COMP%]{font-size:20px!important}.signin-continue[_ngcontent-%COMP%]{font-size:14px!important}.forgot-password[_ngcontent-%COMP%]{color:#c5a8ff;font-weight:200}.spin-overlay[_ngcontent-%COMP%]{height:100vh;width:100%;z-index:10;position:fixed!important;top:0;left:0}"]}),n})(),data:{breadcrumb:""}}];let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild($)],g.Bz]}),n})();function k(n){return new Z.w(n)}function A(n){return new Z.w(n,"./assets/i18n/",".json")}let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[x.ez,V,I.q,s.u5,s.UX,d.aw.forChild({loader:{provide:d.Zw,useFactory:A,deps:[L.eN]},isolate:!0}),s.UX,s.u5,y.m,T._,O.OP]]}),n})()}}]);