import Score from "../Score/Score";
const Student = (props) => {
  return (  
<div id="card">
  <div class = "card border-dark mb-3">
    <>
    <div class = "card-header">
    <h1>{props.student.name}  </h1>
    </div>
    <div class = "card-body"> 
    
    <p> 
    <div class="bio">
    <h4> Bio: </h4> 
    </div>
    <br /> {props.student.bio} 
    </p>
    
    </div>
    <div class = "card-text">
    {props.student.scores.map((score, idx) => 
    <div class="score">
    <Score key={idx}
    scores={score}
    />
    </div>
    )}
    </div>
    </>
  </div>
</div>

  );
}

export default Student ;