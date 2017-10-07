// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26906__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26906__auto__){
return or__26906__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26906__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37081_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37081_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37086 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37087 = null;
var count__37088 = (0);
var i__37089 = (0);
while(true){
if((i__37089 < count__37088)){
var n = cljs.core._nth.call(null,chunk__37087,i__37089);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37090 = seq__37086;
var G__37091 = chunk__37087;
var G__37092 = count__37088;
var G__37093 = (i__37089 + (1));
seq__37086 = G__37090;
chunk__37087 = G__37091;
count__37088 = G__37092;
i__37089 = G__37093;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37086);
if(temp__4657__auto__){
var seq__37086__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37086__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__37086__$1);
var G__37094 = cljs.core.chunk_rest.call(null,seq__37086__$1);
var G__37095 = c__27717__auto__;
var G__37096 = cljs.core.count.call(null,c__27717__auto__);
var G__37097 = (0);
seq__37086 = G__37094;
chunk__37087 = G__37095;
count__37088 = G__37096;
i__37089 = G__37097;
continue;
} else {
var n = cljs.core.first.call(null,seq__37086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37098 = cljs.core.next.call(null,seq__37086__$1);
var G__37099 = null;
var G__37100 = (0);
var G__37101 = (0);
seq__37086 = G__37098;
chunk__37087 = G__37099;
count__37088 = G__37100;
i__37089 = G__37101;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37152_37163 = cljs.core.seq.call(null,deps);
var chunk__37153_37164 = null;
var count__37154_37165 = (0);
var i__37155_37166 = (0);
while(true){
if((i__37155_37166 < count__37154_37165)){
var dep_37167 = cljs.core._nth.call(null,chunk__37153_37164,i__37155_37166);
topo_sort_helper_STAR_.call(null,dep_37167,(depth + (1)),state);

var G__37168 = seq__37152_37163;
var G__37169 = chunk__37153_37164;
var G__37170 = count__37154_37165;
var G__37171 = (i__37155_37166 + (1));
seq__37152_37163 = G__37168;
chunk__37153_37164 = G__37169;
count__37154_37165 = G__37170;
i__37155_37166 = G__37171;
continue;
} else {
var temp__4657__auto___37172 = cljs.core.seq.call(null,seq__37152_37163);
if(temp__4657__auto___37172){
var seq__37152_37173__$1 = temp__4657__auto___37172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37152_37173__$1)){
var c__27717__auto___37174 = cljs.core.chunk_first.call(null,seq__37152_37173__$1);
var G__37175 = cljs.core.chunk_rest.call(null,seq__37152_37173__$1);
var G__37176 = c__27717__auto___37174;
var G__37177 = cljs.core.count.call(null,c__27717__auto___37174);
var G__37178 = (0);
seq__37152_37163 = G__37175;
chunk__37153_37164 = G__37176;
count__37154_37165 = G__37177;
i__37155_37166 = G__37178;
continue;
} else {
var dep_37179 = cljs.core.first.call(null,seq__37152_37173__$1);
topo_sort_helper_STAR_.call(null,dep_37179,(depth + (1)),state);

var G__37180 = cljs.core.next.call(null,seq__37152_37173__$1);
var G__37181 = null;
var G__37182 = (0);
var G__37183 = (0);
seq__37152_37163 = G__37180;
chunk__37153_37164 = G__37181;
count__37154_37165 = G__37182;
i__37155_37166 = G__37183;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37156){
var vec__37160 = p__37156;
var seq__37161 = cljs.core.seq.call(null,vec__37160);
var first__37162 = cljs.core.first.call(null,seq__37161);
var seq__37161__$1 = cljs.core.next.call(null,seq__37161);
var x = first__37162;
var xs = seq__37161__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37160,seq__37161,first__37162,seq__37161__$1,x,xs,get_deps__$1){
return (function (p1__37102_SHARP_){
return clojure.set.difference.call(null,p1__37102_SHARP_,x);
});})(vec__37160,seq__37161,first__37162,seq__37161__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37196 = cljs.core.seq.call(null,provides);
var chunk__37197 = null;
var count__37198 = (0);
var i__37199 = (0);
while(true){
if((i__37199 < count__37198)){
var prov = cljs.core._nth.call(null,chunk__37197,i__37199);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37200_37208 = cljs.core.seq.call(null,requires);
var chunk__37201_37209 = null;
var count__37202_37210 = (0);
var i__37203_37211 = (0);
while(true){
if((i__37203_37211 < count__37202_37210)){
var req_37212 = cljs.core._nth.call(null,chunk__37201_37209,i__37203_37211);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37212,prov);

var G__37213 = seq__37200_37208;
var G__37214 = chunk__37201_37209;
var G__37215 = count__37202_37210;
var G__37216 = (i__37203_37211 + (1));
seq__37200_37208 = G__37213;
chunk__37201_37209 = G__37214;
count__37202_37210 = G__37215;
i__37203_37211 = G__37216;
continue;
} else {
var temp__4657__auto___37217 = cljs.core.seq.call(null,seq__37200_37208);
if(temp__4657__auto___37217){
var seq__37200_37218__$1 = temp__4657__auto___37217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37200_37218__$1)){
var c__27717__auto___37219 = cljs.core.chunk_first.call(null,seq__37200_37218__$1);
var G__37220 = cljs.core.chunk_rest.call(null,seq__37200_37218__$1);
var G__37221 = c__27717__auto___37219;
var G__37222 = cljs.core.count.call(null,c__27717__auto___37219);
var G__37223 = (0);
seq__37200_37208 = G__37220;
chunk__37201_37209 = G__37221;
count__37202_37210 = G__37222;
i__37203_37211 = G__37223;
continue;
} else {
var req_37224 = cljs.core.first.call(null,seq__37200_37218__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37224,prov);

var G__37225 = cljs.core.next.call(null,seq__37200_37218__$1);
var G__37226 = null;
var G__37227 = (0);
var G__37228 = (0);
seq__37200_37208 = G__37225;
chunk__37201_37209 = G__37226;
count__37202_37210 = G__37227;
i__37203_37211 = G__37228;
continue;
}
} else {
}
}
break;
}

var G__37229 = seq__37196;
var G__37230 = chunk__37197;
var G__37231 = count__37198;
var G__37232 = (i__37199 + (1));
seq__37196 = G__37229;
chunk__37197 = G__37230;
count__37198 = G__37231;
i__37199 = G__37232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37196);
if(temp__4657__auto__){
var seq__37196__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37196__$1)){
var c__27717__auto__ = cljs.core.chunk_first.call(null,seq__37196__$1);
var G__37233 = cljs.core.chunk_rest.call(null,seq__37196__$1);
var G__37234 = c__27717__auto__;
var G__37235 = cljs.core.count.call(null,c__27717__auto__);
var G__37236 = (0);
seq__37196 = G__37233;
chunk__37197 = G__37234;
count__37198 = G__37235;
i__37199 = G__37236;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37196__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37204_37237 = cljs.core.seq.call(null,requires);
var chunk__37205_37238 = null;
var count__37206_37239 = (0);
var i__37207_37240 = (0);
while(true){
if((i__37207_37240 < count__37206_37239)){
var req_37241 = cljs.core._nth.call(null,chunk__37205_37238,i__37207_37240);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37241,prov);

var G__37242 = seq__37204_37237;
var G__37243 = chunk__37205_37238;
var G__37244 = count__37206_37239;
var G__37245 = (i__37207_37240 + (1));
seq__37204_37237 = G__37242;
chunk__37205_37238 = G__37243;
count__37206_37239 = G__37244;
i__37207_37240 = G__37245;
continue;
} else {
var temp__4657__auto___37246__$1 = cljs.core.seq.call(null,seq__37204_37237);
if(temp__4657__auto___37246__$1){
var seq__37204_37247__$1 = temp__4657__auto___37246__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37204_37247__$1)){
var c__27717__auto___37248 = cljs.core.chunk_first.call(null,seq__37204_37247__$1);
var G__37249 = cljs.core.chunk_rest.call(null,seq__37204_37247__$1);
var G__37250 = c__27717__auto___37248;
var G__37251 = cljs.core.count.call(null,c__27717__auto___37248);
var G__37252 = (0);
seq__37204_37237 = G__37249;
chunk__37205_37238 = G__37250;
count__37206_37239 = G__37251;
i__37207_37240 = G__37252;
continue;
} else {
var req_37253 = cljs.core.first.call(null,seq__37204_37247__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37253,prov);

var G__37254 = cljs.core.next.call(null,seq__37204_37247__$1);
var G__37255 = null;
var G__37256 = (0);
var G__37257 = (0);
seq__37204_37237 = G__37254;
chunk__37205_37238 = G__37255;
count__37206_37239 = G__37256;
i__37207_37240 = G__37257;
continue;
}
} else {
}
}
break;
}

