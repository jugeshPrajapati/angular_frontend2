import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
  Event,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { HeaderComponent } from '../customs/components/header/header.component';
import { OnsubscribeService } from '../customs/services/onsubscribe.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  /*n a hierarchical dependency injection, 
  same instance of a service class is injected in a component
   and its child components and their child components. */
  providers: [OnsubscribeService],
})
export class AppComponent {
  title = 'angular_frontend2';
  router: Router = inject(Router);
  showLoader: boolean = false;
  ngOnInit() {
    this.router.events.subscribe((RouterEvent: Event) => {
      if (RouterEvent instanceof NavigationStart) {
        this.showLoader = true;
        console.log('navigating');
      }
      if (
        RouterEvent instanceof NavigationEnd ||
        RouterEvent instanceof NavigationCancel ||
        RouterEvent instanceof NavigationError
      ) {
        this.showLoader = false;
      }
    });
  }
}
// <router-outlet />
