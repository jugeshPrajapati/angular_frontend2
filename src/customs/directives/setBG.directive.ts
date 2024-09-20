import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
@Directive({
  standalone: true,
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private element : ElementRef;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element;
  }
  // Renderer2 class allows us to manipulate the DOM without accessing the DOM objects directly
  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = 'yellow'
    // this.element.nativeElement.style.color = 'black'
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'red'
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }
}
