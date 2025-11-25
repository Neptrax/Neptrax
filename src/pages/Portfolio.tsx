import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  const projectsData: Project[] = [
    { name: 'Wilde Brands', description: 'E-commerce food and accessories brand', url: 'https://www.wildebrands.com/', image: '/portfolio/wildebrands.png' },
    { name: 'Jeton Wallet', description: 'Digital payment and money transfer platform', url: 'https://www.jeton.com/', image: '/portfolio/jeton.png' },
    { name: 'Foursquare Church', description: 'Christian denomination church network website', url: 'https://www.foursquare.org/', image: '/portfolio/church.png' },
    { name: 'Rothy\'s Shoes', description: 'Sustainable footwear made from recycled materials', url: 'https://rothys.com/', image: '/portfolio/rothys.png' },
    { name: 'Inflow CRM', description: 'Cloud-based customer relationship management software', url: 'https://inflowcore.netlify.app/', image: '/portfolio/inflow.png' },
    { name: 'Sono Restaurant', description: 'Fine dining Japanese restaurant and venue', url: 'https://sonorestaurant.com.au/', image: '/portfolio/sono.png' },
    { name: 'USA Home Remodeling', description: 'Home renovation and construction services', url: 'https://usahomeremodeling.com/', image: '/portfolio/usa.png' },
    { name: 'Big Night Events', description: 'Restaurant and special events venue space', url: 'https://www.bignight.com/', image: '/portfolio/bignight.png' },
    { name: 'Seraat Platform', description: 'Business news and financial data platform', url: 'https://www.seraat.com/', image: '/portfolio/seraat.png' },
    { name: "Let's Encrypt", description: 'Free SSL certificate authority for websites', url: 'https://letsencrypt.org/', image: '/portfolio/letsencrypt.png' },
    { name: 'Vintage Modern Films', description: 'Creative video production company portfolio', url: 'https://www.vintagemodernfilms.com/', image: '/portfolio/vintagemodernfilms.png' },
    { name: 'University of Richmond', description: 'Private university academic institution website', url: 'https://www.richmond.edu/', image: '/portfolio/university.png' },
    { name: 'Nalgene Bottles', description: 'Durable plastic water bottles and containers', url: 'https://nalgene.com/', image: '/portfolio/nalgene.png' },
    { name: 'Pho Cafe', description: 'Vietnamese restaurant serving pho and noodles', url: 'https://www.phocafe.co.uk/', image: '/portfolio/pho.png' },
    { name: 'Rasht Delectables', description: 'Gourmet food products and specialty foods', url: 'https://rashtdelectables.com/', image: '/portfolio/rasht.png' },
    { name: 'Spirit Dog Training', description: 'Online dog training courses and resources', url: 'https://spiritdogtraining.com/', image: '/portfolio/spiritdog.png' },
    { name: 'SGUA Architects', description: 'Architecture and urban design firm portfolio', url: 'https://sgua.com.au/', image: '/portfolio/sgua.png' },
    { name: 'Breyer Construction', description: 'Custom home building and remodeling services', url: 'https://www.breyerconstruction.com/', image: '/portfolio/breyer.png' },
    { name: '99% Invisible', description: 'Design and architecture podcast publication', url: 'https://99percentinvisible.org/', image: '/portfolio/99.png' },
    { name: 'Sweeten Platform', description: 'Home renovation contractor matching platform', url: 'https://sweeten.com/', image: '/portfolio/sweeten.png' },
  ];

  useEffect(() => {
    const shuffled = [...projectsData];
    setProjects(shuffled);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  const handleImageClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a3f] via-[#0a142f] to-[#0d1117] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#f1f5f9] mb-4">
            Our Work Speaks for Itself.
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer"
            >
              <div 
                className="relative h-64 bg-gradient-to-br from-[#0f172a] to-[#2563eb] overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(project.url)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-40"></div>
                
                {/* Hover overlay with visit website button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#828787] text-[#f1f5f9] font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    Visit Website
                    <ExternalLink size={16} className="transition-transform" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#f1f5f9] mb-2">{project.name}</h3>
                <p className="text-[#94a3b8] text-sm leading-tight">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}