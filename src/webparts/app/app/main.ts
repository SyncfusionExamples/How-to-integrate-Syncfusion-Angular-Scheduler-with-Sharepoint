import 'zone.js';
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { SchedulerComponent } from './scheduler.component';

export function bootstrapAngular(): void{
  bootstrapApplication(SchedulerComponent)
  .catch((err) => console.error(err));
}