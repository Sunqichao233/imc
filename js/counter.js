// Counter Animation Script
class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.stat-number');
    this.isAnimated = false;
    this.init();
  }

  init() {
    // Intersection Observer for triggering animation when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimated) {
          this.startCounterAnimation();
          this.isAnimated = true;
        }
      });
    }, {
      threshold: 0.5
    });

    // Observe the stats card
    const statsCard = document.querySelector('.stats-card');
    if (statsCard) {
      observer.observe(statsCard);
    }
  }

  startCounterAnimation() {
    this.counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (current > target) current = target;
          
          // Format number with commas for large numbers
          const displayValue = Math.floor(current);
          counter.textContent = this.formatNumber(displayValue);
          
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = this.formatNumber(target);
        }
      };

      updateCounter();
    });
  }

  formatNumber(num) {
    // Add commas for numbers >= 1000
    if (num >= 1000) {
      return num.toLocaleString('ja-JP');
    }
    return num.toString();
  }
}

// Initialize counter animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CounterAnimation();
});