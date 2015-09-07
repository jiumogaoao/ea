
(function(compId){var _=null,y=true,n=false,x18='break-word',x24='nowrap',x2='5.0.0',x10='100%',x26='27%',zx='scaleX',po='center',x21='0%',x='text',x30='hidden',x27='2.5%',m='rect',x9='0px',x4='horizontal',i='none',x5='rgba(192,192,192,1)',x3='6.0.0.400',p='px',rt='right',lf='left',x22='32%',x16='Arial, Helvetica, sans-serif',x28='rgba(255,255,255,1.00)',x14='rgba(100,182,254,1.00)',x23='960px',x12='auto',x13='head',e8='${Symbol_1}',x1='6.0.0',l='normal',x7='rgba(255,255,255,1)',x19='50px',x11='150px',x17='400',x15='rgba(0,95,180,1.00)',x6='rgba(192,192,192,1.00)',xc='rgba(0,0,0,1)',w='width',h='height';var s20="<p style=\"margin: 0px;\">​标题</p>",s25="<p style=\"margin: 0px;\">​按钮</p>",s29="<p style=\"margin: 0px;\">​&lt;</p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:x4,rI:n,cn:{dom:[{id:'main',t:m,r:['0px','0px','100%','100%','auto','auto'],overflow:'hidden',f:[x5,[270,[['rgba(158,158,158,1.00)',0],['rgba(255,255,255,1.00)',100]]]],s:[0,"rgb(0, 0, 0)",i],c:[{id:'roll',t:m,r:['0px','0px','960px','1920px','auto','auto'],overflow:'visible',f:[x6],s:[0,"rgb(0, 0, 0)",i]}]},{id:'Symbol_1',symbolName:'Symbol_1',t:m,r:['0px','0','960px','150px','auto','auto'],autoOrient:true,overflow:'hidden'},{id:'foot',t:m,r:['0px','auto','100%','150px','auto','0px'],f:[x5,[270,[['rgba(1,124,232,1.00)',0],['rgba(100,182,254,1.00)',100]]]],s:[0,"rgb(0, 0, 0)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','960px','1920px','auto','auto'],overflow:'hidden',f:[x7]}}},tt:{d:0,a:y,data:[["eid12",h,0,0,"linear",e8,'150px','150px'],["eid8",w,0,0,"linear",e8,'960px','960px'],["eid3",zx,0,0,"linear",e8,'1','1']]}},"Symbol_1":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:y,cn:{dom:[{t:m,r:[x9,x9,x10,x11,x12,x12],id:x13,s:[0,xc,i],autoOrient:_,f:[x5,[270,[[x14,0],[x15,100]]]]},{n:[x16,[55,p],x7,x17,i,l,x18,''],t:x,align:po,id:po,ts:['','',x19,'',i],text:s20,r:[x21,x22,x23,x9,x12,x12]},{n:[x16,[55,p],x7,x17,i,l,x18,x24],t:x,align:rt,id:rt,ts:['','','','',i],text:s25,r:[x12,x26,x12,x12,x27,x12]},{n:[x16,[55,p],x28,l,i,'',x18,x24],id:lf,text:s29,t:x,r:[x27,x26,x12,x12,x12,x12]}],style:{'${symbolSelector}':{overflow:x30,r:[_,_,x10,x11]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-2385397");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){function resize(){if($(window).height()>$(window).width()){sym.getSymbolElement(Stage).height($(window).height()*(960/$(window).width()));}else{sym.getSymbolElement(Stage).height($(window).height());}}
resize();$(window).on("resize",resize);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("left").on("click",function(){alert(1)});sym.$("right").on("click",function(){alert(2)});});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'
})})(AdobeEdge.$,AdobeEdge,"EDGE-2385397");