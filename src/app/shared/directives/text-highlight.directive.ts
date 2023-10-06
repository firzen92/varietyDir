import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[textHighlight]' })

export class TextHighlightDirective {


    @Input('textHighlight') wordToHighlight: string;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) { 
    }

    ngAfterViewInit() {
        if(this.wordToHighlight) {
            const p = this.elementRef.nativeElement;
            const pText = p.textContent || p.innerText;

            const highlightedText = pText.replace(
                new RegExp(this.wordToHighlight, 'gi'),
                (match: string) => `<span class='yellow-bg'>${match}</span>`
            );
            this.renderer.setProperty(p, 'innerHTML', highlightedText);
            
        }
    }

}