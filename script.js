// scripts.js

// Daily Revenue Line Chart
const revenueChartCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueChartCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Revenue',
      data: [1200, 1500, 900, 1400, 1300, 1700, 2000],
      borderColor: '#4caf50',
      fill: false
    }]
  }
});

// Gross Profit Margin Gauge (Simplified for demonstration)
const profitGaugeCtx = document.getElementById('profitGauge').getContext('2d');
new Chart(profitGaugeCtx, {
  type: 'doughnut',
  data: {
    labels: ['Profit Margin', 'Remaining'],
    datasets: [{
      data: [30, 70],
      backgroundColor: ['#4caf50', '#e0e0e0'],
      borderWidth: 0
    }]
  },
  options: {
    circumference: Math.PI,
    rotation: -Math.PI,
    cutoutPercentage: 75
  }
});

// Operating Expenses Bar Chart
const expensesChartCtx = document.getElementById('expensesChart').getContext('2d');
new Chart(expensesChartCtx, {
  type: 'bar',
  data: {
    labels: ['Rent', 'Utilities', 'Supplies', 'Wages', 'Other'],
    datasets: [{
      label: 'Expenses',
      data: [500, 300, 200, 400, 100],
      backgroundColor: '#2196f3'
    }]
  }
});

// Inventory Turnover Donut Chart
const inventoryChartCtx = document.getElementById('inventoryChart').getContext('2d');
new Chart(inventoryChartCtx, {
  type: 'doughnut',
  data: {
    labels: ['Sold', 'Unsold'],
    datasets: [{
      data: [70, 30],
      backgroundColor: ['#ff9800', '#e0e0e0']
    }]
  }
});

// Accounts Receivable Aging Heatmap Simulation (Simplified)
const agingHeatMapCtx = document.getElementById('agingHeatMap').getContext('2d');
new Chart(agingHeatMapCtx, {
  type: 'bar',
  data: {
    labels: ['0-30 Days', '30-60 Days', '60-90 Days', '90+ Days'],
    datasets: [{
      label: 'Receivables Aging',
      data: [20, 15, 10, 5],
      backgroundColor: ['#4caf50', '#ffc107', '#ff9800', '#f44336']
    }]
  }
});
