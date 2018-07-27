import { Directive, ElementRef, AfterViewInit } from "@angular/core";
import * as $ from "jquery";

@Directive({
  selector: "[appIsi]"
})
export class IsiDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const isiFixed = $(this.el.nativeElement).find("#isi-fixed");
    const isiFull = $(this.el.nativeElement).find("#isi-full");
    if (isiFixed[0].offsetWidth !== isiFull[0].offsetWidth) {
      this.setIsiFixedWidth(isiFixed, isiFull);
    }
    $(window).bind("scroll resize", event => {
      this.stickyFooter(isiFixed, isiFull);
    });
  }

  stickyFooter(isiFixed, isiFull): void {
    const windowViewPort = window.innerHeight - isiFixed[0].offsetHeight;
    const scrollTop = window.pageYOffset;
    const elementOffset = isiFull[0].offsetTop;
    const distance = elementOffset - scrollTop;
    if (isiFixed[0].offsetWidth !== isiFull[0].offsetWidth) {
      this.setIsiFixedWidth(isiFixed, isiFull);
    }
    if (distance >= windowViewPort) {
      isiFixed.css("visibility", "visible");
    } else {
      isiFixed.css("visibility", "hidden");
    }
  }

  setIsiFixedWidth(isiFixed, isiFull): void {
    $(isiFixed[0]).css("width", isiFull[0].offsetWidth + "px");
  }
}
