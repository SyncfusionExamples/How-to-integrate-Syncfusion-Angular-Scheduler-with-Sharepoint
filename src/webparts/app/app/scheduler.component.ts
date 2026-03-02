import { Component } from '@angular/core';
import { ScheduleModule, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

// import Syncfusion CSS
require('@syncfusion/ej2-base/styles/bootstrap5.css');
require('@syncfusion/ej2-buttons/styles/bootstrap5.css');
require('@syncfusion/ej2-calendars/styles/bootstrap5.css');
require('@syncfusion/ej2-dropdowns/styles/bootstrap5.css');
require('@syncfusion/ej2-inputs/styles/bootstrap5.css');
require('@syncfusion/ej2-lists/styles/bootstrap5.css');
require('@syncfusion/ej2-navigations/styles/bootstrap5.css');
require('@syncfusion/ej2-popups/styles/bootstrap5.css');
require('@syncfusion/ej2-splitbuttons/styles/bootstrap5.css');
require('@syncfusion/ej2-schedule/styles/bootstrap5.css');

@Component({
selector: 'app-scheduler',
standalone: true,
template: `<ejs-schedule #scheduleObj width="100%" height="550px" [eventSettings]='eventSettings' [selectedDate]="selectedDate"></ejs-schedule>`,
imports: [ScheduleModule],
providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})

export class SchedulerComponent{
    public selectedDate: Date = new Date(2026, 1, 2);
    public data: object[] = [
      {
        Id: '201',
        Subject: 'Weekly Planning | Team Leads',
        StartTime: new Date(2026, 1, 1, 10, 0),
        EndTime: new Date(2026, 1, 1, 11, 0),
      },
      {
        Id: '202',
        Subject: 'Daily Standup | Engineering',
        StartTime: new Date(2026, 1, 2, 9, 0),
        EndTime: new Date(2026, 1, 2, 9, 30),
      },
      {
        Id: '203',
        Subject: 'Client Call | Orion Traders',
        StartTime: new Date(2026, 1, 2, 14, 0),
        EndTime: new Date(2026, 1, 2, 15, 0),
      },
      {
        Id: '204',
        Subject: 'Design Review | Mobile App v3',
        StartTime: new Date(2026, 1, 3, 10, 0),
        EndTime: new Date(2026, 1, 3, 11, 30),
      },
      {
        Id: '205',
        Subject: 'Security Sync | Q1 Controls',
        StartTime: new Date(2026, 1, 3, 16, 0),
        EndTime: new Date(2026, 1, 3, 17, 0),
      },
      {
        Id: '206',
        Subject: 'Product Demo | Beta Cohort',
        StartTime: new Date(2026, 1, 4, 11, 0),
        EndTime: new Date(2026, 1, 4, 12, 0),
      },
      {
        Id: '207',
        Subject: 'Sprint Retrospective | S2',
        StartTime: new Date(2026, 1, 4, 15, 0),
        EndTime: new Date(2026, 1, 4, 16, 30),
      },
      {
        Id: '208',
        Subject: 'Training | Accessibility & WCAG',
        StartTime: new Date(2026, 1, 5, 9, 30),
        EndTime: new Date(2026, 1, 5, 10, 30),
      },
      {
        Id: '209',
        Subject: 'Release Go/No-Go | v2.4',
        StartTime: new Date(2026, 1, 6, 15, 0),
        EndTime: new Date(2026, 1, 6, 16, 0),
      },
      {
        Id: '210',
        Subject: 'Team Lunch | Monthly Social',
        StartTime: new Date(2026, 1, 7, 11, 0),
        EndTime: new Date(2026, 1, 7, 12, 0),
      },
    ];

    public eventSettings: EventSettingsModel = { dataSource: this.data };
} 