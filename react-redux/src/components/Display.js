import { connect } from 'react-redux';
import React,  { useEffect } from 'react';
import  {getJokes}  from '../action/index';




const Display=props=>{
    useEffect(()=>{
         props.getJokes();
    },[])
    console.log('These are props',props)
   
    return(
        <div className="jokes-container">
            {props.jokes.map(jokes=>{
                
                return(
                    <div className="jokes">
                        <p>{jokes.setup}</p>
                        <p>{jokes.punchline}</p>
                    </div>
                )
            })}
            
        </div>
    )
}




const mapStateToProps = state => {
    return {
        
        jokes: state.jokes
    }
  }




export default connect(mapStateToProps, {getJokes})(Display)