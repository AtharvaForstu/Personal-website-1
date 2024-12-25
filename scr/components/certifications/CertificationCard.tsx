import { Certificate } from '../../types/certificates';
import { getDefaultImagePath } from '../../utils/certificateUtils';

interface CertificationCardProps {
  certificate: Certificate;
}

export default function CertificationCard({ certificate }: CertificationCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = getDefaultImagePath(certificate.organization);
  };

  return (
    <div className="relative group p-6 rounded-lg border border-gray-800 overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={certificate.imagePath}
        alt={`${certificate.organization} - ${certificate.title}`}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
        onError={handleImageError}
      />
      <div className="relative z-10 bg-black bg-opacity-80 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
        <p className="text-gray-400 mb-4">{certificate.organization}</p>
        <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          Certificate
        </span>
      </div>
    </div>
  );
}