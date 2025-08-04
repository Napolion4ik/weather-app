"use client";

import { useState } from "react";
import UserCard from "./UserCard";

import type { User } from "./types/user";

type UsersProps = {
  initialUsers: User[];
};

function Users({ initialUsers }: UsersProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const loadMore = async () => {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();
    setUsers((prev) => [...prev, ...data.results]);
  };

  return (
    <div className="w-full">
      {users.map((user, i) => (
        <UserCard key={i} results={user} />
      ))}

      <button
        onClick={loadMore}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer block mx-auto hover:bg-blue-600"
      >
        Download more
      </button>
    </div>
  );
}

export default Users;
