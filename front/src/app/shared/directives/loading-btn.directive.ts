import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[ngxLoading]'
})
export class LoadingBtnDirective implements OnChanges {
  @Input() textLoading!: string;
  @Input() textInitial!: string;
  @Input() disabled!: boolean;
  @Input() loadingFlag!: boolean;

  constructor(private elem: ElementRef) { }
  ngOnChanges(changes: any): void {
    if (changes.condition && changes.condition.currentValue) {
      this.loadingFlag = changes.condition.currentValue;
    }
    this.elem.nativeElement.innerText = (this.loadingFlag) ? this.textLoading : this.textInitial;
    if (!this.loadingFlag) {
      this.elem.nativeElement.disabled = !!(this.disabled);
    }
  }

}
