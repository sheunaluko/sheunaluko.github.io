(ns mim.svg-anim
  (:require 
   [goog.string :as gstring]
   [goog.string.format]))
;;ASSUMES The presence of VELOCTY js lib

(extend-type js/TouchList
  ISeqable
  (-seq [array] (array-seq array 0)))


(defn log [& args]
  (let [msg (apply str (interpose " " args))]
    (js.console.log msg)))

(defn set-ui [msg]
  (let [ui (.getElementById js.document "console_ui")]
    (aset ui "innerText" msg)))


(defn velocity [el & args]
  (apply js.Velocity el (mapv clj->js args)))

(aset js.window "vel" velocity)

;; want to create a rotating arc
;; we have to have mathematical understanding of circle
(defn to-rad [deg]
  (* (/ js.Math.PI 180)
     deg))

(def svgns "http://www.w3.org/2000/svg")

(defn circular-arc [cx cy r th_1 th_2]
  (let [path (.createElementNS js.document svgns "path")
        rad1 (to-rad th_1)
        rad2 (to-rad th_2)
        [p1_x p1_y] [(+ cx (* r (js.Math.cos rad1))) (+ cy (* r (js.Math.sin rad1)))]
        [p2_x p2_y] [(+ cx (* r (js.Math.cos rad2))) (+ cy (* r (js.Math.sin rad2)))]
        ;;first we move to the first point, then draw an arc to the second
        ;;point
        d (gstring/format "M%d %d A %d %d 0 0 1 %d %d"
                          p1_x p1_y r r p2_x p2_y)]
    (.setAttributeNS path nil "transform-origin" (str cx " " cy))
    (.setAttributeNS path nil "d" d)
    (.setAttributeNS path nil "stroke" "black")
    (.setAttributeNS path nil "stroke-width" "8px")
    ;;(.setAttributeNS path nil "stroke-linecap" "round")
    (.setAttributeNS path nil "fill" "none")    
    path))


(def elem-lib (atom {}))
(def get-elem (fn [id]
                (id @elem-lib )))

(defn set-elem [id v]
  (swap! elem-lib assoc id v))

(defn get-key-generator [] 
  (let [counter (atom 0)]
    (fn []
      (swap! counter inc)
      (keyword (str "fresh_id_" @counter)))))

(def fresh-key (get-key-generator))
    
(defn rotating-arc [speed dir & args]
  (let [arc (apply circular-arc args)
        _ (js.console.log arc)
        _ (aset js.window "arc" arc)
        
        k (fresh-key)
        interval (js.setInterval (fn []
                                   (if (.-isConnected arc)
                                     (do
                                        (js.vel arc {:rotateY (str dir "=" .2 "deg")} {:duration 0})
                                     
                                       (js.vel arc {:rotateZ (str dir "=" speed "deg")} {:duration 0})
                                       )
                                     ;;has been removed
                                     (do
                                       (log "Finishing animation"))))
                                 10)]
    ;;return the arc with its key as metadata
    {:interval interval :elem arc}))



;; I need a way to keep track of entire sets of svg elems
(defn rotating-arcs-ui [cx cy]
  (let [r1 100
        r2 50
        r3 10
        arcs-data [
                   [[1 "+" cx cy r1 0 40]
                    [2 "+" cx cy r1 90 120]
                    [3 "+" cx cy r1 180 200]
                    [4 "+" cx cy r1 270 280]]
                   [[1 "-" cx cy r2 0 40]
                    [2 "-" cx cy r2 90 120]
                    [3 "-" cx cy r2 180 200]
                    [4 "-" cx cy r2 270 280]]
                   [[1 "+" cx cy r3 0 40]
                    [2 "+" cx cy r3 90 120]
                    [3 "+" cx cy r3 180 200]
                    [4 "+" cx cy r3 270 280]]
                   ]]

    (into []
          (flatten (for [data arcs-data]
                     (for [d data]
                       (let [arc-anim (apply rotating-arc d)]
                         arc-anim)))))))

(defn add-elems-to-svg [svg k elems]
  (set-elem k elems)
  (doseq [e elems]
    (.appendChild svg (:elem e))))

(defn -remove-element [element]
  (let [{:keys [interval elem]} element]
    (js.clearInterval interval)
    (.remove elem)))

(defn remove-elem-from-svg [k]
  (let [element (get-elem k)]
    ;;will either be a vector of elements or an element alone 
    (doseq [el (into [] element)]
      (-remove-element el))))


(aset js.window "rem" remove-elem-from-svg)


