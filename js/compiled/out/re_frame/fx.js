// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__34694 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34695 = null;
var count__34696 = (0);
var i__34697 = (0);
while(true){
if((i__34697 < count__34696)){
var vec__34698 = cljs.core._nth.call(null,chunk__34695,i__34697);
var effect_k = cljs.core.nth.call(null,vec__34698,(0),null);
var value = cljs.core.nth.call(null,vec__34698,(1),null);
var temp__4655__auto___34704 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___34704)){
var effect_fn_34705 = temp__4655__auto___34704;
effect_fn_34705.call(null,value);
} else {
}

var G__34706 = seq__34694;
var G__34707 = chunk__34695;
var G__34708 = count__34696;
var G__34709 = (i__34697 + (1));
seq__34694 = G__34706;
chunk__34695 = G__34707;
count__34696 = G__34708;
i__34697 = G__34709;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34694);
if(temp__4657__auto__){
var seq__34694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34694__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__34694__$1);
var G__34710 = cljs.core.chunk_rest.call(null,seq__34694__$1);
var G__34711 = c__27717__auto__;
var G__34712 = cljs.core.count.call(null,c__27717__auto__);
var G__34713 = (0);
seq__34694 = G__34710;
chunk__34695 = G__34711;
count__34696 = G__34712;
i__34697 = G__34713;
continue;
} else {
var vec__34701 = cljs.core.first.call(null,seq__34694__$1);
var effect_k = cljs.core.nth.call(null,vec__34701,(0),null);
var value = cljs.core.nth.call(null,vec__34701,(1),null);
var temp__4655__auto___34714 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___34714)){
var effect_fn_34715 = temp__4655__auto___34714;
effect_fn_34715.call(null,value);
} else {
}

var G__34716 = cljs.core.next.call(null,seq__34694__$1);
var G__34717 = null;
var G__34718 = (0);
var G__34719 = (0);
seq__34694 = G__34716;
chunk__34695 = G__34717;
count__34696 = G__34718;
i__34697 = G__34719;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34720 = cljs.core.seq.call(null,value);
var chunk__34721 = null;
var count__34722 = (0);
var i__34723 = (0);
while(true){
if((i__34723 < count__34722)){
var map__34724 = cljs.core._nth.call(null,chunk__34721,i__34723);
var map__34724__$1 = ((((!((map__34724 == null)))?((((map__34724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34724):map__34724);
var effect = map__34724__$1;
var ms = cljs.core.get.call(null,map__34724__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34724__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34720,chunk__34721,count__34722,i__34723,map__34724,map__34724__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34720,chunk__34721,count__34722,i__34723,map__34724,map__34724__$1,effect,ms,dispatch))
,ms);
}

var G__34728 = seq__34720;
var G__34729 = chunk__34721;
var G__34730 = count__34722;
var G__34731 = (i__34723 + (1));
seq__34720 = G__34728;
chunk__34721 = G__34729;
count__34722 = G__34730;
i__34723 = G__34731;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34720);
if(temp__4657__auto__){
var seq__34720__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34720__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__34720__$1);
var G__34732 = cljs.core.chunk_rest.call(null,seq__34720__$1);
var G__34733 = c__27717__auto__;
var G__34734 = cljs.core.count.call(null,c__27717__auto__);
var G__34735 = (0);
seq__34720 = G__34732;
chunk__34721 = G__34733;
count__34722 = G__34734;
i__34723 = G__34735;
continue;
} else {
var map__34726 = cljs.core.first.call(null,seq__34720__$1);
var map__34726__$1 = ((((!((map__34726 == null)))?((((map__34726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34726):map__34726);
var effect = map__34726__$1;
var ms = cljs.core.get.call(null,map__34726__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34726__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34720,chunk__34721,count__34722,i__34723,map__34726,map__34726__$1,effect,ms,dispatch,seq__34720__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34720,chunk__34721,count__34722,i__34723,map__34726,map__34726__$1,effect,ms,dispatch,seq__34720__$1,temp__4657__auto__))
,ms);
}

var G__34736 = cljs.core.next.call(null,seq__34720__$1);
var G__34737 = null;
var G__34738 = (0);
var G__34739 = (0);
seq__34720 = G__34736;
chunk__34721 = G__34737;
count__34722 = G__34738;
i__34723 = G__34739;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__34740 = cljs.core.seq.call(null,value);
var chunk__34741 = null;
var count__34742 = (0);
var i__34743 = (0);
while(true){
if((i__34743 < count__34742)){
var event = cljs.core._nth.call(null,chunk__34741,i__34743);
re_frame.router.dispatch.call(null,event);

var G__34744 = seq__34740;
var G__34745 = chunk__34741;
var G__34746 = count__34742;
var G__34747 = (i__34743 + (1));
seq__34740 = G__34744;
chunk__34741 = G__34745;
count__34742 = G__34746;
i__34743 = G__34747;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34740);
if(temp__4657__auto__){
var seq__34740__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34740__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__34740__$1);
var G__34748 = cljs.core.chunk_rest.call(null,seq__34740__$1);
var G__34749 = c__27717__auto__;
var G__34750 = cljs.core.count.call(null,c__27717__auto__);
var G__34751 = (0);
seq__34740 = G__34748;
chunk__34741 = G__34749;
count__34742 = G__34750;
i__34743 = G__34751;
continue;
} else {
var event = cljs.core.first.call(null,seq__34740__$1);
re_frame.router.dispatch.call(null,event);

var G__34752 = cljs.core.next.call(null,seq__34740__$1);
var G__34753 = null;
var G__34754 = (0);
var G__34755 = (0);
seq__34740 = G__34752;
chunk__34741 = G__34753;
count__34742 = G__34754;
i__34743 = G__34755;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__34756 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__34757 = null;
var count__34758 = (0);
var i__34759 = (0);
while(true){
if((i__34759 < count__34758)){
var event = cljs.core._nth.call(null,chunk__34757,i__34759);
clear_event.call(null,event);

var G__34760 = seq__34756;
var G__34761 = chunk__34757;
var G__34762 = count__34758;
var G__34763 = (i__34759 + (1));
seq__34756 = G__34760;
chunk__34757 = G__34761;
count__34758 = G__34762;
i__34759 = G__34763;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34756);
if(temp__4657__auto__){
var seq__34756__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34756__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__34756__$1);
var G__34764 = cljs.core.chunk_rest.call(null,seq__34756__$1);
var G__34765 = c__27717__auto__;
var G__34766 = cljs.core.count.call(null,c__27717__auto__);
var G__34767 = (0);
seq__34756 = G__34764;
chunk__34757 = G__34765;
count__34758 = G__34766;
i__34759 = G__34767;
continue;
} else {
var event = cljs.core.first.call(null,seq__34756__$1);
clear_event.call(null,event);

var G__34768 = cljs.core.next.call(null,seq__34756__$1);
var G__34769 = null;
var G__34770 = (0);
var G__34771 = (0);
seq__34756 = G__34768;
chunk__34757 = G__34769;
count__34758 = G__34770;
i__34759 = G__34771;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1506566552921