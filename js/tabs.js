// 标签页切换模块 - 处理组织标签页切换功能
class TabManager {
  constructor() {
    this.activeTab = null;
    this.tabButtons = [];
    this.tabContents = [];
    
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
    // 获取所有标签按钮和内容
    this.tabButtons = document.querySelectorAll('.org-tab-button');
    this.tabContents = document.querySelectorAll('.org-tab-content');
    
    if (this.tabButtons.length === 0) {
      console.warn('TabManager: 找不到 .org-tab-button 元素');
      return;
    }
    
    if (this.tabContents.length === 0) {
      console.warn('TabManager: 找不到 .org-tab-content 元素');
      return;
    }
    
    // 绑定事件监听器
    this.bindEvents();
    
    // 初始化第一个标签为激活状态
    this.initializeFirstTab();
    
    console.log('TabManager: 初始化完成');
  }
  
  bindEvents() {
    this.tabButtons.forEach((button, index) => {
      button.addEventListener('click', (event) => {
        const tabId = button.getAttribute('data-tab') || button.getAttribute('onclick')?.match(/showOrgTab\('([^']+)'\)/)?.[1];
        if (tabId) {
          this.showTab(tabId, event);
        }
      });
    });
  }
  
  initializeFirstTab() {
    // 找到第一个激活的标签，如果没有则激活第一个
    const activeButton = document.querySelector('.org-tab-button.active');
    const activeContent = document.querySelector('.org-tab-content.active');
    
    if (!activeButton && this.tabButtons.length > 0) {
      // 如果没有激活的标签，激活第一个
      const firstButton = this.tabButtons[0];
      const tabId = firstButton.getAttribute('data-tab') || 'business'; // 默认为business
      this.showTab(tabId);
    }
  }
  
  showTab(tabId, event = null) {
    // 隐藏所有标签内容
    this.tabContents.forEach(tab => {
      tab.classList.remove('active');
    });
    
    // 移除所有按钮的激活状态
    this.tabButtons.forEach(button => {
      button.classList.remove('active');
    });
    
    // 显示选中的标签内容
    const selectedTab = document.getElementById('tab-' + tabId);
    if (selectedTab) {
      selectedTab.classList.add('active');
      this.activeTab = tabId;
    } else {
      console.warn(`TabManager: 找不到标签内容 #tab-${tabId}`);
    }
    
    // 激活点击的按钮
    if (event && event.target) {
      event.target.classList.add('active');
    } else {
      // 如果没有事件对象，根据tabId找到对应按钮
      const targetButton = Array.from(this.tabButtons).find(button => {
        const buttonTabId = button.getAttribute('data-tab') || 
                           button.getAttribute('onclick')?.match(/showOrgTab\('([^']+)'\)/)?.[1];
        return buttonTabId === tabId;
      });
      
      if (targetButton) {
        targetButton.classList.add('active');
      }
    }
    
    // 触发自定义事件
    this.dispatchTabChangeEvent(tabId);
    
    console.log(`TabManager: 切换到标签 ${tabId}`);
  }
  
  dispatchTabChangeEvent(tabId) {
    const event = new CustomEvent('tabChange', {
      detail: {
        tabId: tabId,
        previousTab: this.activeTab
      }
    });
    
    document.dispatchEvent(event);
  }
  
  // 获取当前激活的标签
  getActiveTab() {
    return this.activeTab;
  }
  
  // 获取所有可用的标签ID
  getAvailableTabs() {
    return Array.from(this.tabContents).map(tab => {
      return tab.id.replace('tab-', '');
    });
  }
  
  // 检查标签是否存在
  hasTab(tabId) {
    return document.getElementById('tab-' + tabId) !== null;
  }
  
  // 启用/禁用标签
  setTabEnabled(tabId, enabled = true) {
    const button = Array.from(this.tabButtons).find(button => {
      const buttonTabId = button.getAttribute('data-tab') || 
                         button.getAttribute('onclick')?.match(/showOrgTab\('([^']+)'\)/)?.[1];
      return buttonTabId === tabId;
    });
    
    if (button) {
      if (enabled) {
        button.classList.remove('disabled');
        button.removeAttribute('disabled');
      } else {
        button.classList.add('disabled');
        button.setAttribute('disabled', 'true');
      }
    }
  }
  
  // 添加标签变化监听器
  onTabChange(callback) {
    document.addEventListener('tabChange', callback);
  }
  
  // 移除标签变化监听器
  offTabChange(callback) {
    document.removeEventListener('tabChange', callback);
  }
  
  // 销毁实例，移除事件监听器
  destroy() {
    this.tabButtons.forEach(button => {
      button.removeEventListener('click', this.showTab);
    });
    
    this.tabButtons = [];
    this.tabContents = [];
    this.activeTab = null;
  }
}

// 全局函数，保持向后兼容性
window.showOrgTab = function(tabId) {
  if (window.tabManager) {
    window.tabManager.showTab(tabId, event);
  }
};

// 导出TabManager类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TabManager;
} else {
  window.TabManager = TabManager;
}
