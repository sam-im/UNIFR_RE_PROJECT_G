export class Rooms {
  rooms = ['Room 1', 'Room 2', 'Room 3'];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  timeslots = [1, 2, 3, 4, 5, 6, 7, 8];

  selectedRoom = null;

reservations = [
    {
        room: 'Room 1',
        day: 'Monday',
        timeslot: 1,
        label: 'Course 1'
    },
    {
        room: 'Room 1',
        day: 'Monday',
        timeslot: 2,
        label: 'Course 1'
    },
    {
        room: 'Room 1',
        day: 'Monday',
        timeslot: 3,
        label: 'Course 1'
    },
    {
        room: 'Room 1',
        day: 'Wednesday',
        timeslot: 2,
        label: 'Course 2'
    },
    {
        room: 'Room 1',
        day: 'Wednesday',
        timeslot: 3,
        label: 'Course 2'
    },
    {
        room: 'Room 2',
        day: 'Tuesday',
        timeslot: 1,
        label: 'Course 3'
    },
    {
        room: 'Room 2',
        day: 'Tuesday',
        timeslot: 2,
        label: 'Course 3'
    },
    {
        room: 'Room 2',
        day: 'Thursday',
        timeslot: 1,
        label: 'Course 4'
    },
    {
        room: 'Room 2',
        day: 'Thursday',
        timeslot: 2,
        label: 'Course 4'
    },
    {
        room: 'Room 3',
        day: 'Friday',
        timeslot: 3,
        label: 'Course 5'
    },
    {
        room: 'Room 3',
        day: 'Friday',
        timeslot: 4,
        label: 'Course 5'
    },
    {
        room: 'Room 3',
        day: 'Saturday',
        timeslot: 2,
        label: 'Course 6'
    },
    {
        room: 'Room 3',
        day: 'Saturday',
        timeslot: 3,
        label: 'Course 6'
    }
];

  getReservation(room: string, day: string, timeslot: number) {
    const reservation = this.reservations.find(r => r.room === room && r.day === day && r.timeslot === timeslot);
    return reservation ? reservation.label : '';
  }
}