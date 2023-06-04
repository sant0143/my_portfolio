import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaMobile, FaGlobe } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        />
        <Card
          title="UI designer"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
