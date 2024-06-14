import './mailList.css'
function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals for you</span>
        <div className="mailInputcontainer">
            <input type="text" placeholder='Your email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default MailList