import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
  @Input() name!: string;
  @Input() body!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
