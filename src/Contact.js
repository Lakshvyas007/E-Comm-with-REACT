import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    background-color: #d5ede2;
    padding: 9rem 0 5rem 0;
    text-align: center;


    .map{
      border-radius:3rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .common-heading{
      color: #0a5b55;
      text-shadow: 1rem 1rem 1rem #0a5b5625;
    }

    .container {
      margin-top: 5rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          
       input, textarea {
            border-radius: 15px;
            border: none;
            font-weight: 500;
          }

          input[type="submit"] {
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            -webkit-transition: all 0.3s ease 0s;
            -moz-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            background-color: #f1a726;
            border: 0;
            outline: none;
            color: #0a5b55;
            padding: 1.4rem 2.3rem;
            font-weight: bold;
            border-radius: 15px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
            max-width: auto;
            
    &:hover,
    &:active {
           transform: scale(0.96);
           box-shadow:0 2rem 2rem 0 rgba(0, 0, 0, 0.2);
           background-color: #0a5b55;
           cursor: pointer;
           color: #f1a726;
  }
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">CONTACT US</h2>

      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1015624420947!2d75.93345691483225!3d25.300791583848078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f971abc5bcbf9%3A0x2b6050c827bbc790!2sDharmendra%20Enterprises!5e0!3m2!1sen!2sin!4v1667193356671!5m2!1sen!2sin"
        width="98%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xrgdyvll"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="6"
              required
              autoComplete="off"
              placeholder="Enter your message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
