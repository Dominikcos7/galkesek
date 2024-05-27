import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    TestimonialCardComponent,
  ],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {name: "user1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquam eros. Proin lacinia tempus purus id malesuada. In interdum luctus massa, vitae efficitur enim semper ac."},
    {name: "user2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquam eros. Proin lacinia tempus purus id malesuada. In interdum luctus massa, vitae efficitur enim semper ac."},
    {name: "user3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquam eros. Proin lacinia tempus purus id malesuada. In interdum luctus massa, vitae efficitur enim semper ac."},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
