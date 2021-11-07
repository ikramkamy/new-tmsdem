import react,{useState,useEffect} from 'react';

const Contactus=()=>{

const handelcontact=()=>{
    alert("Merci de nous avoir contacter :)")
}

const [input,setInput]=useState({
email:"",
phone:"",

})

    return(    <div className="formContactt">
    <h1>Contactez </h1>
    <h2> Nous</h2>


    <div className="formContactContainer">
        <div className="fieldContent">
            <div className="fieldLabelContent">
                <label> E-mail</label>
            </div>
            <div className="fieldInputContent">

                <form>
                    <input value={input.email} placeholder="EX: email@gmail.com" name="email"/>
                    
                </form>

            </div>
        </div>

        <div className="fieldContent">
            <div className="fieldLabelContent">
                <label> Télèphone </label>
            </div>
            <div className="fieldInputContent">

                <form>
                    <input value={input.phone} name="phone" placeholder="EX :+33632225599" />
                </form>

            </div>
        </div>


        <div className="fieldContent">
            <div className="fieldLabelContent">
                <label> Objet </label>
            </div>
            <div className="fieldInputContent">

                <form>
                    <input />
                </form>

            </div>
        </div>


        <div className="fieldContent">
            <div className="fieldLabelContent messageLabel">
                <label className="messageLabel"> Message </label>
            </div>
            <div className="fieldInputContent textFieldContent">

                <form>
                    <textarea />
                </form>
            </div>
        </div>




    </div>

    <div className="sendButton">

<div className="sendCotent">  
        <button onClick={handelcontact}> Envoyer</button>

        </div>
    </div>
</div>)
}
export default Contactus;