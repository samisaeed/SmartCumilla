
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
    @ViewChild('componentToCapture', { static: false }) componentToCapture: ElementRef;
    public createForm: FormGroup;
    public isPersonActive = false;
    public division = [{ name: 'কুমিল্লা', city: 'কুমিল্লা' }];
    public person  = [];
    public candidate = [];

    public assetBannerFileNames = [
        'tem-1', 'tem-2', 'tem-4', 'tem-3',
    ];
    @ViewChild('screen', { static: false }) screen: ElementRef;
    @ViewChild('canvas', { static: false }) canvas: ElementRef;
    @ViewChild('downloadLink', { static: false }) downloadLink: ElementRef;

    public avatarSrc: any;
    public name: any = '';
    public designation: any = '';
    public activeTemplate = 0;
    public limitOver = false;
    constructor(private formBuilder: FormBuilder) {}


    ngOnInit(): void {
        this.createForm = this.formBuilder.group({
            division: ['', Validators.required],
            name: ['', [Validators.required]],
            candidate: ['', [Validators.required]],
            personName: ['নূর-উর রহমান মাহমুদ তানিম'],
            personPosition: [' ভিপি ১৯৯৬-৯৭ কুমিল্লা ভিক্টোরিয়া বিশ্ববিদ্যালয় কলেজ'],
        });
        this.createForm.get('personPosition').valueChanges.subscribe((res) => {
            if (res){
                if (res.length <=  47 ){
                    this.limitOver = true;
                    console.log(this.limitOver);
                }else {
                    this.limitOver = false;
                    console.log(this.limitOver);
                }

            }
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
        const scaleValue  =  window.devicePixelRatio <= 2 ?  (window.innerWidth <= 320 ? 8 : 4) : 14;
        html2canvas(elementToCapture, {
            scale: scaleValue , // Adjust scale for higher quality
            logging: true // Enable logging for debugging
        }).then(canvas => {
            // Convert canvas to image
            const imgData = canvas.toDataURL('image/png');

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = imgData;
            link.download =  'নূর-উর রহমান মাহমুদ তানিম.png';

            // Append link to the body and trigger the download
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
        });
    }

    public pdfDownload(): void{
        const link = document.createElement('a');
        link.download = 'নূর-উর রহমান মাহমুদ তানিম';
        link.href = 'assets/images/Tanimvai.pdf';
        link.click();
    }
}
