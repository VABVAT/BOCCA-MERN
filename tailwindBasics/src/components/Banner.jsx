function Banner(props){
    return <div className=" h-40 xl:h-48 min-w-screen flex items-center bg-white mt-20 hidden md:flex">
        <img src={props.im} className=" w-[47%] ml-8"/>
        <div className="ml-20 2xl:ml-40 font-poppins text-4xl font-semibold" > Redifining satisfaction</div>
    </div>
}
export default Banner;