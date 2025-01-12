import { Link } from "react-router-dom";


const Datacard = ({ datalist }) => {
    const { estate_title, image, segment_name, price, description, location, area, status, id, facilities } = datalist;
    return (
        <div className="">

            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className=" mt-7">
                <div style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/871/835/HD-wallpaper-white-hearts-card-greeting-love-negative-space-romance-valentine-valentines-day-wedding-thumbnail.jpg)' }} className="card w-auto lg:h-screen  shadow-xl bg-no-repeat bg-cover bg-center ">
                    <figure ><img className="h-64 w-auto p-2 rounded-2xl animate__animated animate__fadeInDown" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title animate__animated animate__fadeInLeft">
                            {estate_title}

                        </h2>
                        <h2 className="text-2xl font-bold animate__animated animate__animated">
                            {segment_name}

                        </h2>


                        <p className="text-xl animate__animated animate__fadeInTopLeft ">{description}</p>
                        <h2 className="text-xl animate__animated animate__rollIn font-bold">price : {price}</h2>
                        <div className="card-actions animate__animated animate__lightSpeedInRight">
                            <div className="badge badge-outline animate__animated animate__lightSpeedInRight ">{location}</div>
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
                        <Link to={`/propertyShowing/${id}`}><button data-aos="flip-down" className="btn btn-outline mt-1 w-full ">Veiw property</button></Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Datacard;