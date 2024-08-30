import "./style.css";
import { Outlet, useParams, useSearchParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      {/*       <h1>Post {id}</h1>
       */}{" "}
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs.get("page")}`}
      </h1>
      <Outlet />
    </div>
  );
};

export default Posts;
