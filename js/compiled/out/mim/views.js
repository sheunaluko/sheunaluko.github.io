// Compiled by ClojureScript 1.9.229 {}
goog.provide('mim.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mim.ws');
goog.require('re_com.core');
mim.views.log = (function mim$views$log(var_args){
var args__27988__auto__ = [];
var len__27981__auto___30012 = arguments.length;
var i__27982__auto___30013 = (0);
while(true){
if((i__27982__auto___30013 < len__27981__auto___30012)){
args__27988__auto__.push((arguments[i__27982__auto___30013]));

var G__30014 = (i__27982__auto___30013 + (1));
i__27982__auto___30013 = G__30014;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return mim.views.log.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

mim.views.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",args));
return console.log(msg);
});

mim.views.log.cljs$lang$maxFixedArity = (0);

mim.views.log.cljs$lang$applyTo = (function (seq30011){
return mim.views.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30011));
});

mim.views.set_ui = (function mim$views$set_ui(msg){
var ui = document.getElementById("console_ui");
return (ui["innerText"] = msg);
});
mim.views.title = (function mim$views$title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Svg Animation",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
mim.views.my_canvas = (function mim$views$my_canvas(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"svgContainer"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"svg"], null)], null)], null);
});
mim.views.main_area = (function mim$views$main_area(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mim.views.my_canvas], null)], null);
});
mim.views.my_button = (function mim$views$my_button(label,click){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"on-click","on-click",1632826543),click], null)], null);
});
mim.views.bottom_panel = (function mim$views$bottom_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"alukosheun@gmail.com",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)], null);
});
mim.views.main_panel = (function mim$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"cornsilk"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mim.views.title], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"78%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mim.views.main_area], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mim.views.bottom_panel], null)], null)], null);
});
});

//# sourceMappingURL=views.js.map?rel=1507392510793
