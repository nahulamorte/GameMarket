import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'GameMarket';
  private isDarkMode = false;

  toggleTheme():void{
    this.isDarkMode = !this.isDarkMode;

    const body = document.body;
    body.classList.toggle('dark-mode', this.isDarkMode);    
  }
}
