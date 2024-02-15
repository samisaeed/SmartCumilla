import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-template',
  templateUrl: './img-template.component.html',
  styleUrls: ['./img-template.component.scss']
})
export class ImgTemplateComponent implements OnInit {
  @Input() bannerName: string;
  @Input() avatarSrc: string;
  @Input() name: string;
  @Input() designation: string;
  constructor() { }

  ngOnInit(): void {
  }

}
