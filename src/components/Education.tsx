import  {FC} from "react";

export interface IEducation {
    institution: string
    title: string
    date:string
}

const Education: FC<{ education: IEducation }> = ({education}) => {
    const { title,  institution,date} = education
    return (<div
        className='mt-5 flex 
        rounded-md
         hover:bg-[#6881cb] transition-all duration-1000 flex-col py-10 px-2 text-white 
          '>
       
       <div className="flex">
 

  <div className="flex justify-between w-full">
    <div>
      <p className="font-bold">
        {institution}
        </p>
      <p>
        {title}
        </p>
    </div>

    <div className="ml-auto">
      {date}
    </div>
  </div>
</div>
    </div>)
}
export default Education