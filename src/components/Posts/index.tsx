import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { api } from "../../services/api";

import { Container, Post } from "./styles";

interface Posts {
  id: number,
  title: string,
  content: string,
  liked: boolean,
  createdAt: string,
}

export function Posts() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    api.get('/posts')
      .then(response => setPosts(response.data.posts))
  }, []);

  return (
    <Container>
      {posts.map(post => (
        <Post key={post.id}>
          <header>
            <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(post.createdAt))}</span>
            <button type="button">
              {post.liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </header>
          <div>
            <h1>{post.title}</h1>
            <p>
              {post.content}
            </p>
          </div>
        </Post>
      ))}
    </Container>
  );
}
