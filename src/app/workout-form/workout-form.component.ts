import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-workout-form',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {

  userName: string = '';
  workoutMinutes: number = 0;
  workoutTypes = [
    'Cycling',
    'Running',
    'Swimming',
    'Yoga',
    'Strength Training',
  ];

  onSubmit() {
    console.log('User Name:', this.userName);
    console.log('Workout Type:', this.workoutTypes);
    console.log('Workout Minutes:', this.workoutMinutes);
  }

}