import { Injectable } from '@angular/core';
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} from 'date-fns';
  import { from } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DateUtilService {
  getDiffToNow(diff: string | number | Date): any {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    console.log(now);
    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years}years`);
      diff = addYears(diff, years);
    }
    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }


  constructor() {}
}
