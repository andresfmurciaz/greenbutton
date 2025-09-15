'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'ShapewearBodysuit',
      name: 'Shapewear Bodysuit',
      featured: [
        {
          name: 'Shapewear classic',
          href: '#',
          imageSrc: 'https://green-button.us/wp-content/uploads/2025/06/Grupo-9199.png',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
    
      ],
     sections: [
  [
    {
      id: 'bodysuits',
      name: 'Bodysuit Shapers',
      items: [
        { name: 'Classic Shaping Bodysuit', href: '#' },
        { name: 'Butt-Lifting Bodysuit', href: '#' },
        { name: 'Front Zipper Bodysuit', href: '#' },
        { name: 'Adjustable Straps Bodysuit', href: '#' },
        { name: 'Post-Surgery Bodysuit', href: '#' },
        { name: 'Lace Trim Bodysuit', href: '#' },
      ],
    },
  ],
  [
    {
      id: 'clothing',
      name: 'Popular Styles',
      items: [
        { name: 'Tummy Control Bodysuit', href: '#' },
        { name: 'Back Support Bodysuit', href: '#' },
        { name: 'Full Leg Coverage Bodysuit', href: '#' },
        { name: 'Open Gusset Bodysuit', href: '#' },
        { name: 'Invisible Under Clothes', href: '#' },
        { name: 'Everyday Wear Bodysuit', href: '#' },
      ],
    },
  ],
  [
    {
      id: 'brands',
      name: 'Top Brands',
      items: [
        { name: 'G’smile Premium', href: '#' },
        { name: 'FiguraFit', href: '#' },
        { name: 'MoldeaMax', href: '#' },
        { name: 'CurvaBelle', href: '#' },
        { name: 'Silhouette Pro', href: '#' },
      ],
    },
  ],
],

    },
    {
      id: 'ShapewearShorts',
      name: 'Shapewear Shorts',
      featured: [
        {
          name: 'Shapewear classic',
          href: '#',
          imageSrc: 'https://green-button.us/wp-content/uploads/2025/06/Grupo-9199.png',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
       
      ],
      sections: [
  [
    {
      id: 'shorts',
      name: 'Shaping Shorts',
      items: [
        { name: 'High-Waisted Shorts', href: '#' },
        { name: 'Butt-Lifting Shorts', href: '#' },
        { name: 'Seamless Invisible Shorts', href: '#' },
        { name: 'Thigh Control Shorts', href: '#' },
      ],
    },
  ],
  [
    {
      id: 'clothing',
      name: 'Best Sellers',
      items: [
        { name: 'Flat Tummy Shorts', href: '#' },
        { name: 'Anti-Slip Lace Shorts', href: '#' },
        { name: 'Thermal Shaping Shorts', href: '#' },
        { name: 'Active Shaper Shorts', href: '#' },
        { name: 'Open Gusset Shorts', href: '#' },
      ],
    },
  ],
  [
    {
      id: 'brands',
      name: 'Recommended Brands',
      items: [
        { name: 'GreenFit', href: '#' },
        { name: 'G’smile Essentials', href: '#' },
        { name: 'PowerShape', href: '#' },
        { name: 'SlimWear', href: '#' },
      ],
    },
  ],
],

    },
  ],
  pages: [
    { name: 'Shapewear Full Bodysuit', href: '#' },
 
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="space-y-4">
                      {category.featured.map((item, itemIdx) => (
                        <div key={itemIdx} className="group relative overflow-hidden rounded-md bg-gray-100">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full object-cover group-hover:opacity-75"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end">
                            <div className="bg-white/60 p-4 text-base sm:text-sm">
                              <a href={item.href} className="font-medium text-gray-900">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                Shop now
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((column, columnIdx) => (
                      <div key={columnIdx} className="space-y-10">
                        {column.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

         
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                {category.featured.map((item, itemIdx) => (
                                  <div
                                    key={item.name}
                                    className={classNames(
                                      itemIdx === 0 ? 'col-span-2' : '',
                                      'group relative overflow-hidden rounded-md bg-gray-100',
                                    )}
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className={classNames(
                                        itemIdx === 0 ? 'aspect-2/1' : 'aspect-square',
                                        'w-full object-cover group-hover:opacity-75',
                                      )}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end">
                                      <div className="bg-white/60 p-4 text-sm">
                                        <a href={item.href} className="font-medium text-gray-900">
                                          <span aria-hidden="true" className="absolute inset-0" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                                {category.sections.map((column, columnIdx) => (
                                  <div key={columnIdx} className="space-y-10">
                                    {column.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${category.id}-${section.id}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${category.id}-${section.id}-heading`}
                                          className="mt-4 space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              {/* Logo */}
              <a href="#" className="flex">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://green-button.us/wp-content/uploads/2025/05/Enmascarar-grupo-1813.png"
                  className="h-8 w-auto"
                />
              </a>

              <div className="flex flex-1 items-center justify-end">
           

                {/* Search */}
                <a href="#" className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>

                {/* Account */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                  <span className="sr-only">Account</span>
                  <UserIcon aria-hidden="true" className="size-6" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
