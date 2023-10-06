import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TextHighlightDirective } from '@shared/directives/text-highlight.directive';

@NgModule({
    imports: [FormsModule],
    exports: [TextHighlightDirective, FormsModule],
    declarations: [TextHighlightDirective],
    providers: [],
})
export class SharedModule { }