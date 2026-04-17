import { useState } from 'react';
import { createPortal } from 'react-dom';

const galleryImages = [
  { src: '/images/gallery/bagatelle-12.jpg', alt: 'Bagatelle collection - luxury passementerie in elegant interior setting' },
  { src: '/images/gallery/bagatelle-14.jpg', alt: 'Bagatelle collection - decorative tassels adorning fine drapery' },
  { src: '/images/gallery/bagatelle-15.jpg', alt: 'Bagatelle collection - ornate trimmings in contemporary living space' },
  { src: '/images/gallery/bagatelle-16.jpg', alt: 'Bagatelle collection - handcrafted fringe detail on upholstery' },
  { src: '/images/gallery/bagatelle-17.jpg', alt: 'Bagatelle collection - bespoke braids enhancing window treatments' },
  { src: '/images/gallery/bagatelle-18.jpg', alt: 'Bagatelle collection - luxury tie-backs in styled interior' },
  { src: '/images/gallery/bagatelle-19.jpg', alt: 'Bagatelle collection - premium passementerie accent pieces' },
  { src: '/images/gallery/bagatelle-20.jpg', alt: 'Bagatelle collection - decorative trims in modern setting' },
  { src: '/images/gallery/bagatelle-22.jpg', alt: 'Bagatelle collection - artisan crafted embellishments' },
  { src: '/images/gallery/bagatelle-23.jpg', alt: 'Bagatelle collection - sophisticated tassel arrangements' },
  { src: '/images/gallery/saisons-02.jpg', alt: 'Saisons collection - luxury passementerie installation in elegant interior' },
  { src: '/images/gallery/savanna-04.jpg', alt: 'Savanna collection - artisan trimmings adorning sophisticated drapery' },
  { src: '/images/gallery/semma-09.jpg', alt: 'Semma collection - handcrafted decorative trims in styled setting' },
  { src: '/images/gallery/seychelles-04.jpg', alt: 'Seychelles collection - bespoke tassels enhancing window treatments' },
  { src: '/images/gallery/sophie-01.jpg', alt: 'Sophie collection - refined passementerie in luxury interior design' },
  { src: '/images/gallery/sophie-11.jpg', alt: 'Sophie collection - elegant tie-backs and trim detailing' },
  { src: '/images/gallery/taos-09.jpg', alt: 'Taos collection - premium decorative embellishments in modern home' },
  { src: '/images/gallery/tiverton-01.jpg', alt: 'Tiverton collection - sophisticated braids and trim installation' },
];

const InspirationGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/30" aria-label="Inspiration Gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">Lifestyle</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Inspiration Gallery
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
            Discover how our Bagatelle collection transforms interiors with timeless elegance and artisan craftsmanship.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl leading-none px-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl leading-none px-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>,
        document.body
      )}
    </section>
  );
};

export default InspirationGallery;
