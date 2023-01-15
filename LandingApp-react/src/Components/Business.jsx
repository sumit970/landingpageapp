import React from "react";

const Business = () => (
  <section className="bg-blue-900  ">
    <div className="flex flex-col md:flex-row  items-center space-x-3  px-[8px] pt-[40px]  font-serif text-3xl text-white justify-around  ">
      {/* first side of the div section  */}
      <div className=" px-4">
        <img
          src="bill.png"
          alt=""
          className="w-[100%] h-[100%] md:w-[600px] md:h-[500px]"
        />
      </div>
      {/*another side of div section  */}

      <div className=" flex flex-col pb-5">
        <div className="text-white font-semibold text-5xl ">
          <h1 className="">Easily control your </h1>
          <span>billing & invoicing</span>
        </div>

        <p className="text-white text-xl max-w-[450px] py-5">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>

        <div className=" flex flex-row flex-wrap ">
          <img src="google.svg" alt="" className="w-[128.86px] h-[42.05px]" />
          <img src="apple.svg" alt="" className="w-[128.86px] h-[42.05px]" />
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-around   ">
      <div className="text-white font-semibold min-w-[500px] text-6xl px-6">
        <h1 className="">What People are</h1>
        <span className="">saying about us</span>
      </div>

      <p className="text-white text-xl max-w-[500px] py-4 md:py-6  px-6">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
  </section>
);
export default Business;
