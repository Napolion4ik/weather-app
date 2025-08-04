"use client";
import { useCallback } from "react";
import type { User } from "@/components/users/types/user";

const ButtonSave = ({ user }: { user: User }) => {
  const saveToLocalStorage = useCallback(() => {
    const storageOld = JSON.parse(localStorage.getItem("users") || "[]");
    localStorage.setItem("users", JSON.stringify([...storageOld, user]));
  }, [user]);

  return (
    <button
      onClick={saveToLocalStorage}
      className="cursor-pointer px-4 py-1 bg-green-700 rounded-2xl text-white uppercase"
    >
      Save
    </button>
  );
};

export default ButtonSave;
