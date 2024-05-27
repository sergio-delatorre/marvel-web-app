import { Component, OnInit } from '@angular/core';
import { RequestLog } from 'src/app/interfaces/requestlog.interface';
import { RequestlogService } from 'src/app/services/requestlog.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
})
export class BitacoraComponent implements OnInit {
  requestLogs: RequestLog[] = [];

  constructor(private requestLogService: RequestlogService) { }

  ngOnInit(): void {
    this.getRequestLogs();
  }

  getRequestLogs(): void {
    this.requestLogService.getCharacters()
      .subscribe((logs: RequestLog[]) => {
        this.requestLogs = logs.sort((a, b) => {
          return new Date(b.created).getTime() - new Date(a.created).getTime();
        });
      });
  }

 }
