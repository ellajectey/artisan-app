import React from "react";

function Calendar(props) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
      />
      <div class="text-center mt-20">
        <lable class="text-lg font-semibold">Choose Date</lable> <br />
        <input
          id="datepicker"
          class="border-2 border-gray-300 rounded px-3 py-2 w-56"
          type="text"
          placeholder="Select a date"
        />
      </div>
      <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
      <script>
        flatpickr("#datepicker",{" "}
        {
          // Configuration options for Flatpickr
          // You can customize the appearance and behavior here
        }
        );
      </script>
    </div>
  );
}

export default Calendar;
