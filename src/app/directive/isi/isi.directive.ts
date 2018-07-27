import { Directive, ElementRef } from "@angular/core";
import * as $ from "jquery";

@Directive({
  selector: "[appIsi]"
})
export class IsiDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    let isiFixed = $(this.el.nativeElement).find("#isi-fixed");
    let isiFull = $(this.el.nativeElement).find("#isi-full");
    if (isiFixed[0].offsetWidth !== isiFull[0].offsetWidth) {
      this.setIsiFixedWidth(isiFixed, isiFull);
    }
    $(window).bind("scroll resize", event => {
      this.stickyFooter(isiFixed, isiFull);
    });
  }

  stickyFooter(isiFixed, isiFull): void {
    var windowViewPort = window.innerHeight - isiFixed[0].offsetHeight;
    var scrollTop = window.pageYOffset;
    var elementOffset = isiFull[0].offsetTop;
    var distance = elementOffset - scrollTop;
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
