import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function AddWeekNumber() {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: '#',
        calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
      }}
    >
      <div className="bg-gradient-to-r  text-white rounded-lg p-4 max-w-md mx-auto shadow-xl">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">📅 Available Dates</h2>
         
        </div>
        
        <DateCalendar
          displayWeekNumber
          sx={{
            '& .MuiTypography-root': {
              color: 'white',
            },
            '& .MuiPickersDay-root': {
              color: 'white',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            },
            '& .MuiPickersCalendarHeader-label': {
              color: 'white',
            },
            '& .MuiPickersDay-root.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
