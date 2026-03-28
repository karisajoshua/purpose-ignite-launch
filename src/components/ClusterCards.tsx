import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

interface Programme {
  slug: string;
  title: string;
  modules: { title: string }[];
}

interface ClusterCardsProps {
  cluster: { name: string; description: string; programmes: Programme[] };
}

const ClusterCards = ({ cluster }: ClusterCardsProps) => {
  const cardsRef = useStaggerReveal(":scope > *", 100);
  return (
    <div key={cluster.name}>
      <h3 className="text-xl md:text-2xl text-primary mb-2">{cluster.name}</h3>
      <p className="text-sm text-muted-foreground mb-6">{cluster.description}</p>
      <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cluster.programmes.map((p) => (
          <Link
            key={p.slug}
            to={`/programmes/${p.slug}`}
            className="border border-border p-8 card-lift group block"
          >
            <h4 className="text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors mb-2">
              {p.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">{p.modules.length} Modules</p>
            <span className="inline-flex items-center gap-1 text-secondary text-sm font-bold tracking-wide">
              View Programme <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClusterCards;
