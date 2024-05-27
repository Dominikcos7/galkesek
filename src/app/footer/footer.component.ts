import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm = new FormGroup({
    blade: new FormControl(''),
    handle: new FormControl(''),
    peek: new FormControl(''),
    content: new FormControl('')
  });

  blades = ["penge1", "penge2", "penge3"];
  handles = ["markolat1", "markolat2", "markolat3"];
  peeks = ["bakni1", "bakni2", "bakni3"];

  constructor() { }

  ngOnInit(): void {
  }

}
