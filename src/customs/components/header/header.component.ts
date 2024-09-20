import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { OnsubscribeService } from '../../services/onsubscribe.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SearchbarComponent,
    RouterLink,
    RouterLinkActive,
    MatTooltipModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // providers: [OnsubscribeService],
})
export class HeaderComponent {
  router: Router = inject(Router);
  // authService: AuthService = inject(AuthService);
  islogged!: boolean;

  constructor(
    private subscribed: OnsubscribeService,
    private authService: AuthService
  ) {
    this.authService.loggedIn.subscribe((isLoggedIn) => {
      this.islogged = isLoggedIn;
    });
    console.log(this.islogged);
  }

  subscribedButton() {
    this.subscribed.OnSubscribeClicked('jugesh');
  }
  navigateAbout() {
    // its default absolute path
    this.router.navigateByUrl('about');
  }
}
