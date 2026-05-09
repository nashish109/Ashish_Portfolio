interface TimelineImageProps {
  src: string;
  alt: string;
}

export const TimelineImage: React.FC<TimelineImageProps> = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="rounded-2xl border border-gray-700 shadow-2xl w-24 h-24 object-cover" 
    />
  );
};