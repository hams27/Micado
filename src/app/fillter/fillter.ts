
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../products';
import { FormsModule } from '@angular/forms';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.html',
  styleUrls: ['./fillter.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavBar, Footer]
})
export class Fillter implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  // ==================== تصنيفات المنتجات ====================
  mainCategories: string[] = [];
  subCategoriesMap: { [key: string]: string[] } = {};
  subSubCategoriesMap: { [key: string]: string[] } = {};

  selectedMains: string[] = [];
  selectedSubs: { [key: string]: string[] } = {};
  selectedSubSubs: { [key: string]: string[] } = {};

  // ==================== العلامات التجارية ====================
  allBrands: string[] = [];
  selectedBrands: string[] = [];

  brandMainMap: { [brandName: string]: string[] } = {};
  brandSubMap: { [brandMain: string]: string[] } = {};
  brandSubSubMap: { [brandSub: string]: string[] } = {};

  selectedBrandMains: { [brandName: string]: string[] } = {};
  selectedBrandSubs: { [brandMain: string]: string[] } = {};
  selectedBrandSubSubs: { [brandSub: string]: string[] } = {};

  // ==================== مودال الصور ====================
  selectedProduct: Product | null = null;
  currentImageIndex: number = 0;

  // ==================== حالة تحديد الكل ====================
  allSelected: boolean = false;

  // ======= خصائص المنتجات الديناميكية =======
  productSpecsConfig = [
    // ===== بيانات أساسية =====
    { key: 'modelName', label: 'الموديل' },
    { key: 'brand', label: 'العلامة التجارية' },
    { key: 'seriesName', label: 'اسم السلسلة' },
    { key: 'madeIn', label: 'بلد الصنع' },
    { key: 'placeOfOrigin', label: 'بلد المنشأ' },
    { key: 'manufacturingYear', label: 'سنة الصنع' },
    { key: 'certification', label: 'الشهادات' },
    { key: 'standards', label: 'الشهادات والمعايير' },
    { key: 'standard', label: 'المعايير' },

    // ===== المحرك =====
    { key: 'engineBrand', label: 'ماركة المحرك' },
    { key: 'engineManufacturerBrand', label: 'الشركة المصنعة للمحرك' },
    { key: 'engineModel', label: 'موديل المحرك' },
    { key: 'engineType', label: 'نوع المحرك' },
    { key: 'powerType', label: 'نوع المحرك' },
    { key: 'displacement', label: 'سعة المحرك' },
    { key: 'engineDisplacement', label: 'سعة المحرك' },
    { key: 'cylinderDiameter', label: 'قطر الأسطوانة' },
    { key: 'boreXStroke', label: 'القطر × الشوط' },
    { key: 'bore_stroke', label: 'قطر المكبس × الشوط' },
    { key: 'boreStroke', label: 'قطر المكبس × الشوط' },
    { key: 'compressionRatio', label: 'نسبة الانضغاط' },
    { key: 'continuousOutput', label: 'الخرج المستمر' },
    { key: 'enginePower', label: 'قوة المحرك' },
    { key: 'engineSpeed', label: 'سرعة المحرك' },
    { key: 'relevantSpeed', label: 'السرعة' },
    { key: 'ratedSpeed', label: 'السرعة المقننة' },
    { key: 'maxEngineSpeed', label: 'أقصى سرعة للمحرك' },
    { key: 'power', label: 'القدرة' },
    { key: 'torque', label: 'عزم الدوران' },
    { key: 'maxTorque', label: 'عزم الدوران الأقصى' },

    // ===== التشغيل =====
    { key: 'startingSystem', label: 'نظام التشغيل' },
    { key: 'startingMethod', label: 'طريقة التشغيل' },
    { key: 'startingType', label: 'نوع التشغيل' },
    { key: 'electricStart', label: 'نظام التشغيل' },
    { key: 'battery', label: 'البطارية' },
    { key: 'startingBatteryModel', label: 'موديل بطارية التشغيل' },
    { key: 'ignitionSystem', label: 'نظام الإشعال' },
    { key: 'ignition', label: 'نظام الإشعال' },
    { key: 'sparkPlug', label: 'شمعة الإشعال' },

    // ===== الكهرباء - القدرة =====
    { key: 'ratedPower', label: 'القدرة المقننة' },
    { key: 'ratedOutput', label: 'الخرج المقنن' },
    { key: 'acRatedOutput', label: 'القدرة المقننة AC' },
    { key: 'acRatedOutput50Hz', label: 'القدرة المقننة AC عند 50 هرتز' },
    { key: 'acRatedOutput60Hz', label: 'القدرة المقننة AC عند 60 هرتز' },
    { key: 'maxOutput', label: 'الخرج الأقصى' },
    { key: 'acMaxOutput', label: 'القدرة القصوى AC' },
    { key: 'acMaxOutput50Hz', label: 'القدرة القصوى AC عند 50 هرتز' },
    { key: 'acMaxOutput60Hz', label: 'القدرة القصوى AC عند 60 هرتز' },
    { key: 'peakPower', label: 'القدرة القصوى' },
    { key: 'powerOutput', label: 'القدرة الخارجة' },
    { key: 'outputPower', label: 'القدرة الخارجة' },
    { key: 'ratedPowerOutput', label: 'القدرة الاحتياطية' },
    { key: 'ratedOutputPowerRpm', label: 'القدرة / السرعة' },

    // ===== الكهرباء - الجهد والتيار =====
    { key: 'ratedVoltage', label: 'الجهد المقنن' },
    { key: 'ratedACVoltage', label: 'جهد التيار المتردد المقنن' },
    { key: 'operatingVoltage', label: 'جهد التشغيل' },
    { key: 'voltage', label: 'الجهد' },
    { key: 'ratedCurrent', label: 'التيار المقنن' },
    { key: 'acOutput', label: 'خرج التيار المتردد' },
    { key: 'dcOutput', label: 'خرج التيار المستمر DC' },
    { key: 'ratedDcOutput', label: 'خرج التيار المستمر DC' },

    // ===== الكهرباء - التردد والفاز =====
    { key: 'frequency', label: 'التردد' },
    { key: 'FequencyHZ', label: 'التردد (HZ)' },
    { key: 'ratedFrequency', label: 'التردد المقنن' },
    { key: 'phaseType', label: 'نوع الفاز' },
    { key: 'phase', label: 'الفاز' },
    { key: 'powerFactor', label: 'معامل القدرة' },
    { key: 'ratedPowerFactor', label: 'عامل القدرة المقنن' },

    // ===== مولدات - مكونات كهربائية =====
    { key: 'alternator', label: 'المولد الكهربائي' },
    { key: 'alternatorType', label: 'نوع المولد الكهربائي' },
    { key: 'alternatorWinding', label: 'ملفات المولد' },
    { key: 'generatorType', label: 'نوع المولد' },
    { key: 'generatingSet', label: 'مجموعة التوليد' },
    { key: 'avr', label: 'منظم الجهد (AVR)' },
    { key: 'voltageRegulator', label: 'منظم الجهد' },
    { key: 'voltMeter', label: 'فولتميتر' },
    { key: 'controlPanel', label: 'لوحة التحكم' },
    { key: 'parallelOperation', label: 'التشغيل على التوازي' },
    { key: 'parallelFunction', label: 'خاصية التشغيل المتوازي' },

    // ===== الوقود والزيت =====
    { key: 'fuelType', label: 'نوع الوقود' },
    { key: 'fuel', label: 'نوع الوقود' },
    { key: 'dualFuel', label: 'الوقود المزدوج' },
    { key: 'fuelTankCapacity', label: 'سعة خزان الوقود' },
    { key: 'fuelCapacity', label: 'سعة الوقود' },
    { key: 'fuelTankVolume', label: 'سعة خزان الوقود' },
    { key: 'effectiveFuelTankCapacity', label: 'السعة الفعلية للوقود' },
    { key: 'fuelMixtureRatio', label: 'نسبة خلط الوقود' },
    { key: 'fuelConsumption', label: 'استهلاك الوقود' },
    { key: 'fuelConsumptionRate', label: 'معدل استهلاك الوقود' },
    { key: 'combustionSystem', label: 'نظام الاحتراق' },
    { key: 'engineOilCapacity', label: 'سعة زيت المحرك' },
    { key: 'oilCapacity', label: 'سعة الزيت' },
    { key: 'oilVolume', label: 'سعة الزيت' },
    { key: 'lubricantCapacity', label: 'سعة زيت التشحيم' },
    { key: 'lubricationOilVolume', label: 'حجم زيت التزليق' },
    { key: 'chainOil', label: 'زيت السلسلة' },
    { key: 'chainOilCapacity', label: 'سعة زيت السلسلة' },
    { key: 'oilTankCapacity', label: 'سعة خزان الزيت' },
    { key: 'oilAlertSystem', label: 'نظام تنبيه الزيت' },
    { key: 'oilAlertLamp', label: 'مصباح تنبيه الزيت' },
    { key: 'oilFeedingSystem', label: 'نظام تغذية الزيت' },

    // ===== التبريد =====
    { key: 'coolingSystem', label: 'نظام التبريد' },
    { key: 'coolingType', label: 'نوع التبريد' },
    { key: 'coolingClass', label: 'درجة الحماية' },
    { key: 'type2', label: 'نوع التبريد' },
    { key: 'airFilter', label: 'فلتر الهواء' },
    { key: 'maxAirFlow', label: 'أقصى تدفق هواء' },

    // ===== الأداء والتشغيل =====
    { key: 'continuousAt50Load', label: 'تشغيل مستمر عند 50٪ حمل' },
    { key: 'continuousAt100Load', label: 'تشغيل مستمر عند 100٪ حمل' },
    { key: 'continuousWork', label: 'وقت العمل المستمر' },
    { key: 'continuousWorkingTime', label: 'وقت العمل المستمر' },
    { key: 'continuousWorkHours', label: 'ساعات العمل المستمر' },
    { key: 'continuousOperatingHours50Hz', label: 'ساعات التشغيل المستمر (50 هرتز)' },
    { key: 'continuousOperatingHours60Hz', label: 'ساعات التشغيل المستمر (60 هرتز)' },
    { key: 'runningHour25', label: 'ساعات التشغيل (حمل 25%)' },
    { key: 'runningHour75', label: 'ساعات التشغيل (حمل 75%)' },

    // ===== الضوضاء =====
    { key: 'soundNoiseLevel', label: 'مستوى الضوضاء' },
    { key: 'noiseLevel', label: 'مستوى الضوضاء' },
    { key: 'noise', label: 'مستوى الضوضاء' },
    { key: 'noiseLevel100Load50Hz', label: 'مستوى الضوضاء (حمل 100٪ - 50 هرتز)' },
    { key: 'noiseLevel100Load60Hz', label: 'مستوى الضوضاء (حمل 100٪ - 60 هرتز)' },
    { key: 'noiseLevel7m0Load50Hz', label: 'مستوى الضوضاء (7م - بدون حمل - 50 هرتز)' },
    { key: 'noiseLevel7m0Load60Hz', label: 'مستوى الضوضاء (7م - بدون حمل - 60 هرتز)' },

    // ===== الأبعاد والوزن =====
    { key: 'dimensions', label: 'الأبعاد' },
    { key: 'length', label: 'الأبعاد (عرض)' },
    { key: 'packageSize', label: 'حجم العبوة' },
    { key: 'packingSize', label: 'حجم التعبئة' },
    { key: 'packingDimensions', label: 'أبعاد التغليف' },
    { key: 'packageDimension', label: 'أبعاد التغليف' },
    { key: 'dryWeight', label: 'الوزن الجاف' },
    { key: 'netWeight', label: 'الوزن الصافي' },
    { key: 'grossWeight', label: 'الوزن الإجمالي' },
    { key: 'weight', label: 'الوزن' },
    { key: 'mass', label: 'الكتلة' },
    { key: 'weightWithBarAndChain', label: 'الوزن مع السيف والسلسلة' },
    { key: 'boxWeight', label: 'وزن الصندوق' },
    { key: 'container20ft', label: 'عدد الوحدات في حاوية 20 قدم' },
    { key: 'containerLoading40HQ', label: 'الحمولة في حاوية 40HQ' },

    // ===== مضخات المياه =====
    { key: 'pumpType', label: 'نوع المضخة' },
    { key: 'inletOutlet', label: 'المدخل / المخرج' },
    { key: 'inletAndOutlet', label: 'المدخل والمخرج' },
    { key: 'inletOutletDiameter', label: 'قطر المدخل والمخرج' },
    { key: 'inletDiameter', label: 'قطر المدخل' },
    { key: 'outletDiameter', label: 'قطر المخرج' },
    { key: 'diameter', label: 'القطر' },
    { key: 'connectionInlet', label: 'توصيل المدخل' },
    { key: 'connectionOutlet', label: 'توصيل المخرج' },
    { key: 'suction', label: 'عمق الشفط' },
    { key: 'maxSuctionHead', label: 'أقصى رأس شفط' },
    { key: 'lift', label: 'ارتفاع الرفع' },
    { key: 'maxDeliveryHead', label: 'أقصى رأس توصيل' },
    { key: 'totalHead', label: 'الارتفاع الكلي' },
    { key: 'flow', label: 'معدل التدفق' },
    { key: 'flowRate', label: 'معدل التدفق' },
    { key: 'maxFlowRate', label: 'أقصى معدل تدفق' },
    { key: 'deliveryVolume', label: 'حجم التدفق' },
    { key: 'selfSuctionTime', label: 'وقت الشفط الذاتي' },
    { key: 'impurityRatio', label: 'نسبة الشوائب' },
    { key: 'particleDiameter', label: 'قطر الجسيمات' },

    // ===== مولدات لحام =====
    { key: 'weldingCurrentRange', label: 'مدى تيار اللحام' },
    { key: 'weldingNoLoadVoltage', label: 'جهد اللحام بدون حمل' },
    { key: 'weldingVoltage', label: 'جهد اللحام' },
    { key: 'weldingRatedCurrent', label: 'تيار اللحام المقنن' },
    { key: 'currentAdjustmentRange', label: 'مدى ضبط التيار' },
    { key: 'adjustableRangeOfCurrent', label: 'نطاق التيار القابل للتعديل' },
    { key: 'weldingEfficiency', label: 'كفاءة اللحام' },
    { key: 'diameterOfElectrode', label: 'قطر القطب' },

    // ===== حراثات =====
    { key: 'drivingMode', label: 'نظام القيادة' },
    { key: 'driveMethod', label: 'طريقة الحركة' },
    { key: 'gearbox', label: 'علبة التروس' },
    { key: 'rotorSpeed', label: 'سرعة الدوار' },
    { key: 'tillingDepth', label: 'عمق الحراثة' },
    { key: 'tillingWidth', label: 'عرض الحراثة' },
    { key: 'bladesType', label: 'نوع الشفرات' },

    // ===== ماكينات جز العشب =====
    { key: 'cuttingWidth', label: 'عرض القص' },
    { key: 'cuttingHeightSteps', label: 'عدد درجات ارتفاع القص' },
    { key: 'cuttingHeightMinMax', label: 'ارتفاع القص (أدنى / أقصى)' },
    { key: 'wheelFrontSize', label: 'حجم العجلة الأمامية' },
    { key: 'wheelRearSize', label: 'حجم العجلة الخلفية' },
    { key: 'catcherMaterial', label: 'مادة جامع العشب' },
    { key: 'catcherCapacity', label: 'سعة جامع العشب' },

    // ===== مناشير =====
    { key: 'standardBarLengths', label: 'أطوال السيف القياسية' },
    { key: 'chainPitch', label: 'خطوة السلسلة' },
    { key: 'chainGauge', label: 'مقياس السلسلة' },
    { key: 'carburetor', label: 'نوع الكربراتير' },
    { key: 'carburetorType', label: 'نوع الكربراتير' },
    { key: 'cuttingHead', label: 'رأس القطع' },
    { key: 'guideBar', label: 'قضيب التوجيه' },
    { key: 'sawChain', label: 'سلسلة المنشار' },

    // ===== رشاشات ومرشات =====
    { key: 'chemistTankCapacity', label: 'سعة خزان الكيماويات' },
    { key: 'sprayerCapacity', label: 'سعة الرشاش' },
    { key: 'sprayingRPM', label: 'سرعة الرش' },
    { key: 'sprayingSuction', label: 'معدل السحب (رش)' },
    { key: 'sprayingPressure', label: 'ضغط الرش' },
    { key: 'irrigationRPM', label: 'سرعة الري' },
    { key: 'irrigationSuction', label: 'معدل السحب (ري)' },
    { key: 'irrigationPressure', label: 'ضغط الري' },

    // ===== خلاطات الخرسانة =====
    { key: 'mixerType', label: 'نوع الخلاطة' },
    { key: 'poweredBy', label: 'مدعوم بواسطة' },
    { key: 'powerSource', label: 'مصدر الطاقة' },
    { key: 'speed', label: 'السرعة' },

    // ===== هزازات خرسانة =====
    { key: 'shaftRotateSpeed', label: 'سرعة دوران العمود' },
    { key: 'vibrationHead', label: 'رأس الاهتزاز' },
    { key: 'amplitude', label: 'سعة الاهتزاز' },
    { key: 'vibration', label: 'عدد الاهتزازات' },
    { key: 'horsepower', label: 'القدرة (حصان)' },

    // ===== مواصفات فنية إضافية =====
    { key: 'insulationLevel', label: 'مستوى العزل' },
    { key: 'performanceClass', label: 'فئة الأداء' },
    { key: 'maxAmbientTemp', label: 'أقصى درجة حرارة' },
    { key: 'maxAltitude', label: 'أقصى ارتفاع تشغيل' },
    { key: 'ipRating', label: 'تصنيف IP' },
    { key: 'qualityClass', label: 'فئة الجودة' },
    { key: 'specification', label: 'المواصفات' },

    // ===== مميزات ولوحات إضافية =====
    { key: 'features', label: 'المميزات' },
    { key: 'basicFeatures', label: 'المميزات الأساسية' },
    { key: 'standardFeatures', label: 'المميزات القياسية' },
    { key: 'optionalFeatures', label: 'المميزات الاختيارية' },
    { key: 'additionalFeatures', label: 'المميزات الإضافية' },
    { key: 'pilotLamp', label: 'لمبة البيان' },
    { key: 'overLoadWarningLamp', label: 'مصباح تحذير الحمل الزائد' },
    { key: 'wheelHandleBar', label: 'عجلات ومقبض' },
    { key: 'wheels', label: 'العجلات' },

    // ===== متفرقات =====
    { key: 'type', label: 'النوع' },
    { key: 'sizes', label: 'المقاسات المتاحة' },
  ];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.filteredProducts = [...this.products];

    // تجهيز التصنيفات
    this.mainCategories = Array.from(
      new Set(this.products.map(p => p.mainCategory).filter(Boolean))
    ) as string[];

    this.products.forEach(p => {
      if (p.mainCategory && p.subCategory) {
        this.subCategoriesMap[p.mainCategory] ??= [];
        if (!this.subCategoriesMap[p.mainCategory].includes(p.subCategory)) {
          this.subCategoriesMap[p.mainCategory].push(p.subCategory);
        }
      }

      if (p.subCategory && p.subSubCategory) {
        this.subSubCategoriesMap[p.subCategory] ??= [];
        if (!this.subSubCategoriesMap[p.subCategory].includes(p.subSubCategory)) {
          this.subSubCategoriesMap[p.subCategory].push(p.subSubCategory);
        }
      }
    });

    // تجهيز البراندات
    this.allBrands = Array.from(
      new Set(this.products.map(p => p.brand).filter(Boolean))
    ) as string[];

    this.products.forEach(p => {
      if (!p.brand) return;

      if (p.brandMain) {
        this.brandMainMap[p.brand] ??= [];
        if (!this.brandMainMap[p.brand].includes(p.brandMain)) {
          this.brandMainMap[p.brand].push(p.brandMain);
        }
      }

      if (p.brandMain && p.brandSub) {
        this.brandSubMap[p.brandMain] ??= [];
        if (!this.brandSubMap[p.brandMain].includes(p.brandSub)) {
          this.brandSubMap[p.brandMain].push(p.brandSub);
        }
      }

      if (p.brandSub && p.brandSubSub) {
        this.brandSubSubMap[p.brandSub] ??= [];
        if (!this.brandSubSubMap[p.brandSub].includes(p.brandSubSub)) {
          this.brandSubSubMap[p.brandSub].push(p.brandSubSub);
        }
      }
    });
  }

  // ==================== Toggle الكل ====================
  toggleAll(event: any) {
    this.allSelected = event.target.checked;
    if (this.allSelected) {
      this.filteredProducts = [...this.products];
      this.selectedMains = this.products.map(p => p.mainCategory).filter(Boolean);
      this.selectedSubs = {};
      this.selectedSubSubs = {};
      this.selectedBrands = [];
      this.selectedBrandMains = {};
      this.selectedBrandSubs = {};
      this.selectedBrandSubSubs = {};
    } else {
      this.applyFilters();
    }
  }

  // ==================== Toggle تصنيفات المنتجات ====================
  toggleMain(main: string, event: any) {
    if (event.target.checked) {
      this.selectedMains.push(main);
    } else {
      this.selectedMains = this.selectedMains.filter(m => m !== main);
      delete this.selectedSubs[main];
    }
    this.applyFilters();
  }

  toggleSub(main: string, sub: string, event: any) {
    this.selectedSubs[main] ??= [];

    if (event.target.checked) {
      this.selectedSubs[main].push(sub);
    } else {
      this.selectedSubs[main] = this.selectedSubs[main].filter(s => s !== sub);
      delete this.selectedSubSubs[sub];
    }
    this.applyFilters();
  }

  toggleSubSub(sub: string, subSub: string, event: any) {
    this.selectedSubSubs[sub] ??= [];

    if (event.target.checked) {
      this.selectedSubSubs[sub].push(subSub);
    } else {
      this.selectedSubSubs[sub] = this.selectedSubSubs[sub].filter(s => s !== subSub);
    }
    this.applyFilters();
  }

  // ==================== Toggle البراندات ====================
  toggleBrand(brandName: string, event: any) {
    if (event.target.checked) {
      this.selectedBrands.push(brandName);
    } else {
      this.selectedBrands = this.selectedBrands.filter(b => b !== brandName);
      delete this.selectedBrandMains[brandName];
    }
    this.applyFilters();
  }

  toggleBrandMain(brandName: string, main: string, event: any) {
    this.selectedBrandMains[brandName] ??= [];

    if (event.target.checked) {
      this.selectedBrandMains[brandName].push(main);
    } else {
      this.selectedBrandMains[brandName] = this.selectedBrandMains[brandName].filter(m => m !== main);
      delete this.selectedBrandSubs[main];
    }
    this.applyFilters();
  }

  toggleBrandSub(main: string, sub: string, event: any) {
    this.selectedBrandSubs[main] ??= [];

    if (event.target.checked) {
      this.selectedBrandSubs[main].push(sub);
    } else {
      this.selectedBrandSubs[main] = this.selectedBrandSubs[main].filter(s => s !== sub);
      delete this.selectedBrandSubSubs[sub];
    }
    this.applyFilters();
  }

  toggleBrandSubSub(sub: string, subSub: string, event: any) {
    this.selectedBrandSubSubs[sub] ??= [];

    if (event.target.checked) {
      this.selectedBrandSubSubs[sub].push(subSub);
    } else {
      this.selectedBrandSubSubs[sub] = this.selectedBrandSubSubs[sub].filter(s => s !== subSub);
    }
    this.applyFilters();
  }

  // ==================== الفلترة ====================
  applyFilters() {
    this.filteredProducts = this.products.filter(p => {
      const main = p.mainCategory;
      const sub = p.subCategory;
      const subSub = p.subSubCategory;

      const matchMain = !this.selectedMains.length || (main && this.selectedMains.includes(main));
      const matchSub = !Object.keys(this.selectedSubs).length || (main && sub && this.selectedSubs[main]?.includes(sub));
      const matchSubSub = !Object.keys(this.selectedSubSubs).length || (sub && subSub && this.selectedSubSubs[sub]?.includes(subSub));

      const matchBrand = !this.selectedBrands.length || (p.brand && this.selectedBrands.includes(p.brand));
      const matchBrandMain = !Object.keys(this.selectedBrandMains).length || 
        (p.brand && p.brandMain && this.selectedBrandMains[p.brand]?.includes(p.brandMain));
      const matchBrandSub = !Object.keys(this.selectedBrandSubs).length || 
        (p.brandMain && p.brandSub && this.selectedBrandSubs[p.brandMain]?.includes(p.brandSub));
      const matchBrandSubSub = !Object.keys(this.selectedBrandSubSubs).length || 
        (p.brandSub && p.brandSubSub && this.selectedBrandSubSubs[p.brandSub]?.includes(p.brandSubSub));

      return matchMain && matchSub && matchSubSub && 
             matchBrand && matchBrandMain && matchBrandSub && matchBrandSubSub;
    });
  }

  // ==================== مودال الصور ====================
  openModal(product: Product) {
    this.selectedProduct = product;
    this.currentImageIndex = 0;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  nextImage() {
    if (!this.selectedProduct?.images) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProduct.images.length;
  }

  prevImage() {
    if (!this.selectedProduct?.images) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedProduct.images.length) % this.selectedProduct.images.length;
  }
}
