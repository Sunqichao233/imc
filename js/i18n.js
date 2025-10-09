// 国际化模块 - 语言切换功能
class I18n {
  constructor() {
    this.currentLanguage = 'ja';
    this.translations = {
      ja: {
        // Meta and Title
        'page-title': 'IMCS株式会社 - IMC国際医療',
        'page-description': 'IMCS株式会社の詳細情報 - 会社概要、業務内容、サービス紹介、実績展示',
        
        // Navigation
        'nav-overview': '会社概要',
        'nav-services': '業務内容',
        'nav-resources': 'リソース展示',
        'nav-home': 'ホーム',
        'nav-contact': 'お問い合わせ',
        
        // IMCS Hero Section
        'imcs-welcome-title': 'Welcome to IMCS',
        'imcs-welcome-subtitle': 'つながる。国際医療に関するすべてのサポート。',
        
        // Overview Panel
        'overview-title': '会社概要',
        'company-info-title': '会社概要',
        'company-name-label': '名称：',
        'company-name': 'IMCS株式会社',
        'company-address-label': '所在地：',
        'company-address': '〒102-0083 東京千代田区麹町4-1-5',
        'company-established-label': '設立：',
        'company-established': '2012/8/9',
        'company-director-label': '取締役：',
        'company-director': '華岡　知',
        'company-contact-label': '連絡先：',
        
        // Services Panel
        'services-title': '業務内容',
        
        // Resources Panel
        'resources-title': 'リソース展示',
        'hospital-network-title': '日本病院・医師 → 当社団',
        'hospital-network-desc': '日本国内の優秀な医療機関・医師とのネットワークを構築し、一般社団法人国際医療交流推進機構と連携して高品質な医療サービスの提供を支援しています。',
        'network-1': '提携医療機関：50施設以上',
        'network-2': '専門医師：200名以上',
        'network-3': '対応診療科：20科目以上',
        'network-4': '社団法人との連携による包括的サポート体制',
        'hospitals-subtitle': '提携医療機関',
        'doctors-title': '医師紹介',
        'doctors-desc': '日本トップクラスの専門医師陣をご紹介いたします',
        
        // Resources Overview
        'resources-overview-title': '法人会員',
        'resources-overview-desc': 'IMC国際医療の包括的なサービス体系と国際的なネットワークをご覧ください',
        
        // Contact Panel
        'contact-title': 'お問い合わせ',
        'contact-name-label': 'お名前',
        'contact-email-label': 'メールアドレス',
        'contact-message-label': 'メッセージ',
        'contact-submit': '送信',
        
        // Organization Section
        'org-section-title': '一般社団法人 国際医療交流推進機構',
        'org-nav-title': '組織情報',
        'org-tab-business': '事業内容',
        'org-tab-organization': '組織情報',
        'org-tab-officers': '役員紹介',
        'org-tab-advisor': '顧問紹介',
        'org-tab-services': '業務内容',
        'org-tab-resources': '資源展示',
        
        // IMCS Section
        'imcs-section-title': 'IMCS株式会社',
        'imcs-description': 'IMCS株式会社は、国際医療交流推進機構の事業部門として、具体的な医療サービスとコンサルティング業務を提供しています。',
        
        // Brand Story Section
        'brand-story-title': 'ブランドストーリー',
        
        // Organizations Section
        'organizations-title': '私たちの組織',
        'organizations-description': 'IMC国際医療は、一般社団法人とIMCS株式会社の2つの組織で構成され、それぞれが専門性を活かして国際医療交流を推進しています。',
        'org-card-title': '一般社団法人国際医療交流推進機構',
        'org-card-description': '国際間の医療交流を推進し、医療・介護分野の発展とクロスボーダー医療の普及に寄与する非営利組織です。',
        'org-feature-1': '医療交流事業の企画・運営',
        'org-feature-2': '国際医療情報の提供',
        'org-feature-3': '医療機関・施設の紹介',
        'org-feature-4': '医療ツーリズム事業',
        'org-learn-more': '詳しく見る',
        'imcs-card-title': 'IMCS株式会社',
        'imcs-card-description': '国際医療交流推進機構の事業部門として、具体的な医療サービスとコンサルティング業務を提供する企業です。',
        'imcs-feature-1': '高品質な医療サービス提供',
        'imcs-feature-2': '国際医療コンサルティング',
        'imcs-feature-3': '先端医療技術の普及',
        'imcs-feature-4': '7,000名超のクライアント対応',
        'imcs-learn-more': '詳しく見る',
        
        // Founder Section
        'founder-section-title': '創業者紹介',
        'founder-description': 'IMC国際医療の創始者・CEO である夏冰氏についてご紹介します。',
        
        // Releases Section
        'releases-section-title': 'リリース',
        
        // Contact Section
        'contact-title': 'お問い合わせ',
        'contact-description': '当法人へのご質問・ご相談は、以下のフォームにてお問い合わせください。 尚、※は必須項目となります。',
        
        // Hero Section
        'hero-company': 'IMC国際医療',
        'hero-slogan': '世界をつなぐ医療ネットワーク',
        'hero-btn-about': '組織について',
        'hero-btn-contact': 'お問い合わせ',
        
        // Navigation
        'nav-organization': '一般社団法人 国際医療交流推進機構',
        'nav-imcs': 'IMCS株式会社',
        'nav-brand-story': 'ブランドストーリー',
        'nav-founder': '創業者紹介',
        'nav-releases': 'リリース',
        'nav-contact': 'お問い合わせ',
        
        // Footer
        'footer-hero-company': 'IMC国際医療',
        'footer-org-info': '組織情報',
        'footer-services': 'サービス',
        'footer-copyright': '© 2025 IMC国際医療. All rights reserved.'
      },
      
      zh: {
        // Meta and Title
        'page-title': 'IMCS株式会社 - IMC国际医疗',
        'page-description': 'IMCS株式会社的详细信息 - 公司概要、业务内容、服务介绍、实绩展示',
        
        // Navigation
        'nav-overview': '公司概要',
        'nav-services': '业务内容',
        'nav-resources': '资源展示',
        'nav-home': '首页',
        'nav-contact': '联系我们',
        
        // IMCS Hero Section
        'imcs-welcome-title': 'Welcome to IMCS',
        'imcs-welcome-subtitle': '连接。国际医疗的全面支持。',
        
        // Overview Panel
        'overview-title': '公司概要',
        'company-info-title': '公司概要',
        'company-name-label': '名称：',
        'company-name': 'IMCS株式会社',
        'company-address-label': '所在地：',
        'company-address': '〒102-0083 东京千代田区麹町4-1-5',
        'company-established-label': '设立：',
        'company-established': '2012/8/9',
        'company-director-label': '董事：',
        'company-director': '华冈　知',
        'company-contact-label': '联系方式：',
        
        // Services Panel
        'services-title': '业务内容',
        
        // Resources Panel
        'resources-title': '资源展示',
        'hospital-network-title': '日本病院・医師 → 当社团',
        'hospital-network-desc': '构建与日本国内优秀医疗机构・医师的网络，与一般社团法人国际医疗交流推进机构合作，支持提供高质量医疗服务。',
        'network-1': '合作医疗机构：50家以上',
        'network-2': '专业医师：200名以上',
        'network-3': '对应诊疗科：20科以上',
        'network-4': '与社团法人合作的综合支持体制',
        'hospitals-subtitle': '合作医疗机构',
        'doctors-title': '医师介绍',
        'doctors-desc': '为您介绍日本顶级专业医师团队',
        
        // Resources Overview
        'resources-overview-title': '法人会员',
        'resources-overview-desc': 'IMC国际医疗的综合服务体系和国际网络全貌',
        
        // Contact Panel
        'contact-title': '联系我们',
        'contact-name-label': '姓名',
        'contact-email-label': '邮箱地址',
        'contact-message-label': '留言',
        'contact-submit': '发送',
        
        // Organization Section
        'org-section-title': '一般社团法人 国际医疗交流推进机构',
        'org-nav-title': '组织信息',
        'org-tab-business': '事业内容',
        'org-tab-organization': '组织信息',
        'org-tab-officers': '管理层介绍',
        'org-tab-advisor': '顾问介绍',
        'org-tab-services': '业务内容',
        'org-tab-resources': '资源展示',
        
        // IMCS Section
        'imcs-section-title': 'IMCS株式会社',
        'imcs-description': 'IMCS株式会社作为国际医疗交流推进机构的事业部门，提供具体的医疗服务和咨询业务。',
        
        // Brand Story Section
        'brand-story-title': '公司历史·时间轴',
        
        // Organizations Section
        'organizations-title': '我们的组织',
        'organizations-description': 'IMC国际医疗由一般社团法人和IMCS株式会社两个组织构成，各自发挥专业性推进国际医疗交流。',
        'org-card-title': '一般社团法人<br>国际医疗交流推进机构',
        'org-card-description': '推进国际间医疗交流，促进医疗・护理领域发展和跨境医疗普及的非营利组织。',
        'org-feature-1': '医疗交流事业的策划・运营',
        'org-feature-2': '国际医疗信息的提供',
        'org-feature-3': '医疗机构・设施的介绍',
        'org-feature-4': '医疗旅游事业',
        'org-learn-more': '了解详情',
        'imcs-card-title': 'IMCS株式会社',
        'imcs-card-description': '作为国际医疗交流推进机构的事业部门，提供具体医疗服务和咨询业务的营利企业。',
        'imcs-feature-1': '高品质医疗服务提供',
        'imcs-feature-2': '国际医疗咨询',
        'imcs-feature-3': '先进医疗技术的普及',
        'imcs-feature-4': '7,000名以上客户对应',
        'imcs-learn-more': '了解详情',
        
        // Founder Section
        'founder-section-title': '创始人介绍',
        'founder-description': '为您介绍IMC国际医疗的创始人・CEO夏冰先生。',
        
        // Releases Section
        'releases-section-title': '新闻发布',
        
        // Contact Section
        'contact-title': '联系我们',
        'contact-description': '关于本法人的问题和咨询，请通过以下表单联系我们。带※的为必填项目。',
        
        // Hero Section
        'hero-company': 'IMC国际医疗',
        'hero-slogan': '连接世界的医疗网络',
        'hero-btn-about': '关于组织',
        'hero-btn-contact': '联系我们',
        
        // Navigation
        'nav-organization': '一般社团法人 国际医疗交流推进机构',
        'nav-imcs': 'IMCS株式会社',
        'nav-brand-story': '品牌故事',
        'nav-founder': '创始人介绍',
        'nav-releases': '新闻发布',
        'nav-contact': '联系我们',
        
        // Footer
        'footer-hero-company': 'IMC国际医疗',
        'footer-org-info': '组织信息',
        'footer-services': '服务',
        'footer-copyright': '© 2025 IMC国际医疗. 版权所有。'
      }
    };
    
    this.init();
  }
  
