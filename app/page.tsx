import Plans from "./components/plans";
import FeatureBrands from "./components/featureBrands";
import Sell from "./components/sell";
import KeyboardImportance from "./components/keyboardImportance";

import Review from "./components/customerReview";
export default function Home() {
  return (
    <div>
      <Plans />
      <FeatureBrands />
      <KeyboardImportance />
      <Sell />
      <Review />
    </div>
  );
}
