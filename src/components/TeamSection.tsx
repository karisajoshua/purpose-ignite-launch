import mukami from "@/assets/team/mukami-nyaga.jpg";
import angolio from "@/assets/team/angolio-ashiona.jpg";
import grace from "@/assets/team/grace-kasamba.jpg";
import josiah from "@/assets/team/josiah-kemboi.jpg";

const team = [
  { name: "Mukami Nyaga", role: "Founder & Lead Consultant", img: mukami, bio: "A leadership development, organizational culture, and capacity-building practitioner with over 15 years of experience spanning leadership, human resource management, training, facilitation, community development, entrepreneurship, humanitarian work, and organizational development. At Limitless, Mukami provides strategic direction and leads programmes and consultancy engagements focused on leadership, culture, people productivity, capacity building, mentorship, and transformative learning." },
  { name: "Josiah Kemboi", role: "Communications & Digital Marketing Lead", img: josiah, bio: "Josiah drives the organization's digital presence, content development, brand communication, and audience engagement. He combines strategic communication with creative digital execution to translate ideas, programmes, and services into compelling content that strengthens brand visibility and connects Limitless with its audiences." },
  { name: "Angolio Ashiona", role: "Learning & Development Associate", img: angolio, bio: "Angolio is a Learning & Development professional with experience in organizational effectiveness, team development, facilitation, and collaborative problem-solving. He brings a practical and people-centred approach to learning and contributes to programmes that build capability, strengthen teams, and enable organizational growth." },
  { name: "Kris Yadah", role: "Operations & Client Experience Associate", bio: "Kris supports seamless programme delivery, client engagement, and operational coordination. She brings strong experience in programme management, stakeholder coordination, training and event delivery, and client experience, with a keen focus on quality, efficiency, and attention to detail. At Limitless, Kris helps ensure programmes and client engagements are responsive, well-coordinated, and delivered to a high standard." },
  { name: "Grace Kasamba", role: "Administrative Support Associate", img: grace, bio: "Grace provides dependable administrative and coordination support that enables the team to operate efficiently and deliver effectively. She brings strong organizational skills, attention to detail, and a commitment to accuracy and confidentiality across documentation, scheduling, communication, records management, and day-to-day administrative functions." },
];

const TeamSection = () => (
  <section id="team" className="section-navy py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16"><p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our People</p><h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary">The Team</h2></div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {team.map((t) => (
          <article key={t.name} className="border border-secondary/20 bg-white/5 p-6 md:p-8">
            <div className="grid sm:grid-cols-[150px_1fr] gap-6 items-start">
              {t.img ? <img src={t.img} alt={t.name} className="w-full aspect-square object-cover object-top" loading="lazy" /> : <div className="w-full aspect-square bg-secondary/10 border border-secondary/20 flex items-center justify-center"><span className="font-heading text-4xl text-secondary">KY</span></div>}
              <div><h3 className="font-heading font-bold text-xl text-secondary">{t.name}</h3><p className="text-sm text-muted/70 mt-1 mb-4">{t.role}</p><p className="text-sm text-muted/75 leading-relaxed">{t.bio}</p></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default TeamSection;
