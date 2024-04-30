import * as lottie from 'lottie-web';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-denied-lottie',
  templateUrl: './denied-lottie.component.html',
  styleUrls: ['./denied-lottie.component.css']
})
export class DeniedLottieComponent implements OnInit {
  @ViewChild('lottieContainer') lottieContainer!: ElementRef;

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: '/assets/data/denied.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
