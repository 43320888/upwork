(() => {
	/* eslint-disable */

	/* TWEENMAX.MIN.JS */
	(() => {
		try {
			if (TweenMax) console.log('TweenMax installed');
		} catch (error) {
			console.log('TweenMax inserted');
			const cloudflareCDNtweenMax = document.createElement('script');
			cloudflareCDNtweenMax.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js';
			document.head.append(cloudflareCDNtweenMax);
		}
		/* !
		* VERSION: 0.2.2
		* DATE: 2018-02-15
		* UPDATES AND DOCS AT: http://greensock.com
		*
		* @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
		* This work is subject to the terms at http://greensock.com/standard-license or for
		* Club GreenSock members, the software agreement that was issued with your membership.
		*
		* @author: Jack Doyle, jack@greensock.com
		**/
		var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(a){var b=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,e=/[cLlsS]/g,f="CustomEase only accepts Cubic Bezier data.",g=function(a,b,c,d,e,f,h,i,j,k,l){var m,n=(a+c)/2,o=(b+d)/2,p=(c+e)/2,q=(d+f)/2,r=(e+h)/2,s=(f+i)/2,t=(n+p)/2,u=(o+q)/2,v=(p+r)/2,w=(q+s)/2,x=(t+v)/2,y=(u+w)/2,z=h-a,A=i-b,B=Math.abs((c-h)*A-(d-i)*z),C=Math.abs((e-h)*A-(f-i)*z);return k||(k=[{x:a,y:b},{x:h,y:i}],l=1),k.splice(l||k.length-1,0,{x:x,y:y}),(B+C)*(B+C)>j*(z*z+A*A)&&(m=k.length,g(a,b,n,o,t,u,x,y,j,k,l),g(x,y,v,w,r,s,h,i,j,k,l+1+(k.length-m))),k},h=function(a){var b,e,g,h,i,j,k,l,m,n,o,p=(a+"").replace(d,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],q=[],r=0,s=0,t=p.length,u=2;for(b=0;t>b;b++)if(m=h,isNaN(p[b])?(h=p[b].toUpperCase(),i=h!==p[b]):b--,e=+p[b+1],g=+p[b+2],i&&(e+=r,g+=s),b||(k=e,l=g),"M"===h)j&&j.length<8&&(q.length-=1,u=0),r=k=e,s=l=g,j=[e,g],u=2,q.push(j),b+=2,h="L";else if("C"===h)j||(j=[0,0]),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+1*p[b+3],j[u++]=s+1*p[b+4],j[u++]=r+=1*p[b+5],j[u++]=s+=1*p[b+6],b+=6;else if("S"===h)"C"===m||"S"===m?(n=r-j[u-4],o=s-j[u-3],j[u++]=r+n,j[u++]=s+o):(j[u++]=r,j[u++]=s),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+=1*p[b+3],j[u++]=s+=1*p[b+4],b+=4;else{if("L"!==h&&"Z"!==h)throw f;"Z"===h&&(e=k,g=l,j.closed=!0),("L"===h||Math.abs(r-e)>.5||Math.abs(s-g)>.5)&&(j[u++]=r+(e-r)/3,j[u++]=s+(g-s)/3,j[u++]=r+2*(e-r)/3,j[u++]=s+2*(g-s)/3,j[u++]=e,j[u++]=g,"L"===h&&(b+=2)),r=e,s=g}return q[0]},i=function(a){var b,c=a.length,d=999999999999;for(b=1;c>b;b+=6)+a[b]<d&&(d=+a[b]);return d},j=function(a,b,c){c||0===c||(c=Math.max(+a[a.length-1],+a[1]));var d,e=-1*+a[0],f=-c,g=a.length,h=1/(+a[g-2]+e),j=-b||(Math.abs(+a[g-1]-+a[1])<.01*(+a[g-2]-+a[0])?i(a)+f:+a[g-1]+f);for(j=j?1/j:-h,d=0;g>d;d+=2)a[d]=(+a[d]+e)*h,a[d+1]=(+a[d+1]+f)*j},k=function(a){var b=this.lookup[a*this.l|0]||this.lookup[this.l-1];return b.nx<a&&(b=b.n),b.y+(a-b.x)/b.cx*b.cy},l=function(b,c,d){this._calcEnd=!0,this.id=b,b&&(a.map[b]=this),this.getRatio=k,this.setData(c,d)},m=l.prototype=new a;return m.constructor=l,m.setData=function(a,c){a=a||"0,0,1,1";var d,i,k,l,m,n,o,p,q,r,s=a.match(b),t=1,u=[];if(c=c||{},r=c.precision||1,this.data=a,this.lookup=[],this.points=u,this.fast=1>=r,(e.test(a)||-1!==a.indexOf("M")&&-1===a.indexOf("C"))&&(s=h(a)),d=s.length,4===d)s.unshift(0,0),s.push(1,1),d=8;else if((d-2)%6)throw f;for((0!==+s[0]||1!==+s[d-2])&&j(s,c.height,c.originY),this.rawBezier=s,l=2;d>l;l+=6)i={x:+s[l-2],y:+s[l-1]},k={x:+s[l+4],y:+s[l+5]},u.push(i,k),g(i.x,i.y,+s[l],+s[l+1],+s[l+2],+s[l+3],k.x,k.y,1/(2e5*r),u,u.length-1);for(d=u.length,l=0;d>l;l++)o=u[l],p=u[l-1]||o,o.x>p.x||p.y!==o.y&&p.x===o.x||o===p?(p.cx=o.x-p.x,p.cy=o.y-p.y,p.n=o,p.nx=o.x,this.fast&&l>1&&Math.abs(p.cy/p.cx-u[l-2].cy/u[l-2].cx)>2&&(this.fast=!1),p.cx<t&&(p.cx?t=p.cx:(p.cx=.001,l===d-1&&(p.x-=.001,t=Math.min(t,.001),this.fast=!1)))):(u.splice(l--,1),d--);if(d=1/t+1|0,this.l=d,m=1/d,n=0,o=u[0],this.fast){for(l=0;d>l;l++)q=l*m,o.nx<q&&(o=u[++n]),i=o.y+(q-o.x)/o.cx*o.cy,this.lookup[l]={x:q,cx:m,y:i,cy:0,nx:9},l&&(this.lookup[l-1].cy=i-this.lookup[l-1].y);this.lookup[d-1].cy=u[u.length-1].y-i}else{for(l=0;d>l;l++)o.nx<l*m&&(o=u[++n]),this.lookup[l]=o;n<u.length-1&&(this.lookup[l-1]=u[u.length-2])}return this._calcEnd=1!==u[u.length-1].y||0!==u[0].y,this},m.getRatio=k,m.getSVGData=function(a){return l.getSVGData(this,a)},l.create=function(a,b,c){return new l(a,b,c)},l.version="0.2.2",l.bezierToPoints=g,l.get=function(b){return a.map[b]},l.getSVGData=function(b,c){c=c||{};var d,e,f,g,h,i,j,k,l,m,n=1e3,o=c.width||100,p=c.height||100,q=c.x||0,r=(c.y||0)+p,s=c.path;if(c.invert&&(p=-p,r=0),b=b.getRatio?b:a.map[b]||console.log("No ease found: ",b),b.rawBezier){for(d=[],j=b.rawBezier.length,f=0;j>f;f+=2)d.push(((q+b.rawBezier[f]*o)*n|0)/n+","+((r+b.rawBezier[f+1]*-p)*n|0)/n);d[0]="M"+d[0],d[1]="C"+d[1]}else for(d=["M"+q+","+r],j=Math.max(5,200*(c.precision||1)),g=1/j,j+=2,k=5/j,l=((q+g*o)*n|0)/n,m=((r+b.getRatio(g)*-p)*n|0)/n,e=(m-r)/(l-q),f=2;j>f;f++)h=((q+f*g*o)*n|0)/n,i=((r+b.getRatio(f*g)*-p)*n|0)/n,(Math.abs((i-m)/(h-l)-e)>k||f===j-1)&&(d.push(l+","+m),e=(i-m)/(h-l)),l=h,m=i;return s&&("string"==typeof s?document.querySelector(s):s).setAttribute("d",d.join(" ")),d.join(" ")},l},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("CustomEase");
	})();

	/* WINWHEEL.JS */
	const startAPI = (configJSON) => {
		/* WINWHEEL DOCKS: http://dougtesting.net/winwheel/docs  */
		function Winwheel(a, c) {
			defaultOptions = {
				canvasId: "canvas", centerX: null, centerY: null, outerRadius: null, innerRadius: 0, numSegments: 1, drawMode: "code", rotationAngle: 0, textFontFamily: "Arial", textFontSize: 20, textFontWeight: "bold", textOrientation: "horizontal", textAlignment: "center", textDirection: "normal", textMargin: null, textFillStyle: "black", textStrokeStyle: null, textLineWidth: 1, fillStyle: "silver", strokeStyle: "black", lineWidth: 1, clearTheCanvas: !0, imageOverlay: !1, drawText: !0, pointerAngle: 0, wheelImage: null, imageDirection: "N",
				responsive: !1, scaleFactor: 1
			}; for (var b in defaultOptions) this[b] = null != a && "undefined" !== typeof a[b] ? a[b] : defaultOptions[b]; if (null != a) for (var d in a) "undefined" === typeof this[d] && (this[d] = a[d]); this.canvasId ? (this.canvas = document.getElementById(this.canvasId)) ? (null == this.centerX && (this.centerX = this.canvas.width / 2), null == this.centerY && (this.centerY = this.canvas.height / 2), null == this.outerRadius && (this.outerRadius = this.canvas.width < this.canvas.height ? this.canvas.width / 2 - this.lineWidth : this.canvas.height /
				2 - this.lineWidth), this.ctx = this.canvas.getContext("2d")) : this.ctx = this.canvas = null : this.ctx = this.canvas = null; this.segments = Array(null); for (b = 1; b <= this.numSegments; b++)this.segments[b] = null != a && a.segments && "undefined" !== typeof a.segments[b - 1] ? new Segment(a.segments[b - 1]) : new Segment; this.updateSegmentSizes(); null === this.textMargin && (this.textMargin = this.textFontSize / 1.7); this.animation = null != a && a.animation && "undefined" !== typeof a.animation ? new Animation(a.animation) : new Animation; null != a && a.pins &&
					"undefined" !== typeof a.pins && (this.pins = new Pin(a.pins)); "image" == this.drawMode || "segmentImage" == this.drawMode ? ("undefined" === typeof a.fillStyle && (this.fillStyle = null), "undefined" === typeof a.strokeStyle && (this.strokeStyle = "red"), "undefined" === typeof a.drawText && (this.drawText = !1), "undefined" === typeof a.lineWidth && (this.lineWidth = 1), "undefined" === typeof c && (c = !1)) : "undefined" === typeof c && (c = !0); this.pointerGuide = null != a && a.pointerGuide && "undefined" !== typeof a.pointerGuide ? new PointerGuide(a.pointerGuide) :
						new PointerGuide; this.responsive && (winwheelToDrawDuringAnimation = this, this._originalCanvasWidth = this.canvas.width, this._originalCanvasHeight = this.canvas.height, this._responsiveScaleHeight = this.canvas.dataset.responsivescaleheight, this._responsiveMinWidth = this.canvas.dataset.responsiveminwidth, this._responsiveMinHeight = this.canvas.dataset.responsiveminheight, this._responsiveMargin = this.canvas.dataset.responsivemargin, window.addEventListener("load", winwheelResize), window.addEventListener("resize", winwheelResize));
			if (1 == c) this.draw(this.clearTheCanvas); else if ("segmentImage" == this.drawMode) for (winwheelToDrawDuringAnimation = this, winhweelAlreadyDrawn = !1, b = 1; b <= this.numSegments; b++)null !== this.segments[b].image && (this.segments[b].imgData = new Image, this.segments[b].imgData.onload = winwheelLoadedImage, this.segments[b].imgData.src = this.segments[b].image)
		}
		Winwheel.prototype.updateSegmentSizes = function () { if (this.segments) { for (var a = 0, c = 0, b = 1; b <= this.numSegments; b++)null !== this.segments[b].size && (a += this.segments[b].size, c++); b = 360 - a; a = 0; 0 < b && (a = b / (this.numSegments - c)); c = 0; for (b = 1; b <= this.numSegments; b++)this.segments[b].startAngle = c, c = this.segments[b].size ? c + this.segments[b].size : c + a, this.segments[b].endAngle = c } }; Winwheel.prototype.clearCanvas = function () { this.ctx && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) };
		Winwheel.prototype.draw = function (a) {
			this.ctx && ("undefined" !== typeof a ? 1 == a && this.clearCanvas() : this.clearCanvas(), "image" == this.drawMode ? (this.drawWheelImage(), 1 == this.drawText && this.drawSegmentText(), 1 == this.imageOverlay && this.drawSegments()) : "segmentImage" == this.drawMode ? (this.drawSegmentImages(), 1 == this.drawText && this.drawSegmentText(), 1 == this.imageOverlay && this.drawSegments()) : (this.drawSegments(), 1 == this.drawText && this.drawSegmentText()), "undefined" !== typeof this.pins && 1 == this.pins.visible &&
				this.drawPins(), 1 == this.pointerGuide.display && this.drawPointerGuide())
		};
		Winwheel.prototype.drawPins = function () {
			if (this.pins && this.pins.number) {
				var a = this.centerX * this.scaleFactor, c = this.centerY * this.scaleFactor, b = this.outerRadius * this.scaleFactor, d = this.pins.outerRadius, e = this.pins.margin; this.pins.responsive && (d = this.pins.outerRadius * this.scaleFactor, e = this.pins.margin * this.scaleFactor); for (var t = 360 / this.pins.number, h = 1; h <= this.pins.number; h++)this.ctx.save(), this.ctx.strokeStyle = this.pins.strokeStyle, this.ctx.lineWidth = this.pins.lineWidth, this.ctx.fillStyle = this.pins.fillStyle,
					this.ctx.translate(a, c), this.ctx.rotate(this.degToRad(h * t + this.rotationAngle)), this.ctx.translate(-a, -c), this.ctx.beginPath(), this.ctx.arc(a, c - b + d + e, d, 0, 2 * Math.PI), this.pins.fillStyle && this.ctx.fill(), this.pins.strokeStyle && this.ctx.stroke(), this.ctx.restore()
			}
		};
		Winwheel.prototype.drawPointerGuide = function () { if (this.ctx) { var a = this.centerX * this.scaleFactor, c = this.centerY * this.scaleFactor, b = this.outerRadius * this.scaleFactor; this.ctx.save(); this.ctx.translate(a, c); this.ctx.rotate(this.degToRad(this.pointerAngle)); this.ctx.translate(-a, -c); this.ctx.strokeStyle = this.pointerGuide.strokeStyle; this.ctx.lineWidth = this.pointerGuide.lineWidth; this.ctx.beginPath(); this.ctx.moveTo(a, c); this.ctx.lineTo(a, -(b / 4)); this.ctx.stroke(); this.ctx.restore() } };
		Winwheel.prototype.drawWheelImage = function () { if (null != this.wheelImage) { var a = this.centerX * this.scaleFactor, c = this.centerY * this.scaleFactor, b = this.wheelImage.width * this.scaleFactor, d = this.wheelImage.height * this.scaleFactor, e = a - b / 2, t = c - d / 2; this.ctx.save(); this.ctx.translate(a, c); this.ctx.rotate(this.degToRad(this.rotationAngle)); this.ctx.translate(-a, -c); this.ctx.drawImage(this.wheelImage, e, t, b, d); this.ctx.restore() } };
		Winwheel.prototype.drawSegmentImages = function () {
			if (this.ctx) {
				var a = this.centerX * this.scaleFactor, c = this.centerY * this.scaleFactor; if (this.segments) for (var b = 1; b <= this.numSegments; b++) {
					var d = this.segments[b]; if (d.imgData.height) {
						var e = d.imgData.width * this.scaleFactor, t = d.imgData.height * this.scaleFactor; var h = null !== d.imageDirection ? d.imageDirection : this.imageDirection; if ("S" == h) { h = a - e / 2; var n = c; var r = d.startAngle + 180 + (d.endAngle - d.startAngle) / 2 } else "E" == h ? (h = a, n = c - t / 2, r = d.startAngle + 270 + (d.endAngle -
							d.startAngle) / 2) : "W" == h ? (h = a - e, n = c - t / 2, r = d.startAngle + 90 + (d.endAngle - d.startAngle) / 2) : (h = a - e / 2, n = c - t, r = d.startAngle + (d.endAngle - d.startAngle) / 2); this.ctx.save(); this.ctx.translate(a, c); this.ctx.rotate(this.degToRad(this.rotationAngle + r)); this.ctx.translate(-a, -c); this.ctx.drawImage(d.imgData, h, n, e, t); this.ctx.restore()
					} else console.log("Segment " + b + " imgData is not loaded")
				}
			}
		};
		Winwheel.prototype.drawSegments = function () {
			if (this.ctx && this.segments) for (var a = this.centerX * this.scaleFactor, c = this.centerY * this.scaleFactor, b = this.innerRadius * this.scaleFactor, d = this.outerRadius * this.scaleFactor, e = 1; e <= this.numSegments; e++) {
				var t = this.segments[e]; var h = null !== t.fillStyle ? t.fillStyle : this.fillStyle; this.ctx.fillStyle = h; var n = null !== t.lineWidth ? t.lineWidth : this.lineWidth; this.ctx.lineWidth = n; var r = null !== t.strokeStyle ? t.strokeStyle : this.strokeStyle; if ((this.ctx.strokeStyle = r) || h) {
					this.ctx.beginPath();
					if (this.innerRadius) { var f = Math.cos(this.degToRad(t.startAngle + this.rotationAngle - 90)) * (b - n / 2); n = Math.sin(this.degToRad(t.startAngle + this.rotationAngle - 90)) * (b - n / 2); this.ctx.moveTo(a + f, c + n) } else this.ctx.moveTo(a, c); this.ctx.arc(a, c, d, this.degToRad(t.startAngle + this.rotationAngle - 90), this.degToRad(t.endAngle + this.rotationAngle - 90), !1); this.innerRadius ? this.ctx.arc(a, c, b, this.degToRad(t.endAngle + this.rotationAngle - 90), this.degToRad(t.startAngle + this.rotationAngle - 90), !0) : this.ctx.lineTo(a, c); h && this.ctx.fill();
					r && this.ctx.stroke()
				}
			}
		};
		Winwheel.prototype.drawSegmentText = function () {
			if (this.ctx) for (var a, c, b, d, e, t, h, n, r, f, l = this.centerX * this.scaleFactor, p = this.centerY * this.scaleFactor, w = this.outerRadius * this.scaleFactor, v = this.innerRadius * this.scaleFactor, y = 1; y <= this.numSegments; y++) {
				this.ctx.save(); var g = this.segments[y]; if (g.text) {
					a = null !== g.textFontFamily ? g.textFontFamily : this.textFontFamily; c = null !== g.textFontSize ? g.textFontSize : this.textFontSize; b = null !== g.textFontWeight ? g.textFontWeight : this.textFontWeight; d = null !== g.textOrientation ?
						g.textOrientation : this.textOrientation; e = null !== g.textAlignment ? g.textAlignment : this.textAlignment; t = null !== g.textDirection ? g.textDirection : this.textDirection; h = null !== g.textMargin ? g.textMargin : this.textMargin; n = null !== g.textFillStyle ? g.textFillStyle : this.textFillStyle; r = null !== g.textStrokeStyle ? g.textStrokeStyle : this.textStrokeStyle; f = null !== g.textLineWidth ? g.textLineWidth : this.textLineWidth; c *= this.scaleFactor; h *= this.scaleFactor; var m = ""; null != b && (m += b + " "); null != c && (m += c + "px "); null != a && (m += a);
					this.ctx.font = m; this.ctx.fillStyle = n; this.ctx.strokeStyle = r; this.ctx.lineWidth = f; a = g.text.split("\n"); b = -(a.length / 2 * c) + c / 2; "curved" != d || "inner" != e && "outer" != e || (b = 0); for (f = 0; f < a.length; f++) {
						if ("reversed" == t) if ("horizontal" == d) this.ctx.textAlign = "inner" == e ? "right" : "outer" == e ? "left" : "center", this.ctx.textBaseline = "middle", m = this.degToRad(g.endAngle - (g.endAngle - g.startAngle) / 2 + this.rotationAngle - 90 - 180), this.ctx.save(), this.ctx.translate(l, p), this.ctx.rotate(m), this.ctx.translate(-l, -p), "inner" == e ?
							(n && this.ctx.fillText(a[f], l - v - h, p + b), r && this.ctx.strokeText(a[f], l - v - h, p + b)) : "outer" == e ? (n && this.ctx.fillText(a[f], l - w + h, p + b), r && this.ctx.strokeText(a[f], l - w + h, p + b)) : (n && this.ctx.fillText(a[f], l - v - (w - v) / 2 - h, p + b), r && this.ctx.strokeText(a[f], l - v - (w - v) / 2 - h, p + b)), this.ctx.restore(); else if ("vertical" == d) {
								this.ctx.textAlign = "center"; this.ctx.textBaseline = "inner" == e ? "top" : "outer" == e ? "bottom" : "middle"; m = g.endAngle - (g.endAngle - g.startAngle) / 2 - 180; m += this.rotationAngle; this.ctx.save(); this.ctx.translate(l,
									p); this.ctx.rotate(this.degToRad(m)); this.ctx.translate(-l, -p); var k = 0; "outer" == e ? k = p + w - h : "inner" == e && (k = p + v + h); m = c - c / 9; if ("outer" == e) for (var q = a[f].length - 1; 0 <= q; q--) { var u = a[f].charAt(q); n && this.ctx.fillText(u, l + b, k); r && this.ctx.strokeText(u, l + b, k); k -= m } else if ("inner" == e) for (q = 0; q < a[f].length; q++)u = a[f].charAt(q), n && this.ctx.fillText(u, l + b, k), r && this.ctx.strokeText(u, l + b, k), k += m; else if ("center" == e) for (k = 0, 1 < a[f].length && (k = m * (a[f].length - 1) / 2), k = p + v + (w - v) / 2 + k + h, q = a[f].length - 1; 0 <= q; q--)u = a[f].charAt(q),
										n && this.ctx.fillText(u, l + b, k), r && this.ctx.strokeText(u, l + b, k), k -= m; this.ctx.restore()
							} else {
							if ("curved" == d) for (m = 0, "inner" == e ? (m = v + h, this.ctx.textBaseline = "top") : "outer" == e ? (m = w - h, this.ctx.textBaseline = "bottom", m -= c * (a.length - 1)) : "center" == e && (m = v + h + (w - v) / 2, this.ctx.textBaseline = "middle"), k = 0, 1 < a[f].length ? (this.ctx.textAlign = "left", k = c / 10 * 4, k *= 100 / m, q = g.startAngle + ((g.endAngle - g.startAngle) / 2 - k * a[f].length / 2)) : (q = g.startAngle + (g.endAngle - g.startAngle) / 2, this.ctx.textAlign = "center"), q += this.rotationAngle,
								q -= 180, u = a[f].length; 0 <= u; u--) { this.ctx.save(); var x = a[f].charAt(u); this.ctx.translate(l, p); this.ctx.rotate(this.degToRad(q)); this.ctx.translate(-l, -p); r && this.ctx.strokeText(x, l, p + m + b); n && this.ctx.fillText(x, l, p + m + b); q += k; this.ctx.restore() }
						} else if ("horizontal" == d) this.ctx.textAlign = "inner" == e ? "left" : "outer" == e ? "right" : "center", this.ctx.textBaseline = "middle", m = this.degToRad(g.endAngle - (g.endAngle - g.startAngle) / 2 + this.rotationAngle - 90), this.ctx.save(), this.ctx.translate(l, p), this.ctx.rotate(m), this.ctx.translate(-l,
							-p), "inner" == e ? (n && this.ctx.fillText(a[f], l + v + h, p + b), r && this.ctx.strokeText(a[f], l + v + h, p + b)) : "outer" == e ? (n && this.ctx.fillText(a[f], l + w - h, p + b), r && this.ctx.strokeText(a[f], l + w - h, p + b)) : (n && this.ctx.fillText(a[f], l + v + (w - v) / 2 + h, p + b), r && this.ctx.strokeText(a[f], l + v + (w - v) / 2 + h, p + b)), this.ctx.restore(); else if ("vertical" == d) {
								this.ctx.textAlign = "center"; this.ctx.textBaseline = "inner" == e ? "bottom" : "outer" == e ? "top" : "middle"; m = g.endAngle - (g.endAngle - g.startAngle) / 2; m += this.rotationAngle; this.ctx.save(); this.ctx.translate(l,
									p); this.ctx.rotate(this.degToRad(m)); this.ctx.translate(-l, -p); k = 0; "outer" == e ? k = p - w + h : "inner" == e && (k = p - v - h); m = c - c / 9; if ("outer" == e) for (q = 0; q < a[f].length; q++)u = a[f].charAt(q), n && this.ctx.fillText(u, l + b, k), r && this.ctx.strokeText(u, l + b, k), k += m; else if ("inner" == e) for (q = a[f].length - 1; 0 <= q; q--)u = a[f].charAt(q), n && this.ctx.fillText(u, l + b, k), r && this.ctx.strokeText(u, l + b, k), k -= m; else if ("center" == e) for (k = 0, 1 < a[f].length && (k = m * (a[f].length - 1) / 2), k = p - v - (w - v) / 2 - k - h, q = 0; q < a[f].length; q++)u = a[f].charAt(q), n && this.ctx.fillText(u,
										l + b, k), r && this.ctx.strokeText(u, l + b, k), k += m; this.ctx.restore()
							} else if ("curved" == d) for (m = 0, "inner" == e ? (m = v + h, this.ctx.textBaseline = "bottom", m += c * (a.length - 1)) : "outer" == e ? (m = w - h, this.ctx.textBaseline = "top") : "center" == e && (m = v + h + (w - v) / 2, this.ctx.textBaseline = "middle"), k = 0, 1 < a[f].length ? (this.ctx.textAlign = "left", k = c / 10 * 4, k *= 100 / m, q = g.startAngle + ((g.endAngle - g.startAngle) / 2 - k * a[f].length / 2)) : (q = g.startAngle + (g.endAngle - g.startAngle) / 2, this.ctx.textAlign = "center"), q += this.rotationAngle, u = 0; u < a[f].length; u++)this.ctx.save(),
								x = a[f].charAt(u), this.ctx.translate(l, p), this.ctx.rotate(this.degToRad(q)), this.ctx.translate(-l, -p), r && this.ctx.strokeText(x, l, p - m + b), n && this.ctx.fillText(x, l, p - m + b), q += k, this.ctx.restore(); b += c
					}
				} this.ctx.restore()
			}
		}; Winwheel.prototype.degToRad = function (a) { return .017453292519943295 * a }; Winwheel.prototype.setCenter = function (a, c) { this.centerX = a; this.centerY = c };
		Winwheel.prototype.addSegment = function (a, c) { var b = new Segment(a); this.numSegments++; if ("undefined" !== typeof c) { for (var d = this.numSegments; d > c; d--)this.segments[d] = this.segments[d - 1]; this.segments[c] = b; b = c } else this.segments[this.numSegments] = b, b = this.numSegments; this.updateSegmentSizes(); return this.segments[b] };
		Winwheel.prototype.setCanvasId = function (a) { if (a) { if (this.canvasId = a, this.canvas = document.getElementById(this.canvasId)) this.ctx = this.canvas.getContext("2d") } else this.canvas = this.ctx = this.canvasId = null }; Winwheel.prototype.deleteSegment = function (a) { if (1 < this.numSegments) { if ("undefined" !== typeof a) for (; a < this.numSegments; a++)this.segments[a] = this.segments[a + 1]; this.segments[this.numSegments] = void 0; this.numSegments--; this.updateSegmentSizes() } };
		Winwheel.prototype.windowToCanvas = function (a, c) { var b = this.canvas.getBoundingClientRect(); return { x: Math.floor(a - this.canvas.width / b.width * b.left), y: Math.floor(c - this.canvas.height / b.height * b.top) } }; Winwheel.prototype.getSegmentAt = function (a, c) { var b = null, d = this.getSegmentNumberAt(a, c); null !== d && (b = this.segments[d]); return b };
		Winwheel.prototype.getSegmentNumberAt = function (a, c) {
			var b = this.windowToCanvas(a, c); var d = this.centerX * this.scaleFactor; var e = this.centerY * this.scaleFactor; var t = this.outerRadius * this.scaleFactor, h = this.innerRadius * this.scaleFactor; if (b.x > d) { var n = b.x - d; d = "R" } else n = d - b.x, d = "L"; if (b.y > e) { var r = b.y - e; e = "B" } else r = e - b.y, e = "T"; var f = 180 * Math.atan(r / n) / Math.PI; b = 0; n = Math.sqrt(r * r + n * n); "T" == e && "R" == d ? b = Math.round(90 - f) : "B" == e && "R" == d ? b = Math.round(f + 90) : "B" == e && "L" == d ? b = Math.round(90 - f + 180) : "T" == e && "L" ==
				d && (b = Math.round(f + 270)); 0 != this.rotationAngle && (d = this.getRotationPosition(), b -= d, 0 > b && (b = 360 - Math.abs(b))); d = null; for (e = 1; e <= this.numSegments; e++)if (b >= this.segments[e].startAngle && b <= this.segments[e].endAngle && n >= h && n <= t) { d = e; break } return d
		}; Winwheel.prototype.getIndicatedSegment = function () { var a = this.getIndicatedSegmentNumber(); return this.segments[a] };
		Winwheel.prototype.getIndicatedSegmentNumber = function () { var a = 0, c = this.getRotationPosition(); c = Math.floor(this.pointerAngle - c); 0 > c && (c = 360 - Math.abs(c)); for (var b = 1; b < this.segments.length; b++)if (c >= this.segments[b].startAngle && c <= this.segments[b].endAngle) { a = b; break } return a };
		Winwheel.prototype.getCurrentPinNumber = function () { var a = 0; if (this.pins) { var c = this.getRotationPosition(); c = Math.floor(this.pointerAngle - c); 0 > c && (c = 360 - Math.abs(c)); for (var b = 360 / this.pins.number, d = 0, e = 0; e < this.pins.number; e++) { if (c >= d && c <= d + b) { a = e; break } d += b } "clockwise" == this.animation.direction && (a++ , a > this.pins.number && (a = 0)) } return a }; Winwheel.prototype.getRotationPosition = function () { var a = this.rotationAngle; 0 <= a ? 360 < a && (a -= 360 * Math.floor(a / 360)) : (-360 > a && (a -= 360 * Math.ceil(a / 360)), a = 360 + a); return a };
		Winwheel.prototype.startAnimation = function () { if (this.animation) { this.computeAnimation(); winwheelToDrawDuringAnimation = this; var a = Array(null); a[this.animation.propertyName] = this.animation.propertyValue; a.yoyo = this.animation.yoyo; a.repeat = this.animation.repeat; a.ease = this.animation.easing; a.onUpdate = winwheelAnimationLoop; a.onComplete = winwheelStopAnimation; this.tween = TweenMax.to(this, this.animation.duration, a) } };
		Winwheel.prototype.stopAnimation = function (a) { winwheelToDrawDuringAnimation && (winwheelToDrawDuringAnimation.tween && winwheelToDrawDuringAnimation.tween.kill(), winwheelStopAnimation(a)); winwheelToDrawDuringAnimation = this }; Winwheel.prototype.pauseAnimation = function () { this.tween && this.tween.pause() }; Winwheel.prototype.resumeAnimation = function () { this.tween && this.tween.play() };
		Winwheel.prototype.computeAnimation = function () {
			this.animation && ("spinOngoing" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = -1), null == this.animation.easing && (this.animation.easing = "Linear.easeNone"), null == this.animation.yoyo && (this.animation.yoyo = !1), this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction && (this.animation.propertyValue =
				0 - this.animation.propertyValue)) : "spinToStop" == this.animation.type ? (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = 0), null == this.animation.easing && (this.animation.easing = "Power3.easeOut"), this.animation._stopAngle = null == this.animation.stopAngle ? Math.floor(359 * Math.random()) : 360 - this.animation.stopAngle + this.pointerAngle, null == this.animation.yoyo && (this.animation.yoyo = !1), this.animation.propertyValue =
					360 * this.animation.spins, "anti-clockwise" == this.animation.direction ? (this.animation.propertyValue = 0 - this.animation.propertyValue, this.animation.propertyValue -= 360 - this.animation._stopAngle) : this.animation.propertyValue += this.animation._stopAngle) : "spinAndBack" == this.animation.type && (this.animation.propertyName = "rotationAngle", null == this.animation.spins && (this.animation.spins = 5), null == this.animation.repeat && (this.animation.repeat = 1), null == this.animation.easing && (this.animation.easing = "Power2.easeInOut"),
						null == this.animation.yoyo && (this.animation.yoyo = !0), this.animation._stopAngle = null == this.animation.stopAngle ? 0 : 360 - this.animation.stopAngle, this.animation.propertyValue = 360 * this.animation.spins, "anti-clockwise" == this.animation.direction ? (this.animation.propertyValue = 0 - this.animation.propertyValue, this.animation.propertyValue -= 360 - this.animation._stopAngle) : this.animation.propertyValue += this.animation._stopAngle))
		};
		Winwheel.prototype.getRandomForSegment = function (a) { var c = 0; if (a) if ("undefined" !== typeof this.segments[a]) { var b = this.segments[a].startAngle; a = this.segments[a].endAngle - b - 2; 0 < a ? c = b + 1 + Math.floor(Math.random() * a) : console.log("Segment size is too small to safely get random angle inside it") } else console.log("Segment " + a + " undefined"); else console.log("Segment number not specified"); return c };
		function Pin(a) { var c = { visible: !0, number: 36, outerRadius: 3, fillStyle: "grey", strokeStyle: "black", lineWidth: 1, margin: 3, responsive: !1 }, b; for (b in c) this[b] = null != a && "undefined" !== typeof a[b] ? a[b] : c[b]; if (null != a) for (var d in a) "undefined" === typeof this[d] && (this[d] = a[d]) }
		function Animation(a) { var c = { type: "spinOngoing", direction: "clockwise", propertyName: null, propertyValue: null, duration: 10, yoyo: !1, repeat: null, easing: null, stopAngle: null, spins: null, clearTheCanvas: null, callbackFinished: null, callbackBefore: null, callbackAfter: null, callbackSound: null, soundTrigger: "segment" }, b; for (b in c) this[b] = null != a && "undefined" !== typeof a[b] ? a[b] : c[b]; if (null != a) for (var d in a) "undefined" === typeof this[d] && (this[d] = a[d]) }
		function Segment(a) { var c = { size: null, text: "", fillStyle: null, strokeStyle: null, lineWidth: null, textFontFamily: null, textFontSize: null, textFontWeight: null, textOrientation: null, textAlignment: null, textDirection: null, textMargin: null, textFillStyle: null, textStrokeStyle: null, textLineWidth: null, image: null, imageDirection: null, imgData: null }, b; for (b in c) this[b] = null != a && "undefined" !== typeof a[b] ? a[b] : c[b]; if (null != a) for (var d in a) "undefined" === typeof this[d] && (this[d] = a[d]); this.endAngle = this.startAngle = 0 }
		Segment.prototype.changeImage = function (a, c) { this.image = a; this.imgData = null; c && (this.imageDirection = c); winhweelAlreadyDrawn = !1; this.imgData = new Image; this.imgData.onload = winwheelLoadedImage; this.imgData.src = this.image }; function PointerGuide(a) { var c = { display: !1, strokeStyle: "red", lineWidth: 3 }, b; for (b in c) this[b] = null != a && "undefined" !== typeof a[b] ? a[b] : c[b] } function winwheelPercentToDegrees(a) { var c = 0; 0 < a && 100 >= a && (c = a / 100 * 360); return c }
		function winwheelAnimationLoop() {
			if (winwheelToDrawDuringAnimation) {
				0 != winwheelToDrawDuringAnimation.animation.clearTheCanvas && winwheelToDrawDuringAnimation.ctx.clearRect(0, 0, winwheelToDrawDuringAnimation.canvas.width, winwheelToDrawDuringAnimation.canvas.height); var a = winwheelToDrawDuringAnimation.animation.callbackBefore, c = winwheelToDrawDuringAnimation.animation.callbackAfter; null != a && ("function" === typeof a ? a() : eval(a)); winwheelToDrawDuringAnimation.draw(!1); null != c && ("function" === typeof c ? c() : eval(c));
				winwheelToDrawDuringAnimation.animation.callbackSound && winwheelTriggerSound()
			}
		}
		function winwheelTriggerSound() {
			0 == winwheelToDrawDuringAnimation.hasOwnProperty("_lastSoundTriggerNumber") && (winwheelToDrawDuringAnimation._lastSoundTriggerNumber = 0); var a = winwheelToDrawDuringAnimation.animation.callbackSound; var c = "pin" == winwheelToDrawDuringAnimation.animation.soundTrigger ? winwheelToDrawDuringAnimation.getCurrentPinNumber() : winwheelToDrawDuringAnimation.getIndicatedSegmentNumber(); c != winwheelToDrawDuringAnimation._lastSoundTriggerNumber && ("function" === typeof a ? a() : eval(a), winwheelToDrawDuringAnimation._lastSoundTriggerNumber =
				c)
		} var winwheelToDrawDuringAnimation = null; function winwheelStopAnimation(a) { 0 != a && (a = winwheelToDrawDuringAnimation.animation.callbackFinished, null != a && ("function" === typeof a ? a(winwheelToDrawDuringAnimation.getIndicatedSegment()) : eval(a))) } var winhweelAlreadyDrawn = !1;
		function winwheelLoadedImage() { if (0 == winhweelAlreadyDrawn) { for (var a = 0, c = 1; c <= winwheelToDrawDuringAnimation.numSegments; c++)null != winwheelToDrawDuringAnimation.segments[c].imgData && winwheelToDrawDuringAnimation.segments[c].imgData.height && a++; a == winwheelToDrawDuringAnimation.numSegments && (winhweelAlreadyDrawn = !0, winwheelToDrawDuringAnimation.draw()) } }
		function winwheelResize() {
			var a = 40; "undefined" !== typeof winwheelToDrawDuringAnimation._responsiveMargin && (a = winwheelToDrawDuringAnimation._responsiveMargin); let par = document.querySelector('#canvasSlotMachine777theMostUniqueName').parentElement;
			var c = par.clientWidth - a, b = winwheelToDrawDuringAnimation._responsiveMinWidth; a = winwheelToDrawDuringAnimation._responsiveMinHeight; c < b ? c = b : c > winwheelToDrawDuringAnimation._originalCanvasWidth && (c = winwheelToDrawDuringAnimation._originalCanvasWidth); c /= winwheelToDrawDuringAnimation._originalCanvasWidth; winwheelToDrawDuringAnimation.canvas.width =
				winwheelToDrawDuringAnimation._originalCanvasWidth * c; winwheelToDrawDuringAnimation._responsiveScaleHeight && (b = winwheelToDrawDuringAnimation._originalCanvasHeight * c, b < a ? b = a : b > winwheelToDrawDuringAnimation._originalCanvasHeight && (b = winwheelToDrawDuringAnimation._originalCanvasHeight), winwheelToDrawDuringAnimation.canvas.height = b); winwheelToDrawDuringAnimation.scaleFactor = c; winwheelToDrawDuringAnimation.draw();
				const pin = par.nextElementSibling;
				const spin = pin.nextElementSibling;
				par.firstElementChild.style.visibility = '';
				pin.style.visibility = '';
				setTimeout(() => {
					spin.style.visibility = '';
				}, 777);
				theWheel.animation = {
					'type': 'spinOngoing',
					'duration': config.animationSettings.duration * 2,
					'callbackSound': playSound.bind(this, new Audio(config.sounds.segmentTriggers), 0, 0, 1),
				},
				theWheel.startAnimation();
		};
		return new Winwheel(configJSON);
	};

	/* eslint-enable */
	/* eslint-disable-next-line no-undef */
	const config = configSlotMachine777theMostUniqueName();
	/* NODES */
	const e = {
		wrap: document.createElement('div'),
		canvaswrapper: document.createElement('div'),
		canvas: document.createElement('canvas'),
		h: document.createElement('div'),
		pin: document.createElement('div'),
		spin: document.createElement('div'),
		style: document.createElement('style'),
	};

	/* WRAPPER */
	e.wrap.classList.add('appSlotMachine777theMostUniqueName');

	/* TITLE */

	/* CANVASWRAPPER */

	/* CANVAS */
	e.canvas.id = 'canvasSlotMachine777theMostUniqueName';
	e.canvas.width = 777;
	e.canvas.height = 777;
	e.canvas.setAttribute('data-responsiveMinWidth', '100');
	e.canvas.setAttribute('data-responsiveScaleHeight', 'true');
	e.canvas.setAttribute('data-responsiveMargin', '0');
	e.canvas.innerText = 'Canvas not supported, please use another browser.';
	e.canvas.style.visibility = 'hidden';

	/* PIN */
	e.pin.style.visibility = 'hidden';

	/* SPIN */
	e.spin.style.visibility = 'hidden';
	e.spin.onclick = () => {
		e.spin.style.cssText += `cursor: default;
			background: url(${config.pictures.spinAfterClick});
			background-size: contain;
		`;
		e.spin.onclick = '';
		
		playSound(new Audio(config.sounds.whileWheelSpin));
		/* eslint-disable */
		theWheel.animation = {
			'type': 'spinToStop',
			'duration': config.animationSettings.duration,
			'spins': config.animationSettings.spins,
			'callbackFinished': alertPrize,
			'callbackSound': playSound.bind(this, new Audio(config.sounds.segmentTriggers)),
			'easing': CustomEase.create("custom", "M0,0,C0,0,0.076,0.608,0.302,0.706,0.436,0.77,0.936,0.938,0.95,1,0.972,0.96,0.965,1.014,0.98,0.996,0.988,0.986,1,1,1,1"),
		};
		/* eslint-enable */
		calculatePrize();
		theWheel.startAnimation();
	};

	/* STYLE */
	e.style.type = 'text/css';
	e.style.innerHTML = `
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

	`;

	/* INSERT NODES */
	document.head.appendChild(e.style);
	document.querySelector('[src$="configSlotMachine777theMostUniqueName.js"]').after(e.wrap);
	e.wrap.prepend(e.h);
	e.wrap.appendChild(e.canvaswrapper);
	e.canvaswrapper.appendChild(e.canvas);
	e.wrap.appendChild(e.pin);
	e.wrap.appendChild(e.spin);
	/* eslint-disable max-len */

	/* DYNAMIC SIZE */
	function setSize() {
		const sizes = {
			wrapper: {
				w: 0,
				h: 0,
			},
			canvasWrapper: {
				w: 0,
				t: 0,
				l: 0,
			},
			pin: {
				t: 0,
				l: 0,
				w: 0,
				h: 0,
			},
			spin: {
				t: 0,
				l: 0,
				w: 0,
				h: 0,
			},
		};

		/* WRAPPER */
		sizes.wrapper.w = e.wrap.clientWidth;
		switch (Boolean(config.tableHeight)) {
			case true:
				sizes.wrapper.h = config.tableHeight;
				break;
			default:
				if (sizes.wrapper.w <= document.documentElement.clientHeight || sizes.wrapper.w <= window.innerHeight) {
					sizes.wrapper.h = window.innerHeight;
				} else {
					sizes.wrapper.h = window.innerHeight;
				}
				break;
		}
		e.wrap.style.height = `${sizes.wrapper.h}px`;

		/* TITLE */
		e.h.style.top = `${sizes.wrapper.h / 20}px`;
		e.h.style.width = `${sizes.wrapper.w}px`;
		e.h.style.height = `${sizes.wrapper.h / 10}px`;

		/* CANVASWRAPPER */
		if (sizes.wrapper.w > sizes.wrapper.h || sizes.wrapper.w * 100 / sizes.wrapper.h > 80) {
			sizes.canvasWrapper.t = sizes.wrapper.h * 0.25;
			sizes.canvasWrapper.w = sizes.wrapper.h * 0.7;
			sizes.canvasWrapper.l = sizes.wrapper.w / 2 - sizes.wrapper.h * 0.7 / 2;
		} else {
			sizes.canvasWrapper.w = sizes.wrapper.w * 0.9;
			sizes.canvasWrapper.t = sizes.wrapper.h * 0.1 + (sizes.wrapper.h / 2 - sizes.canvasWrapper.w / 2);
			sizes.canvasWrapper.l = sizes.wrapper.w / 2 - sizes.canvasWrapper.w / 2;
		}
		e.canvaswrapper.style.width = `${sizes.canvasWrapper.w}px`;
		e.canvaswrapper.style.top = `${sizes.canvasWrapper.t}px`;
		e.canvaswrapper.style.left = `${sizes.canvasWrapper.l}px`;

		/* PIN */
		sizes.pin.w = sizes.canvasWrapper.w / 5;
		sizes.pin.h = sizes.pin.w;
		sizes.pin.t = sizes.canvasWrapper.t - sizes.canvasWrapper.w / 10;
		sizes.pin.l = sizes.canvasWrapper.l + sizes.canvasWrapper.w / 2 - sizes.pin.w / 2;

		e.pin.style.width = `${sizes.pin.w}px`;
		e.pin.style.height = `${sizes.pin.h}px`;
		e.pin.style.top = `${sizes.pin.t}px`;
		e.pin.style.left = `${sizes.pin.l}px`;

		/* SPIN */
		sizes.spin.w = sizes.canvasWrapper.w / 3;
		sizes.spin.h = sizes.spin.w;
		sizes.spin.l = sizes.canvasWrapper.l + sizes.canvasWrapper.w / 2 - sizes.spin.w / 2;
		sizes.spin.t = sizes.canvasWrapper.t + sizes.canvasWrapper.w / 2 - sizes.spin.h / 2;

		e.spin.style.width = `${sizes.spin.w}px`;
		e.spin.style.height = `${sizes.spin.h}px`;
		e.spin.style.top = `${sizes.spin.t}px`;
		e.spin.style.left = `${sizes.spin.l}px`;
	}
	window.addEventListener('resize', () => setSize());
	setSize();

	/* eslint-enable */
	/* eslint-disable quote-props */

	/* WHEEL PROPERTIES */
	const playSound = (audio, start, end, onlyJab) => {
		if(onlyJab) pinJab();
		else {
			audio.pause();
			audio.currentTime = start || 0;
			audio.play();
			pinJab();
			if (end) setTimeout(() => audio.pause(), end);
		}

		/**
		 *  SAFARI browser WARNINGS in console message: "Unhandled Promise Rejection: [Object DOMError]"
		 * that well known issue
		 * See problems about this errors: http://qaru.site/questions/6977973/mp4-video-safari-showing-unhandled-promise-rejection-object-domerror-in-console
		 * OK in CHROME and other browsers
		 */
	};

	const pinJab = () => {
		e.pin.dataset.state = 'jab';
		setTimeout(() => {
			e.pin.dataset.state = '';
		}, 50);
	};

	const insertSalute = () => {
		const salute = document.createElement('iframe');
		salute.style.cssText = `
			position: absolute;
			z-index: 1;
		`;
		salute.style.width = `${e.wrap.clientWidth}px`;
		salute.style.height = `${e.wrap.clientHeight}px`;
		salute.src = config.salute;
		e.wrap.append(salute);
	};

	const alertPrize = () => {
		insertSalute();
		const winningSegment = theWheel.getIndicatedSegment();
		console.log(winningSegment.text);
		if (config.postType === 'new page') {
			setTimeout(() => {
				location.href = `${config.contactForm}?winningSegment=${winningSegment.text}`;
			}, 8000);
		} else if (config.postType === 'current page') {
			const modalWindow = document.createElement('iframe');
			modalWindow.style.cssText = `
				height: 80%;
				position: absolute;
				top: 10%;
				left: 10%;
				width: 80%;
				z-index: 3;
				background: #fff8;
			`;
			modalWindow.src = `${config.contactForm}?winningSegment=${winningSegment.text}&size=${e.canvaswrapper.clientWidth * 0.8}`;
		}
		playSound(new Audio(config.sounds.afterWheelSpin));
	};

	const theWheel = startAPI({
		'canvasId': 'canvasSlotMachine777theMostUniqueName',
		'responsive': true,
		'numSegments': config.segments.length,
		'segments': config.segments,
		'drawMode': 'image',
	});
	/* CANVAS IMAGE */
	const loadedImg = new Image();
	loadedImg.onload = () => {
		theWheel.wheelImage = loadedImg;
		theWheel.draw();
	};
	loadedImg.src = config.pictures.table;

	const calculatePrize = () => {
		const stopAt = (() => {
			const arrayWinTrueSegments = [];
			const archLength = 360 / config.segments.length;
			config.segments.forEach((item, index) => {
				if (item.win) arrayWinTrueSegments.push(index);
			});
			function getRandomInt(min, max) {
				/* eslint-disable no-param-reassign */
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min)) + min;
			}
			return arrayWinTrueSegments[getRandomInt(0, arrayWinTrueSegments.length)] * archLength + archLength / 2;
		})();
		theWheel.animation.stopAngle = stopAt;
	};
})();
