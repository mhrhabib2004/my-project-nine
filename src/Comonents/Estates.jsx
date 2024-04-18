

import { useEffect, useState } from "react";
import Datacard from "./Datacard";

const Estates = () => {
    const [datalist, setdatalist] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setdatalist(data));
        console.log(datalist)
    }, [])

    return (
        <div className="p-2">
            <div data-aos="fade-down" className=" p-2 text-center mt-7">
                <h1 className="text-4xl font-bold animate__animated animate__backInDown">Estates</h1>
                <p className="text-xl text-center font-normal animate__animated animate__bounceIn">Divided morning sea day Set earth. Grass without cattle. Spirit heaven. <br /> Also i grass give fowl wherein cattle spirit whales rule cattle. Earth fowl given own you’re, fruit so. Shall was.</p>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    datalist.map(alldata => <Datacard key={datalist.id} datalist={alldata}>

                    </Datacard>

                    )


                }

            </div>






        </div>
    );
};

export default Estates;