import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g6 from "@/assets/gallery/gallery-6.jpg";
import g7 from "@/assets/gallery/gallery-7.jpg";
import g8 from "@/assets/gallery/gallery-8.jpg";
import g9 from "@/assets/gallery/gallery-9.jpg";
import g10 from "@/assets/gallery/gallery-10.jpg";
import g11 from "@/assets/gallery/gallery-11.jpg";
import g12 from "@/assets/gallery/gallery-12.jpg";
import g13 from "@/assets/gallery/gallery-13.jpg";

const images = [
  { src: g1, title: "Mentorship Programme" },
  { src: g2, title: "Leadership Workshop" },
  { src: g3, title: "Youth Empowerment" },
  { src: g4, title: "Corporate Training" },
  { src: g5, title: "Team Collaboration" },
  { src: g6, title: "Brand Ambassadors" },
  { src: g7, title: "Executive Facilitation" },
  { src: g8, title: "Business Training Graduates" },
  { src: g9, title: "Mentorship Cohort" },
  { src: g10, title: "The Limitless Team" },
  { src: g11, title: "Guest Mentors & Partners" },
  { src: g12, title: "Community Outreach Training" },
  { src: g13, title: "Women Empowerment Session" },
];

const GalleryPage = () => (
  <div>
    <Navbar />
    <section className="pt-28 pb-24 section-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Work in Pictures</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary">Gallery</h1>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden break-inside-avoid">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
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
    <Footer />
  </div>
);

export default GalleryPage;
