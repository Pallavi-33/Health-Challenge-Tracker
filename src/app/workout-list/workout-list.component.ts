import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  workouts: any[] = [
    { name: 'John Doe', workouts: 'Running, Cycling', number: 2, minutes: 75 },
    { name: 'Jane Smith', workouts: 'Swimming, Running', number: 2, minutes: 80 },
    { name: 'Mike Johnson', workouts: 'Yoga, Cycling', number: 2, minutes: 90 }
  ];

  searchName: string = '';
  filterWorkoutType: string = 'All';

  currentPage: number = 1;
  itemsPerPage: number = 5;

  getFilteredWorkouts() {
    let filteredWorkouts = this.workouts;

    if (this.searchName) {
      filteredWorkouts = filteredWorkouts.filter(workout => workout.name.toLowerCase().includes(this.searchName.toLowerCase()));
    }

    if (this.filterWorkoutType!== 'All') {
      filteredWorkouts = filteredWorkouts.filter(workout => workout.workouts.includes(this.filterWorkoutType));
    }

    return filteredWorkouts;
  }

  getWorkouts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.getFilteredWorkouts().slice(startIndex, endIndex);
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }

  changeItemsPerPage(event: any) {
    this.itemsPerPage = event.target.value;
    this.currentPage = 1;
  }

  getTotalPages() {
    return Math.ceil(this.getFilteredWorkouts().length / this.itemsPerPage);
  }
}