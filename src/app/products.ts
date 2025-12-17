import { Injectable } from '@angular/core';

export interface Product {
  [key: string]: any;
  id: number;
  name: string;

  // ====== التصنيفات ======
  mainCategory: string;     // التصنيف الرئيسي
  subCategory: string;      // التصنيف الفرعي
  subSubCategory?: string;  // الفرعي من الفرعي (اختياري)

  // ====== البراندات ======
  brandMain?: string;
  brandSub?: string;
  brandSubSub?: string;

  brand: string;
  price: number;

  availability?: boolean;
  description: string;
  imageProduct: string;
  imageCategory?: string;
  imageBrand?: string;
  images: string[];

  rating?: number;
  reviewsCount?: number;
  discount?: number;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
   // ===================== مولد كهرباء SGB3001HA =====================
{
  id: 1,
  name: 'مولد كهرباء SGB3001HA',
  price: 0, // السعر مش موجود في الكتالوج
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات هوندا',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات هوندا',

  modelName: 'SGB3001HA',
  engineBrand: 'HONDA',
  engineModel: 'GX160',
  displacement: '163 CM³',
  startingSystem: 'RECOIL',
  acMaxOutput: '2.8 KVA',
  acRatedOutput: '2.5 KVA',
  ratedCurrent: '19.4 A',
  ratedVoltage: '220 V',
  fuelTankCapacity: '16 L',
  dimensions: '565 x 414 x 501 MM (W x H x D)',
  dryWeight: '47 KG',
  madeIn: 'Japan',

  length: '565 x 414 x 501 مم',
  description:'',
  imageProduct: '/products/sgb3001ha.png',
  images: ['/products/sgb3001ha.png'],
  availability: true
},

// ===================== مولد كهرباء SGB7801HSA =====================
{
  id: 2,
  name: 'مولد كهرباء SGB7801HSA',
  price: 0, // السعر مش موجود في الكتالوج
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات هوندا',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات هوندا',

  modelName: 'SGB7801HSA',
  engineBrand: 'HONDA',
  engineModel: 'GX390',
  displacement: '389 CM³',
  startingSystem: 'ELECTRIC',
  acMaxOutput: '7.5 KVA',
  acRatedOutput: '6.5 KVA',
  ratedCurrent: '28.3 A',
  ratedVoltage: '220 V',
  fuelTankCapacity: '25 L',
  dimensions: '675 x 550 x 570 MM (W x H x D)',
  dryWeight: '89 KG',
  madeIn: 'Japan',

  length: '675 x 550 x 570 مم',
  description: 'مولد كهرباء ياباني من Daishin بمحرك هوندا GX390، سعة 389 سم³، نظام تشغيل كهربائي (ELECTRIC)، قدرة خرج قصوى 7.5 كيلو فولت أمبير، قدرة مقننة 6.5 كيلو فولت أمبير، تيار مقن 28.3 أمبير، فولتية 220 فولت، سعة خزان الوقود 25 لتر، الأبعاد 675 × 550 × 570 مم، وزن جاف 89 كجم. صناعة يابانية.',
  imageProduct: '/products/sgb7801hsa.png',
  images: ['/products/sgb7801hsa.png'],
  availability: true
},
// ===================== مولد كهرباء SCF1000HGA =====================
{
  id: 3,
  name: 'مولد كهرباء SCF1000HGA',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات هوندا',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات هوندا',

  modelName: 'SCF1000HGA',
  engineBrand: 'HG',
  engineModel: 'HG100',
  displacement: '98 CM³',
  startingSystem: 'RECOIL',
  acMaxOutput: '0.9 KVA',
  acRatedOutput: '0.85 KVA',
  ratedCurrent: '3.9 A',
  ratedVoltage: '220 V',
  fuelTankCapacity: '8.5 L',
  engineOilCapacity: '0.4 L',
  dimensions: '475 x 365 x 430 MM (L x W x H)',
  dryWeight: '27.5 KG',
  madeIn: 'Japan',

  length: '475 x 365 x 430 مم',
  description: 'مولد كهرباء ياباني من Daishin بمحرك HG100، سعة 98 سم³، نظام تشغيل يدوي (RECOIL)، قدرة خرج قصوى 0.9 كيلو فولت أمبير، قدرة مقننة 0.85 كيلو فولت أمبير، تيار مقنن 3.9 أمبير، فولتية 220 فولت، سعة خزان الوقود 8.5 لتر، سعة زيت المحرك 0.4 لتر، الأبعاد 475 × 365 × 430 مم، وزن جاف 27.5 كجم. صناعة يابانية.',
  imageProduct: '/products/scf1000hga.png',
  images: ['/products/scf1000hga.png'],
  availability: true
},

// ===================== مولد كهرباء SCF3000HGA =====================
{
  id: 4,
  name: 'مولد كهرباء SCF3000HGA',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات هوندا',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات هوندا',

  modelName: 'SCF3000HGA',
  engineBrand: 'HG',
  engineModel: 'HG200',
  displacement: '163 CM³',
  startingSystem: 'RECOIL',
  acMaxOutput: '2.8 KVA',
  acRatedOutput: '2.5 KVA',
  ratedCurrent: '11.4 A',
  ratedVoltage: '220 V',
  fuelTankCapacity: '15 L',
  engineOilCapacity: '0.6 L',
  dimensions: '610 x 485 x 485 MM (L x W x H)',
  dryWeight: '45.8 KG',
  madeIn: 'Japan',
  FequencyHZ:60,

  length: '610 x 485 x 485 مم',
  description: 'مولد كهرباء ياباني من Daishin بمحرك HG200، سعة 163 سم³، نظام تشغيل يدوي (RECOIL)، قدرة خرج قصوى 2.8 كيلو فولت أمبير، قدرة مقننة 2.5 كيلو فولت أمبير، تيار مقنن 11.4 أمبير، فولتية 220 فولت، سعة خزان الوقود 15 لتر، سعة زيت المحرك 0.6 لتر، الأبعاد 610 × 485 × 485 مم، وزن جاف 45.8 كجم. صناعة يابانية.',
  imageProduct: '/products/scf3000hga.png',
  images: ['/products/scf3000hga.png'],
  availability: true
},

// ===================== مولد كهرباء SCF3000HGSA =====================
{
  id: 5,
  name: 'مولد كهرباء SCF3000HGSA',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات هوندا',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات هوندا',

  modelName: 'SCF3000HGSA',
  engineBrand: 'HG',
  engineModel: 'HG200',
  displacement: '163 CM³',
  startingSystem: 'RECOIL & ELECTRIC',
  acMaxOutput: '2.8 KVA',
  acRatedOutput: '2.5 KVA',
  ratedCurrent: '11.4 A',
  ratedVoltage: '220 V',
  fuelTankCapacity: '15 L',
  engineOilCapacity: '0.6 L',
  dimensions: '610 x 485 x 485 MM (L x W x H)',
  dryWeight: '47 KG',
  madeIn: 'Japan',
  FequencyHZ:60,

  length: '610 x 485 x 485 مم',
  description: 'مولد كهرباء ياباني من Daishin بمحرك HG200، سعة 163 سم³، نظام تشغيل يدوي (RECOIL)، قدرة خرج قصوى 2.8 كيلو فولت أمبير، قدرة مقننة 2.5 كيلو فولت أمبير، تيار مقنن 11.4 أمبير، فولتية 220 فولت، سعة خزان الوقود 15 لتر، سعة زيت المحرك 0.6 لتر، الأبعاد 610 × 485 × 485 مم، وزن جاف 45.8 كجم. صناعة يابانية.',
  imageProduct: '/products/scf3000hgsa.png',
  images: ['/products/scf3000hga.png'],
  availability: true
},

// ===================== مولد كهرباء SCF7000HGSA =====================
{
  id: 6,
  name: 'مولد كهرباء SCF7000HGSA',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات هوندا',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات هوندا',

  modelName: 'SCF7000HGSA',
  engineBrand: 'HG',
  engineModel: 'HG200',
  displacement: '163 CM³',
  startingSystem: 'RECOIL & ELECTRIC',
  acMaxOutput: '5.8 KVA',
  acRatedOutput: '5.5 KVA',
  ratedCurrent: '11.4 A',
  ratedVoltage: '220 V',
  fuelTankCapacity: '25 L',
  engineOilCapacity: '0.6 L',
  dimensions: '610 x 485 x 485 MM (L x W x H)',
  dryWeight: '47 KG',
  madeIn: 'Japan',
  FequencyHZ:60,

  length: '610 x 485 x 485 مم',
  description: 'مولد كهرباء ياباني من Daishin بمحرك HG200، سعة 163 سم³، نظام تشغيل يدوي وكهربائي (RECOIL & ELECTRIC)، قدرة خرج قصوى 5.8 كيلو فولت أمبير، قدرة مقننة 5.5 كيلو فولت أمبير، تيار مقنن 11.4 أمبير، فولتية 220 فولت، سعة خزان الوقود 25 لتر، سعة زيت المحرك 0.6 لتر، الأبعاد 610 × 485 × 485 مم، وزن جاف 47 كجم. صناعة يابانية.',
  imageProduct: '/products/scf7000hgsa.png',
  images: ['/products/scf6000hgsa.png'],
  availability: true
},

// ===================== مولد كهرباء SCF8000HGSA =====================
{
  id: 7,
  name: 'مولد كهرباء SCF8000HGSA',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات هوندا',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات هوندا',

  modelName: 'SCF8000HGSA',
  engineBrand: 'HG',
  engineModel: 'HG420',
  displacement: '420 CM³',
  startingSystem: 'RECOIL & ELECTRIC',
  acMaxOutput: '7 KVA',
  acRatedOutput: '6.5 KVA',
  ratedCurrent: '29.5 A',
  ratedVoltage: '220 V',
  fuelTankCapacity: '25 L',
  engineOilCapacity: '1.1 L',
  dimensions: '790 x 565 x 580 MM (L x W x H)',
  dryWeight: '81 KG',
  madeIn: 'Japan',

  length: '790 x 565 x 580 مم',
  description: 'مولد كهرباء ياباني من Daishin بمحرك HG420، سعة 420 سم³، نظام تشغيل يدوي وكهربائي (RECOIL & ELECTRIC)، قدرة خرج قصوى 7 كيلو فولت أمبير، قدرة مقننة 6.5 كيلو فولت أمبير، تيار مقنن 29.5 أمبير، فولتية 220 فولت، سعة خزان الوقود 25 لتر، سعة زيت المحرك 1.1 لتر، الأبعاد 790 × 565 × 580 مم، وزن جاف 81 كجم. صناعة يابانية.',
  imageProduct: '/products/scf8000hgsa.png',
  images: ['/products/scf8000hgsa.png'],
  availability: true
},
// ===================== مولد كهرباء IGEN 2300Z =====================
{
  id: 8,
  name: 'مولد كهرباء IGEN 2300Z',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات انفرتر',
  subSubCategory: 'مولدات صامتة',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات انفرتر',
  brandSubSub: 'مولدات صامتة',

  modelName: 'IGEN 2300Z',
  ratedOutput: '1900 VA',
  maxOutput: '2300 VA',
  acOutput: '220 V',
  frequency: '50/60 HZ',
  phaseType: 'Single Phase',
  battery: 'N/A',
  ratedDcOutput: '12V/8A',
  effectiveFuelTankCapacity: '4.8 L',
  displacement: '98 CC',
  boreXStroke: '52x46 MM',
  engineType: '4 STROKES, OHV, GASOLINE',
  continuousOutput: '1.7KW/3600RPM',
  oilCapacity: '0.45 L',
  startingMethod: 'RECOIL',
  grossWeight: '24.5 KG',
  netWeight: '21.5 KG',
  dimensions: '51.5 x 29 x 48 CM (L x W x H)',
  soundNoiseLevel: '53 dB(A) @7M',
  continuousAt50Load: '7 Hours',
  continuousAt100Load: '4 Hours',
  madeIn: 'Japan',

  length: '51.5 x 29 x 48 سم',
  description: 'مولد كهرباء انفرتر صامت ياباني من Daishin موديل IGEN 2300Z، قدرة مقننة 1900 فولت أمبير، قدرة قصوى 2300 فولت أمبير، فولتية 220 فولت، تردد 50/60 هرتز، أحادي الطور، خرج DC مقنن 12V/8A، سعة خزان وقود فعالة 4.8 لتر، سعة المحرك 98 سي سي، قطر × شوط 52×46 مم، محرك 4 أشواط OHV بنزين، خرج مستمر 1.7 كيلو وات/3600 دورة، سعة الزيت 0.45 لتر، تشغيل يدوي، الوزن الإجمالي 24.5 كجم، الوزن الصافي 21.5 كجم، الأبعاد 51.5 × 29 × 48 سم، مستوى الضوضاء 53 ديسيبل على بعد 7 متر، التشغيل المستمر عند 50% حمل: 7 ساعات، عند 100% حمل: 4 ساعات. صناعة يابانية.',
  imageProduct: '/products/igen2300z.png',
  images: ['/products/igen2300z.png'],
  availability: true
},

// ===================== مولد كهرباء IGEN 3500Z(S) =====================
{
  id: 9,
  name: 'مولد كهرباء IGEN 3500Z(S)',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات انفرتر',
  subSubCategory: 'مولدات صامتة',

  brand: 'Daishin',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات انفرتر',
  brandSubSub: 'مولدات صامتة',

  modelName: 'IGEN 3500Z(S)',
  ratedOutput: '3100 VA',
  maxOutput: '3600 VA',
  acOutput: '220 V',
  frequency: '50/60 HZ',
  phaseType: 'Single Phase',
  battery: '9 V',
  ratedDcOutput: '12V/8.3A',
  effectiveFuelTankCapacity: '6 L',
  displacement: '192 CC',
  boreXStroke: '67x50 MM',
  engineType: '4 STROKES, OHV, GASOLINE',
  continuousOutput: '3.1KW/3600RPM',
  oilCapacity: '0.6 L',
  startingMethod: 'RECOIL/ELECTRIC',
  grossWeight: '48 KG',
  netWeight: '43 KG',
  dimensions: '62.5 x 44 x 51 CM (L x W x H)',
  soundNoiseLevel: '59 dB(A) @7M',
  continuousAt50Load: '5 Hours',
  continuousAt100Load: '3.5 Hours',
  madeIn: 'Japan',

  length: '62.5 x 44 x 51 سم',
  description: 'مولد كهرباء انفرتر صامت ياباني من Daishin موديل IGEN 3500Z(S)، قدرة مقننة 3100 فولت أمبير، قدرة قصوى 3600 فولت أمبير، فولتية 220 فولت، تردد 50/60 هرتز، أحادي الطور، بطارية 9 فولت، خرج DC مقنن 12V/8.3A، سعة خزان وقود فعالة 6 لتر، سعة المحرك 192 سي سي، قطر × شوط 67×50 مم، محرك 4 أشواط OHV بنزين، خرج مستمر 3.1 كيلو وات/3600 دورة، سعة الزيت 0.6 لتر، تشغيل يدوي وكهربائي، الوزن الإجمالي 48 كجم، الوزن الصافي 43 كجم، الأبعاد 62.5 × 44 × 51 سم، مستوى الضوضاء 59 ديسيبل على بعد 7 متر، التشغيل المستمر عند 50% حمل: 5 ساعات، عند 100% حمل: 3.5 ساعات. صناعة يابانية.',
  imageProduct: '/products/igen3500Zs.png',
  images: ['/products/igen3500Zs.png'],
  availability: true
},
// ===================== مضخة مياه SCR-50HG =====================
{
  id: 10,
  name: 'مضخة مياه SCR-50HG',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات Daishin',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات Daishin',

  modelName: 'SCR-50HG',
  engineType: 'FORCED AIR COOLING,4-STROKE',
  engineModel: 'HG200',
  startingSystem: 'RECOIL',
  fuelType: 'GASOLINE',
  pumpType: 'ALUMINUM',
  ratedOutputPowerRpm: '5.2KW/6.5HP/3600RPM',
  inletOutlet: '2 IN',
  diameter: '50/50 MM',
  suction: '8 M',
  lift: '30 M',
  flow: '480 L/MIN',
  packingDimensions: '543 x 384 x 467 MM',
  weight: '25 KG',
  madeIn: 'Japan',

  length: '543 x 384 x 467 مم',
  description: 'مضخة مياه يابانية من Daishin موديل SCR-50HG، محرك تبريد هواء قسري 4 أشواط HG200، نظام تشغيل يدوي (RECOIL)، وقود بنزين، مضخة ألمنيوم، قدرة مقننة 5.2 كيلو وات / 6.5 حصان / 3600 دورة، مدخل ومخرج 2 بوصة، قطر 50/50 مم، سحب 8 متر، رفع 30 متر، تدفق 480 لتر/دقيقة، أبعاد التعبئة 543 × 384 × 467 مم، الوزن 25 كجم. صناعة يابانية.',
  imageProduct: '/products/scr50hg.png',
  images: ['/products/scr50hg.png'],
  availability: true
},

// ===================== مضخة مياه SCR-80HG =====================
{
  id: 11,
  name: 'مضخة مياه SCR-80HG',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات Daishin',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات Daishin',

  modelName: 'SCR-80HG',
  engineType: 'FORCED AIR COOLING,4-STROKE',
  engineModel: 'HG200',
  startingSystem: 'RECOIL',
  fuelType: 'GASOLINE',
  pumpType: 'ALUMINUM',
  ratedOutputPowerRpm: '5.2KW/6.5HP/3600RPM',
  inletOutlet: '3 IN',
  diameter: '80/80 MM',
  suction: '8 M',
  lift: '28 M',
  flow: '1060 L/MIN',
  packingDimensions: '543 x 384 x 467 MM',
  weight: '26 KG',
  madeIn: 'Japan',

  length: '543 x 384 x 467 مم',
  description: 'مضخة مياه يابانية من Daishin موديل SCR-80HG، محرك تبريد هواء قسري 4 أشواط HG200، نظام تشغيل يدوي (RECOIL)، وقود بنزين، مضخة ألمنيوم، قدرة مقننة 5.2 كيلو وات / 6.5 حصان / 3600 دورة، مدخل ومخرج 3 بوصة، قطر 80/80 مم، سحب 8 متر، رفع 28 متر، تدفق 1060 لتر/دقيقة، أبعاد التعبئة 543 × 384 × 467 مم، الوزن 26 كجم. صناعة يابانية.',
  imageProduct: '/products/scr80hg.png',
  images: ['/products/scr80hg.png'],
  availability: true
},

// ===================== مضخة مياه SCR50R ROBIN =====================
{
  id: 12,
  name: 'مضخة مياه SCR50R ROBIN',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات Robin',

  brand: 'Daishin Robin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات Robin',

  modelName: 'SCR50R',
  engineType: 'ROBIN',
  engineModel: 'EY15',
  startingSystem: 'RECOIL',
  fuelType: 'GASOLINE',
  ratedOutputPowerRpm: '2.6KW/3.5HP',
  inletOutletDiameter: '50 MM',
  suction: '8 M',
  lift: '32 M',
  flow: '500 L/MIN',
  packingDimensions: '490 x 365 x 455 MM',
  weight: '24 KG',
  madeIn: 'Japan',

  length: '490 x 365 x 455 مم',
  description: 'مضخة مياه يابانية من Daishin Robin موديل SCR50R، محرك Robin EY15، نظام تشغيل يدوي (RECOIL)، وقود بنزين، قدرة مقننة 2.6 كيلو وات / 3.5 حصان، مدخل ومخرج قطر 50 مم، سحب 8 متر، رفع 32 متر، تدفق 500 لتر/دقيقة، أبعاد التعبئة 490 × 365 × 455 مم، الوزن 24 كجم. صناعة يابانية.',
  imageProduct: '/products/scr50r.png',
  images: ['/products/scr50r.png'],
  availability: true
},

// ===================== مضخة مياه SCR80R ROBIN =====================
{
  id: 13,
  name: 'مضخة مياه SCR80R ROBIN',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات Robin',

  brand: 'Daishin Robin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات Robin',

  modelName: 'SCR80R',
  engineType: 'ROBIN',
  engineModel: 'EY20',
  startingSystem: 'RECOIL',
  fuelType: 'GASOLINE',
  ratedOutputPowerRpm: '3.7KW/5HP',
  inletOutletDiameter: '80 MM',
  suction: '8 M',
  lift: '32 M',
  flow: '920 L/MIN',
  packingDimensions: '547 x 390 x 448 MM',
  weight: '25 KG',
  madeIn: 'Japan',

  length: '547 x 390 x 448 مم',
  description: 'مضخة مياه يابانية من Daishin Robin موديل SCR80R، محرك Robin EY20، نظام تشغيل يدوي (RECOIL)، وقود بنزين، قدرة مقننة 3.7 كيلو وات / 5 حصان، مدخل ومخرج قطر 80 مم، سحب 8 متر، رفع 32 متر، تدفق 920 لتر/دقيقة، أبعاد التعبئة 547 × 390 × 448 مم، الوزن 25 كجم. صناعة يابانية.',
  imageProduct: '/products/scr80r.png',
  images: ['/products/scr80r.png'],
  availability: true
},
// ===================== مضخة مياه SCR-50HX =====================
{
  id: 14,
  name: 'مضخة مياه SCR-50HX',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات هوندا',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات هوندا',

  modelName: 'SCR-50HX',
  engineBrand: 'HONDA',
  engineModel: 'GX160',
  connectionInlet: '50 MM (2")',
  connectionOutlet: '50 MM (2")',
  totalHead: '32 M',
  deliveryVolume: '1200 L/MIN',
  maxSuctionHead: '8 M',
  electricStart: 'RECOIL',
  acMaxOutput: '2.6(3.5)/ 3600 KVA',
  acRatedOutput: '2.1(3.0)/ 3600 KVA',
  dimensions: '470 x 344 x 417 MM (L x W x H)',
  netWeight: '24.5 KG',
  madeIn: 'Japan',

  length: '470 x 344 x 417 مم',
  description: 'مضخة مياه يابانية من Daishin بمحرك هوندا GX160، توصيل مدخل 50 مم (2 بوصة)، توصيل مخرج 50 مم (2 بوصة)، ارتفاع كلي 32 متر، حجم التوصيل 1200 لتر/دقيقة، أقصى ارتفاع سحب 8 متر، تشغيل يدوي (RECOIL)، خرج أقصى 2.6(3.5)/ 3600 كيلو فولت أمبير، خرج مقنن 2.1(3.0)/ 3600 كيلو فولت أمبير، الأبعاد 470 × 344 × 417 مم، الوزن الصافي 24.5 كجم. صناعة يابانية.',
  imageProduct: '/products/scr50hx.png',
  images: ['/products/scr50hx.png'],
  availability: true
},

// ===================== مضخة مياه SCR-80HX =====================
{
  id: 15,
  name: 'مضخة مياه SCR-80HX',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات هوندا',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات هوندا',

  modelName: 'SCR-80HX',
  engineBrand: 'HONDA',
  engineModel: 'GX160',
  connectionInlet: '80 MM (3")',
  connectionOutlet: '80 MM (3")',
  totalHead: '26 M',
  deliveryVolume: '1200 L/MIN',
  maxSuctionHead: '8 M',
  electricStart: 'RECOIL',
  acMaxOutput: '2.6(3.5)/ 3600 KVA',
  acRatedOutput: '2.3(3.2)/ 3600 KVA',
  dimensions: '527 x 368 x 417 MM (L x W x H)',
  netWeight: '24.5 KG',
  madeIn: 'Japan',

  length: '527 x 368 x 417 مم',
  description: 'مضخة مياه يابانية من Daishin بمحرك هوندا GX160، توصيل مدخل 80 مم (3 بوصة)، توصيل مخرج 80 مم (3 بوصة)، ارتفاع كلي 26 متر، حجم التوصيل 1200 لتر/دقيقة، أقصى ارتفاع سحب 8 متر، تشغيل يدوي (RECOIL)، خرج أقصى 2.6(3.5)/ 3600 كيلو فولت أمبير، خرج مقنن 2.3(3.2)/ 3600 كيلو فولت أمبير، الأبعاد 527 × 368 × 417 مم، الوزن الصافي 24.5 كجم. صناعة يابانية.',
  imageProduct: '/products/scr80hx.png',
  images: ['/products/scr80hx.png'],
  availability: true
},

// ===================== مضخة مياه SCR-100HX =====================
{
  id: 16,
  name: 'مضخة مياه SCR-100HX',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات هوندا',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات هوندا',

  modelName: 'SCR-100HX',
  engineBrand: 'HONDA',
  engineModel: 'GX240',
  connectionInlet: '100 MM (4")',
  connectionOutlet: '100 MM (4")',
  totalHead: '26 M',
  deliveryVolume: '1800 L/MIN',
  maxSuctionHead: '8 M',
  electricStart: 'RECOIL',
  acMaxOutput: '6.3(8.0)/ 3600 KVA',
  acRatedOutput: '5.1(6.9)/ 3600 KVA',
  dimensions: '610 x 425 x 565 MM (L x W x H)',
  netWeight: '47.0 KG',
  madeIn: 'Japan',

  length: '610 x 425 x 565 مم',
  description: 'مضخة مياه يابانية من Daishin بمحرك هوندا GX240، توصيل مدخل 100 مم (4 بوصة)، توصيل مخرج 100 مم (4 بوصة)، ارتفاع كلي 26 متر، حجم التوصيل 1800 لتر/دقيقة، أقصى ارتفاع سحب 8 متر، تشغيل يدوي (RECOIL)، خرج أقصى 6.3(8.0)/ 3600 كيلو فولت أمبير، خرج مقنن 5.1(6.9)/ 3600 كيلو فولت أمبير، الأبعاد 610 × 425 × 565 مم، الوزن الصافي 47.0 كجم. صناعة يابانية.',
  imageProduct: '/products/scr100hx.png',
  images: ['/products/scr100hx.png'],
  availability: true
},
// ===================== مضخة مياه SCR-50D =====================
{
  id: 17,
  name: 'مضخة مياه SCR-50D',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات Daishin ديزل',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات Daishin ديزل',

  modelName: 'SCR-50D',
  engineType: 'DIESEL',
  engineModel: 'HG178F',
  startingSystem: 'RECOIL',
  ratedOutputPowerRpm: '3.9 KW/5.6HP/3600RPM',
  inletOutlet: '50/50 MM',
  diameter: '2 IN',
  suction: '8 M',
  lift: '32 M',
  flow: '520 L/MIN',
  weight: '40 KG',
  madeIn: 'Japan',

  description: 'مضخة مياه ديزل يابانية من Daishin موديل SCR-50D، محرك ديزل HG178F، نظام تشغيل يدوي (RECOIL)، قدرة مقننة 3.9 كيلو وات / 5.6 حصان / 3600 دورة، مدخل ومخرج 50/50 مم، قطر 2 بوصة، سحب 8 متر، رفع 32 متر، تدفق 520 لتر/دقيقة، الوزن 40 كجم. صناعة يابانية.',
  imageProduct: '/products/scr50d.png',
  images: ['/products/scr50d.png'],
  availability: true
},

// ===================== مضخة مياه SCR-80D =====================
{
  id: 18,
  name: 'مضخة مياه SCR-80D',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات Daishin ديزل',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات Daishin ديزل',

  modelName: 'SCR-80D',
  engineType: 'FORCED AIR COOLING,4-STROKE',
  engineModel: 'HG178F',
  startingSystem: 'ELECTRIC',
  ratedOutputPowerRpm: '4 KW/5.5HP/3600RPM',
  inletOutlet: '80/80 MM',
  diameter: '3 IN',
  suction: '8 M',
  lift: '32 M',
  flow: '890 L/MIN',
  weight: '48 KG',
  madeIn: 'Japan',

  description: 'مضخة مياه ديزل يابانية من Daishin موديل SCR-80D، محرك تبريد هواء قسري 4 أشواط HG178F، نظام تشغيل كهربائي (ELECTRIC)، قدرة مقننة 4 كيلو وات / 5.5 حصان / 3600 دورة، مدخل ومخرج 80/80 مم، قطر 3 بوصة، سحب 8 متر، رفع 32 متر، تدفق 890 لتر/دقيقة، الوزن 48 كجم. صناعة يابانية.',
  imageProduct: '/products/scr80d.png',
  images: ['/products/scr80d.png'],
  availability: true
},

// ===================== مضخة مياه SCR-100D =====================
{
  id: 19,
  name: 'مضخة مياه SCR-100D',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات Daishin ديزل',

  brand: 'Daishin',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات Daishin ديزل',

  modelName: 'SCR-100D',
  engineType: 'HG DIESEL',
  engineModel: 'HG186FA',
  startingSystem: 'ELECTRIC',
  ratedOutputPowerRpm: '6.3 KW/9HP/3600RPM',
  inletOutlet: '100/100 MM',
  diameter: '4 IN',
  suction: '8 M',
  lift: '27 M',
  flow: '1300 L/MIN',
  weight: '86 KG',
  madeIn: 'Japan',

  description: 'مضخة مياه ديزل يابانية من Daishin موديل SCR-100D، محرك ديزل HG186FA، نظام تشغيل كهربائي (ELECTRIC)، قدرة مقننة 6.3 كيلو وات / 9 حصان / 3600 دورة، مدخل ومخرج 100/100 مم، قطر 4 بوصة، سحب 8 متر، رفع 27 متر، تدفق 1300 لتر/دقيقة، الوزن 86 كجم. صناعة يابانية.',
  imageProduct: '/products/scr100d.png',
  images: ['/products/scr100d.png'],
  availability: true
},

// ===================== مولد كهرباء SRGE6500E =====================
{
  id: 20,
  name: 'مولد كهرباء SRGE6500E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE6500E',
  engineModel: 'SR390E',
  displacement: '389 CC',
  startingSystem: 'RECOIL+TRC',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '5.5 KW',
  maxOutputPower: '6.6 KW',
  phase: 'SINGLE / أحادي الطور',
  fuelTankCapacity: '25 L',
  packageDimensions: '700x600x580 MM',
  weight: '96.5 KG',
  madeIn: 'China',

  description: 'مولد كهرباء بنزين من Shineray موديل SRGE6500E، محرك SR390E، سعة 389 سي سي، نظام تشغيل RECOIL+TRC، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 5.5 كيلو وات، حد أقصى للقدرة 6.6 كيلو وات، أحادي الطور، سعة خزان الوقود 25 لتر، أبعاد العبوة 700x600x580 مم، الوزن 96.5 كجم. صناعة صينية.',
  imageProduct: '/products/srge6500e.png',
  images: ['/products/srge6500e.png'],
  availability: true
},

// ===================== مولد كهرباء SRGE8500E =====================
{
  id: 21,
  name: 'مولد كهرباء SRGE8500E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE8500E',
  engineModel: 'SR420E',
  displacement: '445 CC',
  startingSystem: 'RECOIL+TRC',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '7.5 KW',
  maxOutputPower: '8.0 KW',
  phase: 'SINGLE / أحادي الطور',
  fuelTankCapacity: '25 L',
  packageDimensions: '700x600x580 MM',
  weight: '100.5 KG',
  madeIn: 'China',

  engineType: 'بنزين',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE8500E، محرك SR420E، سعة 445 سي سي، نظام تشغيل RECOIL+TRC، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 7.5 كيلو وات، حد أقصى للقدرة 8.0 كيلو وات، أحادي الطور، سعة خزان الوقود 25 لتر، أبعاد العبوة 700x600x580 مم، الوزن 100.5 كجم. صناعة صينية.',
  imageProduct: '/products/srge8500e.png',
  images: ['/products/srge8500e.png'],
  availability: true
},

// ===================== مولد كهرباء SRGE10000E =====================
{
  id: 22,
  name: 'مولد كهرباء SRGE10000E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE10000E',
  engineModel: 'SR690E',
  displacement: '465 CC',
  startingSystem: 'RECOIL+TRC',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '8.5 KW',
  maxOutputPower: '9.0 KW',
  phase: 'SINGLE / أحادي الطور',
  fuelTankCapacity: '26 L',
  packageDimensions: '1010x700x700 MM',
  weight: '102 KG',
  madeIn: 'China',
  engineType: 'بنزين',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE10000E، محرك SR690E، سعة 465 سي سي، نظام تشغيل RECOIL+TRC، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 8.5 كيلو وات، حد أقصى للقدرة 9.0 كيلو وات، أحادي الطور، سعة خزان الوقود 26 لتر، أبعاد العبوة 1010x700x700 مم، الوزن 102 كجم. صناعة صينية.',
  imageProduct: '/products/srge10000e.png',
  images: ['/products/srge10000e.png'],
  availability: true
},

// ===================== مولد كهرباء ملحوم SRFW-220A =====================
{
  id: 23,
  name: 'مولد كهرباء ملحوم SRFW-220A',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات لحام',
  subSubCategory: 'مولدات Shineray لحام',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات لحام',
  brandSubSub: 'مولدات Shineray لحام',

  modelName: 'SRFW-220A',
  engineModel: 'SR420',
  displacement: '420 CC',
  startingSystem: 'RECOIL / حبل يدوي',
  alternatorWinding: '100% COPPER / 100% نحاس',
  avr: 'YES / نعم',
  weldingCurrentRange: '45-220A / 45-220 أمبير',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '6.5 KW',
  maxOutputPower: '6.5 KW',
  phase: 'SINGLE / أحادي الطور',
  currentAdjustmentRange: '50-200A / 50-200 أمبير',
  diameterOfElectrode: '2.0-4.0 MM',
  fuelTankCapacity: '6.5 L',
  oilVolume: '1.3 L',
  packageDimensions: '700x580x580 MM',
  weight: '90 KG',
  madeIn: 'China',
  engineType: 'بنزين',
  
  description: 'مولد كهرباء ملحوم من Shineray موديل SRFW-220A، محرك SR420، سعة 420 سي سي، نظام تشغيل يدوي بالحبل (RECOIL)، ملفات نحاس 100%، منظم جهد أوتوماتيكي AVR، مدى تيار اللحام 45-220 أمبير، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة 6.5 كيلو وات، أحادي الطور، مدى ضبط التيار 50-200 أمبير، قطر القطب الكهربائي 2.0-4.0 مم، سعة خزان الوقود 6.5 لتر، حجم الزيت 1.3 لتر، أبعاد العبوة 700x580x580 مم، الوزن 90 كجم. صناعة صينية.',
  imageProduct: '/products/srfw-220a.png',
  images: ['/products/srfw-220a.png'],
  availability: true
},
// ===================== مولد كهرباء SRGE2500 =====================
{
  id: 24,
  name: 'مولد كهرباء SRGE2500',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE2500',
  engineModel: 'SR210E',
  displacement: '212 CC',
  startingSystem: 'RECOIL / حبل يدوي',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '2.0 KW',
  maxOutputPower: '2.5 KW',
  ratedCurrent: '10 A',
  fuelTankCapacity: '15 L',
  packageDimensions: '600x450x460 MM',
  weight: '44 KG',
  madeIn: 'China',

  engineType: 'بنزين',
  phase: 'SINGLE / أحادي الطور',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE2500، محرك SR210E، سعة 212 سي سي، نظام تشغيل يدوي بالحبل (RECOIL)، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 2.0 كيلو وات، حد أقصى للقدرة 2.5 كيلو وات، تيار مقنن 10 أمبير، سعة خزان الوقود 15 لتر، أبعاد العبوة 600x450x460 مم، الوزن 44 كجم. صناعة صينية.',
  imageProduct: '/products/srge2500.png',
  images: ['/products/srge2500.png'],
  availability: true
},

// ===================== مولد كهرباء SRGE2500E =====================
{
  id: 25,
  name: 'مولد كهرباء SRGE2500E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE2500E',
  engineModel: 'SR210E',
  displacement: '212 CC',
  startingSystem: 'RECOIL / ELECTRIC / حبل يدوي / كهربائي',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '2.0 KW',
  maxOutputPower: '2.5 KW',
  ratedCurrent: '10 A',
  fuelTankCapacity: '15 L',
  packageDimensions: '600x450x460 MM',
  weight: '48 KG',
  madeIn: 'China',

  engineType: 'بنزين',
  phase: 'SINGLE / أحادي الطور',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE2500E، محرك SR210E، سعة 212 سي سي، نظام تشغيل مزدوج يدوي وكهربائي (RECOIL/ELECTRIC)، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 2.0 كيلو وات، حد أقصى للقدرة 2.5 كيلو وات، تيار مقنن 10 أمبير، سعة خزان الوقود 15 لتر، أبعاد العبوة 600x450x460 مم، الوزن 48 كجم. صناعة صينية.',
  imageProduct: '/products/srge2500e.png',
  images: ['/products/srge2500e.png'],
  availability: true
},

// ===================== مولد كهرباء SRGE3800 =====================
{
  id: 26,
  name: 'مولد كهرباء SRGE3800',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE3800',
  engineModel: 'SR210E',
  displacement: '212 CC',
  startingSystem: 'RECOIL / حبل يدوي',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '3.0 KW',
  maxOutputPower: '3.2 KW',
  ratedCurrent: '13.6 A',
  fuelTankCapacity: '15 L',
  packageDimensions: '600x450x460 MM',
  weight: '52 KG',
  madeIn: 'China',

  engineType: 'بنزين',
  phase: 'SINGLE / أحادي الطور',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE3800، محرك SR210E، سعة 212 سي سي، نظام تشغيل يدوي بالحبل (RECOIL)، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 3.0 كيلو وات، حد أقصى للقدرة 3.2 كيلو وات، تيار مقنن 13.6 أمبير، سعة خزان الوقود 15 لتر، أبعاد العبوة 600x450x460 مم، الوزن 52 كجم. صناعة صينية.',
  imageProduct: '/products/srge3800.png',
  images: ['/products/srge3800.png'],
  availability: true
},

// ===================== مولد كهرباء SRGE3800E =====================
{
  id: 27,
  name: 'مولد كهرباء SRGE3800E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE3800E',
  engineModel: 'SR210E',
  displacement: '212 CC',
  startingSystem: 'RECOIL / ELECTRIC / حبل يدوي / كهربائي',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '3.0 KW',
  maxOutputPower: '3.2 KW',
  ratedCurrent: '13.6 A',
  fuelTankCapacity: '15 L',
  packageDimensions: '600x450x460 MM',
  weight: '55 KG',
  madeIn: 'China',

  engineType: 'بنزين',
  phase: 'SINGLE / أحادي الطور',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE3800E، محرك SR210E، سعة 212 سي سي، نظام تشغيل مزدوج يدوي وكهربائي (RECOIL/ELECTRIC)، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 3.0 كيلو وات، حد أقصى للقدرة 3.2 كيلو وات، تيار مقنن 13.6 أمبير، سعة خزان الوقود 15 لتر، أبعاد العبوة 600x450x460 مم، الوزن 55 كجم. صناعة صينية.',
  imageProduct: '/products/srge3800e.png',
  images: ['/products/srge3800e.png'],
  availability: true
},
// ===================== مولد كهرباء SRGE1500C =====================
{
  id: 28,
  name: 'مولد كهرباء SRGE1500C',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE1500C',
  engineModel: 'SR100A',
  displacement: '98 CC',
  startingSystem: 'RECOIL / حبل يدوي',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '1.0 KW',
  maxOutputPower: '1.2 KW',
  ratedCurrent: '4.5 A',
  fuelTankCapacity: '4.5 L',
  packageDimensions: '475x385x440 MM',
  weight: '27.5 KG',
  madeIn: 'China',

  engineType: 'بنزين',
  phase: 'SINGLE / أحادي الطور',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE1500C، محرك SR100A، سعة 98 سي سي، نظام تشغيل يدوي بالحبل (RECOIL)، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 1.0 كيلو وات، حد أقصى للقدرة 1.2 كيلو وات، تيار مقنن 4.5 أمبير، سعة خزان الوقود 4.5 لتر، أبعاد العبوة 475x385x440 مم، الوزن 27.5 كجم. صناعة صينية.',
  imageProduct: '/products/srge1500c.png',
  images: ['/products/srge1500c.png'],
  availability: true
},

// ===================== مولد كهرباء SRGE1500CE =====================
{
  id: 29,
  name: 'مولد كهرباء SRGE1500CE',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Shineray بنزين',

  modelName: 'SRGE1500CE',
  engineModel: 'SR100AE',
  displacement: '98 CC',
  startingSystem: 'ELECTRIC / كهربائي',
  ratedVoltage: '220V',
  ratedFrequency: '60 Hz',
  ratedOutputPower: '1.0 KW',
  maxOutputPower: '1.2 KW',
  ratedCurrent: '4.5 A',
  fuelTankCapacity: '4.5 L',
  packageDimensions: '475x385x440 MM',
  weight: '29 KG',
  madeIn: 'China',

  engineType: 'بنزين',
  phase: 'SINGLE / أحادي الطور',
  
  description: 'مولد كهرباء بنزين من Shineray موديل SRGE1500CE، محرك SR100AE، سعة 98 سي سي، نظام تشغيل كهربائي (ELECTRIC)، جهد مقنن 220 فولت، تردد 60 هرتز، قدرة مقننة 1.0 كيلو وات، حد أقصى للقدرة 1.2 كيلو وات، تيار مقنن 4.5 أمبير، سعة خزان الوقود 4.5 لتر، أبعاد العبوة 475x385x440 مم، الوزن 29 كجم. صناعة صينية.',
  imageProduct: '/products/srge1500ce.png',
  images: ['/products/srge1500ce.png'],
  availability: true
},
// ===================== مولد كهرباء بنزين وغاز SRGE3500E =====================
{
  id: 30,
  name: 'مولد كهرباء بنزين وغاز SRGE3500E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين وغاز',
  subSubCategory: 'مولدات Shineray بنزين وغاز',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين وغاز',
  brandSubSub: 'مولدات Shineray بنزين وغاز',

  modelName: 'SRGE3500E',
  engineModel: 'SRGE3500E',
  ratedPower: '3.0KW/2.7KW',
  maxPower: '3.2KW/2.9KW',
  ratedSpeed: '3,600RPM',
  ratedCurrent: '24A/21A',
  ratedFrequency: '60Hz',
  ratedVoltage: '220V',
  phase: 'SINGLE / أحادي الطور',
  fuelTankCapacity: '15L',
  oilCapacity: '0.6L',
  weight: '55KG',
  madeIn: 'China',
  startingSystem: 'ELECTRIC / كهربائي',
  
  description: 'مولد كهرباء بنزين وغاز من Shineray موديل SRGE3500E، قدرة مقننة 3.0 كيلو وات (بنزين) / 2.7 كيلو وات (غاز)، حد أقصى للقدرة 3.2 كيلو وات (بنزين) / 2.9 كيلو وات (غاز)، سرعة مقننة 3,600 دورة/دقيقة، تيار مقنن 24 أمبير (بنزين) / 21 أمبير (غاز)، تردد 60 هرتز، جهد 220 فولت، أحادي الطور، سعة خزان الوقود 15 لتر، سعة الزيت 0.6 لتر، الوزن 55 كجم. صناعة صينية.',
  imageProduct: '/products/srge3500e-gas.png',
  images: ['/products/srge3500e-gas.png'],
  availability: true
},

// ===================== مولد كهرباء بنزين وغاز SRGE6000E =====================
{
  id: 31,
  name: 'مولد كهرباء بنزين وغاز SRGE6000E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين وغاز',
  subSubCategory: 'مولدات Shineray بنزين وغاز',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين وغاز',
  brandSubSub: 'مولدات Shineray بنزين وغاز',

  modelName: 'SRGE6000E',
  engineModel: 'SRGE6000E',
  ratedPower: '5.0KW/4.5KW',
  maxPower: '6.0KW/5.4KW',
  ratedSpeed: '3,600RPM',
  ratedCurrent: '25A/22.7A',
  ratedFrequency: '60Hz',
  ratedVoltage: '220V',
  phase: 'SINGLE / أحادي الطور',
  fuelTankCapacity: '25L',
  oilCapacity: '1L',
  weight: '95.5KG',
  madeIn: 'China',

  startingSystem: 'ELECTRIC / كهربائي',
  engineType: 'بنزين وغاز',
  
  description: 'مولد كهرباء بنزين وغاز من Shineray موديل SRGE6000E، قدرة مقننة 5.0 كيلو وات (بنزين) / 4.5 كيلو وات (غاز)، حد أقصى للقدرة 6.0 كيلو وات (بنزين) / 5.4 كيلو وات (غاز)، سرعة مقننة 3,600 دورة/دقيقة، تيار مقنن 25 أمبير (بنزين) / 22.7 أمبير (غاز)، تردد 60 هرتز، جهد 220 فولت، أحادي الطور، سعة خزان الوقود 25 لتر، سعة الزيت 1 لتر، الوزن 95.5 كجم. صناعة صينية.',
  imageProduct: '/products/srge6000e-gas.png',
  images: ['/products/srge6000e-gas.png'],
  availability: true
},

// ===================== مولد كهرباء بنزين وغاز SRGE8000E =====================
{
  id: 32,
  name: 'مولد كهرباء بنزين وغاز SRGE8000E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين وغاز',
  subSubCategory: 'مولدات Shineray بنزين وغاز',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين وغاز',
  brandSubSub: 'مولدات Shineray بنزين وغاز',

  modelName: 'SRGE8000E',
  engineModel: 'SRGE8000E',
  ratedPower: '7.5KW/6.75KW',
  maxPower: '8.0KW/7.2KW',
  ratedSpeed: '3,600RPM',
  ratedCurrent: '34A/31A',
  ratedFrequency: '60Hz',
  ratedVoltage: '220V',
  phase: 'SINGLE / أحادي الطور',
  fuelTankCapacity: '25L',
  oilCapacity: '1L',
  weight: '100.5KG',
  madeIn: 'China',

  startingSystem: 'ELECTRIC / كهربائي',
  engineType: 'بنزين وغاز',
  
  description: 'مولد كهرباء بنزين وغاز من Shineray موديل SRGE8000E، قدرة مقننة 7.5 كيلو وات (بنزين) / 6.75 كيلو وات (غاز)، حد أقصى للقدرة 8.0 كيلو وات (بنزين) / 7.2 كيلو وات (غاز)، سرعة مقننة 3,600 دورة/دقيقة، تيار مقنن 34 أمبير (بنزين) / 31 أمبير (غاز)، تردد 60 هرتز، جهد 220 فولت، أحادي الطور، سعة خزان الوقود 25 لتر، سعة الزيت 1 لتر، الوزن 100.5 كجم. صناعة صينية.',
  imageProduct: '/products/srge8000e-gas.png',
  images: ['/products/srge8000e-gas.png'],
  availability: true
},
// ===================== حراثة تربة بنزين SR1Z-100P =====================
{
  id: 33,
  name: 'حراثة تربة بنزين SR1Z-100P',
  price: 0,
  mainCategory: 'حراثات تربة',
  subCategory: 'حراثات بنزين',
  subSubCategory: 'حراثات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'حراثات تربة',
  brandSub: 'حراثات بنزين',
  brandSubSub: 'حراثات Shineray بنزين',

  modelName: 'SR1Z-100P',
  engineModel: 'SR210',
  enginePower: '7 HP/3600 ROTARY SPEED (R/MIN)',
  startingSystem: 'RECOIL / حبل يدوي',
  fuelTankCapacity: '3.6 L',
  fuelType: 'GASOLINE / بنزين',
  drivingMode: 'GEAR / جير',
  gearbox: '1:0.2:R',
  rotorSpeed: 'FAST: 110 / SLOW: 101 / REVERSE: 73',
  tillingDepth: '≤10 CM',
  tillingWidth: '100 CM',
  bladesType: '4-6/24PCS',
  netWeight: '82 KG',
  packageDimensions: '850X750X755 MM',
  weight: '82 KG',
  madeIn: 'China',
  engineType: 'بنزين',

  description: 'حراثة تربة بنزين من Shineray موديل SR1Z-100P، محرك SR210، قوة المحرك 7 حصان / 3600 دورة/دقيقة، نظام تشغيل يدوي بالحبل (RECOIL)، سعة خزان الوقود 3.6 لتر، وقود بنزين، نظام قيادة بالجير (GEAR)، علبة تروس 1:0.2:R، سرعة الدوار: سريع 110 / بطيء 101 / عكسي 73، عمق الحراثة ≤10 سم، عرض الحراثة 100 سم، نوع الشفرات 4-6/24 قطعة، الوزن الصافي 82 كجم، أبعاد العبوة 850x750x755 مم. صناعة صينية.',
  imageProduct: '/products/sr1z-100p.png',
  images: ['/products/sr1z-100p.png'],
  availability: true
},

// ===================== حراثة تربة ديزل SR1Z-100D =====================
{
  id: 34,
  name: 'حراثة تربة ديزل SR1Z-100D',
  price: 0,
  mainCategory: 'حراثات تربة',
  subCategory: 'حراثات ديزل',
  subSubCategory: 'حراثات Shineray ديزل',

  brand: 'Shineray',
  brandMain: 'حراثات تربة',
  brandSub: 'حراثات ديزل',
  brandSubSub: 'حراثات Shineray ديزل',

  modelName: 'SR1Z-100D',
  engineModel: 'SR178FD',
  enginePower: '5.5 HP /3600',
  startingSystem: 'RECOIL / حبل يدوي',
  fuelTankCapacity: '3.6 L',
  fuelType: 'DIESEL / ديزل',
  drivingMode: 'GEAR / جير',
  gearbox: '1:0.2:R',
  rotorSpeed: 'FAST: 130 / SLOW: 101 / REVERSE: 73',
  tillingDepth: '≤10 CM',
  tillingWidth: '100 CM',
  bladesType: '4-6/24PCS',
  netWeight: '92 KG',
  packageDimensions: '1690X1050X1240 MM',
  weight: '92 KG',
  madeIn: 'China',
  engineType: 'ديزل',
  
  description: 'حراثة تربة ديزل من Shineray موديل SR1Z-100D، محرك SR178FD، قوة المحرك 5.5 حصان / 3600 دورة/دقيقة، نظام تشغيل يدوي بالحبل (RECOIL)، سعة خزان الوقود 3.6 لتر، وقود ديزل، نظام قيادة بالجير (GEAR)، علبة تروس 1:0.2:R، سرعة الدوار: سريع 130 / بطيء 101 / عكسي 73، عمق الحراثة ≤10 سم، عرض الحراثة 100 سم، نوع الشفرات 4-6/24 قطعة، الوزن الصافي 92 كجم، أبعاد العبوة 1690x1050x1240 مم. صناعة صينية.',
  imageProduct: '/products/sr1z-100d.png',
  images: ['/products/sr1z-100d.png'],
  availability: true
},

// ===================== حراثة تربة بنزين SR1Z-105G =====================
{
  id: 35,
  name: 'حراثة تربة بنزين SR1Z-105G',
  price: 0,
  mainCategory: 'حراثات تربة',
  subCategory: 'حراثات بنزين',
  subSubCategory: 'حراثات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'حراثات تربة',
  brandSub: 'حراثات بنزين',
  brandSubSub: 'حراثات Shineray بنزين',

  modelName: 'SR1Z-105G',
  engineModel: 'SR420',
  enginePower: '13 HP /3600',
  startingSystem: 'ELECTRIC / كهربائي',
  fuelTankCapacity: '5.5 L',
  fuelType: 'GASOLINE / بنزين',
  drivingMode: 'GEAR / جير',
  gearbox: '1:0.2:R',
  rotorSpeed: 'FAST: 110 / SLOW: 101 / REVERSE: 73',
  tillingDepth: '≤30 CM',
  tillingWidth: '135 CM',
  bladesType: '4/7PCS',
  netWeight: '132 KG',
  packageDimensions: '1010X570X775 MM',
  weight: '132 KG',
  madeIn: 'China',
  engineType: 'بنزين',
 
  description: 'حراثة تربة بنزين من Shineray موديل SR1Z-105G، محرك SR420، قوة المحرك 13 حصان / 3600 دورة/دقيقة، نظام تشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 5.5 لتر، وقود بنزين، نظام قيادة بالجير (GEAR)، علبة تروس 1:0.2:R، سرعة الدوار: سريع 110 / بطيء 101 / عكسي 73، عمق الحراثة ≤30 سم، عرض الحراثة 135 سم، نوع الشفرات 4/7 قطع، الوزن الصافي 132 كجم، أبعاد العبوة 1010x570x775 مم. صناعة صينية.',
  imageProduct: '/products/sr1z-105g.png',
  images: ['/products/sr1z-105g.png'],
  availability: true
},

// ===================== حراثة تربة ديزل SR1Z-135E =====================
{
  id: 36,
  name: 'حراثة تربة ديزل SR1Z-135E',
  price: 0,
  mainCategory: 'حراثات تربة',
  subCategory: 'حراثات ديزل',
  subSubCategory: 'حراثات Shineray ديزل',

  brand: 'Shineray',
  brandMain: 'حراثات تربة',
  brandSub: 'حراثات ديزل',
  brandSubSub: 'حراثات Shineray ديزل',

  modelName: 'SR1Z-135E',
  engineModel: 'SR186FD',
  enginePower: '10 HP /2600',
  startingSystem: 'ELECTRIC / كهربائي',
  fuelTankCapacity: '5.5 L',
  fuelType: 'DIESEL / ديزل',
  drivingMode: 'GEAR / جير',
  gearbox: '1:0.2:R',
  rotorSpeed: 'FAST: 130 / SLOW: 101 / REVERSE: 73',
  tillingDepth: '≤30 CM',
  tillingWidth: '135 CM',
  bladesType: '4/7PCS',
  netWeight: '140 KG',
  packageDimensions: '1010X570X775 MM',
  weight: '140 KG',
  madeIn: 'China',
  engineType: 'ديزل',
  
  description: 'حراثة تربة ديزل من Shineray موديل SR1Z-135E، محرك SR186FD، قوة المحرك 10 حصان / 2600 دورة/دقيقة، نظام تشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 5.5 لتر، وقود ديزل، نظام قيادة بالجير (GEAR)، علبة تروس 1:0.2:R، سرعة الدوار: سريع 130 / بطيء 101 / عكسي 73، عمق الحراثة ≤30 سم، عرض الحراثة 135 سم، نوع الشفرات 4/7 قطع، الوزن الصافي 140 كجم، أبعاد العبوة 1010x570x775 مم. صناعة صينية.',
  imageProduct: '/products/sr1z-135e.png',
  images: ['/products/sr1z-135e.png'],
  availability: true
},

// ===================== ماكينة غسيل بنزين SRPW-2800 =====================
{
  id: 37,
  name: 'ماكينة غسيل بنزين SRPW-2800',
  price: 0,
  mainCategory: 'ماكينات غسيل',
  subCategory: 'ماكينات غسيل بنزين',
  subSubCategory: 'ماكينات Shineray غسيل بنزين',

  brand: 'Shineray',
  brandMain: 'ماكينات غسيل',
  brandSub: 'ماكينات غسيل بنزين',
  brandSubSub: 'ماكينات Shineray غسيل بنزين',

  modelName: 'SRPW-2800',
  engineModel: '154F',
  startingSystem: 'RECOIL / حبل',
  fuelType: 'GASOLINE / بنزين',
  netWeight: '18 KG',
  weight: '18 KG',
  madeIn: 'China',

  displacement: '212 CC',
  maxOutputPower: '4.2 KW/3600RPM',
  engineType: 'بنزين',
  inletOutlet: 'BRASS WATER INLET PUMP',
  flow: '6500L (1GPM)',
  
  description: 'ماكينة غسيل بنزين من Shineray موديل SRPW-2800، محرك 154F، سعة المحرك 212 سي سي، أقصى قوة 4.2 كيلو وات / 3600 دورة/دقيقة، نظام تشغيل بالحبل (RECOIL)، وقود بنزين، مدخل مضخة ماء نحاسي (BRASS WATER INLET PUMP)، معدل التدفق 6500 لتر (1GPM)، الضغط الأقصى 2700 PSI، معدل الضغط 2350PSI، الوزن الصافي 18 كجم. صناعة صينية.',
  imageProduct: '/products/srpw-2800.png',
  images: ['/products/srpw-2800.png'],
  availability: true
},

// ===================== ماكينة غسيل بنزين SRPW-3100 =====================
{
  id: 38,
  name: 'ماكينة غسيل بنزين SRPW-3100',
  price: 0,
  mainCategory: 'ماكينات غسيل',
  subCategory: 'ماكينات غسيل بنزين',
  subSubCategory: 'ماكينات Shineray غسيل بنزين',

  brand: 'Shineray',
  brandMain: 'ماكينات غسيل',
  brandSub: 'ماكينات غسيل بنزين',
  brandSubSub: 'ماكينات Shineray غسيل بنزين',

  modelName: 'SRPW-3100',
  engineModel: 'FORCED AIR COOLING STROKE OHV,2P, SINGLE CYLINDER',
  startingSystem: 'RECOIL / حبل',
  fuelType: 'GASOLINE / بنزين',
  netWeight: '34 KG',
  weight: '34 KG',
  madeIn: 'China',

  displacement: '212 CC',
  maxOutputPower: '5.1 KW/3600RPM',
  engineType: 'بنزين',
  inletOutlet: 'PUMP',
  flow: '6500L (2GPM)',
  
  description: 'ماكينة غسيل بنزين من Shineray موديل SRPW-3100، محرك تبريد هوائي قسري، شوط OHV، ثنائي القطب، أسطوانة واحدة، سعة المحرك 212 سي سي، أقصى قوة 5.1 كيلو وات / 3600 دورة/دقيقة، نظام تشغيل بالحبل (RECOIL)، وقود بنزين، معدل التدفق 6500 لتر (2GPM)، الضغط الأقصى 2950PSI، معدل الضغط 2350PSI، الوزن الصافي 34 كجم. صناعة صينية.',
  imageProduct: '/products/srpw-3100.png',
  images: ['/products/srpw-3100.png'],
  availability: true
},

// ===================== ماكينة غسيل بنزين SRPW-3400 =====================
{
  id: 39,
  name: 'ماكينة غسيل بنزين SRPW-3400',
  price: 0,
  mainCategory: 'ماكينات غسيل',
  subCategory: 'ماكينات غسيل بنزين',
  subSubCategory: 'ماكينات Shineray غسيل بنزين',

  brand: 'Shineray',
  brandMain: 'ماكينات غسيل',
  brandSub: 'ماكينات غسيل بنزين',
  brandSubSub: 'ماكينات Shineray غسيل بنزين',

  modelName: 'SRPW-3400',
  engineModel: 'SRPW-ST80',
  startingSystem: 'RECOIL / حبل',
  fuelType: 'GASOLINE / بنزين',
  netWeight: '88 KG',
  weight: '88 KG',
  madeIn: 'China',

  displacement: '242 CC',
  maxOutputPower: '6.0 KW/3600RPM',
  engineType: 'بنزين',
  inletOutlet: 'AXIAL PLUNGER SHAFT PUMP',
  flow: '6500L (2GPM)',
  
  description: 'ماكينة غسيل بنزين من Shineray موديل SRPW-3400، محرك SRPW-ST80، سعة المحرك 242 سي سي، أقصى قوة 6.0 كيلو وات / 3600 دورة/دقيقة، نظام تشغيل بالحبل (RECOIL)، وقود بنزين، مضخة محورية بمكبس عمودي (AXIAL PLUNGER SHAFT PUMP)، معدل التدفق 6500 لتر (2GPM)، الضغط الأقصى 3750PSI، معدل الضغط 3450PSI، الوزن الصافي 88 كجم. صناعة صينية.',
  imageProduct: '/products/srpw-3400.png',
  images: ['/products/srpw-3400.png'],
  availability: true
},

// ===================== ماكينة غسيل بنزين SRPW-4200 =====================
{
  id: 40,
  name: 'ماكينة غسيل بنزين SRPW-4200',
  price: 0,
  mainCategory: 'ماكينات غسيل',
  subCategory: 'ماكينات غسيل بنزين',
  subSubCategory: 'ماكينات Shineray غسيل بنزين',

  brand: 'Shineray',
  brandMain: 'ماكينات غسيل',
  brandSub: 'ماكينات غسيل بنزين',
  brandSubSub: 'ماكينات Shineray غسيل بنزين',

  modelName: 'SRPW-4200',
  engineModel: 'SRPW-ST89',
  startingSystem: 'RECOIL / حبل',
  fuelType: 'GASOLINE / بنزين',
  netWeight: '99 KG',
  weight: '99 KG',
  madeIn: 'China',

  displacement: '420 CC',
  maxOutputPower: '9.5 KW/3600RPM',
  engineType: 'بنزين',
  inletOutlet: 'AXIAL CAM/CRANKSHAFT PUMP',
  flow: '8350L (3GPM)',
  
  description: 'ماكينة غسيل بنزين من Shineray موديل SRPW-4200، محرك SRPW-ST89، سعة المحرك 420 سي سي، أقصى قوة 9.5 كيلو وات / 3600 دورة/دقيقة، نظام تشغيل بالحبل (RECOIL)، وقود بنزين، مضخة محورية بكامة/عمود مرفقي (AXIAL CAM/CRANKSHAFT PUMP)، معدل التدفق 8350 لتر (3GPM)، الضغط الأقصى 4350PSI، معدل الضغط 4350PSI، الوزن الصافي 99 كجم. صناعة صينية.',
  imageProduct: '/products/srpw-4200.png',
  images: ['/products/srpw-4200.png'],
  availability: true
},

// ===================== مضخة ماء ديزل SRWP20D =====================
{
  id: 41,
  name: 'مضخة ماء ديزل SRWP20D',
  price: 0,
  mainCategory: 'مضخات ماء',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات Shineray ديزل',

  brand: 'Shineray',
  brandMain: 'مضخات ماء',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات Shineray ديزل',

  modelName: 'SRWP20D',
  engineModel: 'SR173FD',
  enginePower: '3.3 KW(4.5HP)/3600RPM',
  startingSystem: 'RECOIL / حبل',
  fuelTankCapacity: '2.5 L',
  fuelType: 'DIESEL / ديزل',
  netWeight: '41 KG',
  weight: '41 KG',
  madeIn: 'China',

  ratedOutputPower: '3.3 KW(4.5HP)/3600RPM',
  engineType: 'FORCED AIR COOLING,4-STROKE',
  ratedOutputPowerRpm: '3600 RPM',
  inletOutlet: '50/50 MM',
  diameter: '50/50 MM',
  suction: '7 M',
  lift: '30 M',
  flow: '500L/MIN',
  
  description: 'مضخة ماء ديزل من Shineray موديل SRWP20D، محرك SR173FD بتبريد هوائي قسري، رباعي الأشواط، قوة المحرك 3.3 كيلو وات (4.5 حصان) / 3600 دورة/دقيقة، نظام تشغيل بالحبل (RECOIL)، سعة خزان الوقود 2.5 لتر، وقود ديزل، نوع المضخة ألومنيوم، قطر المدخل/المخرج 50/50 مم، الشفط 7 متر، الرفع 30 متر، معدل التدفق 500 لتر/دقيقة، أبعاد العبوة 505x406x560 مم، الوزن الصافي 41 كجم. صناعة صينية.',
  imageProduct: '/products/srwp20d.png',
  images: ['/products/srwp20d.png'],
  availability: true
},

// ===================== مضخة ماء ديزل SRWP30D =====================
{
  id: 42,
  name: 'مضخة ماء ديزل SRWP30D',
  price: 0,
  mainCategory: 'مضخات ماء',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات Shineray ديزل',

  brand: 'Shineray',
  brandMain: 'مضخات ماء',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات Shineray ديزل',

  modelName: 'SRWP30D',
  engineModel: 'SR178FD',
  enginePower: '4.0KW(5HP)/3600',
  startingSystem: 'ELECTRIC / كهربائي',
  fuelTankCapacity: '3.5 L',
  fuelType: 'DIESEL / ديزل',
  netWeight: '49.5 KG',
  weight: '49.5 KG',
  madeIn: 'China',

  displacement: '296 CC',
  ratedOutputPower: '4.0KW(5HP)/3600',
  engineType: 'FORCED AIR COOLING,4-STROKE',
  ratedOutputPowerRpm: '3600 RPM',
  inletOutlet: '80/80 MM',
  diameter: '80/80 MM',
  suction: '7 M',
  lift: '23 M',
  flow: '690L/MIN',
  
  description: 'مضخة ماء ديزل من Shineray موديل SRWP30D، محرك SR178FD بتبريد هوائي قسري، رباعي الأشواط، سعة 296 سي سي، قوة المحرك 4.0 كيلو وات (5 حصان) / 3600 دورة/دقيقة، نظام تشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 3.5 لتر، وقود ديزل، نوع المضخة ألومنيوم، قطر المدخل/المخرج 80/80 مم، الشفط 7 متر، الرفع 23 متر، معدل التدفق 690 لتر/دقيقة، أبعاد العبوة 620x540x590 مم، الوزن الصافي 49.5 كجم. صناعة صينية.',
  imageProduct: '/products/srwp30d.png',
  images: ['/products/srwp30d.png'],
  availability: true
},

// ===================== مضخة ماء ديزل SRWP40D =====================
{
  id: 43,
  name: 'مضخة ماء ديزل SRWP40D',
  price: 0,
  mainCategory: 'مضخات ماء',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات Shineray ديزل',

  brand: 'Shineray',
  brandMain: 'مضخات ماء',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات Shineray ديزل',

  modelName: 'SRWP40D',
  engineModel: 'SR186FD',
  enginePower: '6.5KW(8HP)/3600',
  startingSystem: 'ELECTRIC / كهربائي',
  fuelTankCapacity: '5.5 L',
  fuelType: 'DIESEL / ديزل',
  netWeight: '71 KG',
  weight: '71 KG',
  madeIn: 'China',

  ratedOutputPower: '6.5KW(8HP)/3600',
  engineType: 'FORCED AIR COOLING,4-STROKE',
  ratedOutputPowerRpm: '3600 RPM',
  inletOutlet: '100/100 MM',
  diameter: '100/100 MM',
  suction: '7 M',
  lift: '13.50 M',
  flow: '1350 L/MIN',
  
  description: 'مضخة ماء ديزل من Shineray موديل SRWP40D، محرك SR186FD بتبريد هوائي قسري، رباعي الأشواط، قوة المحرك 6.5 كيلو وات (8 حصان) / 3600 دورة/دقيقة، نظام تشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 5.5 لتر، وقود ديزل، نوع المضخة ألومنيوم، قطر المدخل/المخرج 100/100 مم، الشفط 7 متر، الرفع 13.50 متر، معدل التدفق 1350 لتر/دقيقة، أبعاد العبوة 620x540x590 مم، الوزن الصافي 71 كجم. صناعة صينية.',
  imageProduct: '/products/srwp40d.png',
  images: ['/products/srwp40d.png'],
  availability: true
},

// ===================== مضخة ماء بنزين SE-50X =====================
{
  id: 44,
  name: 'مضخة ماء بنزين SE-50X',
  price: 0,
  mainCategory: 'مضخات ماء',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مضخات ماء',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات Shineray بنزين',

  modelName: 'SE-50X',
  engineModel: 'SE-50X-2',
  enginePower: '2.5KW - 3HP',
  startingSystem: 'RECOIL / حبل',
  fuelType: 'PETROL / بنزين',
  netWeight: '23KG',
  weight: '23 KG',
  madeIn: 'China',

  ratedOutputPower: '2.5KW - 3HP',
  engineType: 'بنزين',
  ratedOutputPowerRpm: '3600 RPM',
  inletOutlet: '50MM 2 INCH',
  diameter: '50MM 2 INCH',
  flow: '600L/MIN',
  
  description: 'مضخة ماء بنزين من Shineray موديل SE-50X، محرك SE-50X-2، قوة المحرك 2.5 كيلو وات - 3 حصان، السرعة 3600 دورة/دقيقة، نظام تشغيل بالحبل (RECOIL)، وقود بنزين (PETROL)، قطر التوصيل 50 مم 2 بوصة، معدل التدفق 600 لتر/دقيقة، الوزن الصافي 23 كجم. صناعة صينية.',
  imageProduct: '/products/se-50x.png',
  images: ['/products/se-50x.png'],
  availability: true
},

// ===================== مضخة ماء بنزين SE-80X =====================
{
  id: 45,
  name: 'مضخة ماء بنزين SE-80X',
  price: 0,
  mainCategory: 'مضخات ماء',
  subCategory: 'مضخات بنزين',
  subSubCategory: 'مضخات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'مضخات ماء',
  brandSub: 'مضخات بنزين',
  brandSubSub: 'مضخات Shineray بنزين',

  modelName: 'SE-80X',
  engineModel: 'SE-80X-2',
  enginePower: '2.8KW - 10HP',
  startingSystem: 'RECOIL / حبل',
  fuelType: 'PETROL / بنزين',
  netWeight: '27KG',
  weight: '27 KG',
  madeIn: 'China',

  ratedOutputPower: '2.8KW - 10HP',
  engineType: 'بنزين',
  ratedOutputPowerRpm: '3600 RPM',
  inletOutlet: '80MM 3 INCH',
  diameter: '80MM 3 INCH',
  flow: '830L/MIN',
  
  description: 'مضخة ماء بنزين من Shineray موديل SE-80X، محرك SE-80X-2، قوة المحرك 2.8 كيلو وات - 10 حصان، السرعة 3600 دورة/دقيقة، نظام تشغيل بالحبل (RECOIL)، وقود بنزين (PETROL)، قطر التوصيل 80 مم 3 بوصة، معدل التدفق 830 لتر/دقيقة، الوزن الصافي 27 كجم. صناعة صينية.',
  imageProduct: '/products/se-80x.png',
  images: ['/products/se-80x.png'],
  availability: true
},
// ===================== مولد كهرباء ديزل صامت SH25T / SH25T-3 =====================
{
  id: 46,
  name: 'مولد كهرباء ديزل صامت SH25T / SH25T-3',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات Shineray ديزل صامتة',

  brand: 'Shineray',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات Shineray ديزل صامتة',

  modelName: 'SH25T / SH25T-3',
  engineModel: 'SH25T / SH25T-3',
  enginePower: '25كيلو وات - 19 كيلو وات',
  startingSystem: 'كهرباء',
  fuelType: 'DIESEL / ديزل',
  netWeight: '190 kg',
  weight: '190 KG',
  madeIn: 'China',

  ratedPower: '19 KW / 25كيلو وات - 19 كيلو وات',
  maxPower: '19.8 KW / الحد الاقصى للقدرة',
  ratedSpeed: '3,600 RPM / سرعة محركة',
  ratedCurrent: '41A 17.1A / تيار الحمل العادى',
  ratedFrequency: '50 Hz / تيار الحمل العادى',
  ratedVoltage: '220V/380V / الجهد الاسمى الناتج',
  insulationLevel: 'F / مستوى العزل',
  maxAmbientTemp: '40°C / درجة الحرارة المحيطة',
  coolingClass: 'IP23 / مستوى التبريد',
  phase: '1 / 3 / فاز',
  performanceClass: 'G1 / مستوى الاداء',
  noise: '70 dB / الازيل الضوضاء',
  maxAltitude: '1000m / الارتفاع الاقصى',
  fuelTankCapacity: '23M / بالماء',
  manufacturingYear: '2025 / سنة الصنع',
  engineType: 'ديزل صامت',
  certification: 'ISO 9534:EN 12601 / شهادة الجودة',
  
  description: 'مولد كهرباء ديزل صامت من Shineray موديل SH25T / SH25T-3، القدرة المقننة 19 كيلو وات، القدرة القصوى 19.8 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 41A 17.1A، التردد 50 هرتز، الجهد 220V/380V، مستوى العزل F، درجة الحرارة المحيطة 40 درجة، مستوى التبريد IP23، فاز 1/3، مستوى الأداء G1، مستوى الضوضاء 70 ديسيبل، الوزن 190 كجم، سعة خزان الوقود 23 لتر، شهادة الجودة ISO 9534:EN 12601. صناعة صينية.',
  imageProduct: '/products/sh25t.png',
  images: ['/products/sh25t.png'],
  availability: true
},
// ===================== محرك بنزين SR210 =====================
{
  id: 47,
  name: 'محرك بنزين SR210',
  price: 0,
  mainCategory: 'محركات',
  subCategory: 'محركات بنزين',
  subSubCategory: 'محركات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'محركات',
  brandSub: 'محركات بنزين',
  brandSubSub: 'محركات Shineray بنزين',

  modelName: 'SR210',
  engineType: 'Forced air cooling,4-Stroke,OHV,Single Cylinder',
  bore_stroke: '70X55',
  displacement: '212',
  compressionRatio: '8.5:1',
  maxPower: '4.2/3600',
  ratedOutputPower: '4.0/3600',
  maxTorque: '12.5/2500',
  startingSystem: 'RECOIL / حبل',
  fuelTankCapacity: '3.6L',
  oilVolume: '0.6',
  fuelConsumptionRate: 'g 395',
  packageDimensions: '405X365X390',
  netWeight: '15',
  madeIn: 'China',
  
  description: 'محرك بنزين من Shineray موديل SR210، نظام تبريد هوائي قسري، 4 أشواط، OHV، أسطوانة واحدة، قطر المكبس والشوط 70X55، السعة 212 سي سي، نسبة الانضغاط 8.5:1، القدرة القصوى 4.2/3600، القدرة المقننة 4.0/3600، عزم الدوران الأقصى 12.5/2500، نظام التشغيل بالحبل (RECOIL)، سعة خزان الوقود 3.6 لتر، حجم الزيت 0.6 لتر، معدل استهلاك الوقود 395 جم، الأبعاد 405X365X390 مم، الوزن الصافي 15 كجم. صناعة صينية.',
  imageProduct: '/products/sr210.png',
  images: ['/products/sr210.png'],
  availability: true
},

// ===================== محرك بنزين SR210E =====================
{
  id: 48,
  name: 'محرك بنزين SR210E',
  price: 0,
  mainCategory: 'محركات',
  subCategory: 'محركات بنزين',
  subSubCategory: 'محركات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'محركات',
  brandSub: 'محركات بنزين',
  brandSubSub: 'محركات Shineray بنزين',

  modelName: 'SR210E',
  engineType: 'Forced air cooling,4-Stroke,OHV,25°Single Cylinder',
  bore_stroke: '70X55',
  displacement: '212',
  compressionRatio: '8.5:1',
  maxPower: '4.2/3600',
  ratedOutputPower: '4.0/3600',
  maxTorque: '12.5/2500',
  startingSystem: 'ELECTRIC / كهرباء',
  fuelTankCapacity: '3.6L',
  oilVolume: '0.6',
  fuelConsumptionRate: 'g 395',
  packageDimensions: '405X365X390',
  netWeight: '16',
  madeIn: 'China',
  
  description: 'محرك بنزين من Shineray موديل SR210E، نظام تبريد هوائي قسري، 4 أشواط، OHV، 25 درجة أسطوانة واحدة، قطر المكبس والشوط 70X55، السعة 212 سي سي، نسبة الانضغاط 8.5:1، القدرة القصوى 4.2/3600، القدرة المقننة 4.0/3600، عزم الدوران الأقصى 12.5/2500، نظام التشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 3.6 لتر، حجم الزيت 0.6 لتر، معدل استهلاك الوقود 395 جم، الأبعاد 405X365X390 مم، الوزن الصافي 16 كجم. صناعة صينية.',
  imageProduct: '/products/sr210e.png',
  images: ['/products/sr210e.png'],
  availability: true
},

// ===================== محرك بنزين SR390E =====================
{
  id: 49,
  name: 'محرك بنزين SR390E',
  price: 0,
  mainCategory: 'محركات',
  subCategory: 'محركات بنزين',
  subSubCategory: 'محركات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'محركات',
  brandSub: 'محركات بنزين',
  brandSubSub: 'محركات Shineray بنزين',

  modelName: 'SR390E',
  engineType: 'Forced air cooling,4-Stroke,OHV,25°Single Cylinder',
  bore_stroke: '88X64',
  displacement: '389',
  compressionRatio: '8.5:1',
  maxPower: '9.0/3600',
  ratedOutputPower: '7.5/3600',
  maxTorque: '21.0/2500',
  startingSystem: 'ELECTRIC / كهرباء',
  fuelTankCapacity: '6.5L',
  oilVolume: '1.1',
  fuelConsumptionRate: '≤ 370',
  packageDimensions: '445X425X485',
  netWeight: '34',
  madeIn: 'China',
  
  description: 'محرك بنزين من Shineray موديل SR390E، نظام تبريد هوائي قسري، 4 أشواط، OHV، 25 درجة أسطوانة واحدة، قطر المكبس والشوط 88X64، السعة 389 سي سي، نسبة الانضغاط 8.5:1، القدرة القصوى 9.0/3600، القدرة المقننة 7.5/3600، عزم الدوران الأقصى 21.0/2500، نظام التشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 6.5 لتر، حجم الزيت 1.1 لتر، معدل استهلاك الوقود ≤ 370 جم، الأبعاد 445X425X485 مم، الوزن الصافي 34 كجم. صناعة صينية.',
  imageProduct: '/products/sr390e.png',
  images: ['/products/sr390e.png'],
  availability: true
},

// ===================== محرك بنزين SR420E =====================
{
  id: 50,
  name: 'محرك بنزين SR420E',
  price: 0,
  mainCategory: 'محركات',
  subCategory: 'محركات بنزين',
  subSubCategory: 'محركات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'محركات',
  brandSub: 'محركات بنزين',
  brandSubSub: 'محركات Shineray بنزين',

  modelName: 'SR420E',
  engineType: 'Forced air cooling,4-Stroke,OHV,25°Single Cylinder',
  bore_stroke: '90X66',
  displacement: '420',
  compressionRatio: '8.5:1',
  maxPower: '10.5/3600',
  ratedOutputPower: '9.6/3600',
  maxTorque: '23.0/2500',
  startingSystem: 'ELECTRIC / كهرباء',
  fuelTankCapacity: '6.5L',
  oilVolume: '1.1',
  fuelConsumptionRate: '≤ 370',
  packageDimensions: '445X425X485',
  netWeight: '34',
  madeIn: 'China',
  
  description: 'محرك بنزين من Shineray موديل SR420E، نظام تبريد هوائي قسري، 4 أشواط، OHV، 25 درجة أسطوانة واحدة، قطر المكبس والشوط 90X66، السعة 420 سي سي، نسبة الانضغاط 8.5:1، القدرة القصوى 10.5/3600، القدرة المقننة 9.6/3600، عزم الدوران الأقصى 23.0/2500، نظام التشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 6.5 لتر، حجم الزيت 1.1 لتر، معدل استهلاك الوقود ≤ 370 جم، الأبعاد 445X425X485 مم، الوزن الصافي 34 كجم. صناعة صينية.',
  imageProduct: '/products/sr420e.png',
  images: ['/products/sr420e.png'],
  availability: true
},

// ===================== محرك بنزين SR186FADE =====================
{
  id: 51,
  name: 'محرك بنزين SR186FADE',
  price: 0,
  mainCategory: 'محركات',
  subCategory: 'محركات بنزين',
  subSubCategory: 'محركات Shineray بنزين',

  brand: 'Shineray',
  brandMain: 'محركات',
  brandSub: 'محركات بنزين',
  brandSubSub: 'محركات Shineray بنزين',

  modelName: 'SR186FADE',
  engineType: 'Forced air cooling,4-Stroke,OHV,25°Single Cylinder',
  bore_stroke: '68X54',
  displacement: '196',
  compressionRatio: '8.5:1',
  maxPower: '4.8/3600',
  ratedOutputPower: '3.6/3600',
  maxTorque: '11.6/2500',
  startingSystem: 'ELECTRIC / كهرباء',
  fuelTankCapacity: '3.6L',
  oilVolume: '0.6',
  fuelConsumptionRate: '< 395',
  packageDimensions: '540X460X605',
  netWeight: '50',
  madeIn: 'China',
  
  description: 'محرك بنزين من Shineray موديل SR186FADE، نظام تبريد هوائي قسري، 4 أشواط، OHV، 25 درجة أسطوانة واحدة، قطر المكبس والشوط 68X54، السعة 196 سي سي، نسبة الانضغاط 8.5:1، القدرة القصوى 4.8/3600، القدرة المقننة 3.6/3600، عزم الدوران الأقصى 11.6/2500، نظام التشغيل كهربائي (ELECTRIC)، سعة خزان الوقود 3.6 لتر، حجم الزيت 0.6 لتر، معدل استهلاك الوقود < 395 جم، الأبعاد 540X460X605 مم، الوزن الصافي 50 كجم. صناعة صينية.',
  imageProduct: '/products/sr186fade.png',
  images: ['/products/sr186fade.png'],
  availability: true
},

// ===================== مولد كهرباء إنفرتر بنزين GPI4500 =====================
{
  id: 52,
  name: 'مولد كهرباء إنفرتر بنزين GPI4500',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين إنفرتر',
  subSubCategory: 'مولدات G-POWER بنزين إنفرتر',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين إنفرتر',
  brandSubSub: 'مولدات G-POWER بنزين إنفرتر',

  modelName: 'GPI4500',
  ratedPower: '3.5KW',
  maxPower: '4.0KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '15.9A',
  ratedFrequency: '50/60 Hz',
  ratedVoltage: '220V',
  startingSystem: 'Recoil/E-start / حبل أو كهرباء',
  fuelType: 'PETROL / بنزين',
  engineType: 'بنزين إنفرتر',
  parallelOperation: 'Yes (Optional) / يدعم التوصيل على التوازي اختياري',
  madeIn: 'China',
  
  description: 'مولد كهرباء إنفرتر بنزين من G-POWER موديل GPI4500، القدرة المقننة 3.5 كيلو وات، القدرة القصوى 4.0 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 15.9 أمبير، التردد 50/60 هرتز، الجهد 220 فولت، نظام التشغيل بالحبل أو كهربائي (Recoil/E-start)، وقود بنزين، يدعم خاصية التوصيل على التوازي (اختياري). صناعة صينية.',
  imageProduct: '/products/gpi4500.png',
  images: ['/products/gpi4500.png'],
  availability: true
},

// ===================== مولد كهرباء إنفرتر بنزين GPID9000 =====================
{
  id: 53,
  name: 'مولد كهرباء إنفرتر بنزين GPID9000',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين إنفرتر',
  subSubCategory: 'مولدات G-POWER بنزين إنفرتر',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين إنفرتر',
  brandSubSub: 'مولدات G-POWER بنزين إنفرتر',

  modelName: 'GPID9000',
  ratedPower: '7.5KW(GAS) / 6.5KW(LPG)',
  maxPower: '8.0KW(GAS) / 7.0KW(LPG)',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '34.1A',
  ratedFrequency: '50/60 Hz',
  ratedVoltage: '220V',
  startingSystem: 'Recoil/E-start / حبل أو كهرباء',
  fuelType: 'DUAL-FUEL / بنزين أو غاز',
  engineType: 'بنزين/غاز إنفرتر',
  parallelOperation: 'Yes (Optional) / يدعم التوصيل على التوازي اختياري',
  madeIn: 'China',
  
  description: 'مولد كهرباء إنفرتر ثنائي الوقود من G-POWER موديل GPID9000، القدرة المقننة 7.5 كيلو وات (بنزين) / 6.5 كيلو وات (غاز)، القدرة القصوى 8.0 كيلو وات (بنزين) / 7.0 كيلو وات (غاز)، السرعة 3600 دورة/دقيقة، التيار المقنن 34.1 أمبير، التردد 50/60 هرتز، الجهد 220 فولت، نظام التشغيل بالحبل أو كهربائي (Recoil/E-start)، يعمل بالبنزين أو الغاز (DUAL-FUEL)، يدعم خاصية التوصيل على التوازي (اختياري). صناعة صينية.',
  imageProduct: '/products/gpid9000.png',
  images: ['/products/gpid9000.png'],
  availability: true
},
// ===================== مولد كهرباء بنزين GP15000-1 =====================
{
  id: 54,
  name: 'مولد كهرباء بنزين GP15000-1',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات G-POWER بنزين إطار مفتوح',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات G-POWER بنزين إطار مفتوح',

  modelName: 'GP15000-1',
  ratedPower: '13KW',
  maxPower: '14KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '59.1A',
  ratedFrequency: '60Hz',
  ratedVoltage: '220V',
  startingSystem: 'Recoil/E-start / حبل أو كهرباء',
  fuelType: 'PETROL / بنزين',
  engineType: 'بنزين إطار مفتوح',
  features: 'خزان وقود كبير، عمر خدمة طويل، كفاءة عالية',
  madeIn: 'China',
  
  description: 'مولد كهرباء بنزين إطار مفتوح من G-POWER موديل GP15000-1، القدرة المقننة 13 كيلو وات، القدرة القصوى 14 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 59.1 أمبير، التردد 60 هرتز، الجهد 220 فولت، نظام التشغيل بالحبل أو كهربائي (Recoil/E-start)، وقود بنزين. خزان وقود كبير للتشغيل لفترات طويلة، قوة قوية وعمر خدمة طويل، مولد احترافي بكفاءة عالية وزيادة في ناتج الطاقة. صناعة صينية.',
  imageProduct: '/products/gp15000-1.png',
  images: ['/products/gp15000-1.png'],
  availability: true
},

// ===================== مولد كهرباء بنزين GP15000-3 =====================
{
  id: 55,
  name: 'مولد كهرباء بنزين GP15000-3',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات G-POWER بنزين إطار مفتوح',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات G-POWER بنزين إطار مفتوح',

  modelName: 'GP15000-3',
  ratedPower: '13KW',
  maxPower: '14KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '19.7A',
  ratedFrequency: '60Hz',
  ratedVoltage: '220V',
  startingSystem: 'Recoil/E-start / حبل أو كهرباء',
  fuelType: 'PETROL / بنزين',
  engineType: 'بنزين إطار مفتوح',
  features: 'خزان وقود كبير، عمر خدمة طويل، كفاءة عالية',
  madeIn: 'China',
  
  description: 'مولد كهرباء بنزين إطار مفتوح من G-POWER موديل GP15000-3، القدرة المقننة 13 كيلو وات، القدرة القصوى 14 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 19.7 أمبير، التردد 60 هرتز، الجهد 220 فولت، نظام التشغيل بالحبل أو كهربائي (Recoil/E-start)، وقود بنزين. خزان وقود كبير للتشغيل لفترات طويلة، قوة قوية وعمر خدمة طويل، مولد احترافي بكفاءة عالية وزيادة في ناتج الطاقة. صناعة صينية.',
  imageProduct: '/products/gp15000-3.png',
  images: ['/products/gp15000-3.png'],
  availability: true
},
// ===================== مولد كهرباء ديزل SCD4500 =====================
{
  id: 56,
  name: 'مولد كهرباء ديزل SCD4500',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات G-POWER ديزل',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات G-POWER ديزل',

  modelName: 'SCD4500',
  ratedPower: '3.5 KW',
  maxPower: '4 KW',
  ratedCurrent: '15.9A',
  ratedSpeed: '3,600 RPM',
  ratedFrequency: '60 Hz',
  ratedVoltage: '220V',
  insulationLevel: 'F',
  maxAmbientTemp: '50°',
  qualityClass: 'A',
  powerFactor: '1',
  phase: '1',
  ratingClass: 'S1',
  performanceClass: 'G1',
  netWeight: '72 KG',
  startingSystem: 'E-Start / كهرباء',
  fuelType: 'DIESEL / ديزل',
  engineType: 'ديزل',
  madeIn: 'China',
  
  description: 'مولد كهرباء ديزل من G-POWER موديل SCD4500، القدرة المقننة 3.5 كيلو وات، القدرة القصوى 4 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 15.9 أمبير، التردد 60 هرتز، الجهد 220 فولت، مستوى العزل F، درجة الحرارة المحيطة القصوى 50 درجة، فئة الجودة A، معامل القدرة 1، فاز 1، فئة التصنيف S1، فئة الأداء G1، الوزن الصافي 72 كجم، نظام التشغيل كهربائي (E-Start). صناعة صينية.',
  imageProduct: '/products/scd4500.png',
  images: ['/products/scd4500.png'],
  availability: true
},

// ===================== مولد كهرباء ديزل SCD6500 =====================
{
  id: 57,
  name: 'مولد كهرباء ديزل SCD6500',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات G-POWER ديزل',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات G-POWER ديزل',

  modelName: 'SCD6500',
  ratedPower: '5 KW',
  maxPower: '5.5 KW',
  ratedCurrent: '22.7A',
  ratedSpeed: '3,600 RPM',
  ratedFrequency: '60 Hz',
  ratedVoltage: '220V',
  insulationLevel: 'F',
  maxAmbientTemp: '50°',
  qualityClass: 'A',
  powerFactor: '1',
  phase: '1',
  ratingClass: 'S1',
  performanceClass: 'G1',
  netWeight: '113 KG',
  startingSystem: 'E-Start / كهرباء',
  fuelType: 'DIESEL / ديزل',
  engineType: 'ديزل',
  madeIn: 'China',
  
  description: 'مولد كهرباء ديزل من G-POWER موديل SCD6500، القدرة المقننة 5 كيلو وات، القدرة القصوى 5.5 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 22.7 أمبير، التردد 60 هرتز، الجهد 220 فولت، مستوى العزل F، درجة الحرارة المحيطة القصوى 50 درجة، فئة الجودة A، معامل القدرة 1، فاز 1، فئة التصنيف S1، فئة الأداء G1، الوزن الصافي 113 كجم، نظام التشغيل كهربائي (E-Start). صناعة صينية.',
  imageProduct: '/products/scd6500.png',
  images: ['/products/scd6500.png'],
  availability: true
},

// ===================== مولد كهرباء ديزل SCD8000 =====================
{
  id: 58,
  name: 'مولد كهرباء ديزل SCD8000',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات G-POWER ديزل',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات G-POWER ديزل',

  modelName: 'SCD8000',
  ratedPower: '6.5 KW',
  maxPower: '7 KW',
  ratedCurrent: '29.5A',
  ratedSpeed: '3,600 RPM',
  ratedFrequency: '60 Hz',
  ratedVoltage: '220V',
  insulationLevel: 'F',
  maxAmbientTemp: '50°',
  qualityClass: 'A',
  powerFactor: '1',
  phase: '1',
  ratingClass: 'S1',
  performanceClass: 'G1',
  netWeight: '120 KG',
  startingSystem: 'E-Start / كهرباء',
  fuelType: 'DIESEL / ديزل',
  engineType: 'ديزل',
  madeIn: 'China',
  
  description: 'مولد كهرباء ديزل من G-POWER موديل SCD8000، القدرة المقننة 6.5 كيلو وات، القدرة القصوى 7 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 29.5 أمبير، التردد 60 هرتز، الجهد 220 فولت، مستوى العزل F، درجة الحرارة المحيطة القصوى 50 درجة، فئة الجودة A، معامل القدرة 1، فاز 1، فئة التصنيف S1، فئة الأداء G1، الوزن الصافي 120 كجم، نظام التشغيل كهربائي (E-Start). صناعة صينية.',
  imageProduct: '/products/scd8000.png',
  images: ['/products/scd8000.png'],
  availability: true
},

// ===================== مولد كهرباء ديزل SCD10000-1 =====================
{
  id: 59,
  name: 'مولد كهرباء ديزل SCD10000-1',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات G-POWER ديزل',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات G-POWER ديزل',

  modelName: 'SCD10000-1',
  ratedPower: '7.5KW',
  maxPower: '8.0KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '34.1A',
  ratedFrequency: '60Hz',
  ratedVoltage: '220V',
  startingSystem: 'E-Start / كهرباء',
  fuelType: 'DIESEL / ديزل',
  engineType: 'ديزل',
  madeIn: 'China',
  
  description: 'مولد كهرباء ديزل من G-POWER موديل SCD10000-1، القدرة المقننة 7.5 كيلو وات، القدرة القصوى 8.0 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 34.1 أمبير، التردد 60 هرتز، الجهد 220 فولت، نظام التشغيل كهربائي (E-Start)، وقود ديزل. صناعة صينية.',
  imageProduct: '/products/scd10000-1.png',
  images: ['/products/scd10000-1.png'],
  availability: true
},

// ===================== مولد كهرباء ديزل SCD10000-3 =====================
{
  id: 60,
  name: 'مولد كهرباء ديزل SCD10000-3',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات G-POWER ديزل',

  brand: 'G-POWER',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات G-POWER ديزل',

  modelName: 'SCD10000-3',
  ratedPower: '7.5KW',
  maxPower: '8.0KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '34.1A/12.2A',
  ratedFrequency: '60Hz',
  ratedVoltage: '220V/380V',
  startingSystem: 'E-Start / كهرباء',
  fuelType: 'DIESEL / ديزل',
  engineType: 'ديزل',
  phase: '3',
  madeIn: 'China',
  
  description: 'مولد كهرباء ديزل ثلاثي الفاز من G-POWER موديل SCD10000-3، القدرة المقننة 7.5 كيلو وات، القدرة القصوى 8.0 كيلو وات، السرعة 3600 دورة/دقيقة، التيار المقنن 34.1A/12.2A، التردد 60 هرتز، الجهد 220V/380V، نظام التشغيل كهربائي (E-Start)، وقود ديزل، ثلاثي الفاز. صناعة صينية.',
  imageProduct: '/products/scd10000-3.png',
  images: ['/products/scd10000-3.png'],
  availability: true
},
// ===================== خلاطة خرسانة CM200L =====================
{
  id: 61,
  name: 'خلاطة خرسانة CM200L',
  price: 0,
  mainCategory: 'معدات بناء',
  subCategory: 'خلاطات خرسانة',
  subSubCategory: 'خلاطات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'معدات بناء',
  brandSub: 'خلاطات خرسانة',
  brandSubSub: 'خلاطات KIBOUR',

  modelName: 'CM200L',
  weight: '300 KG',
  mixerType: 'MIXER',
  engineType: 'AIR COOLED',
  poweredBy: 'KIPOUR',
  startingSystem: 'ELECTRIC / كهرباء',
  powerSource: 'ELECTRICITY / كهرباء',
  outputPower: '650W',
  voltage: '220V',
  phase: 'SINGLE / أحادي الفاز',
  frequency: '60HZ',
  speed: '3600RPM',
  madeIn: 'CHINA',
  
  description: 'خلاطة خرسانة من KIBOUR موديل CM200L، الوزن 300 كجم، نوع الخلاط MIXER، نوع المحرك مبرد بالهواء (AIR COOLED)، مدعوم بـ KIPOUR، نظام التشغيل كهربائي (ELECTRIC)، مصدر الطاقة كهرباء (ELECTRICITY)، القدرة الناتجة 650 وات، الجهد 220 فولت، أحادي الفاز (SINGLE)، التردد 60 هرتز، السرعة 3600 دورة/دقيقة. صناعة صينية.',
  imageProduct: '/products/cm200l.png',
  images: ['/products/cm200l.png'],
  availability: true
},

// ===================== خرطوم ليات 2 بوصة =====================
{
  id: 62,
  name: 'خرطوم ليات 2 بوصة X 50 متر',
  price: 0,
  mainCategory: 'خراطيم',
  subCategory: 'خراطيم ليات',
  subSubCategory: 'خراطيم ليات 2 بوصة',

  brand: 'ليات',
  brandMain: 'خراطيم',
  brandSub: 'خراطيم ليات',
  brandSubSub: 'خراطيم ليات 2 بوصة',

  modelName: '2"X50M',
  diameter: '2 INCH',
  length: '50M',
  type: 'خرطوم ليات',
  madeIn: 'China',
  
  description: 'خرطوم ليات قطر 2 بوصة، الطول 50 متر. صناعة صينية.',
  imageProduct: '/products/layflat-2inch.png',
  images: ['/products/layflat-2inch.png'],
  availability: true
},

// ===================== خرطوم ليات 3 بوصة =====================
{
  id: 63,
  name: 'خرطوم ليات 3 بوصة X 50 متر',
  price: 0,
  mainCategory: 'خراطيم',
  subCategory: 'خراطيم ليات',
  subSubCategory: 'خراطيم ليات 3 بوصة',

  brand: 'ليات',
  brandMain: 'خراطيم',
  brandSub: 'خراطيم ليات',
  brandSubSub: 'خراطيم ليات 3 بوصة',

  modelName: '3"X50M',
  diameter: '3 INCH',
  length: '50M',
  type: 'خرطوم ليات',
  madeIn: 'China',
  
  description: 'خرطوم ليات قطر 3 بوصة، الطول 50 متر. صناعة صينية.',
  imageProduct: '/products/layflat-3inch.png',
  images: ['/products/layflat-3inch.png'],
  availability: true
},

// ===================== خرطوم ليات 4 بوصة =====================
{
  id: 64,
  name: 'خرطوم ليات 4 بوصة X 50 متر',
  price: 0,
  mainCategory: 'خراطيم',
  subCategory: 'خراطيم ليات',
  subSubCategory: 'خراطيم ليات 4 بوصة',

  brand: 'ليات',
  brandMain: 'خراطيم',
  brandSub: 'خراطيم ليات',
  brandSubSub: 'خراطيم ليات 4 بوصة',

  modelName: '4"X50M',
  diameter: '4 INCH',
  length: '50M',
  type: 'خرطوم ليات',
  madeIn: 'China',
  
  description: 'خرطوم ليات قطر 4 بوصة، الطول 50 متر. صناعة صينية.',
  imageProduct: '/products/layflat-4inch.png',
  images: ['/products/layflat-4inch.png'],
  availability: true
},

// ===================== خرطوم ليات 6 بوصة =====================
{
  id: 65,
  name: 'خرطوم ليات 6 بوصة X 50 متر',
  price: 0,
  mainCategory: 'خراطيم',
  subCategory: 'خراطيم ليات',
  subSubCategory: 'خراطيم ليات 6 بوصة',

  brand: 'ليات',
  brandMain: 'خراطيم',
  brandSub: 'خراطيم ليات',
  brandSubSub: 'خراطيم ليات 6 بوصة',

  modelName: '6"X50M',
  diameter: '6 INCH',
  length: '50M',
  type: 'خرطوم ليات',
  madeIn: 'China',
  
  description: 'خرطوم ليات قطر 6 بوصة، الطول 50 متر. صناعة صينية.',
  imageProduct: '/products/layflat-6inch.png',
  images: ['/products/layflat-6inch.png'],
  availability: true
},

// ===================== خرطوم ليات 8 بوصة =====================
{
  id: 66,
  name: 'خرطوم ليات 8 بوصة X 50 متر',
  price: 0,
  mainCategory: 'خراطيم',
  subCategory: 'خراطيم ليات',
  subSubCategory: 'خراطيم ليات 8 بوصة',

  brand: 'ليات',
  brandMain: 'خراطيم',
  brandSub: 'خراطيم ليات',
  brandSubSub: 'خراطيم ليات 8 بوصة',

  modelName: '8"X50M',
  diameter: '8 INCH',
  length: '50M',
  type: 'خرطوم ليات',
  madeIn: 'China',
  
  description: 'خرطوم ليات قطر 8 بوصة، الطول 50 متر. صناعة صينية.',
  imageProduct: '/products/layflat-8inch.png',
  images: ['/products/layflat-8inch.png'],
  availability: true
},

// ===================== مولد كهرباء S7500CXS-4 =====================
{
  id: 62,
  name: 'مولد كهرباء S7500CXS-4',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات KIBOUR',

  modelName: 'S7500CXS-4',
  weight: '120 KG',
  ratedPower: '7.0 KW',
  maxPower: '7.5 KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '34 A',
  ratedFrequency: '50/60 HZ',
  ratedVoltage: '220 V',
  insulationLevel: 'F',
  maxAmbientTemp: '50 °C',
  qualityClass: 'A',
  powerFactor: '0.8',
  phase: 'SINGLE / أحادي الفاز',
  ratingClass: 'S1',
  performanceClass: 'G1',
  startingSystem: 'ELECTRIC / كهرباء',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد كهرباء من KIBOUR موديل S7500CXS-4، الوزن 120 كجم، القدرة المقننة (RATED POWER) 7.0 كيلو وات، أقصى قدرة (MAX POWER) 7.5 كيلو وات، السرعة المقننة 3600 دورة/دقيقة، التيار المقنن 34 أمبير، التردد المقنن 50/60 هرتز، الجهد المقنن 220 فولت، مستوى العزل F، أقصى درجة حرارة محيطة 50 درجة مئوية، فئة الجودة A، معامل القدرة 0.8، أحادي الفاز (SINGLE)، فئة التصنيف S1، فئة الأداء G1، نظام التشغيل كهربائي (ELECTRIC)، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/s7500cxs-4.png',
  images: ['/products/s7500cxs-4.png'],
  availability: true
},
// ===================== هزاز خرسانة SV-38 (نموذج 1) =====================
{
  id: 63,
  name: 'هزاز خرسانة SV-38',
  price: 0,
  mainCategory: 'معدات بناء',
  subCategory: 'هزازات خرسانة',
  subSubCategory: 'هزازات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'معدات بناء',
  brandSub: 'هزازات خرسانة',
  brandSubSub: 'هزازات KIBOUR',

  modelName: 'SV-38',
  shaftRotateSpeed: '3000-3600 RPM',
  vibrationHead: '38*290 mm',
  amplitude: '1.2 mm',
  vibration: '3000-12000 vpm',
  engineModel: 'EY20',
  horsepower: '5 HP',
  netWeight: '23 KG',
  packingSize: '515*580*515 mm',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'هزاز خرسانة من KIBOUR موديل SV-38، سرعة دوران العمود (SHAFT ROTATE SPEED) 3000-3600 دورة/دقيقة، رأس الاهتزاز (VIBRATION HEAD) 38×290 ملم، السعة (AMPLITUDE) 1.2 ملم، الاهتزاز 3000-12000 اهتزازة/دقيقة، موديل المحرك EY20، القدرة 5 حصان، الوزن الصافي 23 كجم، حجم التعبئة 515×580×515 ملم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/sv-38-model1.png',
  images: ['/products/sv-38-model1.png'],
  availability: true
},

// ===================== هزاز خرسانة SV-38 (نموذج 2) =====================
{
  id: 64,
  name: 'هزاز خرسانة SV-38',
  price: 0,
  mainCategory: 'معدات بناء',
  subCategory: 'هزازات خرسانة',
  subSubCategory: 'هزازات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'معدات بناء',
  brandSub: 'هزازات خرسانة',
  brandSubSub: 'هزازات KIBOUR',

  modelName: 'SV-38',
  shaftRotateSpeed: '3000-3600 RPM',
  vibrationHead: '38*290 mm',
  amplitude: '1.2 mm',
  vibration: '3000-12000 vpm',
  engineModel: '196cc 6.5HP',
  horsepower: '6.5 HP',
  netWeight: '22 KG',
  grossWeight: '24 KG',
  packingSize: '515*400*470 mm',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'هزاز خرسانة من KIBOUR موديل SV-38، سرعة دوران العمود (SHAFT ROTATE SPEED) 3000-3600 دورة/دقيقة، رأس الاهتزاز (VIBRATION HEAD) 38×290 ملم، السعة (AMPLITUDE) 1.2 ملم، الاهتزاز 3000-12000 اهتزازة/دقيقة، موديل المحرك 196cc 6.5HP، القدرة 6.5 حصان، الوزن الصافي 22 كجم، الوزن الإجمالي 24 كجم، حجم التعبئة 515×400×470 ملم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/sv-38-model2.png',
  images: ['/products/sv-38-model2.png'],
  availability: true
},
// ===================== رشاش ماء SS-22T =====================
{
  id: 65,
  name: 'رشاش ماء SS-22T',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'رشاشات ماء',
  subSubCategory: 'رشاشات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'معدات زراعية',
  brandSub: 'رشاشات ماء',
  brandSubSub: 'رشاشات KIBOUR',

  modelName: 'SS-22T',
  sprayingRPM: '800-1000 RPM',
  sprayingSuction: '16.5~20.5 L/min',
  sprayingPressure: '25~30 kg/cm²',
  irrigationRPM: '1200~1400 RPM',
  irrigationSuction: '25~29 L/min',
  irrigationPressure: '16~20 kg/cm²',
  netWeight: '40.6 KG',
  grossWeight: '48.6 KG',
  packingSize: '870*390*680 mm',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'رشاش ماء من KIBOUR موديل SS-22T، الرش: عدد الدورات 800-1000 دورة/دقيقة، السحب (SUCTION) 16.5~20.5 لتر/دقيقة، الضغط 25~30 كجم/سم²، الري: عدد الدورات 1200~1400 دورة/دقيقة، السحب 25~29 لتر/دقيقة، الضغط 16~20 كجم/سم²، الوزن الصافي 40.6 كجم، الوزن الإجمالي 48.6 كجم، حجم التعبئة 870×390×680 ملم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ss-22t.png',
  images: ['/products/ss-22t.png'],
  availability: true
},

// ===================== رشاش ماء SS-45T =====================
{
  id: 66,
  name: 'رشاش ماء SS-45T',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'رشاشات ماء',
  subSubCategory: 'رشاشات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'معدات زراعية',
  brandSub: 'رشاشات ماء',
  brandSubSub: 'رشاشات KIBOUR',

  modelName: 'SS-45T',
  sprayingRPM: '700-800 RPM',
  sprayingSuction: '29~35 L/min',
  sprayingPressure: '25~30 kg/cm²',
  irrigationRPM: '1000~1400 RPM',
  irrigationSuction: '40~52 L/min',
  irrigationPressure: '14~18 kg/cm²',
  netWeight: '96.8 KG',
  grossWeight: '107.1 KG',
  packingSize: '1140*770*790 mm',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'رشاش ماء من KIBOUR موديل SS-45T، الرش: عدد الدورات 700-800 دورة/دقيقة، السحب (SUCTION) 29~35 لتر/دقيقة، الضغط 25~30 كجم/سم²، الري: عدد الدورات 1000~1400 دورة/دقيقة، السحب 40~52 لتر/دقيقة، الضغط 14~18 كجم/سم²، الوزن الصافي 96.8 كجم، الوزن الإجمالي 107.1 كجم، حجم التعبئة 1140×770×790 ملم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ss-45t.png',
  images: ['/products/ss-45t.png'],
  availability: true
},
// ===================== رشاش ماء SS-22 =====================
{
  id: 67,
  name: 'رشاش ماء SS-22',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'رشاشات ماء',
  subSubCategory: 'رشاشات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'معدات زراعية',
  brandSub: 'رشاشات ماء',
  brandSubSub: 'رشاشات KIBOUR',

  modelName: 'SS-22',
  sprayingRPM: '800-1000 RPM',
  sprayingSuction: '16.5~20.5 L/min',
  sprayingPressure: '25~30 kg/cm²',
  irrigationRPM: '1200~1400 RPM',
  irrigationSuction: '25~29 L/min',
  irrigationPressure: '16~20 kg/cm²',
  netWeight: '30.6 KG',
  grossWeight: '34.4 KG',
  packingSize: '970*320*430 mm',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'رشاش ماء من KIBOUR موديل SS-22، الرش: عدد الدورات 800-1000 دورة/دقيقة، السحب (SUCTION) 16.5~20.5 لتر/دقيقة، الضغط 25~30 كجم/سم²، الري: عدد الدورات 1200~1400 دورة/دقيقة، السحب 25~29 لتر/دقيقة، الضغط 16~20 كجم/سم²، الوزن الصافي 30.6 كجم، الوزن الإجمالي 34.4 كجم، حجم التعبئة 970×320×430 ملم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ss-22.png',
  images: ['/products/ss-22.png'],
  availability: true
},

// ===================== رشاش ماء SS-80 =====================
{
  id: 68,
  name: 'رشاش ماء SS-80',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'رشاشات ماء',
  subSubCategory: 'رشاشات KIBOUR',

  brand: 'KIBOUR',
  brandMain: 'معدات زراعية',
  brandSub: 'رشاشات ماء',
  brandSubSub: 'رشاشات KIBOUR',

  modelName: 'SS-80',
  sprayingRPM: '800-1000 RPM',
  sprayingSuction: '60~80 L/min',
  sprayingPressure: '25~30 kg/cm²',
  irrigationRPM: '1000~1400 RPM',
  irrigationSuction: '40~52 L/min',
  irrigationPressure: '14~18 kg/cm²',
  netWeight: '68.8 KG',
  grossWeight: '77.7 KG',
  packingSize: '1070*740*555 mm',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'رشاش ماء من KIBOUR موديل SS-80، الرش: عدد الدورات 800-1000 دورة/دقيقة، السحب (SUCTION) 60~80 لتر/دقيقة، الضغط 25~30 كجم/سم²، الري: عدد الدورات 1000~1400 دورة/دقيقة، السحب 40~52 لتر/دقيقة، الضغط 14~18 كجم/سم²، الوزن الصافي 68.8 كجم، الوزن الإجمالي 77.7 كجم، حجم التعبئة 1070×740×555 ملم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ss-80.png',
  images: ['/products/ss-80.png'],
  availability: true
},
// ===================== حفار تربة NTA520E-6E (نموذج 1) =====================
{
  id: 69,
  name: 'حفار تربة NTA520E-6E',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'حفارات تربة',
  subSubCategory: 'حفارات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'حفارات تربة',
  brandSubSub: 'حفارات CRAFTOP',

  modelName: 'NTA520E-6E',
  weight: '9 KG',
  engineType: 'EARTH AUGER',
  displacement: '51.7 CC',
  type2: 'AIR COOLED',
  poweredBy: 'CRAFTOP',
  startingSystem: 'RECOIL',
  powerSource: 'PETROL / بنزين',
  outputPower: '1.7KW',
  placeOfOrigin: 'CHINA',
  madeIn: 'CHINA',
  
  description: 'حفار تربة من CRAFTOP موديل NTA520E-6E، الوزن 9 كجم، نوع المحرك حفار أرضي (EARTH AUGER)، السعة 51.7 سي سي، النوع مبرد بالهواء (AIR COOLED)، مدعوم بـ CRAFTOP، نظام التشغيل يدوي (RECOIL)، مصدر الطاقة بنزين (PETROL)، القدرة الناتجة 1.7 كيلو وات، بلد المنشأ الصين. صناعة صينية.',
  imageProduct: '/products/nta520e-6e-model1.png',
  images: ['/products/nta520e-6e-model1.png'],
  availability: true
},

// ===================== حفار تربة NTA520E-6E (نموذج 2) =====================
{
  id: 70,
  name: 'حفار تربة NTA520E-6E',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'حفارات تربة',
  subSubCategory: 'حفارات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'حفارات تربة',
  brandSubSub: 'حفارات CRAFTOP',

  modelName: 'NTA520E-6E',
  weight: '10.5 KG',
  engineType: 'EARTH AUGER',
  displacement: '51.7 CC',
  type2: 'AIR COOLED',
  poweredBy: 'CRAFTOP',
  startingSystem: 'RECOIL',
  powerSource: 'PETROL / بنزين',
  outputPower: '1.7KW',
  placeOfOrigin: 'CHINA',
  madeIn: 'CHINA',
  
  description: 'حفار تربة من CRAFTOP موديل NTA520E-6E، الوزن 10.5 كجم، نوع المحرك حفار أرضي (EARTH AUGER)، السعة 51.7 سي سي، النوع مبرد بالهواء (AIR COOLED)، مدعوم بـ CRAFTOP، نظام التشغيل يدوي (RECOIL)، مصدر الطاقة بنزين (PETROL)، القدرة الناتجة 1.7 كيلو وات، بلد المنشأ الصين. صناعة صينية.',
  imageProduct: '/products/nta520e-6e-model2.png',
  images: ['/products/nta520e-6e-model2.png'],
  availability: true
},
// ===================== ماكينة جز عشب NTLM16-BS35A-H =====================
{
  id: 71,
  name: 'ماكينة جز عشب NTLM16-BS35A-H',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'ماكينات جز العشب',
  subSubCategory: 'ماكينات جز BRIGGS & STRATTON',

  brand: 'BRIGGS & STRATTON',
  brandMain: 'معدات زراعية',
  brandSub: 'ماكينات جز العشب',
  brandSubSub: 'ماكينات جز BRIGGS & STRATTON',

  modelName: 'NTLM16-BS35A-H',
  engineManufacturerBrand: 'BRIGGS & STRATTON',
  engineModel: 'BRIGGS & STRATTON 450E',
  power: '3.5HP/3600RPM',
  torque: '6.1N.M/3060RPM',
  driveMethod: 'HAND PUSH',
  cuttingWidth: '16"/410MM',
  cuttingHeightSteps: '6 POSITION',
  cuttingHeightMinMax: '25~65MM',
  wheelFrontSize: '6"',
  wheelRearSize: '7"',
  catcherMaterial: 'FABRIC',
  catcherCapacity: '40L/10.57 US GAL',
  fuelTankVolume: '0.75L/0.2 US GAL',
  dryWeight: '25KG (55 LBS.)',
  grossWeight: '32KG (71 LBS.)',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'ماكينة جز عشب من BRIGGS & STRATTON موديل NTLM16-BS35A-H، محرك من BRIGGS & STRATTON 450E، القدرة 3.5 حصان/3600 دورة/دقيقة، عزم الدوران 6.1 نيوتن متر/3060 دورة/دقيقة، طريقة القيادة دفع يدوي (HAND PUSH)، عرض القص 16 بوصة/410 ملم، درجات ارتفاع القص 6 مواضع، ارتفاع القص الأدنى-الأقصى 25~65 ملم، حجم العجلات الأمامية 6 بوصة، حجم العجلات الخلفية 7 بوصة، مادة جامع العشب قماش (FABRIC)، سعة جامع العشب 40 لتر/10.57 جالون أمريكي، حجم خزان الوقود 0.75 لتر/0.2 جالون أمريكي، الوزن الجاف 25 كجم (55 رطل)، الوزن الإجمالي 32 كجم (71 رطل)، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntlm16-bs35a-h.png',
  images: ['/products/ntlm16-bs35a-h.png'],
  availability: true
},

// ===================== ماكينة جز عشب NTLM18-BS40B-S =====================
{
  id: 72,
  name: 'ماكينة جز عشب NTLM18-BS40B-S',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'ماكينات جز العشب',
  subSubCategory: 'ماكينات جز BRIGGS & STRATTON',

  brand: 'BRIGGS & STRATTON',
  brandMain: 'معدات زراعية',
  brandSub: 'ماكينات جز العشب',
  brandSubSub: 'ماكينات جز BRIGGS & STRATTON',

  modelName: 'NTLM18-BS40B-S',
  engineManufacturerBrand: 'BRIGGS & STRATTON',
  engineModel: 'BRIGGS & STRATTON 500E',
  power: '4.0HP/3600RPM',
  torque: '6.1N.M/3060RPM',
  driveMethod: 'SELF-PROPELLED',
  cuttingWidth: '18"/460MM',
  cuttingHeightSteps: '10 POSITION',
  cuttingHeightMinMax: '20~80MM',
  wheelFrontSize: '7"',
  wheelRearSize: '8"',
  catcherMaterial: 'FABRIC',
  catcherCapacity: '60L/15.85 US GAL',
  fuelTankVolume: '0.8L/0.21 US GAL',
  dryWeight: '31KG (68 LBS.)',
  grossWeight: '35KG (77 LBS.)',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'ماكينة جز عشب من BRIGGS & STRATTON موديل NTLM18-BS40B-S، محرك من BRIGGS & STRATTON 500E، القدرة 4.0 حصان/3600 دورة/دقيقة، عزم الدوران 6.1 نيوتن متر/3060 دورة/دقيقة، طريقة القيادة ذاتية الدفع (SELF-PROPELLED)، عرض القص 18 بوصة/460 ملم، درجات ارتفاع القص 10 مواضع، ارتفاع القص الأدنى-الأقصى 20~80 ملم، حجم العجلات الأمامية 7 بوصة، حجم العجلات الخلفية 8 بوصة، مادة جامع العشب قماش (FABRIC)، سعة جامع العشب 60 لتر/15.85 جالون أمريكي، حجم خزان الوقود 0.8 لتر/0.21 جالون أمريكي، الوزن الجاف 31 كجم (68 رطل)، الوزن الإجمالي 35 كجم (77 رطل)، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntlm18-bs40b-s.png',
  images: ['/products/ntlm18-bs40b-s.png'],
  availability: true
},

// ===================== ماكينة جز عشب NTLM21-B750EX-S =====================
{
  id: 73,
  name: 'ماكينة جز عشب NTLM21-B750EX-S',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'ماكينات جز العشب',
  subSubCategory: 'ماكينات جز BRIGGS & STRATTON',

  brand: 'BRIGGS & STRATTON',
  brandMain: 'معدات زراعية',
  brandSub: 'ماكينات جز العشب',
  brandSubSub: 'ماكينات جز BRIGGS & STRATTON',

  modelName: 'NTLM21-B750EX-S',
  engineManufacturerBrand: 'BRIGGS & STRATTON',
  engineModel: 'BRIGGS & STRATTON 750E',
  power: '6.0HP/3600RPM',
  torque: '6.1N.M/3060RPM',
  driveMethod: 'SELF-PROPELLED',
  cuttingWidth: '21"/520MM',
  cuttingHeightSteps: '8 POSITION',
  cuttingHeightMinMax: '15~75MM',
  wheelFrontSize: '7"',
  wheelRearSize: '8"',
  catcherMaterial: 'FABRIC',
  catcherCapacity: '65L/17.17 US GAL',
  fuelTankVolume: '0.8L/0.21 US GAL',
  dryWeight: '38KG (84 LBS.)',
  grossWeight: '40KG (88 LBS.)',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'ماكينة جز عشب من BRIGGS & STRATTON موديل NTLM21-B750EX-S، محرك من BRIGGS & STRATTON 750E، القدرة 6.0 حصان/3600 دورة/دقيقة، عزم الدوران 6.1 نيوتن متر/3060 دورة/دقيقة، طريقة القيادة ذاتية الدفع (SELF-PROPELLED)، عرض القص 21 بوصة/520 ملم، درجات ارتفاع القص 8 مواضع، ارتفاع القص الأدنى-الأقصى 15~75 ملم، حجم العجلات الأمامية 7 بوصة، حجم العجلات الخلفية 8 بوصة، مادة جامع العشب قماش (FABRIC)، سعة جامع العشب 65 لتر/17.17 جالون أمريكي، حجم خزان الوقود 0.8 لتر/0.21 جالون أمريكي، الوزن الجاف 38 كجم (84 رطل)، الوزن الإجمالي 40 كجم (88 رطل)، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntlm21-b750ex-s.png',
  images: ['/products/ntlm21-b750ex-s.png'],
  availability: true
},

// ===================== جنزير منشار WINDSOR =====================
{
  id: 74,
  name: 'جنزير منشار WINDSOR',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مناشير وملحقاتها',
  subSubCategory: 'جنازير WINDSOR',

  brand: 'WINDSOR',
  brandMain: 'معدات زراعية',
  brandSub: 'مناشير وملحقاتها',
  brandSubSub: 'جنازير WINDSOR',

  modelName: 'WINDSOR CHAIN',
  sizes: '57 - 59 - 72',
  madeIn: 'USA',
  
  description: 'جنزير منشار من WINDSOR، متوفر بالمقاسات 57 - 59 - 72. صناعة أمريكية (Made in USA).',
  imageProduct: '/products/windsor-chain.png',
  images: ['/products/windsor-chain.png'],
  availability: true
},

// ===================== منشار FDC4003 =====================
{
  id: 75,
  name: 'منشار FDC4003',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مناشير وملحقاتها',
  subSubCategory: 'مناشير FUJI DELUXE',

  brand: 'FUJI DELUXE',
  brandMain: 'معدات زراعية',
  brandSub: 'مناشير وملحقاتها',
  brandSubSub: 'مناشير FUJI DELUXE',

  modelName: 'FDC4003',
  dimensions: '390MMX237MMX272MM',
  peakPower: '1.6 KW',
  displacement: '39.6 CC',
  netWeight: '5.2 KG',
  fuel: 'MIXTURE (GASOLINE 40: TWO-CYCLE OIL 1)',
  fuelTankCapacity: '520 ML',
  chainOil: 'MOTOR OIL SAE# 1 0W-30',
  oilTankCapacity: '260 ML',
  carburetor: 'DIAPHRAGM TYPE, MT095',
  ignitionSystem: 'POINTLESS (CDI)',
  sparkPlug: 'CHAMPION',
  oilFeedingSystem: 'AUTOMATIC PUMP WITH ADJUSTER',
  cuttingHead: 'SPROCKET NOSE',
  guideBar: 'HIGH FUJI DELUXE BAR',
  sawChain: '16"; 21H*RX073',
  powerSource: 'PETROL / بنزين',
  madeIn: 'JAPAN',
  
  description: 'منشار من FUJI DELUXE موديل FDC4003، الأبعاد 390×237×272 ملم، القدرة القصوى 1.6 كيلو وات، السعة 39.6 سي سي، الوزن الصافي 5.2 كجم، الوقود خليط (بنزين 40: زيت دورتين 1)، سعة خزان الوقود 520 مل، زيت السلسلة زيت محرك SAE# 1 0W-30، سعة خزان الزيت 260 مل، المغذي من نوع الحجاب الحاجز MT095، نظام الإشعال بدون نقاط (CDI)، شمعة الإشعال CHAMPION، نظام تغذية الزيت مضخة أوتوماتيكية مع ضابط، رأس القطع أنف مسنن، قضيب التوجيه HIGH FUJI DELUXE BAR، سلسلة المنشار 16 بوصة؛ 21H*RX073، مصدر الطاقة بنزين (PETROL). صناعة يابانية.',
  imageProduct: '/products/fdc4003.png',
  images: ['/products/fdc4003.png'],
  availability: true
},

// ===================== منشار FDC5430 - 18/20 =====================
{
  id: 76,
  name: 'منشار FDC5430 - 18/20',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مناشير وملحقاتها',
  subSubCategory: 'مناشير FUJI DELUXE',

  brand: 'FUJI DELUXE',
  brandMain: 'معدات زراعية',
  brandSub: 'مناشير وملحقاتها',
  brandSubSub: 'مناشير FUJI DELUXE',

  modelName: 'FDC5430 - 18/20',
  dimensions: '412MMXMMX275MM',
  peakPower: '2.2 KW',
  displacement: '54.0 CC',
  netWeight: '6.8 KG',
  fuel: 'MIXTURE (GASOLINE 40: TWO-CYCLE OIL 1)',
  fuelTankCapacity: '520 ML',
  chainOil: 'MOTOR OIL SAE# 1 0W-30',
  oilTankCapacity: '260 ML',
  carburetor: 'DIAPHRAGM TYPE/T047',
  ignitionSystem: 'POINTLESS (CDI)',
  sparkPlug: 'CHAMPION',
  oilFeedingSystem: 'AUTOMATIC PUMP WITH ADJUSTER',
  cuttingHead: 'SPROCKET NOSE',
  guideBar: 'HIGH FUJI DELUXE BAR',
  sawChain: '18"; 21H*RX074 OR 20"; 21H*RX078X',
  powerSource: 'PETROL / بنزين',
  madeIn: 'JAPAN',
  
  description: 'منشار من FUJI DELUXE موديل FDC5430 - 18/20، الأبعاد 412×؟×275 ملم، القدرة القصوى 2.2 كيلو وات، السعة 54.0 سي سي، الوزن الصافي 6.8 كجم، الوقود خليط (بنزين 40: زيت دورتين 1)، سعة خزان الوقود 520 مل، زيت السلسلة زيت محرك SAE# 1 0W-30، سعة خزان الزيت 260 مل، المغذي من نوع الحجاب الحاجز T047، نظام الإشعال بدون نقاط (CDI)، شمعة الإشعال CHAMPION، نظام تغذية الزيت مضخة أوتوماتيكية مع ضابط، رأس القطع أنف مسنن، قضيب التوجيه HIGH FUJI DELUXE BAR، سلسلة المنشار 18 بوصة؛ 21H*RX074 أو 20 بوصة؛ 21H*RX078X، مصدر الطاقة بنزين (PETROL). صناعة يابانية.',
  imageProduct: '/products/fdc5430-18-20.png',
  images: ['/products/fdc5430-18-20.png'],
  availability: true
},
// ===================== منشار NT3700 =====================
{
  id: 77,
  name: 'منشار NT3700',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مناشير وملحقاتها',
  subSubCategory: 'مناشير CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مناشير وملحقاتها',
  brandSubSub: 'مناشير CRAFTOP',

  modelName: 'NT3700',
  powerType: '2 STROKE, AIR COOLING',
  cylinderDiameter: '38MM*32MM',
  engineDisplacement: '36.3CC',
  ratedPower: '1.3KW (1.7 HP)',
  relevantSpeed: '8000RPM',
  standardBarLengths: '16" (40.6CM)',
  chainPitch: '3/8" .325"',
  chainGauge: '.050"/.058"',
  fuelMixtureRatio: '25:1 (GASOLINE 25: TWO-CYCLE OIL 1)',
  fuelCapacity: '410ML',
  chainOilCapacity: '200ML',
  ignitionSystem: 'DIGITAL',
  dryWeight: '4.5KG',
  weightWithBarAndChain: '5.0KG',
  boxWeight: '6.5KG',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'منشار من CRAFTOP موديل NT3700، نوع المحرك شوطين، مبرد بالهواء (2 STROKE, AIR COOLING)، قطر الأسطوانة 38×32 ملم، سعة المحرك 36.3 سي سي، القدرة المقننة 1.3 كيلو وات (1.7 حصان)، السرعة ذات الصلة 8000 دورة/دقيقة، أطوال القضيب القياسية 16 بوصة (40.6 سم)، خطوة السلسلة 3/8" .325"، مقياس السلسلة .050"/.058"، نسبة خليط الوقود 25:1 (بنزين 25: زيت دورتين 1)، سعة الوقود 410 مل، سعة زيت السلسلة 200 مل، نظام الإشعال رقمي (DIGITAL)، الوزن الجاف 4.5 كجم، الوزن مع القضيب والسلسلة 5.0 كجم، وزن الصندوق 6.5 كجم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/nt3700.png',
  images: ['/products/nt3700.png'],
  availability: true
},

// ===================== منشار NT4510 =====================
{
  id: 78,
  name: 'منشار NT4510',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مناشير وملحقاتها',
  subSubCategory: 'مناشير CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مناشير وملحقاتها',
  brandSubSub: 'مناشير CRAFTOP',

  modelName: 'NT4510',
  powerType: '2 STROKE, AIR COOLING',
  cylinderDiameter: '58MM*40MM',
  engineDisplacement: '45CC',
  ratedPower: '1.7KW (2.3 HP)',
  relevantSpeed: '8000RPM',
  standardBarLengths: '18" (45.7CM)',
  chainPitch: '3/8"/.325"',
  chainGauge: '.050"/.058"',
  fuelMixtureRatio: '25:1 (GASOLINE 25: TWO-CYCLE OIL 1)',
  fuelCapacity: '550ML',
  chainOilCapacity: '260ML',
  ignitionSystem: 'DIGITAL',
  dryWeight: '5KG',
  weightWithBarAndChain: '5.9KG',
  boxWeight: '7.4KG',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'منشار من CRAFTOP موديل NT4510، نوع المحرك شوطين، مبرد بالهواء (2 STROKE, AIR COOLING)، قطر الأسطوانة 58×40 ملم، سعة المحرك 45 سي سي، القدرة المقننة 1.7 كيلو وات (2.3 حصان)، السرعة ذات الصلة 8000 دورة/دقيقة، أطوال القضيب القياسية 18 بوصة (45.7 سم)، خطوة السلسلة 3/8"/.325"، مقياس السلسلة .050"/.058"، نسبة خليط الوقود 25:1 (بنزين 25: زيت دورتين 1)، سعة الوقود 550 مل، سعة زيت السلسلة 260 مل، نظام الإشعال رقمي (DIGITAL)، الوزن الجاف 5 كجم، الوزن مع القضيب والسلسلة 5.9 كجم، وزن الصندوق 7.4 كجم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/nt4510.png',
  images: ['/products/nt4510.png'],
  availability: true
},

// ===================== منشار NT5210 =====================
{
  id: 79,
  name: 'منشار NT5210',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مناشير وملحقاتها',
  subSubCategory: 'مناشير CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مناشير وملحقاتها',
  brandSubSub: 'مناشير CRAFTOP',

  modelName: 'NT5210',
  powerType: '2 STROKE, AIR COOLING',
  cylinderDiameter: '58MM*40MM',
  engineDisplacement: '49.3CC',
  ratedPower: '2.0KW (2.7 HP)',
  relevantSpeed: '8000RPM',
  standardBarLengths: '20" (50.8CM)',
  chainPitch: '3/8"/.325"',
  chainGauge: '.050"/.058"',
  fuelMixtureRatio: '25:1 (GASOLINE 25: TWO-CYCLE OIL 1)',
  fuelCapacity: '550ML',
  chainOilCapacity: '260ML',
  ignitionSystem: 'DIGITAL',
  dryWeight: '5.2KG',
  weightWithBarAndChain: '6.3KG',
  boxWeight: '7.6KG',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'منشار من CRAFTOP موديل NT5210، نوع المحرك شوطين، مبرد بالهواء (2 STROKE, AIR COOLING)، قطر الأسطوانة 58×40 ملم، سعة المحرك 49.3 سي سي، القدرة المقننة 2.0 كيلو وات (2.7 حصان)، السرعة ذات الصلة 8000 دورة/دقيقة، أطوال القضيب القياسية 20 بوصة (50.8 سم)، خطوة السلسلة 3/8"/.325"، مقياس السلسلة .050"/.058"، نسبة خليط الوقود 25:1 (بنزين 25: زيت دورتين 1)، سعة الوقود 550 مل، سعة زيت السلسلة 260 مل، نظام الإشعال رقمي (DIGITAL)، الوزن الجاف 5.2 كجم، الوزن مع القضيب والسلسلة 6.3 كجم، وزن الصندوق 7.6 كجم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/nt5210.png',
  images: ['/products/nt5210.png'],
  availability: true
},

// ===================== مرشة NTS768 =====================
{
  id: 80,
  name: 'مرشة NTS768',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مرشات ومبيدات',
  subSubCategory: 'مرشات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مرشات ومبيدات',
  brandSubSub: 'مرشات CRAFTOP',

  modelName: 'NTS768',
  engineType: '2 STROKE SINGLE CYLINDER, AIR-COOLING',
  cylinderDiameter: 'TU26',
  engineDisplacement: '26 CC',
  powerOutput: '0.75KW/1HP/7500RPM',
  maxEngineSpeed: '7500RPM',
  carburetorType: 'DIAPHRAGM',
  airFilter: 'FOAM',
  fuelTankCapacity: '1L (0.26 US GAL)',
  fuelMixtureRatio: '25:1(GASOLINE 25 : TWO-CYCLE OIL 1)',
  chemistTankCapacity: '25L (6.6 US GAL)',
  sprayerCapacity: 'LIQUID',
  maxAirFlow: '5M',
  dryWeight: '10KG (22 LBS.)',
  grossWeight: '11KG (24.3 LBS.)',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'مرشة من CRAFTOP موديل NTS768، نوع المحرك أحادي الأسطوانة شوطين، مبرد بالهواء (2 STROKE SINGLE CYLINDER, AIR-COOLING)، قطر الأسطوانة TU26، سعة المحرك 26 سي سي، القدرة الخارجة 0.75 كيلو وات/1 حصان/7500 دورة/دقيقة، أقصى سرعة للمحرك 7500 دورة/دقيقة، نوع الكربراتير حجابي (DIAPHRAGM)، فلتر الهواء إسفنجي (FOAM)، سعة خزان الوقود 1 لتر (0.26 جالون أمريكي)، نسبة خليط الوقود 25:1 (بنزين 25: زيت دورتين 1)، سعة خزان الكيماويات 25 لتر (6.6 جالون أمريكي)، سعة الرشاش سائل (LIQUID)، أقصى تدفق هواء 5 متر، الوزن الجاف 10 كجم (22 رطل)، الوزن الإجمالي 11 كجم (24.3 رطل)، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/nts768.png',
  images: ['/products/nts768.png'],
  availability: true
},
// ...........................................
// ===================== مولد NTG950 =====================
{
  id: 81,
  name: 'مولد NTG950',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات CRAFTOP',

  modelName: 'NTG950',
  ratedFrequency: '50HZ',
  ratedVoltage: '220V',
  ratedPower: '0.65KW',
  maxPower: '0.72KW',
  engineModel: '1E45F',
  engineType: '2 STROKE, AIR-COOLING',
  engineDisplacement: '63CC',
  fuelTankCapacity: '4.2L',
  fuelConsumption: '≤450G/KW.H',
  startingSystem: 'RECOIL STARTER',
  continuousWorkingTime: '6H',
  noiseLevel: '≤72DB',
  netWeight: '20KG',
  packageSize: '41*34*37CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'مولد من CRAFTOP موديل NTG950، التردد المقنن 50 هرتز، الجهد المقنن 220 فولت، القدرة المقننة 0.65 كيلو وات، القدرة القصوى 0.72 كيلو وات، موديل المحرك 1E45F، نوع المحرك شوطين مبرد بالهواء (2 STROKE, AIR-COOLING)، سعة المحرك 63 سي سي، سعة خزان الوقود 4.2 لتر، استهلاك الوقود ≤450 جم/كيلو وات.ساعة، نظام التشغيل سلك شد (RECOIL STARTER)، وقت العمل المستمر 6 ساعات، مستوى الضوضاء ≤72 ديسيبل، الوزن الصافي 20 كجم، حجم العبوة 41×34×37 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntg950.png',
  images: ['/products/ntg950.png'],
  availability: true
},

// ===================== مولد NTG1200 =====================
{
  id: 82,
  name: 'مولد NTG1200',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات CRAFTOP',

  modelName: 'NTG1200',
  ratedFrequency: '50HZ',
  ratedVoltage: '220V',
  ratedPower: '1.0KW',
  maxPower: '1.1KW',
  engineModel: '1E45F-2C',
  engineType: '2 STROKE, AIR-COOLING',
  engineDisplacement: '63CC',
  fuelTankCapacity: '4.2L',
  fuelConsumption: '≤450G/KW.H',
  startingSystem: 'RECOIL STARTER',
  continuousWorkingTime: '6H',
  noiseLevel: '≤72DB',
  netWeight: '24KG',
  packageSize: '43*35*39CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'مولد من CRAFTOP موديل NTG1200، التردد المقنن 50 هرتز، الجهد المقنن 220 فولت، القدرة المقننة 1.0 كيلو وات، القدرة القصوى 1.1 كيلو وات، موديل المحرك 1E45F-2C، نوع المحرك شوطين مبرد بالهواء (2 STROKE, AIR-COOLING)، سعة المحرك 63 سي سي، سعة خزان الوقود 4.2 لتر، استهلاك الوقود ≤450 جم/كيلو وات.ساعة، نظام التشغيل سلك شد (RECOIL STARTER)، وقت العمل المستمر 6 ساعات، مستوى الضوضاء ≤72 ديسيبل، الوزن الصافي 24 كجم، حجم العبوة 43×35×39 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntg1200.png',
  images: ['/products/ntg1200.png'],
  availability: true
},

// ===================== مولد NTG2500 =====================
{
  id: 83,
  name: 'مولد NTG2500',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات CRAFTOP',

  modelName: 'NTG2500',
  ratedFrequency: '50HZ',
  ratedVoltage: '220V',
  ratedPower: '2.0KW',
  maxPower: '2.2KW',
  engineModel: '168F-1',
  engineType: '4 STROKE, AIR-COOLING',
  engineDisplacement: '163CC',
  fuelTankCapacity: '15L',
  lubricantCapacity: '0.6L',
  fuelConsumption: '≤374G/KW.H',
  startingSystem: 'RECOIL STARTER',
  continuousWorkingTime: '11H',
  noiseLevel: '≤68DB',
  netWeight: '42KG',
  packageSize: '60.5*43.5*45CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'مولد من CRAFTOP موديل NTG2500، التردد المقنن 50 هرتز، الجهد المقنن 220 فولت، القدرة المقننة 2.0 كيلو وات، القدرة القصوى 2.2 كيلو وات، موديل المحرك 168F-1، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، سعة المحرك 163 سي سي، سعة خزان الوقود 15 لتر، سعة زيت التشحيم 0.6 لتر، استهلاك الوقود ≤374 جم/كيلو وات.ساعة، نظام التشغيل سلك شد (RECOIL STARTER)، وقت العمل المستمر 11 ساعة، مستوى الضوضاء ≤68 ديسيبل، الوزن الصافي 42 كجم، حجم العبوة 60.5×43.5×45 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntg2500.png',
  images: ['/products/ntg2500.png'],
  availability: true
},

// ===================== مولد NTG3700 =====================
{
  id: 84,
  name: 'مولد NTG3700',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات CRAFTOP',

  modelName: 'NTG3700',
  ratedFrequency: '50HZ',
  ratedVoltage: '220V',
  ratedPower: '3.0KW',
  maxPower: '3.3KW',
  engineModel: '188F',
  engineType: '4 STROKE, AIR-COOLING',
  engineDisplacement: '389CC',
  fuelTankCapacity: '25L',
  lubricantCapacity: '1.1L',
  fuelConsumption: '≤374G/KW.H',
  startingSystem: 'RECOIL STARTER',
  continuousWorkingTime: '12H',
  noiseLevel: '≤68DB',
  netWeight: '70KG',
  packageSize: '71*53*57CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'مولد من CRAFTOP موديل NTG3700، التردد المقنن 50 هرتز، الجهد المقنن 220 فولت، القدرة المقننة 3.0 كيلو وات، القدرة القصوى 3.3 كيلو وات، موديل المحرك 188F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، سعة المحرك 389 سي سي، سعة خزان الوقود 25 لتر، سعة زيت التشحيم 1.1 لتر، استهلاك الوقود ≤374 جم/كيلو وات.ساعة، نظام التشغيل سلك شد (RECOIL STARTER)، وقت العمل المستمر 12 ساعة، مستوى الضوضاء ≤68 ديسيبل، الوزن الصافي 70 كجم، حجم العبوة 71×53×57 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntg3700.png',
  images: ['/products/ntg3700.png'],
  availability: true
},

// ===================== مولد NTG6500 =====================
{
  id: 85,
  name: 'مولد NTG6500',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات CRAFTOP',

  modelName: 'NTG6500',
  ratedFrequency: '50HZ',
  ratedVoltage: '220V',
  ratedPower: '5.0KW',
  maxPower: '5.5KW',
  engineModel: '188F',
  engineType: '4 STROKE, AIR-COOLING',
  engineDisplacement: '389CC',
  fuelTankCapacity: '25L',
  lubricantCapacity: '1.1L',
  fuelConsumption: '≤374G/KW.H',
  startingSystem: 'RECOIL STARTER/ELECTRIC STARTER',
  continuousWorkingTime: '9H',
  noiseLevel: '≤68DB',
  netWeight: '80KG',
  packageSize: '71*53*57CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'مولد من CRAFTOP موديل NTG6500، التردد المقنن 50 هرتز، الجهد المقنن 220 فولت، القدرة المقننة 5.0 كيلو وات، القدرة القصوى 5.5 كيلو وات، موديل المحرك 188F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، سعة المحرك 389 سي سي، سعة خزان الوقود 25 لتر، سعة زيت التشحيم 1.1 لتر، استهلاك الوقود ≤374 جم/كيلو وات.ساعة، نظام التشغيل سلك شد/تشغيل كهربائي (RECOIL STARTER/ELECTRIC STARTER)، وقت العمل المستمر 9 ساعات، مستوى الضوضاء ≤68 ديسيبل، الوزن الصافي 80 كجم، حجم العبوة 71×53×57 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntg6500.png',
  images: ['/products/ntg6500.png'],
  availability: true
},

// ===================== مولد NTG7500E =====================
{
  id: 86,
  name: 'مولد NTG7500E',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات CRAFTOP',

  modelName: 'NTG7500E',
  ratedFrequency: '50HZ',
  ratedVoltage: '220V / 380V',
  ratedPower: '6.0KW',
  maxPower: '6.6KW',
  engineModel: '188F',
  engineType: '4 STROKE, AIR-COOLING',
  engineDisplacement: '389CC',
  fuelTankCapacity: '25L',
  lubricantCapacity: '1.1L',
  fuelConsumption: '≤374G/KW.H',
  startingSystem: 'RECOIL STARTER/ELECTRIC STARTER',
  continuousWorkingTime: '8H',
  noiseLevel: '≤68DB',
  netWeight: '80KG',
  packageSize: '71*53*57CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'مولد من CRAFTOP موديل NTG7500E، التردد المقنن 50 هرتز، الجهد المقنن 220/380 فولت، القدرة المقننة 6.0 كيلو وات، القدرة القصوى 6.6 كيلو وات، موديل المحرك 188F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، سعة المحرك 389 سي سي، سعة خزان الوقود 25 لتر، سعة زيت التشحيم 1.1 لتر، استهلاك الوقود ≤374 جم/كيلو وات.ساعة، نظام التشغيل سلك شد/تشغيل كهربائي (RECOIL STARTER/ELECTRIC STARTER)، وقت العمل المستمر 8 ساعات، مستوى الضوضاء ≤68 ديسيبل، الوزن الصافي 80 كجم، حجم العبوة 71×53×57 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntg7500e.png',
  images: ['/products/ntg7500e.png'],
  availability: true
},

// ===================== ماطور مياه NTP15 =====================
{
  id: 87,
  name: 'ماطور مياه NTP15',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'ماطورات مياه CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'ماطورات مياه CRAFTOP',

  modelName: 'NTP15',
  inletAndOutlet: '1.5" (40MM)',
  maxSuctionHead: '7M',
  maxDeliveryHead: '25M',
  maxFlowRate: '8M³/H',
  engineModel: '152F',
  engineType: '4 STROKE, AIR-COOLING',
  engineDisplacement: '97CC',
  ratedPower: '1.8KW (2.5HP)',
  fuelTankCapacity: '1.6L',
  lubricantCapacity: '0.33L',
  startingSystem: 'RECOIL STARTER',
  netWeight: '17.5KG',
  packageSize: '40*35*37CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'ماطور مياه من CRAFTOP موديل NTP15، قطر المدخل والمخرج 1.5 بوصة (40 ملم)، أقصى رأس شفط 7 متر، أقصى رأس توصيل 25 متر، أقصى معدل تدفق 8 متر مكعب/ساعة، موديل المحرك 152F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، سعة المحرك 97 سي سي، القدرة المقننة 1.8 كيلو وات (2.5 حصان)، سعة خزان الوقود 1.6 لتر، سعة زيت التشحيم 0.33 لتر، نظام التشغيل سلك شد (RECOIL STARTER)، الوزن الصافي 17.5 كجم، حجم العبوة 40×35×37 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntp15.png',
  images: ['/products/ntp15.png'],
  availability: true
},

// ===================== ماطور مياه NTP20 =====================
{
  id: 88,
  name: 'ماطور مياه NTP20',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'ماطورات مياه CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'ماطورات مياه CRAFTOP',

  modelName: 'NTP20',
  inletAndOutlet: '2" (50MM)',
  maxSuctionHead: '7M',
  maxDeliveryHead: '26M',
  maxFlowRate: '30M³/H',
  engineModel: '168F',
  engineType: '4 STROKE, AIR-COOLING',
  engineDisplacement: '163CC',
  ratedPower: '4.0KW (5.5HP)',
  fuelTankCapacity: '3.6L',
  lubricantCapacity: '0.6L',
  startingSystem: 'RECOIL STARTER',
  netWeight: '27KG',
  packageSize: '49*41*42CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'ماطور مياه من CRAFTOP موديل NTP20، قطر المدخل والمخرج 2 بوصة (50 ملم)، أقصى رأس شفط 7 متر، أقصى رأس توصيل 26 متر، أقصى معدل تدفق 30 متر مكعب/ساعة، موديل المحرك 168F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، سعة المحرك 163 سي سي، القدرة المقننة 4.0 كيلو وات (5.5 حصان)، سعة خزان الوقود 3.6 لتر، سعة زيت التشحيم 0.6 لتر، نظام التشغيل سلك شد (RECOIL STARTER)، الوزن الصافي 27 كجم، حجم العبوة 49×41×42 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntp20.png',
  images: ['/products/ntp20.png'],
  availability: true
},

// ===================== ماطور مياه NTP30 =====================
{
  id: 89,
  name: 'ماطور مياه NTP30',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'ماطورات مياه CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'ماطورات مياه CRAFTOP',

  modelName: 'NTP30',
  inletAndOutlet: '3" (80MM)',
  maxSuctionHead: '7M',
  maxDeliveryHead: '26M',
  maxFlowRate: '60M³/H',
  engineModel: '188F',
  engineType: '4 STROKE, AIR-COOLING',
  engineDisplacement: '389CC',
  ratedPower: '9.6KW (13HP)',
  fuelTankCapacity: '6.5L',
  lubricantCapacity: '1.1L',
  startingSystem: 'RECOIL STARTER',
  netWeight: '48KG',
  packageSize: '63*51*53CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'ماطور مياه من CRAFTOP موديل NTP30، قطر المدخل والمخرج 3 بوصة (80 ملم)، أقصى رأس شفط 7 متر، أقصى رأس توصيل 26 متر، أقصى معدل تدفق 60 متر مكعب/ساعة، موديل المحرك 188F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، سعة المحرك 389 سي سي، القدرة المقننة 9.6 كيلو وات (13 حصان)، سعة خزان الوقود 6.5 لتر، سعة زيت التشحيم 1.1 لتر، نظام التشغيل سلك شد (RECOIL STARTER)، الوزن الصافي 48 كجم، حجم العبوة 63×51×53 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/ntp30.png',
  images: ['/products/ntp30.png'],
  availability: true
},

// ===================== محرك 152F =====================
{
  id: 90,
  name: 'محرك 152F',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'محركات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'محركات CRAFTOP',

  modelName: '152F',
  engineType: '4 STROKE, AIR-COOLING',
  cylinderDiameter: 'Φ52MM',
  engineDisplacement: '97CC',
  compressionRatio: '8:1',
  ratedPower: '1.8KW (2.5HP)',
  ratedSpeed: '3600RPM',
  maxTorque: '5.2N·M',
  fuelTankCapacity: '1.6L',
  lubricantCapacity: '0.33L',
  netWeight: '10.5KG',
  packageSize: '40*35*37CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'محرك من CRAFTOP موديل 152F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، قطر الأسطوانة 52 ملم، سعة المحرك 97 سي سي، نسبة الضغط 8:1، القدرة المقننة 1.8 كيلو وات (2.5 حصان)، السرعة المقننة 3600 دورة/دقيقة، عزم الدوران الأقصى 5.2 نيوتن.متر، سعة خزان الوقود 1.6 لتر، سعة زيت التشحيم 0.33 لتر، الوزن الصافي 10.5 كجم، حجم العبوة 40×35×37 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/152f.png',
  images: ['/products/152f.png'],
  availability: true
},

// ===================== محرك 168F =====================
{
  id: 91,
  name: 'محرك 168F',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'محركات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'محركات CRAFTOP',

  modelName: '168F',
  engineType: '4 STROKE, AIR-COOLING',
  cylinderDiameter: 'Φ68MM',
  engineDisplacement: '163CC',
  compressionRatio: '8:1',
  ratedPower: '4.0KW (5.5HP)',
  ratedSpeed: '3600RPM',
  maxTorque: '10.6N·M',
  fuelTankCapacity: '3.6L',
  lubricantCapacity: '0.6L',
  netWeight: '16KG',
  packageSize: '43*36*41CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'محرك من CRAFTOP موديل 168F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، قطر الأسطوانة 68 ملم، سعة المحرك 163 سي سي، نسبة الضغط 8:1، القدرة المقننة 4.0 كيلو وات (5.5 حصان)، السرعة المقننة 3600 دورة/دقيقة، عزم الدوران الأقصى 10.6 نيوتن.متر، سعة خزان الوقود 3.6 لتر، سعة زيت التشحيم 0.6 لتر، الوزن الصافي 16 كجم، حجم العبوة 43×36×41 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/168f.png',
  images: ['/products/168f.png'],
  availability: true
},

// ===================== محرك 188F =====================
{
  id: 92,
  name: 'محرك 188F',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'محركات CRAFTOP',

  brand: 'CRAFTOP',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'محركات CRAFTOP',

  modelName: '188F',
  engineType: '4 STROKE, AIR-COOLING',
  cylinderDiameter: 'Φ88MM',
  engineDisplacement: '389CC',
  compressionRatio: '8:1',
  ratedPower: '9.6KW (13HP)',
  ratedSpeed: '3600RPM',
  maxTorque: '25.5N·M',
  fuelTankCapacity: '6.5L',
  lubricantCapacity: '1.1L',
  netWeight: '32KG',
  packageSize: '51*44*50CM',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  description: 'محرك من CRAFTOP موديل 188F، نوع المحرك 4 أشواط مبرد بالهواء (4 STROKE, AIR-COOLING)، قطر الأسطوانة 88 ملم، سعة المحرك 389 سي سي، نسبة الضغط 8:1، القدرة المقننة 9.6 كيلو وات (13 حصان)، السرعة المقننة 3600 دورة/دقيقة، عزم الدوران الأقصى 25.5 نيوتن.متر، سعة خزان الوقود 6.5 لتر، سعة زيت التشحيم 1.1 لتر، الوزن الصافي 32 كجم، حجم العبوة 51×44×50 سم، مصدر الطاقة بنزين (PETROL). صناعة صينية.',
  imageProduct: '/products/188f.png',
  images: ['/products/188f.png'],
  availability: true
},

// ===================== مولد SGA3001Ha =====================
{
  id: 93,
  name: 'مولد SGA3001Ha',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات HARD GEAR',

  brand: 'HARD GEAR',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات HARD GEAR',

  modelName: 'SGA3001Ha',
  seriesName: 'DAISHIN GENERATOR SGA&SGB SERIES',
  engineBrand: 'HONDA',
  engineModel: 'GX160',
  displacement: '163CC',
  maxOutput: '3.6KW / 3600RPM',
  fuelType: 'Petrol',
  oilAlertSystem: 'Standard',
  ignition: 'Transistor (CDI)',
  startingSystem: 'Recoil',
  alternator: 'Self-Exciting, 2-Pole, Field Rotating Type, Single Phase',
  voltageRegulator: 'AVR',
  phase: 'Single',
  acMaxOutput50Hz: '2.2KVA',
  acMaxOutput60Hz: '2.8KVA',
  acRatedOutput50Hz: '2.0KVA',
  acRatedOutput60Hz: '2.4KVA',
  ratedVoltage: '220, 230, 240, 110/220, 120/240V',
  dcOutput: 'N.A.',
  ratedPowerFactor: '1cosθ',
  noiseLevel100Load50Hz: '74dB',
  noiseLevel100Load60Hz: '77dB',
  noiseLevel7m0Load50Hz: '71dB',
  noiseLevel7m0Load60Hz: '73dB',
  pilotLamp: 'Standard',
  wheelHandleBar: 'N.A',
  voltMeter: 'N.A',
  fuelTankCapacity: '3.6L',
  continuousOperatingHours50Hz: '3.5 Hours',
  continuousOperatingHours60Hz: '3.0 Hours',
  dimensions: '565×430×435MM',
  dryWeight: '35.0KG',
  container20ft: '270 Units',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  features: [
    'محرك HONDA OHV 4 أشواط GX/GP',
    'مبرد بالهواء، 4 أشواط، محرك بنزين OHV',
    'نظام تنبيه الزيت قياسي',
    'إشعال ترانزستور (CDI)',
    'مولد ذاتي الإثارة، قطبين، نوع الدوران الميداني، مرحلة واحدة',
    'منظم جهد AVR',
    'لمبة بيان قياسية'
  ],

  description: 'مولد كهرباء DAISHIN من HARD GEAR موديل SGA3001Ha، سلسلة SGA&SGB، مزود بمحرك HONDA GX160 سعة 163 سي سي، القدرة القصوى 3.6 كيلو وات عند 3600 دورة/دقيقة، يعمل بالبنزين، نظام بدء التشغيل يدوي (Recoil)، نظام تنبيه الزيت قياسي، إشعال ترانزستور (CDI). مولد ذاتي الإثارة، قطبين، مرحلة واحدة مع منظم جهد AVR. القدرة القصوى عند 50 هرتز: 2.2 كيلو فولت أمبير، القدرة المقننة: 2.0 كيلو فولت أمبير. الجهد المقنن: 220، 230، 240، 110/220، 120/240 فولت. مستوى الضوضاء عند الحمل الكامل (50 هرتز): 74 ديسيبل، عند 7 متر بدون حمل: 71 ديسيبل. سعة خزان الوقود 3.6 لتر، ساعات التشغيل المستمر عند 50 هرتز: 3.5 ساعة. الأبعاد: 565×430×435 ملم، الوزن الجاف: 35.0 كجم. مزود بلمبة بيان قياسية. صناعة صينية.',
  imageProduct: '/products/sga3001ha.png',
  images: ['/products/sga3001ha.png'],
  availability: true
},

// ===================== مولد SGB3001Ha =====================
{
  id: 94,
  name: 'مولد SGB3001Ha',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات HARD GEAR',

  brand: 'HARD GEAR',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات HARD GEAR',

  modelName: 'SGB3001Ha',
  seriesName: 'DAISHIN GENERATOR SGA&SGB SERIES',
  engineBrand: 'HONDA',
  engineModel: 'GX160',
  displacement: '163CC',
  maxOutput: '3.6KW / 3600RPM',
  fuelType: 'Petrol',
  oilAlertSystem: 'Standard',
  ignition: 'Transistor (CDI)',
  startingSystem: 'Recoil',
  alternator: 'Self-Exciting, 2-Pole, Field Rotating Type, Single Phase',
  voltageRegulator: 'AVR',
  phase: 'Single',
  acMaxOutput50Hz: '2.2KVA',
  acMaxOutput60Hz: '2.8KVA',
  acRatedOutput50Hz: '2.0KVA',
  acRatedOutput60Hz: '2.4KVA',
  ratedVoltage: '220, 230, 240, 110/220, 120/240V',
  dcOutput: 'N.A.',
  ratedPowerFactor: '1cosθ',
  noiseLevel100Load50Hz: '71dB',
  noiseLevel100Load60Hz: '75dB',
  noiseLevel7m0Load50Hz: '68dB',
  noiseLevel7m0Load60Hz: '72dB',
  pilotLamp: 'Standard',
  wheelHandleBar: 'N.A',
  voltMeter: 'N.A',
  fuelTankCapacity: '3.6L',
  continuousOperatingHours50Hz: '14.1 Hours',
  continuousOperatingHours60Hz: '12.1 Hours',
  dimensions: '565×430×435MM',
  dryWeight: '47.0KG',
  container20ft: '270 Units',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  features: [
    'محرك HONDA OHV 4 أشواط GX/GP',
    'مبرد بالهواء، 4 أشواط، محرك بنزين OHV',
    'نظام تنبيه الزيت قياسي',
    'إشعال ترانزستور (CDI)',
    'مولد ذاتي الإثارة، قطبين، نوع الدوران الميداني، مرحلة واحدة',
    'منظم جهد AVR',
    'لمبة بيان قياسية'
  ],

  description: 'مولد كهرباء DAISHIN من HARD GEAR موديل SGB3001Ha، سلسلة SGA&SGB، مزود بمحرك HONDA GX160 سعة 163 سي سي، القدرة القصوى 3.6 كيلو وات عند 3600 دورة/دقيقة، يعمل بالبنزين، نظام بدء التشغيل يدوي (Recoil)، نظام تنبيه الزيت قياسي، إشعال ترانزستور (CDI). مولد ذاتي الإثارة، قطبين، مرحلة واحدة مع منظم جهد AVR. القدرة القصوى عند 50 هرتز: 2.2 كيلو فولت أمبير، القدرة المقننة: 2.0 كيلو فولت أمبير. الجهد المقنن: 220، 230، 240، 110/220، 120/240 فولت. مستوى الضوضاء عند الحمل الكامل (50 هرتز): 71 ديسيبل، عند 7 متر بدون حمل: 68 ديسيبل. سعة خزان الوقود 3.6 لتر، ساعات التشغيل المستمر عند 50 هرتز: 14.1 ساعة. الأبعاد: 565×430×435 ملم، الوزن الجاف: 47.0 كجم. مزود بلمبة بيان قياسية. صناعة صينية.',
  imageProduct: '/products/sgb3001ha.png',
  images: ['/products/sgb3001ha.png'],
  availability: true
},

// ===================== مولد SGB4001Ha =====================
{
  id: 95,
  name: 'مولد SGB4001Ha',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات HARD GEAR',

  brand: 'HARD GEAR',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات HARD GEAR',

  modelName: 'SGB4001Ha',
  seriesName: 'DAISHIN GENERATOR SGA&SGB SERIES',
  engineBrand: 'HONDA',
  engineModel: 'GP200',
  displacement: '196CC',
  maxOutput: '4.0KW / 3600RPM',
  fuelType: 'Petrol',
  oilAlertSystem: 'Standard',
  ignition: 'Transistor (CDI)',
  startingSystem: 'Recoil',
  alternator: 'Self-Exciting, 2-Pole, Field Rotating Type, Single Phase',
  voltageRegulator: 'AVR',
  phase: 'Single',
  acMaxOutput50Hz: '3.0KVA',
  acMaxOutput60Hz: '3.5KVA',
  acRatedOutput50Hz: '2.8KVA',
  acRatedOutput60Hz: '3.0KVA',
  ratedVoltage: '220, 230, 240, 110/220, 120/240V',
  dcOutput: '12V-3A (Receptacle)',
  ratedPowerFactor: '1cosθ',
  noiseLevel100Load50Hz: '72dB',
  noiseLevel100Load60Hz: '75dB',
  noiseLevel7m0Load50Hz: '69dB',
  noiseLevel7m0Load60Hz: '72dB',
  pilotLamp: 'Standard',
  wheelHandleBar: 'Standard',
  voltMeter: 'Standard',
  fuelTankCapacity: '16L',
  continuousOperatingHours50Hz: '10.5 Hours',
  continuousOperatingHours60Hz: '9.0 Hours',
  dimensions: '623×435×528MM',
  dryWeight: '49.5KG',
  container20ft: '180 Units',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  features: [
    'محرك HONDA OHV 4 أشواط GX/GP',
    'مبرد بالهواء، 4 أشواط، محرك بنزين OHV',
    'نظام تنبيه الزيت قياسي',
    'إشعال ترانزستور (CDI)',
    'مولد ذاتي الإثارة، قطبين، نوع الدوران الميداني، مرحلة واحدة',
    'منظم جهد AVR',
    'لمبة بيان قياسية',
    'عجلات ومقبض قياسي',
    'فولتميتر قياسي'
  ],

  description: 'مولد كهرباء DAISHIN من HARD GEAR موديل SGB4001Ha، سلسلة SGA&SGB، مزود بمحرك HONDA GP200 سعة 196 سي سي، القدرة القصوى 4.0 كيلو وات عند 3600 دورة/دقيقة، يعمل بالبنزين، نظام بدء التشغيل يدوي (Recoil)، نظام تنبيه الزيت قياسي، إشعال ترانزستور (CDI). مولد ذاتي الإثارة، قطبين، مرحلة واحدة مع منظم جهد AVR. القدرة القصوى عند 50 هرتز: 3.0 كيلو فولت أمبير، القدرة المقننة: 2.8 كيلو فولت أمبير. الجهد المقنن: 220، 230، 240، 110/220، 120/240 فولت، مخرج تيار مستمر 12 فولت - 3 أمبير. مستوى الضوضاء عند الحمل الكامل (50 هرتز): 72 ديسيبل، عند 7 متر بدون حمل: 69 ديسيبل. سعة خزان الوقود 16 لتر، ساعات التشغيل المستمر عند 50 هرتز: 10.5 ساعة. الأبعاد: 623×435×528 ملم، الوزن الجاف: 49.5 كجم. مزود بلمبة بيان، عجلات ومقبض، وفولتميتر قياسي. صناعة صينية.',
  imageProduct: '/products/sgb4001ha.png',
  images: ['/products/sgb4001ha.png'],
  availability: true
},

// ===================== مولد SGB8001Ha (HSa) =====================
{
  id: 96,
  name: 'مولد SGB8001Ha (HSa)',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات HARD GEAR',

  brand: 'HARD GEAR',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات HARD GEAR',

  modelName: 'SGB8001Ha (HSa)',
  seriesName: 'DAISHIN GENERATOR SGA&SGB SERIES',
  engineBrand: 'HONDA',
  engineModel: 'GX390',
  displacement: '389CC',
  maxOutput: '8.7KW / 3600RPM',
  fuelType: 'Petrol',
  oilAlertSystem: 'Standard',
  ignition: 'Transistor (CDI)',
  startingSystem: 'Recoil (Recoil & Electric)',
  alternator: 'Self-Exciting, 2-Pole, Field Rotating Type, Single Phase',
  voltageRegulator: 'AVR',
  phase: 'Single',
  acMaxOutput50Hz: '6.6KVA',
  acMaxOutput60Hz: '7.5KVA',
  acRatedOutput50Hz: '5.8KVA',
  acRatedOutput60Hz: '6.5KVA',
  ratedVoltage: '220, 230, 240, 110/220, 120/240V',
  dcOutput: '12V-3A (Receptacle)',
  ratedPowerFactor: '1cosθ',
  noiseLevel100Load50Hz: '78dB',
  noiseLevel100Load60Hz: '80dB',
  noiseLevel7m0Load50Hz: '75dB',
  noiseLevel7m0Load60Hz: '76dB',
  pilotLamp: 'Standard',
  wheelHandleBar: 'Standard',
  voltMeter: 'Standard',
  fuelTankCapacity: '25L',
  continuousOperatingHours50Hz: '9.1 Hours',
  continuousOperatingHours60Hz: '7.5 Hours',
  dimensions: '710×560×582MM',
  dryWeight: '85.5KG (88.5KG)',
  container20ft: '90 Units',
  powerSource: 'PETROL / بنزين',
  madeIn: 'CHINA',
  
  features: [
    'محرك HONDA OHV 4 أشواط GX/GP',
    'مبرد بالهواء، 4 أشواط، محرك بنزين OHV',
    'نظام تنبيه الزيت قياسي',
    'إشعال ترانزستور (CDI)',
    'مولد ذاتي الإثارة، قطبين، نوع الدوران الميداني، مرحلة واحدة',
    'منظم جهد AVR',
    'لمبة بيان قياسية',
    'عجلات ومقبض قياسي',
    'فولتميتر قياسي',
    'بدء التشغيل اليدوي والكهربائي'
  ],

  description: 'مولد كهرباء DAISHIN من HARD GEAR موديل SGB8001Ha (HSa)، سلسلة SGA&SGB، مزود بمحرك HONDA GX390 سعة 389 سي سي، القدرة القصوى 8.7 كيلو وات عند 3600 دورة/دقيقة، يعمل بالبنزين، نظام بدء التشغيل يدوي وكهربائي (Recoil & Electric)، نظام تنبيه الزيت قياسي، إشعال ترانزستور (CDI). مولد ذاتي الإثارة، قطبين، مرحلة واحدة مع منظم جهد AVR. القدرة القصوى عند 50 هرتز: 6.6 كيلو فولت أمبير، القدرة المقننة: 5.8 كيلو فولت أمبير. الجهد المقنن: 220، 230، 240، 110/220، 120/240 فولت، مخرج تيار مستمر 12 فولت - 3 أمبير. مستوى الضوضاء عند الحمل الكامل (50 هرتز): 78 ديسيبل، عند 7 متر بدون حمل: 75 ديسيبل. سعة خزان الوقود 25 لتر، ساعات التشغيل المستمر عند 50 هرتز: 9.1 ساعة. الأبعاد: 710×560×582 ملم، الوزن الجاف: 85.5 كجم (88.5 كجم للنسخة HSa). مزود بلمبة بيان، عجلات ومقبض، وفولتميتر قياسي. صناعة صينية.',
  imageProduct: '/products/sgb8001ha.png',
  images: ['/products/sgb8001ha.png'],
  availability: true
},
// ===================== مولد SRDE7500E-M =====================
{
  id: 97,
  name: 'مولد SRDE7500E-M',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات SHINERAY',

  brand: 'SHINERAY',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات SHINERAY',

  modelName: 'SRDE7500E-M',
  generatorType: 'DIESEL OPEN TYPE GENERATOR',
  ratedPower: '6.5KW',
  maxPower: '7.0KW',
  ratedSpeed: '3600RPM',
  ratedCurrent: '29.5A',
  ratedFrequency: '60HZ',
  ratedVoltage: '220V',
  insulationLevel: 'F',
  maxAmbientTemp: '40°C',
  qualityClass: 'A',
  powerFactor: '1',
  phase: '1',
  performanceClass: 'G1',
  mass: '120KG',
  maxAltitude: '1000M',
  ipRating: '23M',
  manufacturingYear: '2023',
  generatingSet: 'ISO 8528, EN 12601',
  standard: 'ISO 8528, EN 12601',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد كهرباء SHINERAY موديل SRDE7500E-M، نوع ديزل مفتوح (DIESEL OPEN TYPE GENERATOR)، القدرة المقننة 6.5 كيلو وات، القدرة القصوى 7.0 كيلو وات، السرعة المقننة 3600 دورة/دقيقة، التيار المقنن 29.5 أمبير، التردد المقنن 60 هرتز، الجهد المقنن 220 فولت، مستوى العزل F، درجة الحرارة المحيطة القصوى 40 درجة مئوية، درجة الجودة A، عامل القوة 1، فاز 1، مستوى الأداء G1، الوزن الصافي 120 كجم، أقصى ارتفاع فوق مستوى سطح البحر 1000 متر، تصنيف IP: 23M، سنة التصنيع 2023، مولد كهرباء مطابق لمواصفات ISO 8528 و EN 12601. صناعة صينية.',
  imageProduct: '/products/srde7500e-m.png',
  images: ['/products/srde7500e-m.png'],
  availability: true
},
// ===================== مولد SRDE4000E-M =====================
{
  id: 98,  // ممكن تغير الرقم حسب ترتيبك
  name: 'SRDE4000E-M',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات صغيرة',
  subSubCategory: 'مولدات SRDE',

  brand: 'SRDE',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات صغيرة',
  brandSubSub: 'مولدات SRDE',

  modelName: 'SRDE4000E-M',
  ratedPower: '3.3 KW',
  maxPower: '3.5 KW',
  ratedSpeed: '3,600 RPM',
  ratedCurrent: '15A',
  ratedFrequency: '60 HZ',
  ratedVoltage: '220V',
  insulationLevel: 'F',
  maxAmbientTemp: '40°C',
  qualityClass: 'A',
  powerFactor: 1,
  phase: 1,
  performanceClass: 'G1',
  netWeight: '88 kg',
  maxAltitude: '1000m',
  IP: '23M',
  manufacturingYear: '2023',
  generatingSet: true,
  standards: 'ISO 8528, EN 12601',
  madeIn: 'China',
  
  description: 'مولد كهربائي موديل SRDE4000E-M، القدرة المقننة 3.3 كيلو وات، القدرة القصوى 3.5 كيلو وات، السرعة المقننة 3600 دورة/دقيقة، التيار المقنن 15 أمبير، التردد 60 هرتز، الجهد 220 فولت، مستوى العزل F، درجة الحرارة المحيطة القصوى 40°C، جودة A، عامل القدرة 1، مرحلة 1، مستوى الأداء G1، الوزن الصافي 88 كجم، أقصى ارتفاع عن سطح البحر 1000 متر، IP 23M، سنة التصنيع 2023، مطابق لمواصفات ISO 8528 و EN 12601، صناعة صينية.',
  imageProduct: '/products/srde4000e-m.png',
  images: ['/products/srde4000e-m.png'],
  availability: true
},
// ===================== مولد SRDE5500E-M =====================
{
  id: 99,
  name: 'SRDE5500E-M',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات صغيرة',
  subSubCategory: 'مولدات SRDE',

  brand: 'SRDE',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات صغيرة',
  brandSubSub: 'مولدات SRDE',

  modelName: 'SRDE5500E-M',
  ratedPower: '4.5 KW',
  maxPower: '5.0 KW',
  ratedSpeed: '3,600 RPM',
  ratedCurrent: '20.5A',
  ratedFrequency: '60 HZ',
  ratedVoltage: '220V',
  insulationLevel: 'F',
  maxAmbientTemp: '40°C',
  qualityClass: 'A',
  powerFactor: 1,
  phase: 1,
  performanceClass: 'G1',
  netWeight: '110 kg',
  maxAltitude: '1000m',
  IP: '23M',
  manufacturingYear: '2023',
  generatingSet: true,
  standards: 'ISO 8528, EN 12601',
  madeIn: 'China',
  
  description: 'مولد كهربائي موديل SRDE5500E-M، القدرة المقننة 4.5 كيلو وات، القدرة القصوى 5.0 كيلو وات، السرعة المقننة 3600 دورة/دقيقة، التيار المقنن 20.5 أمبير، التردد 60 هرتز، الجهد 220 فولت، مستوى العزل F، درجة الحرارة المحيطة القصوى 40°C، جودة A، عامل القدرة 1، مرحلة 1، مستوى الأداء G1، الوزن الصافي 110 كجم، أقصى ارتفاع عن سطح البحر 1000 متر، IP 23M، سنة التصنيع 2023، مطابق لمواصفات ISO 8528 و EN 12601، صناعة صينية.',
  imageProduct: '/products/srde5500e-m.png',
  images: ['/products/srde5500e-m.png'],
  availability: true
},
// ===================== مولد GPi4500 =====================
{
  id: 100,
  name: 'GPi4500',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Inverter',

  brand: 'Senci',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Inverter',

  modelName: 'GPi4500',
  ratedPower: '3.5 KW',
  maxPower: '4.0 KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '15.9 A',
  ratedFrequency: '50/60 HZ',
  ratedVoltage: '220V',
  generatingSet: true,
  
  description: 'مولد بنزين Inverter موديل GPi4500، قدرة مقننة 3.5 كيلو وات، قدرة قصوى 4.0 كيلو وات، سرعة 3600 دورة/دقيقة، تيار 15.9 أمبير، تردد 50/60 هرتز، جهد 220 فولت، مزود بتقنية الانفرتر لطاقة نظيفة بنسبة تشويه أقل من 3%، نظام اقتصادي لتقليل استهلاك الوقود، تشغيل هادئ للغاية، يدعم التشغيل المتوازي (اختياري)، تشغيل يدوي أو كهربائي.',
  imageProduct: '/products/gpi4500.png',
  images: ['/products/gpi4500.png'],
  availability: true
},

// ===================== مولد GP15000-1 =====================
{
  id: 101,
  name: 'GP15000-1',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Open Frame',

  brand: 'Senci',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Open Frame',

  modelName: 'GP15000-1',
  ratedPower: '13 KW',
  maxPower: '14 KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '59.1 A',
  ratedFrequency: '60 HZ',
  ratedVoltage: '220V',
  generatingSet: true,
  
  description: 'مولد بنزين Open Frame موديل GP15000-1، قدرة مقننة 13 كيلو وات، قدرة قصوى 14 كيلو وات، سرعة 3600 دورة/دقيقة، تيار 59.1 أمبير، تردد 60 هرتز، جهد 220 فولت، خزان وقود كبير للتشغيل لفترات طويلة، مولد احترافي بكفاءة عالية وعمر تشغيلي طويل، تشغيل يدوي أو كهربائي.',
  imageProduct: '/products/gp15000-1.png',
  images: ['/products/gp15000-1.png'],
  availability: true
},

// ===================== مولد GP15000-3 =====================
{
  id: 102,
  name: 'GP15000-3',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Open Frame',

  brand: 'Senci',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Open Frame',

  modelName: 'GP15000-3',
  ratedPower: '13 KW',
  maxPower: '14 KW',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '19.7 A',
  ratedFrequency: '60 HZ',
  ratedVoltage: '220V',
  generatingSet: true,
 
  description: 'مولد بنزين Open Frame موديل GP15000-3، قدرة مقننة 13 كيلو وات، قدرة قصوى 14 كيلو وات، سرعة 3600 دورة/دقيقة، تيار 19.7 أمبير، تردد 60 هرتز، جهد 220 فولت، خزان وقود كبير للتشغيل المستمر، كفاءة عالية وعمر تشغيلي طويل، تشغيل يدوي أو كهربائي.',
  imageProduct: '/products/gp15000-3.png',
  images: ['/products/gp15000-3.png'],
  availability: true
},

// ===================== مولد GPiD9000 (Dual Fuel) =====================
{
  id: 103,
  name: 'GPiD9000',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات مزدوجة الوقود',
  subSubCategory: 'مولدات Inverter',

  brand: 'Senci',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات مزدوجة الوقود',
  brandSubSub: 'مولدات Inverter',

  modelName: 'GPiD9000',
  ratedPower: '7.5 KW (Gas) / 6.5 KW (LPG)',
  maxPower: '8.0 KW (Gas) / 7.0 KW (LPG)',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '34.1 A',
  ratedFrequency: '50/60 HZ',
  ratedVoltage: '220V',
  generatingSet: true,
 
  description: 'مولد Inverter مزدوج الوقود موديل GPiD9000، يعمل بالبنزين أو الغاز، قدرة مقننة 7.5 كيلو وات بنزين و6.5 كيلو وات غاز، قدرة قصوى 8.0 كيلو وات بنزين و7.0 كيلو وات غاز، سرعة 3600 دورة/دقيقة، تيار 34.1 أمبير، تردد 50/60 هرتز، جهد 220 فولت، تقنية انفرتر لطاقة نظيفة بنسبة تشويه أقل من 3%، نظام اقتصادي، تشغيل هادئ، تشغيل يدوي أو كهربائي.',
  imageProduct: '/products/gpid9000.png',
  images: ['/products/gpid9000.png'],
  availability: true
},

// ===================== مولد SCF3000HGa =====================
{
  id: 104,
  name: 'SCF3000HGa',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات SCF',

  brand: 'SCF',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات SCF',

  modelName: 'SCF3000HGa',
  ratedPower: '2.3 / 2.5 kVA',
  maxPower: '2.5 / 2.8 kVA',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '10.4 / 11.4 A',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '230V',
  phase: 'Single phase',
  netWeight: '45 kg',
  generatingSet: true,

  description: 'مولد بنزين موديل SCF3000HGa، خرج أحادي الطور، منظم جهد AVR، تردد 50/60 هرتز، جهد 230 فولت، قدرة مقننة 2.3–2.5 ك.ف.أ، قدرة قصوى 2.5–2.8 ك.ف.أ، تيار 10.4–11.4 أمبير، تشغيل يدوي، محرك OHV مبرد بالهواء، 4 أشواط، أسطوانة واحدة، مستوى ضوضاء 71–74 ديسيبل عند حمل 100%.',
  imageProduct: '/products/scf3000hga.png',
  images: ['/products/scf3000hga.png'],
  availability: true
},

// ===================== مولد SCF3000HGSa =====================
{
  id: 105,
  name: 'SCF3000HGSa',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات SCF',

  brand: 'SCF',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات SCF',

  modelName: 'SCF3000HGSa',
  ratedPower: '2.3 / 2.5 kVA',
  maxPower: '2.5 / 2.8 kVA',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '10.4 / 11.4 A',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '230V',
  phase: 'Single phase',
  netWeight: '47 kg',
  generatingSet: true,
 
  description: 'مولد بنزين موديل SCF3000HGSa، خرج أحادي الطور، منظم جهد AVR، تردد 50/60 هرتز، جهد 230 فولت، قدرة مقننة 2.3–2.5 ك.ف.أ، قدرة قصوى 2.5–2.8 ك.ف.أ، تشغيل يدوي وكهربائي، محرك OHV مبرد بالهواء، مستوى ضوضاء 71–74 ديسيبل عند حمل 100%.',
  imageProduct: '/products/scf3000hgsa.png',
  images: ['/products/scf3000hgsa.png'],
  availability: true
},

// ===================== مولد SCF7000HGa =====================
{
  id: 106,
  name: 'SCF7000HGa',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات SCF',

  brand: 'SCF',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات SCF',

  modelName: 'SCF7000HGa',
  ratedPower: '5 kVA',
  maxPower: '5.5 kVA',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '22.7 / 21.7 A',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '230V',
  phase: 'Single phase',
  netWeight: '73 kg',
  generatingSet: true,

  description: 'مولد بنزين موديل SCF7000HGa، خرج أحادي الطور، منظم جهد AVR، قدرة مقننة 5 ك.ف.أ، قدرة قصوى 5.5 ك.ف.أ، تردد 50/60 هرتز، جهد 230 فولت، تشغيل يدوي، محرك OHV مبرد بالهواء، مستوى ضوضاء 79–82 ديسيبل عند حمل 100%.',
  imageProduct: '/products/scf7000hga.png',
  images: ['/products/scf7000hga.png'],
  availability: true
},

// ===================== مولد SCF7000HGSa =====================
{
  id: 107,
  name: 'SCF7000HGSa',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات SCF',

  brand: 'SCF',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات SCF',

  modelName: 'SCF7000HGSa',
  ratedPower: '5 kVA',
  maxPower: '5.5 kVA',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '22.7 / 21.7 A',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '230V',
  phase: 'Single phase',
  netWeight: '75 kg',
  generatingSet: true,

  description: 'مولد بنزين موديل SCF7000HGSa، خرج أحادي الطور، منظم جهد AVR، قدرة مقننة 5 ك.ف.أ، قدرة قصوى 5.5 ك.ف.أ، تشغيل يدوي وكهربائي، محرك OHV مبرد بالهواء، مستوى ضوضاء 79–82 ديسيبل عند حمل 100%.',
  imageProduct: '/products/scf7000hgsa.png',
  images: ['/products/scf7000hgsa.png'],
  availability: true
},

// ===================== مولد SCF8000HGa =====================
{
  id: 108,
  name: 'SCF8000HGa',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات SCF',

  brand: 'SCF',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات SCF',

  modelName: 'SCF8000HGa',
  ratedPower: '6 / 6.5 kVA',
  maxPower: '6.5 / 7 kVA',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '27.2 / 29.5 A',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '230V',
  phase: 'Single phase',
  netWeight: '79 kg',
  generatingSet: true,

  description: 'مولد بنزين موديل SCF8000HGa، خرج أحادي الطور، منظم جهد AVR، قدرة مقننة 6–6.5 ك.ف.أ، قدرة قصوى 6.5–7 ك.ف.أ، تشغيل يدوي، محرك OHV مبرد بالهواء، مستوى ضوضاء 81–84 ديسيبل عند حمل 100%.',
  imageProduct: '/products/scf8000hga.png',
  images: ['/products/scf8000hga.png'],
  availability: true
},

// ===================== مولد SCF8000HGSa =====================
{
  id: 109,
  name: 'SCF8000HGSa',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات SCF',

  brand: 'SCF',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات SCF',

  modelName: 'SCF8000HGSa',
  ratedPower: '6 / 6.5 kVA',
  maxPower: '6.5 / 7 kVA',
  ratedSpeed: '3600 RPM',
  ratedCurrent: '27.2 / 29.5 A',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '230V',
  phase: 'Single phase',
  netWeight: '81 kg',
  generatingSet: true,
 
  description: 'مولد بنزين موديل SCF8000HGSa، خرج أحادي الطور، منظم جهد AVR، قدرة مقننة 6–6.5 ك.ف.أ، قدرة قصوى 6.5–7 ك.ف.أ، تشغيل يدوي وكهربائي، محرك OHV مبرد بالهواء، مستوى ضوضاء 81–84 ديسيبل عند حمل 100%.',
  imageProduct: '/products/scf8000hgsa.png',
  images: ['/products/scf8000hgsa.png'],
  availability: true
},

// ===================== مولد iGen.2300Z =====================
{
  id: 110,
  name: 'iGen.2300Z',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Inverter',

  brand: 'iGen',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Inverter',

  modelName: 'iGen.2300Z',
  ratedPower: '1900 VA',
  maxPower: '2300 VA',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '220 / 230 / 240 V',
  insulationLevel: 'H',
  phase: 'Single phase',
  netWeight: '21.5 kg',
  generatingSet: true,
  
  description: 'مولد Inverter موديل iGen.2300Z، قدرة مقننة 1900 فولت أمبير، قدرة قصوى 2300 فولت أمبير، جهد خرج 220/230/240 فولت، تردد 50/60 هرتز، فئة عزل H، محرك بنزين 4 أشواط OHV، سعة 98 سي سي، تشغيل يدوي، مستوى ضوضاء 53 ديسيبل عند 7 أمتار، خزان وقود فعلي 4.8 لتر.',
  imageProduct: '/products/igen2300z.png',
  images: ['/products/igen2300z.png'],
  availability: true
},

// ===================== مولد iGen.3500Z =====================
{
  id: 111,
  name: 'iGen.3500Z',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Inverter',

  brand: 'iGen',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Inverter',

  modelName: 'iGen.3500Z',
  ratedPower: '3100 VA',
  maxPower: '3500 VA',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '220 / 230 / 240 V',
  insulationLevel: 'H',
  phase: 'Single phase',
  netWeight: '38.5 kg',
  generatingSet: true,

  description: 'مولد Inverter موديل iGen.3500Z، قدرة مقننة 3100 فولت أمبير، قدرة قصوى 3500 فولت أمبير، جهد خرج 220/230/240 فولت، تردد 50/60 هرتز، فئة عزل H، محرك بنزين 4 أشواط OHV، سعة 192 سي سي، تشغيل يدوي، مستوى ضوضاء 59 ديسيبل عند 7 أمتار، خزان وقود فعلي 6 لتر.',
  imageProduct: '/products/igen3500z.png',
  images: ['/products/igen3500z.png'],
  availability: true
},

// ===================== مولد iGen.3500ZS =====================
{
  id: 112,
  name: 'iGen.3500ZS',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات Inverter',

  brand: 'iGen',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات Inverter',

  modelName: 'iGen.3500ZS',
  ratedPower: '3100 VA',
  maxPower: '3500 VA',
  ratedFrequency: '50 / 60 HZ',
  ratedVoltage: '220 / 230 / 240 V',
  insulationLevel: 'H',
  phase: 'Single phase',
  netWeight: '43 kg',
  generatingSet: true,

  description: 'مولد Inverter موديل iGen.3500ZS، قدرة مقننة 3100 فولت أمبير، قدرة قصوى 3500 فولت أمبير، جهد خرج 220/230/240 فولت، تردد 50/60 هرتز، فئة عزل H، محرك بنزين 4 أشواط OHV، تشغيل يدوي وكهربائي، مستوى ضوضاء 59 ديسيبل عند 7 أمتار.',
  imageProduct: '/products/igen3500zs.png',
  images: ['/products/igen3500zs.png'],
  availability: true
},

// ===================== مضخة مياه ديزل SRWP20D(E) =====================
{
  id: 113,
  name: 'SRWP20D(E)',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات مياه SR',

  brand: 'SR',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات مياه SR',

  modelName: 'SRWP20D(E)',
  engineType: 'Single cylinder, vertical, forced air cooling, 4-stroke diesel engine',
  startingSystem: 'Recoil / Electric',
  displacement: '246 ml',
  ratedSpeed: '3600 RPM',
  continuousOutput: '3.6 kW',
  inletDiameter: '50 mm',
  outletDiameter: '50 mm',
  suction: '7 m',
  lift: '30 m',
  flowRate: '30 m³/h',
  selfSuctionTime: '≤180 s',
  
  description: 'مضخة مياه ديزل موديل SRWP20D(E)، محرك ديزل أسطوانة واحدة، تبريد هواء قسري، 4 أشواط، قدرة تشغيل مستمرة 3.6 كيلو وات، سرعة 3600 دورة/دقيقة، قطر مدخل ومخرج 50 مم، عمق شفط 7 متر، ارتفاع رفع 30 متر، معدل تدفق 30 متر مكعب/ساعة، تشغيل يدوي وكهربائي.',
  imageProduct: '/products/srwp20de.png',
  images: ['/products/srwp20de.png'],
  availability: true
},

// ===================== مضخة مياه ديزل SRWP30D(E) =====================
{
  id: 114,
  name: 'SRWP30D(E)',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات مياه SR',

  brand: 'SR',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات مياه SR',

  modelName: 'SRWP30D(E)',
  engineType: 'Single cylinder, vertical, forced air cooling, 4-stroke diesel engine',
  startingSystem: 'Recoil / Electric',
  displacement: '296 ml',
  ratedSpeed: '3600 RPM',
  continuousOutput: '4 kW',
  inletDiameter: '80 mm',
  outletDiameter: '80 mm',
  suction: '7 m',
  lift: '28 m',
  flowRate: '45 m³/h',
  selfSuctionTime: '≤180 s',

  description: 'مضخة مياه ديزل موديل SRWP30D(E)، محرك ديزل 4 أشواط، قدرة تشغيل مستمرة 4 كيلو وات، سرعة 3600 دورة/دقيقة، قطر مدخل ومخرج 80 مم، عمق شفط 7 متر، ارتفاع رفع 28 متر، معدل تدفق 45 متر مكعب/ساعة، تشغيل يدوي وكهربائي.',
  imageProduct: '/products/srwp30de.png',
  images: ['/products/srwp30de.png'],
  availability: true
},

// ===================== مضخة مياه ديزل SRWP40D(E) =====================
{
  id: 115,
  name: 'SRWP40D(E)',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات مياه SR',

  brand: 'SR',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات مياه SR',

  modelName: 'SRWP40D(E)',
  engineType: 'Single cylinder, vertical, forced air cooling, 4-stroke diesel engine',
  startingSystem: 'Recoil / Electric',
  displacement: '418 ml',
  ratedSpeed: '3600 RPM',
  continuousOutput: '6.3 kW',
  inletDiameter: '100 mm',
  outletDiameter: '100 mm',
  suction: '7 m',
  lift: '25 m',
  flowRate: '80 m³/h',
  selfSuctionTime: '≤180 s',

  description: 'مضخة مياه ديزل موديل SRWP40D(E)، قدرة تشغيل مستمرة 6.3 كيلو وات، سرعة 3600 دورة/دقيقة، قطر مدخل ومخرج 100 مم، عمق شفط 7 متر، ارتفاع رفع 25 متر، معدل تدفق 80 متر مكعب/ساعة، تشغيل يدوي وكهربائي.',
  imageProduct: '/products/srwp40de.png',
  images: ['/products/srwp40de.png'],
  availability: true
},

// ===================== مضخة مياه ديزل SRTP30D(E) =====================
{
  id: 116,
  name: 'SRTP30D(E)',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات مياه SR',

  brand: 'SR',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات مياه SR',

  modelName: 'SRTP30D(E)',
  engineType: 'Single cylinder, vertical, forced air cooling, 4-stroke diesel engine',
  startingSystem: 'Recoil / Electric',
  displacement: '296 ml',
  ratedSpeed: '3600 RPM',
  continuousOutput: '4 kW',
  inletDiameter: '80 mm',
  outletDiameter: '80 mm',
  suction: '7 m',
  lift: '28 m',
  flowRate: '65 m³/h',
  selfSuctionTime: '≤180 s',
  impurityRatio: '≤30 %',
  particleDiameter: '≤10 mm',
  
  description: 'مضخة مياه ديزل موديل SRTP30D(E)، مناسبة للمياه العكرة، قدرة 4 كيلو وات، قطر مدخل ومخرج 80 مم، عمق شفط 7 متر، ارتفاع رفع 28 متر، تدفق 65 متر مكعب/ساعة، تتحمل شوائب حتى 30% وحجم جسيمات حتى 10 مم.',
  imageProduct: '/products/srtp30de.png',
  images: ['/products/srtp30de.png'],
  availability: true
},

// ===================== مضخة مياه ديزل SRTP40D(E) =====================
{
  id: 117,
  name: 'SRTP40D(E)',
  price: 0,
  mainCategory: 'مضخات مياه',
  subCategory: 'مضخات ديزل',
  subSubCategory: 'مضخات مياه SR',

  brand: 'SR',
  brandMain: 'مضخات مياه',
  brandSub: 'مضخات ديزل',
  brandSubSub: 'مضخات مياه SR',

  modelName: 'SRTP40D(E)',
  engineType: 'Single cylinder, vertical, forced air cooling, 4-stroke diesel engine',
  startingSystem: 'Recoil / Electric',
  displacement: '418 ml',
  ratedSpeed: '3600 RPM',
  continuousOutput: '6.3 kW',
  inletDiameter: '100 mm',
  outletDiameter: '100 mm',
  suction: '7 m',
  lift: '25 m',
  flowRate: '85 m³/h',
  selfSuctionTime: '≤180 s',
  impurityRatio: '≤30 %',
  particleDiameter: '≤25.4 mm',
  
  description: 'مضخة مياه ديزل موديل SRTP40D(E)، للمياه العكرة، قدرة 6.3 كيلو وات، قطر مدخل ومخرج 100 مم، عمق شفط 7 متر، ارتفاع رفع 25 متر، معدل تدفق 85 متر مكعب/ساعة، تتحمل شوائب حتى 30% وجسيمات حتى 25.4 مم.',
  imageProduct: '/products/srtp40de.png',
  images: ['/products/srtp40de.png'],
  availability: true
},

// ===================== مولد بنزين QA3000EP =====================
{
  id: 118,
  name: 'QA3000EP',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات ELEPAQ',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات ELEPAQ',

  modelName: 'QA3000EP',
  ratedPower: '2.8 kW',
  maxPower: '3.0 kW',
  ratedSpeed: '3600 RPM',
  ratedFrequency: '60 HZ',
  ratedVoltage: '110–240 V',
  powerFactor: 1,
  phase: 'Single Phase',
  generatingSet: true,

  description: 'مولد بنزين ELEPAQ موديل QA3000EP، قدرة مقننة 2.8 كيلو وات وقدرة قصوى 3.0 كيلو وات، جهد 110–240 فولت، تردد 60 هرتز، سرعة 3600 دورة/دقيقة، تشغيل يدوي وكهربائي، محرك 4 أشواط OHV سعة 196 سي سي، مستوى ضوضاء 68 ديسيبل عند 7 أمتار، خزان وقود 19 لتر، تشغيل مستمر حتى 7 ساعات.',
  imageProduct: '/products/qa3000ep.png',
  images: ['/products/qa3000ep.png'],
  availability: true
},

// ===================== مولد بنزين QA3500EP =====================
{
  id: 119,
  name: 'QA3500EP',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات ELEPAQ',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات ELEPAQ',

  modelName: 'QA3500EP',
  ratedPower: '3.5 kW',
  maxPower: '3.8 kW',
  ratedSpeed: '3600 RPM',
  ratedFrequency: '60 HZ',
  ratedVoltage: '110–240 V',
  powerFactor: 1,
  phase: 'Single Phase',
  generatingSet: true,

  description: 'مولد بنزين ELEPAQ موديل QA3500EP، قدرة مقننة 3.5 كيلو وات وقدرة قصوى 3.8 كيلو وات، جهد 110–240 فولت، تردد 60 هرتز، محرك 7.5 حصان، سعة 224 سي سي، تشغيل يدوي وكهربائي، مستوى ضوضاء 70 ديسيبل، خزان وقود 19 لتر، تشغيل مستمر 7 ساعات.',
  imageProduct: '/products/qa3500ep.png',
  images: ['/products/qa3500ep.png'],
  availability: true
},

// ===================== مولد بنزين QA4000EP =====================
{
  id: 120,
  name: 'QA4000EP',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات ELEPAQ',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات ELEPAQ',

  modelName: 'QA4000EP',
  ratedPower: '4.5 kW',
  maxPower: '5.0 kW',
  ratedSpeed: '3600 RPM',
  ratedFrequency: '60 HZ',
  ratedVoltage: '110–240 V',
  powerFactor: 1,
  phase: 'Single Phase',
  generatingSet: true,

  description: 'مولد بنزين ELEPAQ موديل QA4000EP، قدرة مقننة 4.5 كيلو وات وقدرة قصوى 5.0 كيلو وات، محرك 8 حصان، سعة 265 سي سي، تشغيل يدوي، جهد 110–240 فولت، تردد 60 هرتز، خزان وقود 19 لتر.',
  imageProduct: '/products/qa4000ep.png',
  images: ['/products/qa4000ep.png'],
  availability: true
},

// ===================== مولد بنزين QA6500EP =====================
{
  id: 121,
  name: 'QA6500EP',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات ELEPAQ',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات ELEPAQ',

  modelName: 'QA6500EP',
  ratedPower: '6.0 kW',
  maxPower: '6.5 kW',
  ratedSpeed: '3600 RPM',
  ratedFrequency: '60 HZ',
  ratedVoltage: '110–240 V',
  powerFactor: 1,
  phase: 'Single Phase',
  generatingSet: true,

  description: 'مولد بنزين ELEPAQ موديل QA6500EP، قدرة مقننة 6 كيلو وات وقدرة قصوى 6.5 كيلو وات، محرك 13 حصان، سعة 389 سي سي، خزان وقود 30 لتر، تشغيل يدوي وكهربائي، مستوى ضوضاء 72 ديسيبل.',
  imageProduct: '/products/qa6500ep.png',
  images: ['/products/qa6500ep.png'],
  availability: true
},

// ===================== مولد بنزين QA7500EP =====================
{
  id: 122,
  name: 'QA7500EP',
  price: 0,
  mainCategory: 'مولدات كهربائية',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات ELEPAQ',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهربائية',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات ELEPAQ',

  modelName: 'QA7500EP',
  ratedPower: '6.8 kW',
  maxPower: '7.5 kW',
  ratedSpeed: '3600 RPM',
  ratedFrequency: '60 HZ',
  ratedVoltage: '110–240 V',
  powerFactor: 1,
  phase: 'Single Phase',
  generatingSet: true,

  description: 'مولد بنزين ELEPAQ موديل QA7500EP، قدرة مقننة 6.8 كيلو وات وقدرة قصوى 7.5 كيلو وات، محرك 15 حصان، سعة 439 سي سي، خزان وقود 30 لتر، تشغيل يدوي وكهربائي، مناسب للأحمال العالية.',
  imageProduct: '/products/qa7500ep.png',
  images: ['/products/qa7500ep.png'],
  availability: true
},
// ===================== مولد كهرباء بنزين QA10000EPT =====================
{
  id: 123,
  name: 'مولد كهرباء بنزين QA10000EPT',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين',
  subSubCategory: 'مولدات ELEPAQ بنزين',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين',
  brandSubSub: 'مولدات ELEPAQ بنزين',

  modelName: 'QA10000EPT',
  ratedPower: '9.5 KW (Standby)',
  engineType: '4-Stroke, OHV',
  fuelType: 'Gasoline (petrol) / بنزين',
  fuelTankCapacity: '30 L',
  voltage: '230V / 380V',
  frequency: '60Hz',
  phase: 'Triple phase / ثلاثي الفاز',
  startingSystem: 'Electric Start & Recoil / كهرباء وحبل',
  coolingSystem: 'Air Cooled / تبريد هوائي',
  controlPanel: 'With Automatic Voltage Regulator (AVR)',
  noiseLevel: '72 dB (A) @ 7 meters',
  dimensions: '700 x 530 x 560 mm',
  weight: '110 kg',
  standards: 'CE, ISO19001',
  madeIn: 'China',
  
  description: 'مولد كهرباء بنزين من ELEPAQ موديل QA10000EPT، القدرة المقننة 9.5 كيلو وات (احتياطي)، محرك 4 أشواط OHV، نظام التشغيل كهربائي وحبل (Electric Start & Recoil)، الجهد 230V/380V، التردد 60 هرتز، ثلاثي الفاز، التبريد هوائي، لوحة تحكم مع منظم جهد أوتوماتيكي (AVR)، مستوى الضوضاء 72 ديسيبل على بعد 7 أمتار، سعة خزان الوقود 30 لتر، الأبعاد 700x530x560 مم، الوزن 110 كجم. شهادات CE و ISO19001. صناعة صينية.',
  imageProduct: '/products/qa10000ept.png',
  images: ['/products/qa10000ept.png'],
  availability: true
},
// ===================== مولد كهرباء بنزين SA4200IS =====================
{
  id: 124,
  name: 'مولد كهرباء بنزين SA4200IS',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين إنفرتر',
  subSubCategory: 'مولدات ELEPAQ بنزين إنفرتر',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين إنفرتر',
  brandSubSub: 'مولدات ELEPAQ بنزين إنفرتر',

  modelName: 'SA4200IS',
  specification: '3.8 kva (new)',
  coolingType: 'Air-cooled, 4 stroke, 1 cylinder',
  startingType: 'Recoil+Electric (7AH)',
  displacement: '224cc',
  boreStroke: '72X55mm',
  compressionRatio: '9.2:1',
  fuelTankCapacity: '12.0 L',
  runningHour25: '16.5 H r',
  runningHour75: '8.5 H r',
  noiseLevel: '62dB',
  frequency: '60Hz',
  voltage: '220v',
  ratedPower: '3.8kW',
  maxPower: '4.2kW',
  dcOutput: '12V, 8.3A',
  oilAlertLamp: 'Yes',
  overLoadWarningLamp: 'Yes',
  wheels: '6"',
  parallelFunction: 'Optional',
  dualFuel: 'Optional',
  packageDimension: '640x480x520mm',
  netWeight: '40.0 Kgs',
  grossWeight: '44.0 Kgs',
  containerLoading40HQ: '600 pcs/40Hq',
  engineType: 'بنزين إنفرتر',
  fuelType: 'PETROL / بنزين',
  madeIn: 'China',
  
  description: 'مولد كهرباء بنزين إنفرتر من ELEPAQ موديل SA4200IS، القدرة 3.8 كيلو فولت أمبير، محرك 4 أشواط تبريد هوائي، أسطوانة واحدة، السعة 224 سي سي، قطر المكبس والشوط 72X55 مم، نسبة الانضغاط 9.2:1، نظام التشغيل حبل وكهربائي ببطارية 7AH، التردد 60 هرتز، الجهد 220 فولت، القدرة المقننة 3.8 كيلو وات، القدرة القصوى 4.2 كيلو وات، خرج DC بجهد 12 فولت و8.3 أمبير، سعة خزان الوقود 12 لتر، وقت التشغيل 16.5 ساعة بحمل 25% و8.5 ساعة بحمل 75%، مستوى الضوضاء 62 ديسيبل، عجلات 6 بوصة، مصباح تنبيه الزيت ومصباح تحذير الحمل الزائد، خاصية التشغيل المتوازي اختيارية، الوقود المزدوج اختياري، الأبعاد 640x480x520 مم، الوزن الصافي 40 كجم، الوزن الإجمالي 44 كجم. صناعة صينية.',
  imageProduct: '/products/sa4200is.png',
  images: ['/products/sa4200is.png'],
  availability: true
},

// ===================== مولد كهرباء بنزين SA8000IS =====================
{
  id: 125,
  name: 'مولد كهرباء بنزين SA8000IS',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين إنفرتر',
  subSubCategory: 'مولدات ELEPAQ بنزين إنفرتر',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين إنفرتر',
  brandSubSub: 'مولدات ELEPAQ بنزين إنفرتر',

  modelName: 'SA8000IS',
  specification: '7.2kva (new)',
  coolingType: 'Air-cooled, 4 stroke, 1 cylinder',
  startingType: 'Recoil+Electric (15AH)',
  displacement: '459 cc',
  boreStroke: '92X69mm',
  compressionRatio: '9.2:1',
  fuelTankCapacity: '35.0 L',
  runningHour25: '14.5 H r',
  runningHour75: '6.5 H r',
  noiseLevel: '66dB',
  frequency: '60Hz',
  voltage: '220v',
  ratedPower: '7.2kW',
  maxPower: '8.0kW',
  dcOutput: '12V, 8.3A',
  oilAlertLamp: 'Yes',
  overLoadWarningLamp: 'Yes',
  wheels: '10"',
  parallelFunction: 'Optional',
  dualFuel: 'Optional',
  packageDimension: '785x615x600mm',
  netWeight: '81.0 Kgs',
  grossWeight: '85.0 Kgs',
  containerLoading40HQ: '212 pcs/40Hq',
  engineType: 'بنزين إنفرتر',
  fuelType: 'PETROL / بنزين',
  madeIn: 'China',
  
  description: 'مولد كهرباء بنزين إنفرتر من ELEPAQ موديل SA8000IS، القدرة 7.2 كيلو فولت أمبير، محرك 4 أشواط تبريد هوائي، أسطوانة واحدة، السعة 459 سي سي، قطر المكبس والشوط 92X69 مم، نسبة الانضغاط 9.2:1، نظام التشغيل حبل وكهربائي ببطارية 15AH، التردد 60 هرتز، الجهد 220 فولت، القدرة المقننة 7.2 كيلو وات، القدرة القصوى 8.0 كيلو وات، خرج DC بجهد 12 فولت و8.3 أمبير، سعة خزان الوقود 35 لتر، وقت التشغيل 14.5 ساعة بحمل 25% و6.5 ساعة بحمل 75%، مستوى الضوضاء 66 ديسيبل، عجلات 10 بوصة، مصباح تنبيه الزيت ومصباح تحذير الحمل الزائد، خاصية التشغيل المتوازي اختيارية، الوقود المزدوج اختياري، الأبعاد 785x615x600 مم، الوزن الصافي 81 كجم، الوزن الإجمالي 85 كجم. صناعة صينية.',
  imageProduct: '/products/sa8000is.png',
  images: ['/products/sa8000is.png'],
  availability: true
},

// ===================== مولد كهرباء بنزين SA8000ISE =====================
{
  id: 126,
  name: 'مولد كهرباء بنزين SA8000ISE',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات بنزين إنفرتر',
  subSubCategory: 'مولدات ELEPAQ بنزين إنفرتر',

  brand: 'ELEPAQ',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات بنزين إنفرتر',
  brandSubSub: 'مولدات ELEPAQ بنزين إنفرتر',

  modelName: 'SA8000ISE',
  maxPower: '7.2 KW',
  ratedPower: '8.0 KW',
  ratedVoltage: '220 V',
  frequency: '60 Hz',
  engineSpeed: '3600rpm',
  powerFactor: '1.0',
  dcOutput: '12V/8.3A',
  startingBatteryModel: '12V/15Ah',
  noiseLevel: '66db',
  phase: 'Single Phase / أحادي الفاز',
  startingSystem: 'Recoil + Electric (One Button Start) / حبل وكهرباء',
  fuelTankCapacity: '35 L',
  continuousWork: '6.5. Hours / ساعة',
  engineType: 'Air-cooled, 4 stroke, 1 cylinder / تبريد هوائي',
  displacement: '459cc',
  boreStroke: '92*69 mm',
  fuelType: 'Gasoline 91 / بنزين',
  lubricationOilVolume: '1.1L (5W-30)',
  basicFeatures: 'One Button Start, Super Stable Voltage, Digital Meter, Circuit Breaker, Oil Alert, Wheels and Handle, Portable and Low Noise Design, 15W USB Port Quick Charge',
  dimensions: '785*615*600 mm',
  grossWeight: '85KG',
  madeIn: 'China',
  
  description: 'مولد كهرباء بنزين إنفرتر من ELEPAQ موديل SA8000ISE، القدرة القصوى 7.2 كيلو وات، القدرة المقننة 8.0 كيلو وات، الجهد المقنن 220 فولت، التردد 60 هرتز، سرعة المحرك 3600 دورة/دقيقة، معامل القدرة 1.0، خرج DC بجهد 12 فولت و8.3 أمبير، بطارية التشغيل 12 فولت/15 أمبير ساعة، مستوى الضوضاء 66 ديسيبل، أحادي الفاز، نظام التشغيل حبل وكهربائي بزر واحد، سعة خزان الوقود 35 لتر، وقت التشغيل المستمر 6.5 ساعة، محرك تبريد هوائي 4 أشواط أسطوانة واحدة، السعة 459 سي سي، قطر المكبس والشوط 92*69 مم، وقود بنزين 91، حجم زيت التزليق 1.1 لتر (5W-30). المميزات الأساسية: تشغيل بزر واحد، جهد فائق الاستقرار، عداد رقمي، قاطع دائرة، تنبيه الزيت، عجلات ومقبض، تصميم محمول ومنخفض الضوضاء، منفذ USB بقدرة 15 وات للشحن السريع. الأبعاد 785*615*600 مم، الوزن الإجمالي 85 كجم. صناعة صينية.',
  imageProduct: '/products/sa8000ise.png',
  images: ['/products/sa8000ise.png'],
  availability: true
},
// ===================== مولد لحام بنزين WG220EP =====================
{
  id: 127,
  name: 'مولد لحام بنزين WG220EP',
  price: 0,
  mainCategory: 'مولدات لحام',
  subCategory: 'مولدات لحام بنزين',
  subSubCategory: 'مولدات لحام ELEPAQ بنزين',

  brand: 'ELEPAQ',
  brandMain: 'مولدات لحام',
  brandSub: 'مولدات لحام بنزين',
  brandSubSub: 'مولدات لحام ELEPAQ بنزين',

  modelName: 'WG220EP',
  ratedPower: '5.0 KW (Standby)',
  engineType: '4-Stroke, OHV',
  fuelType: 'Gasoline (petrol) / بنزين',
  fuelTankCapacity: '30 L',
  voltage: '230V',
  frequency: '60Hz',
  phase: 'Single phase / أحادي الفاز',
  startingSystem: 'Electric Start & Recoil / كهرباء وحبل',
  coolingSystem: 'Air Cooled / تبريد هوائي',
  controlPanel: 'With Automatic Voltage Regulator (AVR)',
  noiseLevel: '72 dB (A) @ 7 meters',
  dimensions: '700 x 525 x 560 mm',
  weight: '95 kg',
  standards: 'CE, ISO19001, ROHS, NE',
  madeIn: 'China',
  
  description: 'مولد لحام بنزين من ELEPAQ موديل WG220EP، القدرة المقننة 5.0 كيلو وات (احتياطي)، محرك 4 أشواط OHV، نظام التشغيل كهربائي وحبل (Electric Start & Recoil)، الجهد 230 فولت، التردد 60 هرتز، أحادي الفاز، التبريد هوائي، لوحة تحكم مع منظم جهد أوتوماتيكي (AVR)، مستوى الضوضاء 72 ديسيبل على بعد 7 أمتار، سعة خزان الوقود 30 لتر، الأبعاد 700x525x560 مم، الوزن 95 كجم. شهادات CE و ISO19001 و ROHS و NE. صناعة صينية.',
  imageProduct: '/products/wg220ep.png',
  images: ['/products/wg220ep.png'],
  availability: true
},

// ===================== مولد كهرباء DG3000E =====================
{
  id: 128,
  name: 'مولد كهرباء DG3000E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات ديزل',

  brand: 'GENERIC',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات ديزل',

  modelName: 'DG3000E',
  maxOutput: '3.3 KW',
  ratedOutput: '3.0 KW',
  ratedACVoltage: '220 V',
  frequency: '60 Hz',
  engineSpeed: '3600 RPM',
  powerFactor: '1',
  dcOutput: '12V/8.3A',
  startingBatteryModel: '12V/24AH',
  noiseLevel: '80-85 dB at 7m',
  phase: 'SINGLE PHASE / أحادي الفاز',
  alternatorType: 'Coil Excited, 2-Pole, Single Alternator',
  startingSystem: 'Electric AND RECOIL / كهربائي ويدوي بالبكرة',
  fuelTankCapacity: '12.5 L',
  continuousWork: '9 Hours / ساعات',
  engineModel: '178F',
  engineType: 'Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine',
  displacement: '296 CC',
  boreStroke: '78*62 mm',
  fuelConsumption: '295 g/kW/h',
  fuelType: 'Diesel / ديزل',
  lubricationOilVolume: '1.65L (15w~40)',
  combustionSystem: 'Direct Injection / الحقن المباشر',
  standardFeatures: 'AVR,Digital Meter, Socket, Circuit Breaker, Oil Alert, Wheels,Handle',
  optionalFeatures: 'ATS (optional)',
  dimensions: '660*475*600 mm',
  grossWeight: '75 KG',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد كهرباء موديل DG3000E، أقصى خرج (Max Output) 3.3 كيلو وات، الخرج المقنن (Rated Output) 3.0 كيلو وات، جهد التيار المتردد المقنن 220 فولت، التردد 60 هرتز، سرعة المحرك (دوران المحرك) 3600 دورة/دقيقة، عامل القدرة 1، مخرج التيار المستمر (DC Output) 12 فولت/8.3 أمبير، موديل بطارية التشغيل 12 فولت/24 أمبير/ساعة، مستوى الضوضاء (بمسافة 7 متر) 80-85 ديسيبل، أحادي الفاز (SINGLE PHASE)، نوع المولد ملف مثير، قطبين، مولد أحادي (Coil Excited, 2-Pole, Single Alternator)، نظام التشغيل كهربائي ويدوي بالبكرة (Electric AND RECOIL)، سعة خزان الوقود (لتر) 12.5 لتر، العمل المستمر (ساعات) 9 ساعات، موديل المحرك 178F، نوع المحرك أسطوانة واحدة، عمودي، 4 أشواط، محرك ديزل مبرد بالهواء (Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine)، الإزاحة (سعة محرك) 296 سي سي، القطر * الشوط (المشوار) (مم) 78*62 ملم، استهلاك الوقود (جرام/كيلو وات/ساعة) 295 جرام/كيلو وات/ساعة، نوع الوقود ديزل، حجم زيت التشحيم (لتر) 1.65 لتر (15w~40)، نظام الاحتراق الحقن المباشر (Direct Injection)، الميزات القياسية منظم جهد أوتوماتيكي (AVR)، عداد رقمي، مقبس، قاطع دائرة، تنبيه زيت، عجلات، مقبض، الميزات الاختيارية ATS (اختياري)، الأبعاد (الطول*العرض*الارتفاع) (مم) 660×475×600 ملم، الوزن الإجمالي (كجم) 75 كجم، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/dg3000e.png',
  images: ['/products/dg3000e.png'],
  availability: true
},

// ===================== مولد كهرباء DG6000E =====================
{
  id: 129,
  name: 'مولد كهرباء DG6000E',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات ديزل',

  brand: 'GENERIC',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات ديزل',

  modelName: 'DG6000E',
  maxOutput: '5.5 KW',
  ratedOutput: '5.0 KW',
  ratedACVoltage: '220 V',
  frequency: '60 Hz',
  engineSpeed: '3600 RPM',
  powerFactor: '1',
  dcOutput: '12V/8.3A',
  startingBatteryModel: '12V/200A',
  noiseLevel: '80-85 dB at 7m',
  phase: 'SINGLE PHASE / أحادي الفاز',
  alternatorType: 'Self-Excited, 2-Pole, Single Alternator',
  startingSystem: 'Electric AND RECOIL / كهربائي ويدوي بالبكرة',
  fuelTankCapacity: '12.5 L',
  continuousWork: '7 Hours / ساعات',
  engineModel: '186FA',
  engineType: 'Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine',
  displacement: '418 CC',
  boreStroke: '86*72 mm',
  fuelConsumption: '280 g/kW/h',
  fuelType: 'Diesel / ديزل',
  lubricationOilVolume: '1.65L (15w~40)',
  combustionSystem: 'Direct Injection / الحقن المباشر',
  standardFeatures: 'AVR,Digital Meter, Socket, Circuit Breaker, Oil Alert, Wheels,Handle',
  optionalFeatures: 'ATS, remote contol',
  dimensions: '715*495*610 mm',
  grossWeight: '118 KG',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد كهرباء موديل DG6000E، أقصى خرج (Max Output) 5.5 كيلو وات، الخرج المقنن (Rated Output) 5.0 كيلو وات، جهد التيار المتردد المقنن 220 فولت، التردد 60 هرتز، سرعة المحرك (دوران المحرك) 3600 دورة/دقيقة، عامل القدرة 1، مخرج التيار المستمر (DC Output) 12 فولت/8.3 أمبير، موديل بطارية التشغيل 12 فولت/200 أمبير، مستوى الضوضاء (بمسافة 7 متر) 80-85 ديسيبل، أحادي الفاز (SINGLE PHASE)، نوع المولد مثير ذاتي، قطبين، مولد أحادي (Self-Excited, 2-Pole, Single Alternator)، نظام التشغيل كهربائي ويدوي بالبكرة (Electric AND RECOIL)، سعة خزان الوقود (لتر) 12.5 لتر، العمل المستمر (ساعات) 7 ساعات، موديل المحرك 186FA، نوع المحرك أسطوانة واحدة، عمودي، 4 أشواط، محرك ديزل مبرد بالهواء (Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine)، الإزاحة (سعة محرك) 418 سي سي، القطر * الشوط (المشوار) (مم) 86×72 ملم، استهلاك الوقود (جرام/كيلو وات/ساعة) 280 جرام/كيلو وات/ساعة، نوع الوقود ديزل، حجم زيت التشحيم (لتر) 1.65 لتر (15w~40)، نظام الاحتراق الحقن المباشر (Direct Injection)، الميزات القياسية منظم جهد أوتوماتيكي (AVR)، عداد رقمي، مقبس، قاطع دائرة، تنبيه زيت، عجلات، مقبض، الميزات الاختيارية ATS، تحكم عن بعد، الأبعاد (الطول*العرض*الارتفاع) (مم) 715×495×610 ملم، الوزن الإجمالي (كجم) 118 كجم، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/dg6000e.png',
  images: ['/products/dg6000e.png'],
  availability: true
},

// ===================== مولد كهرباء DG6500SE-A =====================
{
  id: 130,
  name: 'مولد كهرباء DG6500SE-A',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات ديزل',

  brand: 'GENERIC',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات ديزل',

  modelName: 'DG6500SE-A',
  maxOutput: '6.0 KW',
  ratedOutput: '5.5 KW',
  ratedACVoltage: '220 V',
  frequency: '60 Hz',
  engineSpeed: '3600 RPM',
  powerFactor: '1',
  dcOutput: '12V/8.3A',
  startingBatteryModel: '12V/280A',
  noiseLevel: '65-70 dB at 7m',
  phase: 'Single Phase / أحادي الفاز',
  alternatorType: 'Self-Excited, 2-Pole, Single Alternator',
  startingSystem: 'Electric and Recoil / الكهربائي والإرتداد',
  fuelTankCapacity: '16 L',
  continuousWork: '7.5 Hours / ساعات',
  engineModel: '188F',
  engineType: 'Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine',
  displacement: '456 CC',
  boreStroke: '88*75 mm',
  fuelConsumption: '280 g/kW/h',
  fuelType: 'Diesel / ديزل',
  lubricationOilVolume: '1.65L (15w~40)',
  combustionSystem: 'Direct Injection / الحقن المباشر',
  standardFeatures: 'AVR,Digital Meter, Socket, Circuit Breaker, Oil Alert, Wheels,Handle',
  optionalFeatures: 'ATS, Remote Control / جهاز ATS عن بعد',
  dimensions: '950*550*830 mm',
  grossWeight: '156.5 KG',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد كهرباء موديل DG6500SE-A، أقصى خرج (Max Output) 6.0 كيلو وات، الخرج المقنن (Rated Output) 5.5 كيلو وات، جهد التيار المتردد المقنن 220 فولت، التردد 60 هرتز، سرعة المحرك (دوران المحرك) 3600 دورة/دقيقة، عامل القدرة 1، مخرج التيار المستمر (DC Output) 12 فولت/8.3 أمبير، موديل بطارية التشغيل 12 فولت/280 أمبير، مستوى الضوضاء (بمسافة 7 متر) 65-70 ديسيبل، أحادي الفاز (Single Phase)، نوع المولد مثير ذاتي، قطبين، مولد أحادي (Self-Excited, 2-Pole, Single Alternator)، نظام التشغيل الكهربائي والإرتداد (Electric and Recoil)، سعة خزان الوقود (لتر) 16 لتر، العمل المستمر (ساعات) 7.5 ساعات، موديل المحرك 188F، نوع المحرك أسطوانة واحدة، عمودي، 4 أشواط، محرك ديزل مبرد بالهواء (Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine)، الإزاحة (سعة محرك) 456 سي سي، القطر * الشوط (المشوار) (مم) 88×75 ملم، استهلاك الوقود (جرام/كيلو وات/ساعة) 280 جرام/كيلو وات/ساعة، نوع الوقود ديزل، حجم زيت التشحيم (لتر) 1.65 لتر (15w~40)، نظام الاحتراق الحقن المباشر (Direct Injection)، الميزات القياسية منظم جهد أوتوماتيكي (AVR)، عداد رقمي، مقبس، قاطع دائرة، تنبيه زيت، عجلات، مقبض، الميزات الاختيارية ATS، جهاز التحكم عن بعد، الأبعاد (الطول*العرض*الارتفاع) (مم) 950×550×830 ملم، الوزن الإجمالي (كجم) 156.5 كجم، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/dg6500se-a.png',
  images: ['/products/dg6500se-a.png'],
  availability: true
},

// ===================== مولد كهرباء DG11000SE-3 =====================
{
  id: 131,
  name: 'مولد كهرباء DG11000SE-3',
  price: 0,
  mainCategory: 'مولدات كهرباء',
  subCategory: 'مولدات ديزل',
  subSubCategory: 'مولدات ديزل',

  brand: 'GENERIC',
  brandMain: 'مولدات كهرباء',
  brandSub: 'مولدات ديزل',
  brandSubSub: 'مولدات ديزل',

  modelName: 'DG11000SE-3',
  maxOutput: '8.5 KW',
  ratedOutput: '8.0 KW',
  ratedACVoltage: '220 / 380 V',
  frequency: '60 Hz',
  engineSpeed: '3000 RPM',
  powerFactor: '1',
  dcOutput: '12V/8.3A',
  startingBatteryModel: '12V/280A',
  noiseLevel: '70-73 dB at 7m',
  phase: 'Three Phase / ثلاثي الفاز',
  alternatorType: 'Self-Excited, 2-Pole, Single Alternator',
  startingSystem: 'Electric / الكهربائية',
  fuelTankCapacity: '25 L',
  continuousWork: '8 HOURS / ساعات',
  engineModel: '1100F',
  engineType: 'Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine',
  displacement: '950 CC',
  boreStroke: '100*86 mm',
  fuelConsumption: '230 g/kW/h',
  fuelType: 'Diesel / ديزل',
  lubricationOilVolume: '1.8L (15w~40)',
  combustionSystem: 'Direct Injection / الحقن المباشر',
  standardFeatures: 'AVR,Digital Meter, Socket, Circuit Breaker, Oil Alert, Wheels,Handle',
  additionalFeatures: 'Top open design, all doors with locks',
  optionalFeatures: 'ATS, Remote Control / جهاز ATS عن بعد',
  dimensions: '1140*615*765 mm',
  grossWeight: '220KG',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد كهرباء موديل DG11000SE-3، أقصى خرج (Max Output) 8.5 كيلو وات، الخرج المقنن (Rated Output) 8.0 كيلو وات، جهد التيار المتردد المقنن 220/380 فولت، التردد 60 هرتز، سرعة المحرك (دوران المحرك) 3000 دورة/دقيقة، عامل القدرة 1، مخرج التيار المستمر (DC Output) 12 فولت/8.3 أمبير، موديل بطارية التشغيل 12 فولت/280 أمبير، مستوى الضوضاء (بمسافة 7 متر) 70-73 ديسيبل، ثلاثي الفاز (Three Phase)، نوع المولد مثير ذاتي، قطبين، مولد أحادي (Self-Excited, 2-Pole, Single Alternator)، نظام التشغيل الكهربائية (Electric)، سعة خزان الوقود (لتر) 25 لتر، العمل المستمر (ساعات) 8 ساعات، موديل المحرك 1100F، نوع المحرك أسطوانة واحدة، عمودي، 4 أشواط، محرك ديزل مبرد بالهواء (Single Cylinder, Vertical, 4 Stroke Air-Cooled Diesel Engine)، الإزاحة (سعة محرك) 950 سي سي، القطر * الشوط (المشوار) (مم) 100×86 ملم، استهلاك الوقود (جرام/كيلو وات/ساعة) 230 جرام/كيلو وات/ساعة، نوع الوقود ديزل، حجم زيت التشحيم (لتر) 1.8 لتر (15w~40)، نظام الاحتراق الحقن المباشر (Direct Injection)، الميزات القياسية منظم جهد أوتوماتيكي (AVR)، عداد رقمي، مقبس، قاطع دائرة، تنبيه زيت، عجلات، مقبض، الميزات الإضافية تصميم مفتوح من الأعلى، جميع الأبواب بأقفال، الميزات الاختيارية ATS، جهاز التحكم عن بعد، الأبعاد (الطول*العرض*الارتفاع) (مم) 1140×615×765 ملم، الوزن الإجمالي (كجم) 220 كجم، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/dg11000se-3.png',
  images: ['/products/dg11000se-3.png'],
  availability: true
},

// ===================== مولد ديزل DG20000SE-3 =====================
{
  id: 132,
  name: 'مولد ديزل DG20000SE-3',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات ديزل',

  brand: 'GINSOIL',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات ديزل',

  modelName: 'DG20000SE-3',
  ratedPowerOutput: '15 KW (STANDBY)',
  engineType: '4 STROKES, DUAL CYLINDER, WATER COOLED',
  fuelType: 'DIESEL / ديزل',
  fuelTankCapacity: '35 L',
  operatingVoltage: '230V/380V, 60HZ',
  phase: 'TRIPLE PHASE',
  startingMethod: 'ELECTRIC START',
  frequency: '60 HZ',
  coolingSystem: 'WATER COOLED',
  controlPanel: 'WITH AUTOMATIC VOLTAGE REGULATOR (AVR)',
  noiseLevel: '70 DB (A) @ 7 METERS',
  dimensions: '1270*770*1130 MM',
  weight: '520 KG',
  standards: 'CE, ISO19001, ROHS, NE',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد ديزل من GINSOIL موديل DG20000SE-3، القدرة الاحتياطية 15 كيلو وات، نوع المحرك 4 أشواط، أسطوانتين مزدوجتين، مبرد بالماء (4 STROKES, DUAL CYLINDER, WATER COOLED)، نوع الوقود ديزل، سعة خزان الوقود 35 لتر، جهد التشغيل 230/380 فولت، 60 هرتز، ثلاثي الأطوار (TRIPLE PHASE)، طريقة التشغيل تشغيل كهربائي (ELECTRIC START)، التردد 60 هرتز، نظام التبريد مبرد بالماء (WATER COOLED)، لوحة التحكم مع منظم الجهد الأوتوماتيكي (AVR)، مستوى الضوضاء 70 ديسيبل @ 7 متر، الأبعاد 1270×770×1130 ملم، الوزن 520 كجم، المعايير CE, ISO19001, ROHS, NE، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/dg20000se3.png',
  images: ['/products/dg20000se3.png'],
  availability: true
},

// ===================== مولد لحام ديزل DG6000EW =====================
{
  id: 133,
  name: 'مولد لحام ديزل DG6000EW',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات لحام ديزل',

  brand: 'GENERIC',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات لحام ديزل',

  modelName: 'DG6000EW',
  maxOutput: '2.3 KW',
  ratedOutput: '2.0 KW',
  ratedACVoltage: '220V',
  weldingNoLoadVoltage: '55-65V',
  weldingVoltage: '26-30V',
  weldingRatedCurrent: '160A',
  adjustableRangeOfCurrent: '0-180A',
  weldingEfficiency: '60%',
  frequency: '60 HZ',
  engineSpeed: '3600 RPM',
  powerFactor: '1',
  dcOutput: '12V/8.3A',
  startingBatteryModel: '12V/200A',
  noiseLevel: '80-85 DB (AT 7M)',
  phase: 'SINGLE PHASE',
  alternatorType: 'SELF-EXCITED, 2 POLE, SINGLE ALTERNATOR',
  startingSystem: 'ELECTRIC AND RECOIL',
  fuelTankCapacity: '12.5 L',
  continuousWorkHours: '7 HOURS',
  engineModel: '186FA',
  engineType: 'SINGLE CYLINDER, VERTICAL, 4 STROKE AIR-COOLED DIESEL ENGINE',
  displacement: '418 CC',
  boreStroke: '86*72 MM',
  fuelType: 'DIESEL / ديزل',
  lubricationOilVolume: '1.65 L (5W - 40)',
  combustionSystem: 'DIRECT INJECTION',
  standardFeatures: 'AVR, DIGITAL METER, SOCKET, CIRCUIT BREAKER, OIL ALERT, WHEELS, HANDLE',
  dimensions: '715*490*655 MM',
  grossWeight: '120 KG',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد لحام ديزل موديل DG6000EW، الخرج الأقصى 2.3 كيلو وات، الخرج المقنن 2.0 كيلو وات، جهد التيار المتردد المقنن 220 فولت، جهد اللحام بدون حمل 55-65 فولت، جهد اللحام 26-30 فولت، تيار اللحام المقنن 160 أمبير، نطاق التيار القابل للتعديل 0-180 أمبير، كفاءة اللحام 60%، التردد 60 هرتز، سرعة المحرك 3600 دورة/دقيقة، معامل القدرة 1، خرج التيار المستمر 12 فولت/8.3 أمبير، موديل بطارية التشغيل 12 فولت/200 أمبير، مستوى الضوضاء 80-85 ديسيبل @ 7 متر، أحادي الطور (SINGLE PHASE)، نوع المولد ذاتي الإثارة، قطبين، مولد واحد، نظام التشغيل كهربائي وسلك شد (ELECTRIC AND RECOIL)، سعة خزان الوقود 12.5 لتر، ساعات العمل المستمر 7 ساعات، موديل المحرك 186FA، نوع المحرك أسطوانة واحدة، عمودي، 4 أشواط ديزل مبرد بالهواء، سعة المحرك 418 سي سي، قطر الأسطوانة والشوط 86×72 ملم، نوع الوقود ديزل، حجم زيت التشحيم 1.65 لتر (5W-40)، نظام الاحتراق حقن مباشر (DIRECT INJECTION)، المميزات القياسية AVR، عداد رقمي، مقبس، قاطع دائرة، تنبيه زيت، عجلات، مقبض، الأبعاد 715×490×655 ملم، الوزن الإجمالي 120 كجم، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/dg6000ew.png',
  images: ['/products/dg6000ew.png'],
  availability: true
},

// ===================== مولد لحام ديزل صامت DG6500SEW =====================
{
  id: 134,
  name: 'مولد لحام ديزل صامت DG6500SEW',
  price: 0,
  mainCategory: 'معدات زراعية',
  subCategory: 'مولدات ومحركات',
  subSubCategory: 'مولدات لحام ديزل',

  brand: 'GENERIC',
  brandMain: 'معدات زراعية',
  brandSub: 'مولدات ومحركات',
  brandSubSub: 'مولدات لحام ديزل',

  modelName: 'DG6500SEW',
  maxOutput: '5.5 KW',
  ratedOutput: '5.0 KW',
  ratedACVoltage: '220V',
  weldingNoLoadVoltage: '55-65V',
  weldingVoltage: '26-30V',
  weldingRatedCurrent: '160A',
  adjustableRangeOfCurrent: '0-180A',
  weldingEfficiency: '60%',
  frequency: '60 HZ',
  engineSpeed: '3600 RPM',
  powerFactor: '1',
  dcOutput: '12V/8.3A',
  startingBatteryModel: '12V/280A',
  noiseLevel: '68 - 72 DB (AT 7M)',
  phase: 'SINGLE PHASE',
  alternatorType: 'SELF-EXCITED, 2 POLE, SINGLE ALTERNATOR',
  startingSystem: 'ELECTRIC AND RECOIL',
  fuelTankCapacity: '16 L',
  continuousWorkHours: '6 HOURS',
  engineModel: '188FA',
  engineType: 'SINGLE CYLINDER, VERTICAL, 4 STROKE AIR-COOLED DIESEL ENGINE',
  boreStroke: '86*72 MM',
  displacement: '418 CC',
  fuelType: 'DIESEL / ديزل',
  lubricationOilVolume: '1.65 L (5W - 40)',
  combustionSystem: 'DIRECT INJECTION',
  standardFeatures: 'AVR, DIGITAL METER, SOCKET, CIRCUIT BREAKER, OIL ALERT, WHEELS, HANDLE',
  dimensions: '1020*535*670 MM',
  grossWeight: '160 KG',
  powerSource: 'DIESEL / ديزل',
  madeIn: 'CHINA',
  
  description: 'مولد لحام ديزل صامت موديل DG6500SEW، الخرج الأقصى 5.5 كيلو وات، الخرج المقنن 5.0 كيلو وات، جهد التيار المتردد المقنن 220 فولت، جهد اللحام بدون حمل 55-65 فولت، جهد اللحام 26-30 فولت، تيار اللحام المقنن 160 أمبير، نطاق التيار القابل للتعديل 0-180 أمبير، كفاءة اللحام 60%، التردد 60 هرتز، سرعة المحرك 3600 دورة/دقيقة، معامل القدرة 1، خرج التيار المستمر 12 فولت/8.3 أمبير، موديل بطارية التشغيل 12 فولت/280 أمبير، مستوى الضوضاء 68-72 ديسيبل @ 7 متر، أحادي الطور (SINGLE PHASE)، نوع المولد ذاتي الإثارة، قطبين، مولد واحد، نظام التشغيل كهربائي وسلك شد (ELECTRIC AND RECOIL)، سعة خزان الوقود 16 لتر، ساعات العمل المستمر 6 ساعات، موديل المحرك 188FA، نوع المحرك أسطوانة واحدة، عمودي، 4 أشواط ديزل مبرد بالهواء، قطر الأسطوانة والشوط 86×72 ملم، سعة المحرك 418 سي سي، نوع الوقود ديزل، حجم زيت التشحيم 1.65 لتر (5W-40)، نظام الاحتراق حقن مباشر (DIRECT INJECTION)، المميزات القياسية AVR، عداد رقمي، مقبس، قاطع دائرة، تنبيه زيت، عجلات، مقبض، الأبعاد 1020×535×670 ملم، الوزن الإجمالي 160 كجم، مصدر الطاقة ديزل (DIESEL). صناعة صينية.',
  imageProduct: '/products/dg6500sew.png',
  images: ['/products/dg6500sew.png'],
  availability: true
},

