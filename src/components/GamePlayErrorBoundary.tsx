import React, { Component } from 'react'
import { Link } from "react-router-dom"


import styled from "styled-components";
import { ButtonPrimary } from '../common/styles';


const ErrorContainer = styled.div`
  padding:50px;
  text-align:center;
  min-height: 400px;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-top:50px;
  background:#fff;

  p {
    padding: 30px 0;
  }
`
  ;


const ErrorImage = styled.img`
  width: 200px;
  height: auto;
  margin-top: 50px;
`
  ;
class GamePlayErrorBoundary extends Component<any, any> {


  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      errorOccured: false,
      errorScreenShowing: false
    }

  }


  componentDidCatch(error: any, errorInfo: any) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  static getDerivedStateFromError(error: any) {
    return {
      errorOccured: true

    }
  }

  render() {

    if (this.state.errorOccured) {
      if (this.state.error) {
        console.log(this.state.error.message);
      } 
      return (
        <ErrorContainer>
          <h1>Hmmm, something went wrong!</h1>
          <div>
            <ErrorImage src="/assets/gif/error_occurred.gif" alt="cardi b pulling a face"></ErrorImage>
            <p>{this.state.error ? this.state.error.message : ""}</p>
          </div>

          <Link to="/">
            <ButtonPrimary>
              Home
          </ButtonPrimary>
          </Link>
        </ErrorContainer>
      )
    }
    return this.props.children
    //this refers to the component thats being rendered if there's no ish.
  }
}

export default GamePlayErrorBoundary