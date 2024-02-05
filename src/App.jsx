import "./App.css";
import VideoCard from "./components/VideoCard/VideoCard";

function App() {


  
  const data = [
    {
      id: 1,
      name: "FREE",
      pricing:0,
      features:{desc1:"✔ Single user", desc2:"✔ 50GB Storage", desc3:"✔ Unlimited Public Projects", desc4:"✔ Community Access", desc5:"X Unlimited Private Projects", desc6:"X  Dedicated Phone Support", desc7:"X  Free Subdomain", desc8:"X  Monthly Status Reports"},
      
    },
    {
      id: 2,
      name: "PLUS",
      pricing: 9,
      features:{desc1:"✔ 5 Users", desc2:"✔ 50GB Storage", desc3:"✔ Unlimited Public Projects", desc4:"✔ Community Access", desc5:"✔ Unlimited Private Projects", desc6:"✔ Dedicated Phone Support", desc7:"✔ Free Subdomain", desc8:"X  Monthly Status Reports"},
       
    },
    {
      id: 3,
      name: "PRO",
      pricing:49,
      features:{desc1:"✔ Unlimited Users", desc2:"✔ 50GB Storage", desc3:"✔ Unlimited Public Projects", desc4:"✔ Community Access", desc5:"✔ Unlimited Private Projects", desc6:"✔ Dedicated Phone Support", desc7:"✔ Free Subdomain", desc8:"✔  Monthly Status Reports"},
       
    },
  ];
  return (
    <>  
    <div className="card-information">
      {data.map((movie) => (
        <VideoCard movie={movie} key={`movie-card-${movie.id}`} />
      ))}
      </div>
    </>
  );
}

export default App;
