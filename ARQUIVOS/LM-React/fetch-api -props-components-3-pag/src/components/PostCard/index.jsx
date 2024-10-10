import './styles.css'

export const PostCard = ({title, cover, body, id}) => {
  //console.log(props)
  // const { post } = props;

  return (
    // <h1>Oi</h1>
    <div className="post">
      <img src={cover} alt={title} />
      <div  className="post-content">
        <h2>{title}{id}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
