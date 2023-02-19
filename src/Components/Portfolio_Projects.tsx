import React from "react"
import image_1 from "./images/home1.png"
import image_2 from "./images/home2.png"
import image_3 from "./images/cart1.png"
import image_4 from "./images/cart2.png"
import { useState } from "react"
import Image_Slider from "./Image_Slider"
const Portfolio_Projects = () => {
  const [transform_Translate, set_Transform_Translate] = useState(0)

  const translate_Plus = () => {
    if (transform_Translate < 300) {
      set_Transform_Translate((old) => {
        return old + 100
      })
      return transform_Translate
    }
  }
  const translate_Minus = () => {
    if (transform_Translate >= 100) {
      set_Transform_Translate((old) => {
        return old - 100
      })
      return transform_Translate
    }
  }


  return (
    <main className="flex text-slate-300 justify-center">
      <Image_Slider
        // Img_1={image_1}
        // Img_2={image_2}
        // Img_3={image_3}
        // Img_4={image_4}
        Images={[image_1,image_2,image_3,image_4]}
        transform_Translate={transform_Translate}
        translate_Minus={translate_Minus}
        translate_Plus={translate_Plus}
      />
    </main>
  )
}

export default Portfolio_Projects
