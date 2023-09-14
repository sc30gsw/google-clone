import Image from 'next/image'

import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Spinner from '@/components/Spinner'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          width={300}
          height={100}
          alt="Google"
        />
        <HomeSearch />
      </div>
    </>
  )
}

export default Home
