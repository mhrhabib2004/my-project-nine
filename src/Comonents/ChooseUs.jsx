
const ChooseUs = () => {
    return (
        <div className="mt-7">
            <div>
                <h1 className="text-4xl font-bold text-center" >Why Choose Us</h1>

            </div>
            <div className="grid md:grid-cols-3 mt-7 ">
                {/* 1 */}
                <div className=" flex flex-col items-center" >
                    <img className="w-36 "  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYwPy7qR5d2Ls9Z69sic9ElzcQD6DhruQZn5YcMHmypaOs5sE8" alt="" />
                    <h2 className="text-center">TRUSTED BY THOUSANDS</h2>
                    <h1>10 new offers every day. 350 offers on site,<br /> trusted by a community of thousands of users.</h1>

                </div>
                {/* 2 */}
                <div className=" flex flex-col items-center">
                    <img className="w-36 "  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnA8JUiBing5s4T63w_MxnOFbN2UCi5IbZnHj7XK1vRVv12-1L" alt="" />
                    <h2 className="text-center">WIDE RANGE OF PROPERTIES</h2>
                    <h1 className="text-center">With a robust selection of popular properties on hand,<br /> as well as leading properties from real estate experts.</h1>

                </div>
                {/* 3 */}
                <div className=" flex flex-col items-center">
                    <img className="w-36 "  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdiZa0pZO2oWMgGo6xNTwNSFt2hlglRaLavNOVDQUfRDao7FqT" alt="" />
                    <h2 className="text-center">FINANCING MADE EASY</h2>
                    <h1 className="text-center">Our stress-free finance department that can find <br /> financial solutions to save you money..</h1>

                </div>

            </div>
        </div>
    );
};

export default ChooseUs;