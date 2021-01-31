import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-prototype-viewer',
    templateUrl: './prototype-viewer.component.html',
    styleUrls: ['./prototype-viewer.component.scss']
})
export class PrototypeViewerComponent implements OnInit, AfterViewInit {
    @Input() src;
    iframeSrc;
    @Input() showProtoType = false;
    @ViewChild('iframeItem') iframeElm: ElementRef;
    hideIframeLoader = false;
    constructor(private santizer: DomSanitizer) { }

    ngOnInit() {
        this.hideIframeLoader = false;
        this.iframeSrc = this.santizer.bypassSecurityTrustResourceUrl(this.src);
    }
    ngAfterViewInit() {
        this.hideIframeLoader = false;
        if (this.iframeElm) {
            const iframe: HTMLIFrameElement = this.iframeElm.nativeElement;
            if (iframe) {
                iframe.onload = () => {
                    setTimeout(() => {
                        this.hideIframeLoader = true;
                    });
                };
            }
        }
    }

}
