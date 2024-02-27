import { supabase } from "~/lib/supabase";

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("views").insert({
      Title: "React",
      Description: "New Updated Project",
      ProjectDeadline: "28 Dec, 2024",
      Priority: "high",
      Assignee: "Namit",
    });

    if (data) console.log(data);
    if (error) console.log(error);
  };

  setNewView();

  return (
    <div>
      <div>Hello</div>
    </div>
  );
}
