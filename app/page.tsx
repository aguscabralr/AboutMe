import MaintenancePage from "./components/home/maintenance";
import Footer from "./components/footer/footer";
import Nav from "./components/navbar/nav";


const Landing = () => {

  return (
    <main className="w-full min-h-screen bg-[--bgd] flex-col justify-between items-center">
      <Nav />
      <MaintenancePage />
      <Footer />
    </main>
  )
};

export default Landing;
