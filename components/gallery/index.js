'use client';

import Image from 'next/image';
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import GalleryTab from './gallery-tab';

const Gallery = ({ images }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse sm:flex-row gap-8">
      <div className="sm:px-4">
        <TabList className="grid grid-cols-4 sm:grid-cols-1 gap-6">
          {images.map((image, i) => (
            <GalleryTab key={i} url={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full border p-8 rounded-xl">
        {images.map((image, i) => (
          <TabPanel key={i}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image fill src={image} alt="Image" className="object-cover object-center" />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
