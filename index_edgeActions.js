/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         function resize(){
         if($(window).height()>$(window).width()){
         sym.getSymbolElement(Stage).height($(window).height()*(960/$(window).width()));
         }else{
         sym.getSymbolElement(Stage).height($(window).height());
         }
         }
         resize();
         $(window).on("resize",resize);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.$("left").on("click",function(){
         alert(1)
         });
         sym.$("right").on("click",function(){
         alert(2)
         });

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2385397");