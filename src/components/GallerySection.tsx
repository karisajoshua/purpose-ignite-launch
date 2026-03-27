import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";

const images = [
  { src: g1, title: "Mentorship Programme" },
  { src: g2, title: "Leadership Workshop" },
  { src: g3, title: "Youth Empowerment" },
  { src: g4, title: "Corporate Training" },
];

const GallerySection = () => (
  <section id="gallery" className="section-white py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Work</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">Gallery</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative group overflow-hidden aspect-square">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-secondary font-heading text-lg font-bold">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
