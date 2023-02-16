const SliderImage = ({ image, style }: { image: string, style?: { transform?: string } }) => {
    return (
        <img src={image} alt={image} className="w-[100%] rounded-md min-w-[310px] Opacity" style={style}/>
    )
}
export default SliderImage
