// Compiled by ClojureScript 1.9.229 {}
goog.provide('mim.core');
goog.require('cljs.core');
goog.require('mim.ws');
goog.require('reagent.core');
goog.require('mim.views');
goog.require('mim.config');
goog.require('mim.events');
goog.require('mim.subs');
goog.require('mim.touch_stuff');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
mim.core.dev_setup = (function mim$core$dev_setup(){
if(cljs.core.truth_(mim.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
mim.core.mount_root = (function mim$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mim.views.main_panel], null),document.getElementById("app"));
});
mim.core.delayed_init = (function mim$core$delayed_init(){
return mim.touch_stuff.init_canvas.call(null);
});
mim.core.init = (function mim$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

mim.core.dev_setup.call(null);

mim.core.mount_root.call(null);

return setTimeout(mim.core.delayed_init,(300));
});
goog.exportSymbol('mim.core.init', mim.core.init);

//# sourceMappingURL=core.js.map?rel=1507392510856