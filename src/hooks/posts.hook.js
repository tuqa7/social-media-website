import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";


const usePosts = (posts) => {

  const [params] = useSearchParams();
  const queryfromurl = params.get("query") || "";
  const queryfromurlLikes = params.get("likes") || "";
  const queryfromurlcommants = params.get("commants") || "";
  const filteredPosts = useMemo(() =>
   posts.filter(
      (post) => {
        const searchquery = queryfromurl.toLowerCase();


        let ismatching = false;
        // console.log(post);
        ismatching =
          (post.post_text.toLowerCase().includes(searchquery) ||
            post.user_name.toLowerCase().includes(searchquery)) &&
          post.likes_num > queryfromurlLikes &&
          post.commants_num > queryfromurlcommants;
        return ismatching;
      },
      [queryfromurl, posts, queryfromurlLikes, queryfromurlcommants]
    )
  );
  return filteredPosts;
};

export default usePosts;
