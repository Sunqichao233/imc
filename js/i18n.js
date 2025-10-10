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
        'hospital-network-title': '日本医療機関・医師 → 当社団',
        'hospital-network-desc': '日本国内の優秀な医療機関・医師とのネットワークを構築し、一般社団法人国際医療交流推進機構と連携して、高品質な医療サービスの提供をサポートします。',
        'network-1': '提携医療機関：50施設以上',
        'network-2': '専門医師：200名以上',
        'network-3': '対応診療科：20科以上',
        'network-4': '社団法人との連携による総合サポート体制',
        'hospitals-subtitle': '提携医療機関',
        'doctors-title': '医師紹介',
        'doctors-desc': '日本トップクラスの専門医師チームをご紹介します',
        
        // Resources Overview
        'resources-overview-title': '法人会員',
        'resources-overview-desc': 'IMC国際医療の総合サービス体系と国際ネットワークの全貌をご覧ください',
        
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
        'footer-copyright': '© 2025 IMC国際医療. All rights reserved.',
        
        // 時間軸
        'timeline-2012-year': '2012年',
        'timeline-2012-desc': 'IMC創業',
        'timeline-2014-year': '2014年',
        'timeline-2014-desc': '経済産業省・外務省より「身元保証機関」として認定（B-121）',
        'timeline-2017-year': '2017年',
        'timeline-2017-desc': 'IMC株式会社設立、訪日国際医療支援事業を本格始動',
        'timeline-2018-year': '2018年',
        'timeline-2018-desc': '日本の先端医療ネットワークを構築',
        'timeline-2021-year': '2021年',
        'timeline-2021-desc': 'オンライン診療サービス開始、医療ツーリズム促進プロジェクト始動',
        'timeline-2023-year': '2023年',
        'timeline-2023-desc': '日本脳神経外科学会参加、再生医療研究連携・多言語対応体制強化',
        'timeline-2024-year': '2024年',
        'timeline-2024-desc': '健康食品ブランド「百賀堂」立ち上げ、国内外ECサイト展開開始',
        'timeline-2025-year': '2025年',
        'timeline-2025-desc': '医療教育・国際学術交流を強化。PET-CTセミナーや免疫医療カンファレンスを国内外で開催',
        
        // 世界地図
        'world-map-alt': '世界地図',
        'country-japan': '日本',
        'country-china': '中国',
        'country-hongkong': '香港',
        'country-taiwan': '台湾',
        'country-vietnam': 'ベトナム',
        'country-malaysia': 'マレーシア',
        'country-australia': 'オーストラリア',
        'country-newzealand': 'ニュージーランド',
        'country-usa': 'アメリカ',
        'country-canada': 'カナダ',
        'country-uk': 'イギリス',
        'country-france': 'フランス',
        'country-russia': 'ロシア',
        
        // 统计数据
        'global-network-desc1': '私たちは世界各国の医療機関・専門医と連携し、国境を越えた医療サービスを提供しています。',
        'global-network-desc2': '患者様一人ひとりに最適な医療を届けるため、グローバルネットワークを活用しています。',
        'stat-clients': 'サポートしたクライアント数',
        'stat-countries': '対応実績国数',
        'stat-years': '営業年数',
        'stat-partners': '提携医療パートナー・スタッフ数',
    
    // 医疗服务详细
    'medical-services-detail': '医療サービス詳細',
    'advanced-health-checkup': '先端的な健康診断及び健康管理',
    'advanced-health-checkup-section': 'Ⅰ. 先端的な健康診断',
    'overview': '概要',
    'main-content': '主な内容',
    'features': '特徴',
    'japan-medical-travel': '日本渡航治療',
    'standard-treatment': 'Ⅰ. 標準治療（Conventional Cancer Therapy）',
    'main-treatments': '主な治療内容',
    'comprehensive-cancer-treatment': 'Ⅱ. がんの複合治療（Comprehensive Cancer Therapy）',
    
    // 再生医疗
    'regenerative-medicine': '再生医療',
    'main-service-areas': '主な提供領域',
    
    // 不妊治疗
    'fertility-treatment': '不妊治療（生殖医療）分野',
    'japan-fertility-support': 'Ⅰ. 外国人の日本渡航不妊治療支援',
    'main-support-content': '主な支援内容：',
    'characteristics': '特徴：',
    'taiwan-fertility-support': 'Ⅱ. 外国人・日本人の台湾渡航不妊治療支援',
    
    // 事业内容
    'business-item-1': '(1) 医療・介護及び海外医療に関する調査及び研究事業',
    'business-item-2': '(2) 医療・介護及び海外医療に関する国内外の各種情報提供事業',
    'business-item-3': '(3) 医療・介護及び海外医療を推進する国内外の施設及び旅行業者等の紹介事業',
    'business-item-4': '(4) 医療施設及び介護施設の設置運営事業',
    'business-item-5': '(5) 医療施設及び介護施設の設置運営に関するコンサルティング事業',
    'business-item-6': '(6) 医療ツーリズムに関する企画旅行の実施、旅行者の案内及び旅行に関する契約の代理・媒介・取次等の旅行業及び旅行業者代理業',
    'business-item-7': '(7) 医療・介護及び海外医療に関するセミナーの企画及び運営事業',
    'business-item-8': '(8) 医療・介護及び海外医療に関する出版物の提供、図書及び記録の閲覧、書籍制作、映像配信制作、図書貸出、撮影、通訳及び翻訳に関する事業',
    'business-item-9': '(9) 海外企業及び団体の日本進出並びに日本企業及び団体の海外進出に関するコンサルティング事業',
    'business-item-10': '(10) 食品、医薬部外品の研究開発、製造及び販売並びに輸出入事業',
    'business-item-11': '(11) 医療機器の販売及び輸出入事業',
    'business-item-12': '(12) 薬局業及び医薬品並びに医薬部外品の販売事業',
    'business-item-13': '(13) 不動産売買、賃貸及び管理並びに仲介事業',
    'business-item-14': '(14) 人材派遣事業',
    'business-item-15': '(15) 各種貿易事業',
    'business-item-16': '(16) その他、当法人の目的を達成するために必要な事業'
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
        'nav-advisor': '顾问介绍',
        'nav-business': '业务内容',
        
        // Organization Hero
        'org-hero-title-1': '一般社团法人',
        'org-hero-title-2': '国际医疗交流推进机构',
        'org-hero-slogan': '致力于构建无信息差距的国际医疗平台',
        
        // Timeline
        'timeline-title': '沿革·时间轴',
        
        // Organization Info
        'org-name-label': '名称：',
        'org-name': '一般社团法人 国际医疗交流推进机构',
        'org-address-label': '所在地：',
        'org-address': '〒102-0083 东京千代田区麹町4-1-5',
        'org-established-label': '设立：',
        'org-established': '2016/9/12',
        'org-contact-label': '联系方式：',
        
        // Leadership
        'leadership-title': '管理层体制',
        'representative-label': '代表理事：',
        'directors-label': '理事：',
        'directors-name': '酒井　友佳',
        'auditor-label': '监事：',
        'auditor-name': '山田　和夫',
        'advisor-label': '顾问：',
        'advisor-name': '林　基弘',
        'executive-directors-label': '执行理事：',
        
        // Business Titles
        'business-title': '业务内容',
        'business-research-title': '调查·研究事业',
        'business-consulting-title': '设施介绍事业',
        'business-tourism-title': '设施运营·咨询事业',
        'business-trade-title': '医疗旅游事业',
        'business-food-title': '食品·医药部外品事业',
        'business-device-title': '医疗器械事业',
        'business-pharmacy-title': '药局·医药品事业',
        'business-hr-title': '人才派遣事业',
        
        // Advisor Section
        'advisor-title': '顾问介绍',
        'advisor-name': '林　基弘　Motohiro Hayashi',
        'advisor-career-title': '经历',
        'advisor-career-1985': '群马大学医学部入学',
        'advisor-career-1991': '东京女子医科大学脑神经中心脑神经外科入局',
        'advisor-career-1994': '从事伽马刀治疗工作',
        'advisor-career-1999': '法国马赛蒂莫讷大学留学',
        'advisor-career-2002': '东京女子医科大学伽马刀治疗部门负责人',
        'advisor-career-2011': '东京女子医科大学中央放射线部门伽马刀治疗室长、先端生命医科学研究所MIL部门(伽马刀研究开发战略室)长',
        'advisor-career-2013': '群马大学肿瘤放射线科・重粒子医学中心兼职讲师',
        'advisor-career-2015': '第12届国际定位放射线治疗学会学术大会会长、第1届癌症根除峰会大会会长，现任至今',
        'advisor-career-2018-1': '防卫医科大学脑神经外科　兼职讲师',
        'advisor-career-2018-2': 'JTK诊所定位放射线治疗研究所　所长',
        'advisor-positions-title': '职位',
        'advisor-position-1': '日本脑神经外科学会 认定专门医・指导医・代议员',
        'advisor-position-2': '日本定位放射线治疗学会负责人',
        'advisor-position-3': '日本伽马刀研究会理事',
        'advisor-position-4': '明日伽马刀担当会 前代表负责人',
        'advisor-position-5': '亚洲伽马刀学院代表负责人',
        'advisor-position-6': '世界脑神经外科学会联合(WFNS)・定位放射线治疗部门干事(前副代表)',
        'advisor-position-7': '国际定位放射线治疗学会(ISRS)干事',
        
        // Business Cases
        'business-case-1-1': '案例1：NHK World/Medical Frontiers播放纪念讲演会',
        'business-case-1-2': '案例2：PET-CT早期癌症检查研讨会',
        'business-case-2-1': '案例1：IMC国际医疗团队访问中国广州先进生命科学企业BGI，就未来业务合作进行协商',
        'business-case-2-2': '案例2：2024年12月，中国药理学著名专家颜光美教授团队与IMC国际医疗创始人夏冰博士就肿瘤溶解病毒药物「VRT106」签署业务合同，表明将应用于现行治疗的意向',
        'business-case-2-3': '案例3：2024年12月，上海药业生物技术有限公司创始人张鸿声教授访日，与夏冰博士就CAR-T细胞疗法业务合作进行协商',
        'business-case-3-1': '案例：IMC国际医疗为日本国内大学医院・综合医院・专科诊所提供入境医疗事业咨询服务，定期共同举办研讨会，共同参展面向中国的展览会等，提供多角度咨询服务',
        
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
        'hospital-network-title': '日本医院・医师 → 当社团',
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
        'founder-name': '夏冰　XiaBing',
        'founder-position-title': '职位',
        'founder-degree': '经营学博士',
        'founder-title': 'IMC国际医疗创始人/CEO',
        'founder-career-title': '主要经历',
        'career-2010': 'IMCS株式会社创立（原：日本一舟健康管理株式会社）',
        'career-2016': 'IMC国际医疗交流推进机构创立',
        'career-2017': 'JTK诊所经营顾问',
        'career-2023-degree': '取得经营学博士学位',
        'career-2023-book': '《日本入境国际医疗协调系统的构建》出版',
        'career-2024': '国际医疗旅游业界领袖表彰',
        
        // Releases Section
        'releases-section-title': '新闻发布',
        
        // Contact Section
        'contact-title': '联系我们',
        'contact-description': '关于本法人的问题和咨询，请通过以下表单联系我们。带※的为必填项目。',
        
        // Hero Section
        'hero-company': 'IMC国际医疗',
        'hero-slogan': '让世界更健康，让生命更长久',
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
        'footer-copyright': '© 2025 IMC国际医疗. 版权所有。',
        
        // 公司名称
        'company-runqiao': '润桥医疗教育科技・寿阳国际医院',
        'company-ainuo': '艾诺健康管理服务(天津)有限公司',
        
        // IMCS事业内容
        'business-item-1': '(1) 医疗、护理及海外医疗相关的调查及研究事业',
        'business-item-2': '(2) 医疗、护理及海外医疗相关的国内外各种信息提供事业',
        'business-item-3': '(3) 推进医疗、护理及海外医疗的国内外设施以及旅行社等的介绍事业',
        'business-item-4': '(4) 医疗设施及护理设施的设置运营事业',
        'business-item-5': '(5) 医疗设施及护理设施的设置运营相关咨询事业',
        'business-item-6': '(6) 医疗旅游相关的企划旅行实施、旅行者向导及旅行相关合同的代理、中介、代办等旅行业以及旅行业者代理业',
        'business-item-7': '(7) 医疗、护理及海外医疗相关研讨会的企划及运营事业',
        'business-item-8': '(8) 医疗、护理及海外医疗相关出版物的提供、图书及记录的供览、书籍制作、视频配信制作、图书借阅、摄影、口译及翻译相关事业',
        'business-item-9': '(9) 海外企业及团体的日本进出以及日本企业及团体的海外进出相关咨询事业',
        'business-item-10': '(10) 食品、医药部外品的研究开发、制造及销售以及进出口事业',
        'business-item-11': '(11) 医疗器械的销售及进出口事业',
        'business-item-12': '(12) 药局业及医药品以及医药部外品的销售事业',
        'business-item-13': '(13) 不动产买卖、租赁及管理以及中介事业',
        'business-item-14': '(14) 人才派遣事业',
        'business-item-15': '(15) 各种贸易事业',
        'business-item-16': '(16) 其他为达成本法人目的所必要的事业',
        
        // 时间轴
        'timeline-2012-year': '2012年',
        'timeline-2012-desc': 'IMC创业',
        'timeline-2014-year': '2014年',
        'timeline-2014-desc': '经济产业省・外务省认定为「身元保证机关」（B-121）',
        'timeline-2017-year': '2017年',
        'timeline-2017-desc': 'IMC株式会社设立，访日国际医疗支援事业正式启动',
        'timeline-2018-year': '2018年',
        'timeline-2018-desc': '构建日本先进医疗网络',
        'timeline-2021-year': '2021年',
        'timeline-2021-desc': '在线诊疗服务开始，医疗旅游促进项目启动',
        'timeline-2023-year': '2023年',
        'timeline-2023-desc': '参加日本脑神经外科学会，再生医疗研究合作・多语言对应体制强化',
        'timeline-2024-year': '2024年',
        'timeline-2024-desc': '健康食品品牌「百贺堂」成立，国内外EC网站展开开始',
        'timeline-2025-year': '2025年',
        'timeline-2025-desc': '强化医疗教育・国际学术交流。在国内外举办PET-CT研讨会和免疫医疗会议',
        
        // 世界地图
        'world-map-alt': '世界地图',
        'country-japan': '日本',
        'country-china': '中国',
        'country-hongkong': '香港',
        'country-taiwan': '台湾',
        'country-vietnam': '越南',
        'country-malaysia': '马来西亚',
        'country-australia': '澳大利亚',
        'country-newzealand': '新西兰',
        'country-usa': '美国',
        'country-canada': '加拿大',
        'country-uk': '英国',
        'country-france': '法国',
        'country-russia': '俄罗斯',
        
        // 统计数据
        'global-network-desc1': '我们与世界各国的医疗机构・专业医师合作，提供跨越国界的医疗服务。',
        'global-network-desc2': '为了向每一位患者提供最适合的医疗，我们充分利用全球网络。',
        'stat-clients': '支持的客户数',
        'stat-countries': '对应实绩国家数',
        'stat-years': '营业年数',
        'stat-partners': '合作医疗伙伴・员工数',
    
    // 医疗服务详细
    'medical-services-detail': '医疗服务详细',
    'advanced-health-checkup': '先进的健康检查及健康管理',
    'advanced-health-checkup-section': 'Ⅰ. 先进的健康检查',
    'overview': '概要',
    'main-content': '主要内容',
    'features': '特征',
    'japan-medical-travel': '日本医疗旅行',
    'standard-treatment': 'Ⅰ. 标准治疗（Conventional Cancer Therapy）',
    'main-treatments': '主要治疗内容',
    'comprehensive-cancer-treatment': 'Ⅱ. 癌症综合治疗（Comprehensive Cancer Therapy）',
    
    // 再生医疗
    'regenerative-medicine': '再生医疗',
    'main-service-areas': '主要服务领域',
    
    // 不孕治疗
    'fertility-treatment': '不孕治疗（生殖医疗）领域',
    'japan-fertility-support': 'Ⅰ. 外国人日本不孕治疗支援',
    'main-support-content': '主要支援内容：',
    'characteristics': '特征：',
    'taiwan-fertility-support': 'Ⅱ. 外国人・日本人台湾不孕治疗支援'
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
