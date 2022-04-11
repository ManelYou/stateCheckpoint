import './App.css';
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {  
      Person :{ 
        fullName : "Sarah",
        bio: "React developer with 5 years of experience.", 
        imgSrc:"./Sarah.jpg", 
        profession:"Engineer"
      },
      Shows: false,
      message: "Show me",
      date: new Date()
    };
  };

  ButtonChange = () =>{
    this.setState({
      Shows: !this.state.Shows, 
      message: this.state.Shows ? "Show me": "Hide me"
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ 
      date: new Date()
    });
  }


  render() {
    return(
      <div>
        <button onClick={this.ButtonChange}>{this.state.message}</button>
        
       {/* if(this.state.Shows)
       {
            <h1>FirstName {this.state.Person.fullName}</h1>
            <h1>bio {this.state.Person.bio}</h1>
             <img></img>
            <h1>Profession: {this.state.Person.profession}</h1>
       } */}

        {this.state.Shows && <>
          <h1>FirstName : {this.state.Person.fullName}</h1>
          <h1>Bio : {this.state.Person.bio}</h1>
          <img src={this.state.Person.imgSrc}></img>
          <h1>Profession : {this.state.Person.profession}</h1>
        </>}

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    ) ;
  }


}

export default App;
