"use strict";(self.webpackChunksolidapp=self.webpackChunksolidapp||[]).push([[7142],{7142:(K,v,r)=>{r.d(v,{M:()=>z});var M=r(449),t=r(5e3),g=r(6087),h=r(4847),s=r(8279),_=r(4004),O=r(4971),u=r(1062),b=r(5094),d=r(7093),p=r(9808),w=r(3918),y=r(4834),f=r(7579),T=r(1135),Z=r(9841),P=r(9718),A=r(2722);let D=(()=>{class n{constructor(e,a){this.table=e,this.renderer=a,this.onDestroy$=new f.x,this.theadChanged$=new T.X(!0),this.tbodyChanged$=new f.x,this.theadObserver=new MutationObserver(()=>this.theadChanged$.next(!0)),this.tbodyObserver=new MutationObserver(()=>this.tbodyChanged$.next(!0))}ngOnInit(){this.thead=this.table.nativeElement.querySelector("thead"),this.tbody=this.table.nativeElement.querySelector("tbody"),this.theadObserver.observe(this.thead,{characterData:!0,subtree:!0}),this.tbodyObserver.observe(this.tbody,{childList:!0})}ngAfterViewInit(){(0,Z.a)([this.theadChanged$,this.tbodyChanged$]).pipe((0,P.h)([this.thead.rows.item(0),this.tbody.rows]),(0,_.U)(([e,a])=>[[...e.children].map(o=>o.textContent),[...a].map(o=>[...o.children])]),(0,A.R)(this.onDestroy$)).subscribe(([e,a])=>a.forEach(o=>o.forEach(l=>this.renderer.setAttribute(l,"data-column-name",e[l.cellIndex]))))}ngOnDestroy(){this.theadObserver.disconnect(),this.tbodyObserver.disconnect(),this.onDestroy$.next(!0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["","appMatTableResponsive",""]]}),n})();var x=r(7322),R=r(7531),S=r(7446);const c=function(){return{height:"20px","border-radius":"5px"}};function G(n,i){if(1&n&&(t.TgZ(0,"div",5),t._UZ(1,"ngx-skeleton-loader",6),t._UZ(2,"ngx-skeleton-loader",6),t._UZ(3,"ngx-skeleton-loader",6),t._UZ(4,"ngx-skeleton-loader",6),t._UZ(5,"ngx-skeleton-loader",6),t._UZ(6,"ngx-skeleton-loader",6),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(12,c)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(13,c)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(14,c)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(15,c)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(16,c)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(17,c))}}const m=function(){return{height:"35px","border-radius":"5px"}},Q=function(){return[1,2,3,4]};function U(n,i){if(1&n&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t._UZ(3,"ngx-skeleton-loader",6),t._UZ(4,"ngx-skeleton-loader",6),t._UZ(5,"ngx-skeleton-loader",6),t._UZ(6,"ngx-skeleton-loader",6),t._UZ(7,"ngx-skeleton-loader",6),t._UZ(8,"ngx-skeleton-loader",6),t.qZA(),t.TgZ(9,"div",7),t._UZ(10,"mat-divider"),t.qZA(),t.YNc(11,G,7,18,"div",8),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("animation",e.animation)("theme",t.DdM(13,m)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(14,m)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(15,m)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(16,m)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(17,m)),t.xp6(1),t.Q6J("animation",e.animation)("theme",t.DdM(18,m)),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,Q))}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"mat-form-field"),t.TgZ(1,"mat-label"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"input",19,20),t.NdJ("keyup",function(o){return t.CHM(e),t.oxw(2).applyFilter(o)}),t.ALo(6,"translate"),t.qZA(),t.qZA()}2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"GRID.SEARCH")),t.xp6(2),t.s9C("placeholder",t.lcZ(6,4,"GRID.SEARCH")))}function N(n,i){1&n&&(t.TgZ(0,"th",21),t._uU(1,"Select "),t.qZA())}function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"td",22),t.TgZ(1,"mat-checkbox",23),t.NdJ("click",function(o){return o.stopPropagation()})("change",function(o){const C=t.CHM(e).$implicit,V=t.oxw(2);return o?V.onSelectionChange(C):null}),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit,a=t.oxw(2);t.xp6(1),t.Q6J("checked",a.selection.isSelected(e))}}function k(n,i){if(1&n&&(t.TgZ(0,"th",21),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.display_name)," ")}}function I(n,i){if(1&n&&(t.TgZ(0,"p",29),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw(2).$implicit,a=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e[a.columnName]),"")}}function F(n,i){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,I,3,3,"p",28),t.qZA()),2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf","date"===e.datatype)}}function Y(n,i){if(1&n&&(t.TgZ(0,"div",27),t.TgZ(1,"p",29),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.qZA()),2&n){const e=t.oxw().$implicit,a=t.oxw(2).$implicit;t.xp6(2),t.Oqu(t.lcZ(3,1,e[a.columnName]))}}function $(n,i){if(1&n&&(t.TgZ(0,"td",22),t.YNc(1,F,2,1,"div",25),t.YNc(2,Y,4,3,"ng-template",null,26,t.W1O),t.qZA()),2&n){const e=t.MAs(3),a=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",a.isCustom)("ngIfElse",e)}}function E(n,i){if(1&n&&(t.TgZ(0,"div"),t.ynx(1,24),t.YNc(2,k,3,3,"th",12),t.YNc(3,$,4,2,"td",13),t.BQk(),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.s9C("matColumnDef",e.columnName)}}function H(n,i){if(1&n&&(t.ynx(0),t.YNc(1,E,4,1,"div",9),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf","select"!==e.columnName)}}function j(n,i){1&n&&t._UZ(0,"tr",30)}function q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",31),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).selectedRowItem(l)}),t.qZA()}}function B(n,i){1&n&&(t.TgZ(0,"div",32),t.TgZ(1,"mat-label"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"GRID.NO-RECORDS-FOUND")))}const W=function(){return[10,25,50,100]};function X(n,i){if(1&n&&(t.YNc(0,J,7,6,"mat-form-field",9),t.TgZ(1,"table",10),t.ynx(2,11),t.YNc(3,N,2,0,"th",12),t.YNc(4,L,2,1,"td",13),t.BQk(),t.YNc(5,H,2,1,"ng-container",14),t.YNc(6,j,1,0,"tr",15),t.YNc(7,q,1,0,"tr",16),t.qZA(),t.YNc(8,B,4,3,"div",17),t.ALo(9,"async"),t._UZ(10,"mat-paginator",18)),2&n){const e=t.oxw();t.Q6J("ngIf",e.showFilter),t.xp6(1),t.Q6J("dataSource",e.dataSource),t.xp6(4),t.Q6J("ngForOf",e.headers),t.xp6(1),t.Q6J("matHeaderRowDef",e.displayColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayColumns),t.xp6(1),t.Q6J("ngIf",t.lcZ(9,7,e.noData)),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(9,W))}}let z=(()=>{class n{constructor(e,a){this.translate=e,this.store=a,this.useCustomHeader=!1,this.sortColumn="",this.sortOrder="",this.showFilter=!1,this.showSkeleton=!1,this.selectedRow=new t.vpe,this.selectedSelection=new t.vpe,this.searchString="",this.placeholderForFilter="",this.i=0,this.selection=new M.Ov(!1,[]),this.animation="pulse",this.store.select(O.D6).subscribe(o=>{this.translate.use(o.userPreference.language)})}ngOnChanges(){this.data&&this.data.length>0||(this.data=[]),this.dataSource=new s.by(this.data),this.noData=this.dataSource.connect().pipe((0,_.U)(e=>0===e.length)),this.data.length>0&&(this.dataSource.paginator=this.paginator,this.sortColumn&&(this.sort.active=this.sortColumn),this.sortColumn&&(this.sort.direction=this.sortOrder),this.dataSource.sort=this.sort,this.dataSource.filter=this.searchString)}ngAfterViewChecked(){this.dataSource.filterPredicate=(e,a)=>{let o=!1;for(const l of this.displayColumns)l in e&&(o=o||-1!==e[l].toString().trim().toLowerCase().indexOf(a.trim().toLowerCase()));return o}}selectedRowItem(e){this.selectedRow.emit(e)}applyFilter(e){let a=e.target.value;a=a.trim(),a=a.toLowerCase(),this.dataSource.filter=a}camelCase(e){const a=e.replace(/\s(.)/g,function(o){return o.toUpperCase()}).replace(/^(.)/,function(o){return o.toLowerCase()});return a.charAt(0).toUpperCase()+a.slice(1)}onSelectionChange(e){this.selection.toggle(e),this.selectedSelection.emit(this.selection)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.sK),t.Y36(b.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shared-grid"]],viewQuery:function(e,a){if(1&e&&(t.Gf(g.NW,7),t.Gf(h.YE,7)),2&e){let o;t.iGM(o=t.CRH())&&(a.paginator=o.first),t.iGM(o=t.CRH())&&(a.sort=o.first)}},inputs:{displayColumns:"displayColumns",data:"data",useCustomHeader:"useCustomHeader",headers:"headers",sortColumn:"sortColumn",sortOrder:"sortOrder",showFilter:"showFilter",showSkeleton:"showSkeleton",searchString:"searchString"},outputs:{selectedRow:"selectedRow",selectedSelection:"selectedSelection"},features:[t.TTD],decls:4,vars:2,consts:[["fxLayout","column","fxLayoutGap","10px",1,"mat-typography"],["class","pl-4 pr-4",4,"ngIf","ngIfElse"],["showTable",""],[1,"pl-4","pr-4"],["fxLayout","column","fxLayoutGap","10px","fxLayoutAlign","center center"],["fxLayoutAlign","space-between center","fxLayoutGap","10px",1,"first-section-wrapper"],["fxFlex","5",1,"loader-mb-0",3,"animation","theme"],[1,"w-100"],["class","first-section-wrapper","fxLayoutAlign","space-between center","fxLayoutGap","10px",4,"ngFor","ngForOf"],[4,"ngIf"],["appMatTableResponsive","","mat-table","","matSort","","fxFlex","1 1 100%",1,"mr-2","ml-2",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",3,"click",4,"matRowDef","matRowDefColumns"],["class","mat-h3","fxLayoutAlign","center center",4,"ngIf"],["showFirstLastButtons","true",3,"pageSizeOptions"],["matInput","",3,"placeholder","keyup"],["input",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[3,"checked","click","change"],[3,"matColumnDef"],["fxLayoutAlign","start center",4,"ngIf","ngIfElse"],["showasis",""],["fxLayoutAlign","start center"],["class","m-0",4,"ngIf"],[1,"m-0"],["mat-header-row",""],["mat-row","",1,"cursor-pointer",3,"click"],["fxLayoutAlign","center center",1,"mat-h3"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,U,12,20,"div",1),t.YNc(2,X,11,10,"ng-template",null,2,t.W1O),t.qZA()),2&e){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",a.showSkeleton)("ngIfElse",o)}},directives:[d.xw,d.SQ,p.O5,d.Wh,w.xr,d.yH,y.d,p.sg,s.BZ,D,h.YE,s.w1,s.fO,s.Dz,s.as,s.nj,g.NW,x.KE,x.hX,R.Nt,s.ge,h.nU,s.ev,S.oG,s.XQ,s.Gk],pipes:[p.Ov,u.X$,p.uU],styles:["@media (max-width: 768px){.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:none;flex-wrap:wrap;height:auto;position:sticky;top:0;z-index:2}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;padding:1rem .5rem;justify-content:space-around}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] > .mat-sort-header-container[_ngcontent-%COMP%]{padding-left:15px}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:not([mat-sort-header]), .mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell.mat-sort-header-disabled[_ngcontent-%COMP%], .mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   th.mat-header-cell.mat-column-actions[_ngcontent-%COMP%]{display:none}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{height:auto}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions){display:grid;grid-template-columns:50% 50%;padding:.5rem;text-align:right;word-break:break-word}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions) > *[_ngcontent-%COMP%]{grid-column:2}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:not(.mat-column-actions):before{content:attr(data-column-name);text-align:left}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:0 .5rem}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   td.mat-column-actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:.5rem 0}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:last-of-type{border:none}.mat-table[appMatTableResponsive][_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%]:last-of-type{border-bottom:.5rem solid #fafafa}.mat-card[_ngcontent-%COMP%]   .mat-table[matTableResponsive][_ngcontent-%COMP%], .mat-expansion-panel[_ngcontent-%COMP%]   .mat-table[matTableResponsive][_ngcontent-%COMP%]{border:.5rem solid #fafafa}}"]}),n})()}}]);