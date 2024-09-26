import { Routes } from '@angular/router';
import { HomeComponent } from '../customs/pages/home/home.component';
import { ParentComponent } from '../customs/components/parent/parent.component';
import { NotFoundComponent } from '../customs/components/not-found/not-found.component';
import { AboutComponent } from '../customs/components/about/about.component';
import { ProductComponent } from '../customs/components/products/product/product.component';
import { LoginComponent } from '../customs/components/login/login.component';
import { AuthGaurdService } from '../customs/services/auth-gaurd.service';
import { ProductDetailComponent } from '../customs/components/products/productDetail/product-detail/product-detail.component';
import { RegistrationComponent } from '../customs/components/registration/registration.component';
import { ReactiveFormComponent } from '../customs/components/reactive-form/reactive-form.component';
import { TaskDashboardComponent } from '../customs/components/dashboard/task-dashboard/task-dashboard.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'product/:name', component: ProductDetailComponent },
  { path: 'child-parent-relation', component: ParentComponent },
  { path: 'form', component: ReactiveFormComponent },
  { path: 'dashboard', component: TaskDashboardComponent },
  { path: '**', component: NotFoundComponent },
];
