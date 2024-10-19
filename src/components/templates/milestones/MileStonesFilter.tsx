import { FaSearch } from "react-icons/fa";
import { FaEllipsis, FaFilter } from "react-icons/fa6";

export default function MileStonesFilter() {
    return (
        <div className="lg:px-2.5 flex lg:gap-20  justify-between">
                <div className="hidden lg:flex gap-4">
                    <button className="size-8  flex justify-center items-center rounded bg-white border border-mainBorder shadow"><FaFilter/></button>
                    {/* <button className="w-[30px] h-[30px]  flex justify-center items-center rounded bg-white border border-[#33333318] shadow"><FaThLarge/></button> */}
                </div>
                <div className="flex flex-1 gap-2.5 lg:gap-5 px-0 lg:px-2.5 items-center">
                    <form action="" className="flex-1 relative">
                        <input className="search-input" type="text" placeholder="Search..." name="" id="" />
                        <button className="search-input-icon">
                            <FaSearch />
                        </button>
                    </form>
                    {/* <button className="add h-[30px] w-[30px] rounded-full bg-[#478FB4] flex justify-center items-center text-white text-[14px]">
                        <FaPlus />
                    </button> */}
                    {/* <button className="prev h-[30px] w-[30px] text-[#DBEDF5] bg-white border border-[#DBEDF5] flex justify-center items-center  text-[14px]">
                        <FaChevronLeft  />
                    </button>
                    <button className="next h-[30px] w-[30px] text-[#478FB4]  bg-white border border-[#DBEDF5] flex justify-center items-center  text-[14px]">
                        <FaChevronRight />
                    </button> */}
                    <button className=" search-more-button">
                        <FaEllipsis />
                    </button>
                </div>
            </div>
    )
}
