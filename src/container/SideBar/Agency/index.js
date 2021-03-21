import React from "react";

const RadioCheck = ({ value }) => {
  return (
    <div class="flex items-center">
      <input
        id="push_everything"
        name="push_notifications"
        type="radio"
        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      />
      <label
        for="push_everything"
        class="ml-3 block text-sm font-medium text-gray-700"
      >
        {value}
      </label>
    </div>
  );
};

const Agency = () => {
  return (
    <fieldset class="pb-4">
      <div>
        <legend class="text-base font-semibold text-gray-900">
          ประเภทร้านค้า
        </legend>
      </div>
      <div class="mt-2 space-y-2">
        <RadioCheck value={"ทั้งหมด"} index={-1} />
        <RadioCheck value={"รัฐบาล"} index={-1} />
        <RadioCheck value={"เอกชน"} index={-1} />
        <RadioCheck value={"รัฐวิสาหกิจ"} index={-1} />
      </div>
    </fieldset>
  );
};

export default Agency;
