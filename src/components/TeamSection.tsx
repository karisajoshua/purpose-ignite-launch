import mukami from "@/assets/team/mukami-nyaga.jpg";
import angolio from "@/assets/team/angolio-ashiona.jpg";
import elisha from "@/assets/team/elisha-bwatuti.jpeg";
import grace from "@/assets/team/grace-kasamba.jpg";
import josiah from "@/assets/team/josiah-kemboi.jpg";

const team = [
  { name: "Mukami Nyaga", role: "Founder & Lead Consultant", img: mukami },
  { name: "Elisha Bwatuti", role: "Senior Consultant & Facilitator", img: elisha },
  { name: "Grace Kasamba", role: "Operations & Client Experience Lead", img: grace },
  { name: "Josiah Kemboi", role: "Communications & Digital Marketing Lead", img: josiah },
  { name: "Angolio Ashiona", role: "Learning & Development Associate", img: angolio },
];

const TeamSection = () => (
  <section id="team" className="section-navy py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our People</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary">The Team</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {team.map((t) => (
          <div key={t.name} className="text-center group">
            <div className="overflow-hidden mb-4 aspect-square">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h4 className="font-heading font-bold text-secondary">{t.name}</h4>
            <p className="text-xs text-muted/60 mt-1">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
