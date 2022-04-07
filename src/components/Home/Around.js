import React from "react";

const data = [
  {
    title: "Beauty & Spa",
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649354526/image-7_uf9wu7.jpg",
    description:
      "Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui",
  },
  {
    title: "City Tours",
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649354526/image-9-808x1024_z55gfn.jpg",
    description:
      "Quisque vitae posuere libero. Phasellus feugiat erat sit amet lorem ipsum dolor",
  },
  {
    title: "Lunch & Dinner",
    image:
      "https://res.cloudinary.com/academist/image/upload/v1649354527/image-8_plyjrd.jpg",
    description:
      "Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui",
  },
];

const Around = () => {
  return (
    <div className="around ">
      <div className="container my-8">
        <div className="text-center">
          <div className="around__bottom__wrapper__item__image">
            <p className="text-red-400">SURROUNDINGS</p>
            <h2 className="around__title">The Places Around</h2>
          </div>
          <div className="around__bottom__wrapper">
            {data.map((info, index) => (
              <div key={index}>
                <img className="around__animation" src={info?.image} alt="" />
                <div className="mt-8">
                  <h3 className="text-4xl font-normal">{info.title}</h3>
                  <p className="around__title__description">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Around;
