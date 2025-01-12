import React, {useState} from 'react'
import '../css/contactpage.css'
import logoImg from '../imgFolder/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const ContactPage = () => {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  const data = [
    {
      about: 'What is Storyline?',
      answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.'
    },
    {
      about: 'How much is a subscription?',
      answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.'
    },
    {
      about: 'Can I track my box?',
      answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.'
    },
    {
      about: 'Can I order from just the shop?',
      answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.'
    },
    {
      about: 'How to log in?',
      answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.'
    }
  ]

  return (
    <div className="contact-wrapper">
      <div className='accordion-wrapper'>
        <div className='accordion' id="faq">
          <h2>Common Questions</h2>
            {data.map((item, i)=>
              <div className='item'>
                <div className='title' onClick={() => toggle(i)}>
                  <h3>{item.about}</h3>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
              </div>
              )
            }
          </div>      
        </div>
        <div id="customer-service">
          <h2>Customer Support</h2>
          <div className='customer-service-container'>
            <div className='cs-child'><FontAwesomeIcon icon={faPhone} className='contact-icon' /><h3>Call us</h3><p>1-800-000-1234</p></div>
            <div className='cs-child'><FontAwesomeIcon icon={faEnvelope} className='contact-icon' /><h3>Email us</h3><p>storyline@email.com</p></div>
            <div className='cs-child'><FontAwesomeIcon icon={faLocationDot} className='contact-icon' /><h3>Visit us</h3><p>1198 Cambridge Place</p><p>Edgewood, MD</p></div>
          </div>
          </div>
        <img className='logo-img' alt='book-logo-image' src={logoImg} />
        <div id="tos">
          <h2>Terms of Service</h2>
          <p><b>OVERVIEW</b></p>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. At gravida sed class malesuada, volutpat hendrerit nascetur donec! Purus fringilla nisl nec varius nisl magnis. Fringilla aliquam semper rhoncus tempus purus vel curabitur. Est primis phasellus pulvinar erat euismod curae nunc? Rutrum a bibendum ad quisque mauris potenti nam aliquet.</p>
          <p>Platea ac litora orci odio malesuada condimentum. Efficitur volutpat sem venenatis convallis cras suscipit dignissim erat dapibus. Consequat eget natoque viverra; interdum turpis semper cursus augue. Ipsum habitasse scelerisque vehicula est elementum sociosqu nulla. In bibendum aptent potenti convallis tempus amet. Massa sodales consequat hendrerit consectetur, morbi id velit penatibus convallis. Adipiscing efficitur imperdiet purus felis himenaeos fermentum platea.</p>
          <p>Elementum ex sit ultrices primis; quam scelerisque. Arcu penatibus elementum netus praesent magnis odio blandit nisi. Ornare imperdiet lacus finibus fringilla diam dis. Potenti dignissim risus rutrum commodo pulvinar netus. Class cursus penatibus maximus consectetur, viverra vulputate. Sapien mauris a quam ridiculus vestibulum et quisque quis. Quis placerat tincidunt habitasse interdum, venenatis nunc ultricies parturient taciti. Penatibus natoque taciti congue, semper urna interdum natoque. Luctus aliquam metus cursus euismod maximus ornare felis sed gravida. Conubia dignissim platea porta orci bibendum netus.</p>
          <p>Metus fames non est quisque nunc mauris eleifend maximus. Tristique nisl integer duis mi lacus risus porttitor. Sit turpis scelerisque volutpat dapibus dictum urna viverra dui. Mattis mus dui velit; accumsan rutrum semper? Justo nostra porttitor eros enim mus ac cursus metus in. Mollis donec accumsan lobortis aptent pellentesque. Aenean massa placerat sed augue eros pulvinar tempus quam. Venenatis fermentum sem parturient laoreet vulputate ante erat.</p>
          <p>Aptent pulvinar rhoncus nam maecenas donec, integer curabitur. Condimentum mattis nunc cubilia aliquet nec nulla ornare. Purus nullam faucibus ante malesuada mi tempor eros. Fermentum tempor suspendisse bibendum efficitur fringilla sagittis lacinia consequat turpis. Congue maximus posuere diam viverra et nostra est. Interdum erat vehicula quis sollicitudin; sem aliquam. Tincidunt tortor fringilla molestie auctor facilisi vehicula euismod ac! Quis egestas nec lacus quisque natoque donec natoque auctor.</p>
          </div>
      </div>
  )
}

export default ContactPage