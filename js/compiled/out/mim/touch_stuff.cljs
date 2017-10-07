(ns mim.touch-stuff
  (:require [mim.svg-anim :as anim]))


(extend-type js/TouchList
  ISeqable
  (-seq [array] (array-seq array 0)))

(defn log [& args]
  (let [msg (apply str (interpose " " args))]
    (js.console.log msg)))

(defn set-ui [msg]
  (let [ui (.getElementById js.document "console_ui")]
    (aset ui "innerText" msg)))


(def my-svg (atom nil))
(def my-svg-container (atom nil))
(def my-svg-elems (atom []))

;; var svgns = "http://www.w3.org/2000/svg";
;; var svg = document.getElementById('svg');
;; var shape = document.createElementNS(svgns, "circle");
;; shape.setAttributeNS(null, "cx", 25);
;; shape.setAttributeNS(null, "cy", 25);
;; shape.setAttributeNS(null, "r",  20);
;; shape.setAttributeNS(null, "fill", "green");
;; svg.appendChild(shape);\

(def svgns "http://www.w3.org/2000/svg")

(defn make-circle-path [x y r]
  (str "M" (+ x r) " " y " A " r " " r ))

(defn make-canvas-circle [svg [x y]]
  (let [circle (.createElementNS js.document svgns "path")]
;;    (.setAttribute circle "cx" x)
;;    (.setAttribute circle "cy" y)
;;    (.setAttribute circle "r" 10)
;;    (.setAttribute circle "fill" "none")
    ;;    (.appendChild svg circle)
    ;;(set-ui "hee!")
    (.setAttributeNS circle nil "d" "M150 0 L75 200 L225 200 Z")
    (.appendChild svg circle)
    (swap! my-svg-elems conj circle)
    (js.console.log @my-svg-elems)

    (when (> (count @my-svg-elems) 4)
      (.remove (first @my-svg-elems))
      (swap! my-svg-elems #(into [] (drop 1 %))))
    circle))
  

(defn get-canvas-offsets []
  (let [offsets [ (.-offsetLeft @my-svg-container) (.-offsetTop @my-svg-container) ] ]
    (log "OFFSETS")
    (js.console.log offsets)
    offsets))

(defn get-touch-loc [touch]
  (let [raw [ (aget touch "pageX") (aget touch "pageY") ]
        offsets (get-canvas-offsets)]
    (mapv - raw offsets)))

(defn touch-handler [evt]
  (log "RECEIVED TOUCH!")
  (let [touches (aget evt "touches")
        first-touch (first touches)
        [x y] (get-touch-loc first-touch)]
    (js.console.log touches)
    (log "TOUCH loc:: " x " " y)
    ;;(doseq [touch touches]
    (anim/add-elems-to-svg @my-svg :rotation (anim/rotating-arcs-ui x y))))


(defn touch-end-handler [evt]
  (log "RECEIVED TOUCH END!")
  (anim/remove-elem-from-svg :rotation))

    

(defn init-canvas []
  (let [svg-container (js.document.getElementById "svgContainer")
        svg (js.document.getElementById "svg")]
    (.setAttribute svg "width" (.-clientWidth svg-container))
    (.setAttribute svg "height" (.-clientHeight svg-container))
    (reset! my-svg svg)
    (reset! my-svg-container svg-container)
    (log "Initting svg...")
    (log "Got object::> ")
    (js.console.log  svg)
    ;; --- >
    ;; ctx.fillStyle = "blue";
    ;; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ;;(aset ctx "fillStyle" "white")
    ;;(.fillRect ctx 0 0 (.-width canvas) (.-height canvas))

    ;; --- >
    ;; el.addEventListener("touchstart", handleStart, false);
    (aset js.window "svg" svg)
    ;;(anim/add-elems-to-svg svg :rotation (anim/rotating-arcs-ui 300 300))
    (.addEventListener svg "touchstart" touch-handler false)
    (.addEventListener svg "touchend"   touch-end-handler false)))
    

    
    


