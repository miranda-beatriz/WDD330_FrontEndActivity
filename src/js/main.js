<<<<<<< HEAD
import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();
=======
import ProductData    from "./ProductData.mjs";
import ProductListing from "./ProductList";

const listElement = document.getElementById("product-list");

// Tents
const hiddenTentIds = ["989CG", "880RT"]
const tentsData     = new ProductData("tents");
const tentsListing  = new ProductListing("tents", tentsData, listElement, hiddenTentIds);

tentsListing.init();
>>>>>>> 508cd9840bb44c53d5aecccd368f3faea001a87a
