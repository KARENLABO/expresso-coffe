import "./styles.scss";
import NavBar from "../NavBar";
function Content({ title, children }) {
  return (
    <>
      <NavBar />
      <div className="content-white">
        <h1 className="title-content">{title}</h1>
        {children}
      </div>
    </>
  );
}

export default Content;
