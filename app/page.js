
import Deliciousness from "@/components/Deliciousness";
import HandPickedCollections from "@/components/HandPickedCollections";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestRecipes from "@/components/LatestRecipes";
import PopularCategories from "@/components/PopularCategories";
import SuperDelicious from "@/components/SuperDelicious";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      
      <main className="container mx-auto px-4 mt-[100px]">
        <HeroSection />
        <SuperDelicious />
        <PopularCategories />
        <Deliciousness />
        <HandPickedCollections />
        <LatestRecipes />
      </main>
     
    </div>
  );
}
