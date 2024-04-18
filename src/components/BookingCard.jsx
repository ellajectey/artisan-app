import React from "react";

function BookingCard(props) {
  return (
    <div>
      <div class="w-2/3">
        {/* <!-- Card 1 --> */}
        <div class="bg-gray-800 shadow-lg rounded p-4 mb-4 flex">
          <div class="flex-shrink-0">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/"
              alt="Map 1"
              class="h-full w-48 object-cover rounded"
            />
          </div>
          <div class="ml-4 flex flex-col justify-between">
            <div class="flex items-center mb-2">
              <div class="bg-green-500 w-4 h-4 flex items-center justify-center rounded mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53 .53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <h2 class="text-xl font-semibold">Counter Strike Server 1</h2>
            </div>
            <div class="flex justify-between">
              <div class="mr-4">
                <p>IP: 123.456.789.1:27015</p>
                <p>Регион: Europe</p>
                <p>Пинг: 30 ms</p>
              </div>
              <div>
                <p>Мод: Zombie Mod</p>
                <p>Карта: cs_italy</p>
                <p>Игроки: 24/32</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="bg-gray-800 shadow-lg rounded p-4 mb-4 flex">
          <div class="flex-shrink-0">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/938339513171730971/F265E84437CB35A797541C00EC20DF42A419129B/"
              alt="Map 2"
              class="h-full w-48 object-cover rounded"
            />
          </div>
          <div class="ml-4 flex flex-col justify-between">
            <div class="flex items-center mb-2">
              <div class="bg-green-500 w-4 h-4 flex items-center justify-center rounded mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53 .53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <h2 class="text-xl font-semibold">Counter Strike Server 2</h2>
            </div>
            <div class="flex justify-between">
              <div class="mr-4">
                <p>IP: 123.456.789.2:27015</p>
                <p>Регион: North America</p>
                <p>Пинг: 40 ms</p>
              </div>
              <div>
                <p>Мод: Public</p>
                <p>Карта: cs_mansion</p>
                <p>Игроки: 18/32</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="bg-gray-800 shadow-lg rounded p-4 mb-4 flex">
          <div class="flex-shrink-0">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/771724021898742152/3FAE420233A940A966B41CD934A52DFBE1ED9E08/"
              alt="Map 3"
              class="h-full w-48 object-cover rounded"
            />
          </div>
          <div class="ml-4 flex flex-col justify-between">
            <div class="flex items-center mb-2">
              <div class="bg-green-500 w-4 h-4 flex items-center justify-center rounded mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53 .53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <h2 class="text-xl font-semibold">Counter Strike Server 3</h2>
            </div>
            <div class="flex justify-between">
              <div class="mr-4">
                <p>IP: 123.456.789.3:27015</p>
                <p>Регион: Asia</p>
                <p>Пинг: 50 ms</p>
              </div>
              <div>
                <p>Мод: Gun Game</p>
                <p>Карта: de_dust</p>
                <p>Игроки: 28/32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
