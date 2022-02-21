import React, { Component } from 'react'
import '../../style/Newsletter.css'
import axios from 'axios';

export default class NewsletterForm extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            sent: false
        };
    }
    componentDidMount() { }
    handleFirstNameChange = (event) => {
        this.setState({ firstname: event.target.value });
    };

    handleLastNameChange = (event) => {
        this.setState({ lastname: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;

        axios.post('/newsletter/subscribe', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            }).catch(() => {
                console.log('Error : subscribe not done ');
            })
    };

    resetForm = () => {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }

    render() {
        return (
            <div>
            <div className='conatainrNewsletter'>

                <div className='nl-head-description'>
                    <h1>JOIN OUR NEWSLETTER</h1>
                    <span className='nl-span-heading-descrip'>Subscribe our newsletter to receive the latest news and exclusive offers every week. No spam.</span>
                </div>
                <form onSubmit={this.handleSubmit} >
                    <div className='nlForm' >
                        <div className='nl-row1'>
                            <div>
                                <span className='nl-span'>First name</span>
                                <input type='text'
                                    name="firstname"
                                    
                                    onChange={this.handleFirstNameChange}
                                    value={this.state.firstname}
                                />
                            </div>
                            <div>
                                <span className='nl-span'>Email ID</span>
                                <input type='email'
                                    name="email"
                                    onChange={this.handleEmailChange}
                                    value={this.state.email}
                                />
                            </div>
                        </div>

                        <div className='nl-row2'>
                            <div>
                                <span className='nl-span'>Last name</span>
                                <input type='text'
                                    name="lastname"
                                    onChange={this.handleLastNameChange}
                                    value={this.state.lastname}
                                />
                            </div>
                            <div >
                                <button type="submit" className='nl-button' >Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.sent ? 'msg msgAppear' : 'msg'}> subscribed successfully</div>
                </form>
                </div>
            </div>
        );
    }
}
