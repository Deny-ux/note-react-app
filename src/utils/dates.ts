// creates date string format: "DD/MM/YYYY"
import { CreationDate } from "../generalTypes/types";

export function createStringDate(date: Date): CreationDate {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function changeDateFormat(date: CreationDate) {
  const [day, month, year] = date
    .split("/")
    .map((dateElement) => Number(dateElement));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[month - 1]} ${day}, ${year}`;
}

export function extractDates(inputString: string) {
  const regex = /(\d{1,2})\/\d{1,2}\/\d{4}/g;
  return inputString.match(regex)?.join(", ") ?? "";
}
