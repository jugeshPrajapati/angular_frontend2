import { Component, ViewChild, Inject } from '@angular/core';
import { SignaturePadModule, SignaturePad } from 'angular2-signaturepad';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-signaturepad',
  standalone: true,
  imports: [SignaturePadModule],
  templateUrl: './signaturepad.component.html',
  styleUrl: './signaturepad.component.scss',
})
export class SignaturepadComponent {
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  signaturePadOptions: Object = {
    // Pass any custom options here, e.g., line width, color
    minWidth: 2,
    canvasWidth: 500,
    canvasHeight: 300,
  };

  drawStart() {
    console.log('Draw start');
  }

  drawComplete() {
    console.log('Draw complete');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  saveSignature() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
      return;
    }
    const signatureImage = this.signaturePad.toDataURL('image/png');
    // Send this base64 image to your backend or store it
    // console.log('Signature saved:', signatureImage);
    alert('image saved');
    const link = this.document.createElement('a');
    link.href = signatureImage;
    link.download = 'signature.png';
    link.click(); //
  }
}
