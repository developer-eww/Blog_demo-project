import React from 'react'
import hero from '../assets/hero.jpg'
import images4 from "../assets/images4.jpg"
import blog1 from "../assets/blog1.jpg"
import blog5 from "../assets/blog5.jpg"
const About = () => {
    return (
        <div className='mt-36 lg:mt-28  mb-20'>
   
          <h1 className='text-4xl font-bold ml-15 mb-4 tracking-widest flex align-center justify-center'>ABOUT THE BLOG</h1>
          <div className='flex flex-col md:flex-row justify-items-center p-4 items-center bg-slate-50 gap-8 mb-12 m-10 shadow-md rounded-xl overflow-hidden hover:shadow-lg '>
            <img src={hero} alt="" className='h-52 w-52'/>
            <p className='font-serif font-medium '>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis officiis nam voluptatibus vero ipsa minus. Fugit voluptatibus laboriosam error amet, odio minima ut a necessitatibus in perferendis vitae? Delectus facere mollitia, sunt dicta ipsa autem ducimus libero quisquam id consequatur similique, eligendi fuga cum perspiciatis nisi. Modi, ipsam cumque? Fugiat magnam, illum illo mollitia voluptatibus, molestiae officiis animi eius labore dolorem veniam eveniet perspiciatis ab tenetur tempore. Animi repellat necessitatibus tempora molestias asperiores, quaerat officia natus ad suscipit nostrum veritatis eos id dolorem enim velit officiis laudantium nihil autem ipsam eum eligendi excepturi ea! Adipisci!
            </p>
          </div>
          <div className='flex flex-col-reverse md:flex-row-reverse justify-items-center p-4  items-center  bg-slate-50 gap-8 mb-12 m-10 shadow-md rounded-xl overflow-hidden hover:shadow-lg'>
            <img src={images4} alt="" className='h-52 w-52'/>
            <p className=' font-serif font-medium m-4'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis officiis nam voluptatibus vero ipsa minus. Fugit voluptatibus laboriosam error amet, odio minima ut a necessitatibus in perferendis vitae? Delectus facere mollitia, sunt dicta ipsa autem ducimus libero quisquam id consequatur similique, eligendi fuga cum perspiciatis nisi. Modi, ipsam cumque? Fugiat magnam, illum illo mollitia voluptatibus, molestiae officiis animi eius labore dolorem veniam eveniet perspiciatis ab tenetur tempore. Animi repellat necessitatibus tempora molestias asperiores, quaerat officia natus ad suscipit nostrum veritatis eos id dolorem enim velit officiis laudantium nihil autem ipsam eum eligendi excepturi ea! Adipisci!
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-items-center p-4 items-center gap-8 mb-12 m-10 bg-slate-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg'>
            <img src={blog1} alt="" className='h-52 w-52'/>
            <p className=' font-serif font-medium '>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis officiis nam voluptatibus vero ipsa minus. Fugit voluptatibus laboriosam error amet, odio minima ut a necessitatibus in perferendis vitae? Delectus facere mollitia, sunt dicta ipsa autem ducimus libero quisquam id consequatur similique, eligendi fuga cum perspiciatis nisi. Modi, ipsam cumque? Fugiat magnam, illum illo mollitia voluptatibus, molestiae officiis animi eius labore dolorem veniam eveniet perspiciatis ab tenetur tempore. Animi repellat necessitatibus tempora molestias asperiores, quaerat officia natus ad suscipit nostrum veritatis eos id dolorem enim velit officiis laudantium nihil autem ipsam eum eligendi excepturi ea! Adipisci!

             
            </p>
          </div>
          <div className='flex flex-col-reverse md:flex-row-reverse justify-items-center p-4 items-center  bg-slate-50 gap-8 mb-12 m-10 shadow-md rounded-xl overflow-hidden hover:shadow-lg'>
            <img src={blog5} alt="" className='h-52 w-52'/>
            <p className=' font-serif font-medium'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis officiis nam voluptatibus vero ipsa minus. Fugit voluptatibus laboriosam error amet, odio minima ut a necessitatibus in perferendis vitae? Delectus facere mollitia, sunt dicta ipsa autem ducimus libero quisquam id consequatur similique, eligendi fuga cum perspiciatis nisi. Modi, ipsam cumque? Fugiat magnam, illum illo mollitia voluptatibus, molestiae officiis animi eius labore dolorem veniam eveniet perspiciatis ab tenetur tempore. Animi repellat necessitatibus tempora molestias asperiores, quaerat officia natus ad suscipit nostrum veritatis eos id dolorem enim velit officiis laudantium nihil autem ipsam eum eligendi excepturi ea! Adipisci!
            </p>
          </div>
        </div>
    );
}

export default About

