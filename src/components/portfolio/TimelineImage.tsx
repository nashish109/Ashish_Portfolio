interface TimelineImageProps {
  src: string;
  alt: string;
}

export const TimelineImage: React.FC<TimelineImageProps> = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="h-24 w-24 border border-cyan-300/30 object-cover shadow-[0_0_24px_rgba(34,211,238,0.18)]" 
    />
  );
};
