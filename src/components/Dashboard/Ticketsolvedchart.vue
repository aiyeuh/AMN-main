<template>
  <div>
    <template>
      <div>
        <apexchart
          class="chart"
          type="line"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </template>
  </div>
</template>


ketik aja

<script>
export default {
  data: function () {
    return {
      options: {
        chart: {
          id: "chart",
          type: "line",
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "solid",
          opacity: [0.35, 1],
        },
        xaxis: {
          categories: [
            "Dec 01",
            "Dec 02",
            "Dec 03",
            "Dec 04",
            "Dec 05",
            "Dec 06",
            "Dec 07",
            "Dec 08",
            "Dec 09 ",
            "Dec 10",
            "Dec 11",
          ],
        },
      },
      series: [
        {
          name: "Need Response",
          variant: "Danger",
          type: "area",
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
        },
        {
          name: "Solved",
          variant: "success",
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
        },
      ],
    };
  },
};
</script>

<style>
.chart {
  height: 300px;
  width: 700px;
}
</style>
