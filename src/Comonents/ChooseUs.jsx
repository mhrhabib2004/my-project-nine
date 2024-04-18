
const ChooseUs = () => {
    return (
        <div style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/18/77/63/360_F_518776302_XZQkgR5kuSZyuchfvOT2jT0dhvj3E7BB.jpg)' }} data-aos="fade-down-right" className="mt-7 ">
            <div>
                <h1 className="text-4xl font-bold text-center animate__animated animate__zoomInRight" >Why Choose Us</h1>

            </div>
            <div className="grid md:grid-cols-3 mt-7 ">
                {/* 1 */}
                <div className=" flex flex-col items-center" >
                    <img className="w-36 animate__animated animate__slideInUp" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYwPy7qR5d2Ls9Z69sic9ElzcQD6DhruQZn5YcMHmypaOs5sE8" alt="" />
                    <h2 className="text-center animate__animated animate__slideInDown font-extrabold mt-3">TRUSTED BY THOUSANDS</h2>
                    <h1 className="text-center animate__animated animate__zoomInUp font-bold mt-3">10 new offers every day. 350 offers on site,<br /> trusted by a community of thousands of users.</h1>

                </div>
                {/* 2 */}
                <div className=" flex flex-col items-center">
                    <img className="w-36 animate__animated animate__slideInUp" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnA8JUiBing5s4T63w_MxnOFbN2UCi5IbZnHj7XK1vRVv12-1L" alt="" />
                    <h2 className="text-center animate__animated animate__slideInDown font-extrabold mt-3">WIDE RANGE OF PROPERTIES</h2>
                    <h1 className="text-center font-bold animate__animated animate__zoomInUp mt-3">With a robust selection of popular properties on hand,<br /> as well as leading properties from real estate experts.</h1>

                </div>
                {/* 3 */}
                <div className=" flex flex-col items-center">
                    <img className="w-36 animate__animated animate__slideInUp" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdiZa0pZO2oWMgGo6xNTwNSFt2hlglRaLavNOVDQUfRDao7FqT" alt="" />
                    <h2 className="text-center animate__animated animate__slideInDown font-extrabold mt-3">FINANCING MADE EASY</h2>
                    <h1 className="text-center font-bold animate__animated animate__zoomInUp mt-3">Our stress-free finance department that can find <br /> financial solutions to save you money..</h1>

                </div>

            </div>
        </div>
    );
};

export default ChooseUs;