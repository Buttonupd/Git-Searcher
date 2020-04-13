import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNormal]'
})
export class NormalDirective {

  constructor(private elem:ElementRef) {}


  @HostListener("click") onClicks(){
    this.textDeco("blink")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action
  }

}
