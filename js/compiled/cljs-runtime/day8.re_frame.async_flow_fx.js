goog.provide('day8.re_frame.async_flow_fx');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
day8.re_frame.async_flow_fx.dissoc_in = (function day8$re_frame$async_flow_fx$dissoc_in(m,p__52687){
var vec__52689 = p__52687;
var seq__52690 = cljs.core.seq(vec__52689);
var first__52691 = cljs.core.first(seq__52690);
var seq__52690__$1 = cljs.core.next(seq__52690);
var k = first__52691;
var ks = seq__52690__$1;
var keys = vec__52689;
if(ks){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = (day8.re_frame.async_flow_fx.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.async_flow_fx.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame.async_flow_fx.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame.async_flow_fx.seen_all_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_all_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.forward_events_fx.as_callback_pred,required_events);
return cljs.core.every_QMARK_((function (pred){
return cljs.core.some(pred,seen_events);
}),callback_preds);
});
day8.re_frame.async_flow_fx.seen_any_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_any_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.forward_events_fx.as_callback_pred,required_events);
return (!((cljs.core.some((function (pred){
return cljs.core.some(pred,seen_events);
}),callback_preds) == null)));
});
/**
 * Given the accumulated set of seen events and the set of rules already started,
 *   return the list of rules which should now be started
 */
day8.re_frame.async_flow_fx.startable_rules = (function day8$re_frame$async_flow_fx$startable_rules(rules,now_seen_events,rules_fired){
return cljs.core.filterv((function (task){
var G__52698 = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(task);
var G__52699 = now_seen_events;
var fexpr__52697 = new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$1(task);
return (fexpr__52697.cljs$core$IFn$_invoke$arity$2 ? fexpr__52697.cljs$core$IFn$_invoke$arity$2(G__52698,G__52699) : fexpr__52697.call(null,G__52698,G__52699));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(rules_fired,new cljs.core.Keyword(null,"id","id",-1388402092)),rules));
});
day8.re_frame.async_flow_fx.map_when__GT_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-both?","seen-both?",-1396729677),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-all-of?","seen-all-of?",-651402557),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),day8.re_frame.async_flow_fx.seen_any_of_QMARK_], null);
day8.re_frame.async_flow_fx.when__GT_fn = (function day8$re_frame$async_flow_fx$when__GT_fn(when_kw){
var temp__5733__auto__ = (day8.re_frame.async_flow_fx.map_when__GT_fn.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame.async_flow_fx.map_when__GT_fn.cljs$core$IFn$_invoke$arity$1(when_kw) : day8.re_frame.async_flow_fx.map_when__GT_fn.call(null,when_kw));
if(cljs.core.truth_(temp__5733__auto__)){
var when_fn = temp__5733__auto__;
return when_fn;
} else {
return re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["async-flow: got bad value for :when - ",when_kw], 0));
}
});
/**
 * Massage the supplied rules as follows:
 *  - replace `:when` keyword value with a function implementing the predicate
 *  - ensure that only `:dispatch` or `:dispatch-n` is provided
 *  - add a unique :id, if one not already present
 */
