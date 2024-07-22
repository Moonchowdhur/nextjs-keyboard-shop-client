import Plans from "./components/plans";
import FeatureBrands from "./components/featureBrands";
import Sell from "./components/sell";
import KeyboardImportance from "./components/keyboardImportance";

import Review from "./components/customerReview";
import AllProducts from "./components/allProducts";
export default function Home() {
  return (
    <div>
      <Plans />
      <AllProducts />
   
      <KeyboardImportance />
      <Sell />
      <Review />
    </div>
  );
}
