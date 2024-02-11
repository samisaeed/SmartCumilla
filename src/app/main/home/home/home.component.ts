import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('componentToCapture', { static: false }) componentToCapture: ElementRef;
    createForm: FormGroup;
    public isPersonActive = false;
    public division = [{ name: 'cumilla', city: 'CUMILLA' }];
    public person = [{ name: 'tanim', person: 'Tamin' }];

    assetBannerFileNames = [
        'tem-1', 'tem-2', 'tem-3'
    ]

    avatarSrc: any;
    name: any = '';
    designation: any = '';
    activeTemplate: any;

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
    captureComponent() {
        if (!this.activeTemplate) return;
        const elements = this.componentToCapture.nativeElement.querySelectorAll('app-img-template');
        const elementToCapture = elements[this.activeTemplate];

        html2canvas(elementToCapture).then(canvas => {
            // Convert the canvas to a base64 encoded image
            const image = canvas.toDataURL('image/png');

            // Create a download link
            const link = document.createElement('a');
            link.download = 'component-screenshot.png';
            link.href = image;

            // Click the link to trigger download
            link.click();
        });
    }

}
