import styled from 'styled-components';


const Styles = styled.div`

.navbar-light .navbar-nav .nav-link {
    // color: #002e5e;
}

.navbar-light .navbar-brand {
    color: white;
}


nav{    
    text-align: center;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    padding: 0px 5%;
    color: white;
}

.nav-link{
    transition: 0.4s;
    text-decoration: none;
    padding: 10px 10px;
    margin: 0px 10px;
    color: #002e5e;
}

.nav-link:hover {
    background-color: #a9b7cc;
    border-radius: 3px;
    // padding: 10px;

}
`

export default Styles