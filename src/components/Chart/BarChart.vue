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

ChartJS.register
(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ localStorage.getItem('label0'), localStorage.getItem('label1'), localStorage.getItem('label2'), localStorage.getItem('label3'), localStorage.getItem('label4'), localStorage.getItem('label5'), localStorage.getItem('label6'), localStorage.getItem('label7'), localStorage.getItem('label8'), localStorage.getItem('label9')],
        datasets: [ { 
          label: 'SE Dollar',
          backgroundColor: '#f87979',
          data: [ localStorage.getItem('point0'), localStorage.getItem('point1'), localStorage.getItem('point2'), localStorage.getItem('point3'), localStorage.getItem('point4'), localStorage.getItem('point5'), localStorage.getItem('point6'), localStorage.getItem('point7'), localStorage.getItem('point8'), localStorage.getItem('point9')] } ]
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
          localStorage.setItem('label0', clusters[0].name);
          localStorage.setItem('point0', clusters[0].point);
          localStorage.setItem('label1', clusters[1].name);
          localStorage.setItem('point1', clusters[1].point);
          localStorage.setItem('label2', clusters[2].name);
          localStorage.setItem('point2', clusters[2].point);
          localStorage.setItem('label3', clusters[3].name);
          localStorage.setItem('point3', clusters[3].point);
          localStorage.setItem('label4', clusters[4].name);
          localStorage.setItem('point4', clusters[4].point);
          localStorage.setItem('label5', clusters[5].name);
          localStorage.setItem('point5', clusters[5].point);
          localStorage.setItem('label6', clusters[6].name);
          localStorage.setItem('point6', clusters[6].point);
          localStorage.setItem('label7', clusters[7].name);
          localStorage.setItem('point7', clusters[7].point);
          localStorage.setItem('label8', clusters[8].name);
          localStorage.setItem('point8', clusters[8].point);
          localStorage.setItem('label9', clusters[9].name);
          localStorage.setItem('point9', clusters[9].point);
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
