import Header from "@/Components/Header";
import Searchbar from "@/Components/Searchbar";


export default function Home() {
  return (
    <div id="wrapper">
      <Header />
      <Searchbar
              text="Search"
              type=''
              placeholder="Type in a keyword to begin search"
              image=""
            />
    </div>
  )
}
