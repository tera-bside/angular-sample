import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productObservable = this.productService.getByProductId(params.get('productId')!);
      productObservable.subscribe(
        (data) => { 
          console.log('got value ' + data);
          this.product = data;
        },
        (error) => { console.error('something wrong occurred: ' + error) }
      );
      })
  }
}
