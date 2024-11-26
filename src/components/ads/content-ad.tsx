import React, { useEffect, useRef } from 'react';

interface ContentAdProps {
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

const ContentAd = ({ format = 'auto', className = '' }: ContentAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle;
      if (adsbygoogle && adRef.current) {
        adsbygoogle.push({});
      }
    } catch (error) {
      console.error('Ad loading error:', error);
    }
  }, []);

  const formatClasses = {
    auto: 'min-h-[100px]',
    horizontal: 'min-h-[90px]',
    vertical: 'min-h-[600px]',
    rectangle: 'min-h-[250px]'
  };

  return (
    <div className={`overflow-hidden ${formatClasses[format]} ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4546141241525552"
        data-ad-slot="auto"
        data-ad-format={format}
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
};

export default ContentAd;