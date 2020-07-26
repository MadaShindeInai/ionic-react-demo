import { observable } from "mobx";

function importAll(r: any) {
  const assets: any = {};
  r.keys().map((item: any) => {
    assets[item.replace("./", "")] = r(item);
  });
  return assets;
}
const assets = importAll(
  //@ts-ignore
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

const experts = [
  {
    id: 1,
    name: "אורית",
    level: "Senior",
    skills: ["React", "node.js", "Vue.js"],
    isFavorite: false,
    avatar: assets["avatar-1.png"],
    tel: "0501234567",
  },
  {
    id: 2,
    name: "יונתן",
    level: "Medium",
    avatar: assets["avatar-2.png"],
    skills: ["Angular", "Java"],
    tel: "0501234567",
  },
  {
    id: 3,
    name: "דורון",
    level: "Senior",
    avatar: assets["avatar-3.png"],
    skills: ["Agile", "Cross Platform"],
  },
  {
    id: 4,
    name: "ניר",
    avatar: assets["avatar-1.png"],
    level: "Beginner",
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 11,
    name: "אורית",
    level: "Senior",
    avatar: assets["avatar-3.png"],
    skills: ["React", "node.js", "Vue.js"],
    isFavorite: false,
    tel: "",
  },
  {
    id: 12,
    name: "יונתן",
    level: "Medium",
    avatar: assets["avatar-3.png"],
    skills: ["Angular", "Java"],
  },
  {
    id: 13,
    name: "דורון",
    avatar: assets["avatar-3.png"],
    level: "Senior",
    skills: ["Agile", "Cross Platform"],
  },
  {
    id: 14,
    name: "ניר",
    level: "Beginner",
    avatar: assets["avatar-2.png"],
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 21,
    name: "אורית",
    level: "Senior",
    skills: ["React", "node.js", "Vue.js"],
    isFavorite: false,
    avatar: assets["avatar-1.png"],
    tel: "",
  },
  {
    id: 22,
    name: "יונתן",
    avatar: assets["avatar-3.png"],
    level: "Medium",
    skills: ["Angular", "Java"],
  },
  {
    id: 23,
    avatar: assets["avatar-1.png"],
    name: "דורון",
    level: "Senior",
    skills: ["Agile", "Cross Platform"],
  },
  {
    id: 24,
    name: "ניר",
    avatar: assets["avatar-2.png"],
    level: "Beginner",
    skills: ["HTML", "CSS", "Javascript"],
  },
];

const lectures = [
  {
    id: 1,
    area: "צפון",
    company: "Microsoft",
    date: "10/10/2020",
    expert: 1,
    cover: assets["building-1.jpg"],
    overview: "סדנה בת 3 ימים - Advanced React, hooks, Styled componnents",
    contactPerson: "רונן",
    phone: "053-8983513",
    participants: 8,
    onSite: true,
    imageUrl: "",
  },
  {
    id: 2,
    area: "צפון",
    company: "SAP",
    date: "15/10/2020",
    cover: assets["building-2.jpg"],
    expert: 4,
    overview: "מבקשים כ-3 ימי הרצאות רצופים",
    contactPerson: "ניר",
    phone: "053-8983513",
    participants: 12,
    onSite: false,
    imageUrl: "",
  },
  {
    id: 3,
    area: "מרכז",
    company: "JFrog",
    date: "20/11/2020",
    cover: assets["building-3.jpg"],
    expert: 2,
    overview: "חשוב רמה מקצועית גבוהה, מולטי-דיסיפלינרי",
    contactPerson: "רונן",
    phone: "053-8983513",
    participants: 8,
    onSite: true,
    imageUrl: "",
  },
  {
    id: 4,
    area: "מרכז",
    company: "Vonage",
    date: "05/09/2020",
    cover: assets["building-4.jpg"],
    expert: 3,
    overview: "Front+Back, בנוסף קצת DEVOPS",
    contactPerson: "רונן",
    phone: "053-8983513",
    participants: 8,
    onSite: true,
    imageUrl: "",
  },
  {
    id: 5,
    area: "דרום",
    company: "Applied Materials",
    date: "05/09/2020",
    cover: assets["building-5.jpg"],
    expert: 1,
    overview: "התוכן עדיין לא סגור סופית",
    contactPerson: "רונן",
    phone: "053-8983513",
    participants: 8,
    onSite: true,
    imageUrl: "",
  },
];

export const store = observable({
  experts,
  lectures,
});
