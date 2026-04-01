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
