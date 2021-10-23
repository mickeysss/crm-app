import oval from "../assets/elements/oval.png";
import vector from "../assets/elements/vector.png";
import smallOvalIcon from "../assets/logo/Ellipse 7.svg";
import overview from "../assets/elements/overview.png";
import createIcon from "../assets/logo/createIcon.svg";
import logoText from "../assets/logo/JUSTICE.svg";
import logoIcon from "../assets/logo/CRM.svg";
import pageIcon from "../assets/logo/home.svg";
import productsIcon from "../assets/logo/products.svg";
import salesIcon from "../assets/logo/sales.svg";
import personCabinetIcon from "../assets/logo/user.svg";
import editIcon from "../assets/logo/edit2.svg";
import deleteIcon from "../assets/logo/delete.svg";
import plus from "../assets/logo/plus.svg";

const today = new Date();
const date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
const cuttedAddress =
  "Krylatskaya street,15".split("").slice(0, 15).join("") + "...";
export const imgs = {
  oval: oval,
  vector: vector,
  smallOvalIcon: smallOvalIcon,
  overview: overview,
  createIcon: createIcon,
  logoText: logoText,
  logoIcon: logoIcon,
  pageIcon: pageIcon,
  productsIcon: productsIcon,
  personCabinetIcon: personCabinetIcon,
  salesIcon: salesIcon,
  editIcon: editIcon,
  deleteIcon: deleteIcon,
  plus: plus,
};

export const products = [
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 800,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "New balance",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 600,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Nike",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 500,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 400,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Puma",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 300,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
  {
    id: Math.floor(Math.random() * 1000),
    productName: "Sneakers",
    store: "Adidas",
    address: cuttedAddress,
    category: "SportsWear",
    creationDate: date,
    price: 1000,
    remains: 40,
    weight: 5,
  },
];