var G__37258 = cljs.core.next.call(null,seq__37196__$1);
var G__37259 = null;
var G__37260 = (0);
var G__37261 = (0);
seq__37196 = G__37258;
chunk__37197 = G__37259;
count__37198 = G__37260;
i__37199 = G__37261;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37266_37270 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37267_37271 = null;
var count__37268_37272 = (0);
var i__37269_37273 = (0);
while(true){
if((i__37269_37273 < count__37268_37272)){
var ns_37274 = cljs.core._nth.call(null,chunk__37267_37271,i__37269_37273);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37274);

var G__37275 = seq__37266_37270;
var G__37276 = chunk__37267_37271;
var G__37277 = count__37268_37272;
var G__37278 = (i__37269_37273 + (1));
seq__37266_37270 = G__37275;
chunk__37267_37271 = G__37276;
count__37268_37272 = G__37277;
i__37269_37273 = G__37278;
continue;
} else {
var temp__4657__auto___37279 = cljs.core.seq.call(null,seq__37266_37270);
if(temp__4657__auto___37279){
var seq__37266_37280__$1 = temp__4657__auto___37279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37266_37280__$1)){
var c__27717__auto___37281 = cljs.core.chunk_first.call(null,seq__37266_37280__$1);
var G__37282 = cljs.core.chunk_rest.call(null,seq__37266_37280__$1);
var G__37283 = c__27717__auto___37281;
var G__37284 = cljs.core.count.call(null,c__27717__auto___37281);
var G__37285 = (0);
seq__37266_37270 = G__37282;
chunk__37267_37271 = G__37283;
count__37268_37272 = G__37284;
i__37269_37273 = G__37285;
continue;
} else {
var ns_37286 = cljs.core.first.call(null,seq__37266_37280__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37286);

var G__37287 = cljs.core.next.call(null,seq__37266_37280__$1);
var G__37288 = null;
var G__37289 = (0);
var G__37290 = (0);
seq__37266_37270 = G__37287;
chunk__37267_37271 = G__37288;
count__37268_37272 = G__37289;
i__37269_37273 = G__37290;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26906__auto__ = goog.require__;
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37291__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37292__i = 0, G__37292__a = new Array(arguments.length -  0);
while (G__37292__i < G__37292__a.length) {G__37292__a[G__37292__i] = arguments[G__37292__i + 0]; ++G__37292__i;}
  args = new cljs.core.IndexedSeq(G__37292__a,0);
} 
return G__37291__delegate.call(this,args);};
G__37291.cljs$lang$maxFixedArity = 0;
G__37291.cljs$lang$applyTo = (function (arglist__37293){
var args = cljs.core.seq(arglist__37293);
return G__37291__delegate(args);
});
G__37291.cljs$core$IFn$_invoke$arity$variadic = G__37291__delegate;
return G__37291;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37294 = cljs.core._EQ_;
var expr__37295 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37294.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37295))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37294,expr__37295){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37294,expr__37295))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37294,expr__37295){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37297){if((e37297 instanceof Error)){
var e = e37297;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37297;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37294,expr__37295))
} else {
if(cljs.core.truth_(pred__37294.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37295))){
return ((function (pred__37294,expr__37295){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__37294,expr__37295){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__37294,expr__37295))
);

return deferred.addErrback(((function (deferred,pred__37294,expr__37295){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__37294,expr__37295))
);
});
;})(pred__37294,expr__37295))
} else {
if(cljs.core.truth_(pred__37294.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37295))){
return ((function (pred__37294,expr__37295){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37298){if((e37298 instanceof Error)){
var e = e37298;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37298;

}
}})());
});
;})(pred__37294,expr__37295))
} else {
return ((function (pred__37294,expr__37295){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37294,expr__37295))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37299,callback){
var map__37302 = p__37299;
var map__37302__$1 = ((((!((map__37302 == null)))?((((map__37302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37302):map__37302);
var file_msg = map__37302__$1;
var request_url = cljs.core.get.call(null,map__37302__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37302,map__37302__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37302,map__37302__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__){
return (function (state_37326){
var state_val_37327 = (state_37326[(1)]);
if((state_val_37327 === (7))){
var inst_37322 = (state_37326[(2)]);
var state_37326__$1 = state_37326;
var statearr_37328_37348 = state_37326__$1;
(statearr_37328_37348[(2)] = inst_37322);

(statearr_37328_37348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (1))){
var state_37326__$1 = state_37326;
var statearr_37329_37349 = state_37326__$1;
(statearr_37329_37349[(2)] = null);

(statearr_37329_37349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (4))){
var inst_37306 = (state_37326[(7)]);
var inst_37306__$1 = (state_37326[(2)]);
var state_37326__$1 = (function (){var statearr_37330 = state_37326;
(statearr_37330[(7)] = inst_37306__$1);

return statearr_37330;
})();
if(cljs.core.truth_(inst_37306__$1)){
var statearr_37331_37350 = state_37326__$1;
(statearr_37331_37350[(1)] = (5));

} else {
var statearr_37332_37351 = state_37326__$1;
(statearr_37332_37351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (6))){
var state_37326__$1 = state_37326;
var statearr_37333_37352 = state_37326__$1;
(statearr_37333_37352[(2)] = null);

(statearr_37333_37352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (3))){
var inst_37324 = (state_37326[(2)]);
var state_37326__$1 = state_37326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37326__$1,inst_37324);
} else {
if((state_val_37327 === (2))){
var state_37326__$1 = state_37326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37326__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37327 === (11))){
var inst_37318 = (state_37326[(2)]);
var state_37326__$1 = (function (){var statearr_37334 = state_37326;
(statearr_37334[(8)] = inst_37318);

return statearr_37334;
})();
var statearr_37335_37353 = state_37326__$1;
(statearr_37335_37353[(2)] = null);

(statearr_37335_37353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (9))){
var inst_37310 = (state_37326[(9)]);
var inst_37312 = (state_37326[(10)]);
var inst_37314 = inst_37312.call(null,inst_37310);
var state_37326__$1 = state_37326;
var statearr_37336_37354 = state_37326__$1;
(statearr_37336_37354[(2)] = inst_37314);

(statearr_37336_37354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (5))){
var inst_37306 = (state_37326[(7)]);
var inst_37308 = figwheel.client.file_reloading.blocking_load.call(null,inst_37306);
var state_37326__$1 = state_37326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37326__$1,(8),inst_37308);
} else {
if((state_val_37327 === (10))){
var inst_37310 = (state_37326[(9)]);
var inst_37316 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37310);
var state_37326__$1 = state_37326;
var statearr_37337_37355 = state_37326__$1;
(statearr_37337_37355[(2)] = inst_37316);

(statearr_37337_37355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (8))){
var inst_37306 = (state_37326[(7)]);
var inst_37312 = (state_37326[(10)]);
var inst_37310 = (state_37326[(2)]);
var inst_37311 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37312__$1 = cljs.core.get.call(null,inst_37311,inst_37306);
var state_37326__$1 = (function (){var statearr_37338 = state_37326;
(statearr_37338[(9)] = inst_37310);

(statearr_37338[(10)] = inst_37312__$1);

return statearr_37338;
})();
if(cljs.core.truth_(inst_37312__$1)){
var statearr_37339_37356 = state_37326__$1;
(statearr_37339_37356[(1)] = (9));

} else {
var statearr_37340_37357 = state_37326__$1;
(statearr_37340_37357[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30187__auto__))
;
return ((function (switch__30075__auto__,c__30187__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30076__auto__ = null;
var figwheel$client$file_reloading$state_machine__30076__auto____0 = (function (){
var statearr_37344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37344[(0)] = figwheel$client$file_reloading$state_machine__30076__auto__);

(statearr_37344[(1)] = (1));

return statearr_37344;
});
var figwheel$client$file_reloading$state_machine__30076__auto____1 = (function (state_37326){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_37326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e37345){if((e37345 instanceof Object)){
var ex__30079__auto__ = e37345;
var statearr_37346_37358 = state_37326;
(statearr_37346_37358[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37359 = state_37326;
state_37326 = G__37359;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30076__auto__ = function(state_37326){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30076__auto____1.call(this,state_37326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30076__auto____0;
figwheel$client$file_reloading$state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30076__auto____1;
return figwheel$client$file_reloading$state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__))
})();
var state__30189__auto__ = (function (){var statearr_37347 = f__30188__auto__.call(null);
(statearr_37347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_37347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__))
);

return c__30187__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37360,callback){
var map__37363 = p__37360;
var map__37363__$1 = ((((!((map__37363 == null)))?((((map__37363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37363):map__37363);
var file_msg = map__37363__$1;
var namespace = cljs.core.get.call(null,map__37363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37363,map__37363__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37363,map__37363__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37365){
var map__37368 = p__37365;
var map__37368__$1 = ((((!((map__37368 == null)))?((((map__37368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37368):map__37368);
var file_msg = map__37368__$1;
var namespace = cljs.core.get.call(null,map__37368__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37370){
var map__37373 = p__37370;
var map__37373__$1 = ((((!((map__37373 == null)))?((((map__37373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37373):map__37373);
var file_msg = map__37373__$1;
var namespace = cljs.core.get.call(null,map__37373__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26894__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26894__auto__){
var or__26906__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26906__auto__)){
return or__26906__auto__;
} else {
var or__26906__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26906__auto____$1)){
return or__26906__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26894__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37375,callback){
var map__37378 = p__37375;
var map__37378__$1 = ((((!((map__37378 == null)))?((((map__37378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37378):map__37378);
var file_msg = map__37378__$1;
var request_url = cljs.core.get.call(null,map__37378__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30187__auto___37482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto___37482,out){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto___37482,out){
return (function (state_37464){
var state_val_37465 = (state_37464[(1)]);
if((state_val_37465 === (1))){
var inst_37438 = cljs.core.seq.call(null,files);
var inst_37439 = cljs.core.first.call(null,inst_37438);
var inst_37440 = cljs.core.next.call(null,inst_37438);
var inst_37441 = files;
var state_37464__$1 = (function (){var statearr_37466 = state_37464;
(statearr_37466[(7)] = inst_37441);

(statearr_37466[(8)] = inst_37440);

(statearr_37466[(9)] = inst_37439);

return statearr_37466;
})();
var statearr_37467_37483 = state_37464__$1;
(statearr_37467_37483[(2)] = null);

(statearr_37467_37483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (2))){
var inst_37441 = (state_37464[(7)]);
var inst_37447 = (state_37464[(10)]);
var inst_37446 = cljs.core.seq.call(null,inst_37441);
var inst_37447__$1 = cljs.core.first.call(null,inst_37446);
var inst_37448 = cljs.core.next.call(null,inst_37446);
var inst_37449 = (inst_37447__$1 == null);
var inst_37450 = cljs.core.not.call(null,inst_37449);
var state_37464__$1 = (function (){var statearr_37468 = state_37464;
(statearr_37468[(10)] = inst_37447__$1);

(statearr_37468[(11)] = inst_37448);

return statearr_37468;
})();
if(inst_37450){
var statearr_37469_37484 = state_37464__$1;
(statearr_37469_37484[(1)] = (4));

} else {
var statearr_37470_37485 = state_37464__$1;
(statearr_37470_37485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (3))){
var inst_37462 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37464__$1,inst_37462);
} else {
if((state_val_37465 === (4))){
var inst_37447 = (state_37464[(10)]);
var inst_37452 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37447);
var state_37464__$1 = state_37464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37464__$1,(7),inst_37452);
} else {
if((state_val_37465 === (5))){
var inst_37458 = cljs.core.async.close_BANG_.call(null,out);
var state_37464__$1 = state_37464;
var statearr_37471_37486 = state_37464__$1;
(statearr_37471_37486[(2)] = inst_37458);

(statearr_37471_37486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (6))){
var inst_37460 = (state_37464[(2)]);
var state_37464__$1 = state_37464;
var statearr_37472_37487 = state_37464__$1;
(statearr_37472_37487[(2)] = inst_37460);

(statearr_37472_37487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37465 === (7))){
var inst_37448 = (state_37464[(11)]);
var inst_37454 = (state_37464[(2)]);
var inst_37455 = cljs.core.async.put_BANG_.call(null,out,inst_37454);
var inst_37441 = inst_37448;
var state_37464__$1 = (function (){var statearr_37473 = state_37464;
(statearr_37473[(7)] = inst_37441);

(statearr_37473[(12)] = inst_37455);

return statearr_37473;
})();
var statearr_37474_37488 = state_37464__$1;
(statearr_37474_37488[(2)] = null);

(statearr_37474_37488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30187__auto___37482,out))
;
return ((function (switch__30075__auto__,c__30187__auto___37482,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto____0 = (function (){
var statearr_37478 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37478[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto__);

(statearr_37478[(1)] = (1));

return statearr_37478;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto____1 = (function (state_37464){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_37464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e37479){if((e37479 instanceof Object)){
var ex__30079__auto__ = e37479;
var statearr_37480_37489 = state_37464;
(statearr_37480_37489[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37490 = state_37464;
state_37464 = G__37490;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto__ = function(state_37464){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto____1.call(this,state_37464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto___37482,out))
})();
var state__30189__auto__ = (function (){var statearr_37481 = f__30188__auto__.call(null);
(statearr_37481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto___37482);

return statearr_37481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto___37482,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37491,opts){
var map__37495 = p__37491;
var map__37495__$1 = ((((!((map__37495 == null)))?((((map__37495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37495):map__37495);
var eval_body__$1 = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26894__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26894__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26894__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37497){var e = e37497;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37498_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37498_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37507){
var vec__37508 = p__37507;
var k = cljs.core.nth.call(null,vec__37508,(0),null);
var v = cljs.core.nth.call(null,vec__37508,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37511){
var vec__37512 = p__37511;
var k = cljs.core.nth.call(null,vec__37512,(0),null);
var v = cljs.core.nth.call(null,vec__37512,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37518,p__37519){
var map__37766 = p__37518;
var map__37766__$1 = ((((!((map__37766 == null)))?((((map__37766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37766):map__37766);
var opts = map__37766__$1;
var before_jsload = cljs.core.get.call(null,map__37766__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37766__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37766__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37767 = p__37519;
var map__37767__$1 = ((((!((map__37767 == null)))?((((map__37767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37767):map__37767);
var msg = map__37767__$1;
var files = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30188__auto__ = (function (){var switch__30075__auto__ = ((function (c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37920){
var state_val_37921 = (state_37920[(1)]);
if((state_val_37921 === (7))){
var inst_37781 = (state_37920[(7)]);
var inst_37782 = (state_37920[(8)]);
var inst_37784 = (state_37920[(9)]);
var inst_37783 = (state_37920[(10)]);
var inst_37789 = cljs.core._nth.call(null,inst_37782,inst_37784);
var inst_37790 = figwheel.client.file_reloading.eval_body.call(null,inst_37789,opts);
var inst_37791 = (inst_37784 + (1));
var tmp37922 = inst_37781;
var tmp37923 = inst_37782;
var tmp37924 = inst_37783;
var inst_37781__$1 = tmp37922;
var inst_37782__$1 = tmp37923;
var inst_37783__$1 = tmp37924;
var inst_37784__$1 = inst_37791;
var state_37920__$1 = (function (){var statearr_37925 = state_37920;
(statearr_37925[(7)] = inst_37781__$1);

(statearr_37925[(8)] = inst_37782__$1);

(statearr_37925[(11)] = inst_37790);

(statearr_37925[(9)] = inst_37784__$1);

(statearr_37925[(10)] = inst_37783__$1);

return statearr_37925;
})();
var statearr_37926_38012 = state_37920__$1;
(statearr_37926_38012[(2)] = null);

(statearr_37926_38012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (20))){
var inst_37824 = (state_37920[(12)]);
var inst_37832 = figwheel.client.file_reloading.sort_files.call(null,inst_37824);
var state_37920__$1 = state_37920;
var statearr_37927_38013 = state_37920__$1;
(statearr_37927_38013[(2)] = inst_37832);

(statearr_37927_38013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (27))){
var state_37920__$1 = state_37920;
var statearr_37928_38014 = state_37920__$1;
(statearr_37928_38014[(2)] = null);

(statearr_37928_38014[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (1))){
var inst_37773 = (state_37920[(13)]);
var inst_37770 = before_jsload.call(null,files);
var inst_37771 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37772 = (function (){return ((function (inst_37773,inst_37770,inst_37771,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37515_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37515_SHARP_);
});
;})(inst_37773,inst_37770,inst_37771,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37773__$1 = cljs.core.filter.call(null,inst_37772,files);
var inst_37774 = cljs.core.not_empty.call(null,inst_37773__$1);
var state_37920__$1 = (function (){var statearr_37929 = state_37920;
(statearr_37929[(13)] = inst_37773__$1);

(statearr_37929[(14)] = inst_37770);

(statearr_37929[(15)] = inst_37771);

return statearr_37929;
})();
if(cljs.core.truth_(inst_37774)){
var statearr_37930_38015 = state_37920__$1;
(statearr_37930_38015[(1)] = (2));

} else {
var statearr_37931_38016 = state_37920__$1;
(statearr_37931_38016[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (24))){
var state_37920__$1 = state_37920;
var statearr_37932_38017 = state_37920__$1;
(statearr_37932_38017[(2)] = null);

(statearr_37932_38017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (39))){
var inst_37874 = (state_37920[(16)]);
var state_37920__$1 = state_37920;
var statearr_37933_38018 = state_37920__$1;
(statearr_37933_38018[(2)] = inst_37874);

(statearr_37933_38018[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (46))){
var inst_37915 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
var statearr_37934_38019 = state_37920__$1;
(statearr_37934_38019[(2)] = inst_37915);

(statearr_37934_38019[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (4))){
var inst_37818 = (state_37920[(2)]);
var inst_37819 = cljs.core.List.EMPTY;
var inst_37820 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37819);
var inst_37821 = (function (){return ((function (inst_37818,inst_37819,inst_37820,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37516_SHARP_){
var and__26894__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37516_SHARP_);
if(cljs.core.truth_(and__26894__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37516_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37516_SHARP_)));
} else {
return and__26894__auto__;
}
});
;})(inst_37818,inst_37819,inst_37820,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37822 = cljs.core.filter.call(null,inst_37821,files);
var inst_37823 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37824 = cljs.core.concat.call(null,inst_37822,inst_37823);
var state_37920__$1 = (function (){var statearr_37935 = state_37920;
(statearr_37935[(17)] = inst_37818);

(statearr_37935[(18)] = inst_37820);

(statearr_37935[(12)] = inst_37824);

return statearr_37935;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37936_38020 = state_37920__$1;
(statearr_37936_38020[(1)] = (16));

} else {
var statearr_37937_38021 = state_37920__$1;
(statearr_37937_38021[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (15))){
var inst_37808 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
var statearr_37938_38022 = state_37920__$1;
(statearr_37938_38022[(2)] = inst_37808);

(statearr_37938_38022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (21))){
var inst_37834 = (state_37920[(19)]);
var inst_37834__$1 = (state_37920[(2)]);
var inst_37835 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37834__$1);
var state_37920__$1 = (function (){var statearr_37939 = state_37920;
(statearr_37939[(19)] = inst_37834__$1);

return statearr_37939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37920__$1,(22),inst_37835);
} else {
if((state_val_37921 === (31))){
var inst_37918 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37920__$1,inst_37918);
} else {
if((state_val_37921 === (32))){
var inst_37874 = (state_37920[(16)]);
var inst_37879 = inst_37874.cljs$lang$protocol_mask$partition0$;
var inst_37880 = (inst_37879 & (64));
var inst_37881 = inst_37874.cljs$core$ISeq$;
var inst_37882 = (inst_37880) || (inst_37881);
var state_37920__$1 = state_37920;
if(cljs.core.truth_(inst_37882)){
var statearr_37940_38023 = state_37920__$1;
(statearr_37940_38023[(1)] = (35));

} else {
var statearr_37941_38024 = state_37920__$1;
(statearr_37941_38024[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (40))){
var inst_37895 = (state_37920[(20)]);
var inst_37894 = (state_37920[(2)]);
var inst_37895__$1 = cljs.core.get.call(null,inst_37894,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37896 = cljs.core.get.call(null,inst_37894,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37897 = cljs.core.not_empty.call(null,inst_37895__$1);
var state_37920__$1 = (function (){var statearr_37942 = state_37920;
(statearr_37942[(20)] = inst_37895__$1);

(statearr_37942[(21)] = inst_37896);

return statearr_37942;
})();
if(cljs.core.truth_(inst_37897)){
var statearr_37943_38025 = state_37920__$1;
(statearr_37943_38025[(1)] = (41));

} else {
var statearr_37944_38026 = state_37920__$1;
(statearr_37944_38026[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (33))){
var state_37920__$1 = state_37920;
var statearr_37945_38027 = state_37920__$1;
(statearr_37945_38027[(2)] = false);

(statearr_37945_38027[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (13))){
var inst_37794 = (state_37920[(22)]);
var inst_37798 = cljs.core.chunk_first.call(null,inst_37794);
var inst_37799 = cljs.core.chunk_rest.call(null,inst_37794);
var inst_37800 = cljs.core.count.call(null,inst_37798);
var inst_37781 = inst_37799;
var inst_37782 = inst_37798;
var inst_37783 = inst_37800;
var inst_37784 = (0);
var state_37920__$1 = (function (){var statearr_37946 = state_37920;
(statearr_37946[(7)] = inst_37781);

(statearr_37946[(8)] = inst_37782);

(statearr_37946[(9)] = inst_37784);

(statearr_37946[(10)] = inst_37783);

return statearr_37946;
})();
var statearr_37947_38028 = state_37920__$1;
(statearr_37947_38028[(2)] = null);

(statearr_37947_38028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (22))){
var inst_37842 = (state_37920[(23)]);
var inst_37834 = (state_37920[(19)]);
var inst_37838 = (state_37920[(24)]);
var inst_37837 = (state_37920[(25)]);
var inst_37837__$1 = (state_37920[(2)]);
var inst_37838__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37837__$1);
var inst_37839 = (function (){var all_files = inst_37834;
var res_SINGLEQUOTE_ = inst_37837__$1;
var res = inst_37838__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37842,inst_37834,inst_37838,inst_37837,inst_37837__$1,inst_37838__$1,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37517_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37517_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37842,inst_37834,inst_37838,inst_37837,inst_37837__$1,inst_37838__$1,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37840 = cljs.core.filter.call(null,inst_37839,inst_37837__$1);
var inst_37841 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37841);
var inst_37843 = cljs.core.not_empty.call(null,inst_37842__$1);
var state_37920__$1 = (function (){var statearr_37948 = state_37920;
(statearr_37948[(23)] = inst_37842__$1);

(statearr_37948[(26)] = inst_37840);

(statearr_37948[(24)] = inst_37838__$1);

(statearr_37948[(25)] = inst_37837__$1);

return statearr_37948;
})();
if(cljs.core.truth_(inst_37843)){
var statearr_37949_38029 = state_37920__$1;
(statearr_37949_38029[(1)] = (23));

} else {
var statearr_37950_38030 = state_37920__$1;
(statearr_37950_38030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (36))){
var state_37920__$1 = state_37920;
var statearr_37951_38031 = state_37920__$1;
(statearr_37951_38031[(2)] = false);

(statearr_37951_38031[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (41))){
var inst_37895 = (state_37920[(20)]);
var inst_37899 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37900 = cljs.core.map.call(null,inst_37899,inst_37895);
var inst_37901 = cljs.core.pr_str.call(null,inst_37900);
var inst_37902 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37901)].join('');
var inst_37903 = figwheel.client.utils.log.call(null,inst_37902);
var state_37920__$1 = state_37920;
var statearr_37952_38032 = state_37920__$1;
(statearr_37952_38032[(2)] = inst_37903);

(statearr_37952_38032[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (43))){
var inst_37896 = (state_37920[(21)]);
var inst_37906 = (state_37920[(2)]);
var inst_37907 = cljs.core.not_empty.call(null,inst_37896);
var state_37920__$1 = (function (){var statearr_37953 = state_37920;
(statearr_37953[(27)] = inst_37906);

return statearr_37953;
})();
if(cljs.core.truth_(inst_37907)){
var statearr_37954_38033 = state_37920__$1;
(statearr_37954_38033[(1)] = (44));

} else {
var statearr_37955_38034 = state_37920__$1;
(statearr_37955_38034[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (29))){
var inst_37842 = (state_37920[(23)]);
var inst_37874 = (state_37920[(16)]);
var inst_37834 = (state_37920[(19)]);
var inst_37840 = (state_37920[(26)]);
var inst_37838 = (state_37920[(24)]);
var inst_37837 = (state_37920[(25)]);
var inst_37870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37873 = (function (){var all_files = inst_37834;
var res_SINGLEQUOTE_ = inst_37837;
var res = inst_37838;
var files_not_loaded = inst_37840;
var dependencies_that_loaded = inst_37842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37874,inst_37834,inst_37840,inst_37838,inst_37837,inst_37870,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37872){
var map__37956 = p__37872;
var map__37956__$1 = ((((!((map__37956 == null)))?((((map__37956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37956):map__37956);
var namespace = cljs.core.get.call(null,map__37956__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37874,inst_37834,inst_37840,inst_37838,inst_37837,inst_37870,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37874__$1 = cljs.core.group_by.call(null,inst_37873,inst_37840);
var inst_37876 = (inst_37874__$1 == null);
var inst_37877 = cljs.core.not.call(null,inst_37876);
var state_37920__$1 = (function (){var statearr_37958 = state_37920;
(statearr_37958[(16)] = inst_37874__$1);

(statearr_37958[(28)] = inst_37870);

return statearr_37958;
})();
if(inst_37877){
var statearr_37959_38035 = state_37920__$1;
(statearr_37959_38035[(1)] = (32));

} else {
var statearr_37960_38036 = state_37920__$1;
(statearr_37960_38036[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (44))){
var inst_37896 = (state_37920[(21)]);
var inst_37909 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37896);
var inst_37910 = cljs.core.pr_str.call(null,inst_37909);
var inst_37911 = [cljs.core.str("not required: "),cljs.core.str(inst_37910)].join('');
var inst_37912 = figwheel.client.utils.log.call(null,inst_37911);
var state_37920__$1 = state_37920;
var statearr_37961_38037 = state_37920__$1;
(statearr_37961_38037[(2)] = inst_37912);

(statearr_37961_38037[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (6))){
var inst_37815 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
var statearr_37962_38038 = state_37920__$1;
(statearr_37962_38038[(2)] = inst_37815);

(statearr_37962_38038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (28))){
var inst_37840 = (state_37920[(26)]);
var inst_37867 = (state_37920[(2)]);
var inst_37868 = cljs.core.not_empty.call(null,inst_37840);
var state_37920__$1 = (function (){var statearr_37963 = state_37920;
(statearr_37963[(29)] = inst_37867);

return statearr_37963;
})();
if(cljs.core.truth_(inst_37868)){
var statearr_37964_38039 = state_37920__$1;
(statearr_37964_38039[(1)] = (29));

} else {
var statearr_37965_38040 = state_37920__$1;
(statearr_37965_38040[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (25))){
var inst_37838 = (state_37920[(24)]);
var inst_37854 = (state_37920[(2)]);
var inst_37855 = cljs.core.not_empty.call(null,inst_37838);
var state_37920__$1 = (function (){var statearr_37966 = state_37920;
(statearr_37966[(30)] = inst_37854);

return statearr_37966;
})();
if(cljs.core.truth_(inst_37855)){
var statearr_37967_38041 = state_37920__$1;
(statearr_37967_38041[(1)] = (26));

} else {
var statearr_37968_38042 = state_37920__$1;
(statearr_37968_38042[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (34))){
var inst_37889 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
if(cljs.core.truth_(inst_37889)){
var statearr_37969_38043 = state_37920__$1;
(statearr_37969_38043[(1)] = (38));

} else {
var statearr_37970_38044 = state_37920__$1;
(statearr_37970_38044[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (17))){
var state_37920__$1 = state_37920;
var statearr_37971_38045 = state_37920__$1;
(statearr_37971_38045[(2)] = recompile_dependents);

(statearr_37971_38045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (3))){
var state_37920__$1 = state_37920;
var statearr_37972_38046 = state_37920__$1;
(statearr_37972_38046[(2)] = null);

(statearr_37972_38046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (12))){
var inst_37811 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
var statearr_37973_38047 = state_37920__$1;
(statearr_37973_38047[(2)] = inst_37811);

(statearr_37973_38047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (2))){
var inst_37773 = (state_37920[(13)]);
var inst_37780 = cljs.core.seq.call(null,inst_37773);
var inst_37781 = inst_37780;
var inst_37782 = null;
var inst_37783 = (0);
var inst_37784 = (0);
var state_37920__$1 = (function (){var statearr_37974 = state_37920;
(statearr_37974[(7)] = inst_37781);

(statearr_37974[(8)] = inst_37782);

(statearr_37974[(9)] = inst_37784);

(statearr_37974[(10)] = inst_37783);

return statearr_37974;
})();
var statearr_37975_38048 = state_37920__$1;
(statearr_37975_38048[(2)] = null);

(statearr_37975_38048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (23))){
var inst_37842 = (state_37920[(23)]);
var inst_37834 = (state_37920[(19)]);
var inst_37840 = (state_37920[(26)]);
var inst_37838 = (state_37920[(24)]);
var inst_37837 = (state_37920[(25)]);
var inst_37845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37847 = (function (){var all_files = inst_37834;
var res_SINGLEQUOTE_ = inst_37837;
var res = inst_37838;
var files_not_loaded = inst_37840;
var dependencies_that_loaded = inst_37842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37834,inst_37840,inst_37838,inst_37837,inst_37845,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37846){
var map__37976 = p__37846;
var map__37976__$1 = ((((!((map__37976 == null)))?((((map__37976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37976):map__37976);
var request_url = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37834,inst_37840,inst_37838,inst_37837,inst_37845,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37848 = cljs.core.reverse.call(null,inst_37842);
var inst_37849 = cljs.core.map.call(null,inst_37847,inst_37848);
var inst_37850 = cljs.core.pr_str.call(null,inst_37849);
var inst_37851 = figwheel.client.utils.log.call(null,inst_37850);
var state_37920__$1 = (function (){var statearr_37978 = state_37920;
(statearr_37978[(31)] = inst_37845);

return statearr_37978;
})();
var statearr_37979_38049 = state_37920__$1;
(statearr_37979_38049[(2)] = inst_37851);

(statearr_37979_38049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (35))){
var state_37920__$1 = state_37920;
var statearr_37980_38050 = state_37920__$1;
(statearr_37980_38050[(2)] = true);

(statearr_37980_38050[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (19))){
var inst_37824 = (state_37920[(12)]);
var inst_37830 = figwheel.client.file_reloading.expand_files.call(null,inst_37824);
var state_37920__$1 = state_37920;
var statearr_37981_38051 = state_37920__$1;
(statearr_37981_38051[(2)] = inst_37830);

(statearr_37981_38051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (11))){
var state_37920__$1 = state_37920;
var statearr_37982_38052 = state_37920__$1;
(statearr_37982_38052[(2)] = null);

(statearr_37982_38052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (9))){
var inst_37813 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
var statearr_37983_38053 = state_37920__$1;
(statearr_37983_38053[(2)] = inst_37813);

(statearr_37983_38053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (5))){
var inst_37784 = (state_37920[(9)]);
var inst_37783 = (state_37920[(10)]);
var inst_37786 = (inst_37784 < inst_37783);
var inst_37787 = inst_37786;
var state_37920__$1 = state_37920;
if(cljs.core.truth_(inst_37787)){
var statearr_37984_38054 = state_37920__$1;
(statearr_37984_38054[(1)] = (7));

} else {
var statearr_37985_38055 = state_37920__$1;
(statearr_37985_38055[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (14))){
var inst_37794 = (state_37920[(22)]);
var inst_37803 = cljs.core.first.call(null,inst_37794);
var inst_37804 = figwheel.client.file_reloading.eval_body.call(null,inst_37803,opts);
var inst_37805 = cljs.core.next.call(null,inst_37794);
var inst_37781 = inst_37805;
var inst_37782 = null;
var inst_37783 = (0);
var inst_37784 = (0);
var state_37920__$1 = (function (){var statearr_37986 = state_37920;
(statearr_37986[(7)] = inst_37781);

(statearr_37986[(8)] = inst_37782);

(statearr_37986[(32)] = inst_37804);

(statearr_37986[(9)] = inst_37784);

(statearr_37986[(10)] = inst_37783);

return statearr_37986;
})();
var statearr_37987_38056 = state_37920__$1;
(statearr_37987_38056[(2)] = null);

(statearr_37987_38056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (45))){
var state_37920__$1 = state_37920;
var statearr_37988_38057 = state_37920__$1;
(statearr_37988_38057[(2)] = null);

(statearr_37988_38057[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (26))){
var inst_37842 = (state_37920[(23)]);
var inst_37834 = (state_37920[(19)]);
var inst_37840 = (state_37920[(26)]);
var inst_37838 = (state_37920[(24)]);
var inst_37837 = (state_37920[(25)]);
var inst_37857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37859 = (function (){var all_files = inst_37834;
var res_SINGLEQUOTE_ = inst_37837;
var res = inst_37838;
var files_not_loaded = inst_37840;
var dependencies_that_loaded = inst_37842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37834,inst_37840,inst_37838,inst_37837,inst_37857,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37858){
var map__37989 = p__37858;
var map__37989__$1 = ((((!((map__37989 == null)))?((((map__37989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37989):map__37989);
var namespace = cljs.core.get.call(null,map__37989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37834,inst_37840,inst_37838,inst_37837,inst_37857,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37860 = cljs.core.map.call(null,inst_37859,inst_37838);
var inst_37861 = cljs.core.pr_str.call(null,inst_37860);
var inst_37862 = figwheel.client.utils.log.call(null,inst_37861);
var inst_37863 = (function (){var all_files = inst_37834;
var res_SINGLEQUOTE_ = inst_37837;
var res = inst_37838;
var files_not_loaded = inst_37840;
var dependencies_that_loaded = inst_37842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37834,inst_37840,inst_37838,inst_37837,inst_37857,inst_37859,inst_37860,inst_37861,inst_37862,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37842,inst_37834,inst_37840,inst_37838,inst_37837,inst_37857,inst_37859,inst_37860,inst_37861,inst_37862,state_val_37921,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37864 = setTimeout(inst_37863,(10));
var state_37920__$1 = (function (){var statearr_37991 = state_37920;
(statearr_37991[(33)] = inst_37857);

(statearr_37991[(34)] = inst_37862);

return statearr_37991;
})();
var statearr_37992_38058 = state_37920__$1;
(statearr_37992_38058[(2)] = inst_37864);

(statearr_37992_38058[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (16))){
var state_37920__$1 = state_37920;
var statearr_37993_38059 = state_37920__$1;
(statearr_37993_38059[(2)] = reload_dependents);

(statearr_37993_38059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (38))){
var inst_37874 = (state_37920[(16)]);
var inst_37891 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37874);
var state_37920__$1 = state_37920;
var statearr_37994_38060 = state_37920__$1;
(statearr_37994_38060[(2)] = inst_37891);

(statearr_37994_38060[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (30))){
var state_37920__$1 = state_37920;
var statearr_37995_38061 = state_37920__$1;
(statearr_37995_38061[(2)] = null);

(statearr_37995_38061[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (10))){
var inst_37794 = (state_37920[(22)]);
var inst_37796 = cljs.core.chunked_seq_QMARK_.call(null,inst_37794);
var state_37920__$1 = state_37920;
if(inst_37796){
var statearr_37996_38062 = state_37920__$1;
(statearr_37996_38062[(1)] = (13));

} else {
var statearr_37997_38063 = state_37920__$1;
(statearr_37997_38063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (18))){
var inst_37828 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
if(cljs.core.truth_(inst_37828)){
var statearr_37998_38064 = state_37920__$1;
(statearr_37998_38064[(1)] = (19));

} else {
var statearr_37999_38065 = state_37920__$1;
(statearr_37999_38065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (42))){
var state_37920__$1 = state_37920;
var statearr_38000_38066 = state_37920__$1;
(statearr_38000_38066[(2)] = null);

(statearr_38000_38066[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (37))){
var inst_37886 = (state_37920[(2)]);
var state_37920__$1 = state_37920;
var statearr_38001_38067 = state_37920__$1;
(statearr_38001_38067[(2)] = inst_37886);

(statearr_38001_38067[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37921 === (8))){
var inst_37781 = (state_37920[(7)]);
var inst_37794 = (state_37920[(22)]);
var inst_37794__$1 = cljs.core.seq.call(null,inst_37781);
var state_37920__$1 = (function (){var statearr_38002 = state_37920;
(statearr_38002[(22)] = inst_37794__$1);

return statearr_38002;
})();
if(inst_37794__$1){
var statearr_38003_38068 = state_37920__$1;
(statearr_38003_38068[(1)] = (10));

} else {
var statearr_38004_38069 = state_37920__$1;
(statearr_38004_38069[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30075__auto__,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto____0 = (function (){
var statearr_38008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38008[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto__);

(statearr_38008[(1)] = (1));

return statearr_38008;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto____1 = (function (state_37920){
while(true){
var ret_value__30077__auto__ = (function (){try{while(true){
var result__30078__auto__ = switch__30075__auto__.call(null,state_37920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30078__auto__;
}
break;
}
}catch (e38009){if((e38009 instanceof Object)){
var ex__30079__auto__ = e38009;
var statearr_38010_38070 = state_37920;
(statearr_38010_38070[(5)] = ex__30079__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38071 = state_37920;
state_37920 = G__38071;
continue;
} else {
return ret_value__30077__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto__ = function(state_37920){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto____1.call(this,state_37920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30076__auto__;
})()
;})(switch__30075__auto__,c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30189__auto__ = (function (){var statearr_38011 = f__30188__auto__.call(null);
(statearr_38011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30187__auto__);

return statearr_38011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30189__auto__);
});})(c__30187__auto__,map__37766,map__37766__$1,opts,before_jsload,on_jsload,reload_dependents,map__37767,map__37767__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30187__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38074,link){
var map__38077 = p__38074;
var map__38077__$1 = ((((!((map__38077 == null)))?((((map__38077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38077):map__38077);
var file = cljs.core.get.call(null,map__38077__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38077,map__38077__$1,file){
return (function (p1__38072_SHARP_,p2__38073_SHARP_){
if(cljs.core._EQ_.call(null,p1__38072_SHARP_,p2__38073_SHARP_)){
return p1__38072_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38077,map__38077__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38083){
var map__38084 = p__38083;
var map__38084__$1 = ((((!((map__38084 == null)))?((((map__38084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38084):map__38084);
var match_length = cljs.core.get.call(null,map__38084__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38084__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38079_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38079_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38086_SHARP_,p2__38087_SHARP_){
return cljs.core.assoc.call(null,p1__38086_SHARP_,cljs.core.get.call(null,p2__38087_SHARP_,key),p2__38087_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38088 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38088);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38088);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38089,p__38090){
var map__38095 = p__38089;
var map__38095__$1 = ((((!((map__38095 == null)))?((((map__38095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38095):map__38095);
var on_cssload = cljs.core.get.call(null,map__38095__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38096 = p__38090;
var map__38096__$1 = ((((!((map__38096 == null)))?((((map__38096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38096):map__38096);
var files_msg = map__38096__$1;
var files = cljs.core.get.call(null,map__38096__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1506566559090