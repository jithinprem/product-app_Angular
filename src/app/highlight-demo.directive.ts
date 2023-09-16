import {Directive, ElementRef, HostListener, Input} from '@angular/core' // element ref provides the direct access to the dom elements

@Directive({
    selector: "[Highlighter]",
})

export class HighlightDirective {

    @Input() Highlighter = 'yellow';

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.Highlighter);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highlight('');
    }

    constructor(private el : ElementRef){
        el.nativeElement.style.backgroundColor = this.Highlighter;
    }
    
    private highlight(color: string){
        this.el.nativeElement.style.backgroundColor = color;
        
    }

}