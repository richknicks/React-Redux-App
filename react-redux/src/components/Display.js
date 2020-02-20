import { connect } from 'react-redux';
import React,  { useEffect } from 'react';
import  {getJokes}  from '../action/index';
import cuid from 'cuid';



const Display=props=>{
    useEffect(()=>{
         props.getJokes();
    },[])
    console.log('These are props',props)
   
    return(
        <div className="jokes-container">
            {props.jokes.map(jokes=>{
                
                return(
                    <div key={cuid()}className="jokes">
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