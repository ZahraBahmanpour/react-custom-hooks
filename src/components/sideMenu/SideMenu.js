import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openTab, setCrudMode } from "../../redux/features/tab/tabsSlice";
import { CRUD_MODE_CREATE } from "../../config/constants";
import useFetch from "../../hooks/useFetch";
import { fetchPosts } from "../../redux/features/post/postSlice";

function SideMenu() {
  const dispatch = useDispatch();
  const { data, loading } = useFetch(fetchPosts, "posts");
  const handleCreateNew = () => {
    const id = Math.floor(Math.random() * 10000);
    const title = prompt("Enter file name", "Untitled");
    dispatch(setCrudMode({ crudMode: CRUD_MODE_CREATE }));
    dispatch(openTab({ id, title, body: "", tempBody: "" }));
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ListGroup>
      <ListGroup.Item onClick={handleCreateNew}>
        <Link to="#">Create File</Link>
      </ListGroup.Item>
      {data.map((item) => (
        <ListGroup.Item
          key={item.id}
          onClick={() => dispatch(openTab({ ...item, tempBody: item.body }))}
        >
          <Link to={`/${item.id}`}>{item.title.slice(0, 15)}...</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SideMenu;
