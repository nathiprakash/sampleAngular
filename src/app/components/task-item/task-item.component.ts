import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask : EventEmitter<Task>= new EventEmitter();
  @Output() onToggleEmit : EventEmitter<Task>=new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task)
  {
    this.onDeleteTask.emit(task);
    
  }
  onToggle(task:Task)
  {
    this.onToggleEmit.emit(task);
  }

}
