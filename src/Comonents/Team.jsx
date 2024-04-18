const Team = () => {
    return (
        <div style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/282/910/small/elegant-white-background-free-vector.jpg)' }}   data-aos="zoom-out-down" className="mt-7 p-2">
            <div className="">
                <h1 className="text-4xl font-bold text-center" >Team Membear</h1>

            </div>
            <div className="grid md:grid-cols-3 mt-7 ">
                {/* 1 */}
                <div className="p-3 flex flex-col text-center items-center" >
                    <img className="w-52 h-36 rounded-3xl "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9h9BWIyeL_MhKdNUWUeKJPL_P3wlwXASvkOsWXy22Q&s" alt="" />
                    <h2 className="text-center mt-2 font-bold text-orange-600">Maria E. Flynn</h2>
                    <h1 className="text-sm mt-2 text-green-700 font-medium">FOUNDER OF WEBFLEX INC.</h1>
                    <h1 className="text-center text-black">We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job Training program and other employer.</h1>

                </div>
                {/* 2 */}
                <div className="p-3 flex flex-col text-center items-center">
                    <img className="w-52  h-36 rounded-3xl"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy-JK-Ne_QKptuQQexiadw_gsPHLFs1hi6g&s" alt="" />
                    <h2 className="text-center mt-2 font-bold text-orange-600">Dalmar Johnson</h2>
                    <h3 className="text-sm text-green-700 mt-2 font-medium">MANAGER AT COLDHAWK INC.</h3>
                    <h1 className="text-center text-black">It’s ideal for business clients who simply prefer to pay for transactions only as incurred. They help managing your time so you’ll get more done.</h1>

                </div>
                {/* 3 */}
                <div className=" flex text-center p-3 flex-col items-center">
                    <img className="w-52 h-36 rounded-3xl "  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                    <h2 className="text-center mt-2 font-bold text-orange-600">David S. Morris</h2>
                    <h3 className="text-sm text-green-700 font-medium mt-2">CEO AT ENTAVO LLC</h3>
                    <h1 className="text-center text-black">HomePress WP comes up with results that are actually implementable. That is their strength compared to other consulting companies.</h1>

                </div>

            </div>
        </div>
    );
};

export default Team;