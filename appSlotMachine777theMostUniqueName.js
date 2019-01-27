var _this=this;(()=>{function setSize(){const D={wrapper:{w:0,h:0},canvasWrapper:{w:0,t:0,l:0},pin:{t:0,l:0,w:0,h:0},spin:{t:0,l:0,w:0,h:0}};switch(D.wrapper.w=e.wrap.clientWidth,!!config.tableHeight){case!0:D.wrapper.h=config.tableHeight;break;default:D.wrapper.h=D.wrapper.w<=document.documentElement.clientHeight||D.wrapper.w<=window.innerHeight?window.innerHeight:window.innerHeight;}e.wrap.style.height=`${D.wrapper.h}px`,e.h.style.top=`${D.wrapper.h/20}px`,e.h.style.width=`${D.wrapper.w}px`,e.h.style.height=`${D.wrapper.h/10}px`,D.wrapper.w>D.wrapper.h||80<100*D.wrapper.w/D.wrapper.h?(D.canvasWrapper.t=0.25*D.wrapper.h,D.canvasWrapper.w=0.7*D.wrapper.h,D.canvasWrapper.l=D.wrapper.w/2-0.7*D.wrapper.h/2):(D.canvasWrapper.w=0.9*D.wrapper.w,D.canvasWrapper.t=0.1*D.wrapper.h+(D.wrapper.h/2-D.canvasWrapper.w/2),D.canvasWrapper.l=D.wrapper.w/2-D.canvasWrapper.w/2),e.canvaswrapper.style.width=`${D.canvasWrapper.w}px`,e.canvaswrapper.style.top=`${D.canvasWrapper.t}px`,e.canvaswrapper.style.left=`${D.canvasWrapper.l}px`,D.pin.w=D.canvasWrapper.w/5,D.pin.h=D.pin.w,D.pin.t=D.canvasWrapper.t-D.canvasWrapper.w/10,D.pin.l=D.canvasWrapper.l+D.canvasWrapper.w/2-D.pin.w/2,e.pin.style.width=`${D.pin.w}px`,e.pin.style.height=`${D.pin.h}px`,e.pin.style.top=`${D.pin.t}px`,e.pin.style.left=`${D.pin.l}px`,D.spin.w=D.canvasWrapper.w/3,D.spin.h=D.spin.w,D.spin.l=D.canvasWrapper.l+D.canvasWrapper.w/2-D.spin.w/2,D.spin.t=D.canvasWrapper.t+D.canvasWrapper.w/2-D.spin.h/2,e.spin.style.width=`${D.spin.w}px`,e.spin.style.height=`${D.spin.h}px`,e.spin.style.top=`${D.spin.t}px`,e.spin.style.left=`${D.spin.l}px`}(()=>{try{TweenMax&&console.log('TweenMax installed')}catch(E){console.log('TweenMax inserted');const F=document.createElement('script');F.src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js',document.head.append(F)}var D='undefined'!=typeof module&&module.exports&&'undefined'!=typeof global?global:_this||window;(D._gsQueue||(D._gsQueue=[])).push(function(){'use strict';D._gsDefine('easing.CustomEase',['easing.Ease'],function(E){var F=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,G=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,H=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,I=/[cLlsS]/g,J='CustomEase only accepts Cubic Bezier data.',K=function(R,S,T,U,V,W,X,Y,Z,$,_){var aa,ba=(R+T)/2,ca=(S+U)/2,da=(T+V)/2,ea=(U+W)/2,fa=(V+X)/2,ga=(W+Y)/2,ha=(ba+da)/2,ia=(ca+ea)/2,ja=(da+fa)/2,ka=(ea+ga)/2,la=(ha+ja)/2,ma=(ia+ka)/2,na=X-R,oa=Y-S,pa=Math.abs((T-X)*oa-(U-Y)*na),qa=Math.abs((V-X)*oa-(W-Y)*na);return $||($=[{x:R,y:S},{x:X,y:Y}],_=1),$.splice(_||$.length-1,0,{x:la,y:ma}),(pa+qa)*(pa+qa)>Z*(na*na+oa*oa)&&(aa=$.length,K(R,S,ba,ca,ha,ia,la,ma,Z,$,_),K(la,ma,ja,ka,fa,ga,X,Y,Z,$,_+1+($.length-aa))),$},L=function(R){var S,T,U,V,W,X,Y,Z,$,_,aa,ba=(R+'').replace(H,function(ha){var ia=+ha;return 1e-4>ia&&-1e-4<ia?0:ia}).match(G)||[],ca=[],da=0,ea=0,fa=ba.length,ga=2;for(S=0;fa>S;S++)if($=V,isNaN(ba[S])?(V=ba[S].toUpperCase(),W=V!==ba[S]):S--,T=+ba[S+1],U=+ba[S+2],W&&(T+=da,U+=ea),S||(Y=T,Z=U),'M'===V)X&&8>X.length&&(ca.length-=1,ga=0),da=Y=T,ea=Z=U,X=[T,U],ga=2,ca.push(X),S+=2,V='L';else if('C'===V)X||(X=[0,0]),X[ga++]=T,X[ga++]=U,W||(da=ea=0),X[ga++]=da+1*ba[S+3],X[ga++]=ea+1*ba[S+4],X[ga++]=da+=1*ba[S+5],X[ga++]=ea+=1*ba[S+6],S+=6;else if('S'===V)'C'===$||'S'===$?(_=da-X[ga-4],aa=ea-X[ga-3],X[ga++]=da+_,X[ga++]=ea+aa):(X[ga++]=da,X[ga++]=ea),X[ga++]=T,X[ga++]=U,W||(da=ea=0),X[ga++]=da+=1*ba[S+3],X[ga++]=ea+=1*ba[S+4],S+=4;else{if('L'!==V&&'Z'!==V)throw J;'Z'==V&&(T=Y,U=Z,X.closed=!0),('L'==V||.5<Math.abs(da-T)||.5<Math.abs(ea-U))&&(X[ga++]=da+(T-da)/3,X[ga++]=ea+(U-ea)/3,X[ga++]=da+2*(T-da)/3,X[ga++]=ea+2*(U-ea)/3,X[ga++]=T,X[ga++]=U,'L'==V&&(S+=2)),da=T,ea=U}return ca[0]},M=function(R){var S,T=R.length,U=999999999999;for(S=1;T>S;S+=6)+R[S]<U&&(U=+R[S]);return U},N=function(R,S,T){T||0===T||(T=Math.max(+R[R.length-1],+R[1]));var U,V=-1*+R[0],W=-T,X=R.length,Y=1/(+R[X-2]+V),Z=-S||(Math.abs(+R[X-1]-+R[1])<.01*(+R[X-2]-+R[0])?M(R)+W:+R[X-1]+W);for(Z=Z?1/Z:-Y,U=0;X>U;U+=2)R[U]=(+R[U]+V)*Y,R[U+1]=(+R[U+1]+W)*Z},O=function(R){var S=this.lookup[0|R*this.l]||this.lookup[this.l-1];return S.nx<R&&(S=S.n),S.y+(R-S.x)/S.cx*S.cy},P=function(R,S,T){this._calcEnd=!0,this.id=R,R&&(E.map[R]=this),this.getRatio=O,this.setData(S,T)},Q=P.prototype=new E;return Q.constructor=P,Q.setData=function(R,S){R=R||'0,0,1,1';var T,U,V,W,X,Y,Z,$,_,aa,ba=R.match(F),ca=1,da=[];if(S=S||{},aa=S.precision||1,this.data=R,this.lookup=[],this.points=da,this.fast=1>=aa,(I.test(R)||-1!==R.indexOf('M')&&-1===R.indexOf('C'))&&(ba=L(R)),T=ba.length,4===T)ba.unshift(0,0),ba.push(1,1),T=8;else if((T-2)%6)throw J;for((0!=+ba[0]||1!=+ba[T-2])&&N(ba,S.height,S.originY),this.rawBezier=ba,W=2;T>W;W+=6)U={x:+ba[W-2],y:+ba[W-1]},V={x:+ba[W+4],y:+ba[W+5]},da.push(U,V),K(U.x,U.y,+ba[W],+ba[W+1],+ba[W+2],+ba[W+3],V.x,V.y,1/(2e5*aa),da,da.length-1);for(T=da.length,W=0;T>W;W++)Z=da[W],$=da[W-1]||Z,Z.x>$.x||$.y!==Z.y&&$.x===Z.x||Z===$?($.cx=Z.x-$.x,$.cy=Z.y-$.y,$.n=Z,$.nx=Z.x,this.fast&&1<W&&2<Math.abs($.cy/$.cx-da[W-2].cy/da[W-2].cx)&&(this.fast=!1),$.cx<ca&&($.cx?ca=$.cx:($.cx=.001,W===T-1&&($.x-=.001,ca=Math.min(ca,.001),this.fast=!1)))):(da.splice(W--,1),T--);if(T=0|1/ca+1,this.l=T,X=1/T,Y=0,Z=da[0],this.fast){for(W=0;T>W;W++)_=W*X,Z.nx<_&&(Z=da[++Y]),U=Z.y+(_-Z.x)/Z.cx*Z.cy,this.lookup[W]={x:_,cx:X,y:U,cy:0,nx:9},W&&(this.lookup[W-1].cy=U-this.lookup[W-1].y);this.lookup[T-1].cy=da[da.length-1].y-U}else{for(W=0;T>W;W++)Z.nx<W*X&&(Z=da[++Y]),this.lookup[W]=Z;Y<da.length-1&&(this.lookup[W-1]=da[da.length-2])}return this._calcEnd=1!==da[da.length-1].y||0!==da[0].y,this},Q.getRatio=O,Q.getSVGData=function(R){return P.getSVGData(this,R)},P.create=function(R,S,T){return new P(R,S,T)},P.version='0.2.2',P.bezierToPoints=K,P.get=function(R){return E.map[R]},P.getSVGData=function(R,S){S=S||{};var T,U,V,W,X,Y,Z,$,_,aa,ba=1e3,ca=S.width||100,da=S.height||100,ea=S.x||0,fa=(S.y||0)+da,ga=S.path;if(S.invert&&(da=-da,fa=0),R=R.getRatio?R:E.map[R]||console.log('No ease found: ',R),R.rawBezier){for(T=[],Z=R.rawBezier.length,V=0;Z>V;V+=2)T.push((0|(ea+R.rawBezier[V]*ca)*ba)/ba+','+(0|(fa+R.rawBezier[V+1]*-da)*ba)/ba);T[0]='M'+T[0],T[1]='C'+T[1]}else for(T=['M'+ea+','+fa],Z=Math.max(5,200*(S.precision||1)),W=1/Z,Z+=2,$=5/Z,_=(0|(ea+W*ca)*ba)/ba,aa=(0|(fa+R.getRatio(W)*-da)*ba)/ba,U=(aa-fa)/(_-ea),V=2;Z>V;V++)X=(0|(ea+V*W*ca)*ba)/ba,Y=(0|(fa+R.getRatio(V*W)*-da)*ba)/ba,(Math.abs((Y-aa)/(X-_)-U)>$||V===Z-1)&&(T.push(_+','+aa),U=(Y-aa)/(X-_)),_=X,aa=Y;return ga&&('string'==typeof ga?document.querySelector(ga):ga).setAttribute('d',T.join(' ')),T.join(' ')},P},!0)}),D._gsDefine&&D._gsQueue.pop()(),function(E){'use strict';var F=function(){return(D.GreenSockGlobals||D)[E]};'undefined'!=typeof module&&module.exports?(require('../TweenLite.min.js'),module.exports=F()):'function'==typeof define&&define.amd&&define(['TweenLite'],F)}('CustomEase')})();const config=configSlotMachine777theMostUniqueName(),e={wrap:document.createElement('div'),canvaswrapper:document.createElement('div'),canvas:document.createElement('canvas'),h:document.createElement('div'),pin:document.createElement('div'),spin:document.createElement('div'),style:document.createElement('style')};e.wrap.classList.add('appSlotMachine777theMostUniqueName'),e.canvas.id='canvasSlotMachine777theMostUniqueName',e.canvas.width=777,e.canvas.height=777,e.canvas.setAttribute('data-responsiveMinWidth','100'),e.canvas.setAttribute('data-responsiveScaleHeight','true'),e.canvas.setAttribute('data-responsiveMargin','0'),e.canvas.innerText='Canvas not supported, please use another browser.',e.canvas.style.visibility='hidden',e.pin.style.visibility='hidden',e.spin.style.visibility='hidden',e.spin.onclick=()=>{e.spin.style.cssText+=`cursor: default;
			background: url(${config.pictures.spinAfterClick});
			background-size: contain;
		`,e.spin.onclick='',playSound(new Audio(config.sounds.whileWheelSpin)),theWheel.animation={type:'spinToStop',duration:config.animationSettings.duration,spins:config.animationSettings.spins,callbackFinished:alertPrize,callbackSound:playSound.bind(_this,new Audio(config.sounds.segmentTriggers)),easing:CustomEase.create('custom','M0,0,C0,0,0.076,0.608,0.302,0.706,0.436,0.77,0.936,0.938,0.95,1,0.972,0.96,0.965,1.014,0.98,0.996,0.988,0.986,1,1,1,1')},calculatePrize(),theWheel.startAnimation()},e.style.type='text/css',e.style.innerHTML=`
		/* WRAPPER */
		.appSlotMachine777theMostUniqueName {
			position: relative;
			background: #777;
			background: url(${config.pictures.wrapper});
			background-position-x: center;
		}

		/* TITLE */
		.appSlotMachine777theMostUniqueName div:first-child {
			position: absolute;
			background: green;
			background: url(${config.pictures.title});
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}

		/* PIN */
		.appSlotMachine777theMostUniqueName div:nth-child(3) {
			position: absolute;
			background: white;
			background: url(${config.pictures.pin});
			background-size: contain;
			transform-origin: 50% 0;
			transition: 100ms;
			z-index: 2;
		}
		.appSlotMachine777theMostUniqueName div:nth-child(3)[data-state="jab"] {
			transform: rotate(-20deg);
		}

		/* CANVASWRAPPER */
		.appSlotMachine777theMostUniqueName div:nth-child(2) {
			position: absolute;
			overflow: hidden;
		}

		/* CANVAS */
		.appSlotMachine777theMostUniqueName #canvasSlotMachine777theMostUniqueName {
			z-index: 1;
			border-radius: 50%;
			background: #ec8;
		}

		/* SPIN */
		.appSlotMachine777theMostUniqueName div:nth-child(4) {
			position: absolute;
			border-radius: 50%;
			z-index: 2;
			background: #777;
			background: url(${config.pictures.spin});
			background-size: contain;
		}
		.appSlotMachine777theMostUniqueName div:nth-child(4):hover {
			cursor: pointer;
		}

	`,document.head.appendChild(e.style),document.querySelector('[src$="configSlotMachine777theMostUniqueName.js"]').after(e.wrap),e.wrap.prepend(e.h),e.wrap.appendChild(e.canvaswrapper),e.canvaswrapper.appendChild(e.canvas),e.wrap.appendChild(e.pin),e.wrap.appendChild(e.spin),window.addEventListener('resize',()=>setSize()),setSize();const playSound=(D,E,F,G)=>{G?pinJab():(D.pause(),D.currentTime=E||0,D.play(),pinJab(),F&&setTimeout(()=>D.pause(),F))},pinJab=()=>{e.pin.dataset.state='jab',setTimeout(()=>{e.pin.dataset.state=''},50)},insertSalute=()=>{const D=document.createElement('iframe');D.style.cssText=`
			position: absolute;
			z-index: 1;
		`,D.style.width=`${e.wrap.clientWidth}px`,D.style.height=`${e.wrap.clientHeight}px`,D.src=config.salute,e.wrap.append(D)},alertPrize=()=>{insertSalute();const D=theWheel.getIndicatedSegment();if(console.log(D.text),'new page'===config.postType)setTimeout(()=>{location.href=`${config.contactForm}?winningSegment=${D.text}`},8e3);else if('current page'===config.postType){const E=document.createElement('iframe');E.style.cssText=`
				height: 80%;
				position: absolute;
				top: 10%;
				left: 10%;
				width: 80%;
				z-index: 3;
				background: #fff8;
			`,E.src=`${config.contactForm}?winningSegment=${D.text}&size=${0.8*e.canvaswrapper.clientWidth}`}playSound(new Audio(config.sounds.afterWheelSpin))},theWheel=(configJSON=>{function Winwheel(D,E){for(var F in defaultOptions={canvasId:'canvas',centerX:null,centerY:null,outerRadius:null,innerRadius:0,numSegments:1,drawMode:'code',rotationAngle:0,textFontFamily:'Arial',textFontSize:20,textFontWeight:'bold',textOrientation:'horizontal',textAlignment:'center',textDirection:'normal',textMargin:null,textFillStyle:'black',textStrokeStyle:null,textLineWidth:1,fillStyle:'silver',strokeStyle:'black',lineWidth:1,clearTheCanvas:!0,imageOverlay:!1,drawText:!0,pointerAngle:0,wheelImage:null,imageDirection:'N',responsive:!1,scaleFactor:1},defaultOptions)this[F]=null!=D&&'undefined'!=typeof D[F]?D[F]:defaultOptions[F];if(null!=D)for(var G in D)'undefined'==typeof this[G]&&(this[G]=D[G]);for(this.canvasId?(this.canvas=document.getElementById(this.canvasId))?(null==this.centerX&&(this.centerX=this.canvas.width/2),null==this.centerY&&(this.centerY=this.canvas.height/2),null==this.outerRadius&&(this.outerRadius=this.canvas.width<this.canvas.height?this.canvas.width/2-this.lineWidth:this.canvas.height/2-this.lineWidth),this.ctx=this.canvas.getContext('2d')):this.ctx=this.canvas=null:this.ctx=this.canvas=null,this.segments=[null],F=1;F<=this.numSegments;F++)this.segments[F]=null!=D&&D.segments&&'undefined'!=typeof D.segments[F-1]?new Segment(D.segments[F-1]):new Segment;if(this.updateSegmentSizes(),null===this.textMargin&&(this.textMargin=this.textFontSize/1.7),this.animation=null!=D&&D.animation&&'undefined'!=typeof D.animation?new Animation(D.animation):new Animation,null!=D&&D.pins&&'undefined'!=typeof D.pins&&(this.pins=new Pin(D.pins)),'image'==this.drawMode||'segmentImage'==this.drawMode?('undefined'==typeof D.fillStyle&&(this.fillStyle=null),'undefined'==typeof D.strokeStyle&&(this.strokeStyle='red'),'undefined'==typeof D.drawText&&(this.drawText=!1),'undefined'==typeof D.lineWidth&&(this.lineWidth=1),'undefined'==typeof E&&(E=!1)):'undefined'==typeof E&&(E=!0),this.pointerGuide=null!=D&&D.pointerGuide&&'undefined'!=typeof D.pointerGuide?new PointerGuide(D.pointerGuide):new PointerGuide,this.responsive&&(winwheelToDrawDuringAnimation=this,this._originalCanvasWidth=this.canvas.width,this._originalCanvasHeight=this.canvas.height,this._responsiveScaleHeight=this.canvas.dataset.responsivescaleheight,this._responsiveMinWidth=this.canvas.dataset.responsiveminwidth,this._responsiveMinHeight=this.canvas.dataset.responsiveminheight,this._responsiveMargin=this.canvas.dataset.responsivemargin,window.addEventListener('load',winwheelResize),window.addEventListener('resize',winwheelResize)),1==E)this.draw(this.clearTheCanvas);else if('segmentImage'==this.drawMode)for(winwheelToDrawDuringAnimation=this,winhweelAlreadyDrawn=!1,F=1;F<=this.numSegments;F++)null!==this.segments[F].image&&(this.segments[F].imgData=new Image,this.segments[F].imgData.onload=winwheelLoadedImage,this.segments[F].imgData.src=this.segments[F].image)}function Pin(D){var F,E={visible:!0,number:36,outerRadius:3,fillStyle:'grey',strokeStyle:'black',lineWidth:1,margin:3,responsive:!1};for(F in E)this[F]=null!=D&&'undefined'!=typeof D[F]?D[F]:E[F];if(null!=D)for(var G in D)'undefined'==typeof this[G]&&(this[G]=D[G])}function Animation(D){var F,E={type:'spinOngoing',direction:'clockwise',propertyName:null,propertyValue:null,duration:10,yoyo:!1,repeat:null,easing:null,stopAngle:null,spins:null,clearTheCanvas:null,callbackFinished:null,callbackBefore:null,callbackAfter:null,callbackSound:null,soundTrigger:'segment'};for(F in E)this[F]=null!=D&&'undefined'!=typeof D[F]?D[F]:E[F];if(null!=D)for(var G in D)'undefined'==typeof this[G]&&(this[G]=D[G])}function Segment(D){var F,E={size:null,text:'',fillStyle:null,strokeStyle:null,lineWidth:null,textFontFamily:null,textFontSize:null,textFontWeight:null,textOrientation:null,textAlignment:null,textDirection:null,textMargin:null,textFillStyle:null,textStrokeStyle:null,textLineWidth:null,image:null,imageDirection:null,imgData:null};for(F in E)this[F]=null!=D&&'undefined'!=typeof D[F]?D[F]:E[F];if(null!=D)for(var G in D)'undefined'==typeof this[G]&&(this[G]=D[G]);this.endAngle=this.startAngle=0}function PointerGuide(D){var F,E={display:!1,strokeStyle:'red',lineWidth:3};for(F in E)this[F]=null!=D&&'undefined'!=typeof D[F]?D[F]:E[F]}function winwheelAnimationLoop(){if(winwheelToDrawDuringAnimation){0!=winwheelToDrawDuringAnimation.animation.clearTheCanvas&&winwheelToDrawDuringAnimation.ctx.clearRect(0,0,winwheelToDrawDuringAnimation.canvas.width,winwheelToDrawDuringAnimation.canvas.height);var a=winwheelToDrawDuringAnimation.animation.callbackBefore,c=winwheelToDrawDuringAnimation.animation.callbackAfter;null!=a&&('function'==typeof a?a():eval(a)),winwheelToDrawDuringAnimation.draw(!1),null!=c&&('function'==typeof c?c():eval(c)),winwheelToDrawDuringAnimation.animation.callbackSound&&winwheelTriggerSound()}}function winwheelTriggerSound(){0==winwheelToDrawDuringAnimation.hasOwnProperty('_lastSoundTriggerNumber')&&(winwheelToDrawDuringAnimation._lastSoundTriggerNumber=0);var a=winwheelToDrawDuringAnimation.animation.callbackSound,c='pin'==winwheelToDrawDuringAnimation.animation.soundTrigger?winwheelToDrawDuringAnimation.getCurrentPinNumber():winwheelToDrawDuringAnimation.getIndicatedSegmentNumber();c!=winwheelToDrawDuringAnimation._lastSoundTriggerNumber&&('function'==typeof a?a():eval(a),winwheelToDrawDuringAnimation._lastSoundTriggerNumber=c)}function winwheelStopAnimation(a){0!=a&&(a=winwheelToDrawDuringAnimation.animation.callbackFinished,null!=a&&('function'==typeof a?a(winwheelToDrawDuringAnimation.getIndicatedSegment()):eval(a)))}function winwheelLoadedImage(){if(0==winhweelAlreadyDrawn){for(var D=0,E=1;E<=winwheelToDrawDuringAnimation.numSegments;E++)null!=winwheelToDrawDuringAnimation.segments[E].imgData&&winwheelToDrawDuringAnimation.segments[E].imgData.height&&D++;D==winwheelToDrawDuringAnimation.numSegments&&(winhweelAlreadyDrawn=!0,winwheelToDrawDuringAnimation.draw())}}function winwheelResize(){var D=40;'undefined'!=typeof winwheelToDrawDuringAnimation._responsiveMargin&&(D=winwheelToDrawDuringAnimation._responsiveMargin);let E=document.querySelector('#canvasSlotMachine777theMostUniqueName').parentElement;var F=E.clientWidth-D,G=winwheelToDrawDuringAnimation._responsiveMinWidth;D=winwheelToDrawDuringAnimation._responsiveMinHeight,F<G?F=G:F>winwheelToDrawDuringAnimation._originalCanvasWidth&&(F=winwheelToDrawDuringAnimation._originalCanvasWidth),F/=winwheelToDrawDuringAnimation._originalCanvasWidth,winwheelToDrawDuringAnimation.canvas.width=winwheelToDrawDuringAnimation._originalCanvasWidth*F,winwheelToDrawDuringAnimation._responsiveScaleHeight&&(G=winwheelToDrawDuringAnimation._originalCanvasHeight*F,G<D?G=D:G>winwheelToDrawDuringAnimation._originalCanvasHeight&&(G=winwheelToDrawDuringAnimation._originalCanvasHeight),winwheelToDrawDuringAnimation.canvas.height=G),winwheelToDrawDuringAnimation.scaleFactor=F,winwheelToDrawDuringAnimation.draw();const H=E.nextElementSibling,I=H.nextElementSibling;E.firstElementChild.style.visibility='',H.style.visibility='',setTimeout(()=>{I.style.visibility=''},777),theWheel.animation={type:'spinOngoing',duration:2*config.animationSettings.duration,callbackSound:playSound.bind(this,new Audio(config.sounds.segmentTriggers),0,0,1)},theWheel.startAnimation()}Winwheel.prototype.updateSegmentSizes=function(){if(this.segments){for(var D=0,E=0,F=1;F<=this.numSegments;F++)null!==this.segments[F].size&&(D+=this.segments[F].size,E++);for(F=360-D,D=0,0<F&&(D=F/(this.numSegments-E)),E=0,F=1;F<=this.numSegments;F++)this.segments[F].startAngle=E,E=this.segments[F].size?E+this.segments[F].size:E+D,this.segments[F].endAngle=E}},Winwheel.prototype.clearCanvas=function(){this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},Winwheel.prototype.draw=function(D){this.ctx&&('undefined'==typeof D?this.clearCanvas():1==D&&this.clearCanvas(),'image'==this.drawMode?(this.drawWheelImage(),1==this.drawText&&this.drawSegmentText(),1==this.imageOverlay&&this.drawSegments()):'segmentImage'==this.drawMode?(this.drawSegmentImages(),1==this.drawText&&this.drawSegmentText(),1==this.imageOverlay&&this.drawSegments()):(this.drawSegments(),1==this.drawText&&this.drawSegmentText()),'undefined'!=typeof this.pins&&1==this.pins.visible&&this.drawPins(),1==this.pointerGuide.display&&this.drawPointerGuide())},Winwheel.prototype.drawPins=function(){if(this.pins&&this.pins.number){var D=this.centerX*this.scaleFactor,E=this.centerY*this.scaleFactor,F=this.outerRadius*this.scaleFactor,G=this.pins.outerRadius,H=this.pins.margin;this.pins.responsive&&(G=this.pins.outerRadius*this.scaleFactor,H=this.pins.margin*this.scaleFactor);for(var I=360/this.pins.number,J=1;J<=this.pins.number;J++)this.ctx.save(),this.ctx.strokeStyle=this.pins.strokeStyle,this.ctx.lineWidth=this.pins.lineWidth,this.ctx.fillStyle=this.pins.fillStyle,this.ctx.translate(D,E),this.ctx.rotate(this.degToRad(J*I+this.rotationAngle)),this.ctx.translate(-D,-E),this.ctx.beginPath(),this.ctx.arc(D,E-F+G+H,G,0,2*Math.PI),this.pins.fillStyle&&this.ctx.fill(),this.pins.strokeStyle&&this.ctx.stroke(),this.ctx.restore()}},Winwheel.prototype.drawPointerGuide=function(){if(this.ctx){var D=this.centerX*this.scaleFactor,E=this.centerY*this.scaleFactor,F=this.outerRadius*this.scaleFactor;this.ctx.save(),this.ctx.translate(D,E),this.ctx.rotate(this.degToRad(this.pointerAngle)),this.ctx.translate(-D,-E),this.ctx.strokeStyle=this.pointerGuide.strokeStyle,this.ctx.lineWidth=this.pointerGuide.lineWidth,this.ctx.beginPath(),this.ctx.moveTo(D,E),this.ctx.lineTo(D,-(F/4)),this.ctx.stroke(),this.ctx.restore()}},Winwheel.prototype.drawWheelImage=function(){if(null!=this.wheelImage){var D=this.centerX*this.scaleFactor,E=this.centerY*this.scaleFactor,F=this.wheelImage.width*this.scaleFactor,G=this.wheelImage.height*this.scaleFactor;this.ctx.save(),this.ctx.translate(D,E),this.ctx.rotate(this.degToRad(this.rotationAngle)),this.ctx.translate(-D,-E),this.ctx.drawImage(this.wheelImage,D-F/2,E-G/2,F,G),this.ctx.restore()}},Winwheel.prototype.drawSegmentImages=function(){if(this.ctx){var D=this.centerX*this.scaleFactor,E=this.centerY*this.scaleFactor;if(this.segments)for(var G,F=1;F<=this.numSegments;F++)if(G=this.segments[F],G.imgData.height){var H=G.imgData.width*this.scaleFactor,I=G.imgData.height*this.scaleFactor,J=null===G.imageDirection?this.imageDirection:G.imageDirection;if('S'==J){J=D-H/2;var K=E,L=G.startAngle+180+(G.endAngle-G.startAngle)/2}else'E'==J?(J=D,K=E-I/2,L=G.startAngle+270+(G.endAngle-G.startAngle)/2):'W'==J?(J=D-H,K=E-I/2,L=G.startAngle+90+(G.endAngle-G.startAngle)/2):(J=D-H/2,K=E-I,L=G.startAngle+(G.endAngle-G.startAngle)/2);this.ctx.save(),this.ctx.translate(D,E),this.ctx.rotate(this.degToRad(this.rotationAngle+L)),this.ctx.translate(-D,-E),this.ctx.drawImage(G.imgData,J,K,H,I),this.ctx.restore()}else console.log('Segment '+F+' imgData is not loaded')}},Winwheel.prototype.drawSegments=function(){if(this.ctx&&this.segments)for(var D=this.centerX*this.scaleFactor,E=this.centerY*this.scaleFactor,F=this.innerRadius*this.scaleFactor,G=this.outerRadius*this.scaleFactor,H=1;H<=this.numSegments;H++){var I=this.segments[H],J=null===I.fillStyle?this.fillStyle:I.fillStyle;this.ctx.fillStyle=J;var K=null===I.lineWidth?this.lineWidth:I.lineWidth;this.ctx.lineWidth=K;var L=null===I.strokeStyle?this.strokeStyle:I.strokeStyle;if((this.ctx.strokeStyle=L)||J){if(this.ctx.beginPath(),this.innerRadius){var M=Math.cos(this.degToRad(I.startAngle+this.rotationAngle-90))*(F-K/2);K=Math.sin(this.degToRad(I.startAngle+this.rotationAngle-90))*(F-K/2),this.ctx.moveTo(D+M,E+K)}else this.ctx.moveTo(D,E);this.ctx.arc(D,E,G,this.degToRad(I.startAngle+this.rotationAngle-90),this.degToRad(I.endAngle+this.rotationAngle-90),!1),this.innerRadius?this.ctx.arc(D,E,F,this.degToRad(I.endAngle+this.rotationAngle-90),this.degToRad(I.startAngle+this.rotationAngle-90),!0):this.ctx.lineTo(D,E),J&&this.ctx.fill(),L&&this.ctx.stroke()}}},Winwheel.prototype.drawSegmentText=function(){if(this.ctx)for(var D,E,F,G,H,I,J,K,L,M,N=this.centerX*this.scaleFactor,O=this.centerY*this.scaleFactor,P=this.outerRadius*this.scaleFactor,Q=this.innerRadius*this.scaleFactor,R=1;R<=this.numSegments;R++){this.ctx.save();var S=this.segments[R];if(S.text){D=null===S.textFontFamily?this.textFontFamily:S.textFontFamily,E=null===S.textFontSize?this.textFontSize:S.textFontSize,F=null===S.textFontWeight?this.textFontWeight:S.textFontWeight,G=null===S.textOrientation?this.textOrientation:S.textOrientation,H=null===S.textAlignment?this.textAlignment:S.textAlignment,I=null===S.textDirection?this.textDirection:S.textDirection,J=null===S.textMargin?this.textMargin:S.textMargin,K=null===S.textFillStyle?this.textFillStyle:S.textFillStyle,L=null===S.textStrokeStyle?this.textStrokeStyle:S.textStrokeStyle,M=null===S.textLineWidth?this.textLineWidth:S.textLineWidth,E*=this.scaleFactor,J*=this.scaleFactor;var T='';for(null!=F&&(T+=F+' '),null!=E&&(T+=E+'px '),null!=D&&(T+=D),this.ctx.font=T,this.ctx.fillStyle=K,this.ctx.strokeStyle=L,this.ctx.lineWidth=M,D=S.text.split('\n'),F=-(D.length/2*E)+E/2,'curved'!=G||'inner'!=H&&'outer'!=H||(F=0),M=0;M<D.length;M++){if('reversed'==I){if('horizontal'==G)this.ctx.textAlign='inner'==H?'right':'outer'==H?'left':'center',this.ctx.textBaseline='middle',T=this.degToRad(S.endAngle-(S.endAngle-S.startAngle)/2+this.rotationAngle-90-180),this.ctx.save(),this.ctx.translate(N,O),this.ctx.rotate(T),this.ctx.translate(-N,-O),'inner'==H?(K&&this.ctx.fillText(D[M],N-Q-J,O+F),L&&this.ctx.strokeText(D[M],N-Q-J,O+F)):'outer'==H?(K&&this.ctx.fillText(D[M],N-P+J,O+F),L&&this.ctx.strokeText(D[M],N-P+J,O+F)):(K&&this.ctx.fillText(D[M],N-Q-(P-Q)/2-J,O+F),L&&this.ctx.strokeText(D[M],N-Q-(P-Q)/2-J,O+F)),this.ctx.restore();else if('vertical'==G){this.ctx.textAlign='center',this.ctx.textBaseline='inner'==H?'top':'outer'==H?'bottom':'middle',T=S.endAngle-(S.endAngle-S.startAngle)/2-180,T+=this.rotationAngle,this.ctx.save(),this.ctx.translate(N,O),this.ctx.rotate(this.degToRad(T)),this.ctx.translate(-N,-O);var U=0;if('outer'==H?U=O+P-J:'inner'==H&&(U=O+Q+J),T=E-E/9,'outer'==H)for(var W,V=D[M].length-1;0<=V;V--)W=D[M].charAt(V),K&&this.ctx.fillText(W,N+F,U),L&&this.ctx.strokeText(W,N+F,U),U-=T;else if('inner'==H)for(V=0;V<D[M].length;V++)W=D[M].charAt(V),K&&this.ctx.fillText(W,N+F,U),L&&this.ctx.strokeText(W,N+F,U),U+=T;else if('center'==H)for(U=0,1<D[M].length&&(U=T*(D[M].length-1)/2),U=O+Q+(P-Q)/2+U+J,V=D[M].length-1;0<=V;V--)W=D[M].charAt(V),K&&this.ctx.fillText(W,N+F,U),L&&this.ctx.strokeText(W,N+F,U),U-=T;this.ctx.restore()}else if('curved'==G)for(T=0,'inner'==H?(T=Q+J,this.ctx.textBaseline='top'):'outer'==H?(T=P-J,this.ctx.textBaseline='bottom',T-=E*(D.length-1)):'center'==H&&(T=Q+J+(P-Q)/2,this.ctx.textBaseline='middle'),U=0,1<D[M].length?(this.ctx.textAlign='left',U=4*(E/10),U*=100/T,V=S.startAngle+((S.endAngle-S.startAngle)/2-U*D[M].length/2)):(V=S.startAngle+(S.endAngle-S.startAngle)/2,this.ctx.textAlign='center'),V+=this.rotationAngle,V-=180,W=D[M].length;0<=W;W--){this.ctx.save();var X=D[M].charAt(W);this.ctx.translate(N,O),this.ctx.rotate(this.degToRad(V)),this.ctx.translate(-N,-O),L&&this.ctx.strokeText(X,N,O+T+F),K&&this.ctx.fillText(X,N,O+T+F),V+=U,this.ctx.restore()}}else if('horizontal'==G)this.ctx.textAlign='inner'==H?'left':'outer'==H?'right':'center',this.ctx.textBaseline='middle',T=this.degToRad(S.endAngle-(S.endAngle-S.startAngle)/2+this.rotationAngle-90),this.ctx.save(),this.ctx.translate(N,O),this.ctx.rotate(T),this.ctx.translate(-N,-O),'inner'==H?(K&&this.ctx.fillText(D[M],N+Q+J,O+F),L&&this.ctx.strokeText(D[M],N+Q+J,O+F)):'outer'==H?(K&&this.ctx.fillText(D[M],N+P-J,O+F),L&&this.ctx.strokeText(D[M],N+P-J,O+F)):(K&&this.ctx.fillText(D[M],N+Q+(P-Q)/2+J,O+F),L&&this.ctx.strokeText(D[M],N+Q+(P-Q)/2+J,O+F)),this.ctx.restore();else if('vertical'==G){if(this.ctx.textAlign='center',this.ctx.textBaseline='inner'==H?'bottom':'outer'==H?'top':'middle',T=S.endAngle-(S.endAngle-S.startAngle)/2,T+=this.rotationAngle,this.ctx.save(),this.ctx.translate(N,O),this.ctx.rotate(this.degToRad(T)),this.ctx.translate(-N,-O),U=0,'outer'==H?U=O-P+J:'inner'==H&&(U=O-Q-J),T=E-E/9,'outer'==H)for(V=0;V<D[M].length;V++)W=D[M].charAt(V),K&&this.ctx.fillText(W,N+F,U),L&&this.ctx.strokeText(W,N+F,U),U+=T;else if('inner'==H)for(V=D[M].length-1;0<=V;V--)W=D[M].charAt(V),K&&this.ctx.fillText(W,N+F,U),L&&this.ctx.strokeText(W,N+F,U),U-=T;else if('center'==H)for(U=0,1<D[M].length&&(U=T*(D[M].length-1)/2),U=O-Q-(P-Q)/2-U-J,V=0;V<D[M].length;V++)W=D[M].charAt(V),K&&this.ctx.fillText(W,N+F,U),L&&this.ctx.strokeText(W,N+F,U),U+=T;this.ctx.restore()}else if('curved'==G)for(T=0,'inner'==H?(T=Q+J,this.ctx.textBaseline='bottom',T+=E*(D.length-1)):'outer'==H?(T=P-J,this.ctx.textBaseline='top'):'center'==H&&(T=Q+J+(P-Q)/2,this.ctx.textBaseline='middle'),U=0,1<D[M].length?(this.ctx.textAlign='left',U=4*(E/10),U*=100/T,V=S.startAngle+((S.endAngle-S.startAngle)/2-U*D[M].length/2)):(V=S.startAngle+(S.endAngle-S.startAngle)/2,this.ctx.textAlign='center'),V+=this.rotationAngle,W=0;W<D[M].length;W++)this.ctx.save(),X=D[M].charAt(W),this.ctx.translate(N,O),this.ctx.rotate(this.degToRad(V)),this.ctx.translate(-N,-O),L&&this.ctx.strokeText(X,N,O-T+F),K&&this.ctx.fillText(X,N,O-T+F),V+=U,this.ctx.restore();F+=E}}this.ctx.restore()}},Winwheel.prototype.degToRad=function(D){return .017453292519943295*D},Winwheel.prototype.setCenter=function(D,E){this.centerX=D,this.centerY=E},Winwheel.prototype.addSegment=function(D,E){var F=new Segment(D);if(this.numSegments++,'undefined'!=typeof E){for(var G=this.numSegments;G>E;G--)this.segments[G]=this.segments[G-1];this.segments[E]=F,F=E}else this.segments[this.numSegments]=F,F=this.numSegments;return this.updateSegmentSizes(),this.segments[F]},Winwheel.prototype.setCanvasId=function(D){D?(this.canvasId=D,this.canvas=document.getElementById(this.canvasId))&&(this.ctx=this.canvas.getContext('2d')):this.canvas=this.ctx=this.canvasId=null},Winwheel.prototype.deleteSegment=function(D){if(1<this.numSegments){if('undefined'!=typeof D)for(;D<this.numSegments;D++)this.segments[D]=this.segments[D+1];this.segments[this.numSegments]=void 0,this.numSegments--,this.updateSegmentSizes()}},Winwheel.prototype.windowToCanvas=function(D,E){var F=this.canvas.getBoundingClientRect();return{x:Math.floor(D-this.canvas.width/F.width*F.left),y:Math.floor(E-this.canvas.height/F.height*F.top)}},Winwheel.prototype.getSegmentAt=function(D,E){var F=null,G=this.getSegmentNumberAt(D,E);return null!==G&&(F=this.segments[G]),F},Winwheel.prototype.getSegmentNumberAt=function(D,E){var F=this.windowToCanvas(D,E),G=this.centerX*this.scaleFactor,H=this.centerY*this.scaleFactor,I=this.outerRadius*this.scaleFactor,J=this.innerRadius*this.scaleFactor;if(F.x>G){var K=F.x-G;G='R'}else K=G-F.x,G='L';if(F.y>H){var L=F.y-H;H='B'}else L=H-F.y,H='T';var M=180*Math.atan(L/K)/Math.PI;for(F=0,K=Math.sqrt(L*L+K*K),'T'==H&&'R'==G?F=Math.round(90-M):'B'==H&&'R'==G?F=Math.round(M+90):'B'==H&&'L'==G?F=Math.round(90-M+180):'T'==H&&'L'==G&&(F=Math.round(M+270)),0!=this.rotationAngle&&(G=this.getRotationPosition(),F-=G,0>F&&(F=360-Math.abs(F))),G=null,H=1;H<=this.numSegments;H++)if(F>=this.segments[H].startAngle&&F<=this.segments[H].endAngle&&K>=J&&K<=I){G=H;break}return G},Winwheel.prototype.getIndicatedSegment=function(){var D=this.getIndicatedSegmentNumber();return this.segments[D]},Winwheel.prototype.getIndicatedSegmentNumber=function(){var D=0,E=this.getRotationPosition();E=Math.floor(this.pointerAngle-E),0>E&&(E=360-Math.abs(E));for(var F=1;F<this.segments.length;F++)if(E>=this.segments[F].startAngle&&E<=this.segments[F].endAngle){D=F;break}return D},Winwheel.prototype.getCurrentPinNumber=function(){var D=0;if(this.pins){var E=this.getRotationPosition();E=Math.floor(this.pointerAngle-E),0>E&&(E=360-Math.abs(E));for(var F=360/this.pins.number,G=0,H=0;H<this.pins.number;H++){if(E>=G&&E<=G+F){D=H;break}G+=F}'clockwise'==this.animation.direction&&(D++,D>this.pins.number&&(D=0))}return D},Winwheel.prototype.getRotationPosition=function(){var D=this.rotationAngle;return 0<=D?360<D&&(D-=360*Math.floor(D/360)):(-360>D&&(D-=360*Math.ceil(D/360)),D=360+D),D},Winwheel.prototype.startAnimation=function(){if(this.animation){this.computeAnimation(),winwheelToDrawDuringAnimation=this;var D=[null];D[this.animation.propertyName]=this.animation.propertyValue,D.yoyo=this.animation.yoyo,D.repeat=this.animation.repeat,D.ease=this.animation.easing,D.onUpdate=winwheelAnimationLoop,D.onComplete=winwheelStopAnimation,this.tween=TweenMax.to(this,this.animation.duration,D)}},Winwheel.prototype.stopAnimation=function(D){winwheelToDrawDuringAnimation&&(winwheelToDrawDuringAnimation.tween&&winwheelToDrawDuringAnimation.tween.kill(),winwheelStopAnimation(D)),winwheelToDrawDuringAnimation=this},Winwheel.prototype.pauseAnimation=function(){this.tween&&this.tween.pause()},Winwheel.prototype.resumeAnimation=function(){this.tween&&this.tween.play()},Winwheel.prototype.computeAnimation=function(){this.animation&&('spinOngoing'==this.animation.type?(this.animation.propertyName='rotationAngle',null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=-1),null==this.animation.easing&&(this.animation.easing='Linear.easeNone'),null==this.animation.yoyo&&(this.animation.yoyo=!1),this.animation.propertyValue=360*this.animation.spins,'anti-clockwise'==this.animation.direction&&(this.animation.propertyValue=0-this.animation.propertyValue)):'spinToStop'==this.animation.type?(this.animation.propertyName='rotationAngle',null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=0),null==this.animation.easing&&(this.animation.easing='Power3.easeOut'),this.animation._stopAngle=null==this.animation.stopAngle?Math.floor(359*Math.random()):360-this.animation.stopAngle+this.pointerAngle,null==this.animation.yoyo&&(this.animation.yoyo=!1),this.animation.propertyValue=360*this.animation.spins,'anti-clockwise'==this.animation.direction?(this.animation.propertyValue=0-this.animation.propertyValue,this.animation.propertyValue-=360-this.animation._stopAngle):this.animation.propertyValue+=this.animation._stopAngle):'spinAndBack'==this.animation.type&&(this.animation.propertyName='rotationAngle',null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=1),null==this.animation.easing&&(this.animation.easing='Power2.easeInOut'),null==this.animation.yoyo&&(this.animation.yoyo=!0),this.animation._stopAngle=null==this.animation.stopAngle?0:360-this.animation.stopAngle,this.animation.propertyValue=360*this.animation.spins,'anti-clockwise'==this.animation.direction?(this.animation.propertyValue=0-this.animation.propertyValue,this.animation.propertyValue-=360-this.animation._stopAngle):this.animation.propertyValue+=this.animation._stopAngle))},Winwheel.prototype.getRandomForSegment=function(D){var E=0;if(!D)console.log('Segment number not specified');else if('undefined'!=typeof this.segments[D]){var F=this.segments[D].startAngle;D=this.segments[D].endAngle-F-2,0<D?E=F+1+Math.floor(Math.random()*D):console.log('Segment size is too small to safely get random angle inside it')}else console.log('Segment '+D+' undefined');return E},Segment.prototype.changeImage=function(D,E){this.image=D,this.imgData=null,E&&(this.imageDirection=E),winhweelAlreadyDrawn=!1,this.imgData=new Image,this.imgData.onload=winwheelLoadedImage,this.imgData.src=this.image};var winwheelToDrawDuringAnimation=null,winhweelAlreadyDrawn=!1;return new Winwheel(configJSON)})({canvasId:'canvasSlotMachine777theMostUniqueName',responsive:!0,numSegments:config.segments.length,segments:config.segments,drawMode:'image'}),loadedImg=new Image;loadedImg.onload=()=>{theWheel.wheelImage=loadedImg,theWheel.draw()},loadedImg.src=config.pictures.table;const calculatePrize=()=>{const D=(()=>{const F=[],G=360/config.segments.length;return config.segments.forEach((H,I)=>{H.win&&F.push(I)}),F[function(H,I){return H=Math.ceil(H),I=Math.floor(I),Math.floor(Math.random()*(I-H))+H}(0,F.length)]*G+G/2})();theWheel.animation.stopAngle=D}})();