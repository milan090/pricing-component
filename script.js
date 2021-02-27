const slider = document.getElementById("views-slider-range");
const priceValue = document.querySelector("#price-value");
const pageViewsValue = document.querySelector("#pageviews-value");
const billingToggle = document.getElementById("billing-toggle");

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const pageViewPricings = [
  {
    pageViews: "10K",
    price: 8,
  },
  {
    pageViews: "50K",
    price: 12,
  },
  {
    pageViews: "100K",
    price: 16,
  },
  {
    pageViews: "500K",
    price: 24,
  },
  {
    pageViews: "1M",
    price: 36,
  },
];

const value = slider.value;
const pageViewPricing = pageViewPricings[value];
priceValue.textContent =
  "$" + (Math.round(pageViewPricing.price * 100) / 100).toFixed(2);
pageViewsValue.textContent = pageViewPricing.pageViews;

slider.oninput = function (e) {
  const valuePercentage =
    ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, 	#a5f3eb 0%, 	#a5f3eb " +
    valuePercentage +
    "%, #eaeefb " +
    valuePercentage +
    "%, #eaeefb 100%)";

  const value = this.value;
  const pageViewPricing = pageViewPricings[value];
  let price = pageViewPricing.price;
  const isYearly = billingToggle.checked;
  if (isYearly) {
    price -= price * (25/100); // Reduce 25%
  }
  priceValue.textContent =
    "$" + (Math.round(price * 100) / 100).toFixed(2);
  pageViewsValue.textContent = pageViewPricing.pageViews;
};

billingToggle.oninput = (e) => {
  const isYearly = e.target.checked;

  const value = slider.value;
  console.log(value)
  const pageViewPricing = pageViewPricings[value];
  let price = pageViewPricing.price;
  if (isYearly) {
    price -= price * (25/100); // Reduce 25%
  }
  priceValue.textContent =
    "$" + (Math.round(price * 100) / 100).toFixed(2);
  pageViewsValue.textContent = pageViewPricing.pageViews;
};
