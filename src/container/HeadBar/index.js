import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import logo from "./../../assests/logo.png";

const HeadBar = ({ setWordSearch, openSideBar, setOpenSideBar }) => {
  return (
    <nav class="bg-white fixed w-full z-50">
      <div class="flex justify-center my-2">
        <img alt="logo" src={logo} className="h-7 mx-3 mt-2 lg:mt-0 lg:mx-0 lg:h-10 lg:mr-5" />
        <div class=" bg-white rounded flex justify-items-center  items-center lg:w-96 sm:w-28 p-3 shadow-sm border border-gray-200">
          <button class="outline-none focus:outline-none">
            <AiOutlineSearch />
          </button>
          <input
            type="search"
            name=""
            placeholder="ค้นหาร้านค้า"
            x-model="q"
            class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
            onChange={(e) => {
              setWordSearch(e.target.value);
            }}
          />
          <div class="select">
            <select
              name=""
              id=""
              x-model="image_type"
              class="text-sm outline-none focus:outline-none bg-transparent"
            >
              <option value="ทั้งหมด" selected>
                ทั้งหมด
              </option>
              <option value="พื้นที่ใกล้ฉัน">พื้นที่ใกล้ฉัน</option>
              <option value="ชื่อร้านค้า">ชื่อร้านค้า</option>
              <option value="ประเภทร้านค้า">ประเภทร้านค้า</option>
            </select>
          </div>
        </div>
        <h1>
        <MdAccountCircle className="mt-3 mx-2 text-2xl" />
        </h1>

        <div
          class="flex-auto text-4xl pt-1 mr-2 lg:hidden"
          onClick={() => {
            setOpenSideBar(!openSideBar);
            console.log(openSideBar);
          }}
        >
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default HeadBar;
