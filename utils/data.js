import {
  beach,
  camp,
  forest,
  hiking,
  hotel,
  island,
  lake,
  mountain,
  ocean,
  sunset,
  user04,
  user05,
  user06,
  user07,
  user08,
} from "./assets";

export const steps = [
  { id: 1, name: "Images" },
  { id: 2, name: "Information (1)" },
  { id: 3, name: "Information (2)" },
];

export const categories = [
  { title: "Beach", image: beach },
  { title: "Camp", image: camp },
  { title: "Forest", image: forest },
  { title: "Hiking", image: hiking },
  { title: "Island", image: island },
  { title: "Hotel", image: hotel },
  { title: "Lake", image: lake },
  { title: "Mountain", image: mountain },
  { title: "Ocean", image: ocean },
  { title: "Sunset", image: sunset },
];

export const destinations = [
  { title: "Island Paradise", destination: "thailand phuket", image: beach },
  { title: "Camp", destination: "thailand phuket", image: camp },
  { title: "Forest", destination: "thailand phuket", image: forest },
  { title: "Hiking", destination: "thailand phuket", image: hiking },
  { title: "Island", destination: "thailand phuket", image: island },
  { title: "Hotel", destination: "thailand phuket", image: hotel },
  { title: "Lake", destination: "thailand phuket", image: lake },
  { title: "Mountain", destination: "thailand phuket", image: mountain },
  { title: "Ocean", destination: "thailand phuket", image: ocean },
  { title: "Sunset", destination: "thailand phuket", image: sunset },
];

export const users = [
  {
    name: "Silina Bred",
    image: user08,
    date: "February 02, 2024",
    review: "4.5",
  },
  { name: "Jhon Kim", image: user06, date: "October 20, 2024", review: "4.8" },
  { name: "Emma", image: user05, date: "February 16, 2024", review: "4.3" },
  { name: "Robbin", image: user07, date: "October 24, 2024", review: "4.2" },
  {
    name: "Antany Fred",
    image: user04,
    date: "October 25, 2024",
    review: "4.0",
  },
];

export const notification = [
  {
    icon: "map",
    time: "8:00 AM",
    date: "May 20",
    description: "A new destination added",
  },
  {
    icon: "bell",
    time: "9:34 AM",
    date: "May 20",
    description: "A new promo offer is running for Morocco desert",
  },
  {
    icon: "map",
    time: "9:45 AM",
    date: "May 21",
    description: "A new destination added",
  },
  {
    icon: "bell",
    time: "12:23 AM",
    date: "May 21",
    description: "A new promo offer is running for Marrakech tour",
  },
  {
    icon: "map",
    time: "6:24 AM",
    date: "May 21",
    description: "You have booked a new destination successfully",
  },
  {
    icon: "map",
    time: "20:23 AM",
    date: "May 22",
    description: "A new destination added",
  },
  {
    icon: "map",
    time: "10:12 AM",
    date: "May 24",
    description: "A new destination added",
  },
  {
    icon: "map",
    time: "15:23 AM",
    date: "May 20",
    description: "A new destination added",
  },
  {
    icon: "map",
    time: "11:42 AM",
    date: "May 24",
    description: "A new destination added",
  },
  {
    icon: "map",
    time: "16:13 AM",
    date: "May 28",
    description: "A new destination added",
  },
];

export const roles = [
  { key: "admin", value: "Admin" },
  { key: "user", value: "User" },
];

export const usersList = [
  {
    id: 1,
    username: "jhon",
    firstName: "Jhon",
    lastName: "Kim",
    role: "admin",
    image: user04,
  },
  {
    id: 1,
    username: "jhon",
    firstName: "Jhon",
    lastName: "Kim",
    role: "admin",
    image: user04,
  },
  {
    id: 1,
    username: "jhon",
    firstName: "Jhon",
    lastName: "Kim",
    role: "admin",
    image: user04,
  },
  {
    id: 1,
    username: "jhon",
    firstName: "Jhon",
    lastName: "Kim",
    role: "admin",
    image: user04,
  },
  {
    id: 2,
    username: "rinisa",
    firstName: "Rinisa",
    lastName: "Jhon",
    role: "user",
    image: user08,
  },
  {
    id: 2,
    username: "rinisa",
    firstName: "Rinisa",
    lastName: "Jhon",
    role: "user",
    image: user08,
  },
  {
    id: 2,
    username: "rinisa",
    firstName: "Rinisa",
    lastName: "Jhon",
    role: "user",
    image: user08,
  },
  {
    id: 2,
    username: "rinisa",
    firstName: "Rinisa",
    lastName: "Jhon",
    role: "user",
    image: user08,
  },
  {
    id: 2,
    username: "rinisa",
    firstName: "Rinisa",
    lastName: "Jhon",
    role: "user",
    image: user08,
  },
  {
    id: 2,
    username: "rinisa",
    firstName: "Rinisa",
    lastName: "Jhon",
    role: "user",
    image: user08,
  },
];

export const durations = [
  { label: "1 Day Tour", value: "1" },
  { label: "2 Days Tour", value: "2" },
  { label: "3 Days Tour", value: "3" },
  { label: "4 Days Tour", value: "4" },
  { label: "5 Days Tour", value: "5" },
];
