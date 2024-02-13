
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
    public createForm: FormGroup;
    public isPersonActive = false;
    public division = [{ name: 'কুমিল্লা', city: 'কুমিল্লা' }];
    public person  = [];
    public candidate = [];

    public assetBannerFileNames = [
        'tem-1', 'tem-2'
    ];
    @ViewChild('screen', { static: false }) screen: ElementRef;
    @ViewChild('canvas', { static: false }) canvas: ElementRef;
    @ViewChild('downloadLink', { static: false }) downloadLink: ElementRef;

    public avatarSrc: any;
    public name: any = '';
    public designation: any = '';
    public activeTemplate = 0;

    constructor(private formBuilder: FormBuilder) {}


    ngOnInit(): void {
        this.createForm = this.formBuilder.group({
            division: ['', Validators.required],
            name: ['', [Validators.required]],
            candidate: ['', [Validators.required]],
            personName: [''],
            personPosition: [''],
        });
    }

    public OnSelect(event): void {
        this.isPersonActive = true;
    }
    public OnSelectName(event): void {
        this.person.push({ name: 'কুমিল্লা', person: 'কুমিল্লা সিটি কর্পোরেশন' });
    }
    public OnSelectCity(event): void {
        this.candidate.push({ name: 'তানিম', person: 'নূর-উর রহমান মাহমুদ তানিম' });
    }

    public onFileSelected(event: any): void{
        const file: File = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.avatarSrc = reader.result as string;
            };
            reader.readAsDataURL(file);
        }
    }
    public captureComponent(): void {
        const elements = this.componentToCapture.nativeElement.querySelectorAll('app-img-template');
        const elementToCapture = elements[this.activeTemplate];


        html2canvas(elementToCapture).then(canvas => {
            // Convert the canvas to a base64 encoded image
            const image = canvas.toDataURL('image/png');

            // Create a download link
            const link = document.createElement('a');
            link.download = 'নূর-উর রহমান মাহমুদ তানিম.png';
            link.href = image;

            // Click the link to trigger download
            link.click();
        });
    }

    public pdfDownload(): void{
        const link = document.createElement('a');
        link.download = "নূর-উর রহমান মাহমুদ তানিম";
        link.href = "assets/images/Tanimvai.pdf";
        link.click();
    }
}
