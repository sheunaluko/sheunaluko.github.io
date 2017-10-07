// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39398){
var map__39423 = p__39398;
var map__39423__$1 = ((((!((map__39423 == null)))?((((map__39423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39423):map__39423);
var m = map__39423__$1;
var n = cljs.core.get.call(null,map__39423__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39425_39447 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39426_39448 = null;
var count__39427_39449 = (0);
var i__39428_39450 = (0);
while(true){
if((i__39428_39450 < count__39427_39449)){
var f_39451 = cljs.core._nth.call(null,chunk__39426_39448,i__39428_39450);
cljs.core.println.call(null,"  ",f_39451);

var G__39452 = seq__39425_39447;
var G__39453 = chunk__39426_39448;
var G__39454 = count__39427_39449;
var G__39455 = (i__39428_39450 + (1));
seq__39425_39447 = G__39452;
chunk__39426_39448 = G__39453;
count__39427_39449 = G__39454;
i__39428_39450 = G__39455;
continue;
} else {
var temp__4657__auto___39456 = cljs.core.seq.call(null,seq__39425_39447);
if(temp__4657__auto___39456){
var seq__39425_39457__$1 = temp__4657__auto___39456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39425_39457__$1)){
var c__27717__auto___39458 = cljs.core.chunk_first.call(null,seq__39425_39457__$1);
var G__39459 = cljs.core.chunk_rest.call(null,seq__39425_39457__$1);
var G__39460 = c__27717__auto___39458;
var G__39461 = cljs.core.count.call(null,c__27717__auto___39458);
var G__39462 = (0);
seq__39425_39447 = G__39459;
chunk__39426_39448 = G__39460;
count__39427_39449 = G__39461;
i__39428_39450 = G__39462;
continue;
} else {
var f_39463 = cljs.core.first.call(null,seq__39425_39457__$1);
cljs.core.println.call(null,"  ",f_39463);

var G__39464 = cljs.core.next.call(null,seq__39425_39457__$1);
var G__39465 = null;
var G__39466 = (0);
var G__39467 = (0);
seq__39425_39447 = G__39464;
chunk__39426_39448 = G__39465;
count__39427_39449 = G__39466;
i__39428_39450 = G__39467;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39468 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26906__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39468);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39468)))?cljs.core.second.call(null,arglists_39468):arglists_39468));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39429_39469 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39430_39470 = null;
var count__39431_39471 = (0);
var i__39432_39472 = (0);
while(true){
if((i__39432_39472 < count__39431_39471)){
var vec__39433_39473 = cljs.core._nth.call(null,chunk__39430_39470,i__39432_39472);
var name_39474 = cljs.core.nth.call(null,vec__39433_39473,(0),null);
var map__39436_39475 = cljs.core.nth.call(null,vec__39433_39473,(1),null);
var map__39436_39476__$1 = ((((!((map__39436_39475 == null)))?((((map__39436_39475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39436_39475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39436_39475):map__39436_39475);
var doc_39477 = cljs.core.get.call(null,map__39436_39476__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39478 = cljs.core.get.call(null,map__39436_39476__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39474);

cljs.core.println.call(null," ",arglists_39478);

if(cljs.core.truth_(doc_39477)){
cljs.core.println.call(null," ",doc_39477);
} else {
}

var G__39479 = seq__39429_39469;
var G__39480 = chunk__39430_39470;
var G__39481 = count__39431_39471;
var G__39482 = (i__39432_39472 + (1));
seq__39429_39469 = G__39479;
chunk__39430_39470 = G__39480;
count__39431_39471 = G__39481;
i__39432_39472 = G__39482;
continue;
} else {
var temp__4657__auto___39483 = cljs.core.seq.call(null,seq__39429_39469);
if(temp__4657__auto___39483){
var seq__39429_39484__$1 = temp__4657__auto___39483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39429_39484__$1)){
var c__27717__auto___39485 = cljs.core.chunk_first.call(null,seq__39429_39484__$1);
var G__39486 = cljs.core.chunk_rest.call(null,seq__39429_39484__$1);
var G__39487 = c__27717__auto___39485;
var G__39488 = cljs.core.count.call(null,c__27717__auto___39485);
var G__39489 = (0);
seq__39429_39469 = G__39486;
chunk__39430_39470 = G__39487;
count__39431_39471 = G__39488;
i__39432_39472 = G__39489;
continue;
} else {
var vec__39438_39490 = cljs.core.first.call(null,seq__39429_39484__$1);
var name_39491 = cljs.core.nth.call(null,vec__39438_39490,(0),null);
var map__39441_39492 = cljs.core.nth.call(null,vec__39438_39490,(1),null);
var map__39441_39493__$1 = ((((!((map__39441_39492 == null)))?((((map__39441_39492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39441_39492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39441_39492):map__39441_39492);
var doc_39494 = cljs.core.get.call(null,map__39441_39493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39495 = cljs.core.get.call(null,map__39441_39493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39491);

cljs.core.println.call(null," ",arglists_39495);

if(cljs.core.truth_(doc_39494)){
cljs.core.println.call(null," ",doc_39494);
} else {
}

var G__39496 = cljs.core.next.call(null,seq__39429_39484__$1);
var G__39497 = null;
var G__39498 = (0);
var G__39499 = (0);
seq__39429_39469 = G__39496;
chunk__39430_39470 = G__39497;
count__39431_39471 = G__39498;
i__39432_39472 = G__39499;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__39443 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39444 = null;
var count__39445 = (0);
var i__39446 = (0);
while(true){
if((i__39446 < count__39445)){
var role = cljs.core._nth.call(null,chunk__39444,i__39446);
var temp__4657__auto___39500__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39500__$1)){
var spec_39501 = temp__4657__auto___39500__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39501));
} else {
}

var G__39502 = seq__39443;
var G__39503 = chunk__39444;
var G__39504 = count__39445;
var G__39505 = (i__39446 + (1));
seq__39443 = G__39502;
chunk__39444 = G__39503;
count__39445 = G__39504;
i__39446 = G__39505;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39443);
if(temp__4657__auto____$1){
var seq__39443__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39443__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__39443__$1);
var G__39506 = cljs.core.chunk_rest.call(null,seq__39443__$1);
var G__39507 = c__27717__auto__;
var G__39508 = cljs.core.count.call(null,c__27717__auto__);
var G__39509 = (0);
seq__39443 = G__39506;
chunk__39444 = G__39507;
count__39445 = G__39508;
i__39446 = G__39509;
continue;
} else {
var role = cljs.core.first.call(null,seq__39443__$1);
var temp__4657__auto___39510__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39510__$2)){
var spec_39511 = temp__4657__auto___39510__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39511));
} else {
}

var G__39512 = cljs.core.next.call(null,seq__39443__$1);
var G__39513 = null;
var G__39514 = (0);
var G__39515 = (0);
seq__39443 = G__39512;
chunk__39444 = G__39513;
count__39445 = G__39514;
i__39446 = G__39515;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1506566562836