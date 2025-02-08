import Hero from "../components/home/Hero";
import ProjectGallery from "../components/home/ProjectGallery";

const Home = () => {
  console.log("ENV CHECK:", process.env.NEXT_PUBLIC_API_KEY);

  return (
    <div>
      <Hero />
      <ProjectGallery />
    </div>
  );
};

export default Home;
