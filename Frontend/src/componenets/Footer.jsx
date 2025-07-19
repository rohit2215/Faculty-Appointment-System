import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*--------left section-------*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Connect with experienced faculty counselors for personalized guidance and support. Our platform offers easy appointment booking with career counselors, mental health professionals, academic advisors, and behavioral specialists. Get the help you need to achieve your goals and overcome challenges.</p>
        </div>
        {/*--------center section-------*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/*--------Right section-------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 7881176765</li>
                <li>rahulkumar@gmail.com
                </li>
            </ul>
        </div>
      </div>
    {/* {Copyright text} */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ AmiPal - All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
