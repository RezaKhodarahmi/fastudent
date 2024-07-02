// utils/getCurrentMonthDays.js
import { format, eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';

export function getCurrentMonthDays() {
  const start = startOfMonth(new Date());
  const end = endOfMonth(new Date());
  const days = eachDayOfInterval({ start, end });

  return days.map(day => format(day, 'yyyy-MM-dd'));
}