import { useParams } from "react-router-dom";
const Project = () => {
  const { slug } = useParams();
  return <div>{slug}</div>;
};

export default Project;
