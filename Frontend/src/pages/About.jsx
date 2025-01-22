import { assets } from '../../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]'src={assets.about_image} alt="" />
        <div>
          <p>Welcome to AmiPal, your trusted companion in fostering seamless student-faculty interactions. At AmiPal, we recognize the challenges students face in accessing timely guidance for mental health, career counseling, and academic support.</p>


          <p>AmiPal is committed to excellence in academic technology. We strive to enhance our platform, integrating innovative solutions to improve user experience and provide superior support. Whether you’re booking an appointment for mentorship or seeking academic advice, AmiPal is here to guide you every step of the way.</p>


          <b>Our Vision</b>
          
          <p>Our vision at AmiPal is to create a supportive academic ecosystem where students can easily connect with faculty for personalized guidance. We aim to bridge the gap between students and educators, empowering students to achieve their academic and personal goals with confidence.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
