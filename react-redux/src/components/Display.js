import { connect } from 'react-redux';



const Display=props=>{
    return(
        <div>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}




const mapStateToProps = state => {
    return {
        
        setup: state.setup,
        punchline: state.punchline
    }
  }




export default connect(mapStateToProps, {getJokes})(Display)