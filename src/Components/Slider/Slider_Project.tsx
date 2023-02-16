import React from "react"
import image_1 from "./images/home1.png"
import image_2 from "./images/home2.png"
import image_3 from "./images/cart1.png"
import image_4 from "./images/cart2.png"
import { useState } from "react"
import Image_Slider from "./Image_Slider"


const Slider_Projects = () => {


  return (
    <main className="flex text-slate-300 justify-center">
      <Image_Slider
        Images={[image_1, image_2, image_3, image_4]}
      />
    </main>
  )
}

export default Slider_Projects
