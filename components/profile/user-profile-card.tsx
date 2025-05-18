import Image from "next/image";
import {
  PencilSquareIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaTransgender } from "react-icons/fa";

interface UserProfileProps {
  profileImage: string;
  fullName: string;
  khmerName: string;
  role: string;
  gender: string;
  phone: string;
  email: string;
}

export default function UserProfileCard({
  profileImage,
  fullName,
  khmerName,
  role,
  gender,
  phone,
  email,
}: UserProfileProps) {
  return (
    <div className="mx-auto bg-white rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 relative rounded-full overflow-hidden">
            <Image
              src={profileImage}
              alt={fullName}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{fullName}</h1>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center gap-2">
          <PencilSquareIcon className="w-5 h-5" />
          <span className="max-sm:hidden">កែប្រែ</span>
        </button>
      </div>

      <hr className="my-4" />

      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <UserIcon className="w-5 h-5 text-gray-600" />
          <span className="w-28 text-gray-600">ឈ្មោះ:</span>
          <span>{khmerName}</span>
        </div>
        <div className="flex items-center gap-4">
          <FaTransgender className="w-5 h-5 text-gray-600" />
          <span className="w-28 text-gray-600">ភេទ:</span>
          <span>{gender}</span>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-5 h-5 text-gray-600" />
          <span className="w-28 text-gray-600">លេខទូរស័ព្ទ:</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-4">
          <EnvelopeIcon className="w-5 h-5 text-gray-600" />
          <span className="w-28 text-gray-600">អ៊ីមែល:</span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}
