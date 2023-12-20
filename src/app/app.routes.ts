import { Routes } from '@angular/router';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'product/:id', component: SingleProductComponent}
];
