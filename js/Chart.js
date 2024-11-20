const ctxLine = document.getElementById('lineChart').getContext('2d');

const labels = ['Dec2027', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const waveData = [100000, 120000, 140000, 160000, 180000, 150000, 200000, 170000]; 

const gradient = ctxLine.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(133, 179, 0, 0.4)');
gradient.addColorStop(1, 'rgba(133, 179, 0, 0.1)');

const lineChart = new Chart(ctxLine, {
  type: 'line',  
  data: {
    labels: labels,  
    datasets: [{
      label: 'Revenue',
      data: waveData,  
      borderColor: '#D5F6E5',  
      backgroundColor: gradient, 
      fill: true, 
      tension: 0.5,  
      pointRadius: 5,  
      pointBackgroundColor: '#ffffff', 
      pointBorderColor: '#D5F6E5', 
      borderWidth: 2,  
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: false, 
        grid: {
          display: false,  
        }
      },
      x: {
        grid: {
          display: false, 
        }
      }
    }
  }
});


// Pie Chart (Booking Platform Breakdown)
const ctxPie = document.getElementById('pieChart').getContext('2d');

const pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Direct Booking', 'Booking.com', 'Agoda', 'Airbnb', 'Hotels.com'], // Labels for each platform
    datasets: [{
      label: 'Booking Platforms',
      data: [61, 12, 11, 9, 5], // Data for each booking platform in percentages
      backgroundColor: ['#D5F6E5', '#D5F6E5', '#D5F6E5', '#D5F6E5', '#D5F6E5'], // Different colors for each segment
      hoverOffset: 4, // Add slight hover effect for better UX
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position the legend at the top
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            // Format the tooltip to show the percentage
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  }
});
// Bar Chart (Booking Cancellations)
const ctxBar = document.getElementById('barChart').getContext('2d');

const barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // X-axis labels (weeks)
    datasets: [{
      label: 'Bookings Cancelled',
      data: [5, 8, 3, 6, 7], // Data for number of cancellations per week
      backgroundColor: '#D5F6E5', // Bar color
      borderColor: '#D5F6E5',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Start Y-axis from 0
        title: {
          display: true,
          text: 'Number of Cancellations',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }
});

  // Sidebar Toggle (for mobile)
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('d-none');
  });