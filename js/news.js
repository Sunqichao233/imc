// 新闻时间轴模块 - 处理新闻滚动功能
class NewsTimeline {
  constructor() {
    this.timeline = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.scrollAmount = 320; // Width of one news item plus gap
    
    this.init();
  }
  
  init() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initElements());
    } else {
      this.initElements();
    }
  }
  
  initElements() {
    this.timeline = document.getElementById('newsTimeline');
    this.prevBtn = document.querySelector('.news-nav-prev');
    this.nextBtn = document.querySelector('.news-nav-next');
    
    if (!this.timeline) {
      console.warn('NewsTimeline: 找不到 newsTimeline 元素');
      return;
    }
    
    // 绑定事件监听器
    this.bindEvents();
    
    // 初始化按钮状态
    this.updateButtonStates();
    
    console.log('NewsTimeline: 初始化完成');
  }
  
  bindEvents() {
    // 滚动事件监听
    if (this.timeline) {
      this.timeline.addEventListener('scroll', () => {
        this.updateButtonStates();
      });
    }
    
    // 按钮点击事件
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.scrollNews('prev'));
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.scrollNews('next'));
    }
  }
  
  scrollNews(direction) {
    if (!this.timeline) {
      console.warn('NewsTimeline: timeline 元素不存在');
      return;
    }
    
    if (direction === 'prev') {
      this.timeline.scrollBy({
        left: -this.scrollAmount,
        behavior: 'smooth'
      });
    } else if (direction === 'next') {
      this.timeline.scrollBy({
        left: this.scrollAmount,
        behavior: 'smooth'
      });
    }
    
    // 延迟更新按钮状态，等待滚动动画完成
    setTimeout(() => this.updateButtonStates(), 300);
  }
  
  updateButtonStates() {
    if (!this.timeline || !this.prevBtn || !this.nextBtn) {
      return;
    }
    
    // 检查是否在开始位置
    if (this.timeline.scrollLeft <= 0) {
      this.prevBtn.classList.add('disabled');
    } else {
      this.prevBtn.classList.remove('disabled');
    }
    
    // 检查是否在结束位置
    const maxScroll = this.timeline.scrollWidth - this.timeline.clientWidth;
    if (this.timeline.scrollLeft >= maxScroll - 10) {
      this.nextBtn.classList.add('disabled');
    } else {
      this.nextBtn.classList.remove('disabled');
    }
  }
  
  // 手动滚动到指定位置
  scrollTo(position) {
    if (!this.timeline) return;
    
    this.timeline.scrollTo({
      left: position,
      behavior: 'smooth'
    });
    
    setTimeout(() => this.updateButtonStates(), 300);
  }
  
  // 滚动到开始位置
  scrollToStart() {
    this.scrollTo(0);
  }
  
  // 滚动到结束位置
  scrollToEnd() {
    if (!this.timeline) return;
    
    const maxScroll = this.timeline.scrollWidth - this.timeline.clientWidth;
    this.scrollTo(maxScroll);
  }
  
  // 获取当前滚动位置信息
  getScrollInfo() {
    if (!this.timeline) return null;
    
    return {
      scrollLeft: this.timeline.scrollLeft,
      scrollWidth: this.timeline.scrollWidth,
      clientWidth: this.timeline.clientWidth,
      maxScroll: this.timeline.scrollWidth - this.timeline.clientWidth,
      isAtStart: this.timeline.scrollLeft <= 0,
      isAtEnd: this.timeline.scrollLeft >= (this.timeline.scrollWidth - this.timeline.clientWidth - 10)
    };
  }
  
  // 设置滚动量
  setScrollAmount(amount) {
    this.scrollAmount = amount;
  }
  
  // 销毁实例，移除事件监听器
  destroy() {
    if (this.timeline) {
      this.timeline.removeEventListener('scroll', this.updateButtonStates);
    }
    
    if (this.prevBtn) {
      this.prevBtn.removeEventListener('click', () => this.scrollNews('prev'));
    }
    
    if (this.nextBtn) {
      this.nextBtn.removeEventListener('click', () => this.scrollNews('next'));
    }
    
    this.timeline = null;
    this.prevBtn = null;
    this.nextBtn = null;
  }
}

// 全局函数，保持向后兼容性
window.scrollNews = function(direction) {
  if (window.newsTimeline) {
    window.newsTimeline.scrollNews(direction);
  }
};

window.updateButtonStates = function() {
  if (window.newsTimeline) {
    window.newsTimeline.updateButtonStates();
  }
};

// 导出NewsTimeline类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NewsTimeline;
} else {
  window.NewsTimeline = NewsTimeline;
}
