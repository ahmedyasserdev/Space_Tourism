import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="home px-5  section  ">
                <div className="overlay  pt-32 lg:pt-0  ">
                    <article className="left-content" >
                        <h1 className="text-3xl primary-color">
                            So, you want to travel to{" "}
                            <span className=" block  text-white  my-24 md:my-16 font-light tracking-widest uppercase ">
                                Space
                            </span>
                        </h1>

                        <p className=" mx-auto primary-color  ">
                            Let’s face it; if you want to go to space, you might as well
                            genuinely go to outer space and not hover kind of on the edge of
                            it. Well sit back, and relax because we’ll give you a truly out of
                            this world experience!
                        </p>
                    </article>

                    <article className=" right-content mt-20 flex justify-center items-center   " >
                        <button className="w-96
                         h-96  md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full 
                        bg-white text-gray-800 
                        uppercase 
                        font-normal text-4xl 
                         ">
                            <Link to="/destination" >Explore</Link>
                        </button>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Home;
