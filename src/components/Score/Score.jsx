const Score = (props) => {
  return ( 
    <>
    <div>
      <p> <strong>Score: </strong> {props.scores.score}</p>
      <p> Date: {props.scores.date}</p>
    </div>
    </>
  );
}

export default Score ;