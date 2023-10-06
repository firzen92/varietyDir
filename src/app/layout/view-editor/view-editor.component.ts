import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'view-editor',
    templateUrl: 'view-editor.component.html'
})

export class ViewEditorComponent implements OnChanges {


    @Input() message: string;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        
    }

}