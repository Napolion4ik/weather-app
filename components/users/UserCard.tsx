import { Mars, Venus } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import ButtonSave from "@/components/common/ButtonSave";
import LocationMap from "@/components/map/LocationMap";

import type { User } from "./types/user";

interface UserCardProps {
  results: User;
  saveUser?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ results, saveUser }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 bg-white shadow-xl rounded-3xl p-6">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            {results.name.first}
          </h1>
          <div className="flex gap-2 items-center mt-2 text-gray-600">
            <p className="text-2xl capitalize">{results.gender}</p>
            {results.gender === "male" ? (
              <Mars className="text-blue-500 w-6 h-6" />
            ) : (
              <Venus className="text-pink-500 w-6 h-6" />
            )}
          </div>
          <div className="flex gap-4 mt-6">
            {!saveUser && <ButtonSave user={results} />}
            <Link
              href={`/weather/?latitude=${results.location.coordinates.latitude}&longitude=${results.location.coordinates.longitude}`}
              className="cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium uppercase shadow-md transition"
            >
              Weather
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative bg-gray-100 rounded-3xl shadow-lg overflow-hidden w-[250px] h-[250px] flex items-center justify-center">
            <Image
              src={results.picture.large}
              className="rounded-3xl object-cover w-full h-full"
              alt="avatar"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="mt-1 flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition text-center md:text-left">
          <div className="mt-4">
            <LocationMap
              latitude={results.location.coordinates.latitude}
              longitude={results.location.coordinates.longitude}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="bg-blue-50 border border-blue-100 text-center p-6 rounded-3xl shadow-lg hover:shadow-xl transition w-full md:w-max ">
            <a
              href={`mailto:${results.email}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              {results.email}
            </a>
          </div>
          <div className="  bg-blue-50 border border-blue-100  text-center p-6 rounded-3xl shadow-lg hover:shadow-xl transition    w-full">
            <p className="text-gray-700 font-medium">
              {results.location.street.name} {results.location.street.number}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
