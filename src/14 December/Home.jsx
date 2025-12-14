import React, { useEffect, useState } from "react";
// import useApiData from './useApiData'

const Home = () => {
    const [theme, setTheme] = useState("light");
  // const {data} = useApiData('https://jsonplaceholder.typicode.com/todos/1')
  // console.log(data);
  const handleTheme = () =>{
    const newTheme = theme === "light"?"dark":"light"

    document.documentElement.setAttribute('class', newTheme)

    // document.documentElement.className = newTheme;
    setTheme(newTheme)
  }

  return (
   <div>
    <button onClick={handleTheme}>{theme==="light"?"toggle dark":"toggle light"}</button>
   <h1 className="bg-white text-black dark:bg-black dark:text-white">Hello Devs!</h1>
   </div>
  );
};

export default Home;

// mobile design -> tablet-> laptop -> desktop

// sm:	≥ 640px
// md:	≥ 768px
// lg:	≥ 1024px
// xl:	≥ 1280px
