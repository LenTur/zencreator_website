import React from 'react';
import { ServiceCard } from './ServiceCard';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
  className?: string;
}

export const Services = ({ services, className }: ServicesProps) => {
  return (
    <section className={cn("bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Pick the services you need – we handle the rest.
          </p>
        </div>
        
        <div className="flex flex-col gap-[60px] max-w-[1120px] mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
