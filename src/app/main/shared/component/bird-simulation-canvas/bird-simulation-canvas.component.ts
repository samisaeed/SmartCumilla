import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-bird-simulation-canvas',
    templateUrl: './bird-simulation-canvas.component.html',
    styleUrls: ['./bird-simulation-canvas.component.scss']
})
export class BirdSimulationCanvasComponent implements OnInit, AfterViewInit {
    private colors = [
        "#19ffff",
        "#c0def7",
        "#661e66",
        "#318faf",
        '#12062e'
    ];
    constructor() {
        const script = document.createElement('script');
        script.src = 'assets/canvas/bird-simulation.js'; // Path to your JavaScript file
        document.head.appendChild(script);
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const script = document.createElement('script');
        script.src = 'assets/canvas/bird-simulation.js'; // Path to your JavaScript file
        document.head.appendChild(script);
    }
}