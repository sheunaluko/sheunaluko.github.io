// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('mim.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30019__delegate = function (x){
if(cljs.core.truth_(mim.core.mount_root)){
return cljs.core.apply.call(null,mim.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mim.core/mount-root' is missing");
}
};
var G__30019 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__30020__i = 0, G__30020__a = new Array(arguments.length -  0);
while (G__30020__i < G__30020__a.length) {G__30020__a[G__30020__i] = arguments[G__30020__i + 0]; ++G__30020__i;}
  x = new cljs.core.IndexedSeq(G__30020__a,0);
} 
return G__30019__delegate.call(this,x);};
G__30019.cljs$lang$maxFixedArity = 0;
G__30019.cljs$lang$applyTo = (function (arglist__30021){
var x = cljs.core.seq(arglist__30021);
return G__30019__delegate(x);
});
G__30019.cljs$core$IFn$_invoke$arity$variadic = G__30019__delegate;
return G__30019;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1507392510930