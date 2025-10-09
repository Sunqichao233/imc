// 渲染模块 - 医生与医院数据渲染功能
class DataRenderer {
  constructor() {
    this.hospitalsData = [
      {img:'hospitals/tokyo_university_hospital.png', title:'東京大学附属病院'},
      {img:'hospitals/tokyo_womens_medical_university.png', title:'東京女子医科大学医院'},
      {img:'hospitals/juntendo_hospital.png', title:'順天堂医院'},
      {img:'hospitals/st_lukes_international_hospital.png', title:'聖路加国際病院'},
      {img:'hospitals/kameda_general_hospital.png', title:'亀田総合病院'},
      {img:'hospitals/gan_ken_ariake_hospital.png', title:'がん研有明病院'},
      {img:'hospitals/fujita_medical_university_tokyo.png', title:'藤田医科大学東京<br>先端医療研究センター'},
      {img:'hospitals/tokyo_medical_university_hospital.png', title:'東京医科大学病院'},
      {img:'hospitals/nihon_university_hospital.png', title:'日本大学医院'},
      {img:'hospitals/keio_university_hospital.png', title:'慶応義塾大学病院'},
      {img:'hospitals/tokyo_teishin_hospital.png', title:'東京逓信病院'},
      {img:'hospitals/yotsuya_medical_cube.png', title:'四谷メディカルキューブ'},
      {img:'hospitals/jikei_university_hospital.png', title:'東京慈恵会医科大学付属病院'},
      {img:'hospitals/ncgm_hospital.png', title:'国立国際医療研究センター病院'},
      {img:'hospitals/ncc_hospital.png', title:'国立がん研究センター'},
      {img:'hospitals/inouye_eye_hospital.png', title:'井上眼科医院'},
      {img:'hospitals/ntt_east_kanto_hospital.png', title:'NTT東日本 関東病院'},
      {img:'hospitals/cardiovascular_institute_hospital.png', title:'心臓血管研究所付属病院'},
      {img:'hospitals/tokyo_saiseikai_central_hospital.png', title:'東京都済生会中央病院'},
      {img:'hospitals/tokyo_medical_dental_university_hospital.png', title:'東京医科歯科大学病院'},
      {img:'hospitals/nippon_medical_school_hospital.png', title:'日本医科大学付属病院'},
      {img:'hospitals/shonan_kamakura_general_hospital.png', title:'湘南鎌倉病院'},
      {img:'hospitals/iuhw_mita_hospital.png', title:'国際医療福祉大学三田病院'},
      {img:'hospitals/toranomon_hospital.png', title:'虎ノ門医院'}
    ];
    
    this.doctorsData = [
      {
        name: '林 基弘',
        title: '',
        subtitle: 'ガンマナイフ治療 世界第一',
        position: '東京女子医科大学 脳神経外科 教授',
        specialty: 'ガンマナイフ（GammaKnife）、ZAP-X、頭蓋底腫瘍、脳動静脈奇形（AVM）、三叉神経痛など',
        image: 'doctors/hayashi_motohiro.png'
      },
      {
        name: '丸山 隆志',
        title: '',
        subtitle: '',
        position: '東京女子医科大学 脳神経外科 講師',
        specialty: '覚醒下悪性脳腫瘍（神経膠腫）手術、聴神経腫瘍手術、転移性脳腫瘍手術、脳腫瘍関連手術',
        image: 'doctors/maruyama_takashi.png'
      },
      {
        name: '新井 平伊',
        title: '',
        subtitle: '',
        position: '順天堂大学医学部 名誉教授',
        specialty: '精神科全般、老年精神科、リエゾン精神医学、早発性アルツハイマー病専門外来',
        image: 'doctors/arai_heii.png'
      },
      {
        name: '藍原 康雄',
        title: '',
        subtitle: '',
        position: '東京女子医科大学 脳神経外科 准教授',
        specialty: '小児脳腫瘍（胚胎性腫瘍、良性腫瘍、膠腫／星状細胞腫などの悪性腫瘍、脳幹部腫瘍）、水頭症、脊髄腫瘍、小児もやもや病 など',
        image: 'doctors/aihara_yasuo.png'
      },
      {
        name: '川島 明次',
        subtitle: '',
        position: '聖路加国際病院 脳神経外科 部長',
        specialty: '脳血管疾患（動脈瘤、脳出血）、頭蓋底腫瘍手術、もやもや病、頸動脈狭窄症',
        image: 'doctors/kawashima_akitsugu.png'
      },
      {
        name: '畑山 徹',
        subtitle: '',
        position: '水戸心脳疾患治療センター 院長',
        specialty: '脳卒中、脳腫瘍治療、顔面神経痛、痙攣、三叉神経痛 など',
        image: 'doctors/hatayama_toru.png'
      },
      {
        name: '明星 智洋',
        subtitle: '',
        position: '江戸川病院 副院長',
        specialty: '腫瘍薬物療法（抗がん剤治療）、血液疾患（良性・悪性）、感染症管理、免疫療法',
        image: 'doctors/myojo_tomohiro.png'
      },
      {
        name: '小笠原 均',
        subtitle: '',
        position: 'JTK国際クリニック 院長',
        specialty: '総合内科、膠原病、がん免疫療法、リウマチ、糖尿病、漢方内科',
        image: 'doctors/ogasawara_hitoshi.png'
      },
      {
        name: '田中 紘一',
        subtitle: '',
        position: '京都大学医学部附属病院 前院長',
        specialty: '消化器外科、一般外科、小児外科、臓器移植、病理診断',
        image: 'doctors/tanaka_koichi.png'
      },
      {
        name: '高橋 克仁',
        subtitle: '',
        position: '亀田総合病院 肉腫総合治療センター 主任／日本肉腫学会 理事長',
        specialty: '希少がん、肉腫、がんゲノム医療',
        image: 'doctors/takahashi_katsuhito.png'
      },
      {
        name: '福間 英祐',
        subtitle: '',
        position: '亀田総合病院 乳腺科 上席主任',
        specialty: '乳がん治療、乳腺内視鏡下手術、乳腺画像診断、冷凍療法',
        image: 'doctors/fukuma_eisuke.png'
      },
      {
        name: '安倍 弘和',
        subtitle: '',
        position: '亀田総合病院 泌尿器科 主任',
        specialty: '泌尿器科・膀胱癌 日本の権威',
        image: 'doctors/Abe_Hirokazu.png'
      },
      {
        name: '野田 真永',
        subtitle: '',
        position: '放射線腫瘍治療名医',
        specialty: '放射線腫瘍治療（重粒子線、陽子線、サイバーナイフ）、免疫細胞療法',
        image: 'doctors/noda_manei.png'
      }
    ];
  }
  
