"use client";
import { useState, useEffect } from "react";
import UserCard from "@/components/users/UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      <p>There are no saved users</p>;
    }
  }, []);

  return (
    <div className="w-6xl mx-auto">
      {users.map((user, i) => (
        <UserCard key={i} saveUser={true} results={user} />
      ))}
    </div>
  );
}
