/* eslint-disable react/react-in-jsx-scope */
import {ICTicketEarly, ICTicketRegular, ICTicketStar} from '../../assets/icons';
import {
  ILBanner1,
  ILEvent1,
  ILEvent2,
  ILEvent3,
  ILEvent4,
  ILPeople1,
  ILPeople2,
  ILPeople3,
  ILPeople4,
  ILPeople5,
  ILPeople6,
  ILPeople7,
} from '../../assets/ilustrations';

export const dataUpcomingEvent = [
  {
    id: 1,
    status: 'Live Event',
    img: ILEvent4,
    title: 'Rocktober Music Fest 2023',
    location: 'Wembley Stadium, London',
    date: 'Oct 04',
    time: '04.00 PM',
  },
  {
    id: 2,
    status: 'Online Event',
    img: ILEvent4,
    title: 'Freelance Coaching from Beginner to Expert!',
    location: 'Sunday Edutech',
    date: 'Oct 04',
    time: '08.00 AM',
  },
];

export const dataTabbar = [
  {
    title: 'Live Event',
  },
  {
    title: 'Online Event',
  },
];

export const dataSearchesEvent = [
  {
    id: 1,
    title: 'Swiftogeddon - The Taylor Swift Club Night',
    img: ILEvent1,
    date: 'Nov 17, 2023',
    attended: '2300 people attended',
  },
  {
    id: 2,
    title: 'Circus Mansion & After Party 🎪',
    img: ILEvent2,
    date: 'Nov 03 , 2023',
    attended: '250 people attended',
  },
  {
    id: 3,
    title: 'Figma Config: Meetup & Watch Party 🍿',
    img: ILEvent3,
    date: 'Oct 28, 2023',
    attended: '1200 designers attended',
  },
];

export const dataPopularEvent = [
  {
    id: 1,
    title: 'Football Weekly Live Tour: London',
    img: ILBanner1,
    date: 'Nov 13, 2023',
    location: 'Troxy',
    status: 'Available Ticket',
    attended: '2300 people attended',
  },
  {
    id: 2,
    title: 'Run the Ends 2023',
    img: ILBanner1,
    date: 'Nov 13, 2023',
    location: 'Troxy',
    status: 'Available Ticket',
    attended: '2300 people attended',
  },
  {
    id: 3,
    title: 'Coldplay Music of The Spheres',
    img: ILBanner1,
    date: 'Nov 13, 2023',
    location: 'Troxy',
    status: 'Available Ticket',
    attended: '2300 people attended',
  },
];

export const dataPeopleEvent = [
  {
    id: 1,
    img: ILPeople1,
  },
  {
    id: 2,
    img: ILPeople2,
  },
  {
    id: 3,
    img: ILPeople3,
  },
  {
    id: 4,
    img: ILPeople4,
  },
  {
    id: 5,
    img: ILPeople5,
  },
  {
    id: 6,
    img: ILPeople6,
  },
  {
    id: 7,
    img: ILPeople7,
  },
];

export const dataSelectTicket = [
  {
    id: 1,
    icon: <ICTicketRegular />,
    access: 'Early Access Regular',
    seat: 'Normal seat + special price',
    price: 14,
    status: 'Sold',
  },
  {
    id: 2,
    icon: <ICTicketRegular />,
    access: 'Early Access VIP',
    seat: 'VIP seat + special price',
    price: 24,
    status: 'Sold',
  },
  {
    id: 3,
    icon: <ICTicketEarly />,
    access: 'Early Access VIP',
    seat: 'VIP seat + special price',
    price: 24,
    status: '',
  },
  {
    id: 4,
    icon: <ICTicketStar />,
    access: 'VIP',
    seat: 'VIP seat + bracelete + merchandise',
    price: 34,
    status: '',
  },
];
