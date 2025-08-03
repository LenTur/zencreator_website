import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    image?: string; // Add image prop
  };
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const hasButton = service.title === 'AI Dating Profiles';

  return (
    <Card className="bg-[#0F172A] text-white rounded-3xl overflow-hidden border-none w-full h-[400px]">
      <div className="flex flex-col md:flex-row items-stretch h-full">
        <CardContent className="flex flex-col justify-center p-8 md:p-10 w-full md:w-1/3">
          <div>
            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
            <p className="text-white/70">{service.description}</p>
          </div>
          {hasButton && (
            <Button variant="secondary" className="mt-8 bg-white text-[#0F172A] hover:bg-gray-200 rounded-lg h-12 px-6 self-start">
              Learn More
            </Button>
          )}
        </CardContent>
        <div className="w-full md:w-2/3 p-4 flex items-center justify-center">
          {service.image ? (
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover rounded-2xl" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl">
              {/* Placeholder */}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
