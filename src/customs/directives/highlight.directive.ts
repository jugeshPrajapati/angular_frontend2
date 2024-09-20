import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private view: TemplateRef<any>,
    private template: ViewContainerRef
  ) {}
  @HostListener('mouseenter')
  OnMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'cssFile');
  }
  @HostListener('mouseout')
  OnMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'cssFile');
  }
  //css file should be present in component where this directive will be used
  //HostListener listen to event on dom object
  //The @HostBinding decorator allows us to bind a DOM property with a component or directive property.
  // So, when the directive property value changes, that change reflects in binded DOM object property.
  @HostBinding('style.backgroundColor')
  customBackgroundColor: string = 'pink';
  @HostListener('mouseout')
  OnMouseOut2() {
    this.customBackgroundColor = 'black';
  }
  // <[appHighlight] = {cssClass: condition ,cssClass2:condition}>
  /*@Input() set appHighlight(value: Object) {
    let entries = Object.entries(value);
    for (let item of entries) {
      let [className, condition] = item;
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }; */
  //this is custom structural directive eg . - < div *appHighlight >
  @Input('custom') set appHighlight(condition: boolean) {
    if (condition) {
      this.template.createEmbeddedView(this.view);
    } else {
      this.template.clear();
    }
  }
}
