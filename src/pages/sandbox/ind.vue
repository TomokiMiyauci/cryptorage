<template>
  <div class="outer">
    <div id="container-speed" class="chart-container"></div>
  </div>
</template>
<script>
const gaugeOptions = {
  chart: {
    type: 'solidgauge'
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '140%',
    startAngle: -90,
    endAngle: 90,
    background: {
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  tooltip: {
    enabled: false
  },

  // the value axis
  yAxis: {
    lineWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }
}

// The speed gauge
const chartSpeed = this.Highcharts.chart(
  'container-speed',
  this.Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Buy/sell'
      }
    },

    credits: {
      enabled: false
    },

    series: [
      {
        name: 'Speed',
        data: [80],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span style="font-size:25px">{y}</span><br/>' +
            '<span style="font-size:12px;opacity:0.4">B</span>' +
            '</div>'
        },
        tooltip: {
          valueSuffix: 'Buy'
        }
      }
    ]
  })
)

// The RPM gauge

// Bring life to the dials
setInterval(function() {
  // Speed
  const point = chartSpeed.series[0].points[0]
  point.update(20)
}, 2000)
</script>
