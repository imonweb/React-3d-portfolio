import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
`
const Title = styled.h1`
  
`
const Form = styled.form`
  
`
const Input = styled.input`
  
`
const TextArea = styled.textarea`
  
`
const Button = styled.button`
  
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
function Contact() {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" /> 
            <Input placeholder="Email" /> 
            <TextArea placeholder="Write your message" /> 
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Contact