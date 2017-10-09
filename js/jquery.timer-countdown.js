
$(document).ready(function(){
  // START: timer countdown - plugin
  (function( $, window, document, undefined){
    var timerCountdown = {
      // initializing plugin options
      // targetDate - set your final date
      defaults:{
        targetDate : 'October 30 2017 23:59:59 GMT+0530',
        daysClass : 'days',
        hoursClass : 'hours',
        minutesClass : 'min',
        secondsClass : 'sec'
      },
      // init function
      init: function(elem,options){
        var self = this;
        self.options = $.extend({}, self.defaults, options);
        self.timerCounter();
      },
      // timerCounter function
      timerCounter : function(elem,options){
        var self = this,
        $days = $('.' + self.options.daysClass),
        $hours = $('.' + self.options.hoursClass),
        $minutes = $('.' + self.options.minutesClass),
        $seconds = $('.' + self.options.secondsClass);
        // setInterval function - to calculate remaining time for each second
        setInterval(function(){
          var presentDate = new Date(),
          remaining = Date.parse(self.options.targetDate) - Date.parse(presentDate),
          seconds_remain = Math.floor( (remaining/1000) % 60 ),
          minutes_remain = Math.floor( (remaining/1000/60) % 60 ),
          hours_remain = Math.floor( (remaining/(1000*60*60)) % 24 ),
          days_remain = Math.floor( remaining/(1000*60*60*24) );
          $days.text(days_remain);
          $hours.text(hours_remain);
          $minutes.text(minutes_remain);
          $seconds.text(seconds_remain);
        },1000);
      }
    }

    // Initialize plugin
    $.fn.timerCountdown = function(options){
      return this.each(function(i){
				var timercountdown = Object.create(timerCountdown);
				timercountdown.init($(this), options);
			});
    }

  }( jQuery, window, document, undefined));

  // END: timer countdown - plugin

});
