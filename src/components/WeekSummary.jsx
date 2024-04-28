import React from 'react';

function WeekSummary(props) {
    return (
        <div>
            {/* <!--==== frist div begins here ====---> */}
  <div class="mr-6 ml-2 bg-white shadow-xl rounded-lg">
    <div class="w-11/12 mx-2">
      <div class="bg-white my-6">
        <h2 className='my-2 font-semibold text-xl'>Your Week in Summary</h2>
        <table class="text-center w-full border-collapse"> 
        {/* <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions --> */}
          <thead>
            <tr className='rounded-lg bg-orange-400'>
              <th class="py-4 px-4  font-bold uppercase text-sm text-white border-b border-grey-light">Location</th>
              <th class="py-4 px-4 text-center  font-bold uppercase text-sm text-white border-b border-grey-light">Client</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-4 border-b border-grey-light">Adenta Roman</td>
              <td class="py-4 px-4 text-center border-b border-grey-light">
              Yaa Mansah
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-4 border-b border-grey-light">Commandos</td>
              <td class="py-4 px-4 text-center border-b border-grey-light">
                Rawdat Adam
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-4 border-b border-grey-light">New Market</td>
              <td class="py-4 px-4 text-center border-b border-grey-light">
                Terry Ghansah
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-4 border-b border-grey-light">Taxi Rank</td>
              <td class="py-4 px-4 text-center border-b border-grey-light">
                Rehoboath Kumi
              </td>
            </tr>
            <tr class="hover:bg-grey-lighter">
              <td class="py-4 px-4 border-b border-grey-light">Adenta SDA</td>
              <td class="py-4 px-4 text-center border-b border-grey-light">
                Jerry Larbi
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
        </div>
    {/* <!--==== frist div ends here ====---> */}

        </div>
    );
}

export default WeekSummary;