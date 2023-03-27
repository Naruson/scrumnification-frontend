<template>
  <div class="relative">
    <Bar
      ref="chart"
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<style>

</style>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Cluster 0', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Cluster 5', 'Cluster 6', 'Cluster 7', 'Cluster 8','Cluster 9'],
        datasets: [ { 
          label: 'Cluster Points',
          backgroundColor: '#f87979',
          data: [100, 1000, 1000, 1200, 1400, 3210, 2000, 4000, 2435, 4340] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  mounted() {
    this.fetchData();
  },
  watch: {
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:3000/cluster/points')
        .then(response => {
          const clusters = response.data.clusters;
          const labels = clusters.map(cluster => cluster.name);
          const points = clusters.map(cluster => cluster.point);
          this.chartData.labels = labels;
          this.chartData.datasets[0].data = points;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
}
</script>
