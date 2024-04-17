import { Link } from "react-router-dom";


const Datacard = ({ datalist }) => {
    const { estate_title, image, segment_name, price, description, location, area, status, id,facilities } = datalist;
    return (
        <div className="">
            
            <div  className=" mt-7">
                <div  className="card w-auto lg:h-screen bg-base-100 shadow-xl">
                    <figure><img className="h-64" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {estate_title}

                        </h2>
                        <h2 className="text-2xl font-bold">
                            {segment_name}

                        </h2>
                        

                        <p>{description}</p>
                        <h2 className="text-xl font-bold">price : {price}</h2>
                        <div className="card-actions">
                            <div className="badge badge-outline">{location}</div>
                            <div className="badge badge-outline">{area}</div>
                            <div className="badge badge-outline">for {status}</div>
                            
                            <div className="mt-2 flex gap-3 items-center ">
                                
                                {
                                    datalist.facilities.map((facilities) =>
                                        <>
                                            <div className="">
                                                <h2 className="font-bold text-[12px] bg-[#23be0a0d] rounded-full text-[#474747] grid p-2 text-center justify-center items-center ">  {facilities}</h2>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <Link to={`/propertyShowing/${id}`}><button className="btn btn-outline mt-1 w-full ">Veiw property</button></Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Datacard;