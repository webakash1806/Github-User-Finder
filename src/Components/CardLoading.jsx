// Loading animation

const CardLoading = ({ notify }) => {
    return (
        <div className=" bg-[#1f1f1f] flex flex-col items-center w-fit p-4 rounded-md mt-5 py-6 shadow-sm shadow-[#955dc3]">
            <p className="text-white mb-3 font-semibold text-xl tracking-wide">{notify}</p>
            <div className="animate-pulse w-[12rem] h-[12rem] rounded-full border-[3px] border-r-purple-600 shadow-lg bg-[#232323] animate-spin"></div>
            <div className="text-white text-[1.11rem] tracking-wide text-center my-5 p-3 py-5 bg-[#232323] min-w-[19rem] rounded">
                <p className="animate-pulse bg-[#4847477b] min-w-[18rem] max-w-[18rem] rounded-[8px] p-[5px] py-[1.12rem]"></p>
                <p className="animate-pulse bg-[#5858587b] min-w-[18rem] rounded-[8px] my-[8px] p-[5px] py-[1.12rem]"></p>
                <p className="animate-pulse bg-[#5858587b] min-w-[18rem] mb-[0.5rem] rounded-[8px] p-[5px] py-[1.12rem]"></p>
                <p className="animate-pulse bg-[#5858587b] min-w-[18rem]  rounded-[8px] p-[5px] py-[1.12rem]"></p>
            </div>
        </div>
    )
}
export default CardLoading
