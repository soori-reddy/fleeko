"use strict";(self.webpackChunksolidapp=self.webpackChunksolidapp||[]).push([[3699],{3699:(ce,N,s)=>{s.r(N),s.d(N,{AuthenticationserverModule:()=>pe,createTranslateLoader:()=>y});var h=s(9808),q=s(520),a=s(3075),p=s(1062),w=s(40),L=s(7006),J=s(3583),Q=s(900),c=s(9291),T=s(4971),e=s(5e3),v=s(2340);let _=(()=>{class t{constructor(r){this.http=r}getAll(){return this.http.get(`${v.N.apiEndpoint}/config/authenticationserver`)}save(r){return this.http.post(`${v.N.apiEndpoint}/config/authenticationserver`,r)}update(r,o){return this.http.put(`${v.N.apiEndpoint}/config/authenticationserver/${r}`,o)}delete(r){return this.http.delete(`${v.N.apiEndpoint}/config/authenticationserver/${r}`)}getServers(){return this.http.get(`${v.N.apiEndpoint}/metadata/connectorslist/filter/category_id/1`)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(q.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var E=s(5094),Z=s(7071),R=s(291),S=s(722),I=s(4763),O=s(7142);let Y=(()=>{class t{constructor(r,o,l,i,f,A,g){this.authserverConfigService=r,this.activatedRoute=o,this.router=l,this.store=i,this.translate=f,this.fb=A,this.snackbarService=g,this.displayedColumns=["servername","ipaddress","port","service_user_name"],this.headers=[{columnName:"servername",display_name:"GRID.SERVER-NAME"},{columnName:"ipaddress",display_name:"GRID.IPADDRESS"},{columnName:"port",display_name:"GRID.PORT"},{columnName:"service_user_name",display_name:"GRID.SERVICE-ACCOUNT"}],this.dataLoaded=!1,this.searchString="",this.store.select(T.D6).subscribe(u=>{this.translate.use(u.userPreference.language)})}ngOnInit(){localStorage.removeItem("selectedItem"),this.getAllServers()}getAllServers(){this.authserverConfigService.getAll().subscribe({next:r=>{this.gridData=r,this.dataLoaded=!0},error:r=>{this.dataLoaded=!0,this.gridData=[]}})}selectedRowItem(r){localStorage.setItem("selectedItem",JSON.stringify(r)),this.router.navigate(["./edit/"+r.id],{relativeTo:this.activatedRoute})}selectedSelection(r){}getSearchString(r){this.searchString=r}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(_),e.Y36(c.gz),e.Y36(c.F0),e.Y36(E.yh),e.Y36(p.sK),e.Y36(a.qu),e.Y36(Z.o))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-authenticationserver"]],decls:7,vars:16,consts:[[3,"title","showNew","showIcon","showSearch","searchPlaceholder","emitSearchString"],[1,"p-2"],[3,"showSkeleton","data","displayColumns","useCustomHeader","headers","showFilter","searchString","selectedRow","selectedSelection"]],template:function(r,o){1&r&&(e.TgZ(0,"app-page"),e.TgZ(1,"app-page-header",0),e.NdJ("emitSearchString",function(i){return o.getSearchString(i)}),e.ALo(2,"translate"),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"app-page-body"),e.TgZ(5,"div",1),e.TgZ(6,"app-shared-grid",2),e.NdJ("selectedRow",function(i){return o.selectedRowItem(i)})("selectedSelection",function(i){return o.selectedSelection(i)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(1),e.Q6J("title",e.lcZ(2,12,"AUTH-SERVER.PAGE-TITLE.HOME"))("showNew",!0)("showIcon",!0)("showSearch",!0)("searchPlaceholder",e.lcZ(3,14,"AUTH-SERVER.SEARCH-PLACEHOLDER")),e.xp6(5),e.Q6J("showSkeleton",!o.dataLoaded)("data",o.gridData)("displayColumns",o.displayedColumns)("useCustomHeader",!0)("headers",o.headers)("showFilter",!1)("searchString",o.searchString))},directives:[R.I,S.q,I.H,O.M],pipes:[p.X$],styles:[""]}),t})();var m=s(7093),d=s(7322),U=s(7531),x=s(4107),C=s(508);function V(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.SERVER-NAME.ERROR.REQUIRED")," "))}function D(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,V,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.servername.errors||!r._form.controls.servername.errors.required))}}function H(t,n){if(1&t&&(e.TgZ(0,"mat-option",11),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const r=n.$implicit;e.Q6J("value",r),e.xp6(1),e.Oqu(e.lcZ(2,2,r.display_name))}}function F(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.SYSTEM.ERROR.REQUIRED")," "))}function b(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,F,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.system.errors||!r._form.controls.system.errors.required))}}function P(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.IPADDRESS.ERROR.REQUIRED")," "))}function M(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,P,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.ipaddress.errors||!r._form.controls.ipaddress.errors.required))}}function j(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.PORT.ERROR.REQUIRED")," "))}function G(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,j,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.port.errors||!r._form.controls.port.errors.required))}}function $(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.SERVICE-ACCOUNT-NAME.ERROR.REQUIRED")," "))}function B(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,$,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.service_user_name.errors||!r._form.controls.service_user_name.errors.required))}}let X=(()=>{class t{constructor(r,o,l,i,f,A,g){this._service=r,this.store=o,this.translate=l,this.fb=i,this.snackbarService=f,this.activatedRoute=A,this.router=g,this.servers=[],this.selectedUser={},this.appearanceType="outline",this.store.select(T.D6).subscribe(u=>{this.translate.use(u.userPreference.language),this.appearanceType=u.userPreference.appearanceType})}ngOnInit(){this.selectedUser=JSON.parse(localStorage.getItem("selectedItem")),this.selectedUserId=this.selectedUser.id,this._form=this.fb.group({servername:new a.NI(this.selectedUser.servername,a.kI.required),system:new a.NI(this.selectedUser.system,a.kI.required),port:new a.NI(this.selectedUser.port,[a.kI.required]),ipaddress:new a.NI(this.selectedUser.ipaddress,a.kI.required),service_user_name:new a.NI(this.selectedUser.service_user_name,a.kI.required)}),this._form.disable(),this.getServersList()}getServersList(){this._service.getServers().subscribe(r=>{this.servers=r})}update(){this._service.update(this.selectedUserId,this._form.value).subscribe({next:r=>{this.snackbarService.info(this.translate.instant("AUTH-SERVER.SUCCESS.UPDATE")),this.router.navigate(["./../.."],{relativeTo:this.activatedRoute})},error:r=>this.snackbarService.warn(this.translate.instant("AUTH-SERVER.ERROR.UPDATE"))})}getPageAction(r){const o=r.toString();"update"===o?this.update():"modify"===o?this._form.enable():"delete"===o&&this.delete()}delete(){}compareFn(r,o){return r&&o?r.id===o.id:r===o}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(_),e.Y36(E.yh),e.Y36(p.sK),e.Y36(a.qu),e.Y36(Z.o),e.Y36(c.gz),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-authserver-edit"]],decls:41,vars:34,consts:[[3,"title","showEditBack","showIcon","selectedId","pageAction"],["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutGap","10px","fxLayoutAlign","flex-start",3,"formGroup"],["fxFlex","0 1 calc(33.3% - 10px)","fxFlex.lt-md","0 1 calc(50% - 10px)","fxFlex.lt-sm","100%"],[3,"appearance"],["formControlName","servername","matInput","","required",""],[4,"ngIf"],["formControlName","system","required","",3,"compareWith"],[3,"value",4,"ngFor","ngForOf"],["formControlName","ipaddress","matInput","","required",""],["formControlName","port","matInput","","required",""],["formControlName","service_user_name","matInput","","required",""],[3,"value"]],template:function(r,o){1&r&&(e.TgZ(0,"app-page"),e.TgZ(1,"app-page-header",0),e.NdJ("pageAction",function(i){return o.getPageAction(i)}),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"app-page-body"),e.TgZ(4,"form",1),e.TgZ(5,"div",2),e.TgZ(6,"mat-form-field",3),e.TgZ(7,"mat-label"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e._UZ(10,"input",4),e.YNc(11,D,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(12,"div",2),e.TgZ(13,"mat-form-field",3),e.TgZ(14,"mat-label"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"mat-select",6),e.YNc(18,H,3,4,"mat-option",7),e.qZA(),e.YNc(19,b,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(20,"div",2),e.TgZ(21,"mat-form-field",3),e.TgZ(22,"mat-label"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e._UZ(25,"input",8),e.YNc(26,M,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(27,"div",2),e.TgZ(28,"mat-form-field",3),e.TgZ(29,"mat-label"),e._uU(30),e.ALo(31,"translate"),e.qZA(),e._UZ(32,"input",9),e.YNc(33,G,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(34,"div",2),e.TgZ(35,"mat-form-field",3),e.TgZ(36,"mat-label"),e._uU(37),e.ALo(38,"translate"),e.qZA(),e._UZ(39,"input",10),e.YNc(40,B,2,1,"mat-error",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(1),e.Q6J("title",e.lcZ(2,22,"AUTH-SERVER.PAGE-TITLE.EDIT"))("showEditBack",!0)("showIcon",!0)("selectedId",o.selectedUserId),e.xp6(3),e.Q6J("formGroup",o._form),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(9,24,"AUTH-SERVER.SERVER-NAME.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.servername.invalid&&!!o._form.controls.servername.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(16,26,"AUTH-SERVER.SYSTEM.TITLE")),e.xp6(2),e.Q6J("compareWith",o.compareFn),e.xp6(1),e.Q6J("ngForOf",o.servers),e.xp6(1),e.Q6J("ngIf",!!o._form.controls.system.invalid&&!!o._form.controls.system.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(24,28,"AUTH-SERVER.IPADDRESS.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.ipaddress.invalid&&!!o._form.controls.ipaddress.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(31,30,"AUTH-SERVER.PORT.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.port.invalid&&!!o._form.controls.port.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(38,32,"AUTH-SERVER.SERVICE-ACCOUNT-NAME.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.service_user_name.invalid&&!!o._form.controls.service_user_name.touched))},directives:[R.I,S.q,I.H,a._Y,a.JL,m.xw,m.SQ,m.Wh,a.sg,m.yH,d.KE,d.hX,a.Fj,U.Nt,a.JJ,a.u,a.Q7,h.O5,x.gD,h.sg,d.TO,C.ey],pipes:[p.X$],styles:[""]}),t})();function z(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.SERVER-NAME.ERROR.REQUIRED")," "))}function W(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,z,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.servername.errors||!r._form.controls.servername.errors.required))}}function k(t,n){if(1&t&&(e.TgZ(0,"mat-option",11),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const r=n.$implicit;e.Q6J("value",r),e.xp6(1),e.Oqu(e.lcZ(2,2,r.display_name))}}function K(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.SYSTEM.ERROR.REQUIRED")," "))}function ee(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,K,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.system.errors||!r._form.controls.system.errors.required))}}function te(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.IPADDRESS.ERROR.REQUIRED")," "))}function re(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,te,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.ipaddress.errors||!r._form.controls.ipaddress.errors.required))}}function oe(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.PORT.ERROR.REQUIRED")," "))}function ae(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,oe,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.port.errors||!r._form.controls.port.errors.required))}}function ne(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AUTH-SERVER.SERVICE-ACCOUNT-NAME.ERROR.REQUIRED")," "))}function se(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,ne,3,3,"div",5),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",!(null==r._form.controls.service_user_name.errors||!r._form.controls.service_user_name.errors.required))}}const ie=[{path:"",component:Y},{path:"new",component:(()=>{class t{constructor(r,o,l,i,f,A,g){this._service=r,this.store=o,this.translate=l,this.fb=i,this.snackbarService=f,this.activatedRoute=A,this.router=g,this.servers=[],this.appearanceType="outline",this.store.select(T.D6).subscribe(u=>{this.translate.use(u.userPreference.language),this.appearanceType=u.userPreference.appearanceType})}ngOnInit(){this.getServersList(),this._form=this.fb.group({servername:new a.NI("",a.kI.required),system:new a.NI("",a.kI.required),port:new a.NI("",a.kI.required),ipaddress:new a.NI("",a.kI.required),service_user_name:new a.NI("",a.kI.required)})}getServersList(){this._service.getServers().subscribe(r=>{this.servers=r})}getPageAction(r){"save"===r.toString()&&this.Save()}Save(){this._service.save(this._form.value).subscribe({next:r=>{this.snackbarService.info(this.translate.instant("AUTH-SERVER.SUCCESS.CREATE")),this.router.navigate(["./../"],{relativeTo:this.activatedRoute})},error:r=>this.snackbarService.warn(this.translate.instant("AUTH-SERVER.ERROR.CREATE"))})}compareFn(r,o){return r&&o?r.id===o.id:r===o}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(_),e.Y36(E.yh),e.Y36(p.sK),e.Y36(a.qu),e.Y36(Z.o),e.Y36(c.gz),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-authserver-new"]],decls:41,vars:35,consts:[[3,"title","showBack","showIcon","showSave","isDisabled","pageAction"],["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutGap","10px","fxLayoutAlign","flex-start",3,"formGroup"],["fxFlex","0 1 calc(33.3% - 10px)","fxFlex.lt-md","0 1 calc(50% - 10px)","fxFlex.lt-sm","100%"],[3,"appearance"],["formControlName","servername","matInput","","required",""],[4,"ngIf"],["formControlName","system","required","",3,"compareWith"],[3,"value",4,"ngFor","ngForOf"],["formControlName","ipaddress","matInput","","required",""],["formControlName","port","matInput","","required",""],["formControlName","service_user_name","matInput","","required",""],[3,"value"]],template:function(r,o){1&r&&(e.TgZ(0,"app-page"),e.TgZ(1,"app-page-header",0),e.NdJ("pageAction",function(i){return o.getPageAction(i)}),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"app-page-body"),e.TgZ(4,"form",1),e.TgZ(5,"div",2),e.TgZ(6,"mat-form-field",3),e.TgZ(7,"mat-label"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e._UZ(10,"input",4),e.YNc(11,W,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(12,"div",2),e.TgZ(13,"mat-form-field",3),e.TgZ(14,"mat-label"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"mat-select",6),e.YNc(18,k,3,4,"mat-option",7),e.qZA(),e.YNc(19,ee,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(20,"div",2),e.TgZ(21,"mat-form-field",3),e.TgZ(22,"mat-label"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e._UZ(25,"input",8),e.YNc(26,re,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(27,"div",2),e.TgZ(28,"mat-form-field",3),e.TgZ(29,"mat-label"),e._uU(30),e.ALo(31,"translate"),e.qZA(),e._UZ(32,"input",9),e.YNc(33,ae,2,1,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(34,"div",2),e.TgZ(35,"mat-form-field",3),e.TgZ(36,"mat-label"),e._uU(37),e.ALo(38,"translate"),e.qZA(),e._UZ(39,"input",10),e.YNc(40,se,2,1,"mat-error",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(1),e.Q6J("title",e.lcZ(2,23,"AUTH-SERVER.PAGE-TITLE.CREATE"))("showBack",!0)("showIcon",!0)("showSave",!0)("isDisabled",o._form.invalid),e.xp6(3),e.Q6J("formGroup",o._form),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(9,25,"AUTH-SERVER.SERVER-NAME.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.servername.invalid&&!!o._form.controls.servername.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(16,27,"AUTH-SERVER.SYSTEM.TITLE")),e.xp6(2),e.Q6J("compareWith",o.compareFn),e.xp6(1),e.Q6J("ngForOf",o.servers),e.xp6(1),e.Q6J("ngIf",!!o._form.controls.system.invalid&&!!o._form.controls.system.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(24,29,"AUTH-SERVER.IPADDRESS.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.ipaddress.invalid&&!!o._form.controls.ipaddress.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(31,31,"AUTH-SERVER.PORT.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.port.invalid&&!!o._form.controls.port.touched),e.xp6(2),e.Q6J("appearance",o.appearanceType),e.xp6(2),e.Oqu(e.lcZ(38,33,"AUTH-SERVER.SERVICE-ACCOUNT-NAME.TITLE")),e.xp6(3),e.Q6J("ngIf",!!o._form.controls.service_user_name.invalid&&!!o._form.controls.service_user_name.touched))},directives:[R.I,S.q,I.H,a._Y,a.JL,m.xw,m.SQ,m.Wh,a.sg,m.yH,d.KE,d.hX,a.Fj,U.Nt,a.JJ,a.u,a.Q7,h.O5,x.gD,h.sg,d.TO,C.ey],pipes:[p.X$],styles:[""]}),t})(),data:{breadcrumb:"BUTTON.NEW"}},{path:"edit/:id",component:X,data:{breadcrumb:"BUTTON.EDIT"}}];let le=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(ie)],c.Bz]}),t})();function y(t){return new w.w(t,"assets/i18n/",".json")}let pe=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.ez,le,L.q,a.u5,a.UX,p.aw.forChild({loader:{provide:p.Zw,useFactory:y,deps:[q.eN]},isolate:!0}),a.UX,a.u5,Q.m,J._]]}),t})()}}]);