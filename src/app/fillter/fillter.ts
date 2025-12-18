import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService, Product } from '../products';
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
  showFilterPopup = false;

  toggleFilter() {
    this.showFilterPopup = !this.showFilterPopup;
  }
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

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // جلب كل المنتجات
    this.products = this.productsService.getAllProducts();

    // تجهيز التصنيفات الرئيسية
    this.mainCategories = Array.from(new Set(this.products.map(p => p.mainCategory).filter(Boolean)));

    // تجهيز التصنيفات الفرعية
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
    this.allBrands = Array.from(new Set(this.products.map(p => p.brand).filter(Boolean)));
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

    // قراءة query param mainCategory لتصفية المنتجات مباشرة
    this.route.queryParams.subscribe(params => {
      const mainCat = params['mainCategory'];
      if (mainCat) {
        this.filteredProducts = this.productsService.getByMainCategory(mainCat);
        this.selectedMains = [mainCat];
      } else {
        this.filteredProducts = [...this.products];
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

  // ==================== Toggle التصنيفات ====================
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
  { key: 'compressionRatio', label: 'نسبة الانضغاط' },
  { key: 'continuousOutput', label: 'الخرج المستمر' },
  { key: 'enginePower', label: 'قوة المحرك' },
  { key: 'engineSpeed', label: 'سرعة المحرك' },

  // ===== التشغيل =====
  { key: 'startingSystem', label: 'نظام التشغيل' },
  { key: 'startingMethod', label: 'طريقة التشغيل' },
  { key: 'startingType', label: 'نوع التشغيل' },
  { key: 'electricStart', label: 'نظام التشغيل الكهربائي' },
  { key: 'battery', label: 'البطارية' },
  { key: 'startingBatteryModel', label: 'موديل بطارية التشغيل' },
  { key: 'ignitionSystem', label: 'نظام الإشعال' },
  { key: 'sparkPlug', label: 'شمعة الإشعال' },

  // ===== الكهرباء - القدرة =====
  { key: 'ratedPower', label: 'القدرة المقننة' },
  { key: 'ratedOutput', label: 'الخرج المقنن' },
  { key: 'acRatedOutput', label: 'القدرة المقننة AC' },
  { key: 'acMaxOutput', label: 'القدرة القصوى AC' },

  // ===== الكهرباء - الجهد والتيار =====
  { key: 'ratedVoltage', label: 'الجهد المقنن' },
  { key: 'ratedCurrent', label: 'التيار المقنن' },
  { key: 'acOutput', label: 'خرج التيار المتردد' },
  { key: 'dcOutput', label: 'خرج التيار المستمر DC' },

  // ===== الكهرباء - التردد والفاز =====
  { key: 'frequency', label: 'التردد' },
  { key: 'phaseType', label: 'نوع الفاز' },
  { key: 'powerFactor', label: 'معامل القدرة' },

  // ===== مولدات - مكونات كهربائية =====
  { key: 'alternator', label: 'المولد الكهربائي' },
  { key: 'alternatorType', label: 'نوع المولد' },
  { key: 'avr', label: 'منظم الجهد (AVR)' },
  { key: 'controlPanel', label: 'لوحة التحكم' },

  // ===== الوقود والزيت =====
  { key: 'fuelType', label: 'نوع الوقود' },
  { key: 'fuelTankCapacity', label: 'سعة خزان الوقود' },
  { key: 'engineOilCapacity', label: 'سعة زيت المحرك' },

  // ===== التبريد =====
  { key: 'coolingSystem', label: 'نظام التبريد' },
  { key: 'coolingType', label: 'نوع التبريد' },

  // ===== الأبعاد والوزن =====
  { key: 'dimensions', label: 'الأبعاد' },
  { key: 'dryWeight', label: 'الوزن الجاف' },

  // ===== مضخات المياه =====
  { key: 'pumpType', label: 'نوع المضخة' },
  { key: 'inletOutlet', label: 'المدخل / المخرج' },

  // ===== مناشير =====
  { key: 'standardBarLengths', label: 'أطوال السيف القياسية' },
  { key: 'chainPitch', label: 'خطوة السلسلة' },

  // ===== متفرقات =====
  { key: 'type', label: 'النوع' },
  { key: 'sizes', label: 'المقاسات المتاحة' },
];


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
