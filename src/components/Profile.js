import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/profile.css'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg, Button } from 'reactstrap';

class Profile extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        fullname: null,
        email: null,
        age: null
      };
    }
    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  
    componentDidMount() {
      this.myProfile();
    }
  
    myProfile = () => {
      const config = {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }
    //   Axios.get("data/myprofile", config)
    //     .then((res) => {
    //       this.setState({fullname: res.data.fullname});
    //       this.setState({email: res.data.email});
    //       this.setState({age: res.data.age});
    //     })
    //     .catch((err) => {
    //       this.props.history.push('/login');
    //     })
    }
  
    render() {
  
      return (
        <div>
          <div className="dflex text-white bg-dark text-center height bg">
            <div className="container mx-auto p-3">
  
              <main className="px-3 main-profile">
                <div>
                  <h2 className="mb-4">User Profile</h2>
  
                  <div>
                    <Card className='cardTwo'>
                      <CardImg
                        alt="Card image cap"
                        src="https://www.nps.k12.nj.us/laf/wp-content/uploads/sites/77/bb-plugin/cache/istockphoto-1209654046-612x612-1-landscape.jpeg"
                        top
                        width="50%"
                      />
                      <CardBody className="profile-body">
                        <CardTitle tag="h3">
                          {this.state.fullname}
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 ageCard"
                          tag="h5"
                        >
                          Age : {this.state.age}
                        </CardSubtitle>
                        <CardSubtitle
                          className="mb-2 emailCard mt-2"
                          tag="h5"
                        >
                          Email : {this.state.email}
                        </CardSubtitle>
                        <CardText className="fw-dark mt-3 profile-text">
                          A gamer is a person who plays interactive games, especially video games, tabletop role-playing games, and skill-based card games, and who plays for usually long periods of time.
                        </CardText>
                        <Button color="secondary text-white" href='/edit-profile'>
                          Edit Profile
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </main>
  
              <footer className="mt-auto text-white-50">
                <p>
                  Full Stack Web Developer{' '}
                  <a href="#" className="text-white">
                    Rock, Paper and Scissor
                  </a>
                  , by{' '}
                  <a href="#" className="text-white">
                    @Kelompok2
                  </a>
                  .
                </p>
              </footer>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Profile;