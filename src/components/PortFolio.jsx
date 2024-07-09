 import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      projectLink: "https://rohit292004.github.io/33SunriseSunsets/",
      sourceCodeLink: "https://github.com/Rohit292004/33SunriseSunsets.git"
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      projectLink: "https://rohit292004.github.io/26-Spider-Animation/",
      sourceCodeLink: "https://github.com/Rohit292004/26-Spider-Animation", 

    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS", 
      projectLink: "https://tourismplanwithme.netlify.app/",
      sourceCodeLink: " https://github.com/Rohit292004/tourism-plan"
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      projectLink: "https://51-shopify-app.vercel.app/",
      sourceCodeLink:"https://github.com/Rohit292004/51-Shopify-App"

    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, projectLink, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around  ">
               <div className=" md:mb-2  md:ml-3  ">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-1 rounded   ">
                <a
          href={projectLink} // Replace "#" with the actual URL of your project
          className= "bg-green-500 hover:bg-green-700 text-white font-bold text-xs md:text-xm px-3 py-1 rounded">
          View Project
        </a>
                </button>

                </div>
                <div className="md:mr-10  ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded  ">
                <a
          href={sourceCodeLink} // Replace "#" with the actual URL of your project
          className= "bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs md:text-xm px-3 py-1 rounded">
          Source Code
        </a>
                </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
