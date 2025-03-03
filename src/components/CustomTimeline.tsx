
const KasperComponent = () => {
    return (
        <div className="container mx-auto">
            <div className="w-fit my-5 mx-auto space-y-4">
                {/* Box 1 */}
                <div className="parent-box h-[250px] w-[350px] flex justify-center items-center relative
          after:content-[''] after:absolute after:w-[50%] after:h-[105%] after:top-[-10px] after:left-0 
          after:border-l-[10px] after:border-t-[10px] after:border-b-[10px] after:border-yellow-300 
          after:rounded-tl-[2rem] after:rounded-bl-[2rem]
          before:content-[''] before:absolute before:w-[50%] before:h-[105%] before:top-[-10px] before:right-0">
                    <div className="box w-[80%] h-[80%] rounded-2xl bg-[gray]">
                        s
                    </div>
                </div>

                {/* Box 2 */}
                <div className="parent-box h-[250px] w-[350px] ml-5 flex justify-center items-center relative
          after:content-[''] after:absolute after:w-[50%] after:h-[105%] after:top-[-7px] after:left-0
          before:content-[''] before:absolute before:w-[50%] before:h-[105%] before:top-[-7px] before:right-0
          before:border-r-[10px] before:border-t-[10px] before:border-b-[10px] before:border-[red]
          before:rounded-tr-[2rem] before:rounded-br-[2rem]">
                    <div className="box w-[80%] h-[80%] bg-[gray] rounded-2xl">s</div>
                </div>

                {/* Box 3 */}
                <div className="parent-box h-[250px] w-[350px] flex justify-center items-center relative
          after:content-[''] after:absolute after:w-[50%] after:h-[105%] after:top-[-4px] after:left-0 
          after:border-l-[10px] after:border-t-[10px] after:border-b-[10px] after:border-blue-700 
          after:rounded-tl-[2rem] after:rounded-bl-[2rem]
          before:content-[''] before:absolute before:w-[50%] before:h-[105%] before:top-[-4px] before:right-0">
                    <div className="box w-[80%] h-[80%] bg-[gray] rounded-2xl"></div>
                </div>

                {/* Box 4 */}
                <div className="parent-box h-[250px] w-[350px] ml-5 flex justify-center items-center relative
          after:content-[''] after:absolute after:w-[50%] after:h-[105%] after:top-[-1px] after:left-0 
          before:content-[''] before:absolute before:w-[50%] before:h-[105%] before:top-[-1px] before:right-0
          before:border-r-[10px] before:border-t-[10px] before:border-b-[10px] before:border-fuchsia-600 
          before:rounded-tr-[2rem] before:rounded-br-[2rem]">
                    <div className="box w-[80%] h-[80%] bg-[gray] rounded-2xl">s</div>
                </div>
            </div>
        </div>
    );
};

export default KasperComponent;