import React from 'react'
import MySlider from './Slider'

export default function Main() {
  const photos = [
    {id : 1 , src : 'img/SliderImg/Main/IMG_1321_1.png', alt : 'Slider 1' , title: 'foukané sklo'},
    {id : 2 , src : 'img/SliderImg/Main/IMG_1321_2.png', alt : 'Slider 2' , title: 'foukané sklo'},
    {id : 3 , src : 'img/SliderImg/Main/IMG_1321_1.png', alt : 'Slider 3' , title: 'foukané sklo'},
    {id : 4 , src : 'img/SliderImg/Main/IMG_1321_2.png', alt : 'Slider 4' , title: 'foukané sklo'},
  ]
  return (
    <div>
        <MySlider photos={photos} />
    </div>
  )
}