  // 渲染医院列表
  renderHospitals() {
    console.log('渲染医院列表...');
    
    const row = document.getElementById('hospitalRow');
    if (!row) {
      console.error('找不到hospitalRow元素');
      return;
    }
    
    try {
      row.innerHTML = this.hospitalsData.map(hospital => `
        <article class="card hospital-card flex-shrink-0">
          <div class="hospital-thumb">
            <img src="${hospital.img}" 
                 alt="${hospital.title}" 
                 class="w-100 h-100 object-fit-cover" 
                 loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="hospital-placeholder" style="display:none;">
              <div class="placeholder-content">
                <i class="fas fa-hospital"></i>
                <span>医療機関</span>
              </div>
            </div>
          </div>
          <div class="card-body py-2">
            <h3 class="hospital-title text-center mb-0">${hospital.title}</h3>
          </div>
        </article>
      `).join('');
      
      console.log(`已渲染 ${this.hospitalsData.length} 个医院`);
    } catch (error) {
      console.error('渲染医院列表时出错:', error);
    }
  }
  
  // 渲染医师列表
  renderDoctors() {
    console.log('渲染医师列表...');
    
    const grid = document.getElementById('doctorsGrid');
    if (!grid) {
      console.error('找不到doctorsGrid元素');
      return;
    }
    
    try {
      grid.innerHTML = this.doctorsData.map(doctor => `
        <div class="col-lg-4 col-md-6">
          <div class="card-imc card-imc-doctor h-100">
            <div class="doctor-image-placeholder">
              <img src="${doctor.image}" 
                   alt="${doctor.name}" 
                   class="doctor-image" 
                   loading="lazy" 
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="doctor-placeholder" style="display:none;">
                <i class="fas fa-user-md"></i>
                <span>医師写真</span>
              </div>
            </div>
            <div class="doctor-info">
              <h3 class="doctor-name">${doctor.name}</h3>
              <div class="doctor-title">${doctor.title}</div>
              ${doctor.subtitle ? `<div class="doctor-subtitle">${doctor.subtitle}</div>` : ''}
              <div class="doctor-position">${doctor.position}</div>
              <div class="doctor-specialty">
                <strong>専門：</strong>${doctor.specialty}
              </div>
            </div>
          </div>
        </div>
      `).join('');
      
      console.log(`已渲染 ${this.doctorsData.length} 位医师`);
    } catch (error) {
      console.error('渲染医师列表时出错:', error);
    }
  }
  
