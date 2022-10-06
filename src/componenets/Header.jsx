import vulture from '../assets/vulture.svg'
import Button from './Button'
export default function Header() {
  return (
    <header>
      <div className='topBox'>
        <img src={ vulture } className="logo"></img>
        <h1>SCHIDTTER</h1>
        <Button name='Logout' />
      </div>
      <div>
        <h3>Social Media Mayhem</h3>
        <p>As it never should be</p>
      </div>

  </header>
  
)

}
