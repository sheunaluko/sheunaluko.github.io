// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__34546_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__34546_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___34547 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___34547)){
var not_i_34548 = temp__4657__auto___34547;
if(cljs.core.fn_QMARK_.call(null,not_i_34548)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_34548);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_34548);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_34563 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34564 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34481__auto___34577 = re_frame.interop.now.call(null);
var duration__34482__auto___34578 = (end__34481__auto___34577 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__34565_34579 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__34566_34580 = null;
var count__34567_34581 = (0);
var i__34568_34582 = (0);
while(true){
if((i__34568_34582 < count__34567_34581)){
var vec__34569_34583 = cljs.core._nth.call(null,chunk__34566_34580,i__34568_34582);
var k__34483__auto___34584 = cljs.core.nth.call(null,vec__34569_34583,(0),null);
var cb__34484__auto___34585 = cljs.core.nth.call(null,vec__34569_34583,(1),null);
try{cb__34484__auto___34585.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34482__auto___34578,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34572){if((e34572 instanceof java.lang.Exception)){
var e__34485__auto___34586 = e34572;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34483__auto___34584,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34485__auto___34586);
} else {
throw e34572;

}
}
var G__34587 = seq__34565_34579;
var G__34588 = chunk__34566_34580;
var G__34589 = count__34567_34581;
var G__34590 = (i__34568_34582 + (1));
seq__34565_34579 = G__34587;
chunk__34566_34580 = G__34588;
count__34567_34581 = G__34589;
i__34568_34582 = G__34590;
continue;
} else {
var temp__4657__auto___34591 = cljs.core.seq.call(null,seq__34565_34579);
if(temp__4657__auto___34591){
var seq__34565_34592__$1 = temp__4657__auto___34591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34565_34592__$1)){
var c__27717__auto___34593 = cljs.core.chunk_first.call(null,seq__34565_34592__$1);
var G__34594 = cljs.core.chunk_rest.call(null,seq__34565_34592__$1);
var G__34595 = c__27717__auto___34593;
var G__34596 = cljs.core.count.call(null,c__27717__auto___34593);
var G__34597 = (0);
seq__34565_34579 = G__34594;
chunk__34566_34580 = G__34595;
count__34567_34581 = G__34596;
i__34568_34582 = G__34597;
continue;
} else {
var vec__34573_34598 = cljs.core.first.call(null,seq__34565_34592__$1);
var k__34483__auto___34599 = cljs.core.nth.call(null,vec__34573_34598,(0),null);
var cb__34484__auto___34600 = cljs.core.nth.call(null,vec__34573_34598,(1),null);
try{cb__34484__auto___34600.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34482__auto___34578,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34576){if((e34576 instanceof java.lang.Exception)){
var e__34485__auto___34601 = e34576;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34483__auto___34599,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34485__auto___34601);
} else {
throw e34576;

}
}
var G__34602 = cljs.core.next.call(null,seq__34565_34592__$1);
var G__34603 = null;
var G__34604 = (0);
var G__34605 = (0);
seq__34565_34579 = G__34602;
chunk__34566_34580 = G__34603;
count__34567_34581 = G__34604;
i__34568_34582 = G__34605;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34564;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_34563;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1506566552502