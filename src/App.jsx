import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheck, FaFacebookF, FaShoppingCart, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPlay } from "react-icons/fi";
import productsData from "./data/products.json";

import bannerImage from "../banner.png";
import writingIcon from "../writing_2327400 1.png";
import designIcon from "../design-tool.png";
import portfolioIcon from "../portfolio.png";
import operationIcon from "../operation.png";
import packageIcon from "../package.png";
import socialIcon from "../social-media.png";
import userIcon from "../user.png";
import rocketIcon from "../rocket.png";
import boxIcon from "../Play.png";

const iconMap = {
  writing: writingIcon,
  design: designIcon,
  portfolio: portfolioIcon,
  operation: operationIcon,
  package: packageIcon,
  social: socialIcon,
};
const tagColors = {
  "best seller": "bg-amber-100 text-amber-700",
  popular: "bg-violet-100 text-violet-700",
  new: "bg-emerald-100 text-emerald-700",
};

function formatPeriod(period) {
  if (period === "one-time") return "/One-Time";
  if (period === "yearly") return "/Year";
  return "/Mo";
}

export default function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );
  
