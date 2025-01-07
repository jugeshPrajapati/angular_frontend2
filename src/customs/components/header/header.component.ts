import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { OnsubscribeService } from '../../services/onsubscribe.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Auth2Service } from '../../services/auth2.service';
import { CommonModule } from '@angular/common';
import { User } from '../../types/user2';
import { Subscription } from 'rxjs';
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
  auth2Service: Auth2Service = inject(Auth2Service);
  islogged!: boolean;
  private userSubject!: Subscription;

  constructor(private subscribed: OnsubscribeService) {}
  ngOnInit() {
    this.userSubject = this.auth2Service.user.subscribe((user: User | null) => {
      console.log(user);
      this.islogged = user ? true : false;
    });
  }

  onLogout() {
    this.auth2Service.logout();
  }

  ngOnDestroy() {
    this.userSubject.unsubscribe();
  }
  subscribedButton() {
    this.subscribed.OnSubscribeClicked('jugesh');
  }
  navigateAbout() {
    // its default absolute path
    this.router.navigateByUrl('about');
  }
}
