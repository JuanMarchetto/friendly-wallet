import ContactSelector from "../components/ContactSelector";

const contacts = [
  {
    img:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    url:"./pag2.html"
  },
  {
    img:"https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    url:"./pag2.html"
  },
];
export default function Home() {
  return (
    <div className="bg-black pb-72 pt-6 place-content-evenly grid  ">
      <div className=" container mx-auto px-5place-content-evenly grid grid-cols-3 justify-center items-center ">
      {contacts.map(({img, url}, index)=>(
        <ContactSelector
          img={img}
          url={url}
          key={index}
        />)
      )}
      </div>
      <br/>
      <div  className= "grid justify-center items-center mx-auto" >
      <a  href="./pag2.html">
        <img className=" h-28 w-40 "
            src="https://image.shutterstock.com/image-vector/hamburger-menu-web-icon-white-260nw-1249309132.jpg"
            alt=""
          />
      </a>
      
      </div>
    </div>
  );
}
