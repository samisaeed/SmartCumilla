import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    createForm: FormGroup;
    public isPersonActive = false;
    public division = [{name: 'cumilla', city: 'CUMILLA'}];
    public person = [{name: 'tanim', person: 'Tamin'}];
    constructor(   private formBuilder: FormBuilder) {

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
}
