import { Component, Input } from '@angular/core';
import { Exercise } from '../exercises/exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  @Input() public set currentExercise(newExercise: Exercise) {
    this.exercise = newExercise;
    this.exercise.doLog = this.doLog.bind(this);
    this.showSolution = false;
    this.logs = [];
  }
  public exercise: Exercise;
  public showSolution: boolean;
  public logs: Array<string>;

  public toggleSolution() {
    this.showSolution = !this.showSolution;
    if (!this.showSolution) {
      this.logs = [];
    }
  }

  public doLog(message: string) {
    this.logs.push(message);
  }

  public runExercise() {
    this.logs = [];
    this.exercise.run();
  }
}
