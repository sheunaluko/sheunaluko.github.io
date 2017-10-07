// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28150__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28151__i = 0, G__28151__a = new Array(arguments.length -  0);
while (G__28151__i < G__28151__a.length) {G__28151__a[G__28151__i] = arguments[G__28151__i + 0]; ++G__28151__i;}
  args = new cljs.core.IndexedSeq(G__28151__a,0);
} 
return G__28150__delegate.call(this,args);};
G__28150.cljs$lang$maxFixedArity = 0;
G__28150.cljs$lang$applyTo = (function (arglist__28152){
var args = cljs.core.seq(arglist__28152);
return G__28150__delegate(args);
});
G__28150.cljs$core$IFn$_invoke$arity$variadic = G__28150__delegate;
return G__28150;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28153__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28154__i = 0, G__28154__a = new Array(arguments.length -  0);
while (G__28154__i < G__28154__a.length) {G__28154__a[G__28154__i] = arguments[G__28154__i + 0]; ++G__28154__i;}
  args = new cljs.core.IndexedSeq(G__28154__a,0);
} 
return G__28153__delegate.call(this,args);};
G__28153.cljs$lang$maxFixedArity = 0;
G__28153.cljs$lang$applyTo = (function (arglist__28155){
var args = cljs.core.seq(arglist__28155);
return G__28153__delegate(args);
});
G__28153.cljs$core$IFn$_invoke$arity$variadic = G__28153__delegate;
return G__28153;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1506566540870