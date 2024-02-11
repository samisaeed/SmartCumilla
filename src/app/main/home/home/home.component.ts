import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import html2canvas from "html2canvas";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    createForm: FormGroup;
    public isPersonActive = false;
    public division = [{ name: 'কুমিল্লা', city: 'কুমিল্লা' }];
    public person = [{ name: 'কুমিল্লা', person: 'কুমিল্লা - ৬' }];

    assetBannerFileNames = [
        'tem-1', 'tem-2', 'tem-3'
    ];
    @ViewChild('screen', {static: false}) screen: ElementRef;
    @ViewChild('canvas', {static: false}) canvas: ElementRef;
    @ViewChild('downloadLink', {static: false}) downloadLink: ElementRef;

    avatarSrc: any;
    name: any = '';
    designation: any = '';
    isActiveTemplate = 0 ;
    capturedImage;

    constructor(private formBuilder: FormBuilder) {

    }


    ngOnInit(): void {
        this.createForm = this.formBuilder.group({
            division: ['', Validators.required],
            name: ['', [Validators.required]],
        });
    }

    public OnSelect(event): void {
        this.isPersonActive = true;
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.avatarSrc = reader.result as string;
            };
            reader.readAsDataURL(file);
        }
    }

    onclick(name, index): void {
     this.isActiveTemplate = index;
    }

    onClickDownload(): void {
        // html2canvas(document.querySelector('#tem1')).then(canvas => {
        //
        //     /// document.body.appendChild(canvas);
        //     this.capturedImage = canvas.toDataURL();
        //     console.log("canvas.toDataURL() -->" + this.capturedImage);
        //     // this will contain something like (note the ellipses for brevity), console.log cuts it off
        //     // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa0AAAB3CAYAAACwhB/KAAAXr0lEQVR4Xu2dCdiNZf7HP/ZQkpQtaUxDjYYoTSYlURMhGlmKa..."
        //
        //
        //     canvas.toBlob( (blob) =>{
        //
        //         //  just pass blob to something expecting a blob
        //         // somfunc(blob);
        //
        //         // Same as canvas.toDataURL(), just longer way to do it.
        //         var reader = new FileReader();
        //         reader.readAsDataURL(blob);
        //         // tslint:disable-next-line:only-arrow-functions
        //         reader.onloadend =  () => {
        //             let base64data = reader.result;
        //             console.log("Base64--> " + base64data);
        //         }
        //
        //     });
        //
        //
        // });
        html2canvas(this.screen.nativeElement).then(canvas => {
            this.canvas.nativeElement.src = canvas.toDataURL();
            this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
            this.downloadLink.nativeElement.download = 'marble-diagram.png';
            this.downloadLink.nativeElement.click();
        });
    }
}
