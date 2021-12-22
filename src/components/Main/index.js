import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Loading } from "../Loading";
import { Posts } from "../Posts";


export function Main() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    api.get('/posts')
    .then(response => setPosts(response.data));
  }, []); 

  return (
    <div>
      {posts ? <Posts posts={posts} /> : <Loading/>}
    </div>
  );
}

