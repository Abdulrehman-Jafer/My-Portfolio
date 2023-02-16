import { useState } from "react"
import { SlArrowLeft } from "react-icons/sl"
import { SlArrowRight } from "react-icons/sl"
import SliderImage from "./SliderImage"
import { nanoid } from "nanoid"


const Image_Slider = ({ Images, }: { Images: string[] }) => {
    const [transform_Translate, set_Transform_Translate] = useState(0)
    const [count, setCount] = useState(0)
    const translate_Plus = () => {
        return set_Transform_Translate((old) => {
            return old + 100
        })
    }
    const translate_Minus = () => {
        return set_Transform_Translate((old) => {
            return old - 100
        })
    }
    const style = { transform: `translateX(-${transform_Translate}%)` }
    const ImagesElement = Images.map((image) => {
        return <SliderImage image={image} key={nanoid()} style={style} />
    })
    return (<main className="flex justify-center gap-[0.3rem] items-center w-[100%] rounded-md min-w-[310px]">
        <SlArrowLeft className={`sm:text-[1.3em] rounded-md] `}
            onClick={() => {
                setCount(prev => prev > 0 ? prev - 1 : prev)
                count > 0 ? translate_Minus() : ""
            }} />
        {/* <div className=" overflow-hidden max-w-[600px]">
            <div className={`flex w-[${Images.length * 100}%]`}>
            {ImagesElement}
            </div>
        </div> */}
        <SliderImage image={Images[count]}/>
        <SlArrowRight className={`sm:text-[1.3em] rounded-md`}
            onClick={() => {
                setCount(prev => prev < Images.length - 1  ? prev + 1 : prev)
                count < Images.length - 1 ? translate_Plus() : "" 
            }}
        />
    </main>
    )
}
export default Image_Slider
