import { FaChevronLeft, FaChevronRight, FaFolder, } from "react-icons/fa6";
import MainHeader from "../../components/molecules/MainHeader";
import { SectionHeader } from "../../components/atoms";
import PenaltiesContent from "../../components/templates/reports/PenaltiesContent";
import SiteDairyContent from "../../components/templates/reports/SiteDairyContent";
import PATDocumentsContent from "../../components/templates/reports/PATDocumentsContent";
import DependenciesContent from "../../components/templates/reports/DependenciesContent";
import CreatePenalties from "../../components/templates/reports/CreatePenalties";
import CreateDocuments from "../../components/templates/reports/CreateDocuments";

export default function Reports() {
    return (
        <div className=" page">
            <MainHeader />
            <div className="flex flex-col gap-4">
                <SectionHeader icon={<FaFolder  />} header="Penalties">
                    <div className="flex gap-2.5 items-center">
                        <button className="items-prev-button">
                            <FaChevronLeft  />
                        </button>
                        <button className="items-next-button">
                            <FaChevronRight />
                        </button>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}
                        <CreatePenalties />
                    </div>
                </SectionHeader>
                <PenaltiesContent />

                <SectionHeader icon={<FaFolder  />} header="Site Diary">
                    <div className="flex gap-2.5 items-center">
                        <button className="items-prev-button">
                            <FaChevronLeft  />
                        </button>
                        <button className="items-next-button">
                            <FaChevronRight />
                        </button>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}

                    </div>
                </SectionHeader>
                <SiteDairyContent />

                <SectionHeader icon={<FaFolder  />} header="PAT Documents">
                    <div className="flex gap-2.5 items-center">
                        <button className="items-prev-button">
                            <FaChevronLeft  />
                        </button>
                        <button className="items-next-button">
                            <FaChevronRight />
                        </button>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}
                        <CreateDocuments />
                    </div>
                </SectionHeader>
                <PATDocumentsContent />

                <SectionHeader icon={<FaFolder  />} header="Dependencies">
                    <div className="flex gap-2.5 items-center">
                        <button className="items-prev-button">
                            <FaChevronLeft  />
                        </button>
                        <button className="items-next-button">
                            <FaChevronRight />
                        </button>
                        {/* <button className="flex justify-center items-center w-[18px] h-[18px] text-[10px] text-white bg-[#000] rounded-[6px]"><FaPlus/></button> */}
                    </div>
                </SectionHeader>
                <DependenciesContent />
            </div>
        </div>
    )
}
