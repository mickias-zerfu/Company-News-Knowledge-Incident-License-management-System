import * as lottie from 'lottie-web';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie-animation',
  templateUrl: './lottie-animation.component.html',
  styleUrls: ['./lottie-animation.component.css']
})
export class LottieAnimationComponent implements OnInit {
  @ViewChild('lottieContainer') lottieContainer!: ElementRef;

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: '/assets/bull.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
