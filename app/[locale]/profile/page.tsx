import UserProfileCard from "@/components/profile/user-profile-card";
import { userProfileMockData } from "@/lib/user-profile-mock-data";

export default function ProfilePage() {
  const user = userProfileMockData[0];

  return (
    <div>
      <UserProfileCard
        profileImage={user.profileImage}
        fullName={user.fullName}
        khmerName={user.khmerName}
        role={user.role}
        gender={user.gender}
        phone={user.phone}
        email={user.email}
      />
    </div>
  );
}
