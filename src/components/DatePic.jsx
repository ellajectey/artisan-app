import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect, useRef } from "react";


function DatePic() {

    const datepickerRef = useRef(null);

    useEffect(() => {
        if (datepickerRef.current) {
            flatpickr(datepickerRef.current, {
                
            });
        }
    }, []);


    return (
        <div>
           {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"/>
<div class="text-center mt-20">
    <lable class="text-lg font-semibold">Choose Date</lable> <br/>
    <input id="datepicker" class="border-2 border-gray-300 rounded px-3 py-2 w-56" type="text"
        placeholder="Select a date"/>
</div>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script>
    flatpickr("#datepicker", {
        // Configuration options for Flatpickr
        // You can customize the appearance and behavior here
    });
</script>  */}


<div>
            {/* <label className="text-sm">Choose Date</label> <br /> */}
            <input
                ref={datepickerRef}
                className="border-2 border-gray-300 rounded px-3 py-2 w-56 mx-4 mb-4"
                type="text"
                placeholder="Select a date"
            />
        </div>
        </div>
    );
}

export default DatePic;