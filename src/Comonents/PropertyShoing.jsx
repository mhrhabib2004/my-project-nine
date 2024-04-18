import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";


const PropertyShoing = () => {
  const data = useLoaderData();
  // console.log(data)
  const { id } = useParams();
  const dataInt = parseInt(id);
  // console.log(dataInt)
  const Data = data?.find((Data) => Data.id === dataInt);
  // console.log(Data)
  const { image, estate_title, segment_name, description, price, status, area, location, facilities } = Data;

  return (
    <div style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/282/910/small/elegant-white-background-free-vector.jpg)' }} data-aos="zoom-out-left" className="hero min-h-screen bg-base-200">
      <Helmet><title>Home Press || Property</title></Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <img data-aos="zoom-out-up" src={image} className="max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold ">{estate_title}</h1>
          <p className="py-3 text-xl font-bold"><span className="text-xl text-green-800">Description :</span> {description}</p>
          <h1 className="py-3 text-xl font-semibold"><span className="text-xl text-green-800">segment name :</span> {segment_name}</h1>
          <p className="py-3 font-bold text-xl"><span className="text-xl text-green-800">Area :</span> {area}</p>
          <p className="py-3 font-bold  text-xl"><span className="text-xl text-green-800">location :</span> {location}</p>
          <h1 className="py-3 text-xl font-bold"><span className="text-xl text-green-800">status :</span> {status}</h1>
          <h1 className="py-3 text-xl font-bold"><span className="text-xl text-green-800">status : </span>{price}</h1>
         
          <div className="mt-4 flex gap-5 items-center mb-4">
          <span className="text-[#131313] text-xl font-bold"><span className="text-xl text-green-800">facilities :</span></span>

            {
              Data.facilities.map((facilities) =>
                <>
                  <div className="">
                    <h2 className="font-bold  bg-[#23be0a0d] rounded-full text-[#474747] grid   p-2 text-center justify-center items-center ">  {facilities}</h2>
                  </div>
                </>
              )
            }
          </div>
         


          <Link to={"/"}><button className="btn btn-outline btn-success">BACK TO HOME PAGE</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyShoing;


// const books = useLoaderData();
//     // console.log(books);
//     const { bookId } = useParams();
//     const bookInt = parseInt(bookId);
//     // console.log(bookInt);
//     const book = books?.find((book) => book.bookId === bookInt)
//     console.log(book);

//     const { image, bookName, authorName, category, review, totalPages, publisher, yearOfPublishing, rating } = book