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
      <div className="gap-2 border-4 border-blue-700 w-full md:w-1/3 flex flex-col items-center font-mono">
        <h2 className="text-blue-700 text-2xl font-bold flex justify-center p-4">
          Certificate
        </h2>
        <div className="flex flex-col items-center">
          <img
            class="h-73 w-136 object-contain border-2 border-blue-700"
            src="https://mycourseville-default.s3.ap-southeast-1.amazonaws.com/system_course_files/2022_2/36996/cvcert_usercert/certificate_36996_1410428-1410428-17399645626721.jpg"
          ></img>
          <p className="p-4">
            <u>
              <strong>How do Generative AI and ChatGPT work?</strong>
            </u>
            <br></br>Chulalongkorn University (Chula Mooc)<br></br>
            <em>issued Feb 2025</em>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            class="h-73 w-136 object-contain border-2 border-blue-700"
            src="https://mycourseville-default.s3.ap-southeast-1.amazonaws.com/system_course_files/2022_2/36996/cvcert_usercert/certificate_36996_1410428-1410428-17399645626721.jpg"
          ></img>
          <p className="p-4">
            <u>
              <strong>How do Generative AI and ChatGPT work?</strong>
            </u>
            <br></br>Chulalongkorn University (Chula Mooc)<br></br>
            <em>issued Feb 2025</em>
          </p>
        </div>
      </div>
      <div className="border-4 border-blue-700 w-full md:w-1/3 flex flex-col font-mono">
        <div>
          <h2 className="text-blue-700 text-2xl font-bold flex justify-center p-4">
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
          <h2 className="text-blue-700 text-2xl font-bold flex justify-center p-4">
            Update Log
          </h2>
        </div>
        <div className="font-mono p-4">
          <div className="flex justify-between text-rose-400">
            <div>
              <h3>December 15th, 2025 </h3>
            </div>
            <div>
              <h3>by MEOPEPE</h3>
            </div>
          </div>
          <div>
            First commit for navbar,home page,contact page not dressing them up
            yet
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
