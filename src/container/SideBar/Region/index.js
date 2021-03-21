import React from "react";

const Region = () => {
  const region = [
    "ภาคเหนือ",
    "ภาคตะวันออก",
    "ภาคตะวันตก",
    "ภาคกลาง",
    "ภาคตะวันออกเฉียงเหนือ",
    "ภาคใต้",
  ];
  return (
    <div class="col-span-6 sm:col-span-3 pb-4">
      <label
        for="region"
        class="block text-base font-semibold text-gray-900"
      >
        ภูมิภาค
      </label>
      <select
        id="region"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="ทั้งหมด">ทั้งหมด</option>
        {region.map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Region;