    // ======= اضيف باقي المنتجات هنا بنفس الشكل =======
  ];

  constructor() {}

  // ==================== كل المنتجات ====================
  getAllProducts(): Product[] {
    return this.products;
  }

  // ==================== فلترة حسب الماركة ====================
  getByBrand(brandName: string): Product[] {
    const b = brandName.trim().toLowerCase();
    return this.products.filter(p => p.brand?.trim().toLowerCase() === b);
  }

  // ==================== فلترة حسب التصنيفات ====================
  getByMainCategory(main: string): Product[] {
    const m = main.trim().toLowerCase();
    return this.products.filter(p => p.mainCategory?.trim().toLowerCase() === m);
  }

  getBySubCategory(sub: string): Product[] {
    const s = sub.trim().toLowerCase();
    return this.products.filter(p => p.subCategory?.trim().toLowerCase() === s);
  }

  getBySubSubCategory(subsub: string): Product[] {
    const ss = subsub.trim().toLowerCase();
    return this.products.filter(p => p.subSubCategory?.trim().toLowerCase() === ss);
  }

  // ==================== فلترة حسب شجرة البراند ====================
  getByBrandMain(main: string): Product[] {
    const m = main.trim().toLowerCase();
    return this.products.filter(p => p.brandMain?.trim().toLowerCase() === m);
  }

  getByBrandSub(main: string, sub: string): Product[] {
    const m = main.trim().toLowerCase();
    const s = sub.trim().toLowerCase();
    return this.products.filter(
      p => p.brandMain?.trim().toLowerCase() === m &&
           p.brandSub?.trim().toLowerCase() === s
    );
  }

  getByBrandSubSub(sub: string, subsub: string): Product[] {
    const s = sub.trim().toLowerCase();
    const ss = subsub.trim().toLowerCase();
    return this.products.filter(
      p => p.brandSub?.trim().toLowerCase() === s &&
           p.brandSubSub?.trim().toLowerCase() === ss
    );
  }

  // ==================== منتج واحد ====================
  getById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  // ==================== البحث بالصورة ====================
  getByImageProduct(image: string): Product | undefined {
    return this.products.find(p => p.imageProduct === image);
  }
}
