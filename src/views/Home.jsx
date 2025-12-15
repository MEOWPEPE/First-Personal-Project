import { useEffect, useState } from "react";
import { UserTable } from "../components/UserTable";
import { AdminTable } from "../components/AdminTable";
import axios from "axios";

// const API_GET = "https://jsd5-mock-backend.onrender.com/members";

const API = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

// const API = "http://localhost:3000/members";

export default function Home() {
  const [view, setView] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch {
      alert("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-row gap-4 p-4 w-full h-screen bg-slate-300">
      <div className="border-4 border-blue-700 w-full md:w-1/3 flex flex-col justify-center items-center">
        <img src="https://cdn.displate.com/artwork/270x380/2024-05-04/35c82a3f721ea5e932d531c5c00f1c7d_337c6098202a78affa7bf5b285fb2461.jpg"></img>
      </div>
      <div className="border-4 border-blue-700 w-full md:w-1/3 flex flex-col">
        <div>
          <h2 className="border-blue-700 text-blue-400 text-2xl font-bold flex justify-center p-4 ">
            All Project
          </h2>
        </div>
        <div className="p-4">
          <div className="border-b-4 border-blue-700 p-4">
            <h3>Project 1 : Portfolio Website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              veritatis maxime eos, quos magni pariatur saepe recusandae ut et
              beatae quis eaque porro harum laudantium cum eligendi labore
              voluptate ea.
            </p>
          </div>
          <div className="border-b-4 border-blue-700 p-4">
            <h3>Project 2 : XXXXXX</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, consequuntur ut. Maxime, ipsa ad? Animi quia
              perspiciatis explicabo id, facilis, molestiae ipsum consequatur ad
              voluptas, enim quidem quae error praesentium?
            </p>
          </div>
          <div className="border-b-4 border-blue-700 p-4">
            <h3>Project 3 : XXXXXX</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, consequuntur ut. Maxime, ipsa ad? Animi quia
              perspiciatis explicabo id, facilis, molestiae ipsum consequatur ad
              voluptas, enim quidem quae error praesentium?
            </p>
          </div>
        </div>
      </div>

      <div className="border-4 border-blue-700 w-full md:w-1/3 flex flex-col items-center">
        <div>
          <h2 className=" text-blue-400 text-2xl font-bold flex justify-center p-4">
            Update Log
          </h2>
        </div>
        <div>
          <div className="font-mono flex justify-between p-4 text-rose-400">
            <span>December 15th, 2025</span>
            <span>by narathorn</span>
          </div>
        </div>
      </div>
    </div>

    // <div className="min-h-screen p-6 gap-y-6 flex flex-col justify-start w-full">
    //   <section className="mt-20 text-5xl font-extrabold text-center">
    //     <h1>Generation Thailand</h1>
    //     <h1>React Assessment</h1>
    //   </section>
    //   <section className="flex justify-center gap-x-3 font-bold">
    //     <button
    //       onClick={() => setView("user")}
    //       className=" p-5 bg-sky-200 flex rounded-2xl cursor-pointer border hover:bg-sky-300"
    //     >
    //       User Section
    //     </button>
    //     <button
    //       onClick={() => setView("admin")}
    //       className=" p-5 bg-rose-100 flex rounded-2xl cursor-pointer border hover:bg-rose-200"
    //     >
    //       Admin Section
    //     </button>
    //   </section>
    //   <section className="w-full flex justify-center gap-x-3">
    //     {view === "user" ? (
    //       <section className=" p-5  flex">
    //         <UserTable users={users} />
    //       </section>
    //     ) : view === "admin" ? (
    //       <section className=" p-5  flex">
    //         {" "}
    //         <AdminTable
    //           users={users}
    //           setUsers={setUsers}
    //           fetchUsers={fetchUsers}
    //           API={API}
    //         />
    //       </section>
    //     ) : null}
    //   </section>
    // </div>
  );
}
