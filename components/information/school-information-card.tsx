import { GlobeAltIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface SchoolCardProps {
  image: string;
  name: string;
  nameEn: string;
  website: string;
  address: string;
}

export default function SchoolInformationCard({
  image,
  name,
  nameEn,
  website,
  address,
}: SchoolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="bg-blue-900 h-20 flex items-center justify-start px-4">
        <div className="w-16 h-16 bg-white rounded-full overflow-hidden border border-white">
          <Image src={image} alt={nameEn} width={64} height={64} />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-500">{nameEn}</p>
        <div className="flex items-center text-sm text-blue-600 mt-2">
          <GlobeAltIcon className="w-5 h-5 mr-2" />
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </div>
        <div className="flex items-start text-sm text-gray-700 mt-1">
          <MapPinIcon className="w-5 h-5 mr-2 mt-0.5" />
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}
