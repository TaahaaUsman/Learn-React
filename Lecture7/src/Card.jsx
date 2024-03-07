import React from 'react'

function Card(props) {
  return (
    <>
    <div className="relative h-[400px] w-[300px] rounded-md m-5">
  <img
    src={props.src.src}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{props.user.name || 'Delba'}</h1>
    <p className="mt-2 text-sm text-gray-300">
      {props.user.discription || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa dolor hic soluta nostrum esse accusamus at harum labore repudiandae!'}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>
    </>
  )
}

export default Card