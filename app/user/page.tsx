import Users from "@/components/users/Users";

const User = async () => {
  const result = await fetch("https://randomuser.me/api/");

  const { results } = await result.json();

  return (
    <section>
      <div className="w-full max-w-6xl mx-auto px-4">
        <Users initialUsers={results} />
      </div>
    </section>
  );
};

export default User;
