import Link from "next/link";

interface IPost  {
    title: string,
    id: number,
    body:string
}

async function  fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result: IPost[] = await res.json();

    return result;
}

export default async function Home() {
    const posts: IPost[] = await fetchData();
    return (
        <div>
            <h1>Welcome</h1>
            {posts !== null && (
                <div>
                    {posts.map((post: IPost) => {
                        return (
                            <div className="post" key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <Link href={`/post/${post.id}`}>Read More</Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
