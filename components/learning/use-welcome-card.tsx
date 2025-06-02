import React from "react";

type UserWelcomeCardProps = {
  username: string;
  role: string;
  image: string;
};

function UserWelcomeCard({ username, role, image }: UserWelcomeCardProps) {
  return (
    <div className="flex items-center gap-4 pl-6 border shadow-md bg-white">
      <img
        src={image}
        alt={`${username}'s profile`}
        className="h-16 w-16 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Welcome, {username}!
        </h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

export default UserWelcomeCard;