  init() {
    // 初始化语言设置
    this.initializeLanguage();
    
    // 绑定语言切换按钮事件
    this.bindLanguageButtons();
  }
  
  initializeLanguage() {
    // 从localStorage获取保存的语言设置，默认为日语
    const savedLanguage = localStorage.getItem('preferred-language') || 'ja';
    this.switchLanguage(savedLanguage);
  }
  
  bindLanguageButtons() {
    const jaButton = document.getElementById('lang-ja');
    const zhButton = document.getElementById('lang-zh');
    
    if (jaButton) {
      jaButton.addEventListener('click', () => this.switchLanguage('ja'));
    }
    
    if (zhButton) {
      zhButton.addEventListener('click', () => this.switchLanguage('zh'));
    }
  }
  
  switchLanguage(lang) {
    if (!this.translations[lang]) {
      console.warn(`Language ${lang} not supported`);
      return;
    }
    
    this.currentLanguage = lang;
    
    // 保存语言设置到localStorage
    localStorage.setItem('preferred-language', lang);
    
    // 更新页面文本
    this.updatePageTexts();
    
    // 更新语言按钮状态
    this.updateLanguageButtons();
    
    // 更新页面标题和描述
    this.updatePageMeta();
  }
  
  updatePageTexts() {
    const elements = document.querySelectorAll('[data-i18n]');
    const translations = this.translations[this.currentLanguage];
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });
    
    // 更新带有data-i18n-content属性的元素
    const contentElements = document.querySelectorAll('[data-i18n-content]');
    contentElements.forEach(element => {
      const key = element.getAttribute('data-i18n-content');
      if (translations[key]) {
        element.setAttribute('content', translations[key]);
      }
    });
  }
  
  updateLanguageButtons() {
    const jaButton = document.getElementById('lang-ja');
    const zhButton = document.getElementById('lang-zh');
    
    if (jaButton && zhButton) {
      // 重置按钮样式
      jaButton.className = 'btn btn-imc-outline btn-sm';
      zhButton.className = 'btn btn-imc-outline btn-sm';
      
      // 设置当前语言按钮为激活状态
      if (this.currentLanguage === 'ja') {
        jaButton.className = 'btn btn-imc btn-sm';
      } else if (this.currentLanguage === 'zh') {
        zhButton.className = 'btn btn-imc btn-sm';
      }
    }
  }
  
  updatePageMeta() {
    const translations = this.translations[this.currentLanguage];
    
    // 更新页面标题
    if (translations['page-title']) {
      document.title = translations['page-title'];
    }
    
    // 更新页面描述
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && translations['page-description']) {
      metaDescription.setAttribute('content', translations['page-description']);
    }
  }
  
  // 获取当前语言的翻译文本
  t(key) {
    return this.translations[this.currentLanguage][key] || key;
  }
  
  // 获取当前语言
  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

// 全局暴露switchLanguage函数以保持向后兼容
window.switchLanguage = function(lang) {
  if (window.i18n) {
    window.i18n.switchLanguage(lang);
  }
};

// 导出I18n类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
} else {
  window.I18n = I18n;
}