day8.re_frame.async_flow_fx.massage_rules = (function day8$re_frame$async_flow_fx$massage_rules(rules){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__52705){
var map__52706 = p__52705;
var map__52706__$1 = (((((!((map__52706 == null))))?(((((map__52706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52706):map__52706);
var rule = map__52706__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
var halt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247));
if(((1) < cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch,dispatch_n,dispatch_fn], null))))){
return re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["async-flow: rule can only specify one of :dispatch, :dispatch-n and :dispatch-fn. Got more than one: ",rule], 0));
} else {
var G__52711 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return index;
}
})(),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),(function (){var or__4126__auto__ = halt_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"when","when",-576417306),day8.re_frame.async_flow_fx.when__GT_fn(when),new cljs.core.Keyword(null,"events","events",1792552201),((cljs.core.coll_QMARK_(events))?cljs.core.set(events):cljs.core.PersistentHashSet.createAsIfByAssoc([events]))], null);
var G__52711__$1 = (cljs.core.truth_(dispatch_fn)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52711,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),dispatch_fn):G__52711);
if(cljs.core.not(dispatch_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52711__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(cljs.core.truth_(dispatch_n)?dispatch_n:(cljs.core.truth_(dispatch)?(new cljs.core.List(null,dispatch,null,(1),null)):cljs.core.List.EMPTY
)));
} else {
return G__52711__$1;
}
}
}),rules);
});
day8.re_frame.async_flow_fx.rules__GT_dispatches = (function day8$re_frame$async_flow_fx$rules__GT_dispatches(rules,event){

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (rule){
var map__52715 = rule;
var map__52715__$1 = (((((!((map__52715 == null))))?(((((map__52715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52715):map__52715);
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
var dispatch_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
if(cljs.core.truth_(dispatch_n)){
return dispatch_n;
} else {
if(cljs.core.truth_(dispatch_fn)){
var dispatch_n__$1 = (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(event) : dispatch_fn.call(null,event));
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,dispatch_n__$1)){
return dispatch_n__$1;
} else {
return re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["async-flow: dispatch-fn must return a seq of events ",rule], 0));
}
} else {
return cljs.core.List.EMPTY;

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
});
/**
 * Given a flow definition, returns an event handler which implements this definition
 */
day8.re_frame.async_flow_fx.make_flow_event_handler = (function day8$re_frame$async_flow_fx$make_flow_event_handler(p__52720){
var map__52721 = p__52720;
var map__52721__$1 = (((((!((map__52721 == null))))?(((((map__52721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52721):map__52721);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var db_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var first_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923));
var _ = (((((db_path == null)) || (cljs.core.vector_QMARK_(db_path))))?null:(function(){throw (new Error(["Assert failed: ","async-flow: db-path must be a vector","\n","(or (nil? db-path) (vector? db-path))"].join('')))})());
var local_store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var set_state = (cljs.core.truth_(db_path)?(function (db,seen,started){
return cljs.core.assoc_in(db,db_path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));
}):(function (db,seen,started){
cljs.core.reset_BANG_(local_store,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));

return db;
}));
var get_state = (cljs.core.truth_(db_path)?(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
}):(function (___$1){
return cljs.core.deref(local_store);
}));
var rules__$1 = day8.re_frame.async_flow_fx.massage_rules(rules);
return (function day8$re_frame$async_flow_fx$make_flow_event_handler_$_async_flow_event_handler(p__52726,p__52727){
var map__52728 = p__52726;
var map__52728__$1 = (((((!((map__52728 == null))))?(((((map__52728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52728):map__52728);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52728__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52729 = p__52727;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52729,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52729,(1),null);
var event_v = vec__52729;
var pred__52733 = cljs.core._EQ_;
var expr__52734 = event_type;
if(cljs.core.truth_((pred__52733.cljs$core$IFn$_invoke$arity$2 ? pred__52733.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"setup","setup",1987730512),expr__52734) : pred__52733.call(null,new cljs.core.Keyword(null,"setup","setup",1987730512),expr__52734)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),set_state(db,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"events","events",1792552201),rules__$1)),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], null),(cljs.core.truth_(first_dispatch)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),first_dispatch], null):null)], 0));
} else {
var vec__52736 = event_v;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52736,(0),null);
var forwarded_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52736,(1),null);
var map__52739 = get_state(db);
var map__52739__$1 = (((((!((map__52739 == null))))?(((((map__52739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52739):map__52739);
var seen_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392));
var rules_fired = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140));
var new_seen_events = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_events,forwarded_event);
var ready_rules = day8.re_frame.async_flow_fx.startable_rules(rules__$1,new_seen_events,rules_fired);
var halt_QMARK_ = cljs.core.some(new cljs.core.Keyword(null,"halt?","halt?",-1110658247),ready_rules);
var ready_rules_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),ready_rules));
var new_rules_fired = clojure.set.union.cljs$core$IFn$_invoke$arity$2(rules_fired,ready_rules_ids);
var new_dispatches = day8.re_frame.async_flow_fx.rules__GT_dispatches(ready_rules,forwarded_event);
var new_db = set_state(db,new_seen_events,new_rules_fired);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),((cljs.core.seq(new_dispatches))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new_dispatches], null):null),(cljs.core.truth_(halt_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame.async_flow_fx.dissoc_in(new_db,db_path),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),id], null),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),id], null):null)], 0));
}
});
});
/**
 * Ensure `flow` has an id. Return a vector of [id flow].
 */
day8.re_frame.async_flow_fx.ensure_has_id = (function day8$re_frame$async_flow_fx$ensure_has_id(flow){
var temp__5733__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,flow], null);
} else {
var new_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["async-flow/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("id-"))].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)], null);
}
});
/**
 * Action the given flow effect
 */
day8.re_frame.async_flow_fx.flow__GT_handler = (function day8$re_frame$async_flow_fx$flow__GT_handler(flow){
var vec__52741 = day8.re_frame.async_flow_fx.ensure_has_id(flow);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52741,(0),null);
var flow_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52741,(1),null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(id,day8.re_frame.async_flow_fx.make_flow_event_handler(flow_SINGLEQUOTE_));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"setup","setup",1987730512)], null));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),day8.re_frame.async_flow_fx.flow__GT_handler);

//# sourceMappingURL=day8.re_frame.async_flow_fx.js.map
