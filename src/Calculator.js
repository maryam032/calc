import React from 'react'
import './Button.css'
import *as math from 'mathjs';
class Calculator extends React.Component{
    constructor (props)
    {
        super(props);
        this.state=({
            input:'',
            
        })
    }
    onClickHandler=(e)=>
    {
        this.setState({
            input:this.state.input.concat(e.target.value)
        })
    }
    onClickCancel=()=>
    {
        this.setState({
            input:'',
        })
    }
    onClickAnswer=()=>
    {
        this.setState({
            input:math.evaluate(this.state.input)
        })
        
    }
    render()
    {
        return(

                <div style={{border:'1px solid black',width:'300px',height:410,marginLeft:'auto',marginRight:'auto',display:'block',marginTop:150,backgroundColor:'#F7DC6F  '}}>
                   <div style={{height:90,width:'100%',marginLeft:0,backgroundColor:'white',outline:'none'}}>
                       <span style={{marginRight:5,float:'right',textAlign:'right',fontSize:30,color:'black',marginTop:50,}} >{this.state.input}</span> 
                    </div>
                        <input  style={{backgroundColor:'#17202A  ',outline:'none',border:'none',fontSize:15,color:'white',float:'left',marginLeft:15,marginTop:30,width:195,height:50,fontWeight:'bold',fontSize:20}} type="button"  name="Clear" value="Clear" onClick={this.onClickCancel}/>
                        <input  style={{backgroundColor:'#EC7063',outline:'none',border:'none',fontSize:15,color:'white',float:'right',marginLeft:0,marginTop:30,width:50,height:50,marginRight:15,borderRadius:'70px',fontWeight:'bold',fontSize:20}} type="button"  name="x" value="*" onClick={this.onClickHandler}/>
                        <div style={{float:'left',display:'block',width:'21%',height:210,marginLeft:15,marginTop:0,backgroundColor:'white'}}>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:60,fontWeight:'bold'}} type="button"  name="7" value="7"  onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="8" value="8" onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="9" value="9" onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="0" value="0" onClick={this.onClickHandler}/>
                        </div>
                        <div style={{float:'left',display:'block',width:'22%',height:210,marginTop:0,backgroundColor:'white'}}>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:60,fontWeight:'bold'}} type="button"  name="4" value="4" onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="5" value="5" onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="6" value="6" onClick={this.onClickHandler}/>
                        <input  className="button" style={{fontSize:15,color:'black',outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="" value="" onClick={this.onClickHandler}/>
                        </div>
                        <div style={{float:'left',display:'block',width:'22%',height:210,marginLeft:0,marginTop:0,backgroundColor:'white'}}>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:60,fontWeight:'bold'}} type="button"  name="1" value="1" onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="2" value="2" onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="3" value="3" onClick={this.onClickHandler}/>
                        <input className="button" style={{fontSize:15,outline:'none',border:'none',float:'left',marginLeft:0,marginTop:0,width:60,height:40,marginRight:80,fontWeight:'bold'}} type="button"  name="." value="." onClick={this.onClickHandler}/>
                        </div>
                        <div style={{float:'left',display:'block',width:'22%',height:210,marginLeft:0,marginTop:0,backgroundColor:'#F7DC6F  '}}>
                        <input  style={{backgroundColor:'#D7BDE2  ',fontSize:17,color:'white',outline:'none',border:'none',float:'left',marginLeft:18,marginTop:3,width:50,height:50,marginRight:60,borderRadius:'70px',fontWeight:'bold'}} type="button"  name="/" value="/" onClick={this.onClickHandler} />
                        <input  style={{backgroundColor:'#2471A3  ',fontSize:17,color:'white',outline:'none',border:'none',float:'left',marginLeft:18,marginTop:3,width:50,height:50,marginRight:80,borderRadius:'70px',fontWeight:'bold'}} type="button"  name="+" value="+"  onClick={this.onClickHandler}/>
                        <input  style={{backgroundColor:'#F39C12  ',fontSize:17,color:'white',outline:'none',border:'none',float:'left',marginLeft:18,marginTop:3,width:50,height:50,marginRight:80,borderRadius:'70px',fontWeight:'bold'}} type="button"  name="-" value="-" onClick={this.onClickHandler}/>
                        <input  style={{backgroundColor:'#2ECC71',fontSize:17,color:'white',outline:'none',border:'none',float:'left',marginLeft:18,marginTop:3,width:50,height:50,marginRight:80,borderRadius:'70px',fontWeight:'bold'}} type="button"  name="=" value="=" onClick={this.onClickAnswer}/>
                        </div>
                    </div>
                         
        )
    }
}
export default Calculator;