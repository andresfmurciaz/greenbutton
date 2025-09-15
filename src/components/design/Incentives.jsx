const perks = [
  {
    name: 'Free Shipping',
    imageSrc: 'https://img.icons8.com/fluency/96/truck.png',
    description:
      'Get free shipping on all orders—because looking great shouldnt come with extra fees. Fast, trackable, and always on time' ,
  },
  {
    name: '30-Day Fit Guarantee',
    imageSrc: 'https://img.icons8.com/fluency/96/warranty.png',
    description:
      'Try it, wear it, love it—or exchange it. Our shapewear comes with a 30-day fit guarantee to make sure youre fully satisfied.',
  },
  {
    name: 'Easy Exchanges & Returns',
    imageSrc: 'https://img.icons8.com/fluency/96/return-purchase.png',
    description:
      'Picked the wrong size or style? No worries. Our hassle-free return and exchange process is designed to keep you confident.',
  },
  {
    name: 'Sustainably Made',
    imageSrc: 'https://img.icons8.com/fluency/96/leaf.png',
    description:
      'We care about your curves—and the Earth. Our shapewear is made with eco-conscious materials and processes.',
  },
]

export default function Incentives() {
  return (
    <div className="bg-gray-50">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:shrink-0">
                <div className="flow-root">
                  <img 
                    alt="" 
                    src={perk.imageSrc} 
                    className="h-20 w-20 object-contain"
                    style={{ filter: 'hue-rotate(90deg) saturate(1.2) brightness(0.9)' }}
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <h3 className="text-base font-semibold text-gray-900">{perk.name}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}