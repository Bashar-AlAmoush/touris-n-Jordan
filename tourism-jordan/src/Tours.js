import React from 'react'


const places = [
  {
      id: 1,
      name: "Petra",
      info: "some information about petra",
      image:
          "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 10,
  },
  {
      id: 2,
      name: "Wadi rum",
      info: "some information about rum",
      image:
          "https://images.pexels.com/photos/13458330/pexels-photo-13458330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 12,
  },
  {
      id: 3,
      name: "Jerash",
      info: "some information about Jerash",
      image:
          "https://images.pexels.com/photos/4216244/pexels-photo-4216244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 6,
  },
  {
      id: 4,
      name: "Madaba",
      info: "some information about Madaba",
      image:
          "https://media.istockphoto.com/id/146737795/photo/madaba-map.jpg?s=1024x1024&w=is&k=20&c=7hk9LfuYqTYwIUjCCSx8QTO1Ua8yO2tyHz1IHx_jOKE=",
      price: 8,
  },
  {
      id: 5,
      name: "Dead Sea",
      info: "some information about Dead Sea",
      image:
          "https://images.pexels.com/photos/3370311/pexels-photo-3370311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 60,
  },
];

export default function Tours() {
  return (
    <>
            <div className='row gap-5 justify-content-center'>
                {places.map((data => {
                    return (
                            <div className="card shadow-sm col-3">
                            <img src={data.image} className="card-img-top" alt="..." />

  <div className="card-body">
    <p className="card-text">
    {data.name}
    </p>
    <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
        <button type="button" className="btn btn-sm btn-outline-secondary">
        {data.info}.
        </button>
      </div>
      <small className="text-body-secondary">{data.price} JD</small>
    </div>
  </div>
</div>
                     
                    )
                }))}</div>
        </>
    )
}
  

