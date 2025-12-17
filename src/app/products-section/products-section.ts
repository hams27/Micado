import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsService, Product } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products-section.html',
  styleUrls: ['./products-section.css'],
})
export class ProductsSection {

  // ✅ المنتجات الرئيسية اللي هنعرضها في الكروت
  products: Product[] = [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {
    // إحضار جميع المنتجات اللي ليها تصنيف رئيسي
    this.products = this.productsService.getAllProducts().filter(p => !!p.mainCategory);
  }

  // ✅ دالة للتنقل لصفحة الفلتر مع تمرير اسم التصنيف الرئيسي
  goToFilterByCategory(category: string) {
    this.router.navigate(['/fillter'], {
      queryParams: { mainCategory: category }
    });
  }

}
