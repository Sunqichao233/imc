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
    'advanced-health-checkup-1': 'Ⅰ. 先进的健康检查',
    'overview': '概要',
    'main-content': '主要内容',
    'features': '特征',
    
    // 先进健康检查详细内容
    'advanced-checkup-overview-1': 'IMC国际医疗以疾病早期发现・未病阶段干预为目的，与日本国内大学医院・综合医院・专科诊所合作，提供采用最先进医疗设备和专业医师的高精度综合健康检查项目。',
    'advanced-checkup-overview-2': '超越普通人体检查的「高端体检」「VIP体检」「癌症早期发现项目」等面向国际患者的定制化服务。',
    'advanced-checkup-main-content': '体检套餐（后续添加）',
    'advanced-checkup-feature-1': '对应外国人接待的国际诊疗体制',
    
    // 日本渡航治疗
    'japan-medical-travel': '日本渡航治疗',
    'japan-travel-overview-1': 'IMC国际医疗面向寻求日本高水准医疗技术的外国患者，提供医疗+住宿+翻译+法务一站式支持的国际医疗协调服务。',
    'japan-travel-overview-2': '为了让各国患者能够安心在日本接受治疗，从事前咨询到回国后的跟进提供一贯支持。',
    
    // 标准治疗
    'standard-treatment': 'Ⅰ. 标准治疗（Conventional Cancer Therapy）',
    'standard-treatment-desc-1': 'IMC国际医疗以癌症治疗的第一选择「标准治疗」（Evidence-based Medicine）为中心，根据患者的病期・全身状态・希望，介绍・协调最适合的医疗机构・专门医师。',
    'standard-treatment-desc-2': '标准治疗是基于科学根据，在世界范围内确立了有效性・安全性的治疗方法。',
    'main-treatments': '主要治疗内容',
    'surgical-therapy': '手术疗法（Surgical Therapy）',
    'drug-therapy': '药物疗法（Chemotherapy / Drug Therapy）',
    'radiation-therapy': '放射线疗法（Radiation Therapy）',
    'standard-treatment-features': '特征',
    'standard-feature-1': '与日本大学医院・专门癌症中心的强力合作',
    'standard-feature-2': '多职种团队（医师・药剂师・护士・营养师）的综合治疗',
    'standard-feature-3': '面向外国患者的多语言翻译・事前说明',
    'standard-feature-4': '以标准治疗为基础，根据需要提出再生医疗・免疫疗法的并用建议',
    
    // 癌症综合治疗
    'comprehensive-cancer-treatment': 'Ⅱ. 癌症综合治疗（Comprehensive Cancer Therapy）',
    'comprehensive-treatment-desc-1': 'IMC在标准治疗基础上，提出结合个别化医疗・再生医疗・补完代替疗法的「复合癌症治疗项目」。',
    'comprehensive-treatment-desc-2': '根据患者的病期、体力、价值观，重视副作用的减轻・免疫力的恢复・生活质量（QOL）的提高。',
    'comprehensive-treatments': '主要治疗内容',
    'nk-therapy': 'NK疗法（Natural Killer Cell Therapy）',
    'mt-therapy': 'MT疗法（Mixed T Cell Therapy / Multitype Cell Therapy）',
    'vitamin-c-therapy': '高浓度维生素C疗法（High-dose Vitamin C Therapy）',
    'molecular-therapy': '分子靶向疗法（Molecular Targeted Therapy）',
    'immuno-herbal-therapy': '免疫汉方疗法（Immuno-Herbal Therapy）',
    'ecct-therapy': 'ECCT疗法（Electro-Capacitive Cancer Therapy）',
    'comprehensive-features': '特征',
    'comprehensive-feature-1': '结合标准治疗+补完治疗的统合型癌症医疗',
    'comprehensive-feature-2': '以免疫力恢复・副作用减轻・QOL提高为目标',
    'comprehensive-feature-3': '严选基于科学根据的治疗，重视安全性・效果',
    'comprehensive-feature-4': '持续监测治疗经过，实施个别最优化',
    
    // 复合治疗项目表格
    'program-table-header-1': '项目',
    'program-table-header-2': '内容',
    'program-table-header-3': '目的',
    'program-1': '标准治疗+NK疗法',
    'program-1-content': '手术・药物治疗+免疫强化',
    'program-1-purpose': '复发预防・免疫改善',
    'program-2': '分子靶向药+高浓度VC点滴',
    'program-2-content': '精密医疗+氧化应激减轻',
    'program-2-purpose': '副作用抑制・治疗效果增强',
    'program-3': '放射线疗法+ECCT疗法',
    'program-3-content': '局部治疗+电场疗法',
    'program-3-purpose': '局部控制・副作用减轻',
    'program-4': 'MT疗法+免疫汉方',
    'program-4-content': '多角度免疫攻击+体质改善',
    'program-4-purpose': '体力恢复・生活质量提高',
    
    // 对象患者
    'target-patients': '对象患者',
    'target-patient-1': '标准治疗效果有限的患者',
    'target-patient-2': '复发・转移癌症患者',
    'target-patient-3': '因体力・免疫力下降难以继续治疗的患者',
    'target-patient-4': '希望提高自然治愈力的患者',
    'target-patient-5': '希望癌症治疗后复发预防・健康维持的患者',
    
    // IMC的强项
     'imc-strengths': 'IMC的强项',
     'imc-strength-1': '结合标准治疗与补完医疗的国际统合癌症医疗模式',
     'imc-strength-2': '多语言协调与国际医疗滞在签证对应',
     'imc-strength-3': '与国内顶级医疗机构・再生医疗诊所的合作',
     'imc-strength-4': '基于科学根据与伦理的治疗建议',
     
     // 再生医疗
     'regenerative-medicine': '再生医疗',
     'regenerative-overview-1': 'IMC国际医疗构建了国际医疗支援平台，为国内外患者安全、可靠地提供日本世界最先进的再生医疗技术。',
     'regenerative-overview-2': '从医疗机构选定、治疗计划、赴日、翻译到后续跟进，一贯支持以细胞层面的功能修复・年轻化为目标的治疗。',
     'regenerative-overview-3': '再生医疗不仅用于「治疗疾病」，还应用于「预防・改善衰老・老化・功能下降」，在癌症・生活习惯病・神经疾病・美容抗衰老等广泛领域备受关注。',
     'main-service-areas': '主要服务领域',
     
     // 干细胞治疗
     'stem-cell-therapy': '1. 干细胞治疗（Stem Cell Therapy）',
     'adsc-therapy': '自体脂肪来源干细胞（ADSC）疗法',
     'msc-therapy': '间充质干细胞（MSC）点滴疗法',
     'stem-cell-supernatant': '干细胞上清液点滴（生长因子・细胞因子补充）',
     'stem-cell-effects': '通过细胞的再生・修复・抗炎症效果，改善慢性疲劳、糖尿病、神经疾病、动脉硬化、关节炎、肌肤老化等。',
     
     // iPS细胞疗法
     'ips-cell-therapy': '2. iPS细胞疗法（iPS Exosome Therapy）',
     'ips-exosome-use': '利用从iPS细胞中提取的外泌体（外泌体）中含有的再生因子',
     'ips-effects': '在抗炎症・抗氧化・细胞修复・免疫调节・美肌・育发等多方面有效',
     'ips-clinical-research': '临床研究实绩不断增加，在日本根据再生医疗等安全性确保法进行适当管理',
     
     // 免疫细胞疗法
     'immuno-cell-therapy': '3. 免疫细胞疗法（Immuno-Cell Therapy）',
     'cik-cells': 'CIK细胞（细胞因子诱导杀伤细胞）',
     'ctl-cells': 'CTL细胞（细胞毒性T淋巴细胞）',
     'nk-cell-therapy': 'NK细胞疗法',
     'immuno-effects': '癌症免疫治疗、免疫力提高、癌症复发预防、感染抵抗力强化',
     
     // 美容・抗衰老再生疗法
     'beauty-antiaging-therapy': '4. 美容・抗衰老再生疗法',
     'regenerative-injection': '再生医疗来源成分的注射・点滴',
     'skin-hormone-improvement': '肌肤再生、荷尔蒙平衡调整、线粒体功能改善',
     'nmn-antioxidant-program': 'NMN点滴・抗氧化点滴的并用项目',
     
     // 血液净化
     'blood-purification': '5. 血液净化',
    'advanced-checkup-feature-2': '从一日完结型方案到带住宿的高级体检方案的灵活对应',
    'advanced-checkup-feature-3': '基于检查数据的个别健康战略提案',
    
    'japan-medical-travel': '日本医疗旅行',
    'standard-treatment': 'Ⅰ. 标准治疗（Conventional Cancer Therapy）',
    'main-treatments': '主要治疗内容',
    'comprehensive-cancer-treatment': 'Ⅱ. 癌症综合治疗（Comprehensive Cancer Therapy）',
    
    // 再生医疗
    'regenerative-medicine': '再生医疗',
    'main-service-areas': '主要服务领域',
    
    // 不孕治疗（生殖医疗）分野
    'fertility-treatment': '不孕治疗（生殖医疗）领域',
    'japan-fertility-support': 'Ⅰ. 外国人日本不孕治疗支援',
    'fertility-purpose': '目的：为希望接受技术力和安全性优秀的日本生殖医疗的外国患者，提供从治疗接受到滞在支持的一站式服务。',
    'main-support-content': '主要支援内容：',
    'medical-institution-selection': '医疗机构的选定・预约',
    'medical-institution-desc': '通过与国内首屈一指的不孕治疗专科诊所的合作，根据患者的希望・年龄・治疗史提案最适合的设施。',
    'online-consultation': '事前在线咨询／第二意见',
    'online-consultation-desc': '安排日本医师的在线诊疗，明确治疗方针・必要检查・费用估算。',
    'travel-stay-support': '赴日・滞在支持',
    'travel-stay-desc': '医疗滞在签证申请支援、机场接送、口译陪同、住宿・交通安排。',
    'treatment-support': '治疗支持',
    'treatment-support-desc': '取卵・冷冻・胚胎移植等治疗日程调整、检查口译、服药指导、治疗进展跟进。',
    'multilingual-support': '多语言支持',
    'multilingual-desc': '中文・英语・日语的三语言体制，确保患者与医疗机构间的顺畅沟通。',
    'characteristics': '特征：',
    'world-class-ivf': '世界最高水准的体外受精（IVF）・显微授精（ICSI）技术',
    'strict-quality': '严格的质量管理和伦理标准',
    'clear-pricing': '以保险外诊疗为前提的明确收费体系',
    'flexible-treatment': '年龄限制和卵子冷冻等，国家限制较少的灵活治疗方案',
    'taiwan-fertility-support': 'Ⅱ. 外国人・日本人台湾不孕治疗支援',
    'taiwan-purpose': '目的：为希望接受在日本受到法律・伦理限制的治疗（例：第三方卵子提供等）的患者，协调在台湾合法・高水准医疗机构的治疗。',
    'taiwan-main-support': '主要支援内容：',
    'partner-institution': '合作医疗机构介绍・预约',
    'partner-institution-desc': '介绍台湾政府认定的生殖医疗中心。',
    'doctor-counseling': '医师面谈・咨询的口译支持',
    'doctor-counseling-desc': '安排事前在线咨询＋现场口译陪同的面对面咨询。',
    'schedule-management': '治疗日程管理',
    'schedule-management-desc': '将取卵・胚胎培养・移植日程与日本的生活日程进行调整。',
    'legal-support': '法律支持',
    'legal-support-desc': '台湾当地的合同书制作・翻译、法令遵守的确认。',
    'taiwan-stay-support': '滞在支持',
    'taiwan-stay-desc': '签证、住宿、接送、生活支援、滞在期间的健康管理。',
    'after-follow': '后续跟进',
    'after-follow-desc': '治疗后的妊娠确认、日本国内的继续诊疗・分娩支持等全程陪伴。',
    'taiwan-features': '特征：',
    'third-party-egg': '第三方卵子提供合法・制度完善',
    'high-medical-standard': '医疗水准高，费用比日本低',
    'english-chinese': '可提供英语・中文医疗对应',
    'good-access': '从日本交通便利（3～4小时可到达）',
    'treatment-programs': '可提供的治疗项目例',
    'treatment-type': '治疗种类',
    'japan-travel': '日本赴日',
    'taiwan-travel': '台湾赴台',
    'general-fertility-test': '一般不孕检查・时机法',
    'artificial-insemination': '人工授精（AIH）',
    'ivf': '体外受精（IVF）',
    'icsi': '显微授精（ICSI）',
    'egg-sperm-freezing': '卵子・精子冷冻',
    'third-party-egg-donation': '第三方卵子提供',
    'surrogate-mother': '代理母',
    'gender-selection': '性别选择',
    'conditional': '有条件',
        'specific-conditions': '特定条件下',

        // 日本渡航治療の流れ
        'medical-travel-flow': '日本渡航治疗流程（Flow of Medical Travel to Japan）',
        'step-1': 'Step 1：咨询・初期咨询',
        'step-1-desc': '患者或介绍机构向IMC国际医疗咨询。',
        'step-1-content-1': '症状・希望治疗・目的（检查・治疗・再生医疗等）的询问',
        'step-1-content-2': '为医疗机构选定收集基本信息（年龄・诊断・过往治疗史等）',
        'step-1-content-3': '治疗可能性・大致费用・期间的介绍',
        'step-1-contact': '咨询方式：邮件・WeChat・LINE・在线表格',
        'step-2': 'Step 2：医疗协调・治疗计划提案',
        'step-2-desc': 'IMC与专业医疗机构合作，提案最适合的治疗方案。',
        'step-2-content-1': '医师事前审查（诊断书・检查结果的确认）',
        'step-2-content-2': '适当医疗机构的选定（大学医院・专科诊所等）',
        'step-2-content-3': '检查・治疗日程的制作',
        'step-2-content-4': '费用估算・滞在期间・必要文件的提示',
        'step-2-materials': '提供资料：治疗计划书（暂定）・估价书・赴日日程案',
        'step-3': 'Step 3：签证・赴日准备支持',
        'step-3-content-1': '医疗滞在签证的申请支援（IMC是已登记身份保证机构）',
        'step-3-content-2': '赴日日程・机票・住宿・口译安排',
        'step-3-content-3': '保险・翻译文件・医疗记录等的准备支持',
        'step-3-support': '日本入国时提供必要的全面支持。',
        'step-4': 'Step 4：抵达日本・开始治疗',
        'step-4-desc': 'IMC专属协调员在机场迎接，全程支持。',
        'step-4-content-1': '机场接送 → 住宿设施入住',
        'step-4-content-2': '初诊・检查・面谈的陪同口译',
        'step-4-content-3': '各治疗日程的管理（检查、手术、点滴、再生医疗等）',
        'step-4-content-4': '紧急时的应对体制',
        'step-4-languages': '口译对应语言：日语・中文・英语',
        'step-5': 'Step 5：治疗中支持',
        'step-5-content-1': '医疗现场的实时口译・辅助',
        'step-5-content-2': '医师咨询的陪同',
        'step-5-content-3': '治疗后的生活护理（饮食・移动・住宿支持）',
        'step-5-content-4': '定期进展报告・记录管理',
        'step-5-options': '选项：健康管理项目／营养指导／再生医疗并用',
        'step-6': 'Step 6：治疗完成・回国前跟进',
        'step-6-content-1': '最终诊断・结果报告书的多语言翻译',
        'step-6-content-2': '医师建议・今后治疗方针说明',
        'step-6-content-3': '回国后的护理方针・复诊日程提案',
        'step-6-content-4': '回国支持（机场接送・出国手续辅助）',
        'step-6-report': '多语言报告（中文・英语・日语）交付',
        'step-7': 'Step 7：回国后的后续跟进',
        'step-7-content-1': '通过在线诊疗进行经过观察',
        'step-7-content-2': '健检・检查数据的共享和分析',
        'step-7-content-3': '必要时再次赴日治疗的调整',
        'step-7-content-4': '健康管理・再生医疗方案的持续提案',
        'step-7-follow': '海外滞在中也可由日本专科医师持续跟进'
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