  // 渲染所有数据
  renderAll() {
    this.renderHospitals();
    this.renderDoctors();
  }
  
  // 添加医院数据
  addHospital(hospitalData) {
    if (this.validateHospitalData(hospitalData)) {
      this.hospitalsData.push(hospitalData);
      this.renderHospitals();
      return true;
    }
    return false;
  }
  
  // 添加医师数据
  addDoctor(doctorData) {
    if (this.validateDoctorData(doctorData)) {
      this.doctorsData.push(doctorData);
      this.renderDoctors();
      return true;
    }
    return false;
  }
  
  // 验证医院数据
  validateHospitalData(data) {
    return data && 
           typeof data.img === 'string' && 
           typeof data.title === 'string' && 
           data.img.length > 0 && 
           data.title.length > 0;
  }
  
  // 验证医师数据
  validateDoctorData(data) {
    return data && 
           typeof data.name === 'string' && 
           typeof data.title === 'string' && 
           typeof data.position === 'string' && 
           typeof data.specialty === 'string' && 
           typeof data.image === 'string' && 
           data.name.length > 0 && 
           data.title.length > 0 && 
           data.position.length > 0 && 
           data.specialty.length > 0 && 
           data.image.length > 0;
  }
  
  // 获取医院数据
  getHospitalsData() {
    return [...this.hospitalsData];
  }
  
  // 获取医师数据
  getDoctorsData() {
    return [...this.doctorsData];
  }
  
  // 根据索引更新医院数据
  updateHospital(index, hospitalData) {
    if (index >= 0 && index < this.hospitalsData.length && this.validateHospitalData(hospitalData)) {
      this.hospitalsData[index] = hospitalData;
      this.renderHospitals();
      return true;
    }
    return false;
  }
  
  // 根据索引更新医师数据
  updateDoctor(index, doctorData) {
    if (index >= 0 && index < this.doctorsData.length && this.validateDoctorData(doctorData)) {
      this.doctorsData[index] = doctorData;
      this.renderDoctors();
      return true;
    }
    return false;
  }
  
  // 根据索引删除医院
  removeHospital(index) {
    if (index >= 0 && index < this.hospitalsData.length) {
      this.hospitalsData.splice(index, 1);
      this.renderHospitals();
      return true;
    }
    return false;
  }
  
  // 根据索引删除医师
  removeDoctor(index) {
    if (index >= 0 && index < this.doctorsData.length) {
      this.doctorsData.splice(index, 1);
      this.renderDoctors();
      return true;
    }
    return false;
  }
  
  // 搜索医院
  searchHospitals(keyword) {
    if (!keyword) return this.hospitalsData;
    
    const lowerKeyword = keyword.toLowerCase();
    return this.hospitalsData.filter(hospital => 
      hospital.title.toLowerCase().includes(lowerKeyword)
    );
  }
  
  // 搜索医师
  searchDoctors(keyword) {
    if (!keyword) return this.doctorsData;
    
    const lowerKeyword = keyword.toLowerCase();
    return this.doctorsData.filter(doctor => 
      doctor.name.toLowerCase().includes(lowerKeyword) ||
      doctor.title.toLowerCase().includes(lowerKeyword) ||
      doctor.position.toLowerCase().includes(lowerKeyword) ||
      doctor.specialty.toLowerCase().includes(lowerKeyword)
    );
  }
}

// 导出DataRenderer类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataRenderer;
} else {
  window.DataRenderer = DataRenderer;
}
