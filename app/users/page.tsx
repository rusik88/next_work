import {notFound} from "next/navigation";

import Button from "@/app/components/Button";

export const dynamic = "force-dynamic";

async function getUsers() {
    try {
        const res: any = await fetch("https://jsonplaceholder.typicode.com/users", {
            cache: "no-store"
        });

        if(res.status === 404) notFound();

        if(!res.ok) throw new Error("Error get Users from placeholder json");

        return await res.json();
    } catch(e) {
        notFound();
        //return [];
    }


}

async function UsersPage() {
    const users = await getUsers();
    return (
        <div>
            <h1>Users page</h1>
            {users.map((user: {id: number, name: string}) => {
                return (<h2 key={user.id}>{user.name}</h2>);
            })}
            <Button text={"Click Me Button 111"} url={process.env.NEXT_URL} />
        </div>
    );
}

export default UsersPage;