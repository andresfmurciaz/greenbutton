const features = [
  {
    name: 'Targeted Compression',
    description:
      'Our shapewear bodysuits provide sculpting in all the right areas — tummy, waist, and back — without compromising comfort. Ideal for daily wear or special occasions.',
    imageSrc: '/b2.jpg',
    imageAlt: 'Woman wearing beige shapewear bodysuit, showing smooth silhouette.',
  },
  {
    name: 'Invisible Under Clothing',
    description:
      'Designed to stay hidden under even the most fitted outfits. Seamless edges and ultra-soft fabric make these fajas your secret confidence booster.',
    imageSrc: '/b1.jpg',
    imageAlt: 'Close-up of shapewear fabric showing seamless edges and soft texture.',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ViewProduct() {
 return (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sculpted Confidence, Everyday
        </h2>
        <p className="mt-4 text-gray-500">
          Discover our exclusive collection of women's shapewear, designed to smooth, shape, and empower.
          Whether you're dressing up or keeping it casual, our fajas help you feel confident and supported.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {features.map((feature, featureIdx) => (
          <div
            key={feature.name}
            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
          >
            <div
              className={classNames(
                featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
              )}
            >
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
            <div
              className={classNames(
                featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
              )}
            >
              <img
                alt={feature.imageAlt}
                src={feature.imageSrc}
                className="aspect-5/2 w-full rounded-lg bg-gray-100 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
