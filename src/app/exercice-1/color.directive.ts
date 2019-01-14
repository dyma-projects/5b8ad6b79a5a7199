import { Directive, HostListener, ElementRef } from '@angular/core';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}


@Directive({
  selector: '[appColor]'
})


export class ColorDirective {


  constructor(private el: ElementRef) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.keyCode == KEY_CODE.DOWN_ARROW) {
      this.surligner('red');
      console.log(event);
    }
    else if (event.keyCode == KEY_CODE.UP_ARROW) {
      this.surligner('blue');
      console.log(event);
    }
    else if (event.keyCode == KEY_CODE.RIGHT_ARROW) {
      this.surligner('pink');
      console.log(event);
    }
    else if (event.keyCode == KEY_CODE.LEFT_ARROW) {
      this.surligner('green');
      console.log(event);
    }
  }

  private surligner(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
