(function() {
  var $, colorSchemes, markers, name, namespace, theme, themes;

  $ = jQuery;

  namespace = 'highcharts-themes';

  themes = {};

  colorSchemes = {
    base: ['#dd7722', '#2288cc', '#dd3322', '#22aa99', '#bb4488', '#ddaa00', '#6655cc', '#99aa00'],
    pastel: ['#E6645C', '#55A9DC', '#886DB3', '#6CC080'],
    steel: ['#484D59', '#aaaaaa', '#4295F3'],
    future: ['#E6645C', '#55A9DC', '#886DB3', '#6CC080']
  };

  markers = {
    base: {
      enabled: true,
      lineWidth: 1,
      radius: 2,
      fillColor: '#FFFFFF',
      lineColor: null,
      symbol: 'circle',
      states: {
        hover: {
          enabled: false,
          radius: 1,
          lineWidth: 5
        }
      }
    },
    pastel: {
      enabled: true,
      lineWidth: 3,
      radius: 5,
      fillColor: null,
      lineColor: '#FFFFFF',
      symbol: 'circle',
      states: {
        hover: {
          lineWidth: 5,
          radius: 7
        }
      }
    },
    steel: {
      enabled: true,
      lineWidth: 2,
      radius: 5,
      fillColor: '#FFFFFF',
      lineColor: null,
      symbol: 'circle',
      states: {
        hover: {
          lineWidth: 3,
          radius: 6
        }
      }
    },
    future: {
      enabled: true,
      lineWidth: 8,
      radius: 5,
      fillColor: null,
      lineColor: 'rgba(0, 0, 0, 0.15)',
      symbol: 'circle',
      states: {
        hover: {
          lineWidth: 0,
          radius: 10
        }
      }
    }
  };

  themes.pastel = {
    colors: colorSchemes.pastel,
    plotOptions: {
      line: {
        lineWidth: 3,
        marker: markers.pastel
      },
      bar: {
        pointWidth: 1
      },
      column: {
        pointWidth: 1
      }
    }
  };

  themes.steel = {
    colors: colorSchemes.steel,
    plotOptions: {
      line: {
        marker: markers.steel
      },
      bar: {
        pointWidth: 1
      },
      column: {
        pointWidth: 1
      }
    }
  };

  themes.future = {
    colors: colorSchemes.future,
    plotOptions: {
      line: {
        marker: markers.future
      },
      bar: {
        pointWidth: 1
      },
      column: {
        pointWidth: 1
      }
    }
  };

  themes._defaults = {
    chart: {
      style: {
        fontFamily: 'Helvetica',
        fontWeight: 'normal'
      }
    },
    xAxis: {
      lineColor: '#ccc'
    },
    yAxis: {
      gridLineColor: '#e0e0e0'
    },
    credits: false,
    legend: {
      borderRadius: 0,
      borderWidth: 0,
      align: 'center',
      x: 15
    }
  };

  for (name in themes) {
    theme = themes[name];
    if (name !== '_defaults') {
      $.extend(true, theme, themes._defaults);
    }
  }

  $.fn[namespace] = Highcharts.themes = themes;

  Highcharts.setTheme = function(themeName) {
    var t;
    if (t = Highcharts.themes[themeName] != null) {
      return Highcharts.setOptions(t);
    } else {
      return console.warn("Found no such theme.");
    }
  };

}).call(this);
