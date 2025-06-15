import Banner from "./components/home/banner/Banner";
import Browse from "./components/home/browse/Browse";
import Gallery from "./components/home/gallery/Gallery";
import Inspiration from "./components/home/inspiration/Inspiration";
import OurProducts from "./components/home/our_products/OurProducts";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Browse />
      <OurProducts />
      <Inspiration />
      <Gallery />
    </div>
  );
}
