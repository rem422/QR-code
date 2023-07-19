import qrCodeImg from '../../assets/images/image-qr-code.png'

const Card = () => {
  return (
    <div className="container flex items-center justify-center h-screen my-auto px-6">
        <div className='bg-white drop-shadow-xl p-4 w-full max-w-xs rounded-md overflow-hidden'>
            <div className='text-center'>
                <div className='max-w-[400px] mx-auto'>
                    <img src={qrCodeImg} alt="image" className='w-full rounded-md'/>
                </div>
                <div className='text-center mt-6'>
                    <h1 className='text-xl text-headerColor font-bold'>Improve your front-end skills by building projects</h1>
                    <p className='text-textColor mt-6'>Scan the QR code to visit Frontend Mentors and take your coding skills to the next level.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card