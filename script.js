class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote:(<span><q>Education is our passport<br/> to the future. For<br/> tomorrow belongs to the <br/>people who prepare it<br/> today.</q> – Malcolm X</span>)
    }
    this.quoteCount = 0;
  }
  changeQuote(){
    if(this.quoteCount == 0){
      this.setState({
        quote : (<span><q>School is a building<br/> which has four<br/> walls with tomorrow<br/> inside.</q> – Lon Watters</span>) 
      })
      this.quoteCount = 1;
      console.log("Hi")
    }
    if(this.quoteCount == 1){
      this.setState({
        quote : (<span><q>Education is our passport<br/> to the future. For<br/> tomorrow belongs to the <br/>people who prepare it<br/> today.</q> – Malcolm X</span>) 
      })
      this.quoteCount = 0;
    }
  }
  render(){
    //the logo tag:     <img src="" style={{height:"3em" , width:"3em",position:"absolute",left:"5em"}}/>
    /* content:     <h2 id="welcome" className="subhead"> Welcome </h2>
    <p id="welcomePara"></p>
    <h2 id="admission" className="subhead">Admission</h2>
    <p id="admissionPara" ></p>
    <h2 id="academics" className="subhead">Academics</h2>
    <p id="academicsPara"></p>
    <h2 id="student" className="subhead">Student Speaks</h2>
    <p id="studentPara"></p>
    <h2 id="principal" className="subhead">Principal Speaks</h2>
    <p id="principalPara"></p>*/
    //background for front: 
    return(
    <div className="inner1">
    <div className="header">
    <div>
      <h1 className="heading"> Bridge International School</h1></div>

      <div className="navbar"><strong><a href="" className="navlink">Home</a><a href="" className="navlink">About Us</a><a href="" className="navlink">Academics</a><a href="" className="navlink">School life</a><a href="" className="navlink">Our Students</a><a href="" className="navlink">News</a><a href="" className="navlink">Reach Us</a></strong></div>
    </div>
    <div id="front" data-scroll-type="parallax"><div id="quote"><p id="quotes">{this.state.quote}</p></div></div><div className="slide"><img id="slide1" src=""/></div>
    <div className="content">
    </div>
    <div className="footer"></div>
    </div>
    );
  }
}
ReactDOM.render(<Home/>,document.getElementById('container'))