import styled from 'styled-components';

const Styles = styled.div`

.container{
  margin-top: 5%;
}

form { max-width:420px; margin:50px auto; }

h3{
  border-bottom: 6px solid rgba(0, 46, 94) ;
  width: 20%;
  padding-bottom: 2px;
}

label{
  float: left;
}


.message-input {
  color:white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid rgba(0, 46, 94, 0.3);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}

.message-input:focus { 
  border:2px solid #CC4949; 
}

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}


button {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 40%;
  background:rgba(0, 46, 94, 0.3);
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:white;
  font-size:24px;
  padding-top:5px;
  padding-bottom:5px;
  transition: all 0.3s;
  margin-top:-4px;
}

button:hover { 
  background: rgba(0, 46, 94); 
}

`

export default Styles