import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Register from "@/Components/Register";

export default function Home() {
  return (
    <div id="wrapper">
      <Header />
      <div className="main">
        <Register />
      </div>
      <Footer />
    </div>
  );
}
