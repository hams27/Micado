import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService, Product } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-section.html',
  styleUrls: ['./products-section.css'],
})
export class ProductsSection {

  products: { mainCategory: string; imageCategory?: string }[] = [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {
    // ✅ جلب كل التصنيفات الرئيسية بدون تكرار
    const allProducts = this.productsService.getAllProducts().filter(p => !!p.mainCategory);
    const uniqueMainCategories = Array.from(new Set(allProducts.map(p => p.mainCategory)));

    this.products = uniqueMainCategories.map(mainCat => ({
      mainCategory: mainCat,
      imageCategory: allProducts.find(p => p.mainCategory === mainCat)?.imageCategory
    }));
  }

  // ✅ التنقل لصفحة الفلترة مع تمرير الصنف الرئيسي
  goToFilterByCategory(category: string) {
    this.router.navigate(['/fillter'], {
      queryParams: { mainCategory: category }
    });
  }
}
