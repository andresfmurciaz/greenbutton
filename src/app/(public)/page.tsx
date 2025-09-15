import ViewProduct from "@/components/design/ViewProduct";
import Incentives from "@/components/design/Incentives";
import { GalleryCategories } from "@/components/design/GalleryCategories";
import FeaturedCategories from "@/components/design/FeaturedCategories";
import HomeSlider from "@/components/design/HomeSlider";
export default function Home() {
  return (
    <>
      <HomeSlider />
      <GalleryCategories></GalleryCategories>
 <Incentives></Incentives>
 <FeaturedCategories></FeaturedCategories>
      <ViewProduct></ViewProduct>

     
      
     
    </>
  );
}
