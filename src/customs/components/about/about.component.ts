import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignaturepadComponent } from '../signaturepad/signaturepad.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SignaturepadComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
