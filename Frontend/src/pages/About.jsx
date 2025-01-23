import { assets } from '../../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]'src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to AmiPal, your trusted companion in fostering seamless student-faculty interactions. At AmiPal, we recognize the challenges students face in accessing timely guidance for mental health, career counseling, and academic support.</p>


          <p>AmiPal is committed to excellence in academic technology. We strive to enhance our platform, integrating innovative solutions to improve user experience and provide superior support. Whether you’re booking an appointment for mentorship or seeking academic advice, AmiPal is here to guide you every step of the way.</p>


          <b className='text-gray-800'>Our Vision</b>
          
          <p>Our vision at AmiPal is to create a supportive academic ecosystem where students can easily connect with faculty for personalized guidance. We aim to bridge the gap between students and educators, empowering students to achieve their academic and personal goals with confidence.</p>
        </div>
      </div>
      <div className='text-xl-my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE:
        </b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PERSONALIZATION:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
