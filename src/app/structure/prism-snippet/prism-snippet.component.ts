import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import Prism from 'prismjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'prism-snippet',
    templateUrl: './prism-snippet.component.html',
    styleUrls: ['./prism-snippet.component.scss'],
})
export class PrismSnippetComponent implements OnInit, OnChanges {
    @Input() code;
    html = null;
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges) {
        if (this.code) {
            this.html = Prism.highlight(this.code.content, this.code.parseType, this.code.parseTypeText);
        }
    }

}
