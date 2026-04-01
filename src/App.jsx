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
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    const item = cart.find((product) => product.id === id);
    setCart((prev) => prev.filter((product) => product.id !== id));
    toast.info(`${item?.name || "Product"} removed from cart`);
  };

  const handleCheckout = () => {
    if (!cart.length) {
      toast.warning("Cart is empty");
      return;
    }
    setCart([]);
    toast.success("Checkout complete. Cart cleared.");
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={1500} />

      <header className="bg-white">
        <nav className="container-main flex items-center justify-between py-6">
          <h1 className="text-3xl font-extrabold text-violet-600">DigiTools</h1>
          <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
          <div className="flex items-center gap-3">
            <button className="relative rounded-full p-2 text-slate-700">
              <FaShoppingCart />
              <span className="absolute -right-1 -top-1 rounded-full bg-violet-600 px-1.5 text-[10px] text-white">
                {cart.length}
              </span>
            </button>
            <button className="hidden text-sm font-medium md:block">Login</button>
            <button className="rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <section className="bg-white pb-10 pt-8">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
              New: AI-Powered Tools Available
            </div>
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Supercharge Your <br /> Digital Workflow
            </h2>
            <p className="mb-8 max-w-xl text-slate-500">
              Access premium AI tools, design assets, templates, and productivity
              software-all in one place. Start creating faster today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-7 py-3 text-white shadow-lg">
                Explore Products
              </button>
              <button className="flex items-center gap-2 rounded-full border border-violet-400 px-7 py-3 text-violet-700">
                <FiPlay /> Watch Demo
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md rounded-xl bg-slate-50 p-4">
            <img src={bannerImage} alt="banner" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-10 text-white">
        <div className="container-main grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div>
            <h3 className="text-5xl font-bold">50K+</h3>
            <p className="mt-2 text-lg text-violet-100">Active Users</p>
          </div>
          <div className="border-white/30 md:border-x">
            <h3 className="text-5xl font-bold">200+</h3>
            <p className="mt-2 text-lg text-violet-100">Premium Tools</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">4.9</h3>
            <p className="mt-2 text-lg text-violet-100">Rating</p>
          </div>
        </div>
      </section>

      <main className="container-main py-16">
        <section>
          <h2 className="text-center text-5xl font-extrabold text-slate-900">
            Premium Digital Tools
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          <div className="my-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("products")}
              className={`rounded-full px-8 py-3 font-semibold ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white"
                  : "bg-white text-slate-700"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`rounded-full px-8 py-3 font-semibold ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white"
                  : "bg-white text-slate-700"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>

          {activeTab === "products" ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productsData.map((product) => (
                <article
                  key={product.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <img
                      src={iconMap[product.icon]}
                      alt={product.name}
                      className="h-12 w-12 rounded-full bg-slate-50 p-2"
                    />
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                        tagColors[product.tagType]
                      }`}
                    >
                      {product.tagType}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{product.name}</h3>
                  <p className="mt-3 text-slate-500">{product.description}</p>
                  <div className="mt-4 text-4xl font-extrabold">
                    ${product.price}
                    <span className="text-2xl font-medium text-slate-400">
                      {formatPeriod(product.period)}
                    </span>
                  </div>

                  <ul className="my-6 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-600">
                        <FaCheck className="text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-3 font-semibold text-white"
                  >
                    Buy Now
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6">
              {!cart.length ? (
                <p className="text-center text-lg text-slate-500">
                  Cart is empty. Add products from the Products tab.
                </p>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-xl border p-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={iconMap[item.icon]}
                            alt={item.name}
                            className="h-10 w-10 rounded-full bg-slate-100 p-1"
                          />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-slate-500">${item.price}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col justify-between gap-4 border-t pt-6 md:flex-row md:items-center">
                    <p className="text-xl font-bold">Total: ${totalPrice}</p>
                    <button
                      onClick={handleCheckout}
                      className="rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-8 py-3 font-semibold text-white"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      </main>

      <section className="container-main pb-16">
        <h2 className="text-center text-5xl font-extrabold text-slate-900">
          Get Started In 3 Steps
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Create Account",
              text: "Sign up for free in seconds. No credit card required to get started.",
              icon: userIcon,
              num: "01",
            },
            {
              title: "Choose Products",
              text: "Browse our catalog and select the tools that fit your needs.",
              icon: boxIcon,
              num: "02",
            },
            {
              title: "Start Creating",
              text: "Download and start using your premium tools immediately.",
              icon: rocketIcon,
              num: "03",
            },
          ].map((step) => (
            <article key={step.num} className="relative rounded-2xl bg-white p-8 text-center">
              <span className="absolute right-6 top-4 rounded-full bg-violet-600 px-3 py-2 text-sm font-semibold text-white">
                {step.num}
              </span>
              <img
                src={step.icon}
                alt={step.title}
                className="mx-auto h-20 w-20 rounded-full bg-violet-50 p-4"
              />
              <h3 className="mt-5 text-4xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-500">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-main pb-16">
        <h2 className="text-center text-5xl font-extrabold text-slate-900">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-center text-slate-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <h3 className="text-4xl font-bold">Starter</h3>
            <p className="text-slate-500">Perfect for getting started</p>
            <p className="mt-4 text-5xl font-extrabold">$0<span className="text-2xl text-slate-400">/Month</span></p>
            <ul className="my-5 space-y-2 text-slate-600">
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Access to 10 free tools</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Basic templates</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Community support</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />1 project per month</li>
            </ul>
            <button className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-3 text-white">
              Get Started Free
            </button>
          </div>
          <div className="relative rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-6 text-white">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 px-4 py-1 text-sm font-medium text-amber-900">
              Most Popular
            </span>
            <h3 className="text-4xl font-bold">Pro</h3>
            <p className="text-violet-100">Best for professionals</p>
            <p className="mt-4 text-5xl font-extrabold">$29<span className="text-2xl text-violet-100">/Month</span></p>
            <ul className="my-5 space-y-2">
              <li className="flex items-center gap-2"><FaCheck />Access to all premium tools</li>
              <li className="flex items-center gap-2"><FaCheck />Unlimited templates</li>
              <li className="flex items-center gap-2"><FaCheck />Priority support</li>
              <li className="flex items-center gap-2"><FaCheck />Unlimited projects</li>
              <li className="flex items-center gap-2"><FaCheck />Cloud sync</li>
              <li className="flex items-center gap-2"><FaCheck />Advanced analytics</li>
            </ul>
            <button className="w-full rounded-full bg-white py-3 font-semibold text-violet-700">
              Start Pro Trial
            </button>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <h3 className="text-4xl font-bold">Enterprise</h3>
            <p className="text-slate-500">For teams and businesses</p>
            <p className="mt-4 text-5xl font-extrabold">$99<span className="text-2xl text-slate-400">/Month</span></p>
            <ul className="my-5 space-y-2 text-slate-600">
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Everything in Pro</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Team collaboration</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Custom integrations</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Dedicated support</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />SLA guarantee</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" />Custom branding</li>
            </ul>
            <button className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-3 text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 py-20 text-white">
        <div className="container-main text-center">
          <h2 className="text-5xl font-extrabold">Ready To Transform Your Workflow?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-violet-100">
            Join thousands of professionals who are already using Digitools to work
            smarter. Start your free trial today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-violet-700">
              Explore Products
            </button>
            <button className="rounded-full border border-white px-8 py-3 font-semibold">
              View Pricing
            </button>
          </div>
          <p className="mt-4 text-violet-100">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <footer className="bg-brandDark py-16 text-slate-300">
        <div className="container-main grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="text-5xl font-extrabold text-white">DigiTools</h3>
            <p className="mt-4 max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-2xl font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-2xl font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-2xl font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
            <h4 className="mb-2 mt-5 text-2xl font-semibold text-white">Social Links</h4>
            <div className="flex gap-3 text-slate-900">
              <span className="rounded-full bg-white p-2"><FaYoutube /></span>
              <span className="rounded-full bg-white p-2"><FaFacebookF /></span>
              <span className="rounded-full bg-white p-2"><FaXTwitter /></span>
            </div>
          </div>
        </div>
        <div className="container-main mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-700 pt-6 text-sm md:flex-row md:items-center">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

