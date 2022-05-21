import React from 'react';
import ReactDOM from 'react-dom/client';

var colors = [
       '#16a085',
       '#27ae60',
       '#2c3e50',
       '#f39c12',
       '#e74c3c',
       '#9b59b6',
       '#FB6964',
       '#342224',
       '#472E32',
       '#BDBB99',
       '#77B1A9',
       '#73A857'
     ];
     
     class Quote extends React.Component {
       constructor(props){
         super(props)
         this.state = {
           error: null,
           number: 0,
           number1: 0,
           quotes: [],
           isLoaded: false
         }
         this.handleChange = this.handleChange.bind(this);
       }
       
       handleChange() {
         let random = Math.floor(Math.random() * (12) + 1);
         let random1 = Math.floor(Math.random() * (102) + 1);
         this.setState({ number: random, number1: random1 });
       }
       
         componentDidMount() {
         fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({
                 quotes: result.quotes,
                 isLoaded: true 
               });
             },
             (error) => {
               this.setState({
                 isLoaded: true,
                 error
               });
             }
           )
       }
      render(){
        const { error, number, number1, quotes, isLoaded } = this.state;            
            <style>{document.body.style.backgroundColor = colors[this.state.number]}</style>
       
         let divStyle = {
                 backgroundColor: colors[this.state.number]
             };
        
        let url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotes.slice(this.state.number1, this.state.number1+1).map(quotes => quotes.quote));
        
        console.log(url);
        
        return(
          
             <div id="quote-box">
                    
            <style>{document.body.style.backgroundColor = colors[this.state.number]}</style>
                     
            
            <div id="text">         
              {quotes.slice(this.state.number1, this.state.number1+1).map(quotes => (
                 <p style={{color: colors[this.state.number]}} key={quotes.id}>
                {quotes.quote}
                 </p>
               ))}
            </div>
            
            <div id="author">
              {quotes.slice(this.state.number1, this.state.number1+1).map(quotes => (
                 <p style={{color: colors[this.state.number]}} key={quotes.id}>
                - {quotes.author}
                 </p>
               ))}
            </div>
             <button style={{backgroundColor: colors[this.state.number]}} onClick = {this.handleChange} title="Get new quote!" id = "new-quote">
                 New Quote
              </button>
            <a id="tweet-quote"  title="Tweet this quote!" target="_top" href={url} style={{backgroundColor: colors[this.state.number]}}>Twitter</a>
        </div>);
      }   
     }
     
     ReactDOM.render(
       <Quote />,
       document.getElementById('root'),
     );