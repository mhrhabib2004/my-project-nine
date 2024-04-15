import { Link, useLoaderData, useParams } from "react-router-dom";


const PropertyShoing = () => {
    const data = useLoaderData();
    // console.log(data)
    const { id } = useParams();
    const dataInt = parseInt(id);
    // console.log(dataInt)
    const Data = data?.find((Data) => Data.id === dataInt);
    // console.log(Data)
    const {image,estate_title,segment_name,description,price,status,area,location,facilities}=Data;

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{estate_title}</h1>
      <p className="py-3 text-1xl font-bold">{description}</p>
      <h1 className="py-3 text-xl font-semibold">segment name : {segment_name}</h1>
      <p className="py-3">Area : {area}</p>
      <p className="py-3 text-xl">location : {location}</p>
      <h1 className="py-3 text-sm font-bold">status : {status}</h1>
      <h1 className="py-3 text-sm font-bold">status : {price}</h1>
      <h1 className="py-3 text-sm font-bold">facilities :{facilities}</h1>


      <Link to={"/Home"}><button className="btn btn-primary">BACK TO HOME PAGE</button></Link>
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