// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__27686__auto__ = (function re_com$util$fmap_$_iter__28814(s__28815){
return (new cljs.core.LazySeq(null,(function (){
var s__28815__$1 = s__28815;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28815__$1);
if(temp__4657__auto__){
var s__28815__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28815__$2)){
var c__27684__auto__ = cljs.core.chunk_first.call(null,s__28815__$2);
var size__27685__auto__ = cljs.core.count.call(null,c__27684__auto__);
var b__28817 = cljs.core.chunk_buffer.call(null,size__27685__auto__);
if((function (){var i__28816 = (0);
while(true){
if((i__28816 < size__27685__auto__)){
var vec__28824 = cljs.core._nth.call(null,c__27684__auto__,i__28816);
var k = cljs.core.nth.call(null,vec__28824,(0),null);
var val = cljs.core.nth.call(null,vec__28824,(1),null);
cljs.core.chunk_append.call(null,b__28817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__28830 = (i__28816 + (1));
i__28816 = G__28830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28817),re_com$util$fmap_$_iter__28814.call(null,cljs.core.chunk_rest.call(null,s__28815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28817),null);
}
} else {
var vec__28827 = cljs.core.first.call(null,s__28815__$2);
var k = cljs.core.nth.call(null,vec__28827,(0),null);
var val = cljs.core.nth.call(null,vec__28827,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__28814.call(null,cljs.core.rest.call(null,s__28815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27686__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__27988__auto__ = [];
var len__27981__auto___28832 = arguments.length;
var i__27982__auto___28833 = (0);
while(true){
if((i__27982__auto___28833 < len__27981__auto___28832)){
args__27988__auto__.push((arguments[i__27982__auto___28833]));

var G__28834 = (i__27982__auto___28833 + (1));
i__27982__auto___28833 = G__28834;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((0) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__27989__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq28831){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28831));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__27988__auto__ = [];
var len__27981__auto___28841 = arguments.length;
var i__27982__auto___28842 = (0);
while(true){
if((i__27982__auto___28842 < len__27981__auto___28841)){
args__27988__auto__.push((arguments[i__27982__auto___28842]));

var G__28843 = (i__27982__auto___28842 + (1));
i__27982__auto___28842 = G__28843;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((1) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27989__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?(- val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq28839){
var G__28840 = cljs.core.first.call(null,seq28839);
var seq28839__$1 = cljs.core.next.call(null,seq28839);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__28840,seq28839__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__27988__auto__ = [];
var len__27981__auto___28850 = arguments.length;
var i__27982__auto___28851 = (0);
while(true){
if((i__27982__auto___28851 < len__27981__auto___28850)){
args__27988__auto__.push((arguments[i__27982__auto___28851]));

var G__28852 = (i__27982__auto___28851 + (1));
i__27982__auto___28851 = G__28852;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((2) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27989__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__28847){
var map__28848 = p__28847;
var map__28848__$1 = ((((!((map__28848 == null)))?((((map__28848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28848):map__28848);
var id_fn = cljs.core.get.call(null,map__28848__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__28848,map__28848__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__28848,map__28848__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq28844){
var G__28845 = cljs.core.first.call(null,seq28844);
var seq28844__$1 = cljs.core.next.call(null,seq28844);
var G__28846 = cljs.core.first.call(null,seq28844__$1);
var seq28844__$2 = cljs.core.next.call(null,seq28844__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__28845,G__28846,seq28844__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__27988__auto__ = [];
var len__27981__auto___28860 = arguments.length;
var i__27982__auto___28861 = (0);
while(true){
if((i__27982__auto___28861 < len__27981__auto___28860)){
args__27988__auto__.push((arguments[i__27982__auto___28861]));

var G__28862 = (i__27982__auto___28861 + (1));
i__27982__auto___28861 = G__28862;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((2) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27989__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__28857){
var map__28858 = p__28857;
var map__28858__$1 = ((((!((map__28858 == null)))?((((map__28858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28858):map__28858);
var id_fn = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28858,map__28858__$1,id_fn){
return (function (p1__28853_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__28853_SHARP_),id);
});})(map__28858,map__28858__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq28854){
var G__28855 = cljs.core.first.call(null,seq28854);
var seq28854__$1 = cljs.core.next.call(null,seq28854);
var G__28856 = cljs.core.first.call(null,seq28854__$1);
var seq28854__$2 = cljs.core.next.call(null,seq28854__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__28855,G__28856,seq28854__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__27988__auto__ = [];
var len__27981__auto___28870 = arguments.length;
var i__27982__auto___28871 = (0);
while(true){
if((i__27982__auto___28871 < len__27981__auto___28870)){
args__27988__auto__.push((arguments[i__27982__auto___28871]));

var G__28872 = (i__27982__auto___28871 + (1));
i__27982__auto___28871 = G__28872;
continue;
} else {
}
break;
}

var argseq__27989__auto__ = ((((2) < args__27988__auto__.length))?(new cljs.core.IndexedSeq(args__27988__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27989__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__28867){
var map__28868 = p__28867;
var map__28868__$1 = ((((!((map__28868 == null)))?((((map__28868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28868):map__28868);
var id_fn = cljs.core.get.call(null,map__28868__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__28868,map__28868__$1,id_fn){
return (function (p1__28863_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__28863_SHARP_),id);
});})(map__28868,map__28868__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq28864){
var G__28865 = cljs.core.first.call(null,seq28864);
var seq28864__$1 = cljs.core.next.call(null,seq28864);
var G__28866 = cljs.core.first.call(null,seq28864__$1);
var seq28864__$2 = cljs.core.next.call(null,seq28864__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__28865,G__28866,seq28864__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__28873 = current_node.parentNode;
var G__28874 = (sum_scroll_left + current_node.scrollLeft);
var G__28875 = (sum_scroll_top + current_node.scrollTop);
current_node = G__28873;
sum_scroll_left = G__28874;
sum_scroll_top = G__28875;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1506566543230