import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmCard]",
  standalone: false,
})
export class BorderCardDirective {
  constructor(private element: ElementRef) {}
  @Input() pkmCard: string;
  @HostListener("mouseenter") onMouseEnter() {
    this.setBackground(this.pkmCard)
    this.setMouseCursor();
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.resetBackground();
  }

  @HostListener("click") onClick() {
    this.setBorder(this.pkmCard);
  }

  setMouseCursor() {
    this.element.nativeElement.style.cursor = "pointer";
  }


  setBorder(color: string) {
    this.element.nativeElement.style.border = `solid 2px ${color}`;
  }

  resetBorder() {
    this.element.nativeElement.style.border = "solid 2px transparent";
  }
  setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setClasses() {
    this.element.nativeElement.classList.add("pkmCard");
  }

  setBackground(color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }

    resetBackground(){
    this.element.nativeElement.style.backgroundColor = "";
  }
}
